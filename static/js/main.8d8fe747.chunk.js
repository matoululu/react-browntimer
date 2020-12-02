(this["webpackJsonpreact-browntimer"]=this["webpackJsonpreact-browntimer"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),i=a(4),l=a.n(i),s=(a(14),a(15),a.p+"static/media/browntimer.10f99b3b.svg");var o,u=function(){return Object(n.jsx)("header",{className:"container",children:Object(n.jsx)("img",{src:s,className:"logo",alt:"logo"})})},h=a(5),d=a(6),b=a(2),m=a(8),j=a(7),y=0,f=function(e){Object(m.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(h.a)(this,a),(n=t.call(this,e)).amountRef=c.a.createRef(),n.earnedRef=c.a.createRef(),n.salaryRadio=c.a.createRef(),n.handleChange=n.handleChange.bind(Object(b.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(b.a)(n)),n.handleClick=n.handleClick.bind(Object(b.a)(n)),n.state={seconds:0,earned:0,isActive:!1},n}return Object(d.a)(a,[{key:"handleChange",value:function(e){e.target.checked=!0,this.changePayType(e)}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"handleClick",value:function(e){if(this.setState((function(e){return{isActive:!e.isActive}})),!1===this.state.isActive){var t=this.amountRef.current.value,a=localStorage.getItem("payType");this.startTimer(t,a)}else clearInterval(o),this.setState((function(e){return{seconds:0}}))}},{key:"changePayType",value:function(e){"salary"===e.target.id?(this.amountRef.current.placeholder="Your salary",localStorage.setItem("payType","salary")):(this.amountRef.current.placeholder="Your hourly wage",localStorage.setItem("payType","hourly"))}},{key:"startTimer",value:function(e,t){var a=this;e?(localStorage.setItem("wage",e),o=setInterval((function(){return a.tick(e,t)}),1e3)):console.log("empty")}},{key:"tick",value:function(e,t){var a=this.calculateSalary(e,t);this.setState((function(e){return{seconds:e.seconds+1,earned:a}}))}},{key:"calculateSalary",value:function(e,t){"salary"===t?y+=e/2080/60/60:y+=e/60/60;return(Math.round(100*y)/100).toFixed(2)}},{key:"componentDidMount",value:function(){var e=localStorage.getItem("payType"),t=localStorage.getItem("wage");"salary"===e&&(this.salaryRadio.current.checked=!0,this.amountRef.current.placeholder="Your salary"),t&&(this.amountRef.current.value=t)}},{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"timer",children:[Object(n.jsx)("p",{children:"You've earned:"}),Object(n.jsxs)("h1",{children:["$",Object(n.jsx)("span",{ref:this.earnedRef,children:this.state.earned})]})]}),Object(n.jsxs)("form",{action:"submit",onSubmit:this.handleSubmit,children:[Object(n.jsx)("input",{ref:this.amountRef,type:"number",name:"input",id:"input",min:"1",maxLength:"20",placeholder:"Your hourly wage"}),Object(n.jsxs)("div",{className:"form__toggle",children:[Object(n.jsx)("input",{onChange:this.handleChange,type:"radio",id:"hourly",name:"calculate",defaultChecked:!0}),Object(n.jsx)("label",{className:"label--hourly",htmlFor:"hourly",children:"Use hourly"}),Object(n.jsx)("input",{ref:this.salaryRadio,onChange:this.handleChange,type:"radio",id:"salary",name:"calculate"}),Object(n.jsx)("label",{className:"label--salary",htmlFor:"salary",children:"Use salary"})]}),Object(n.jsx)("button",{className:"start-timer",onClick:this.handleClick,children:this.state.isActive?"Stop":"Start"})]})]})}}]),a}(c.a.Component);var g=function(){return Object(n.jsx)("main",{className:"container",children:Object(n.jsx)(f,{})})};var v=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(u,{}),Object(n.jsx)(g,{})]})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};l.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.8d8fe747.chunk.js.map