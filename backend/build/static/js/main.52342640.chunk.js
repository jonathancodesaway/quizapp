(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},18:function(e,t,n){e.exports=n(36)},23:function(e,t,n){},26:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(16),s=n.n(i),u=(n(23),n(1)),c=n(2),o=n(4),l=n(3),p=n(5),m=(n(14),n(26),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(o.a)(this,Object(l.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"question"},this.props.question,this.props.answers.map(function(e){return a.a.createElement("div",{className:"answer"},e[0],a.a.createElement("input",{type:"radio",name:"selection"}))}),";")}}]),t}(r.Component)),d=(n(28),function(e){function t(){var e;return Object(u.a)(this,t),(e=Object(o.a)(this,Object(l.a)(t).call(this))).state={},e}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"quiz"},a.a.createElement("h1",null,this.props.quizTitle),this.props.quizQuestionsAndAnswers.map(function(e){return a.a.createElement(m,{question:e[0],answers:e[1]})}),";",this.props.resultRender?a.a.createElement("div",{className:"result"},this.props.quizResult):null)}}]),t}(r.Component)),h=(n(30),function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"footer"},"\xa9 2019")}}]),t}(r.Component)),b=n(9),f=Object(b.b)(function(e){return{quizTitle:e.quizTitle,quizID:e.quizID,quizQuestionsAndAnswers:e.quizQuestionsAndAnswers,resultRender:e.resultRender,quizResults:e.quizResults}},function(e){return{submitAnswers:function(t){e({type:"SUBMIT",quizResults:t})}}})(d),j=function(e){function t(){return Object(u.a)(this,t),Object(o.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},"Quiz App"),a.a.createElement(f,null),a.a.createElement(h,null))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=n(8),q={quizTitle:"Which Disney princess are you?",quizID:1,quizQuestionsAndAnswers:[],resultRender:!1,quizResult:55},v=Object(O.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SUBMIT":return Object.assign({},e,{quizResult:t.quizResult});default:return e}});console.log(v.getState());var w=v,z=document.getElementById("root");s.a.render(a.a.createElement(b.a,{store:w},a.a.createElement(j,null)),z),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.52342640.chunk.js.map