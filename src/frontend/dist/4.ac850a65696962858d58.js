webpackJsonp([4],{414:function(t,e,n){"use strict";function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments[1],n=f[e.type];return n?n(t,e):t}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"GET_ACCOUNT",function(){return s}),n.d(e,"UPDATE_ACCOUNT",function(){return p}),n.d(e,"getAccount",function(){return l}),n.d(e,"updateAccount",function(){return d}),n.d(e,"actions",function(){return m}),e.default=a;var c,o=n(112),r=n.n(o),u=n(61),i=n.n(u),s="GET_ACCOUNT",p="UPDATE_ACCOUNT",l=function(t,e){var n=i.a.post("/profile",{phone:t,userType:e});return{type:s,payload:n}},d=function(t){var e=i.a.post("/profile/update",Object.assign({},t));return{type:p,payload:e}},m={getAccount:l,updateAccount:d},f=(c={},r()(c,s,function(t,e){return Object.assign({},t,{account:e.payload.data})}),r()(c,p,function(t,e){return Object.assign({},t,{account:e.payload.data})}),c),h={account:null}},417:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(60),c=n(414),o=n(438),r={getAccount:function(t,e){return n.i(c.getAccount)(t,e)},updateAccount:function(t){return n.i(c.updateAccount)(t)}},u=function(t){return{account:t.account.account,auth:t.auth}};e.default=n.i(a.connect)(u,r)(o.a)},437:function(t,e,n){"use strict";var a=n(183),c=n.n(a),o=n(184),r=n.n(o),u=n(186),i=n.n(u),s=n(185),p=n.n(s),l=n(5),d=n.n(l),m=(n(21),n(473)),f=(n.n(m),function(t){function e(t){c()(this,e);var n=i()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.updateProfile=function(){n.props.updateAccount({})},n.state={timer:60},n}return p()(e,t),r()(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return d.a.createElement("div",{className:"AboutWrapper"},d.a.createElement("div",{className:"AboutInner"},d.a.createElement("div",{className:"title"},this.props.data?this.props.data.name:null),d.a.createElement("div",{className:"item"},d.a.createElement("div",{className:"description"},"Name:"),d.a.createElement("input",{id:"animal-species",type:"text",name:"species",placeholder:this.props.data?this.props.data.name:""})),d.a.createElement("div",{className:"item"},d.a.createElement("div",{className:"description"},"Phone:"),d.a.createElement("input",{id:"animal-breed",type:"text",name:"species",placeholder:this.props.data?this.props.data.phone:""})),d.a.createElement("div",{className:"item"},d.a.createElement("div",{className:"description"},"User Type:"),d.a.createElement("input",{type:"text",name:"age",placeholder:this.props.data?this.props.data.userType:""}))))}}]),e}(l.Component));e.a=f},438:function(t,e,n){"use strict";var a=n(183),c=n.n(a),o=n(184),r=n.n(o),u=n(186),i=n.n(u),s=n(185),p=n.n(s),l=n(5),d=n.n(l),m=n(21),f=n(474),h=(n.n(f),n(439)),v=n(437),y=function(t){function e(t){return c()(this,e),i()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return p()(e,t),r()(e,[{key:"componentWillMount",value:function(){}},{key:"componentDidMount",value:function(){null!=this.props.auth?this.props.getAccount(this.props.auth.phone,this.props.auth.userType):m.browserHistory.push("/")}},{key:"render",value:function(){return d.a.createElement("div",{className:"AnimalWrapper"},d.a.createElement(v.a,{data:this.props.account}),d.a.createElement(h.a,{data:this.props.account}))}}]),e}(l.Component);e.a=y},439:function(t,e,n){"use strict";var a=n(183),c=n.n(a),o=n(184),r=n.n(o),u=n(186),i=n.n(u),s=n(185),p=n.n(s),l=n(5),d=n.n(l),m=(n(21),n(475)),f=(n.n(m),function(t){function e(t){return c()(this,e),i()(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t))}return p()(e,t),r()(e,[{key:"componentWillMount",value:function(){}},{key:"render",value:function(){return d.a.createElement("div",{className:"DetailsWrapper"},d.a.createElement("div",{className:"DetailsInner"},d.a.createElement("div",null,this.props.data?"Hey, "+this.props.data.name:null)))}}]),e}(l.Component));e.a=f},473:function(t,e){},474:function(t,e){},475:function(t,e){}});
//# sourceMappingURL=4.ac850a65696962858d58.js.map