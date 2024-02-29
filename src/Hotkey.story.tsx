import React, { useEffect, useRef, useState } from 'react';
import { useHotkeys } from './useHotkeys';

export default {
  title: 'Hotkeys',
};

export const Simple = () => {
  const hotkeys = useHotkeys([{ name: 'Simple', keys: 'SHIFT+A', callback: () => alert('SHIFT + A pressed') }]);

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

export const Input = () => {
  const hotkeys = useHotkeys([{ name: 'Input', keys: 'SHIFT+A', callback: () => alert('SHIFT + A pressed') }]);

  return (
    <div>
      Press SHIFT + A (shouldn't trigger if input is focused)
      <br />
      <input />
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

export const Disable = () => {
  const [disabled, setDisabled] = useState<boolean>(false);

  const hotkeys = useHotkeys([{ name: 'Disable', keys: 'SHIFT+A', callback: () => alert('SHIFT + A pressed'), disabled }]);

  return (
    <div>
      Press SHIFT + A<br />
      <button onClick={() => setDisabled(!disabled)}>{!disabled ? 'Disable' : 'Enable'}</button>
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, disabled, ...rest }) => rest),
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
      name: 'Refs',
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
    { name: 'Nested A', keys: ['SHIFT+A'], callback: () => alert('SHIFT + A pressed') },
    { name: 'Nested B', keys: ['META+B'], callback: () => alert('META + B pressed') },
  ]);

  return (
    <div>
      Press SHIFT + A
      <br />
      Press META + B
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
  useHotkeys([{ name: 'Child', keys: ['META+B'], callback: () => alert('META + B (child)') }]);

  return <h1>Press META + B</h1>;
};

export const Nested = () => {
  const hotkeys = useHotkeys([{ name: 'Parent', keys: ['SHIFT+A'], callback: () => alert('SHIFT + A (parent)') }]);

  return (
    <div>
      Press SHIFT + A<br />
      <NestedComponent />
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
      name: 'Focus A',
      keys: ['SHIFT+C'],
      callback: () => alert(`first, counter: ${counter}`),
      ref: elmRef,
    },
    {
      name: 'Focus b',
      keys: ['SHIFT+C'],
      callback: () => alert(`second, counter: ${counter}`),
      ref: elmRef2,
    },
  ]);

  return (
    <div>
      <button type="button" onClick={() => setCounter((currentCounter) => currentCounter - 1)}>
        -1
      </button>
      {counter}
      <button type="button" onClick={() => setCounter((currentCounter) => currentCounter + 1)}>
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
      name: 'Action',
      keys: ['F'],
      callback: () => alert("You've been promoted!"),
      action: 'keyup',
    },
  ]);

  return (
    <>
      <div>Press "f" to pay respects</div>
      <br />
      <pre>
        {JSON.stringify(
          hotkeys.map(({ ref: element, ...rest }) => rest),
          null,
          2
        )}
      </pre>
    </>
  );
};

export const Asynchronous = () => {
  const elmRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  useHotkeys([
    {
      name: 'Asynchronous',
      keys: ['L'],
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
      {loaded ? 'Loaded' : 'Loading (pressing "L" is disabled until the element is shown and focused)...'}
      <br />
      <button type="button" onClick={() => setLoaded(false)} disabled={!loaded}>
        reload
      </button>
      <br />
      {loaded && (
        <div ref={elmRef} tabIndex={-1}>
          Click me and press &quot;l&quot;
        </div>
      )}
    </div>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);

  useHotkeys([
    {
      name: 'Counter',
      keys: ['G'],
      callback: () => setCounter(Math.random()),
    },
  ]);

  return (
    <div>
      <ol>
        <li>Press &quot;g&quot; to generate a random number: {counter}</li>
        <li>Open the modal, press &quot;g&quot; and close the modal</li>
        <li>Press &quot;g&quot; once the modal is closed, it should generate random number</li>
      </ol>
    </div>
  );
};

const ModalComponent = ({ onClose }: { onClose: () => void }) => {
  useHotkeys([
    {
      name: 'ModalComponent',
      keys: ['G'],
      callback: () => alert('This shortcut is bound through the modal'),
    },
  ]);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: `translate(-50%,-50%)`,
        backgroundColor: `rgba(0,0,0,0.4)`,
      }}
    >
      <div style={{ padding: '10px', backgroundColor: 'white' }}>
        <button type="button" onClick={onClose}>
          Close Modal
        </button>
        <br />
        <p>Press g</p>
      </div>
    </div>
  );
};

const ModalToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <ModalComponent onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export const Modal = () => {
  const hotkeys = useHotkeys();
  return (
    <div>
      <Counter />
      <ModalToggle />
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
