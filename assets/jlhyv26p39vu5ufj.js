import{a as m,e as u,r as h,c as x,j as e,ac as f}from"./lklglvrzltpv3f05.js";import{dN as g,dO as p,cU as S,dP as b,dQ as v,dR as j,O as N,dS as z,dT as G}from"./fn5bn67vlrtkutmt.js";import{dW as I,o as C,aw as E,a$ as L,cE as w,bg as A}from"./dr5q0mnwgdiuy1ac.js";import{G as y}from"./pazn8rkwcoqz0ouv.js";import"./cuav3gl4u7ecbt92.js";import"./gvzs5psd5zlducxo.js";function M({isNewConversation:a}){const i=m(),s=u(),t=I(),[r,n]=h.useState(!1),l=x(),c=C();let o;return c==null?null:(c.canInteractWithGizmos()?o=j:o=l.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"}),e.jsx("div",{className:E(t?"":"bg-token-sidebar-surface-primary","pt-0"),children:e.jsx(e.Fragment,{children:e.jsx(f.div,{whileTap:{scale:.98},onMouseEnter:()=>{n(!0)},onMouseLeave:()=>{n(!1)},children:e.jsx(g,{loggingGizmoId:"primary",href:"/",isHovered:r,onClick:d=>{L(w(i))&&!a&&(d.preventDefault(),p(s))},icon:e.jsx(S,{isFirstParty:!0,className:"h-6 w-6"}),isMenuOpen:!1,label:o,hoverRightIcon:e.jsx("div",{className:"flex gap-2",children:e.jsx(A,{side:"right",label:l.formatMessage(b.newChat),className:"flex items-center",children:e.jsx("button",{className:"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:e.jsx(v,{className:"icon-md"})})})})})})})}))}function P({currentGizmoId:a}){const i=N(),{data:{gizmos:s}={}}=z();let t=s;return i&&(t=s?.filter(r=>!G(r.resource))),e.jsxs(e.Fragment,{children:[e.jsx(M,{isNewConversation:!0}),e.jsx(y,{gizmo:t??[],currentGizmoId:a,maxToShowOnLoad:7})]})}export{M as DefaultGPTSidebarListItem,P as GizmoSidebarList,y as GizmoSidebarListContent};
//# sourceMappingURL=jlhyv26p39vu5ufj.js.map