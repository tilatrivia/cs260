(function(e){function t(t){for(var s,r,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],s=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(s=!1)}s&&(i.splice(t--,1),e=r(r.s=a[0]))}return e}var s={},n={app:0},i=[];function r(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=s,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(a,s,function(t){return e[t]}.bind(null,s));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("85ec"),n=a.n(s);n.a},"0d49":function(e,t,a){},"1d8c":function(e,t,a){},"2a82":function(e,t,a){"use strict";var s=a("d16f"),n=a.n(s);n.a},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="4678"},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"header"}},[a("div",{attrs:{id:"open-close"}},[a("button",{class:{"open-button":!0,open:this.$root.$data.open},on:{click:function(t){return e.toggleOpen()}}},[e._v(e._s(this.$root.$data.open?"Open":"Closed")+" ")])]),a("div",{attrs:{id:"queue-name"}},[a("h1",{attrs:{id:"queue-name"}},[e._v(e._s(this.queueName))])]),a("div",{attrs:{id:"user-name"}},[a("p",[e._v(e._s(this.user))])])]),a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Get Help")]),a("router-link",{attrs:{to:"/queue"}},[e._v("Queue")]),a("router-link",{attrs:{to:"/history"}},[e._v("History")])],1),a("router-view"),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"footer"},[a("p",[e._v("Made by Truman Kautzman.")]),a("p",[e._v("Source found on "),a("a",{attrs:{href:"https://github.com/tilatrivia/cs260/tree/master/project4"}},[e._v("GitHub")]),e._v(".")])])}],r=(a("4795"),a("96cf"),a("1da1")),o=a("bc3a"),c=a.n(o),u={data:function(){return{queueName:this.$root.$data.settings.queueName,interval:null}},computed:{user:function(){return this.$root.$data.user}},methods:{checkOpen:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/api");case 2:a=t.sent,e.$root.$data.open=a.data.open;case 4:case"end":return t.stop()}}),t)})))()},toggleOpen:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.$root.$data.open=!e.$root.$data.open,t.next=3,c.a.put("/api",{open:e.$root.$data.open});case 3:a=t.sent,e.$root.$data.open=a.data.open;case 5:case"end":return t.stop()}}),t)})))()},getRandomName:function(){var e=["Faythe Smylie","Veda Sellman","Perle Thirlwall","Karalee Thomassin","Curry O'Carrol","Denys Giraldez","Thaddus Terbruggen","Flossie Audley","Nerita Lerwill","Roda Albon","Fenelia Gratten","Anne-corinne Andrick","Jedidiah Bardill","Dorey Vedeniktov","Raoul Kliment","Abeu Wheelhouse","Harwell Lapley","Val Kitchenside","Rodolph Robelin","Brittaney Gladyer","Mortimer Farrah","Kassie Tatlowe","Filia Fulep","Carmella Hehir","Rani Coaten","Llywellyn Naris","Analiese Libreros","Bogart Kernock","Sergei Seebright","Natalie Corneille","Joeann Chomiszewski","Corinna Wiseman","Conrad Tallquist","Vania Iverson","Kent Itzkovitch","Deirdre Forst","Dewie Maypes","Gilburt Kalinovich","Saudra Valois","Druci Welch","Zebulon Campos","Justin Pywell","Tann Sirett","Jamey Chasemore","Drucill Balentyne","Dione Dillon","Sean Kinder","Gaynor Chalice","Traci Layus","Dulciana Fotheringham"];return e[Math.floor(50*Math.random())]}},created:function(){var e=this;this.$root.$data.user=this.getRandomName(),this.checkOpen(),this.interval=setInterval((function(){e.checkOpen()}),5e3)},destroyed:function(){clearInterval(this.interval)}},l=u,d=(a("034f"),a("2877")),f=Object(d["a"])(l,n,i,!1,null,null,null),h=f.exports,p=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h2",[e._v("Get Help")]),a("p",[e._v(e._s(this.queueMessage))]),a("br"),"join"===this.status?a("div",{staticClass:"join"},[a("div",{staticClass:"info"},[a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.helping))]),a("p",{staticClass:"info-label"},[e._v("Being Helped")])]),a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.avgWaitString))]),a("p",{staticClass:"info-label"},[e._v("Average Wait")])]),a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.waiting))]),a("p",{staticClass:"info-label"},[e._v("Waiting")])])]),a("br"),a("form",{attrs:{id:"create-ticket"}},[a("button",{class:{passoff:e.isPassoff},attrs:{type:"button",id:"ticket-passoff",disabled:!this.$root.$data.open},on:{click:function(t){return t.preventDefault(),e.togglePassoff()}}},[e._v("Pass Off")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.question,expression:"question"}],attrs:{disabled:e.isPassoff||!this.$root.$data.open},domProps:{value:e.question},on:{input:function(t){t.target.composing||(e.question=t.target.value)}}}),e._v(" "),a("button",{attrs:{type:"button",disabled:!this.$root.$data.open,id:"ticket-submit"},on:{click:function(t){return t.preventDefault(),e.submitTicket()}}},[e._v("Join Queue")])])]):e._e(),"waiting"===this.status?a("div",{staticClass:"waiting"},[a("div",{staticClass:"info"},[a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.helping))]),a("p",{staticClass:"info-label"},[e._v("Being Helped")])]),a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.fromString))]),a("p",{staticClass:"info-label"},[e._v("Waited")])]),a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.place))]),a("p",{staticClass:"info-label"},[e._v("Place")])])]),a("br"),this.$root.$data.myTicket.isPassoff?a("h3",[e._v("Pass Off")]):a("h3",[e._v("Your Question")]),a("p",{staticClass:"question"},[e._v(e._s(this.$root.$data.myTicket.question))])]):e._e(),"helped"===this.status?a("div",{staticClass:"being helped"},[a("div",{staticClass:"info"},[a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.helping))]),a("p",{staticClass:"info-label"},[e._v("Being Helped")])]),a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.fromString))]),a("p",{staticClass:"info-label"},[e._v("Helped")])]),a("div",{staticClass:"info-tile"},[a("p",{staticClass:"info-value"},[e._v(e._s(this.waiting))]),a("p",{staticClass:"info-label"},[e._v("Waiting")])])]),a("br"),this.$root.$data.myTicket.isPassoff?a("h3",[e._v("Pass Off")]):a("h3",[e._v("Your Question")]),a("p",{staticClass:"question"},[e._v(e._s(this.$root.$data.myTicket.question))])]):e._e()])},m=[],b=a("c1df"),j=a.n(b),_={name:"Join",data:function(){return{queueMessage:this.$root.$data.settings.message,isPassoff:!1,question:"",avgWaitSeconds:0,fromSeconds:0,waiting:0,helping:0,place:0,interval:null,waitInterval:null}},computed:{status:function(){return this.$root.$data.myTicket&&0===this.$root.$data.myTicket.waitSeconds?"waiting":this.$root.$data.myTicket&&0!==this.$root.$data.myTicket.waitSeconds?"helped":"join"},fromString:function(){return Math.floor(this.fromSeconds/60)+":"+(Math.abs(this.fromSeconds%60)<10?"0":"")+Math.abs(this.fromSeconds%60)},avgWaitString:function(){return Math.floor(this.avgWaitSeconds/60)+":"+(Math.abs(this.avgWaitSeconds%60)<10?"0":"")+Math.floor(Math.abs(this.avgWaitSeconds%60))}},methods:{togglePassoff:function(){this.isPassoff?this.isPassoff=!1:(this.isPassoff=!0,this.question="")},updateStats:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/api/queue/stats");case 2:a=t.sent,e.avgWaitSeconds=a.data.averageWait,e.waiting=a.data.waiting,e.helping=a.data.helping;case 6:case"end":return t.stop()}}),t)})))()},submitTicket:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.post("/api/queue",{name:e.$root.$data.user,isPassoff:e.isPassoff,question:e.question});case 2:a=t.sent,e.$root.$data.myTicket=a.data.ticket,e.place=a.data.place,e.question="",e.isPassoff=!1,e.fromSeconds=0;case 8:case"end":return t.stop()}}),t)})))()},updateTicket:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/queue/"+e.$root.$data.myTicket._id);case 3:a=t.sent,e.$root.$data.myTicket=a.data.ticket,e.place=a.data.place,e.fromSeconds=Math.floor(j()().diff(j()(e.$root.$data.myTicket.enterTime))/1e3)-e.$root.$data.myTicket.waitSeconds,t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),404===t.t0.response.status&&(e.$root.$data.myTicket=void 0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},created:function(){var e=this;this.updateStats(),this.$root.$data.myTicket&&this.updateTicket(),this.interval=setInterval((function(){e.updateStats(),"waiting"!==e.status&&"helped"!==e.status||e.updateTicket()}),5e3),this.waitInterval=setInterval((function(){e.waiting&&e.avgWaitSeconds++,e.fromSeconds++}),1e3)},destroyed:function(){clearInterval(this.interval),clearInterval(this.waitInterval)}},g=_,k=(a("e6bd"),Object(d["a"])(g,v,m,!1,null,null,null)),y=k.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h2",[e._v("Being Helped")]),e._l(e.helping,(function(e){return a("QueueTicket",{key:e._id,staticClass:"ticket"})})),0==this.helping.length?a("h3",[e._v("Empty!")]):e._e(),a("h2",[e._v("Queue")]),e._l(e.waiting,(function(e){return a("QueueTicket",{key:e._id,staticClass:"ticket"})})),0==this.waiting.length?a("h3",[e._v("Empty!")]):e._e()],2)},$=[],C=(a("4de4"),a("4e82"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{class:{"queue-ticket":!0,"ticket-passoff":e.ticket.isPassoff},attrs:{type:"button"},on:{click:function(t){return e.clickTicket()}}},[a("div",{staticClass:"ticket-header"},[a("h3",[e._v(e._s(e.ticket.name))]),a("h3",[e._v(e._s(this.fromString))])]),e.ticket.passoff?e._e():a("p",{staticClass:"ticket-message"},[e._v(e._s(e.ticket.question))])])}),S=[],T=(a("7db0"),{name:"QueueTicket",data:function(){var e=this;return{ticket:this.$root.$data.queue.find((function(t){return t._id===e.$vnode.key})),fromSeconds:0,fromInterval:null}},computed:{fromString:function(){return Math.floor(this.fromSeconds/60)+":"+(Math.abs(this.fromSeconds%60)<10?"0":"")+Math.abs(this.fromSeconds%60)},queue:function(){return this.$root.$data.queue}},methods:{updateFrom:function(){this.fromSeconds=Math.floor(j()().diff(j()(this.ticket.enterTime))/1e3)-this.ticket.waitSeconds},clickTicket:function(){this.ticket.waitSeconds?this.deleteTicket():this.helpTicket()},helpTicket:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.ticket.waitSeconds=e.fromSeconds,t.next=3,c.a.put("/api/queue/"+e.ticket._id,{helpedBy:e.$root.$data.user});case 3:a=t.sent,e.ticket=a.data.ticket;case 5:case"end":return t.stop()}}),t)})))()},deleteTicket:function(){var e=this;this.$root.$data.queue=this.$root.$data.queue.filter((function(t){return t._id!==e.ticket._id})),c.a["delete"]("/api/queue/"+this.ticket._id)}},watch:{queue:function(){var e=this;this.ticket=this.$root.$data.queue.find((function(t){return t._id===e.$vnode.key}))}},created:function(){var e=this;this.fromInterval=setInterval((function(){e.updateFrom()}),200)},destroyed:function(){clearInterval(this.fromInterval)}}),q=T,O=(a("e96b"),Object(d["a"])(q,C,S,!1,null,"6cf96742",null)),x=O.exports,M={name:"Queue",components:{QueueTicket:x},data:function(){return{tickets:[],interval:null}},computed:{helping:function(){return this.$root.$data.queue.filter((function(e){return e.waitSeconds})).sort((function(e,t){return Math.floor(j()().diff(j()(t.enterTime))/1e3)-t.waitSeconds-(Math.floor(j()().diff(j()(e.enterTime))/1e3)-e.waitSeconds)}))},waiting:function(){return this.$root.$data.queue.filter((function(e){return!e.waitSeconds}))}},methods:{getTickets:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c.a.get("/api/queue");case 2:a=t.sent,e.$root.$data.queue=a.data.tickets;case 4:case"end":return t.stop()}}),t)})))()}},created:function(){var e=this;this.getTickets(),this.interval=setInterval((function(){e.getTickets()}),5e3)},destroyed:function(){clearInterval(this.interval)}},H=M,P=(a("e79b"),Object(d["a"])(H,w,$,!1,null,"3b5c0cd0",null)),z=P.exports,R=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h2",[e._v("Schedule")]),a("h3",[e._v("Features to Add")]),a("ul",[a("li",[e._v("Calendar wtih TA names")]),a("li",[e._v("Editing")])])])}],Q={},I=Object(d["a"])(Q,R,E,!1,null,null,null),W=I.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h2",[e._v("Statistics")]),a("h3",[e._v("Features to Add")]),a("ul",[a("li",[e._v("Chart of Entry Times")]),a("li",[e._v("Chart of Wait Times")]),a("li",[e._v("Chart of Help Times")]),a("li",[e._v("Various Averages")]),a("li",[e._v("Help Counts for Students and TAs")])])])}],D={},F=D,B=Object(d["a"])(F,N,A,!1,null,null,null),G=B.exports,L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h2",[e._v("Queue History")]),a("form",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.studentSearch,expression:"studentSearch"}],attrs:{type:"search",placeholder:"All Students"},domProps:{value:e.studentSearch},on:{input:function(t){t.target.composing||(e.studentSearch=t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.taSearch,expression:"taSearch"}],attrs:{type:"search",placeholder:"All TAs"},domProps:{value:e.taSearch},on:{input:function(t){t.target.composing||(e.taSearch=t.target.value)}}})]),e._m(0),e._l(e.viewHistory,(function(t){return a("div",{key:t.id,staticClass:"history-ticket"},[a("p",{staticClass:"name"},[e._v(e._s(t.name))]),a("p",{staticClass:"ta"},[e._v(e._s(t.helpedBy))]),a("p",{staticClass:"date"},[e._v(e._s(e._f("moment")(t.enterTime,"MMM D")))]),a("p",{staticClass:"time"},[e._v(e._s(e._f("moment")(t.enterTime,"h:mma")))]),a("p",{staticClass:"waited"},[e._v(e._s(e.secondsToString(t.waitSeconds)))]),a("p",{staticClass:"helped"},[e._v(e._s(e.secondsToString(t.helpSeconds)))])])}))],2)},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"history-ticket history-header"},[a("p",{staticClass:"name"},[e._v("Student Name")]),a("p",{staticClass:"ta"},[e._v("Helped By")]),a("p",{staticClass:"date"},[e._v("Date")]),a("p",{staticClass:"time"},[e._v("Entered")]),a("p",{staticClass:"waited"},[e._v("Waited")]),a("p",{staticClass:"helped"},[e._v("Helped")])])}],K=(a("b0c0"),a("ac1f"),a("841c"),{name:"History",data:function(){return{history:[],studentSearch:"",taSearch:""}},computed:{viewHistory:function(){var e=this;return this.history.filter((function(t){return t.name.toLowerCase().search(e.studentSearch.toLowerCase())>=0&&t.helpedBy.toLowerCase().search(e.taSearch.toLowerCase())>=0}))}},created:function(){this.getHistory()},methods:{getHistory:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.a.get("/api/history");case 3:return a=t.sent,e.history=a.data.history,t.abrupt("return",!0);case 8:t.prev=8,t.t0=t["catch"](0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()},secondsToString:function(e){return Math.floor(e/60)+":"+(Math.abs(e%60)<10?"0":"")+Math.abs(e%60)}}}),V=K,U=(a("2a82"),Object(d["a"])(V,L,J,!1,null,"80064f9a",null)),Y=U.exports,Z=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},X=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("h2",[e._v("Settings")]),a("h3",[e._v("Features to Add")]),a("ul",[a("li",[e._v("Change Hours")]),a("li",[e._v("Change Queue Name")]),a("li",[e._v("Change Join Message")]),a("li",[e._v("Enable Room Numbers")]),a("li",[e._v("Enable Passoffs")])])])}],ee={},te=Object(d["a"])(ee,Z,X,!1,null,null,null),ae=te.exports;s["a"].use(p["a"]);var se=[{path:"/",name:"Join",component:y,meta:{title:"Help Queue - Get Help"}},{path:"/queue",name:"Queue",component:z,meta:{title:"Help Queue - Queue"}},{path:"/schedule",name:"Schedule",component:W,meta:{title:"Help Queue - Schedule"}},{path:"/stats",name:"Stats",component:G,meta:{title:"Help Queue - Statistics"}},{path:"/history",name:"History",component:Y,meta:{title:"Help Queue - History"}},{path:"/settings",name:"Settings",component:ae,meta:{title:"Help Queue - Settings"}}],ne=new p["a"]({mode:"history",base:"/",routes:se});ne.beforeEach((function(e,t,a){document.title=e.meta.title,a()}));var ie=ne;s["a"].config.productionTip=!1,s["a"].use(a("2ead"));var re={open:!0,user:"Demo User",myTicket:void 0,queue:[],settings:{queueName:"Help Queue",message:"Leave a question below. If you need to do a passoff enable the passoff button."}};new s["a"]({router:ie,data:re,render:function(e){return e(h)}}).$mount("#app")},"6c6e":function(e,t,a){},"85ec":function(e,t,a){},d16f:function(e,t,a){},e6bd:function(e,t,a){"use strict";var s=a("1d8c"),n=a.n(s);n.a},e79b:function(e,t,a){"use strict";var s=a("6c6e"),n=a.n(s);n.a},e96b:function(e,t,a){"use strict";var s=a("0d49"),n=a.n(s);n.a}});
//# sourceMappingURL=app.d516fb38.js.map