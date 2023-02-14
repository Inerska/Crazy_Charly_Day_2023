import{r as l,T as E}from"./app-6f609d89.js";var ye=Object.defineProperty,we=(e,t,n)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t,n)=>(we(e,typeof t!="symbol"?t+"":t,n),n);let Te=class{constructor(){J(this,"current",this.detect()),J(this,"handoffState","pending"),J(this,"currentId",0)}set(t){this.current!==t&&(this.handoffState="pending",this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},$=new Te,A=(e,t)=>{$.isServer?l.useEffect(e,t):l.useLayoutEffect(e,t)};function C(e){let t=l.useRef(e);return A(()=>{t.current=e},[e]),t}function Se(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function H(){let e=[],t=[],n={enqueue(r){t.push(r)},addEventListener(r,i,a,u){return r.addEventListener(i,a,u),n.add(()=>r.removeEventListener(i,a,u))},requestAnimationFrame(...r){let i=requestAnimationFrame(...r);return n.add(()=>cancelAnimationFrame(i))},nextFrame(...r){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))},setTimeout(...r){let i=setTimeout(...r);return n.add(()=>clearTimeout(i))},microTask(...r){let i={current:!0};return Se(()=>{i.current&&r[0]()}),n.add(()=>{i.current=!1})},add(r){return e.push(r),()=>{let i=e.indexOf(r);if(i>=0){let[a]=e.splice(i,1);a()}}},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of t.splice(0))await r()},style(r,i,a){let u=r.style.getPropertyValue(i);return Object.assign(r.style,{[i]:a}),this.add(()=>{Object.assign(r.style,{[i]:u})})}};return n}function ne(){let[e]=l.useState(H);return l.useEffect(()=>()=>e.dispose(),[e]),e}let j=function(e){let t=C(e);return E.useCallback((...n)=>t.current(...n),[t])};function re(){let[e,t]=l.useState($.isHandoffComplete);return e&&$.isHandoffComplete===!1&&t(!1),l.useEffect(()=>{e!==!0&&t(!0)},[e]),l.useEffect(()=>$.handoff(),[]),e}function y(e,t,...n){if(e in t){let i=t[e];return typeof i=="function"?i(...n):i}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(i=>`"${i}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,y),r}let ie=Symbol();function Ie(e,t=!0){return Object.assign(e,{[ie]:t})}function le(...e){let t=l.useRef(e);l.useEffect(()=>{t.current=e},[e]);let n=j(r=>{for(let i of t.current)i!=null&&(typeof i=="function"?i(r):i.current=r)});return e.every(r=>r==null||(r==null?void 0:r[ie]))?void 0:n}function se(...e){return e.filter(Boolean).join(" ")}var oe=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(oe||{}),T=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(T||{});function ue({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:i,visible:a=!0,name:u}){let f=ae(t,e);if(a)return k(f,n,r,u);let o=i??0;if(o&2){let{static:c=!1,...d}=f;if(c)return k(d,n,r,u)}if(o&1){let{unmount:c=!0,...d}=f;return y(c?0:1,{[0](){return null},[1](){return k({...d,hidden:!0,style:{display:"none"}},n,r,u)}})}return k(f,n,r,u)}function k(e,t={},n,r){var i;let{as:a=n,children:u,refName:f="ref",...o}=Q(e,["unmount","static"]),c=e.ref!==void 0?{[f]:e.ref}:{},d=typeof u=="function"?u(t):u;o.className&&typeof o.className=="function"&&(o.className=o.className(t));let b={};if(t){let v=!1,m=[];for(let[s,h]of Object.entries(t))typeof h=="boolean"&&(v=!0),h===!0&&m.push(s);v&&(b["data-headlessui-state"]=m.join(" "))}if(a===l.Fragment&&Object.keys(ee(o)).length>0){if(!l.isValidElement(d)||Array.isArray(d)&&d.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));let v=se((i=d.props)==null?void 0:i.className,o.className),m=v?{className:v}:{};return l.cloneElement(d,Object.assign({},ae(d.props,ee(Q(o,["ref"]))),b,c,Fe(d.ref,c.ref),m))}return l.createElement(a,Object.assign({},Q(o,["ref"]),a!==l.Fragment&&c,a!==l.Fragment&&b),d)}function Fe(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function ae(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let i in r)i.startsWith("on")&&typeof r[i]=="function"?(n[i]!=null||(n[i]=[]),n[i].push(r[i])):t[i]=r[i];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](i,...a){let u=n[r];for(let f of u){if((i instanceof Event||(i==null?void 0:i.nativeEvent)instanceof Event)&&i.defaultPrevented)return;f(i,...a)}}});return t}function _(e){var t;return Object.assign(l.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function ee(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Q(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}let z=l.createContext(null);z.displayName="OpenClosedContext";var P=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(P||{});function ce(){return l.useContext(z)}function Oe({value:e,children:t}){return E.createElement(z.Provider,{value:e},t)}function fe(){let e=l.useRef(!1);return A(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function je(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function W(e,...t){e&&t.length>0&&e.classList.add(...t)}function X(e,...t){e&&t.length>0&&e.classList.remove(...t)}function Ce(e,t){let n=H();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[a,u]=[r,i].map(f=>{let[o=0]=f.split(",").filter(Boolean).map(c=>c.includes("ms")?parseFloat(c):parseFloat(c)*1e3).sort((c,d)=>d-c);return o});if(a+u!==0){let f=n.addEventListener(e,"transitionend",o=>{o.target===o.currentTarget&&(t(),f())})}else t();return n.add(()=>t()),n.dispose}function $e(e,t,n,r){let i=n?"enter":"leave",a=H(),u=r!==void 0?je(r):()=>{};i==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let f=y(i,{enter:()=>t.enter,leave:()=>t.leave}),o=y(i,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),c=y(i,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return X(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),W(e,...f,...c),a.nextFrame(()=>{X(e,...c),W(e,...o),Ce(e,()=>(X(e,...f),W(e,...t.entered),u()))}),a.dispose}function Pe({container:e,direction:t,classes:n,onStart:r,onStop:i}){let a=fe(),u=ne(),f=C(t);A(()=>{let o=H();u.add(o.dispose);let c=e.current;if(c&&f.current!=="idle"&&a.current)return o.dispose(),r.current(f.current),o.add($e(c,n.current,f.current==="enter",()=>{o.dispose(),i.current(f.current)})),o.dispose},[t])}function O(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let q=l.createContext(null);q.displayName="TransitionContext";var xe=(e=>(e.Visible="visible",e.Hidden="hidden",e))(xe||{});function Re(){let e=l.useContext(q);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function Ne(){let e=l.useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=l.createContext(null);M.displayName="NestingContext";function D(e){return"children"in e?D(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function de(e,t){let n=C(e),r=l.useRef([]),i=fe(),a=ne(),u=j((m,s=T.Hidden)=>{let h=r.current.findIndex(({el:p})=>p===m);h!==-1&&(y(s,{[T.Unmount](){r.current.splice(h,1)},[T.Hidden](){r.current[h].state="hidden"}}),a.microTask(()=>{var p;!D(r)&&i.current&&((p=n.current)==null||p.call(n))}))}),f=j(m=>{let s=r.current.find(({el:h})=>h===m);return s?s.state!=="visible"&&(s.state="visible"):r.current.push({el:m,state:"visible"}),()=>u(m,T.Unmount)}),o=l.useRef([]),c=l.useRef(Promise.resolve()),d=l.useRef({enter:[],leave:[],idle:[]}),b=j((m,s,h)=>{o.current.splice(0),t&&(t.chains.current[s]=t.chains.current[s].filter(([p])=>p!==m)),t==null||t.chains.current[s].push([m,new Promise(p=>{o.current.push(p)})]),t==null||t.chains.current[s].push([m,new Promise(p=>{Promise.all(d.current[s].map(([g,w])=>w)).then(()=>p())})]),s==="enter"?c.current=c.current.then(()=>t==null?void 0:t.wait.current).then(()=>h(s)):h(s)}),v=j((m,s,h)=>{Promise.all(d.current[s].splice(0).map(([p,g])=>g)).then(()=>{var p;(p=o.current.shift())==null||p()}).then(()=>h(s))});return l.useMemo(()=>({children:r,register:f,unregister:u,onStart:b,onStop:v,wait:c,chains:d}),[f,u,r,b,v,d,c])}function Le(){}let ke=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function te(e){var t;let n={};for(let r of ke)n[r]=(t=e[r])!=null?t:Le;return n}function Ae(e){let t=l.useRef(te(e));return l.useEffect(()=>{t.current=te(e)},[e]),t}let He="div",me=oe.RenderStrategy,pe=_(function(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:a,enter:u,enterFrom:f,enterTo:o,entered:c,leave:d,leaveFrom:b,leaveTo:v,...m}=e,s=l.useRef(null),h=le(s,t),p=m.unmount?T.Unmount:T.Hidden,{show:g,appear:w,initial:he}=Re(),[S,I]=l.useState(g?"visible":"hidden"),Z=Ne(),{register:x,unregister:R}=Z,U=l.useRef(null);l.useEffect(()=>x(s),[x,s]),l.useEffect(()=>{if(p===T.Hidden&&s.current){if(g&&S!=="visible"){I("visible");return}return y(S,{hidden:()=>R(s),visible:()=>x(s)})}},[S,s,x,R,g,p]);let V=C({enter:O(u),enterFrom:O(f),enterTo:O(o),entered:O(c),leave:O(d),leaveFrom:O(b),leaveTo:O(v)}),N=Ae({beforeEnter:n,afterEnter:r,beforeLeave:i,afterLeave:a}),B=re();l.useEffect(()=>{if(B&&S==="visible"&&s.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[s,S,B]);let K=he&&!w,ve=(()=>!B||K||U.current===g?"idle":g?"enter":"leave")(),ge=j(F=>y(F,{enter:()=>N.current.beforeEnter(),leave:()=>N.current.beforeLeave(),idle:()=>{}})),be=j(F=>y(F,{enter:()=>N.current.afterEnter(),leave:()=>N.current.afterLeave(),idle:()=>{}})),L=de(()=>{I("hidden"),R(s)},Z);Pe({container:s,classes:V,direction:ve,onStart:C(F=>{L.onStart(s,F,ge)}),onStop:C(F=>{L.onStop(s,F,be),F==="leave"&&!D(L)&&(I("hidden"),R(s))})}),l.useEffect(()=>{!K||(p===T.Hidden?U.current=null:U.current=g)},[g,K,S]);let G=m,Ee={ref:h};return w&&g&&$.isServer&&(G={...G,className:se(m.className,...V.current.enter,...V.current.enterFrom)}),E.createElement(M.Provider,{value:L},E.createElement(Oe,{value:y(S,{visible:P.Open,hidden:P.Closed})},ue({ourProps:Ee,theirProps:G,defaultTag:He,features:me,visible:S==="visible",name:"Transition.Child"})))}),Y=_(function(e,t){let{show:n,appear:r=!1,unmount:i,...a}=e,u=l.useRef(null),f=le(u,t);re();let o=ce();if(n===void 0&&o!==null&&(n=y(o,{[P.Open]:!0,[P.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[c,d]=l.useState(n?"visible":"hidden"),b=de(()=>{d("hidden")}),[v,m]=l.useState(!0),s=l.useRef([n]);A(()=>{v!==!1&&s.current[s.current.length-1]!==n&&(s.current.push(n),m(!1))},[s,n]);let h=l.useMemo(()=>({show:n,appear:r,initial:v}),[n,r,v]);l.useEffect(()=>{if(n)d("visible");else if(!D(b))d("hidden");else{let g=u.current;if(!g)return;let w=g.getBoundingClientRect();w.x===0&&w.y===0&&w.width===0&&w.height===0&&d("hidden")}},[n,b]);let p={unmount:i};return E.createElement(M.Provider,{value:b},E.createElement(q.Provider,{value:h},ue({ourProps:{...p,as:l.Fragment,children:E.createElement(pe,{ref:f,...p,...a})},theirProps:{},defaultTag:l.Fragment,features:me,visible:c==="visible",name:"Transition"})))}),qe=_(function(e,t){let n=l.useContext(q)!==null,r=ce()!==null;return E.createElement(E.Fragment,null,!n&&r?E.createElement(Y,{ref:t,...e}):E.createElement(pe,{ref:t,...e}))}),Ue=Object.assign(Y,{Child:qe,Root:Y});export{Ue as K,Ie as T,_ as V,ue as X,A as a,C as b,ce as c,P as d,fe as f,oe as j,re as l,H as m,j as o,ne as p,$ as s,Se as t,y as u,le as y};