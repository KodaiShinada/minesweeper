(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(n,e,t){"use strict";t.r(e);var r=t(7294),o=t(9163),i=t(5893);function a(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){l=!0,i=n},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw i}}}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var l=o.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["height:100vh;background:royalblue;display:flex;justify-content:center;align-items:center;"]),d=o.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["display:row;"]),u=o.ZP.div.withConfig({displayName:"pages__BoardUp",componentId:"sc-eccczk-2"})(["height:19vh;width:81vh;background:white;display:flex;justify-content:center;align-items:center;"]),s=o.ZP.div.withConfig({displayName:"pages__Face",componentId:"sc-eccczk-3"})(["height:90px;width:90px;background-image:url(/img.png);background-size:cover;background-position:-990px 0px;background-repeat:no-repeat;display:inline-block;text-align:center;vertical-align:center;white-space:nowrap;text-indent:100%;overflow:hidden;"]),p=o.ZP.div.withConfig({displayName:"pages__BoardUnder",componentId:"sc-eccczk-4"})(["height:81vh;width:81vh;background:white;"]),f=o.ZP.div.withConfig({displayName:"pages__Box",componentId:"sc-eccczk-5"})(["height:9vh;width:9vh;background:",";color:'black';border:1px solid;border-color:black;border-left:transparent;display:inline-block;vertical-align:bottom;text-align:center;line-height:8.5vh;font-size:30px;font-weight:bold;"],(function(n){return n.isOpen?"white":"gray"})),h=o.ZP.div.withConfig({displayName:"pages__BombBlock",componentId:"sc-eccczk-6"})(["height:30px;width:30px;background-image:url(/img.png);background-position:-300px 0px;background-repeat:no-repeat;display:inline-block;text-align:center;vertical-align:center;white-space:nowrap;text-indent:100%;overflow:hidden;"]),g=o.ZP.div.withConfig({displayName:"pages__Colors",componentId:"sc-eccczk-7"})(["height:30px;width:30px;background-image:url(/img.png);background-position:","px 0px;background-repeat:no-repeat;display:inline-block;text-align:center;vertical-align:center;white-space:nowrap;text-indent:100%;overflow:hidden;"],(function(n){return-30*(n.numColor-1)}));e.default=function(){for(var n=(0,r.useState)([[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9]]),e=n[0],t=n[1],o=[],c=function(){var n=Math.floor(9*Math.random()),e=Math.floor(9*Math.random());o.some((function(t){return t.x===n&&t.y===e}))||o.push({x:n,y:e})};o.length<10;)c();var v=(0,r.useState)(o),y=v[0],m=(v[1],function n(e,t,r){for(var o=r,i=!1,c=0;c<y.length;c++)y[c].x===e&&y[c].y===t&&(i=!0);for(var l=0,d=[-1,0,1],u=0;u<y.length;u++){var s,p=a(d);try{for(p.s();!(s=p.n()).done;){var f,h=s.value,g=a(d);try{for(g.s();!(f=g.n()).done;){var v=f.value;y[u].x===e+v&&y[u].y===t+h&&l++}}catch(N){g.e(N)}finally{g.f()}}}catch(N){p.e(N)}finally{p.f()}}if(o[t][e]=i?10:l,0===l){console.log(0);for(var m=0;m<y.length;m++){var b,w=a(d);try{for(w.s();!(b=w.n()).done;){var x,k=b.value,_=a(d);try{for(_.s();!(x=_.n()).done;){var C=x.value;void 0===o[t+k]||void 0===o[e+C]||9!==o[t+k][e+C]||y[m].x===e+C&&y[m].y===t+k||(o=n(e+C,t+k,o))}}catch(N){_.e(N)}finally{_.f()}}}catch(N){w.e(N)}finally{w.f()}}}return o});return(0,i.jsx)(l,{children:(0,i.jsxs)(d,{children:[(0,i.jsx)(u,{children:(0,i.jsx)(s,{})}),(0,i.jsx)(p,{children:e.map((function(n,r){return n.map((function(n,o){return 10===n?(0,i.jsx)(f,{isOpen:!0,children:(0,i.jsx)(h,{})},"".concat(o,"-").concat(r)):(0,i.jsx)(f,{isOpen:n<9,onClick:function(){return function(n,r){var o=JSON.parse(JSON.stringify(e));t(m(n,r,o))}(o,r)},children:9!==n&&(0,i.jsx)(g,{numColor:n})},"".concat(o,"-").concat(r))}))}))})]})})}},5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])}},function(n){n.O(0,[163,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);