(this["webpackJsonpsorting-visualizor"]=this["webpackJsonpsorting-visualizor"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(0),s=r(2),c=r.n(s),o=r(8),a=r.n(o),i=(r(14),r(3));r(15),r(16);var u=function(e){var t=Object(s.useState)("Bubble Sort"),r=Object(i.a)(t,2),c=r[0],o=r[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{className:"title",children:"Sorting Algorithm Visualizer"}),Object(n.jsx)("p",{className:"daddy",children:"By Zoraiz"}),Object(n.jsxs)("div",{className:"controls",children:[Object(n.jsx)("h3",{className:"sorts",onClick:function(){o("Bubble Sort"),e.setSort("Bubble Sort")},children:"Bubble Sort"}),Object(n.jsx)("h3",{className:"sorts",onClick:function(){o("Selection Sort"),e.setSort("Selection Sort")},children:"Selection Sort"}),Object(n.jsx)("h3",{className:"sorts",onClick:function(){o("Insertion Sort"),e.setSort("Insertion Sort")},children:"Insertion Sort"}),Object(n.jsx)("h3",{className:"sorts",onClick:function(){o("Merge Sort"),e.setSort("Merge Sort")},children:"Merge Sort"})]}),Object(n.jsx)("p",{id:"chosen",children:c})]})},l=r(7),b=r(1),j=(r(17),[]);var h=function(e){var t=Object(s.useState)(20),r=Object(i.a)(t,2),o=r[0],a=r[1],u=Object(s.useState)(1),h=Object(i.a)(u,2),O=h[0],d=h[1],p=Object(s.useState)(!0),g=Object(i.a)(p,2),f=g[0],S=g[1],v=[],x=void 0;"Merge Sort"==e.chosenSort?e.warn("red"):e.warn("black");var m=function(e){e=parseInt(e);for(var t=[],r=0;r<e;r++){var s=Math.round(850*Math.random()+50),c=e>25?1e3/(e+5):30;t.push(Object(n.jsx)("div",{className:"bars",style:{height:s/2,width:c,margin:1},children:e<40?Object(n.jsx)("p",{children:s}):Object(n.jsx)("p",{})}))}return t},y=Object(s.useState)(m(o)),N=Object(i.a)(y,2),k=N[0],q=N[1],C=function e(t,r,n){if(1==t.length)return t;for(var s=Math.floor(t.length/2),c=Math.floor((r+n)/2),o=e(t.slice(0,s),r,c),a=e(t.slice(s),c,n),i=[],u=0,l=0,h=0;u<o.length&&l<a.length;)o[u]=I(o[u],"green"),a[l]=I(a[l],"red"),o[u].props.style.height<a[l].props.style.height?(i.push(o[u++]),j[r+h++]=o[u-1],v.push(Object(b.a)(j)),o[u-1]=I(o[u-1],"turquoise"),a[l]=I(a[l],"turquoise"),j[r+(h-1)]=o[u-1],v.push(Object(b.a)(j))):(i.push(a[l++]),j[r+h++]=a[l-1],v.push(Object(b.a)(j)),o[u]=I(o[u],"turquoise"),a[l-1]=I(a[l-1],"turquoise"),j[r+(h-1)]=a[l-1],v.push(Object(b.a)(j)));for(;u<o.length;)i.push(o[u++]),o[u-1]=I(o[u-1],"green"),j[r+h++]=o[u-1],v.push(Object(b.a)(j)),o[u-1]=I(o[u-1],"turquoise"),j[r+(h-1)]=o[u-1],v.push(Object(b.a)(j));for(;l<a.length;)i.push(a[l++]),a[l-1]=I(a[l-1],"red"),j[r+h++]=a[l-1],v.push(Object(b.a)(j)),a[l-1]=I(a[l-1],"turquoise"),j[r+(h-1)]=a[l-1],v.push(Object(b.a)(j));return i},w=function(){q(m(o))},M=function(e){switch(S(!1),v=[],e){case"Bubble Sort":!function(){var e,t=k.length-1,r=Object(b.a)(k);for(e=!0;e;){e=!1;for(var n=0;n<t;n++){var s=r[n].props.style.height,c=r[n+1].props.style.height;if(r[n]=I(r[n],"green"),r[n+1]=I(r[n+1],"green"),s>c){r[n]=I(r[n],"red"),r[n+1]=I(r[n+1],"red"),v.push(Object(b.a)(r));var o=r[n];r[n]=r[n+1],r[n+1]=o,e=!0,r[n]=I(r[n],"green"),r[n+1]=I(r[n+1],"green"),v.push(Object(b.a)(r))}else v.push(Object(b.a)(r));r[n]=I(r[n],"turquoise"),r[n+1]=I(r[n+1],"turquoise"),e||v.push(Object(b.a)(r))}t--}console.log(v)}();break;case"Selection Sort":!function(){for(var e=k.length,t=Object(b.a)(k),r=0;r<e;r++){for(var n=r,s=r+1;s<e;s++)if(t[s]=I(t[s],"green"),t[n]=I(t[n],"green"),v.push(Object(b.a)(t)),t[s].props.style.height<t[n].props.style.height){t[s]=I(t[s],"red"),t[n]=I(t[n],"red"),v.push(Object(b.a)(t));var c=n;n=s,t[c]=I(t[c],"turquoise"),v.push(Object(b.a)(t))}else t[s]=I(t[s],"turquoise"),t[n]=I(t[n],"turquoise"),v.push(Object(b.a)(t));if(n!=r){t[r]=I(t[r],"green"),t[n]=I(t[n],"green"),v.push(Object(b.a)(t));var o=t[r];t[r]=t[n],t[n]=o,t[r]=I(t[r],"turquoise"),t[n]=I(t[n],"turquoise"),v.push(Object(b.a)(t))}}}();break;case"Insertion Sort":!function(){for(var e=Object(b.a)(k),t=e.length,r=1;r<t;r++){e[r]=I(e[r],"red");var n=e[r];v.push(Object(b.a)(e));for(var s=r-1;s>-1&&n.props.style.height<e[s].props.style.height;)e[s+1]=e[s],e[s+1]=I(e[s+1],"red"),v.push(Object(b.a)(e)),e[s+1]=I(e[s+1],"turquoise"),v.push(Object(b.a)(e)),s--;e[s+1]=n,e[s+1]=I(e[s+1],"green"),v.push(Object(b.a)(e)),e[s+1]=I(e[s+1],"turquoise"),v.push(Object(b.a)(e))}}();break;case"Merge Sort":j=[],j=Object(b.a)(k);var t=Object(b.a)(k);C(t,0,t.length-1),j=[]}B()},B=function(){var e=0;0!=v.length&&(x=setInterval((function(){var t;e<v.length-1?e++:(clearInterval(x),S(!0)),t=Object(b.a)(v[e]),q(Object(b.a)(t))}),O))},I=function(e,t){return c.a.cloneElement(e,{style:Object(l.a)(Object(l.a)({},e.props.style),{},{backgroundColor:t})})};return Object(n.jsxs)("div",{className:"array-body",children:[Object(n.jsxs)("div",{id:"texts",children:[Object(n.jsx)("div",{id:"texts",children:Object(n.jsxs)("div",{children:[Object(n.jsxs)("p",{style:{textAlign:"center"},children:["Number of elements: ",Object(n.jsx)("br",{})," ",o]}),Object(n.jsx)("input",{id:"range",type:"range",min:20,max:200,value:o,onChange:function(e){a(e.target.value),w()}})]})}),Object(n.jsxs)("div",{style:{margin:"0 40px"},children:[Object(n.jsxs)("p",{style:{fontSize:17,textAlign:"center"},children:[Object(n.jsx)("b",{children:"Sorting Speed"}),":",Object(n.jsx)("br",{})," Depends upon your CPU as well"]}),Object(n.jsx)("input",{id:"rangeSpeed",type:"range",min:1,max:500,value:O,onChange:function(e){d(e.target.value)}})]}),Object(n.jsx)("button",{className:"sort-button",style:{fontWeight:"bold",fontSize:25},onClick:function(){f&&M(e.chosenSort)},children:"Sort !"}),Object(n.jsx)("button",{className:"generator",onClick:function(){f&&w()},children:"Generate New Array"}),Object(n.jsx)("button",{className:"sort-button",onClick:function(){return window.location.reload()},children:"Reset / Stop"})]}),Object(n.jsx)("div",{className:"array-container",children:k})]})};var O=function(){var e=Object(s.useState)("Bubble Sort"),t=Object(i.a)(e,2),r=t[0],c=t[1],o=Object(s.useState)("red"),a=Object(i.a)(o,2),l=a[0],b=a[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(u,{setSort:c}),Object(n.jsx)("p",{id:"merge-warning",style:{display:"block",color:l,textAlign:"center"},children:"(Warning: Merge Sort is best visualized on large arrays with fast speeds due to its recursive nature)"}),Object(n.jsx)(h,{chosenSort:r,warn:b})]})},d=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),s(e),c(e),o(e)}))};a.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(O,{})}),document.getElementById("root")),d()}],[[18,1,2]]]);
//# sourceMappingURL=main.c52ae4fb.chunk.js.map