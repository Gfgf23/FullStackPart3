(this["webpackJsonpexercise_1.12"]=this["webpackJsonpexercise_1.12"]||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var c=t(15),a=t.n(c),o=t(6),r=t(3),u=t(2),s=t(4),i=t.n(s),l="/api/persons",d=function(){return i.a.get(l).then((function(e){return e.data}))},j=function(e){return i.a.post(l,e).then((function(e){return e.data}))},b=function(e,n){return i.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},f=function(e){return i.a.delete("".concat(l,"/").concat(e)).then((function(e){return e.data}))},h=t(0),m=function(e){var n=e.filter,t=e.handleChange;return Object(h.jsxs)("div",{children:["Filter: ",Object(h.jsx)("input",{value:n,onChange:t})]})},O=function(e){var n=e.name,t=e.handleName,c=e.number,a=e.handleNumber,o=e.addNewName;return Object(h.jsxs)("form",{onSubmit:o,children:[Object(h.jsxs)("div",{children:["name: ",Object(h.jsx)("input",{value:n,onChange:t})]}),Object(h.jsxs)("div",{children:["number: ",Object(h.jsx)("input",{value:c,onChange:a})]}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{type:"submit",children:"add"})})]})},g=function(e){var n=e.persons,t=e.setPersons;return Object(h.jsx)("div",{children:n.map((function(e){return Object(h.jsxs)("p",{children:[e.name," ",e.number,Object(h.jsx)("button",{onClick:function(){f(e.id).then((function(e){d().then((function(e){return t(e)}))}))},children:" delete"})]},e.name)}))})},v=function(e){var n=e.message,t=e.cssStyle;return null===n?null:Object(h.jsx)("div",{style:t,children:n})},x=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)(""),s=Object(r.a)(a,2),i=s[0],l=s[1],f=Object(u.useState)(""),x=Object(r.a)(f,2),p=x[0],S=x[1],y=Object(u.useState)(""),N=Object(r.a)(y,2),w=N[0],C=N[1],k=Object(u.useState)(""),T=Object(r.a)(k,2),E=T[0],P=T[1],z=Object(u.useState)(""),J=Object(r.a)(z,2),_=J[0],B=J[1];Object(u.useEffect)((function(){console.log("effect"),d().then((function(e){c(e),console.log(e)}))}),[]),console.log("render",t.length,"persons");var D=t.filter((function(e){return e.name.includes(w)}));return Object(h.jsxs)("div",{children:[Object(h.jsx)(m,{filter:w,handleChange:function(e){console.log(e.target.value),C(e.target.value)}}),Object(h.jsx)(v,{message:E,cssStyle:{color:"green",fontSize:40}}),Object(h.jsx)(v,{message:_,cssStyle:{color:"red",fontSize:40}}),Object(h.jsx)("h2",{children:"Phonebook"}),Object(h.jsx)(O,{name:i,handleName:function(e){console.log(e.target.value),l(e.target.value)},number:p,handleNumber:function(e){console.log(e.target.value),S(e.target.value)},addNewName:function(e){e.preventDefault();var n={name:"",number:""};if(n.name=i,n.number=p,console.log(t.map((function(e){return e.name}))),t.map((function(e){return e.name})).includes(n.name)){if(window.confirm("".concat(n.name," already exits in the system, do you want to replace the number"))){var a=t.find((function(e){return e.name===n.name})),r=Object(o.a)(Object(o.a)({},a),{},{number:p});return void b(r.id,r).then((function(e){d().then((function(e){c(e),P("".concat(n.name," number has changed")),setTimeout((function(){P(null)}),5e3)}))})).catch((function(e){B("".concat(n.name," has been deleted from the system!")),d().then((function(e){return c(e)})),setTimeout((function(){B(null)}),5e3)}))}}else console.log(i,p),j(n).then((function(e){d().then((function(e){c(e),P("".concat(n.name," has been added")),setTimeout((function(){P(null)}),5e3)}))})).catch((function(e){console.log("Entred in react"),B(e.response),setTimeout((function(){B(null)}),5e3)})),l(""),S("")}}),Object(h.jsx)("h2",{children:"Numbers"}),Object(h.jsx)(g,{persons:D,setPersons:c})]})};a.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.2e3dc015.chunk.js.map