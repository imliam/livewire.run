!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=0)}([function(t,e,n){n(1),t.exports=n(2)},function(t,e,n){"use strict";n.r(e);const r=([t])=>t,i=(t,e)=>"function"==typeof t?t(e):t,a=t=>Array.isArray(t)?t:!t||t.nodeType?[t]:Array.from("string"==typeof t?document.querySelectorAll(t):t),o=({style:t},e)=>t.willChange=e?e.map(({property:t})=>t).join():"auto",s=(t,e)=>Object.entries(e).reduce((t,[e,n])=>(t.setAttribute(e,n),t),document.createElementNS("http://www.w3.org/2000/svg",t)),u={axes:["x","y"],count:0,add({element:t,blur:e}){const n="motion-blur-"+this.count++,r=s("svg",{style:"position: absolute; width: 0; height: 0"}),i=s("filter",this.axes.reduce((t,n)=>{const r=2*e[n];return t[n]=`-${r}%`,t["x"==n?"width":"height"]=100+2*r+"%",t},{id:n,"color-interpolation-filters":"sRGB"})),a=s("feGaussianBlur",{in:"SourceGraphic"});return i.append(a),r.append(i),t.style.filter=`url("#${n}")`,document.body.prepend(r),a}},c=({blur:t,gaussian:e,easing:n},r)=>{const i=u.axes.map(e=>((t,{easing:e},n)=>{const r=t*n,i=t-r,a="linear"==e?t:e.startsWith("in-out")?2*(n<.5?r:i):e.startsWith("in")?r:i;return Math.max(0,a)})(t[e],n,r));e.setAttribute("stdDeviation",i.join())},l=t=>{const e=t.slice(1),[n,r,i,a]=(t=>(t=>{const e=t.split(""),n=t.length<5?e.map(t=>t+t):e.reduce((t,n,r)=>(r%2&&t.push(e[r-1]+n),t),[]);return n.length<4&&n.push("ff"),n})(t).map(t=>parseInt(t,16)))(e);return`rgba(${n}, ${r}, ${i}, ${a/255})`},d=2*Math.PI,p=(t,e)=>e/d*Math.asin(1/t),m={linear:t=>t,"in-cubic":t=>t**3,"in-quartic":t=>t**4,"in-quintic":t=>t**5,"in-exponential":t=>1024**(t-1),"in-circular":t=>1-Math.sqrt(1-t**2),"in-elastic":(t,e,n)=>{const r=Math.max(e,1),i=p(r,n);return-r*2**(10*(t-=1))*Math.sin((t-i)*d/n)},"out-cubic":t=>--t**3+1,"out-quartic":t=>1- --t**4,"out-quintic":t=>--t**5+1,"out-exponential":t=>1-2**(-10*t),"out-circular":t=>Math.sqrt(1- --t**2),"out-elastic":(t,e,n)=>{const r=Math.max(e,1),i=p(r,n);return r*2**(-10*t)*Math.sin((t-i)*d/n)+1},"in-out-cubic":t=>(t*=2)<1?.5*t**3:.5*((t-=2)*t**2+2),"in-out-quartic":t=>(t*=2)<1?.5*t**4:-.5*((t-=2)*t**3-2),"in-out-quintic":t=>(t*=2)<1?.5*t**5:.5*((t-=2)*t**4+2),"in-out-exponential":t=>(t*=2)<1?.5*1024**(t-1):.5*(2-2**(-10*(t-1))),"in-out-circular":t=>(t*=2)<1?-.5*(Math.sqrt(1-t**2)-1):.5*(Math.sqrt(1-(t-=2)*t)+1),"in-out-elastic":(t,e,n)=>{const r=Math.max(e,1),i=p(r,n);return(t*=2)<1?r*2**(10*(t-=1))*Math.sin((t-i)*d/n)*-.5:r*2**(-10*(t-=1))*Math.sin((t-i)*d/n)*.5+1}},f=t=>{const[e,n=1,r=.4]=t.trim().split(" ");return{easing:e,amplitude:n,period:r}},h=/-?\d*\.?\d+/g,b=t=>t.match(h).map(Number),g=(t,e)=>{const n=(t=>t.map(t=>{const e=String(t);return e.startsWith("#")?l(e):e}))(e),i=r(n).split(h);return{property:t,strings:i,numbers:n.map(b),round:r(i).startsWith("rgb")}},y=(t,e)=>t.reduce((t,{property:n,numbers:r,strings:i,round:a})=>(t[n]=(([t,e],n,r,i)=>n.reduce((n,a,o)=>{const s=o-1,u=((t,e,n)=>t+(e-t)*n)(t[s],e[s],i);return n+(r&&o<4?Math.round(u):u)+a}))(r,i,a,e),t),{}),M=t=>t.forEach(({numbers:t})=>t.reverse()),v={all:new Set,add(t){this.all.add(t).size<2&&requestAnimationFrame(j)}},x={},w=(t,e,n)=>t>0?i(e,n)/t:0,q=(t,e)=>{const{elements:n=null,easing:r="out-elastic",duration:s=1e3,delay:c=0,speed:l=1,loop:d=!1,optimize:p=!1,direction:m="normal",blur:h=null,change:b=null,...y}=t,x={totalDuration:-1};a(n).forEach(async(t,e)=>{const n=((t,e)=>Object.entries(t).map(([t,n])=>g(t,i(n,e))))(y,e),a={element:t,keyframes:n,loop:d,optimize:p,direction:m,change:b,easing:f(r),duration:w(l,s,e)},q=w(l,c,e),j=q+a.duration;"normal"!=m&&M(n),t&&(p&&o(t,n),h&&(a.blur=(t=>{const e=u.axes.reduce((t,e)=>(t[e]=0,t),{});return Object.assign(e,t)})(i(h,e)),a.gaussian=u.add(a))),j>x.totalDuration&&(x.animation=a,x.totalDuration=j),q&&await S(q),v.add(a)});const{animation:q}=x;q&&(q.end=e,q.options=t)},j=t=>{const{all:e}=v;e.forEach(n=>{((t,e)=>{t.startTime||(t.startTime=e),t.elapsed=e-t.startTime})(n,t);const r=(({elapsed:t,duration:e})=>e>0?Math.min(t/e,1):1)(n),{element:i,keyframes:a,loop:s,optimize:u,direction:l,change:d,easing:p,duration:f,gaussian:h,end:b,options:g}=n;if(l){let t=r;switch(r){case 0:"alternate"==l&&M(a);break;case 1:s?(t=>{t.startTime=0})(n):(e.delete(n),u&&i&&o(i),h&&(({style:t},{parentNode:{parentNode:e}})=>{t.filter="none",e.remove()})(i,h)),b&&b(g);break;default:t=(({easing:t,amplitude:e,period:n},r)=>m[t](r,e,n))(p,r)}return h&&c(n,t),d&&b&&d(t),void(i&&Object.assign(i.style,y(a,t)))}r<1||(e.delete(n),b(f))}),e.size&&requestAnimationFrame(j)};document.addEventListener("visibilitychange",()=>{const t=performance.now();if(document.hidden){const{all:e}=v;return x.time=t,x.all=new Set(e),void e.clear()}const{all:e,time:n}=x;if(!e)return;const r=t-n;requestAnimationFrame(()=>e.forEach(t=>{t.startTime+=r,v.add(t)}))});var O=t=>new Promise(e=>q(t,e));const S=t=>new Promise(e=>v.add({duration:t,end:e}));window.animate=O,document.addEventListener("DOMContentLoaded",(function(){O({elements:"#Jelly",transform:["translateY(0%)","translateY(-3%)"],easing:"in-out-cubic"}).then((function(){O({elements:"#Jelly",transform:["translateY(-3%)","translateY(3%)"],loop:!0,direction:"alternate",easing:"in-out-cubic",duration:2e3})}))}))},function(t,e){}]);
//# sourceMappingURL=app.js.map