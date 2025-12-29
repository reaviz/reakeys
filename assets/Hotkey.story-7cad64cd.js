import{r as l}from"./index-ebeaab24.js";var ke={exports:{}},v={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ae=l,je=Symbol.for("react.element"),Ce=Symbol.for("react.fragment"),Fe=Object.prototype.hasOwnProperty,He=Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ie={key:!0,ref:!0,__self:!0,__source:!0};function he(e,n,r){var s,o={},a=null,u=null;r!==void 0&&(a=""+r),n.key!==void 0&&(a=""+n.key),n.ref!==void 0&&(u=n.ref);for(s in n)Fe.call(n,s)&&!Ie.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps,n)o[s]===void 0&&(o[s]=n[s]);return{$$typeof:je,type:e,key:a,ref:u,props:o,_owner:He.current}}v.Fragment=Ce;v.jsx=he;v.jsxs=he;ke.exports=v;var t=ke.exports,_e=["ctrl","alt","meta","shift"],Se="__0_1_2_3_4_5_6_7_8_9_a_b_c_d_e_f_g_h_i_j_k_l_m_n_o_p_q_r_s_t_u_v_w_x_y_z_ _`_'_\"_~_!_@_#_$_%_^_&_*_(_)_._-_+_=_[_]_{_}_<_>_,_/_?_;_:_\\_|_capslock_numlock_enter_tab_arrowdown_arrowleft_arrowright_arrowup_end_home_pagedown_pageup_backspace_delete_insert_escape_f1_f2_f3_f4_f5_f6_f7_f8_f9_f10_f11_f12_f13_f14_f15_f16_f17_f18_f19_f20_f21_f22_f23".split("_");Se[1]="_";var H={};for(let[e,n]of Se.entries())H[n]=e;var we={space:" ",plus:"+",up:"arrowup",down:"arrowdown",left:"arrowleft",right:"arrowright",esc:"escape"},I=4,Me=9,w=Me+I,Oe=2**I,ge=2**w,Ee=2**(2*w),Ne=2**(3*w);function Re(e){let n;return e==="+"?["+"]:(e.slice(-1)=="+"?(n=e.slice(0,-2).split("+"),n.push("+")):n=e.split("+"),n.map(r=>we[r]||r))}function Pe(e){let n=new Set(e),r=H[e[e.length-1].toLowerCase()]||0;for(let s of _e)r=2*r+(n.has(s)?1:0);return r}function N(e){return e>>I}function C(e){return e%Oe}function Le(e,n){if(e===void 0||N(e)>0)return!1;let r=C(e),s=C(n);return r===s&&N(n)===0?!1:(r&C(n))===r}function De(e){let n=H[e.key.toLowerCase()]||0;for(let r of _e)n=2*n+(e[`${r}Key`]?1:0);return n}function T(e){return e.map(Re)}function A(e){if(e.length>4)throw"Can't encode sequence of more than 4 keys!";let n=0;for(let r of e)n=n*ge+Pe(r);return n}function Je(e){return e<ge?1:e<Ee?2:e<Ne?3:4}function $e(e){let n=[],r=0,s=0;for(let o=e.length-1;o>=0;o--)r=2**s*e[o]+r,s=s+13,n.push(r);return n}function Be(e={}){return{history:[],historySize:0,bindings:new Map,disabledSequenceCodes:new Set,...e}}function qe(e,n,r){let s=A(T(n));return e.bindings.has(s)||e.bindings.set(s,new Set),e.bindings.get(s).add(r),xe(e)}function ze(e,n,r){let s=A(T(n)),o=e.bindings.get(s);return o&&(o.delete(r),o.size==0&&e.bindings.delete(s)),xe(e)}function Ge(e,n){let r=A(T(n));return e.disabledSequenceCodes.delete(r),e}function Ke(e,n){let r=A(T(n));return e.disabledSequenceCodes.add(r),e}function Ue(e,n){let r=De(n),s=e.history.at(-1);return Le(s,r)&&e.history.pop(),e.history.push(r),e.history.length>e.historySize&&e.history.shift(),e}function Ye(e){let n=[];for(let r of $e(e.history))e.disabledSequenceCodes.has(r)||n.push(...e.bindings.get(r)||[]);return n}function We(e,n){e=Ue(e,n);let r=Ye(e);for(let s of r)s(n);return[e,r]}function xe(e){e.historySize=0;for(let n of e.bindings.keys())e.historySize=Math.max(e.historySize,Je(n));return e}var Xe=class{constructor(e){this.state=e,this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.handle=this.handle.bind(this)}add(...e){let n=e.slice(0,-1),r=e.at(-1);return this.state=qe(this.state,n,r),this}remove(...e){let n=e.slice(0,-1),r=e.at(-1);return this.state=ze(this.state,n,r),this}enable(...e){return this.state=Ge(this.state,e),this}disable(...e){return this.state=Ke(this.state,e),this}handle(e){let[n,r]=We(this.state,e);return this.state=n,r.length>0}};function j(){return new Xe(Be())}function ve(){try{return navigator.platform.toUpperCase().indexOf("MAC")>=0}catch{return!1}}function F(){return ve()?"⌘":"CTRL"}F();function R(e){return e.toLowerCase().replace("modifier",F()).replace("mod",F()).replace("shift","⇧")}let P=!1;const M=j(),O=j(),E=j(),Te=new Map;let d=[];const c=e=>{const n=Array.isArray(e)?e.map(s=>s.toLowerCase()):[e.toLowerCase()],r=ve()?"meta":"ctrl";return n.map(s=>s.replace("modifier",r).replace("mod",r))},Qe=e=>n=>{const r=n.target,s=r.tagName==="INPUT"&&!["checkbox","radio","range","button","file","reset","submit","color"].includes(r.type);if(!(r.isContentEditable||(s||r.tagName==="TEXTAREA"||r.tagName==="SELECT")&&!r.readOnly))return e(n)},Ve=e=>{(!e.action||e.action==="keypress")&&M.add(...c(e.keys),e.callback),e.action==="keyup"&&O.add(...c(e.keys),e.callback),e.action==="keydown"&&E.add(...c(e.keys),e.callback)},Ze=e=>{(!e.action||e.action==="keypress")&&M.remove(...c(e.keys),e.callback),e.action==="keyup"&&O.remove(...c(e.keys),e.callback),e.action==="keydown"&&E.remove(...c(e.keys),e.callback)},en=e=>{var r,s,o;const n=j();n.add(...c(e.keys),e.callback),(s=(r=e.ref)==null?void 0:r.current)==null||s.addEventListener(e.action??"keypress",n.handle),Te.set((o=e.ref)==null?void 0:o.current,n)},nn=e=>{var n,r,s,o;if((n=e.ref)!=null&&n.current&&!e.disabled){const a=Te.get((r=e.ref)==null?void 0:r.current);a==null||a.remove(...c(e.keys),e.callback),(o=(s=e.ref)==null?void 0:s.current)==null||o.removeEventListener(e.action??"keypress",a.handle)}},i=(e=[])=>{const[n,r]=l.useState([]);return l.useLayoutEffect(()=>{!P&&window!==void 0&&(window.addEventListener("keypress",M.handle),window.addEventListener("keyup",O.handle),window.addEventListener("keydown",E.handle),P=!0)},[]),l.useLayoutEffect(()=>(e.map(s=>{var o;s.disabled||(s.callback=Qe(s.callback),(o=s.ref)!=null&&o.current?(en(s),d=[...d,s]):s.ref||(Ve(s),d=[...d,s]))}),()=>{e.map(s=>{nn(s),Ze(s),d=d.filter(o=>s!==o)})}),[e]),l.useEffect(()=>{r(d)},[]),n},ln={title:"Hotkeys"},p=()=>{const e=i([{name:"Simple",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},f=()=>{const e=i([{name:"Input",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A (shouldn't trigger if input is focused)",t.jsx("br",{}),t.jsx("input",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},m=()=>{const[e,n]=l.useState(!1),r=i([{name:"Disable",keys:"SHIFT+A",callback:()=>alert("SHIFT + A pressed"),disabled:e}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx("button",{onClick:()=>n(!e),children:e?"Enable":"Disable"}),t.jsx("pre",{children:JSON.stringify(r.map(({ref:s,disabled:o,...a})=>a),null,2)})]})},y=()=>{const[e,n]=l.useState("blue"),r=i([{name:"Refs",keys:"SHIFT+A",callback:()=>{alert(`color: ${e}`)}}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),"Color: ",e,t.jsx("br",{}),t.jsx("button",{type:"button",onClick:()=>n("yellow"),children:"Change Color"}),t.jsx("pre",{children:JSON.stringify(r.map(({ref:s,...o})=>o),null,2)})]})},b=()=>{const e=i([{name:"Nested A",keys:["SHIFT+A"],callback:()=>alert("SHIFT + A pressed")},{name:"Nested B",keys:["META+B"],callback:()=>alert("META + B pressed")},{name:"Nested F",keys:["META+F"],callback:()=>alert("META + F pressed")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),"Press META + B",t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},k=()=>{const e=i([{name:"Mod + A",keys:["MOD+A"],action:"keydown",callback:()=>alert("Mod + A pressed")},{name:"Mod + F",keys:["MOD+F"],action:"keydown",callback:n=>{n==null||n.preventDefault(),alert("Mod + F pressed")}}]);return t.jsxs("div",{children:["Press ",R("MOD+A"),t.jsx("br",{}),"Press ",R("MOD+F"),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},rn=()=>(i([{name:"Child",keys:["META+B"],callback:()=>alert("META + B (child)")}]),t.jsx("h1",{children:"Press META + B"})),h=()=>{const e=i([{name:"Parent",keys:["SHIFT+A"],callback:()=>alert("SHIFT + A (parent)")}]);return t.jsxs("div",{children:["Press SHIFT + A",t.jsx("br",{}),t.jsx(rn,{}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},_=()=>{const[e,n]=l.useState(0),r=l.useRef(null),s=l.useRef(null),o=i([{name:"Focus A",keys:["SHIFT+C"],callback:()=>alert(`first, counter: ${e}`),ref:r},{name:"Focus b",keys:["SHIFT+C"],callback:()=>alert(`second, counter: ${e}`),ref:s}]);return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:()=>n(a=>a-1),children:"-1"}),e,t.jsx("button",{type:"button",onClick:()=>n(a=>a+1),children:"+1"}),t.jsx("br",{}),t.jsx("span",{ref:r,tabIndex:-1,children:"focus me and press SHIFT+C"}),t.jsx("br",{}),t.jsx("br",{}),t.jsx("span",{ref:s,tabIndex:-1,children:"focus me and press SHIFT+C"}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(o.map(({ref:a,...u})=>u),null,2)})]})},S=()=>{const e=i([{name:"Action",keys:["F"],callback:()=>alert("You've been promoted!"),action:"keyup"}]);return t.jsxs(t.Fragment,{children:[t.jsx("div",{children:'Press "f" to pay respects'}),t.jsx("br",{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})},g=()=>{const e=l.useRef(null),[n,r]=l.useState(!1);return i([{name:"Asynchronous",keys:["L"],callback:()=>alert("Hey!"),action:"keyup",ref:e}]),l.useEffect(()=>{if(n)return;const s=setTimeout(()=>{r(!0)},3e3);return()=>clearTimeout(s)},[n]),t.jsxs("div",{children:[n?"Loaded":'Loading (pressing "L" is disabled until the element is shown and focused)...',t.jsx("br",{}),t.jsx("button",{type:"button",onClick:()=>r(!1),disabled:!n,children:"reload"}),t.jsx("br",{}),n&&t.jsx("div",{ref:e,tabIndex:-1,children:'Click me and press "l"'})]})},tn=()=>{const[e,n]=l.useState(0);return i([{name:"Counter",keys:["G"],callback:()=>n(Math.random())}]),t.jsx("div",{children:t.jsxs("ol",{children:[t.jsxs("li",{children:['Press "g" to generate a random number: ',e]}),t.jsx("li",{children:'Open the modal, press "g" and close the modal'}),t.jsx("li",{children:'Press "g" once the modal is closed, it should generate random number'})]})})},sn=({onClose:e})=>(i([{name:"ModalComponent",keys:["G"],callback:()=>alert("This shortcut is bound through the modal")}]),t.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",backgroundColor:"rgba(0,0,0,0.4)"},children:t.jsxs("div",{style:{padding:"10px",backgroundColor:"white"},children:[t.jsx("button",{type:"button",onClick:e,children:"Close Modal"}),t.jsx("br",{}),t.jsx("p",{children:"Press g"})]})})),on=()=>{const[e,n]=l.useState(!1);return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:()=>n(!0),children:"Open Modal"}),e&&t.jsx(sn,{onClose:()=>n(!1)})]})},x=()=>{const e=i();return t.jsxs("div",{children:[t.jsx(tn,{}),t.jsx(on,{}),t.jsx("pre",{children:JSON.stringify(e.map(({ref:n,...r})=>r),null,2)})]})};var L,D,J;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`() => {
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
}`,...(J=(D=p.parameters)==null?void 0:D.docs)==null?void 0:J.source}}};var $,B,q;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`() => {
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
}`,...(q=(B=f.parameters)==null?void 0:B.docs)==null?void 0:q.source}}};var z,G,K;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`() => {
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
}`,...(K=(G=m.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var U,Y,W;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`() => {
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
}`,...(W=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:W.source}}};var X,Q,V;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`() => {
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
}`,...(V=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var Z,ee,ne;k.parameters={...k.parameters,docs:{...(Z=k.parameters)==null?void 0:Z.docs,source:{originalSource:`() => {
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
}`,...(ne=(ee=k.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var re,te,se;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`() => {
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
}`,...(se=(te=h.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var oe,ae,le;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`() => {
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
}`,...(le=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:le.source}}};var ie,ce,de;S.parameters={...S.parameters,docs:{...(ie=S.parameters)==null?void 0:ie.docs,source:{originalSource:`() => {
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
}`,...(de=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:de.source}}};var ue,pe,fe;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`() => {
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
}`,...(fe=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var me,ye,be;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`() => {
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
}`,...(be=(ye=x.parameters)==null?void 0:ye.docs)==null?void 0:be.source}}};export{S as Action,g as Asynchronous,m as Disable,_ as Focus,f as Input,x as Modal,k as ModifierAlias,b as Multiple,h as Nested,y as Refs,p as Simple,ln as default};
//# sourceMappingURL=Hotkey.story-7cad64cd.js.map
