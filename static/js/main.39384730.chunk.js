(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a,s=c(8),n=c.n(s),l=c(2),o=c(9),i=c(1);c(14),c(15);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));function d(e){var t,c="".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api").concat(e,".json");return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var r=c(0),j=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},u=c(3),b=Object(i.memo)((function(e){var t=e.options,c=e.onOptionsChange,s=t.status,n=t.query;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsx)("select",{value:s,onChange:function(e){c((function(t){return Object(u.a)(Object(u.a)({},t),{},{status:e.target.value})}))},"data-cy":"statusSelect",className:"is-capitalized",children:Object.values(a).map((function(e){return Object(r.jsx)("option",{value:e,className:"is-capitalized",children:e},e)}))})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{value:n,onChange:function(e){c((function(t){return Object(u.a)(Object(u.a)({},t),{},{query:e.target.value})}))},type:"text",className:"input","data-cy":"searchInput",placeholder:"Search..."}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(r.jsx)("span",{className:"icon is-right",children:n&&Object(r.jsx)("button",{type:"button",className:"delete","aria-label":"Clear Search","data-cy":"clearSearchButton",onClick:function(){c((function(e){return Object(u.a)(Object(u.a)({},e),{},{query:""})}))}})})]})]})})),h=c(4),m=c.n(h),O=Object(i.memo)((function(e){var t=e.todo,c=e.selectedTodo,a=void 0===c?null:c,s=e.onSelect,n=void 0===s?function(){}:s,l=t.id,o=t.title,i=t.completed,d=l===(null===a||void 0===a?void 0:a.id);return Object(r.jsxs)("tr",{"data-cy":"todo",className:m()({"has-background-info-light":d}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:l}),Object(r.jsx)("td",{className:"is-vcentered",children:i&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:m()({"has-text-success":i,"has-text-danger":!i}),children:o})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{type:"button",className:"button","data-cy":"selectButton",onClick:function(){return n(t)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:m()("far",{"fa-eye-slash":d,"fa-eye":!d})})})})})]})})),x=Object(i.memo)((function(e){var t=e.todos,c=e.selectedTodo,a=void 0===c?null:c,s=e.onSelect,n=void 0===s?function(){}:s;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){return Object(r.jsx)(O,{todo:e,selectedTodo:a,onSelect:n},e.id)}))})]})})),f=function(e){var t=e.todo,c=e.onClose,a=Object(i.useState)(!0),s=Object(l.a)(a,2),n=s[0],o=s[1],u=Object(i.useState)(null),b=Object(l.a)(u,2),h=b[0],O=b[1];Object(i.useEffect)((function(){var e;(e=t.userId,d("/users/".concat(e))).then(O).catch((function(e){console.log(e)})).finally((function(){o(!1)}))}),[]);var x=t.id,f=t.title,v=t.completed;return Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),n?Object(r.jsx)(j,{}):Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(x)}),Object(r.jsx)("button",{type:"button",className:"delete","aria-label":"Close","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:f}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(r.jsx)("strong",{className:m()({"has-text-success":v,"has-text-danger":!v}),children:v?"Done":"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(null===h||void 0===h?void 0:h.email),children:null===h||void 0===h?void 0:h.name})]})]})]})]})};var v={status:a.All,query:""},p=function(){var e=Object(i.useState)(!0),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)([]),u=Object(l.a)(n,2),h=u[0],m=u[1],O=Object(i.useState)(null),p=Object(l.a)(O,2),N=p[0],y=p[1],g=Object(i.useState)(v),C=Object(l.a)(g,2),S=C[0],k=C[1];Object(i.useEffect)((function(){d("/todos").then(m).catch((function(e){console.log(e)})).finally((function(){s(!1)}))}),[]);var w=Object(i.useMemo)((function(){return function(e,t){var c=t.status,s=t.query,n=Object(o.a)(e);return c!==a.All&&(n=n.filter((function(e){var t=e.completed;switch(c){case a.Active:return!t;case a.Completed:return t;default:throw new Error("This will never happen.")}}))),s&&(n=n.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}))),n}(h,S)}),[h,S]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(b,{options:S,onOptionsChange:k})}),Object(r.jsx)("div",{className:"block",children:c?Object(r.jsx)(j,{}):Object(r.jsx)(x,{todos:w,selectedTodo:N,onSelect:y})})]})})}),N&&Object(r.jsx)(f,{todo:N,onClose:y})]})};n.a.render(Object(r.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.39384730.chunk.js.map