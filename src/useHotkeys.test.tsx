// Regression tests: useHotkeys must keep exactly ONE live handler per shortcut
// across React lifecycles (mount, StrictMode, re-render, remount). Guards the
// add/remove symmetry of the global ctrl-keys handlers — a broken cleanup or a
// double registration makes callbacks fire twice per keypress (see the
// environment-level variant of this bug in storybookjs/storybook#33584).
import React, { StrictMode, useState } from 'react';
import { createRoot, Root } from 'react-dom/client';
import { act } from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { useHotkeys } from './useHotkeys';

(globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

function press() {
  window.dispatchEvent(new KeyboardEvent('keypress', { key: 'A', shiftKey: true, bubbles: true }));
}

let container: HTMLDivElement;
let root: Root;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(async () => {
  await act(async () => root.unmount());
  container.remove();
});

function Comp({ cb, tick }: { cb: () => void; tick?: number }) {
  useHotkeys([{ name: 'T', keys: 'SHIFT+A', callback: cb }]);
  return <div data-tick={tick}>t</div>;
}

describe('useHotkeys handler registration', () => {
  it('plain mount fires once', async () => {
    const cb = vi.fn();
    await act(async () => root.render(<Comp cb={cb} />));
    press();
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('StrictMode mount fires once', async () => {
    const cb = vi.fn();
    await act(async () => {
      root.render(
        <StrictMode>
          <Comp cb={cb} />
        </StrictMode>,
      );
    });
    press();
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('re-render fires once', async () => {
    const cb = vi.fn();
    await act(async () => root.render(<Comp cb={cb} tick={1} />));
    await act(async () => root.render(<Comp cb={cb} tick={2} />));
    press();
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('StrictMode + re-render fires once', async () => {
    const cb = vi.fn();
    await act(async () => {
      root.render(
        <StrictMode>
          <Comp cb={cb} tick={1} />
        </StrictMode>,
      );
    });
    await act(async () => {
      root.render(
        <StrictMode>
          <Comp cb={cb} tick={2} />
        </StrictMode>,
      );
    });
    press();
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('mount/unmount/mount fires once', async () => {
    const cb = vi.fn();
    await act(async () => root.render(<Comp cb={cb} />));
    await act(async () => root.unmount());
    root = createRoot(container);
    await act(async () => root.render(<Comp cb={cb} />));
    press();
    expect(cb).toHaveBeenCalledTimes(1);
  });

  it('state update inside component fires once', async () => {
    const cb = vi.fn();
    function Stateful() {
      const [n, setN] = useState(0);
      useHotkeys([{ name: 'S', keys: 'SHIFT+A', callback: cb }]);
      return (
        <button type="button" onClick={() => setN((x) => x + 1)}>
          {n}
        </button>
      );
    }
    await act(async () => root.render(<Stateful />));
    await act(async () => container.querySelector('button')!.click());
    await act(async () => container.querySelector('button')!.click());
    press();
    expect(cb).toHaveBeenCalledTimes(1);
  });
});
