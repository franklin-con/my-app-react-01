(this["webpackJsonpmy-app1"]=this["webpackJsonpmy-app1"]||[]).push([[0],{12:function(e,t,n){e.exports=n(18)},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(2),c=n.n(r),u=(n(17),function(){return l.a.createElement("h1",null,"Hola este es mi componente xd")}),o=function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,"HOLA MUNDO DESDE REACT..."),l.a.createElement("h2",null,"Mensaje: ",e.variable," "))},m=n(1),i=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),u=Object(m.a)(c,2),o=u[0],i=u[1];return l.a.createElement(a.Fragment,null,l.a.createElement("button",{class:"btn btn-info",onClick:function(){return r(n+1)}},"Contador 1"),l.a.createElement("span",null,"Incremento de contador 1: ",n),l.a.createElement("hr",null),l.a.createElement("button",{class:"btn btn-warning",onClick:function(){i(o+1),console.log("Mensaje de contador")}},"Contador 2"),l.a.createElement("span",null,"Incremento de Contador 2: ",o))},s=function(){return l.a.createElement(a.Fragment,null,l.a.createElement("h1",null,"Operador Ternario..."),"Mayor de Edad")},h=function(){var e=Object(a.useState)([1,2,3,4,5]),t=Object(m.a)(e,2),n=t[0];t[1];return l.a.createElement(a.Fragment,null,l.a.createElement("h1",null,"Lectura sin index ysin html"),n.map((function(e){return e})),l.a.createElement("hr",null),l.a.createElement("h1",null,"Lectura sin index y con html"),n.map((function(e){return l.a.createElement("spam",null,e)})),l.a.createElement("hr",null),l.a.createElement("h1",null,"Listas con index y sin Key"),n.map((function(e,t){return l.a.createElement("p",null,e," - ",t)})),l.a.createElement("hr",null),l.a.createElement("h1",null,"Listas con index y con Key"),n.map((function(e,t){return l.a.createElement("p",{key:t},e,"-",e)})))};function E(){var e=Object(a.useState)(!0),t=Object(m.a)(e,2),n=t[0],r=t[1];return setTimeout((function(){r(!1)}),2e4),l.a.createElement("div",null,l.a.createElement("h5",null,n?"Cargando...":"Listo"))}var d=n(3),b=n(4),v=n(6),f=n(5),p=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(b.a)(n,[{key:"tick",value:function(){this.setState((function(e){return{seconds:e.seconds+1}}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return l.a.createElement("div",null,"Segundos: ",this.state.seconds)}}]),n}(a.Component);c.a.render(l.a.createElement(p,null),document.getElementById("root"));var j=p,O=n(7),g=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={items:[],text:""},a.handleChange=a.handleChange.bind(Object(O.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a}return Object(b.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Apuntes"),l.a.createElement(y,{items:this.state.items}),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"new-todo"},"\xbfQu\xe9 se necesita hacer?"),l.a.createElement("input",{id:"new-todo",onChange:this.handleChange,value:this.state.text}),l.a.createElement("button",{class:"btn btn-primary"},"A\xf1adir ",this.state.items.length+1)))}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),0!==this.state.text.length){var t={text:this.state.text,id:Date.now()};this.setState((function(e){return{items:e.items.concat(t),text:""}}))}}}]),n}(l.a.Component),y=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return l.a.createElement("ul",null,this.props.items.map((function(e){return l.a.createElement("li",{key:e.id},e.text)})))}}]),n}(l.a.Component);c.a.render(l.a.createElement(g,null),document.getElementById("root"));var k=g,C=function(){return l.a.createElement("h5",null,l.a.createElement("marquee",null,l.a.createElement("button",{class:"btn btn-warning"},"PRIMERA LLAMADA")," ",l.a.createElement("br",null)),'"Programar sin una arquitectura o dise\xf1o en mente es como explorar una gruta s\xf3lo con una linterna: no sabes d\xf3nde est\xe1s, d\xf3nde has estado ni hacia d\xf3nde vas\u201d  \u2013 ',l.a.createElement("b",null,"Danny Thorpe"))},S=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={seconds:0},a}return Object(b.a)(n,[{key:"tick",value:function(){this.setState((function(e){return{seconds:e.seconds+1}}))}},{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return l.a.createElement("div",null,"Segundos: ",this.state.seconds)}}]),n}(a.Component);c.a.render(l.a.createElement(S,null),document.getElementById("root"));var x=S,A=function(){var e=Object(a.useState)(0),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),u=Object(m.a)(c,2),o=u[0],i=u[1];return l.a.createElement(a.Fragment,null,l.a.createElement("button",{class:"btn btn-info",onClick:function(){return r(n-5)}},"Contador -5"),l.a.createElement("span",null,"Incremento de contador 1: ",n),l.a.createElement("hr",null),l.a.createElement("button",{class:"btn btn-warning",onClick:function(){i(o+5),console.log("Mensaje de contador")}},"Contador +5"),l.a.createElement("span",null,"Incremento de Contador 2: ",o))},w=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={items:[],text:""},a.handleChange=a.handleChange.bind(Object(O.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(O.a)(a)),a}return Object(b.a)(n,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h3",null,"Array de Apuntes"),l.a.createElement(I,{items:this.state.items}),l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{htmlFor:"new-todo"},"Escriba un Apunte"),l.a.createElement("input",{id:"new-todo",onChange:this.handleChange,value:this.state.text}),l.a.createElement("button",{class:"btn btn-primary"},"A\xf1adir ",this.state.items.length+1)))}},{key:"handleChange",value:function(e){this.setState({text:e.target.value})}},{key:"handleSubmit",value:function(e){if(e.preventDefault(),0!==this.state.text.length){var t={text:this.state.text,id:Date.now()};this.setState((function(e){return{items:e.items.concat(t),text:""}}))}}}]),n}(l.a.Component),I=function(e){Object(v.a)(n,e);var t=Object(f.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(b.a)(n,[{key:"render",value:function(){return l.a.createElement("ul",null,this.props.items.map((function(e){return l.a.createElement("li",{key:e.id},e.text)})))}}]),n}(l.a.Component);c.a.render(l.a.createElement(w,null),document.getElementById("root"));var D=w,N=n(8),M=function(){var e=Object(a.useState)([1,2,3,4,5]),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(["N\xba","N\xba","N\xba","N\xba","N\xba"]),u=Object(m.a)(c,2),o=u[0],i=u[1],s=([].concat(Object(N.a)(n),Object(N.a)(o)),Object(a.useState)(6)),h=Object(m.a)(s,2),E=h[0],d=h[1],b=Object(a.useState)(["N\xba","N\xba"]),v=Object(m.a)(b,2),f=v[0];v[1];return l.a.createElement(a.Fragment,null,l.a.createElement("hr",null),l.a.createElement("h1",null,"Agregar un valor a un array"),l.a.createElement("button",{onClick:function(){d(E+10),r([].concat(Object(N.a)(n),[E]))}},"Agregar numero"),n.map((function(e,t){return l.a.createElement("p",{key:t}," ",e," - ",t)})),l.a.createElement("hr",null),l.a.createElement("h1",null,"Agregar jugadores del barza"),l.a.createElement("button",{onClick:function(){i([].concat(Object(N.a)(o),Object(N.a)(f)))}},"Agregar Numero"),o.map((function(e,t){return l.a.createElement("p",{key:t}," ",e," - ",t," ")})))};var L=function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("div",null,l.a.createElement("h1",null,"EXAMEN DISE\xd1O WEB"),l.a.createElement("hr",null),l.a.createElement(C,null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("h2",null,"Numeros"),l.a.createElement(x,null),l.a.createElement(A,null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("h2",null,"Arrays"),l.a.createElement(D,null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement(M,null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null))),l.a.createElement("h1",null,"Practicas en REACT"),l.a.createElement("hr",null),l.a.createElement(u,null),l.a.createElement("hr",null),l.a.createElement(o,null),l.a.createElement("hr",null),l.a.createElement(o,{variable:"Nuevo Saludo"}),l.a.createElement("hr",null),l.a.createElement(i,null),l.a.createElement("hr",null),l.a.createElement(s,null),l.a.createElement("hr",null),l.a.createElement(h,null),l.a.createElement("hr",null),l.a.createElement("h1",null,"Estado de Cargando Durante 20 Segundos"),l.a.createElement(E,null),l.a.createElement("hr",null),l.a.createElement("h1",null,"Contador de Tiempo en la Pagina"),l.a.createElement(j,null),l.a.createElement("hr",null),l.a.createElement("h1",null,"A\xf1ade Textos"),l.a.createElement(k,null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("hr",null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.be0c8e53.chunk.js.map