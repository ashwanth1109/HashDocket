(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(2),r=n.n(c),i=(n(14),n(3)),s=n(4),l=n(7),u=n(5),d=n(8),h=n(6),m=n.n(h),p=(n(16),function(t){function e(t){var n;return Object(i.a)(this,e),(n=Object(l.a)(this,Object(u.a)(e).call(this,t))).getTestData=function(){fetch("/api").then(function(t){return t.json()}).then(function(t){return n.setState({data:t})}).catch(function(t){return console.log(t)})},n.state={data:""},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.getTestData()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,this.state.data?this.state.data.message:"")))}}]),e}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},9:function(t,e,n){t.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.e33a327d.chunk.js.map