import{i as e,r as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./iframe-kA38YQIz.js";function i(e){let t;return e===`+`?[`+`]:(e.slice(-1)==`+`?(t=e.slice(0,-2).split(`+`),t.push(`+`)):t=e.split(`+`),t.map(e=>h[e]||e))}function a(e){let t=new Set(e),n=m[e[e.length-1].toLowerCase()]||0;for(let e of f)n=2*n+ +!!t.has(e);return n}function o(e){return e>>g}function s(e){return e%v}function ee(e,t){if(e===void 0||o(e)>0)return!1;let n=s(e);return n===s(t)&&o(t)===0?!1:(n&s(t))===n}function te(e){let t=m[e.key.toLowerCase()]||0;for(let n of f)t=2*t+ +!!e[`${n}Key`];return t}function c(e){return e.map(i)}function l(e){if(e.length>4)throw`Can't encode sequence of more than 4 keys!`;let t=0;for(let n of e)t=t*y+a(n);return t}function ne(e){return e<y?1:e<b?2:e<x?3:4}function re(e){let t=[],n=0,r=0;for(let i=e.length-1;i>=0;i--)n=2**r*e[i]+n,r+=13,t.push(n);return t}function ie(e={}){return{history:[],historySize:0,bindings:new Map,disabledSequenceCodes:new Set,...e}}function ae(e,t,n){let r=l(c(t));return e.bindings.has(r)||e.bindings.set(r,new Set),e.bindings.get(r).add(n),u(e)}function oe(e,t,n){let r=l(c(t)),i=e.bindings.get(r);return i&&(i.delete(n),i.size==0&&e.bindings.delete(r)),u(e)}function se(e,t){let n=l(c(t));return e.disabledSequenceCodes.delete(n),e}function ce(e,t){let n=l(c(t));return e.disabledSequenceCodes.add(n),e}function le(e,t){let n=te(t);return ee(e.history.at(-1),n)&&e.history.pop(),e.history.push(n),e.history.length>e.historySize&&e.history.shift(),e}function ue(e){let t=[];for(let n of re(e.history))e.disabledSequenceCodes.has(n)||t.push(...e.bindings.get(n)||[]);return t}function de(e,t){e=le(e,t);let n=ue(e);for(let e of n)e(t);return[e,n]}function u(e){e.historySize=0;for(let t of e.bindings.keys())e.historySize=Math.max(e.historySize,ne(t));return e}function d(){return new S(ie())}var f,p,m,h,g,_,v,y,b,x,S,fe=e((()=>{f=[`ctrl`,`alt`,`meta`,`shift`],p=`__0_1_2_3_4_5_6_7_8_9_a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z_ _\`_'_"_~_!_@_#_$_%_^_&_*_(_)_._-_+_=_[_]_{_}_<_>_,_/_?_;_:_\\_|_capslock_numlock_enter_tab_arrowdown_arrowleft_arrowright_arrowup_end_home_pagedown_pageup_backspace_delete_insert_escape_f1_f2_f3_f4_f5_f6_f7_f8_f9_f10_f11_f12_f13_f14_f15_f16_f17_f18_f19_f20_f21_f22_f23`.split(`_`),p[1]=`_`,m={};for(let[e,t]of p.entries())m[t]=e;h={space:` `,plus:`+`,up:`arrowup`,down:`arrowdown`,left:`arrowleft`,right:`arrowright`,esc:`escape`},g=4,_=9+g,v=2**g,y=2**_,b=2**(2*_),x=2**(3*_),S=class{constructor(e){this.state=e,this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.handle=this.handle.bind(this)}add(...e){let t=e.slice(0,-1),n=e.at(-1);return this.state=ae(this.state,t,n),this}remove(...e){let t=e.slice(0,-1),n=e.at(-1);return this.state=oe(this.state,t,n),this}enable(...e){return this.state=se(this.state,e),this}disable(...e){return this.state=ce(this.state,e),this}handle(e){let[t,n]=de(this.state,e);return this.state=t,n.length>0}}}));function pe(){try{return navigator.platform.toUpperCase().indexOf(`MAC`)>=0}catch{return!1}}function C(){return pe()?`⌘`:`CTRL`}function me(e){return e.toLowerCase().replace(`modifier`,C()).replace(`mod`,C()).replace(`shift`,`⇧`)}var w,he=e((()=>{C(),w=e=>t=>{t.key!=null&&e(t)}})),T,E,D,O,k,A,j,M,N,P,F,I,L,R,ge=e((()=>{T=n(r(),1),fe(),he(),E=!1,D=d(),O=d(),k=d(),A=new Map,j=[],M=e=>{let t=Array.isArray(e)?e.map(e=>e.toLowerCase()):[e.toLowerCase()],n=pe()?`meta`:`ctrl`;return t.map(e=>e.replace(`modifier`,n).replace(`mod`,n))},N=e=>t=>{let n=t.target,r=n.tagName===`INPUT`&&![`checkbox`,`radio`,`range`,`button`,`file`,`reset`,`submit`,`color`].includes(n.type);if(!(n.isContentEditable||(r||n.tagName===`TEXTAREA`||n.tagName===`SELECT`)&&!n.readOnly))return e(t)},P=e=>{(!e.action||e.action===`keypress`)&&D.add(...M(e.keys),e.callback),e.action===`keyup`&&O.add(...M(e.keys),e.callback),e.action===`keydown`&&k.add(...M(e.keys),e.callback)},F=e=>{(!e.action||e.action===`keypress`)&&D.remove(...M(e.keys),e.callback),e.action===`keyup`&&O.remove(...M(e.keys),e.callback),e.action===`keydown`&&k.remove(...M(e.keys),e.callback)},I=e=>{let t=d();t.add(...M(e.keys),e.callback);let n=w(t.handle);e.ref?.current?.addEventListener(e.action??`keypress`,n),A.set(e.ref?.current,{handler:t,listener:n})},L=e=>{if(e.ref?.current&&!e.disabled){let t=A.get(e.ref?.current);t?.handler.remove(...M(e.keys),e.callback),t&&e.ref?.current?.removeEventListener(e.action??`keypress`,t.listener)}},R=(e=[])=>{let[t,n]=(0,T.useState)([]);return(0,T.useLayoutEffect)(()=>{!E&&window!==void 0&&(window.addEventListener(`keypress`,w(D.handle)),window.addEventListener(`keyup`,w(O.handle)),window.addEventListener(`keydown`,w(k.handle)),E=!0)},[]),(0,T.useLayoutEffect)(()=>(e.map(e=>{e.disabled||(e.callback=N(e.callback),e.ref?.current?(I(e),j=[...j,e]):e.ref||(P(e),j=[...j,e]))}),()=>{e.map(e=>{L(e),F(e),j=j.filter(t=>e!==t)})}),[e]),(0,T.useEffect)(()=>{n(j)},[]),t}})),_e=t((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),ve=t(((e,t)=>{t.exports=_e()})),z,B,V,H,U,W,G,K,q,ye,J,Y,X,Z,be,xe,Q,$;e((()=>{z=n(r(),1),ge(),he(),B=ve(),V={title:`Hotkeys`},H=()=>{let e=R([{name:`Simple`,keys:`SHIFT+A`,callback:()=>alert(`SHIFT + A pressed`)}]);return(0,B.jsxs)(`div`,{children:[`Press SHIFT + A`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`pre`,{children:JSON.stringify(e.map(({ref:e,...t})=>t),null,2)})]})},U=()=>{let e=R([{name:`Input`,keys:`SHIFT+A`,callback:()=>alert(`SHIFT + A pressed`)}]);return(0,B.jsxs)(`div`,{children:[`Press SHIFT + A (shouldn't trigger if input is focused)`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`input`,{}),(0,B.jsx)(`pre`,{children:JSON.stringify(e.map(({ref:e,...t})=>t),null,2)})]})},W=()=>{let[e,t]=(0,z.useState)(!1),n=R([{name:`Disable`,keys:`SHIFT+A`,callback:()=>alert(`SHIFT + A pressed`),disabled:e}]);return(0,B.jsxs)(`div`,{children:[`Press SHIFT + A`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`button`,{onClick:()=>t(!e),children:e?`Enable`:`Disable`}),(0,B.jsx)(`pre`,{children:JSON.stringify(n.map(({ref:e,disabled:t,...n})=>n),null,2)})]})},G=()=>{let[e,t]=(0,z.useState)(`blue`),n=R([{name:`Refs`,keys:`SHIFT+A`,callback:()=>{alert(`color: ${e}`)}}]);return(0,B.jsxs)(`div`,{children:[`Press SHIFT + A`,(0,B.jsx)(`br`,{}),`Color: `,e,(0,B.jsx)(`br`,{}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>t(`yellow`),children:`Change Color`}),(0,B.jsx)(`pre`,{children:JSON.stringify(n.map(({ref:e,...t})=>t),null,2)})]})},K=()=>{let e=R([{name:`Nested A`,keys:[`SHIFT+A`],callback:()=>alert(`SHIFT + A pressed`)},{name:`Nested B`,keys:[`META+B`],callback:()=>alert(`META + B pressed`)},{name:`Nested F`,keys:[`META+F`],callback:()=>alert(`META + F pressed`)}]);return(0,B.jsxs)(`div`,{children:[`Press SHIFT + A`,(0,B.jsx)(`br`,{}),`Press META + B`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`pre`,{children:JSON.stringify(e.map(({ref:e,...t})=>t),null,2)})]})},q=()=>{let e=R([{name:`Mod + A`,keys:[`MOD+A`],action:`keydown`,callback:()=>alert(`Mod + A pressed`)},{name:`Mod + F`,keys:[`MOD+F`],action:`keydown`,callback:e=>{e?.preventDefault(),alert(`Mod + F pressed`)}}]);return(0,B.jsxs)(`div`,{children:[`Press `,me(`MOD+A`),(0,B.jsx)(`br`,{}),`Press `,me(`MOD+F`),(0,B.jsx)(`br`,{}),(0,B.jsx)(`pre`,{children:JSON.stringify(e.map(({ref:e,...t})=>t),null,2)})]})},ye=()=>(R([{name:`Child`,keys:[`META+B`],callback:()=>alert(`META + B (child)`)}]),(0,B.jsx)(`h1`,{children:`Press META + B`})),J=()=>{let e=R([{name:`Parent`,keys:[`SHIFT+A`],callback:()=>alert(`SHIFT + A (parent)`)}]);return(0,B.jsxs)(`div`,{children:[`Press SHIFT + A`,(0,B.jsx)(`br`,{}),(0,B.jsx)(ye,{}),(0,B.jsx)(`br`,{}),(0,B.jsx)(`pre`,{children:JSON.stringify(e.map(({ref:e,...t})=>t),null,2)})]})},Y=()=>{let[e,t]=(0,z.useState)(0),n=(0,z.useRef)(null),r=(0,z.useRef)(null),i=R([{name:`Focus A`,keys:[`SHIFT+C`],callback:()=>alert(`first, counter: ${e}`),ref:n},{name:`Focus b`,keys:[`SHIFT+C`],callback:()=>alert(`second, counter: ${e}`),ref:r}]);return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`button`,{type:`button`,onClick:()=>t(e=>e-1),children:`-1`}),e,(0,B.jsx)(`button`,{type:`button`,onClick:()=>t(e=>e+1),children:`+1`}),(0,B.jsx)(`br`,{}),(0,B.jsx)(`span`,{ref:n,tabIndex:-1,children:`focus me and press SHIFT+C`}),(0,B.jsx)(`br`,{}),(0,B.jsx)(`br`,{}),(0,B.jsx)(`span`,{ref:r,tabIndex:-1,children:`focus me and press SHIFT+C`}),(0,B.jsx)(`br`,{}),(0,B.jsx)(`pre`,{children:JSON.stringify(i.map(({ref:e,...t})=>t),null,2)})]})},X=()=>{let e=R([{name:`Action`,keys:[`F`],callback:()=>alert(`You've been promoted!`),action:`keyup`}]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(`div`,{children:`Press "f" to pay respects`}),(0,B.jsx)(`br`,{}),(0,B.jsx)(`pre`,{children:JSON.stringify(e.map(({ref:e,...t})=>t),null,2)})]})},Z=()=>{let e=(0,z.useRef)(null),[t,n]=(0,z.useState)(!1);return R([{name:`Asynchronous`,keys:[`L`],callback:()=>alert(`Hey!`),action:`keyup`,ref:e}]),(0,z.useEffect)(()=>{if(t)return;let e=setTimeout(()=>{n(!0)},3e3);return()=>clearTimeout(e)},[t]),(0,B.jsxs)(`div`,{children:[t?`Loaded`:`Loading (pressing "L" is disabled until the element is shown and focused)...`,(0,B.jsx)(`br`,{}),(0,B.jsx)(`button`,{type:`button`,onClick:()=>n(!1),disabled:!t,children:`reload`}),(0,B.jsx)(`br`,{}),t&&(0,B.jsx)(`div`,{ref:e,tabIndex:-1,children:`Click me and press "l"`})]})},be=()=>{let[e,t]=(0,z.useState)(0);return R([{name:`Counter`,keys:[`G`],callback:()=>t(Math.random())}]),(0,B.jsx)(`div`,{children:(0,B.jsxs)(`ol`,{children:[(0,B.jsxs)(`li`,{children:[`Press "g" to generate a random number: `,e]}),(0,B.jsx)(`li`,{children:`Open the modal, press "g" and close the modal`}),(0,B.jsx)(`li`,{children:`Press "g" once the modal is closed, it should generate random number`})]})})},xe=({onClose:e})=>(R([{name:`ModalComponent`,keys:[`G`],callback:()=>alert(`This shortcut is bound through the modal`)}]),(0,B.jsx)(`div`,{style:{position:`absolute`,top:`50%`,left:`50%`,transform:`translate(-50%,-50%)`,backgroundColor:`rgba(0,0,0,0.4)`},children:(0,B.jsxs)(`div`,{style:{padding:`10px`,backgroundColor:`white`},children:[(0,B.jsx)(`button`,{type:`button`,onClick:e,children:`Close Modal`}),(0,B.jsx)(`br`,{}),(0,B.jsx)(`p`,{children:`Press g`})]})})),Q=()=>{let[e,t]=(0,z.useState)(!1);return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(`button`,{type:`button`,onClick:()=>t(!0),children:`Open Modal`}),e&&(0,B.jsx)(xe,{onClose:()=>t(!1)})]})},$=()=>{let e=R();return(0,B.jsxs)(`div`,{children:[(0,B.jsx)(be,{}),(0,B.jsx)(Q,{}),(0,B.jsx)(`pre`,{children:JSON.stringify(e.map(({ref:e,...t})=>t),null,2)})]})},H.__docgenInfo={description:``,methods:[],displayName:`Simple`},U.__docgenInfo={description:``,methods:[],displayName:`Input`},W.__docgenInfo={description:``,methods:[],displayName:`Disable`},G.__docgenInfo={description:``,methods:[],displayName:`Refs`},K.__docgenInfo={description:``,methods:[],displayName:`Multiple`},q.__docgenInfo={description:``,methods:[],displayName:`ModifierAlias`},J.__docgenInfo={description:``,methods:[],displayName:`Nested`},Y.__docgenInfo={description:``,methods:[],displayName:`Focus`},X.__docgenInfo={description:``,methods:[],displayName:`Action`},Z.__docgenInfo={description:``,methods:[],displayName:`Asynchronous`},$.__docgenInfo={description:``,methods:[],displayName:`Modal`},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Simple',
    keys: 'SHIFT+A',
    callback: () => alert('SHIFT + A pressed')
  }]);
  return <div>
      Press SHIFT + A<br />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Input',
    keys: 'SHIFT+A',
    callback: () => alert('SHIFT + A pressed')
  }]);
  return <div>
      Press SHIFT + A (shouldn&apos;t trigger if input is focused)
      <br />
      <input />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`() => {
  const [disabled, setDisabled] = useState<boolean>(false);
  const hotkeys = useHotkeys([{
    name: 'Disable',
    keys: 'SHIFT+A',
    callback: () => alert('SHIFT + A pressed'),
    disabled
  }]);
  return <div>
      Press SHIFT + A<br />
      <button onClick={() => setDisabled(!disabled)}>{!disabled ? 'Disable' : 'Enable'}</button>
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        disabled,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`() => {
  const [color, setColor] = useState('blue');
  const hotkeys = useHotkeys([{
    name: 'Refs',
    keys: 'SHIFT+A',
    callback: () => {
      alert(\`color: \${color}\`);
    }
  }]);
  return <div>
      Press SHIFT + A<br />
      Color: {color}
      <br />
      <button type="button" onClick={() => setColor('yellow')}>
        Change Color
      </button>
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Nested A',
    keys: ['SHIFT+A'],
    callback: () => alert('SHIFT + A pressed')
  }, {
    name: 'Nested B',
    keys: ['META+B'],
    callback: () => alert('META + B pressed')
  }, {
    name: 'Nested F',
    keys: ['META+F'],
    callback: () => alert('META + F pressed')
  }]);
  return <div>
      Press SHIFT + A
      <br />
      Press META + B
      <br />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Mod + A',
    keys: ['MOD+A'],
    action: 'keydown',
    callback: () => alert('Mod + A pressed')
  }, {
    name: 'Mod + F',
    keys: ['MOD+F'],
    action: 'keydown',
    callback: event => {
      event?.preventDefault();
      alert('Mod + F pressed');
    }
  }]);
  return <div>
      Press {getHotkeyText('MOD+A')}
      <br />
      Press {getHotkeyText('MOD+F')}
      <br />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Parent',
    keys: ['SHIFT+A'],
    callback: () => alert('SHIFT + A (parent)')
  }]);
  return <div>
      Press SHIFT + A<br />
      <NestedComponent />
      <br />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`() => {
  const [counter, setCounter] = useState(0);
  const elmRef = useRef<any>(null);
  const elmRef2 = useRef<any>(null);
  const hotkeys = useHotkeys([{
    name: 'Focus A',
    keys: ['SHIFT+C'],
    callback: () => alert(\`first, counter: \${counter}\`),
    ref: elmRef
  }, {
    name: 'Focus b',
    keys: ['SHIFT+C'],
    callback: () => alert(\`second, counter: \${counter}\`),
    ref: elmRef2
  }]);
  return <div>
      <button type="button" onClick={() => setCounter(currentCounter => currentCounter - 1)}>
        -1
      </button>
      {counter}
      <button type="button" onClick={() => setCounter(currentCounter => currentCounter + 1)}>
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
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Action',
    keys: ['F'],
    callback: () => alert("You've been promoted!"),
    action: 'keyup'
  }]);
  return <>
      <div>Press &quot;f&quot; to pay respects</div>
      <br />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </>;
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`() => {
  const elmRef = useRef<HTMLDivElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  useHotkeys([{
    name: 'Asynchronous',
    keys: ['L'],
    callback: () => alert('Hey!'),
    action: 'keyup',
    ref: elmRef
  }]);
  useEffect(() => {
    if (loaded) {
      return;
    }
    const timeoutId = setTimeout(() => {
      setLoaded(true);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [loaded]);
  return <div>
      {loaded ? 'Loaded' : 'Loading (pressing "L" is disabled until the element is shown and focused)...'}
      <br />
      <button type="button" onClick={() => setLoaded(false)} disabled={!loaded}>
        reload
      </button>
      <br />
      {loaded && <div ref={elmRef} tabIndex={-1}>
          Click me and press &quot;l&quot;
        </div>}
    </div>;
}`,...Z.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys();
  return <div>
      <Counter />
      <ModalToggle />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...$.parameters?.docs?.source}}}}))();export{X as Action,Z as Asynchronous,W as Disable,Y as Focus,U as Input,$ as Modal,q as ModifierAlias,K as Multiple,J as Nested,G as Refs,H as Simple,V as default};