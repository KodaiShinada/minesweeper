(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2562:function(n,e,t){"use strict";t.r(e);var r=t(7294),i=t(9163),o=t(5893);function a(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return c(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return c(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return a=n.done,n},e:function(n){l=!0,o=n},f:function(){try{a||null==t.return||t.return()}finally{if(l)throw o}}}}function c(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}var l=i.ZP.div.withConfig({displayName:"pages__Container",componentId:"sc-eccczk-0"})(["height:100vh;background:royalblue;display:flex;justify-content:center;align-items:center;"]),d=i.ZP.div.withConfig({displayName:"pages__Board",componentId:"sc-eccczk-1"})(["height:95vh;width:80vh;background:black;display:row;position:relative;"]),p=i.ZP.div.withConfig({displayName:"pages__GameWrapper",componentId:"sc-eccczk-2"})(["background:white;position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);"]),s=i.ZP.div.withConfig({displayName:"pages__BoardUp",componentId:"sc-eccczk-3"})(["height:17vh;width:72vh;background:white;display:flex;position:relative;"]),u=i.ZP.div.withConfig({displayName:"pages__Face",componentId:"sc-eccczk-4"})(["height:90px;width:90px;background-image:url(/img.png);background-size:cover;background-position:-990px 0px;background-repeat:no-repeat;display:inline-block;text-align:center;vertical-align:center;white-space:nowrap;text-indent:100%;overflow:hidden;position:absolute;top:0;bottom:0;left:0;right:0;margin:auto;"]),h=i.ZP.div.withConfig({displayName:"pages__BoardUnder",componentId:"sc-eccczk-5"})(["height:72vh;width:72vh;background:white;"]),g=i.ZP.div.withConfig({displayName:"pages__Box",componentId:"sc-eccczk-6"})(["height:8vh;width:8vh;background:",";color:'black';border:1px solid black;box-sizing:border-box;border-left:transparent;display:inline-block;vertical-align:bottom;text-align:center;line-height:8.5vh;font-size:30px;font-weight:bold;"],(function(n){return n.isOpen?"white":"gray"})),f=i.ZP.div.withConfig({displayName:"pages__BombBlock",componentId:"sc-eccczk-7"})(["height:30px;width:30px;background-image:url(/img.png);background-position:-300px 0px;background-repeat:no-repeat;display:inline-block;text-align:center;vertical-align:center;white-space:nowrap;text-indent:100%;overflow:hidden;"]),v=i.ZP.div.withConfig({displayName:"pages__Colors",componentId:"sc-eccczk-8"})(["height:30px;width:30px;background-image:url(/img.png);background-position:","px 0px;background-repeat:no-repeat;display:inline-block;text-align:center;vertical-align:center;white-space:nowrap;text-indent:100%;overflow:hidden;"],(function(n){return-30*(n.numColor-1)})),m=i.ZP.div.withConfig({displayName:"pages__Flags",componentId:"sc-eccczk-9"})(["height:30px;width:30px;background-image:url(/img.png);background-position:","px 0px;background-repeat:no-repeat;display:inline-block;text-align:center;vertical-align:center;white-space:nowrap;text-indent:100%;overflow:hidden;"],(function(n){return-30*(n.numColor-3)}));e.default=function(){for(var n=(0,r.useState)([[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9],[9,9,9,9,9,9,9,9,9]]),e=n[0],t=n[1],i=[],c=function(){var n=Math.floor(9*Math.random()),e=Math.floor(9*Math.random());i.some((function(t){return t.x===n&&t.y===e}))||i.push({x:n,y:e})};i.length<10;)c();var y=(0,r.useState)(i),b=y[0],x=(y[1],function n(e,t,r){for(var i=r,o=!1,c=0;c<b.length;c++)b[c].x===e&&b[c].y===t&&(o=!0);for(var l=0,d=[-1,0,1],p=0;p<b.length;p++){var s,u=a(d);try{for(u.s();!(s=u.n()).done;){var h,g=s.value,f=a(d);try{for(f.s();!(h=f.n()).done;){var v=h.value;b[p].x===e+v&&b[p].y===t+g&&l++}}catch(N){f.e(N)}finally{f.f()}}}catch(N){u.e(N)}finally{u.f()}}if(i[t][e]=o?10:l,0===l)for(var m=0;m<b.length;m++){var y,x=a(d);try{for(x.s();!(y=x.n()).done;){var w,k=y.value,_=a(d);try{for(_.s();!(w=_.n()).done;){var C=w.value;void 0===i[t+k]||void 0===i[e+C]||9!==i[t+k][e+C]||b[m].x===e+C&&b[m].y===t+k||(i=n(e+C,t+k,i))}}catch(N){_.e(N)}finally{_.f()}}}catch(N){x.e(N)}finally{x.f()}}return i});return(0,o.jsx)(l,{children:(0,o.jsx)(d,{children:(0,o.jsxs)(p,{children:[(0,o.jsx)(s,{children:(0,o.jsx)(u,{})}),(0,o.jsx)(h,{children:e.map((function(n,r){return n.map((function(n,i){return 10===n?(0,o.jsx)(g,{isOpen:!0,children:(0,o.jsx)(f,{})},"".concat(i,"-").concat(r)):(0,o.jsx)(g,{isOpen:n<9,onClick:function(){return function(n,r){var i=JSON.parse(JSON.stringify(e));9===i[r][n]&&t(x(n,r,i))}(i,r)},onContextMenu:function(n){return function(n,r,i){var o=JSON.parse(JSON.stringify(e));9===o[r][n]?o[r][n]=12:12===o[r][n]?o[r][n]=11:11===o[r][n]&&(o[r][n]=9),i.preventDefault(),t(o)}(i,r,n)},children:n<9?(0,o.jsx)(v,{numColor:n}):9!==n&&(0,o.jsx)(m,{numColor:n})},"".concat(i,"-").concat(r))}))}))})]})})})}},5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2562)}])}},function(n){n.O(0,[163,774,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);