(this.webpackJsonphand_pose_recognition=this.webpackJsonphand_pose_recognition||[]).push([[0],{269:function(e,n){},270:function(e,n){},278:function(e,n){},288:function(e,n){},289:function(e,n){},290:function(e,n){},298:function(e,n){},300:function(e,n,t){},301:function(e,n,t){},303:function(e,n,t){"use strict";t.r(n);var o=t(90),r=t.n(o),c=t(234),i=t.n(c),s=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,304)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))},l=t(4),a=t.n(l),d=t(11),u=(t(302),t(257)),h=t(258),g=t.n(h),j={thumb:[0,1,2,3,4],indexFinger:[0,5,6,7,8],middleFinger:[0,9,10,11,12],ringFinger:[0,13,14,15,16],pinky:[0,17,18,19,20]},f={0:{color:"yellow",size:15},1:{color:"gold",size:6},2:{color:"green",size:10},3:{color:"gold",size:6},4:{color:"gold",size:6},5:{color:"purple",size:10},6:{color:"gold",size:6},7:{color:"gold",size:6},8:{color:"gold",size:6},9:{color:"blue",size:10},10:{color:"gold",size:6},11:{color:"gold",size:6},12:{color:"gold",size:6},13:{color:"red",size:10},14:{color:"gold",size:6},15:{color:"gold",size:6},16:{color:"gold",size:6},17:{color:"orange",size:10},18:{color:"gold",size:6},19:{color:"gold",size:6},20:{color:"gold",size:6}},v=function(e,n){e.length>0&&e.forEach((function(e){for(var t=e.landmarks,o=0;o<Object.keys(j).length;o++)for(var r=Object.keys(j)[o],c=0;c<j[r].length-1;c++){var i=j[r][c],s=j[r][c+1];n.beginPath(),n.moveTo(t[i][0],t[i][1]),n.lineTo(t[s][0],t[s][1]),n.strokeStyle="plum",n.lineWidth=4,n.stroke()}for(var l=0;l<t.length;l++){var a=t[l][0],d=t[l][1];n.beginPath(),n.arc(a,d,f[l].size,0,3*Math.PI),n.fillStyle=f[l].color,n.fill()}}))},b=t(46);var p=function(){var e=Object(o.useRef)(null),n=Object(o.useRef)(null),t=function(){var e=Object(d.a)(a.a.mark((function e(){var n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a();case 2:n=e.sent,console.log("Handpose model loaded."),setInterval((function(){r(n)}),100);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),r=function(){var t=Object(d.a)(a.a.mark((function t(o){var r,c,i,s,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("undefined"===typeof e.current||null===e.current||4!==e.current.video.readyState){t.next=14;break}return r=e.current.video,c=e.current.video.videoWidth,i=e.current.video.videoHeight,e.current.video.width=c,e.current.video.height=i,n.current.width=c,n.current.height=i,t.next=10,o.estimateHands(r);case 10:s=t.sent,console.log(s),l=n.current.getContext("2d"),v(s,l);case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return t(),Object(b.jsxs)("div",{id:"container",children:[Object(b.jsxs)("div",{className:"recognition-wrapper",children:[Object(b.jsx)(g.a,{ref:e}),Object(b.jsx)("canvas",{ref:n})]}),Object(b.jsxs)("div",{className:"box-content",children:[Object(b.jsx)("h1",{children:"Hand pose recognition"}),Object(b.jsx)("div",{className:"dots-wrapper",children:Object(b.jsxs)("div",{class:"hollow-dots-spinner",children:[Object(b.jsx)("div",{class:"dot"}),Object(b.jsx)("div",{class:"dot"}),Object(b.jsx)("div",{class:"dot"})]})}),Object(b.jsx)("a",{href:"https://nvanha.github.io/myweb/",class:"button-link alternative",children:"Contact me"}),Object(b.jsxs)("div",{className:"details-wrapper",children:[Object(b.jsxs)("p",{children:["Designed & Developed by ",Object(b.jsx)("span",{children:"nvan.ha"})]}),Object(b.jsxs)("p",{children:["All rights reserved ",Object(b.jsx)("span",{children:"2021"})]})]})]})]})};t(300),t(301);i.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root")),s()}},[[303,1,2]]]);
//# sourceMappingURL=main.4787a005.chunk.js.map