import React, { useEffect, useRef, useState } from 'react';
import { useHotkeys } from './useHotkeys';

export default {
  title: 'Hotkeys',
};

export const Simple = () => {
  const hotkeys = useHotkeys([
    { name: 'Test', keys: 'SHIFT+A', callback: () => alert('holla') },
  ]);

  return (
    <div>
      Press SHIFT + A<br />
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export const Refs = () => {
  const [color, setColor] = useState('blue');

  const hotkeys = useHotkeys([
    {
      name: 'Test',
      keys: 'SHIFT+A',
      callback: () => {
        alert(`color: ${color}`);
      },
    },
  ]);

  return (
    <div>
      Press SHIFT + A<br />
      Color: {color}
      <br />
      <button type="button" onClick={() => setColor('yellow')}>
        Change Color
      </button>
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export const Multiple = () => {
  const hotkeys = useHotkeys([
    { name: 'Test', keys: 'SHIFT+A', callback: () => alert('holla') },
  ]);

  useHotkeys([
    { name: 'Test 2', keys: 'mod+b', callback: () => alert('baller') },
  ]);

  return (
    <div>
      Press SHIFT + A<br />
      Press MOD + b<br />
      <br />
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};

const NestedComponent = () => {
  useHotkeys([
    { name: 'Test 2', keys: 'mod+b', callback: () => alert('baller') },
  ]);

  return <h1>Press MOD + b</h1>;
};

export const Nested = () => {
  const hotkeys = useHotkeys([
    { name: 'Test', keys: 'SHIFT+A', callback: () => alert('holla') },
  ]);

  return (
    <div>
      Press SHIFT + A<br />
      <NestedComponent />
      <br />
      <br />
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export const Focus = () => {
  const [counter, setCounter] = useState(0);
  const elmRef = useRef<any>(null);
  const elmRef2 = useRef<any>(null);

  const hotkeys = useHotkeys([
    {
      name: 'Test 3',
      keys: 'SHIFT+C',
      callback: () => alert(`first, counter: ${counter}`),
      ref: elmRef,
    },
  ]);

  useHotkeys([
    {
      name: 'Test 3',
      keys: 'SHIFT+C',
      callback: () => alert(`second, counter: ${counter}`),
      ref: elmRef2,
    },
  ]);

  return (
    <div>
      <button
        type="button"
        onClick={() => setCounter((currentCounter) => currentCounter - 1)}
      >
        -1
      </button>
      {counter}
      <button
        type="button"
        onClick={() => setCounter((currentCounter) => currentCounter + 1)}
      >
        +1
      </button>
      <br />
      <span ref={elmRef} tabIndex={-1}>
        focus me and press SHIFT+C
      </span>
      <br />
      <br />
      <span ref={elmRef2} tabIndex={-1}>
        focus me and press SHIFT+C
      </span>
      <br />
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export const Action = () => {
  const hotkeys = useHotkeys([
    {
      name: 'Pay respects',
      keys: 'f',
      callback: (e) => alert("You've been promoted!"),
      action: 'keyup',
    },
  ]);

  return (
    <div>
      Press f to pay respects
      <br />
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};

export const Asynchronous = () => {
  const elmRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const hotkeys = useHotkeys([
    {
      name: 'Loaded',
      keys: 'l',
      callback: () => alert('Hey!'),
      action: 'keyup',
      ref: elmRef,
    },
  ]);

  useEffect(() => {
    if (loaded) {
      return;
    }

    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, [loaded]);

  return (
    <div>
      {loaded
        ? 'Loaded'
        : 'Loading (pressing "l" is disabled until the element is shown and focused)...'}
      <button type="button" onClick={() => setLoaded(false)} disabled={!loaded}>
        reload
      </button>
      <br />
      {loaded && (
        <div ref={elmRef} tabIndex={-1}>
          Click me and press "l"
        </div>
      )}
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </div>
  );
};
