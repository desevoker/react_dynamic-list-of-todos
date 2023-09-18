(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a,s=c(8),n=c.n(s),l=c(2),i=c(9),o=c(1);c(14),c(15);!function(e){e.All="all",e.Active="active",e.Completed="completed"}(a||(a={}));function r(e){var t,c="".concat("https://mate-academy.github.io/react_dynamic-list-of-todos/api").concat(e,".json");return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(16);var d=c(0),j=function(){return Object(d.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(d.jsx)("div",{className:"Loader__content"})})},u=c(3),b=Object(o.memo)((function(e){var t=e.options,c=e.onOptionsChange,s=t.status,n=t.query;return Object(d.jsxs)("form",{className:"field has-addons",children:[Object(d.jsx)("p",{className:"control",children:Object(d.jsx)("span",{className:"select",children:Object(d.jsx)("select",{value:s,onChange:function(e){c((function(t){return Object(u.a)(Object(u.a)({},t),{},{status:e.target.value})}))},"data-cy":"statusSelect",className:"is-capitalized",children:Object.values(a).map((function(e){return Object(d.jsx)("option",{value:e,className:"is-capitalized",children:e},e)}))})})}),Object(d.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(d.jsx)("input",{value:n,onChange:function(e){c((function(t){return Object(u.a)(Object(u.a)({},t),{},{query:e.target.value})}))},type:"text",className:"input","data-cy":"searchInput",placeholder:"Search..."}),Object(d.jsx)("span",{className:"icon is-left",children:Object(d.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(d.jsx)("span",{className:"icon is-right",children:n&&Object(d.jsx)("button",{type:"button",className:"delete","aria-label":"Clear Search","data-cy":"clearSearchButton",onClick:function(){c((function(e){return Object(u.a)(Object(u.a)({},e),{},{query:""})}))}})})]})]})})),h=Object(o.memo)((function(e){var t=e.children;return Object(d.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"#"}),Object(d.jsx)("th",{children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("th",{children:"Title"}),Object(d.jsx)("th",{children:" "})]})}),Object(d.jsx)("tbody",{children:t})]})})),m=c(4),O=c.n(m),x=Object(o.memo)((function(e){var t=e.todo,c=e.selectedTodo,a=void 0===c?null:c,s=e.onSelect,n=void 0===s?function(){}:s,l=t.id,i=t.title,o=t.completed,r=l===(null===a||void 0===a?void 0:a.id);return Object(d.jsxs)("tr",{"data-cy":"todo",className:O()({"has-background-info-light":r}),children:[Object(d.jsx)("td",{className:"is-vcentered",children:l}),Object(d.jsx)("td",{className:"is-vcentered",children:o&&Object(d.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(d.jsx)("i",{className:"fas fa-check"})})}),Object(d.jsx)("td",{className:"is-vcentered is-expanded",children:Object(d.jsx)("p",{className:O()({"has-text-success":o,"has-text-danger":!o}),children:i})}),Object(d.jsx)("td",{className:"has-text-right is-vcentered",children:Object(d.jsx)("button",{type:"button",className:"button","data-cy":"selectButton",onClick:function(){return n(t)},children:Object(d.jsx)("span",{className:"icon",children:Object(d.jsx)("i",{className:O()("far",{"fa-eye-slash":r,"fa-eye":!r})})})})})]})})),f=function(e){var t=e.todo,c=e.onClose,a=Object(o.useState)(!1),s=Object(l.a)(a,2),n=s[0],i=s[1],u=Object(o.useState)(null),b=Object(l.a)(u,2),h=b[0],m=b[1];Object(o.useEffect)((function(){var e;i(!0),(e=t.userId,r("/users/".concat(e))).then(m).catch((function(e){console.log(e)})).finally((function(){i(!1)}))}),[]);var x=t.id,f=t.title,v=t.completed;return Object(d.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(d.jsx)("div",{className:"modal-background"}),n?Object(d.jsx)(j,{}):Object(d.jsxs)("div",{className:"modal-card",children:[Object(d.jsxs)("header",{className:"modal-card-head",children:[Object(d.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(x)}),Object(d.jsx)("button",{type:"button",className:"delete","aria-label":"Close","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(d.jsxs)("div",{className:"modal-card-body",children:[Object(d.jsx)("p",{className:"block","data-cy":"modal-title",children:f}),Object(d.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(d.jsx)("strong",{className:O()({"has-text-success":v,"has-text-danger":!v}),children:v?"Done":"Planned"})," by ",Object(d.jsx)("a",{href:"mailto:".concat(null===h||void 0===h?void 0:h.email),children:null===h||void 0===h?void 0:h.name})]})]})]})]})};var v={status:a.All,query:""},p=function(){var e=Object(o.useState)(!1),t=Object(l.a)(e,2),c=t[0],s=t[1],n=Object(o.useState)([]),u=Object(l.a)(n,2),m=u[0],O=u[1],p=Object(o.useState)(null),N=Object(l.a)(p,2),y=N[0],g=N[1],C=Object(o.useState)(v),k=Object(l.a)(C,2),w=k[0],S=k[1];Object(o.useEffect)((function(){s(!0),r("/todos").then(O).catch((function(e){console.log(e)})).finally((function(){s(!1)}))}),[]);var T=Object(o.useMemo)((function(){return function(e,t){var c=t.status,s=t.query,n=Object(i.a)(e);return c!==a.All&&(n=n.filter((function(e){var t=e.completed;switch(c){case a.Active:return!t;case a.Completed:return t;default:throw new Error("This will never happen.")}}))),s&&(n=n.filter((function(e){return e.title.toLowerCase().includes(s.toLowerCase())}))),n}(m,w)}),[m,w]);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"section",children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"box",children:[Object(d.jsx)("h1",{className:"title",children:"Todos:"}),Object(d.jsx)("div",{className:"block",children:Object(d.jsx)(b,{options:w,onOptionsChange:S})}),Object(d.jsx)("div",{className:"block",children:c?Object(d.jsx)(j,{}):Object(d.jsx)(h,{children:T.map((function(e){return Object(d.jsx)(x,{todo:e,selectedTodo:y,onSelect:g},e.id)}))})})]})})}),y&&Object(d.jsx)(f,{todo:y,onClose:g})]})};n.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.8f268437.chunk.js.map