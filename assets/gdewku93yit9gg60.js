const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ds1vr51izhknzwrt.js","assets/lklglvrzltpv3f05.js","assets/dr5q0mnwgdiuy1ac.js","assets/root-fllmzfn1.css","assets/fn5bn67vlrtkutmt.js","assets/conversation-small-bez2bigx.css"])))=>i.map(i=>d[i]);
import{aw as g,F as T,bS as E,D as R,f as N,aV as P,aW as F,az as f,P as z,h as w,bO as U,ch as O,e1 as B,bE as I,aX as q,q as b,bk as H,c9 as W,cA as $,br as M,u as k,bf as d}from"./dr5q0mnwgdiuy1ac.js";import{j as e,r as G,M as n,c as K,u as C,ac as V,L as J}from"./lklglvrzltpv3f05.js";import{cU as Y,bV as X,cW as Z,fd as Q,aW as ee,fe as se,aZ as S,d$ as te,z as ae,A as v,aS as ie,dx as _,bO as re,cB as oe,ff as ne,fg as A,U as le,fc as L}from"./fn5bn67vlrtkutmt.js";import{G as ce}from"./fbu84jjzpk28uqob.js";import{S as de}from"./eoh3qcov0jni3wda.js";function me({resource:s,grayedOut:t,className:a}){const r=s.gizmo.vanity_metrics?.num_conversations_str;return e.jsxs("div",{className:g("flex w-full flex-grow items-center gap-4 overflow-hidden",a),children:[e.jsx(Y,{isFirstParty:!!s.gizmo.tags?.includes(X.FirstParty),src:s.gizmo.display.profile_picture_url??void 0,className:g("h-12 w-12 flex-shrink-0",t&&"grayscale group-hover:grayscale-0")}),e.jsxs("div",{className:"overflow-hidden text-ellipsis break-words",children:[e.jsx("span",{className:"line-clamp-2 text-sm font-semibold leading-tight",children:s.gizmo.display.name}),e.jsx("span",{className:"line-clamp-3 text-xs",children:s.gizmo.display.description}),e.jsxs("div",{className:"mt-1 flex items-center gap-1 text-ellipsis whitespace-nowrap pr-1 text-xs text-token-text-tertiary",children:[e.jsx(Z,{gizmo:s,className:"text-xs",hideLink:!0}),r&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-[8px]",children:"•"}),e.jsx(Q,{className:"h-3 w-3"}),r]})]})]})]})}function xe({gizmoResource:s}){const t=T(),[a,r]=G.useState(!1);return s.gizmo.share_recipient===ee.Private?null:e.jsx(E.Item,{onClick:async o=>{o.stopPropagation(),o.preventDefault();try{const i=s.gizmo.short_url?se(s.gizmo.short_url):window.location.origin+`${S(s)}`;await te(i,t,o),r(!0),setTimeout(()=>{r(!1)},2e3)}catch(i){R.addError(i);return}},icon:de,children:a?e.jsx(n,{...y.copiedURL}):e.jsx(n,{...y.copyLink})})}const y=N({copyLink:{defaultMessage:"Copy link",id:"GizmoInformation.copyLink"},copiedURL:{defaultMessage:"Copied URL",id:"GizmoInformation.copiedURL"}}),ue=P(()=>F(()=>import("./ds1vr51izhknzwrt.js"),__vite__mapDeps([0,1,2,3,4,5])).then(s=>s.GizmoKeepInSidebarMenuItem)),ge=4,p=f.div`font-bold mt-6`,fe=s=>C({queryFn:async()=>_.getAbout(s),queryKey:["gizmo","about",{gizmoId:s}]}),pe=s=>C({queryFn:async()=>_.getCreatorSlice({creatorId:s}),queryKey:["gizmo","creator",{creatorId:s}],enabled:s!=null}),he=s=>{switch(s.type){case d.BROWSER:return{title:l.browsing};case d.PYTHON:return{title:l.dataAnalysis};case d.DALLE:return{title:l.dalle};case d.MEMORY:return{title:l.memory,description:l.memoryDescription};case d.JIT_PLUGIN:return{title:l.actions,description:l.actionsDescription};default:return null}},je=({tools:s})=>{const t=q(),a=t?.includes(b.SearchTool)&&!t?.includes(b.SearchToolHoldout),r=re(s??[],i=>i.type);var o=H(r.map(he).filter(i=>i!=null)??[]);return o.length===0?null:(a&&(o=o.map(i=>i.title===l.browsing?{title:l.search}:i)),e.jsxs("div",{className:"flex flex-col",children:[e.jsx(p,{className:"mb-2",children:e.jsx(n,{id:"gizmo.about.capabilitiesHeader",defaultMessage:"Capabilities"})}),o.map(i=>e.jsxs("div",{className:"flex flex-row items-start gap-2 py-1 text-sm",children:[e.jsx(W,{className:"icon-sm mt-0.5 text-green-600"}),e.jsxs("div",{children:[e.jsx(n,{...i.title}),i.description!=null&&e.jsx("div",{className:"text-xs text-token-text-tertiary",children:e.jsx(n,{...i.description})})]})]},i.title.id))]}))},m=f.div`flex flex-col justify-center items-center gap-2 border-l border-token-border-heavy first:border-0 w-48 mt-4 px-2`,x=f.div`flex flex-row items-center gap-1.5 pt-1 text-xl font-semibold text-center leading-none`,u=f.div`text-xs text-token-text-tertiary`,be=({gizmoResource:s})=>e.jsxs($,{contentAlign:"end",sideOffset:4,triggerButton:e.jsx(M,{color:"ghost",icon:oe}),children:[e.jsx(ue,{gizmoResource:s}),e.jsx(xe,{gizmoResource:s})]}),ve=({aboutBlock:s})=>{switch(s.type){case"generic_title_subtitle":return e.jsxs(m,{children:[e.jsx(x,{children:s.title}),e.jsx(u,{children:s.subtitle})]});case"rating":return e.jsxs(m,{children:[e.jsxs(x,{children:[e.jsx(A,{className:"icon-sm"}),s.avg]}),e.jsx(u,{children:s.count_str})]});case"category":return s.category_ranking!=null?e.jsxs(m,{children:[e.jsx(x,{children:e.jsx(n,{id:"gizmo.about.trendingRank",defaultMessage:"#{rank}",values:{rank:s.category_ranking}})}),e.jsx(u,{children:e.jsx(n,{id:"gizmo.about.inCategory",defaultMessage:"in {category} {locale}",values:{category:s.category_str,locale:s.category_locale_str??""}})})]}):e.jsxs(m,{children:[e.jsx(x,{children:s.category_str}),e.jsx(u,{children:e.jsx(n,{id:"gizmo.about.category",defaultMessage:"Category"})})]})}},ye=({blocks:s})=>e.jsx("div",{className:"flex justify-center",children:s.map(t=>e.jsx(ve,{aboutBlock:t},t.type))}),Ne=({href:s,onClick:t,children:a})=>e.jsx(V.div,{whileTap:{scale:.98},className:"flex",children:e.jsxs(J,{to:s,onClick:t,className:g("group relative ml-2 h-14 flex-grow rounded-xl border border-token-border-medium bg-token-main-surface-primary px-4 hover:bg-token-main-surface-secondary focus:outline-none"),children:[e.jsx("div",{className:"flex h-full items-center",children:e.jsx("div",{className:"line-clamp-2 text-sm",children:a})}),e.jsx("div",{className:"absolute -bottom-px -left-2 h-3 w-4 border-b border-token-border-medium bg-token-main-surface-primary group-hover:bg-token-main-surface-secondary",children:e.jsx("div",{className:"h-3 w-2 rounded-br-full border-b border-r border-token-border-medium bg-token-main-surface-primary"})}),e.jsx("div",{className:"absolute bottom-0 right-2 top-0 hidden items-center group-hover:flex",children:e.jsx("div",{className:"flex h-8 w-8 items-center justify-center rounded-lg bg-token-main-surface-primary",children:e.jsx(L,{className:"icon-md text-token-text-primary"})})})]})}),ze=({gizmo:s,onClose:t})=>{const a=k("1825130190").value,r=s.gizmo.display.prompt_starters?.slice(0,ge);return r==null||r.length===0||!a?null:e.jsxs("div",{className:"flex flex-col",children:[e.jsx(p,{children:e.jsx(n,{id:"gizmo.about.conversationStartersHeader",defaultMessage:"Conversation Starters"})}),e.jsx("div",{className:"mt-4 grid grid-cols-2 gap-x-1.5 gap-y-2",children:r.map((o,i)=>e.jsx(we,{gizmo:s,prompt:o,onClick:t},i))})]})};function we(s){const{gizmo:t,prompt:a,onClick:r}=s,o=ne(t,a);return e.jsx(Ne,{href:o?.toString()??"#",onClick:r,children:a})}const Me=({reviewStats:s})=>k("1825130190").value?e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(p,{children:e.jsx(n,{id:"gizmo.about.ratingsHeader",defaultMessage:"Ratings"})})}),s!=null?[5,4,3,2,1].map(a=>e.jsxs("div",{className:"flex flex-row items-center gap-2 py-1 text-xl font-semibold",children:[e.jsxs("div",{className:"icon-lg relative",children:[e.jsx(A,{className:"icon-lg text-green-500"}),e.jsx("div",{className:"absolute inset-0 flex items-center justify-center text-[11px] text-white",children:a})]}),e.jsx("div",{className:"h-2.5 flex-grow overflow-hidden rounded-full bg-gray-100 dark:bg-gray-700",children:e.jsx("div",{className:"h-full bg-green-500",style:{width:`${(s?.by_rating[a-1]??0)*100}%`}})})]},a)):e.jsx("div",{className:"text-sm text-token-text-tertiary",children:e.jsx(n,{id:"gizmo.about.ratings.notEnoughRatings",defaultMessage:"Not enough ratings yet"})})]}):null,Te=({gizmoId:s,creatorId:t})=>{const a=ae(v.GPTDetails),r=()=>le.closeModal(v.GPTDetails);return a?e.jsx(ke,{gizmoId:s,creatorId:t,onClose:r}):null},ke=({gizmoId:s,creatorId:t,onClose:a,children:r})=>{const o=ie(s),i=fe(s),h=pe(t);return G.useEffect(()=>{z.logEvent(w.showDetailModal,{gizmo_id:s})},[s]),e.jsx(U,{isOpen:!0,onClose:a,type:"success",hideSeparator:!0,showCloseButton:!0,noPadding:!0,className:"flex h-[calc(100vh-25rem)] min-h-[40vh] max-w-xl flex-col",children:e.jsx(Ge,{aboutQuery:i,gizmoQuery:o,creatorSliceQuery:h,onClose:a,children:r})})},Ge=({aboutQuery:s,gizmoQuery:t,creatorSliceQuery:a,children:r,onClose:o})=>{const i=K();if(s.isLoading||t.isLoading||a.isLoading)return e.jsx("div",{className:"flex h-40 items-center justify-center pb-10",children:e.jsx(O,{})});const h=s.data?.gizmo,j=a?.data,c=t?.data;if(!h||s.error||t.error||a.error||s.data==null||t.data==null||a.data==null||!c){const D=B(s.error??t.error??a.error)??i.formatMessage({id:"I3v3Oj",defaultMessage:"An error occurred loading this GPT."});return e.jsx("div",{className:"relative flex flex-col gap-2 overflow-hidden px-2 py-4",children:e.jsx("div",{className:"flex flex-col p-4 text-red-500",children:D})})}return e.jsx("div",{className:"flex h-full px-2 py-4",children:e.jsxs("div",{className:"relative flex flex-grow flex-col gap-4 overflow-y-auto px-8 pb-20 pt-16",children:[e.jsx("div",{className:"absolute top-0",children:e.jsxs("div",{className:"fixed left-4 right-4 z-10 flex items-center justify-end bg-gradient-to-b from-token-main-surface-primary to-transparent pb-2",children:[c&&e.jsx(be,{gizmoResource:c}),e.jsx(I,{onClick:o})]})}),e.jsx("div",{className:"absolute bottom-[64px]",children:e.jsx("div",{className:"fixed left-4 right-4 z-10 flex min-h-[64px] items-end bg-gradient-to-t from-token-main-surface-primary to-transparent px-2",children:r})}),e.jsx(ce,{gizmo:c,className:"!h-fit",avatarClassName:"!h-20 !w-20"}),e.jsx(ye,{blocks:s.data.about_blocks}),e.jsx(ze,{gizmo:c,onClose:o}),e.jsx(je,{tools:c.tools}),e.jsx(Me,{reviewStats:s.data.review_stats}),j&&e.jsx(Ce,{gizmos:j.items})]})})};function Ce({gizmos:s}){return s.length===0?null:e.jsxs("div",{className:"flex flex-col",children:[e.jsx("div",{className:"mb-2",children:e.jsx(p,{children:e.jsx(n,{id:"gizmo.about.moreByHeader",defaultMessage:"More by {creatorName}",values:{creatorName:s[0].gizmo.author.display_name}})})}),e.jsx("div",{className:g("no-scrollbar group flex min-h-[104px] items-center space-x-2 overflow-x-auto overflow-y-hidden"),children:s?.map(t=>e.jsx("a",{onClick:()=>{z.logEvent(w.detailClickGizmo,{gizmo_id:t.gizmo.id})},href:S(t),className:"h-fit min-w-fit rounded-xl bg-token-main-surface-secondary px-1 py-4 md:px-3 md:py-4 lg:px-3",children:e.jsx(me,{resource:t})},t.gizmo.id))})]})}const Ee=s=>e.jsx("div",{className:"flex flex-grow flex-col items-center",children:e.jsxs(M,{color:"primary",className:"h-12 w-full",icon:L,...s,children:[e.jsx(n,{id:"gizmo.about.startChat",defaultMessage:"Start Chat"}),s.children]})}),l=N({browsing:{id:"gizmo.about.tools.browsing",defaultMessage:"Browsing"},search:{id:"gizmo.about.tools.search",defaultMessage:"Web Search"},dataAnalysis:{id:"gizmo.about.tools.dataAnalysis",defaultMessage:"Code Interpreter & Data Analysis"},dalle:{id:"gizmo.about.tools.dalle",defaultMessage:"DALL·E Images"},memory:{id:"gizmo.about.tools.memory",defaultMessage:"Memory"},actions:{id:"gizmo.about.tools.actions",defaultMessage:"Actions"},actionsDescription:{id:"gizmo.about.tools.actionsDescription",defaultMessage:"Retrieves or takes actions outside of ChatGPT"},memoryDescription:{id:"gizmo.about.tools.memoryDescription",defaultMessage:"Learns from previous chats to improve future conversations"}});export{ke as G,Ee as a,me as b,Te as c,xe as d};
//# sourceMappingURL=gdewku93yit9gg60.js.map
