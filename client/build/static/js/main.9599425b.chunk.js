(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),s=(n(16),n(6)),l=n.n(s),o=n(7),u=n(1),p=n(2),h=n(4),m=n(3),f=n(5),d=n(10),v=(n(18),n(19),n(20),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.list,t="classic"===this.props.renderType?"classic":"childs",n=e.map((function(e,t){return r.a.createElement("li",{key:t},"Name: ",e.name," Reputation : ",e.reputation," Spots : ",e.spots)})),a=e.map((function(e){return r.a.createElement("div",null,r.a.createElement("h2",null,e.name,", reputation : ",e.reputation),r.a.createElement("h4",null,"His/Her clients are: "),r.a.createElement("ul",null,e.clients.map((function(e,t){return r.a.createElement("li",{key:t},e.name," ",e.importance)}))))}));return r.a.createElement("div",null,r.a.createElement("h2",null,"Trainers"),r.a.createElement("ul",null,"classic"===t?n:a))}}]),t}(a.Component)),b=(n(21),function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Clients"),r.a.createElement("ul",null,this.props.list.map((function(e,t){return r.a.createElement("li",{key:t},"Name: ",e.name," Importance: ",e.importance)}))))}}]),t}(a.Component)),y=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v,{list:this.props.trainers,renderType:"classic"}),r.a.createElement(b,{list:this.props.clients}))}}]),t}(a.Component),j=function(e){for(var t=Object(d.a)(e),n=t[0].reputation?"reputation":"importance",a=0;a<t.length;a++)for(var r=void 0,i=a+1;i<t.length;i++)t[a][n]<t[i][n]&&(r=t[a],t[a]=t[i],t[i]=r);return t},O=function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(h.a)(this,Object(m.a)(t).call(this))).handleClick=Object(o.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.state.paired?e.setState({trainers:e.state.trainers,paired:!e.state.paired}):e.setState({trainers:e.pairingData(),paired:!e.state.paired});case 1:case"end":return t.stop()}}),t)}))),e.state={trainers:[],clients:[],paired:!1},e}return Object(f.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,this.setState({trainers:n.trainers,clients:n.clients});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"pairingData",value:function(){var e=j(this.state.trainers),t=j(this.state.clients),n=!0,a=!1,r=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done);n=!0){var s=i.value,l=!0,o=!1,u=void 0;try{for(var p,h=e[Symbol.iterator]();!(l=(p=h.next()).done);l=!0){var m=p.value;if(m.spots>0){s.personalTrainer=m.name,m.clients.push(s),m.spots--;break}}}catch(f){o=!0,u=f}finally{try{l||null==h.return||h.return()}finally{if(o)throw u}}}}catch(f){a=!0,r=f}finally{try{n||null==c.return||c.return()}finally{if(a)throw r}}return e}},{key:"render",value:function(){var e=this.state.paired?"Go Back":"Pairing",t=this.state.trainers,n=this.state.clients,a=this.state.paired,i=r.a.createElement(y,{trainers:t,clients:n});return r.a.createElement("div",{className:"App"},a?r.a.createElement(v,{list:t,renderType:"childs"}):i,r.a.createElement("button",{onClick:this.handleClick},e))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.9599425b.chunk.js.map