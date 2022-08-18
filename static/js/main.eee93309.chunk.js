(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var s=c(4),a=c.n(s),n=c(2),l=c(1),i=(c(10),c(11),c(5)),o=c.n(i),r=c(0),d=function(e){var t=e.todos,c=e.onTodoSelect,s=e.selectedTodo;return Object(r.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"#"}),Object(r.jsx)("th",{children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("th",{children:"Title"}),Object(r.jsx)("th",{children:" "})]})}),Object(r.jsx)("tbody",{children:t.map((function(e){var t=e.id,a=e.completed,n=e.title,l=s===e;return Object(r.jsxs)("tr",{"data-cy":"todo",className:o()({"has-background-info-light":l}),children:[Object(r.jsx)("td",{className:"is-vcentered",children:t}),Object(r.jsx)("td",{className:"is-vcentered",children:a&&Object(r.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(r.jsx)("i",{className:"fas fa-check"})})}),Object(r.jsx)("td",{className:"is-vcentered is-expanded",children:Object(r.jsx)("p",{className:"has-text-".concat(a?"success":"danger"),children:n})}),Object(r.jsx)("td",{className:"has-text-right is-vcentered",children:Object(r.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(r.jsx)("span",{className:"icon",children:Object(r.jsx)("i",{className:"far fa-eye".concat(l?"-slash":"")})})})})]},t)}))})]})},j=function(e){var t=e.query,c=e.changeQuery,s=e.filterBy,a=e.changeFilter;return Object(r.jsxs)("form",{className:"field has-addons",children:[Object(r.jsx)("p",{className:"control",children:Object(r.jsx)("span",{className:"select",children:Object(r.jsxs)("select",{"data-cy":"statusSelect",value:s,onChange:function(e){return a(e.target.value)},children:[Object(r.jsx)("option",{value:"all",children:"All"}),Object(r.jsx)("option",{value:"active",children:"Active"}),Object(r.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(r.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(r.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:t,onChange:function(e){return c(e.target.value)}}),Object(r.jsx)("span",{className:"icon is-left",children:Object(r.jsx)("i",{className:"fas fa-magnifying-glass"})}),t.length>0&&Object(r.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(r.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){return c("")}})})]})]})};function b(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(13);var h=function(){return Object(r.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(r.jsx)("div",{className:"Loader__content"})})},u=function(e){var t=e.todo,c=e.onClose,s=Object(l.useState)(null),a=Object(n.a)(s,2),i=a[0],o=a[1];return Object(l.useEffect)((function(){var e;(e=t.userId,b("/users/".concat(e))).then((function(e){return o(e)}))}),[]),Object(r.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(r.jsx)("div",{className:"modal-background"}),i?Object(r.jsxs)("div",{className:"modal-card",children:[Object(r.jsxs)("header",{className:"modal-card-head",children:[Object(r.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(r.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(r.jsxs)("div",{className:"modal-card-body",children:[Object(r.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(r.jsxs)("p",{className:"block","data-cy":"modal-user",children:[t.completed?Object(r.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(r.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(r.jsx)("a",{href:"mailto:".concat(i.email),children:i.name})]})]})]}):Object(r.jsx)(h,{})]})},m=function(){var e=Object(l.useState)([]),t=Object(n.a)(e,2),c=t[0],s=t[1],a=Object(l.useState)(""),i=Object(n.a)(a,2),o=i[0],m=i[1],O=Object(l.useState)("all"),x=Object(n.a)(O,2),f=x[0],N=x[1],p=Object(l.useState)(null),v=Object(n.a)(p,2),y=v[0],g=v[1];Object(l.useEffect)((function(){b("/todos").then((function(e){return s(e)}))}),[]);var k=Object(l.useCallback)((function(){g(null)}),[]),C=Object(l.useMemo)((function(){return c.filter((function(e){var t=e.title.toLowerCase().includes(o.toLowerCase());switch(f){case"active":return t&&!1===e.completed;case"completed":return t&&!0===e.completed;default:return t}}))}),[o,c,f]);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"box",children:[Object(r.jsx)("h1",{className:"title",children:"Todos:"}),Object(r.jsx)("div",{className:"block",children:Object(r.jsx)(j,{query:o,changeQuery:m,filterBy:f,changeFilter:N})}),Object(r.jsx)("div",{className:"block",children:c.length>0?Object(r.jsx)(d,{todos:C,onTodoSelect:g,selectedTodo:y}):Object(r.jsx)(h,{})})]})})}),y&&Object(r.jsx)(u,{todo:y,onClose:k})]})};a.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eee93309.chunk.js.map