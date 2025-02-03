import{r as l}from"./index-ebeaab24.js";var ue={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=l,he=Symbol.for("react.element"),Se=Symbol.for("react.fragment"),ge=Object.prototype.hasOwnProperty,xe=_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ve={key:!0,ref:!0,__self:!0,__source:!0};function pe(e,n,r){var s,o={},a=null,u=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(u=n.ref);for(s in n)ge.call(n,s)&&!ve.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)o[s]===void 0&&(o[s]=n[s]);return{$$typeof:he,type:e,key:a,ref:u,props:o,_owner:xe.current}}x.Fragment=Se;x.jsx=pe;x.jsxs=pe;ue.exports=x;var t=ue.exports,fe=["ctrl","alt","meta","shift"],me="__0_1_2_3_4_5_6_7_8_9_a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z_ _`_'_\"_~_!_@_#_$_%_^_&_*_(_)_._-_+_=_[_]_{_}_<_>_,_/_?_;_:_\\_|_capslock_numlock_enter_tab_arrowdown_arrowleft_arrowright_arrowup_end_home_pagedown_pageup_backspace_delete_insert_escape_f1_f2_f3_f4_f5_f6_f7_f8_f9_f10_f11_f12_f13_f14_f15_f16_f17_f18_f19_f20_f21_f22_f23".split("_");me[1]="_";var I={};for(let[e,n]of me.entries())I[n]=e;var je={space:" ",plus:"+",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright",esc:"escape"},H=4,Ce=9,A=Ce+H,Te=2**H,be=2**A,Ie=2**(2*A),He=2**(3*A);function Ae(e){let n;return e==="+"?["+"]:(e.slice(-1)=="+"?(n=e.slice(0,-2).split("+"),n.push("+")):n=e.split("+"),n.map(r=>je[r]||r))}function Fe(e){let n=new Set(e),r=I[e[e.length-1].toLowerCase()]||0;for(let s of fe)r=2*r+(n.has(s)?1:0);return r}function N(e){return e>>H}function T(e){return e%Te}function we(e,n){if(e===void 0||N(e)>0)return!1;let r=T(e),s=T(n);return r===s&&N(n)===0?!1:(r&T(n))===r}function Ee(e){let n=I[e.key.toLowerCase()]||0;for(let r of fe)n=2*n+(e[`${r}Key`]?1:0);return n}function v(e){return e.map(Ae)}function j(e){if(e.length>4)throw"Can't encode sequence of more than 4 keys!";let n=0;for(let r of e)n=n*be+Fe(r);return n}function Ne(e){return e<be?1:e<Ie?2:e<He?3:4}function Oe(e){let n=[],r=0,s=0;for(let o=e.length-1;o>=0;o--)r=2**s*e[o]+r,s=s+13,n.push(r);return n}function Re(e={}){return{history:[],historySize:0,bindings:new Map,disabledSequenceCodes:new Set,...e}}function Le(e,n,r){let s=j(v(n));return e.bindings.has(s)||e.bindings.set(s,new Set),e.bindings.get(s).add(r),ye(e)}function Pe(e,n,r){let s=j(v(n)),o=e.bindings.get(s);return o&&(o.delete(r),o.size==0&&e.bindings.delete(s)),ye(e)}function Me(e,n){let r=j(v(n));return e.disabledSequenceCodes.delete(r),e}function Je(e,n){let r=j(v(n));return e.disabledSequenceCodes.add(r),e}function $e(e,n){let r=Ee(n),s=e.history.at(-1);return we(s,r)&&e.history.pop(),e.history.push(r),e.history.length>e.historySize&&e.history.shift(),e}function Be(e){let n=[];for(let r of Oe(e.history))e.disabledSequenceCodes.has(r)||n.push(...e.bindings.get(r)||[]);return n}function De(e,n){e=$e(e,n);let r=Be(e);for(let s of r)s(n);return[e,r]}function ye(e){e.historySize=0;for(let n of e.bindings.keys())e.historySize=Math.max(e.historySize,Ne(n));return e}var qe=class{constructor(e){this.state=e,this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.handle=this.handle.bind(this)}add(...e){let n=e.slice(0,-1),r=e.at(-1);return this.state=Le(this.state,n,r),this}remove(...e){let n=e.slice(0,-1),r=e.at(-1);return this.state=Pe(this.state,n,r),this}enable(...e){return this.state=Me(this.state,e),this}disable(...e){return this.state=Je(this.state,e),this}handle(e){let[n,r]=De(this.state,e);return this.state=n,r.length>0}};function C(){return new qe(Re())}let O=!1;const F=C(),w=C(),E=C(),ke=new Map;let d=[];const c=e=>Array.isArray(e)?e.map(n=>n.toLowerCase()):[e.toLowerCase()],ze=e=>n=>{const r=n.target,s=r.tagName==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(r.type);if(!(r.isContentEditable||(s||r.tagName==="TEXTAREA"||r.tagName==="SELECT")&&!r.readOnly))return e(n)},Ge=e=>{(!e.action||e.action==="keypress")&&F.add(...c(e.keys),e.callback),e.action==="keyup"&&w.add(...c(e.keys),e.callback),e.action==="keydown"&&E.add(...c(e.keys),e.callback)},Ke=e=>{(!e.action||e.action==="keypress")&&F.remove(...c(e.keys),e.callback),e.action==="keyup"&&w.remove(...c(e.keys),e.callback),e.action==="keydown"&&E.remove(...c(e.keys),e.callback)},Ue=e=>{var r,s,o;const n=C();n.add(...c(e.keys),e.callback),(s=(r=e.ref)==null?void 0:r.current)==null||s.addEventListener(e.action??"keypress",n.handle),ke.set((o=e.ref)==null?void 0:o.current,n)},Ye=e=>{var n,r,s,o;if((n=e.ref)!=null&&n.current&&!e.disabled){const a=ke.get((r=e.ref)==null?void 0:r.current);a==null||a.remove(...c(e.keys),e.callback),(o=(s=e.ref)==null?void 0:s.current)==null||o.removeEventListener(e.action??"keypress",a.handle)}},i=(e=[])=>{const[n,r]=l.useState([]);return l.useLayoutEffect(()=>{!O&&window!==void 0&&(window.addEventListener("keypress",F.handle),window.addEventListener("keyup",w.handle),window.addEventListener("keydown",E.handle),O=!0)},[]),l.useLayoutEffect(()=>(e.map(s=>{var o;s.disabled||(s.callback=ze(s.callback),(o=s.ref)!=null&&o.current?(Ue(s),d=[...d,s]):s.ref||(Ge(s),d=[...d,s]))}),()=>{e.map(s=>{Ye(s),Ke(s),d=d.filter(o=>s!==o)})}),[e]),l.useEffect(()=>{r(d)},[]),n},en={title:"Hotkeys"},p=()=>{const e=i([{name:"Simple",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},f=()=>{const e=i([{name:"Input",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A (shouldn't trigger if input is focused)",t.jsx("br",{}),t.jsx("input",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},m=()=>{const[e,n]=l.useState(!1),r=i([{name:"Disable",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed"),disabled:e}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx("button",{onClick:()=>n(!e),children:e?"Enable":"Disable"}),t.jsx("pre",{children:JSON.stringify(r.map(({ref:s,disabled:o,...a})=>a),null,2)})]})},b=()=>{const[e,n]=l.useState("blue"),r=i([{name:"Refs",keys:"SHIFT+A",callback:()=>{alert(`color: ${e}`)}}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),"Color: ",e,t.jsx("br",{}),t.jsx("button",{type:"button",onClick:()=>n("yellow"),children:"Change Color"}),t.jsx("pre",{children:JSON.stringify(r.map(({ref:s,...o})=>o),null,2)})]})},y=()=>{const e=i([{name:"Nested A",keys:["SHIFT+A"],callback:()=>alert("SHIFT + A pressed")},{name:"Nested B",keys:["META+B"],callback:()=>alert("META + B pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),"Press META + B",t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},We=()=>(i([{name:"Child",keys:["META+B"],callback:()=>alert("META + B (child)")}]),t.jsx("h1",{children:"Press META + B"})),k=()=>{const e=i([{name:"Parent",keys:["SHIFT+A"],callback:()=>alert("SHIFT + A (parent)")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx(We,{}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},_=()=>{const[e,n]=l.useState(0),r=l.useRef(null),s=l.useRef(null),o=i([{name:"Focus A",keys:["SHIFT+C"],callback:()=>alert(`first, counter: ${e}`),ref:r},{name:"Focus b",keys:["SHIFT+C"],callback:()=>alert(`second, counter: ${e}`),ref:s}]);return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:()=>n(a=>a-1),children:"-1"}),e,t.jsx("button",{type:"button",onClick:()=>n(a=>a+1),children:"+1"}),t.jsx("br",{}),t.jsx("span",{ref:r,tabIndex:-1,children:"focus me and press SHIFT+C"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{ref:s,tabIndex:-1,children:"focus me and press SHIFT+C"}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(o.map(({ref:a,...u})=>u),null,2)})]})},h=()=>{const e=i([{name:"Action",keys:["F"],callback:()=>alert("You've been promoted!"),action:"keyup"}]);return t.jsxs(t.Fragment,{children:[t.jsx("div",{children:'Press "f" to pay respects'}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},S=()=>{const e=l.useRef(null),[n,r]=l.useState(!1);return i([{name:"Asynchronous",keys:["L"],callback:()=>alert("Hey!"),action:"keyup",ref:e}]),l.useEffect(()=>{if(n)return;const s=setTimeout(()=>{r(!0)},3e3);return()=>clearTimeout(s)},[n]),t.jsxs("div",{children:[n?"Loaded":'Loading (pressing "L" is disabled until the element is shown and focused)...',t.jsx("br",{}),t.jsx("button",{type:"button",onClick:()=>r(!1),disabled:!n,children:"reload"}),t.jsx("br",{}),n&&t.jsx("div",{ref:e,tabIndex:-1,children:'Click me and press "l"'})]})},Xe=()=>{const[e,n]=l.useState(0);return i([{name:"Counter",keys:["G"],callback:()=>n(Math.random())}]),t.jsx("div",{children:t.jsxs("ol",{children:[t.jsxs("li",{children:['Press "g" to generate a random number: ',e]}),t.jsx("li",{children:'Open the modal, press "g" and close the modal'}),t.jsx("li",{children:'Press "g" once the modal is closed, it should generate random number'})]})})},Qe=({onClose:e})=>(i([{name:"ModalComponent",keys:["G"],callback:()=>alert("This shortcut is bound through the modal")}]),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"rgba(0,0,0,0.4)"},children:t.jsxs("div",{style:{padding:"10px",backgroundColor:"white"},children:[t.jsx("button",{type:"button",onClick:e,children:"Close Modal"}),t.jsx("br",{}),t.jsx("p",{children:"Press g"})]})})),Ve=()=>{const[e,n]=l.useState(!1);return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e&&t.jsx(Qe,{onClose:()=>n(!1)})]})},g=()=>{const e=i();return t.jsxs("div",{children:[t.jsx(Xe,{}),t.jsx(Ve,{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})};var R,L,P;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
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
}`,...(P=(L=p.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var M,J,$;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
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
}`,...($=(J=f.parameters)==null?void 0:J.docs)==null?void 0:$.source}}};var B,D,q;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`() => {
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
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var z,G,K;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(K=(G=b.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var U,Y,W;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(W=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var X,Q,V;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(V=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Z,ee,ne;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(ne=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ae,le;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ie,ce,de;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(de=(ce=g.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};export{h as Action,S as Asynchronous,m as Disable,_ as Focus,f as Input,g as Modal,y as Multiple,k as Nested,b as Refs,p as Simple,en as default};
//# sourceMappingURL=Hotkey.story-04ac2d92.js.map
