import{K as h,l as x,r as l,j as d,P as j,i as o,cf as I,aD as v,cI as B,B as E,b5 as H,aE as k,bl as y}from"./desk-eb7b3548-3b8198dc.js";import{useDeskTool as C}from"./index-66ec8894-16658762.js";import"./index-e2b0309d.js";var u;function O(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}function g(t){const{actionHandlers:e,index:s,menuItems:n,menuItemGroups:r,title:i}=t,{features:a}=C();return!(n!=null&&n.length)&&!i?null:o(v,{actions:o(B,{menuItems:n,menuItemGroups:r,actionHandlers:e}),backButton:a.backButton&&s>0&&o(E,{as:H,"data-as":"a",icon:k,mode:"bleed"}),title:i})}const L=h(x)(u||(u=O([`
  position: relative;
`])));function T(t){const{children:e}=t,{collapsed:s}=y();return o(L,{hidden:s,height:"fill",overflow:"auto",children:e})}function D(t){const{index:e,pane:s,paneKey:n,...r}=t,{child:i,component:a,menuItems:m,menuItemGroups:p,title:f="",type:U,...P}=s,[c,b]=l.useState(null);return d(j,{id:n,minWidth:320,selected:r.isSelected,children:[o(g,{actionHandlers:c==null?void 0:c.actionHandlers,index:e,menuItems:m,menuItemGroups:p,title:f}),d(T,{children:[I.isValidElementType(a)&&l.createElement(a,{...r,...P,ref:b,child:i,paneKey:n}),l.isValidElement(a)&&a]})]})}export{D as default};