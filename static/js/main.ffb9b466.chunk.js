(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(4),c=a.n(o),r=a(5),m=a(6),i=(a(12),a(13),function(e){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:e.addTask},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"To do name"),l.a.createElement("input",{type:"text",className:"form-control"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Submit")))}),d=function(e){return l.a.createElement("li",{className:"list-group-item "+(e.completed?"completed":"")},l.a.createElement("div",{className:"icon-check",onClick:function(){return e.markComplete(e.item.id)}},l.a.createElement("svg",{className:"bi bi-check",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M13.854 3.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3.5-3.5a.5.5 0 11.708-.708L6.5 10.293l6.646-6.647a.5.5 0 01.708 0z"}))),l.a.createElement("span",null,e.item.text),l.a.createElement("div",{className:"icon-remove",onClick:function(){return e.deleteTodo(e.item.id)}},l.a.createElement("svg",{className:"bi bi-x",width:"1em",height:"1em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z"}),l.a.createElement("path",{d:"M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z"}))))},s=function(e){return l.a.createElement("div",{className:"todolist"},e.todos.length>0?l.a.createElement("ul",{className:"list-group"},e.todos.map((function(t,a){return l.a.createElement(d,{key:a,item:t,completed:t.completed,markComplete:e.markComplete,deleteTodo:e.deleteTodo})}))):l.a.createElement("div",null,"No tasks"))},u=[{id:0,text:"First todo item",completed:!1},{id:1,text:"Second todo item",completed:!1},{id:2,text:"Third todo item",completed:!0}],p=function(){var e=Object(n.useState)(u),t=Object(m.a)(e,2),a=t[0],o=t[1];return l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"text-center"},"To do app"),l.a.createElement(i,{todos:a,addTask:function(e){e.preventDefault();var t={id:a.length+1,text:e.target.querySelector("input").value,completed:!1};""!==t.text&&(o([].concat(Object(r.a)(a),[t])),e.target.querySelector("input").value="")}}),l.a.createElement(s,{todos:a,markComplete:function(e){o(a.map((function(t){return t.id===e&&(t.completed=!t.completed),t})))},deleteTodo:function(e){o(a.filter((function(t){return t.id!==e})))}}))};c.a.render(l.a.createElement(p,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ffb9b466.chunk.js.map