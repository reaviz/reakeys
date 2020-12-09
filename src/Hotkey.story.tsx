import React, { useRef, useState } from 'react';
import { useHotkeys } from './useHotkeys';

export default {
  title: 'Hotkeys'
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
      }
    }
  ]);

  return (
    <div>
      Press SHIFT + A<br />
      Color: {color}<br />
      <button type="button" onClick={() => setColor('yellow')}>Change Color</button>
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
      <NestedComponent /><br />
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
  const elmRef = useRef<any>(null);
  const elmRef2 = useRef<any>(null);

  const hotkeys = useHotkeys([
    {
      name: 'Test 3',
      keys: 'SHIFT+C',
      callback: () => alert('first'),
      ref: elmRef,
    },
  ]);

  useHotkeys([
    {
      name: 'Test 3',
      keys: 'SHIFT+C',
      callback: () => alert('second'),
      ref: elmRef2,
    },
  ]);

  return (
    <div>
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
