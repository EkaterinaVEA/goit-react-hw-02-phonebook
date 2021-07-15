(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{26:function(n,e,t){},27:function(n,e,t){},52:function(n,e,t){"use strict";t.r(e);var a=t(1),r=t.n(a),o=t(16),i=t.n(o),s=(t(26),t(7)),c=t(8),l=t(10),d=t(9),p=(t(27),t(4));var u,b,h,x,m,f,j,g=function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase().trim())}))},v=t(2),O=t(3),y=O.a.section(u||(u=Object(v.a)(["\n  padding: 40px 0;\n"]))),w=O.a.h2(b||(b=Object(v.a)(["\n  margin: 0 auto 50px;\n  text-transform: capitalize;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 50px;\n  text-align: center;\n  color: #727273;\n  /* text-shadow: #33333340 1px 0 10px; */\n"]))),C=t(0),I=function(n){var e=n.title,t=n.children;return Object(C.jsxs)(y,{children:[e&&Object(C.jsxs)(w,{children:[Object(C.jsx)(p.a,{}),e]}),t]})},z=O.a.div(h||(h=Object(v.a)(["\n  width: 900px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  padding: 30px;\n  border-radius: 20px;\n  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n  background-color: #f0f0f3;\n  & h1,\n  h2 {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: #727273;\n    font-size: 28px;\n    margin-bottom: 50px;\n    margin-top: 0;\n    & svg {\n      margin-right: 15px;\n      color: #727273;\n    }\n  }\n"]))),k=O.a.div(x||(x=Object(v.a)(["\n  width: 450px;\n"]))),A=O.a.div(m||(m=Object(v.a)(["\n  width: 450px;\n"]))),S=function(n){var e=n.children;return Object(C.jsx)(z,{children:e})},F=O.a.li(f||(f=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  width: 440px;\n  font-size: 20px;\n  margin: 0 auto;\n  padding: 10px 5px;\n  & span {\n    display: inline-flex;\n    align-items: center;\n    font-weight: 600;\n    color: var(--grey);\n    &:first-of-type {\n      color: var(--yellow);\n      margin-right: 10px;\n    }\n    & svg {\n      margin-right: 15px;\n      color: var(--yellow);\n    }\n  }\n  & svg {\n    color: var(--yellow);\n  }\n"]))),q=O.a.li(j||(j=Object(v.a)(["\n  display: block;\n  margin-left: auto;\n  margin-right: 10px;\n  font-size: 16px;\n  padding: 5px;\n  color: var(--yellow);\n  border: none;\n  /* box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040; */\n  border-radius: 20px;\n  cursor: pointer;\n  background-color: transparent;\n  transition: all 250ms ease;\n  &:hover {\n    border: 1px solid var(--yellow);\n    transform: scale(1.1);\n  }\n"]))),D=t(5),R=t.n(D);q.propTypes={onClick:R.a.func.isRequired};var L,N,T,B,J,U,Z,E,M,H=function(n){var e=n.name,t=n.number,a=n.id,r=n.onDeleteContact;return Object(C.jsxs)(F,{children:[Object(C.jsxs)("span",{children:[Object(C.jsx)(p.g,{size:"20"}),e,":"]}),Object(C.jsx)("span",{children:t}),Object(C.jsx)(q,{onClick:r,id:a,children:"delete"})]})},K=O.a.ul(L||(L=Object(v.a)(["\n  border-radius: 4px;\n  overflow: hidden;\n"]))),P=function(n){var e=n.contacts,t=n.onDeleteContact;return Object(C.jsx)(K,{children:e.map((function(n){var e=n.name,a=n.number,r=n.id;return Object(C.jsx)(H,{name:e,number:a,id:r,onDeleteContact:t},r)}))})},V=t(20),$=t(18),G=O.a.form(N||(N=Object(v.a)(["\n  margin: 0 auto 50px;\n"]))),Q=O.a.label(T||(T=Object(v.a)(["\n  position: absolute;\n  display: flex;\n  align-items: center;\n  font-weight: 500;\n  left: 0;\n  bottom: 5px;\n  margin-bottom: 10px;\n  cursor: text;\n  font-size: 20px;\n  color: var(--grey);\n\n  transition: color 250ms ease, transform 250ms ease;\n\n  & svg {\n    margin-right: 10px;\n    font-weight: 500;\n    transition: color 250ms ease, transform 250ms ease;\n  }\n"]))),W=O.a.input(B||(B=Object(v.a)(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  padding-left: 30px;\n  border: none;\n  border-bottom: 1px solid var(--yellow);\n  font-size: 20px;\n  color: var(--yellow);\n  background-color: transparent;\n\n  &::placeholder {\n    opacity: 0;\n    color: var(--yellow);\n    font-weight: 700;\n    transition: opacity 250ms ease;\n  }\n\n  &:focus {\n    outline: none;\n    border-color: var(--yellow);\n    &::placeholder {\n      opacity: 0.7;\n      font-weight: 700;\n      transition-delay: 250ms;\n    }\n  }\n\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    font-size: 0;\n    color: var(--yellow);\n    & svg {\n      font-weight: 700;\n      color: var(--yellow);\n    }\n  }\n"]))),X=O.a.button(J||(J=Object(v.a)(["\n  display: flex;\n  align-items: center;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 5px 10px;\n  cursor: pointer;\n  border: 1px solid #f0f0f3;\n  box-shadow: -10px -10px 30px 0 #ffffff, 10px 10px 30px 0 #aeaec040;\n  border-radius: 20px;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: var(--yellow);\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n  }\n  & svg {\n    margin-right: 10px;\n  }\n"]))),Y=O.a.div(U||(U=Object(v.a)(["\n  position: relative;\n  width: 400px;\n  margin-bottom: 50px;\n"]))),_=t(19),nn=t.n(_),en=t(6),tn=t.n(en),an=function(n){Object(l.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[],name:"",number:""},n.nameInputId=tn()(),n.telInputId=tn()(),n.contactId=tn()(),n.handleSetUserInfo=function(e){var t=e.currentTarget,a=t.name,r=t.value;n.setState(Object($.a)({},a,r))},n.handleAddContact=function(e){if(e.preventDefault(),n.state.contacts.some((function(e){return e.name===n.state.name})))return nn.a.fire({position:"center",title:"Sorry, ".concat(n.state.name," is already in contacts!")});var t={name:n.state.name,number:n.state.number,id:tn.a.generate()};n.setState((function(n){return{contacts:[].concat(Object(V.a)(n.contacts),[t]),name:"",number:""}}))},n}return Object(c.a)(t,[{key:"render",value:function(){var n=this.state,e=n.name,t=n.number;return Object(C.jsxs)(G,{onSubmit:this.handleAddContact,action:"",children:[Object(C.jsxs)(Y,{children:[Object(C.jsx)(W,{onChange:this.handleSetUserInfo,id:this.nameInputId,type:"text",name:"name",value:e,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",placeholder:"Name",autoComplete:"off",maxLength:"40",required:!0}),Object(C.jsxs)(Q,{htmlFor:this.nameInputId,children:[Object(C.jsx)(p.h,{size:"25"}),"Name"]})]}),Object(C.jsxs)(Y,{children:[Object(C.jsx)(W,{onChange:this.handleSetUserInfo,id:this.telInputId,type:"tel",name:"number",value:t,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",placeholder:"111-11-11",autoComplete:"off",maxLength:"15",required:!0}),Object(C.jsxs)(Q,{htmlFor:this.telInputId,children:[Object(C.jsx)(p.d,{size:"25"}),"Number"]})]}),Object(C.jsxs)(X,{type:"submit",children:[Object(C.jsx)(p.f,{}),"Add contact"]})]})}}]),t}(a.Component);W.propTypes={onInput:R.a.func.isRequired,value:R.a.string.isRequired};var rn=O.a.label(Z||(Z=Object(v.a)(["\n  position: absolute;\n  left: 0;\n  bottom: 5px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  cursor: text;\n  font-size: 20px;\n  color: var(--grey);\n\n  transition: color 250ms ease-in-out, transform 250ms ease-in-out;\n  & svg {\n    margin-right: 10px;\n    transition: color 250ms ease-in-out, transform 250ms ease-in-out;\n  }\n"]))),on=O.a.input(E||(E=Object(v.a)(["\n  display: block;\n  width: 100%;\n  height: 50px;\n  margin-bottom: 30px;\n  padding-left: 40px;\n  border: none;\n  border-bottom: 1px solid var(--yellow);\n  font-size: 20px;\n  color: var(--yellow);\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  &::placeholder {\n    opacity: 0;\n    color: var(--yellow);\n    transition: opacity 250ms ease;\n  }\n  &:focus {\n    outline: none;\n    border-bottom: 1px solid var(--yellow);\n    &::placeholder {\n      opacity: 0.7;\n      transition-delay: 250ms;\n    }\n  }\n  &:focus + label,\n  &:not(:placeholder-shown) + label {\n    font-size: 0;\n    text-transform: uppercase;\n    font-weight: 600;\n    color: var(--yellow);\n    & svg {\n      color: var(--yellow);\n    }\n  }\n"]))),sn=O.a.div(M||(M=Object(v.a)(["\n  position: relative;\n  width: 400px;\n  margin-bottom: 25px;\n"]))),cn=function(n){Object(l.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={value:""},n.filterInputId=tn()(),n.handleChangeFilter=function(e){var t=e.target.value;n.setState({value:t}),n.props.onChange(t)},n}return Object(c.a)(t,[{key:"render",value:function(){var n=this.state.value;return Object(C.jsx)(C.Fragment,{children:Object(C.jsxs)(sn,{children:[Object(C.jsx)(on,{id:this.filterInputId,name:"filter",onChange:this.handleChangeFilter,type:"text",value:n,placeholder:"Name"}),Object(C.jsxs)(rn,{htmlFor:this.filterInputId,children:[Object(C.jsx)(p.c,{size:"30"}),"Find contact by name"]})]})})}}]),t}(a.Component);on.propTypes={value:R.a.string.isRequired,onInput:R.a.func.isRequired};var ln=function(n){Object(l.a)(t,n);var e=Object(d.a)(t);function t(){var n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.handleDeleteContact=function(e){n.setState({contacts:n.state.contacts.filter((function(n){return n.id!==e.target.id}))})},n.handleFilterInputChange=function(e){n.setState({filter:e.toLowerCase()})},n}return Object(c.a)(t,[{key:"render",value:function(){var n=g(this.state.contacts,this.state.filter);return Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(I,{title:"Phone Book",children:Object(C.jsxs)(S,{children:[Object(C.jsxs)(A,{children:[Object(C.jsxs)("h1",{children:[Object(C.jsx)(p.e,{})," Add Contact"]}),Object(C.jsx)(an,{name:this.state.name,number:this.state.number})]}),Object(C.jsxs)(k,{children:[Object(C.jsxs)("h2",{children:[Object(C.jsx)(p.b,{}),"Contacts"]}),Object(C.jsx)(cn,{filterValue:this.state.filter,onChange:this.handleFilterInputChange}),n.length>0&&Object(C.jsx)(P,{onDeleteContact:this.handleDeleteContact,contacts:n})]})]})})})}}]),t}(a.Component);i.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(ln,{})}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.6913795a.chunk.js.map