_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[50],{FFjG:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return H}));var r=n("rePB"),o=n("oYCi"),a=n("mXGw"),i=n.n(a),c=n("l6ru"),l=n("W0B4"),u=n.n(l),s=n("5MD+"),f=n("xriA"),d=n("G0rA"),b=n("vey2");function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function g(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(){var e=g(["\n  margin: 0 2px;\n\n  :first-of-type {\n    margin: 0 0 0 2px;\n  }\n\n  :last-of-type {\n    margin: 0 2px 0 0;\n  }\n"]);return y=function(){return e},e}function m(){var e=g(["\n  width: 300px;\n  margin-top: 14px;\n"]);return m=function(){return e},e}function v(){var e=g(["\n  color: ",";\n  font-family: Akzidenz, \u2018Helvetica Neue\u2019, Helvetica, Arial, sans-serif;\n  font-size: 16px;\n  letter-spacing: 0;\n  line-height: 24px;\n\n  padding: 36px;\n"]);return v=function(){return e},e}function O(){var e=g(["\n  width: 600px;\n  padding: initial;\n"]);return O=function(){return e},e}function j(){var e=g(["\n  color: ",";\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 25px;\n\n  margin-bottom: 10px;\n"]);return j=function(){return e},e}var w={Default:c.b.Primary,Danger:c.b.Danger},x=Object(s.css)(j(),d.a.gray.dark2),P=Object(s.css)(O()),E=Object(s.css)(v(),d.a.gray.dark1),k=Object(s.css)(m()),S=Object(s.css)(y()),C=function(e){var t,n,r=e.children,o=e.title,l=e.requiredInputText,u=e.buttonText,s=e.submitDisabled,d=void 0!==s&&s,g=e.variant,y=void 0===g?w.Default:g,m=e.onConfirm,v=e.onCancel,O=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["children","title","requiredInputText","buttonText","submitDisabled","variant","onConfirm","onCancel"]),j=(t=Object(a.useState)(!l),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(t,n)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),C=j[0],D=j[1],N=Object(a.useMemo)((function(){D(!l);var e=null;return l&&(e=i.a.createElement(b.c,{label:'Type "'.concat(l,'" to confirm your action'),className:k,onChange:function(e){D(e.target.value===l)},autoFocus:!0})),e}),[l]);return i.a.createElement(f.c,p({},O,{contentClassName:P,setOpen:v}),i.a.createElement("div",{className:E},i.a.createElement("h1",{className:x},o),r,N),i.a.createElement(f.a,null,i.a.createElement(c.c,{variant:y,disabled:!C||d,onClick:m,className:S},u),i.a.createElement(c.c,{onClick:v,className:S},"Cancel")))};C.displayName="ConfirmationModal",C.propTypes={title:u.a.string.isRequired,open:u.a.bool,onConfirm:u.a.func,onCancel:u.a.func,children:u.a.node,className:u.a.string,buttonText:u.a.string,variant:u.a.oneOf(Object.values(w)),requiredInputText:u.a.string};var D=C,N=n("hnBo");function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var M={buttonText:{type:"text",default:"Configure a New Data Lake",label:"Button Text"},requiredInputText:{type:"boolean",default:!1,label:"Required Input Text"},title:{type:"text",default:"Configure a New Data Lake",label:"Title"},children:{type:"area",default:"Analyze your data in S3 with MQL.",label:"Children"}};function z(e){var t=e.title,n=void 0===t?"Confirm Title Here":t,r=e.buttonText,i=void 0===r?"Confirm":r,l=e.requiredInputText,u=e.children,s=Object(a.useState)(!1),f=s[0],d=s[1],b=l?"Confirmation text":void 0;return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(c.c,{onClick:function(){return d(!f)},children:"Open Modal"}),Object(o.jsx)(D,{open:f,onConfirm:function(){return d(!1)},onCancel:function(){return d(!1)},title:n,buttonText:i,requiredInputText:b,children:u})]})}function H(){return Object(o.jsx)(N.a,{knobsConfig:M,children:function(e){return Object(o.jsx)(z,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e))}})}},KQAK:function(e,t,n){e.exports=function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var o=r(t);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function l(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var u={small:14,default:16,large:20,xlarge:24};function s(){var e=l(["\n    flex-shrink: 0;\n  "]);return s=function(){return e},e}function f(){var e=l(["\n    color: ",";\n  "]);return f=function(){return e},e}var d=function(t){var r,o=t.className,l=t.size,d=void 0===l?16:l,b=t.title,p=t["aria-label"],g=t["aria-labelledby"],h=t.fill,y=t.role,m=void 0===y?"img":y,v=c(t,["className","size","title","aria-label","aria-labelledby","fill","role"]),O=n.css(f(),h),j=n.css(s()),w=function(e,t,n){var r,o,i=n["aria-label"],c=n["aria-labelledby"],l=n.title;switch(e){case"img":return i||c||l?(a(r={},"aria-labelledby",c),a(r,"aria-label",i),a(r,"title",l),r):{"aria-label":(o=t,"".concat(o.replace(/([a-z])([A-Z])/g,"$1 $2")," Icon"))};case"presentation":return{"aria-hidden":!0,alt:""}}}(m,"Checkmark",(a(r={title:b},"aria-label",p),a(r,"aria-labelledby",g),r));return e.createElement("svg",i({className:n.cx(a({},O,null!=h),j,o),height:"number"==typeof d?d:u[d],width:"number"==typeof d?d:u[d],role:m},w,v,{viewBox:"0 0 16 16"}),e.createElement("g",{id:"Glyphs-/-Checkmark",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},e.createElement("path",{d:"M6.94974747,10.363961 L13.3137085,4 L14.7279221,5.41421356 L8.36396103,11.7781746 L6.94974747,13.1923882 L2,8.24264069 L3.41421356,6.82842712 L6.94974747,10.363961 Z",fill:"currentColor"})))};return d.displayName="Checkmark",d.isGlyph=!0,d.propTypes={fill:o.default.string,size:o.default.oneOfType([o.default.number,o.default.string]),className:o.default.string},d}(n("mXGw"),n("W0B4"),n("5MD+"))},M4ZN:function(e,t,n){"use strict";var r,o=n("mXGw"),a=n.n(o),i=n("+xY2"),c=n("W0B4"),l=n.n(c),u=n("5MD+"),s=n("G0rA"),f=n("jGqM");function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function g(){var e=p(["\n  position: relative;\n  border-radius: 7px;\n  transition: border 300ms ease-in-out, box-shadow 300ms ease-in-out;\n"]);return g=function(){return e},e}function h(){var e=p(["\n      cursor: pointer;\n\n      &:focus {\n        outline: none;\n        box-shadow: ",", ",";\n      }\n\n      &:hover {\n        box-shadow: ",";\n\n        &:focus {\n          box-shadow: ",", ",";\n        }\n      }\n    "]);return h=function(){return e},e}function y(){var e=p(["\n      border: 1px solid ",";\n      box-shadow: ",";\n      background-color: ",";\n      color: ",";\n    "]);return y=function(){return e},e}function m(){var e=p(["\n      cursor: pointer;\n\n      &:focus {\n        outline: none;\n        box-shadow: ",", ",";\n      }\n\n      &:hover {\n        border: 1px solid ",";\n        box-shadow: ",";\n\n        &:focus {\n          box-shadow: ",", ",";\n        }\n      }\n    "]);return m=function(){return e},e}function v(){var e=p(["\n      border: 1px solid ",";\n      box-shadow: 0 4px 10px -4px ",";\n      background-color: white;\n      color: ",";\n    "]);return v=function(){return e},e}var O="clickable",j="dark",w="light",x="0 4px 10px -4px ".concat(Object(i.b)(.7,s.a.black)),P="0 4px 20px -4px  ".concat(Object(i.b)(.3,"#000")),E="0 2px 6px -2px ".concat(Object(i.b)(.4,s.a.black)),k="0 2px 12px -2px ".concat(Object(i.b)(.1,"#000")),S="0 0 0 3px ".concat(s.a.blue.light1),C="0 0 0 3px ".concat(s.a.blue.base),D=(d(r={},w,{containerStyle:Object(u.css)(v(),s.a.gray.light2,Object(i.b)(.7,s.a.black),s.a.gray.dark3),clickableStyle:Object(u.css)(m(),x,S,s.a.gray.light2,E,E,S)}),d(r,j,{containerStyle:Object(u.css)(y(),s.a.gray.dark2,P,s.a.gray.dark2,s.a.white),clickableStyle:Object(u.css)(h(),P,C,k,k,C)}),r),N=Object(u.css)(g()),T=function(e){var t=e.className,n=e.contentStyle,r=e.darkMode,o=void 0!==r&&r,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["className","contentStyle","darkMode"]);void 0===n&&("onClick"in i&&void 0!==i.onClick||"href"in i&&i.href)&&(n=O);var c=o?j:w;return a.a.createElement(f.a,b({className:Object(u.cx)(N,D[c].containerStyle,d({},D[c].clickableStyle,n===O),t)},i))};T.displayName="Card",T.propTypes={className:l.a.string},t.a=T},ZmRa:function(e,t,n){"use strict";n.d(t,"a",(function(){return D})),n.d(t,"b",(function(){return N}));var r=n("mXGw"),o=n.n(r),a=n("W0B4"),i=n.n(a),c=n("m3N6"),l=n("5MD+"),u=n("q7FG"),s=n("WM7k");function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==c.return||c.return()}finally{if(o)throw a}}return n}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e){return function(e){if(Array.isArray(e))return O(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||v(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(e,t):void 0}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j,w,x,P,E,k,S,C,D={Top:"top",Bottom:"bottom",Left:"left",Right:"right",CenterVertical:"center-vertical",CenterHorizontal:"center-horizontal"},N={Start:"start",Middle:"middle",End:"end",Fit:"fit"};function T(e){var t=e.useRelativePositioning,n=e.spacing,r=e.align,o=e.justify,a=e.referenceElViewportPos,i=void 0===a?M:a,c=e.referenceElDocumentPos,l=void 0===c?M:c,u=e.contentElViewportPos,s=void 0===u?M:u,f=e.contentElDocumentPos,d=void 0===f?M:f,b=e.windowHeight,g=void 0===b?window.innerHeight:b,h=e.windowWidth,y=void 0===h?window.innerWidth:h,v={windowWidth:y,windowHeight:g,referenceElViewportPos:i,contentElViewportPos:s,spacing:n},O=function(e,t){var n=t.spacing,r=t.windowWidth,o=t.windowHeight,a=t.contentElViewportPos,i=t.referenceElViewportPos;return[e].concat(m(Y[e])).find((function(e){return[D.Top,D.Bottom,D.CenterVertical].includes(e)?X({top:G({align:e,contentElPos:a,referenceElPos:i,spacing:n}),windowHeight:o,contentHeight:a.height}):!![D.Left,D.Right,D.CenterHorizontal].includes(e)&&_({left:q({align:e,contentElPos:a,referenceElPos:i,spacing:n}),windowWidth:r,contentWidth:a.width})}))||e}(r,v),j=function(e,t,n){var r,o,a=n.spacing,i=n.windowWidth,c=n.windowHeight,l=n.contentElViewportPos,u=n.referenceElViewportPos,s=[e].concat(m(Z[e]));switch(t){case D.Top:case D.Bottom:case D.CenterVertical:return null!==(r=s.find((function(e){return _({contentWidth:e===N.Fit?u.width:l.width,windowWidth:i,left:q({contentElPos:l,referenceElPos:u,spacing:a,align:t,justify:e})})})))&&void 0!==r?r:Z[e][0];case D.Left:case D.Right:case D.CenterHorizontal:return null!==(o=s.find((function(e){return X({contentHeight:e===N.Fit?u.height:l.height,windowHeight:c,top:G({contentElPos:l,referenceElPos:u,spacing:a,align:t,justify:e})})})))&&void 0!==o?o:Z[e][0]}}(o,O,v),w=function(e){var t,n,r=e.justify,o=A[e.align],a=null!==(t=o.x)&&void 0!==t?t:B[r],i=null!==(n=o.y)&&void 0!==n?n:L[r];return"".concat(a," ").concat(i)}({align:O,justify:j}),x=function(e,t){var n=.8;switch(e){case D.Top:return"translate3d(0, ".concat(t,"px, 0) scale(").concat(n,")");case D.Bottom:return"translate3d(0, -".concat(t,"px, 0) scale(").concat(n,")");case D.Left:return"translate3d(".concat(t,"px, 0, 0) scale(").concat(n,")");case D.Right:return"translate3d(-".concat(t,"px, 0, 0) scale(").concat(n,")");case D.CenterHorizontal:case D.CenterVertical:return"scale(".concat(n,")")}}(O,n);return t?{align:O,justify:j,positionCSS:p({},W({align:O,justify:j,referenceElDocumentPos:l,contentElDocumentPos:d,spacing:n}),{transformOrigin:w,transform:x})}:{align:O,justify:j,positionCSS:p({},V({align:O,justify:j,referenceElDocumentPos:l,contentElDocumentPos:d,spacing:n,windowHeight:g,windowWidth:y}),{transformOrigin:w,transform:x})}}var M={top:0,bottom:0,left:0,right:0,height:0,width:0};function z(e){if(!e)return M;var t=e.getBoundingClientRect(),n=t.top,r=t.bottom,o=t.left,a=t.right,i=e.offsetHeight,c=e.offsetWidth,l=window,u=l.scrollX,s=l.scrollY;return{top:n+s,bottom:r+s,left:o+u,right:a+u,height:i,width:c}}function H(e){if(!e)return M;var t=e.getBoundingClientRect();return{top:t.top,bottom:t.bottom,left:t.left,right:t.right,height:e.offsetHeight,width:e.offsetWidth}}var L=(f(j={},N.Start,"top"),f(j,N.Middle,"center"),f(j,N.End,"bottom"),f(j,N.Fit,"center"),j),B=(f(w={},N.Start,"left"),f(w,N.Middle,"center"),f(w,N.End,"right"),f(w,N.Fit,"center"),w),A=(f(x={},D.Left,{x:"right"}),f(x,D.Right,{x:"left"}),f(x,D.Top,{y:"bottom"}),f(x,D.Bottom,{y:"top"}),f(x,D.CenterHorizontal,{x:"center"}),f(x,D.CenterVertical,{y:"center"}),x),I=(f(P={},N.Start,{top:0}),f(P,N.End,{bottom:0}),f(P,N.Middle,(function(e){var t=e.contentElDocumentPos,n=e.referenceElDocumentPos;return{top:"".concat(n.height/2-t.height/2,"px")}})),f(P,N.Fit,{top:0,bottom:0}),P),F=(f(E={},N.Start,{left:0}),f(E,N.End,{right:0}),f(E,N.Middle,(function(e){var t=e.contentElDocumentPos,n=e.referenceElDocumentPos;return{left:"".concat(n.width/2-t.width/2,"px")}})),f(E,N.Fit,{left:0,right:0}),E),R=(f(k={},D.Top,{constant:function(e){var t=e.spacing;return{bottom:"calc(100% + ".concat(t,"px)")}},justifyPositions:F}),f(k,D.Bottom,{constant:function(e){var t=e.spacing;return{top:"calc(100% + ".concat(t,"px)")}},justifyPositions:F}),f(k,D.CenterVertical,{constant:function(e){var t=e.referenceElDocumentPos;return{top:"calc(".concat(t.height/2,"px - 50%)")}},justifyPositions:F}),f(k,D.Left,{constant:function(e){var t=e.spacing;return{right:"calc(100% + ".concat(t,"px)")}},justifyPositions:I}),f(k,D.Right,{constant:function(e){var t=e.spacing;return{left:"calc(100% + ".concat(t,"px)")}},justifyPositions:I}),f(k,D.CenterHorizontal,{constant:function(e){var t=e.referenceElDocumentPos;return{left:"calc(".concat(t.width/2,"px - 50%)")}},justifyPositions:I}),k);function W(e){var t,n=e.align,r=e.justify,o=e.referenceElDocumentPos,a=e.contentElDocumentPos,i=e.spacing,c=R[n],l=c.justifyPositions[r],u={contentElDocumentPos:a,referenceElDocumentPos:o,spacing:i};return p({},null===(t=c.constant)||void 0===t?void 0:t.call(c,u),{},"function"==typeof l?l(u):l)}function V(e){var t=e.align,n=e.justify,r=e.referenceElDocumentPos,o=e.contentElDocumentPos,a=e.spacing,i=e.windowWidth,c=e.windowHeight,l="".concat(q({align:t,justify:n,referenceElPos:r,contentElPos:o,spacing:a}),"px"),u="".concat(G({align:t,justify:n,referenceElPos:r,contentElPos:o,spacing:a}),"px");return n!==N.Fit?{left:l,top:u}:[D.Left,D.Right,D.CenterHorizontal].includes(t)?{left:l,top:u,bottom:"".concat(c-r.bottom,"px")}:{left:l,top:u,right:"".concat(i-r.right,"px")}}function G(e){var t=e.align,n=e.justify,r=e.contentElPos,o=e.referenceElPos,a=e.spacing;switch(t){case D.Left:case D.Right:case D.CenterHorizontal:switch(n){case N.Start:case N.Fit:return o.top;case N.End:return o.top+o.height-r.height;case N.Middle:default:return o.top-(r.height-o.height)/2}case D.CenterVertical:return o.top-(r.height-o.height)/2;case D.Top:return o.top-r.height-a;case D.Bottom:default:return o.top+o.height+a}}function q(e){var t=e.align,n=e.justify,r=e.contentElPos,o=e.referenceElPos,a=e.spacing;switch(t){case D.Top:case D.Bottom:case D.CenterVertical:switch(n){case N.End:return o.left+o.width-r.width;case N.Middle:return o.left-(r.width-o.width)/2;case N.Start:case N.Fit:default:return o.left}case D.Left:return o.left-r.width-a;case D.Right:return o.left+o.width+a;case D.CenterHorizontal:default:return o.left-(r.width-o.width)/2}}function _(e){var t=e.left,n=e.windowWidth,r=e.contentWidth;return t>=0&&!(t+r>n)}function X(e){var t=e.top,n=e.windowHeight,r=e.contentHeight;return t>=0&&!(t+r>n)}var Y=(f(S={},D.Top,[D.Bottom]),f(S,D.Bottom,[D.Top]),f(S,D.Left,[D.Right]),f(S,D.Right,[D.Left]),f(S,D.CenterHorizontal,[D.Left,D.Right]),f(S,D.CenterVertical,[D.Top,D.Bottom]),S),Z=(f(C={},N.Start,[N.End,N.Middle]),f(C,N.Middle,[N.End,N.Start]),f(C,N.End,[N.Start,N.Middle]),f(C,N.Fit,[N.Middle,N.Start,N.End]),C);function $(){var e=h(["\n              display: none;\n            "]);return $=function(){return e},e}function Q(){var e=h(["\n    opacity: 1;\n    position: ",";\n    pointer-events: initial;\n  "]);return Q=function(){return e},e}function J(){var e=h(["\n  position: absolute;\n  transition: transform 150ms ease-in-out, opacity 150ms ease-in-out;\n  opacity: 0;\n"]);return J=function(){return e},e}var K=Object(l.css)(J()),U={attributes:!0,characterData:!0,childList:!0,subtree:!0};function ee(e){var t=e.active,n=void 0!==t&&t,a=e.usePortal,i=void 0===a||a,b=e.spacing,p=void 0===b?10:b,h=e.align,m=void 0===h?D.Bottom:h,v=e.justify,O=void 0===v?N.Start:v,j=e.adjustOnMutation,w=void 0!==j&&j,x=e.children,P=e.className,E=e.portalClassName,k=e.refEl,S=g(e,["active","usePortal","spacing","align","justify","adjustOnMutation","children","className","portalClassName","refEl"]),C=y(Object(r.useState)(null),2),M=C[0],L=C[1],B=y(Object(r.useState)(null),2),A=B[0],I=B[1],F=y(Object(r.useState)(0),2),R=F[0],W=F[1],V=o.a.useRef(A);V.current=A;var G=null;if(k&&k.current)G=k.current;else if(M){var q=M.parentNode;q&&q instanceof HTMLElement&&(G=q)}var _=Object(s.h)(),X=w&&n,Y=Object(s.d)(G,U,Date.now,X),Z=Object(s.d)(A,U,Date.now,X),J=Object(s.e)(H(G)),ee=Object(s.e)(H(A)),te=Object(s.e)(Object(r.useMemo)((function(){return z(G)}),[G,_,Y,n,m,O,R])),ne=Object(s.e)(Object(r.useMemo)((function(){return z(A)}),[A,_,Z,n,m,O,R])),re=Object(s.g)(O),oe=Object(s.g)(m),ae=re!==O&&(O===N.Fit||re===N.Fit)||oe!==m&&O===N.Fit;Object(s.c)((function(){ae&&W((function(e){return e+1}))}),[ae]);var ie=y(Object(r.useState)(!1),2),ce=ie[0],le=ie[1];if(Object(s.c)((function(){return le(!0)}),[]),!ce)return null;var ue,se=T({useRelativePositioning:!i,spacing:p,align:m,justify:O,referenceElViewportPos:J,referenceElDocumentPos:te,contentElViewportPos:ee,contentElDocumentPos:ne}),fe=se.align,de=se.justify,be=se.positionCSS,pe=be.transform,ge=g(be,["transform"]),he=Object(l.css)(Q(),i?"":"absolute"),ye=i?u.a:r.Fragment,me=i?{className:E}:{};return ue=null==x?null:"function"==typeof x?x({align:fe,justify:de,referenceElPos:te}):x,o.a.createElement(c.a,{nodeRef:V,in:n,timeout:150,mountOnEnter:!0,unmountOnExit:!0,appear:!0},(function(e){var t;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{ref:L,className:Object(l.css)($())}),o.a.createElement(ye,me,o.a.createElement("div",d({},S,{className:Object(l.cx)(K,Object(l.css)(ge),(t={},f(t,Object(l.css)({transform:pe}),"entering"===e||"exiting"===e),f(t,he,"entered"===e),t),P)}),o.a.createElement("div",{ref:I},ue))))}))}ee.displayName="Popover",ee.propTypes={children:i.a.oneOfType([i.a.node,i.a.func]),active:i.a.bool,className:i.a.string,align:i.a.oneOf(Object.values(D)),justify:i.a.oneOf(Object.values(N)),refEl:i.a.shape({current:"undefined"!=typeof window?i.a.instanceOf(Element):i.a.any}),usePortal:i.a.bool,portalClassName:i.a.string,spacing:i.a.number,adjustOnMutation:i.a.bool},ee.defaultProps={children:void 0,align:D.Bottom,justify:N.Start,active:!1,usePortal:!0,spacing:10,adjustOnMutation:!1},t.c=ee},lBpq:function(e,t,n){"use strict";n.d(t,"a",(function(){return H}));var r,o,a,i,c=n("mXGw"),l=n.n(c),u=n("5MD+"),s=n("W0B4"),f=n.n(s),d=n("jGqM"),b=n("QmRY"),p=n("G0rA"),g=n("C1Ma");function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function O(){var e=v(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return O=function(){return e},e}function j(){var e=v(["\n    color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n  "]);return j=function(){return e},e}function w(){var e=v(["\n    color: ",";\n    background-color: ",";\n\n    &:before {\n      background-color: ",";\n    }\n  "]);return w=function(){return e},e}function x(){var e=v(["\n    color: ",";\n    pointer-events: none;\n  "]);return x=function(){return e},e}function P(){var e=v(["\n    color: ",";\n    pointer-events: none;\n  "]);return P=function(){return e},e}function E(){var e=v(["\n    &:hover {\n      &:before {\n        background-color: ",";\n      }\n      color: ",";\n    }\n    &:focus:before {\n      background-color: ",";\n    }\n  "]);return E=function(){return e},e}function k(){var e=v(["\n    &:hover {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &:before {\n        background-color: ",";\n      }\n    }\n  "]);return k=function(){return e},e}function S(){var e=v(["\n    height: 42px;\n    width: 42px;\n  "]);return S=function(){return e},e}function C(){var e=v(["\n    height: 35px;\n    width: 35px;\n  "]);return C=function(){return e},e}function D(){var e=v(["\n    height: 28px;\n    width: 28px;\n  "]);return D=function(){return e},e}function N(){var e=v(["\n  display: inline-block;\n  border-radius: 100px;\n  color: ",";\n  position: relative;\n  cursor: pointer;\n  flex-shrink: 0;\n\n  // Set background to fully-transparent white for cross-browser compatability with Safari\n  //\n  // Safari treats \"transparent\" values in CSS as transparent black instead of white\n  // which can make things render differently across browsers if not defined explicitly.\n  background-color: rgba(255, 255, 255, 0);\n\n  &:before {\n    content: '';\n    transition: 150ms all ease-in-out;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    border-radius: 100%;\n    opacity: 0;\n    transform: scale(0.8);\n  }\n\n  &:hover:before,\n  &:focus:before {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return N=function(){return e},e}function T(){var e=v(["\n  border: none;\n  -webkit-appearance: unset;\n  padding: unset;\n"]);return T=function(){return e},e}var M="light",z="dark",H={Default:"default",Large:"large",XLarge:"xlarge"},L=Object(u.css)(T()),B=Object(u.css)(N(),p.a.gray.base),A=(h(r={},H.Default,Object(u.css)(D())),h(r,H.Large,Object(u.css)(C())),h(r,H.XLarge,Object(u.css)(S())),r),I=(h(o={},M,Object(u.css)(k(),p.a.gray.dark2,p.a.gray.light2,p.a.blue.base,p.a.blue.light2)),h(o,z,Object(u.css)(E(),p.a.gray.dark2,p.a.white,p.a.blue.dark2)),o),F=(h(a={},M,Object(u.css)(P(),p.a.gray.light2)),h(a,z,Object(u.css)(x(),p.a.gray.dark2)),a),R=(h(i={},M,Object(u.css)(w(),p.a.gray.dark2,p.a.gray.light2,p.a.gray.light2)),h(i,z,Object(u.css)(j(),p.a.white,p.a.gray.dark2,p.a.gray.dark2)),i),W=Object(u.css)(O()),V=l.a.forwardRef((function(e,t){var n,r,o=e.size,a=void 0===o?H.Default:o,i=e.darkMode,c=void 0!==i&&i,s=e.disabled,f=void 0!==s&&s,p=e.active,v=void 0!==p&&p,O=e.className,j=e.children,w=e["aria-label"],x=e["aria-labelledby"],P=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["size","darkMode","disabled","active","className","children","aria-label","aria-labelledby"]),E=c?"dark":"light";w||x||console.error("For screen-reader accessibility, aria-label or aria-labelledby must be provided to IconButton.");var k=l.a.Children.map(j,(function(e){if(!e)return null;if(Object(b.e)(e,"Icon")||Object(g.d)(e)){var t=e.props,n=t.size,r=t.title,o={size:n||a};return"string"==typeof r&&0!==r.length||(o.title=!1),l.a.cloneElement(e,o)}return e})),S=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},P,{},w?h({},"aria-label",w):h({},"aria-labelledby",x),(h(r={ref:t,tabIndex:f?-1:0},"aria-disabled",f),h(r,"className",Object(u.cx)(L,B,A[a],I[E],(h(n={},F[E],f),h(n,R[E],v),n),O)),r));return"string"==typeof P.href?l.a.createElement(d.a,y({as:"a"},S),l.a.createElement("div",{className:W},k)):l.a.createElement(d.a,y({as:"button"},S),l.a.createElement("div",{className:W},k))}));V.displayName="IconButton",V.propTypes={darkMode:f.a.bool,size:f.a.oneOf(Object.values(H)),className:f.a.string,children:f.a.node,disabled:f.a.bool,href:f.a.string,active:f.a.bool},t.b=V},nAoq:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/component/confirmation-modal/example",function(){return n("FFjG")}])}},[["nAoq",0,1,2,3,4,5,8,12]]]);