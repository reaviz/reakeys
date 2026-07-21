import { describe, expect, it, vi } from 'vitest';

import { ignoreKeylessEvents } from './utils';

describe('ignoreKeylessEvents', () => {
  it('ignores key events that carry no key, instead of crashing downstream', () => {
    const handle = vi.fn();
    const guarded = ignoreKeylessEvents(handle);

    // Shape dispatched by some browser extensions / password managers; the
    // underlying handler would otherwise do `event.key.toLowerCase()` and throw.
    guarded({ key: undefined } as unknown as KeyboardEvent);
    guarded({} as unknown as KeyboardEvent);

    expect(handle).not.toHaveBeenCalled();
  });

  it('forwards real key events to the wrapped handler', () => {
    const handle = vi.fn();
    const guarded = ignoreKeylessEvents(handle);
    const event = { key: 'k' } as KeyboardEvent;

    guarded(event);

    expect(handle).toHaveBeenCalledTimes(1);
    expect(handle).toHaveBeenCalledWith(event);
  });
});
