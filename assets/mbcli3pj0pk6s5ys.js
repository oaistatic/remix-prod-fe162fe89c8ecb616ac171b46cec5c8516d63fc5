import{_ as k}from"./fzrn137102spawew.js";import{f_ as A}from"./dr5q0mnwgdiuy1ac.js";import{r as d}from"./lklglvrzltpv3f05.js";import{i as I}from"./j9pn3dpqp3dnyeg5.js";var _=function(e){var t=d.useRef(e);return I(function(){t.current=e}),t},L=function(e,t){if(typeof e=="function"){e(t);return}e.current=t},B=function(e,t){var r=d.useRef();return d.useCallback(function(i){e.current=i,r.current&&L(r.current,null),r.current=t,t&&L(t,i)},[t])},R={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},M=function(e){Object.keys(R).forEach(function(t){e.style.setProperty(t,R[t],"important")})},H=M,o=null,C=function(e,t){var r=e.scrollHeight;return t.sizingStyle.boxSizing==="border-box"?r+t.borderSize:r-t.paddingSize};function N(n,e,t,r){t===void 0&&(t=1),r===void 0&&(r=1/0),o||(o=document.createElement("textarea"),o.setAttribute("tabindex","-1"),o.setAttribute("aria-hidden","true"),H(o)),o.parentNode===null&&document.body.appendChild(o);var i=n.paddingSize,s=n.borderSize,a=n.sizingStyle,g=a.boxSizing;Object.keys(a).forEach(function(v){var p=v;o.style[p]=a[p]}),H(o),o.value=e;var u=C(o,n);o.value=e,u=C(o,n),o.value="x";var c=o.scrollHeight-i,f=c*t;g==="border-box"&&(f=f+i+s),u=Math.max(f,u);var l=c*r;return g==="border-box"&&(l=l+i+s),u=Math.min(l,u),[u,c]}var w=function(){},$=function(e,t){return e.reduce(function(r,i){return r[i]=t[i],r},{})},j=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],P=!!document.documentElement.currentStyle,O=function(e){var t=window.getComputedStyle(e);if(t===null)return null;var r=$(j,t),i=r.boxSizing;if(i==="")return null;P&&i==="border-box"&&(r.width=parseFloat(r.width)+parseFloat(r.borderRightWidth)+parseFloat(r.borderLeftWidth)+parseFloat(r.paddingRight)+parseFloat(r.paddingLeft)+"px");var s=parseFloat(r.paddingBottom)+parseFloat(r.paddingTop),a=parseFloat(r.borderBottomWidth)+parseFloat(r.borderTopWidth);return{sizingStyle:r,paddingSize:s,borderSize:a}},Y=O;function E(n,e,t){var r=_(t);d.useLayoutEffect(function(){var i=function(a){return r.current(a)};if(n)return n.addEventListener(e,i),function(){return n.removeEventListener(e,i)}},[])}var G=function(e){E(window,"resize",e)},U=function(e){E(document.fonts,"loadingdone",e)},X=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],Z=function(e,t){var r=e.cacheMeasurements,i=e.maxRows,s=e.minRows,a=e.onChange,g=a===void 0?w:a,u=e.onHeightChange,c=u===void 0?w:u,f=A(e,X),l=f.value!==void 0,v=d.useRef(null),p=B(v,t),z=d.useRef(0),S=d.useRef(),m=function(){var h=v.current,x=r&&S.current?S.current:Y(h);if(x){S.current=x;var y=N(x,h.value||h.placeholder||"x",s,i),b=y[0],W=y[1];z.current!==b&&(z.current=b,h.style.setProperty("height",b+"px","important"),c(b,{rowHeight:W}))}},T=function(h){l||m(),g(h)};return d.useLayoutEffect(m),G(m),U(m),d.createElement("textarea",k({},f,{onChange:T,ref:p}))},Q=d.forwardRef(Z);export{Q as i};
//# sourceMappingURL=mbcli3pj0pk6s5ys.js.map
