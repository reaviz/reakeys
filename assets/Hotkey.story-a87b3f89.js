import{r as c}from"./index-ebeaab24.js";var fe={exports:{}},$={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=c,he=Symbol.for("react.element"),xe=Symbol.for("react.fragment"),Se=Object.prototype.hasOwnProperty,$e=_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ge={key:!0,ref:!0,__self:!0,__source:!0};function ue(e,n,r){var s,o={},a=null,f=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(f=n.ref);for(s in n)Se.call(n,s)&&!ge.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)o[s]===void 0&&(o[s]=n[s]);return{$$typeof:he,type:e,key:a,ref:f,props:o,_owner:$e.current}}$.Fragment=xe;$.jsx=ue;$.jsxs=ue;fe.exports=$;var t=fe.exports;const pe=["ctrl","alt","meta","shift"],be="__0_1_2_3_4_5_6_7_8_9_a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z_ _`_'_\"_~_!_@_#_$_%_^_&_*_(_)_._-_+_=_[_]_{_}_<_>_,_/_?_;_:_\\_|_capslock_numlock_enter_tab_arrowdown_arrowleft_arrowright_arrowup_end_home_pagedown_pageup_backspace_delete_insert_escape_f1_f2_f3_f4_f5_f6_f7_f8_f9_f10_f11_f12_f13_f14_f15_f16_f17_f18_f19_f20_f21_f22_f23".split("_");be[1]="_";const v={};for(const[e,n]of be.entries())v[n]=e;const Ce={space:" ",plus:"+",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright",esc:"escape"},H=4,je=9,I=je+H,Te=2**H,me=2**I,ve=2**(2*I),He=2**(3*I);function Ie(e){let n;return e==="+"?["+"]:(e.slice(-1)=="+"?(n=e.slice(0,-2).split("+"),n.push("+")):n=e.split("+"),n.map(r=>Ce[r]||r))}function Ae(e){const n=new Set(e);let r=v[e[e.length-1].toLowerCase()]||0;for(const s of pe)r=2*r+(n.has(s)?1:0);return r}function E(e){return e>>H}function T(e){return e%Te}function Fe(e,n){if(e===void 0||E(e)>0)return!1;const r=T(e),s=T(n);return r===s&&E(n)===0?!1:(r&T(n))===r}function we(e){let n=v[e.key.toLowerCase()]||0;for(const r of pe)n=2*n+(e[`${r}Key`]?1:0);return n}function g(e){return e.map(Ie)}function C(e){if(e.length>4)throw"Can't encode sequence of more than 4 keys!";let n=0;for(const r of e)n=n*me+Ae(r);return n}function Ee(e){return e<me?1:e<ve?2:e<He?3:4}function Ne(e){const n=[];let r=0,s=0;for(let o=e.length-1;o>=0;o--)r=2**s*e[o]+r,s=s+13,n.push(r);return n}function Oe(e={}){return{history:[],historySize:0,bindings:new Map,disabledSequenceCodes:new Set,...e}}function Re(e,n,r){const s=C(g(n));return e.bindings.has(s)||e.bindings.set(s,new Set),e.bindings.get(s).add(r),ye(e)}function Le(e,n,r){const s=C(g(n)),o=e.bindings.get(s);return o&&(o.delete(r),o.size==0&&e.bindings.delete(s)),ye(e)}function Pe(e,n){const r=C(g(n));return e.disabledSequenceCodes.delete(r),e}function Me(e,n){const r=C(g(n));return e.disabledSequenceCodes.add(r),e}function Je(e,n){const r=we(n),s=e.history.at(-1);return Fe(s,r)&&e.history.pop(),e.history.push(r),e.history.length>e.historySize&&e.history.shift(),e}function Be(e){const n=[];for(const r of Ne(e.history))e.disabledSequenceCodes.has(r)||n.push(...e.bindings.get(r)||[]);return n}function qe(e,n){e=Je(e,n);const r=Be(e);for(const s of r)s(n);return[e,r]}function ye(e){e.historySize=0;for(const n of e.bindings.keys())e.historySize=Math.max(e.historySize,Ee(n));return e}class De{add(...n){const r=n.slice(0,-1),s=n.at(-1);return this.state=Re(this.state,r,s),this}remove(...n){const r=n.slice(0,-1),s=n.at(-1);return this.state=Le(this.state,r,s),this}enable(...n){return this.state=Pe(this.state,n),this}disable(...n){return this.state=Me(this.state,n),this}handle(n){const[r,s]=qe(this.state,n);return this.state=r,s.length>0}constructor(n){this.state=n,this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.handle=this.handle.bind(this)}}function j(){return new De(Oe())}let N=!1;const A=j(),F=j(),w=j(),ke=new Map;let d=[];const i=e=>Array.isArray(e)?e.map(n=>n.toLowerCase()):[e.toLowerCase()],Ge=e=>n=>{const r=n.target,s=r.tagName==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(r.type);if(!(r.isContentEditable||(s||r.tagName==="TEXTAREA"||r.tagName==="SELECT")&&!r.readOnly))return e(n)},ze=e=>{(!e.action||e.action==="keypress")&&A.add(...i(e.keys),e.callback),e.action==="keyup"&&F.add(...i(e.keys),e.callback),e.action==="keydown"&&w.add(...i(e.keys),e.callback)},Ue=e=>{(!e.action||e.action==="keypress")&&A.remove(...i(e.keys),e.callback),e.action==="keyup"&&F.remove(...i(e.keys),e.callback),e.action==="keydown"&&w.remove(...i(e.keys),e.callback)},Ye=e=>{var r,s,o;const n=j();n.add(...i(e.keys),e.callback),(s=(r=e.ref)==null?void 0:r.current)==null||s.addEventListener(e.action??"keypress",n.handle),ke.set((o=e.ref)==null?void 0:o.current,n)},We=e=>{var n,r,s,o;if((n=e.ref)!=null&&n.current&&!e.disabled){const a=ke.get((r=e.ref)==null?void 0:r.current);a==null||a.remove(...i(e.keys),e.callback),(o=(s=e.ref)==null?void 0:s.current)==null||o.removeEventListener(e.action??"keypress",a.handle)}},l=(e=[])=>{const[n,r]=c.useState([]);return c.useLayoutEffect(()=>{!N&&window!==void 0&&(window.addEventListener("keypress",A.handle),window.addEventListener("keyup",F.handle),window.addEventListener("keydown",w.handle),N=!0)},[]),c.useLayoutEffect(()=>(e.map(s=>{var o;s.disabled||(s.callback=Ge(s.callback),(o=s.ref)!=null&&o.current?(Ye(s),d=[...d,s]):s.ref||(ze(s),d=[...d,s]))}),()=>{e.map(s=>{We(s),Ue(s),d=d.filter(o=>s!==o)})}),[e]),c.useEffect(()=>{r(d)},[]),n},en={title:"Hotkeys"},u=()=>{const e=l([{name:"Simple",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},p=()=>{const e=l([{name:"Input",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A (shouldn't trigger if input is focused)",t.jsx("br",{}),t.jsx("input",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},b=()=>{const[e,n]=c.useState(!1),r=l([{name:"Disable",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed"),disabled:e}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx("button",{onClick:()=>n(!e),children:e?"Enable":"Disable"}),t.jsx("pre",{children:JSON.stringify(r.map(({ref:s,disabled:o,...a})=>a),null,2)})]})},m=()=>{const[e,n]=c.useState("blue"),r=l([{name:"Refs",keys:"SHIFT+A",callback:()=>{alert(`color: ${e}`)}}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),"Color: ",e,t.jsx("br",{}),t.jsx("button",{type:"button",onClick:()=>n("yellow"),children:"Change Color"}),t.jsx("pre",{children:JSON.stringify(r.map(({ref:s,...o})=>o),null,2)})]})},y=()=>{const e=l([{name:"Nested A",keys:["SHIFT+A"],callback:()=>alert("SHIFT + A pressed")},{name:"Nested B",keys:["META+B"],callback:()=>alert("META + B pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),"Press META + B",t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},Xe=()=>(l([{name:"Child",keys:["META+B"],callback:()=>alert("META + B (child)")}]),t.jsx("h1",{children:"Press META + B"})),k=()=>{const e=l([{name:"Parent",keys:["SHIFT+A"],callback:()=>alert("SHIFT + A (parent)")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx(Xe,{}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},_=()=>{const[e,n]=c.useState(0),r=c.useRef(null),s=c.useRef(null),o=l([{name:"Focus A",keys:["SHIFT+C"],callback:()=>alert(`first, counter: ${e}`),ref:r},{name:"Focus b",keys:["SHIFT+C"],callback:()=>alert(`second, counter: ${e}`),ref:s}]);return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:()=>n(a=>a-1),children:"-1"}),e,t.jsx("button",{type:"button",onClick:()=>n(a=>a+1),children:"+1"}),t.jsx("br",{}),t.jsx("span",{ref:r,tabIndex:-1,children:"focus me and press SHIFT+C"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{ref:s,tabIndex:-1,children:"focus me and press SHIFT+C"}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(o.map(({ref:a,...f})=>f),null,2)})]})},h=()=>{const e=l([{name:"Action",keys:["F"],callback:()=>alert("You've been promoted!"),action:"keyup"}]);return t.jsxs(t.Fragment,{children:[t.jsx("div",{children:'Press "f" to pay respects'}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},x=()=>{const e=c.useRef(null),[n,r]=c.useState(!1);return l([{name:"Asynchronous",keys:["L"],callback:()=>alert("Hey!"),action:"keyup",ref:e}]),c.useEffect(()=>{if(n)return;const s=setTimeout(()=>{r(!0)},3e3);return()=>clearTimeout(s)},[n]),t.jsxs("div",{children:[n?"Loaded":'Loading (pressing "L" is disabled until the element is shown and focused)...',t.jsx("br",{}),t.jsx("button",{type:"button",onClick:()=>r(!1),disabled:!n,children:"reload"}),t.jsx("br",{}),n&&t.jsx("div",{ref:e,tabIndex:-1,children:'Click me and press "l"'})]})},Qe=()=>{const[e,n]=c.useState(0);return l([{name:"Counter",keys:["G"],callback:()=>n(Math.random())}]),t.jsx("div",{children:t.jsxs("ol",{children:[t.jsxs("li",{children:['Press "g" to generate a random number: ',e]}),t.jsx("li",{children:'Open the modal, press "g" and close the modal'}),t.jsx("li",{children:'Press "g" once the modal is closed, it should generate random number'})]})})},Ve=({onClose:e})=>(l([{name:"ModalComponent",keys:["G"],callback:()=>alert("This shortcut is bound through the modal")}]),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"rgba(0,0,0,0.4)"},children:t.jsxs("div",{style:{padding:"10px",backgroundColor:"white"},children:[t.jsx("button",{type:"button",onClick:e,children:"Close Modal"}),t.jsx("br",{}),t.jsx("p",{children:"Press g"})]})})),Ze=()=>{const[e,n]=c.useState(!1);return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e&&t.jsx(Ve,{onClose:()=>n(!1)})]})},S=()=>{const e=l();return t.jsxs("div",{children:[t.jsx(Qe,{}),t.jsx(Ze,{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})};var O,R,L;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => {
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
}`,...(L=(R=u.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var P,M,J;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Input',
    keys: 'SHIFT+A',
    callback: () => alert('SHIFT + A pressed')
  }]);
  return <div>
      Press SHIFT + A (shouldn't trigger if input is focused)
      <br />
      <input />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </div>;
}`,...(J=(M=p.parameters)==null?void 0:M.docs)==null?void 0:J.source}}};var B,q,D;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(D=(q=b.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var G,z,U;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`() => {
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
}`,...(U=(z=m.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var Y,W,X;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Nested A',
    keys: ['SHIFT+A'],
    callback: () => alert('SHIFT + A pressed')
  }, {
    name: 'Nested B',
    keys: ['META+B'],
    callback: () => alert('META + B pressed')
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
}`,...(X=(W=y.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};var Q,V,Z;k.parameters={...k.parameters,docs:{...(Q=k.parameters)==null?void 0:Q.docs,source:{originalSource:`() => {
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
}`,...(Z=(V=k.parameters)==null?void 0:V.docs)==null?void 0:Z.source}}};var K,ee,ne;_.parameters={..._.parameters,docs:{...(K=_.parameters)==null?void 0:K.docs,source:{originalSource:`() => {
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
}`,...(ne=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,se,te;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
  const hotkeys = useHotkeys([{
    name: 'Action',
    keys: ['F'],
    callback: () => alert("You've been promoted!"),
    action: 'keyup'
  }]);
  return <>
      <div>Press "f" to pay respects</div>
      <br />
      <pre>
        {JSON.stringify(hotkeys.map(({
        ref: element,
        ...rest
      }) => rest), null, 2)}
      </pre>
    </>;
}`,...(te=(se=h.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var oe,ae,ce;x.parameters={...x.parameters,docs:{...(oe=x.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(ce=(ae=x.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var le,ie,de;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`() => {
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
}`,...(de=(ie=S.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};export{h as Action,x as Asynchronous,b as Disable,_ as Focus,p as Input,S as Modal,y as Multiple,k as Nested,m as Refs,u as Simple,en as default};
//# sourceMappingURL=Hotkey.story-a87b3f89.js.map
