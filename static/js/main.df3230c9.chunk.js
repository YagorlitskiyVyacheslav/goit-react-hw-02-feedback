(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{16:function(n,e,t){n.exports=t(23)},23:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(11),c=t.n(i),l=t(12),o=t(3),u=t(4),s=t(6),b=t(5),d=t(1),m=t(2);function f(){var n=Object(d.a)(["\ntext-align: center;\n& h2 {\n  margin: 20px 0;\n}\n"]);return f=function(){return n},n}function p(){var n=Object(d.a)(["\n  background-color: #555555;\n  border: none;\n  border-radius: 10px;\n  cursor: pointer;\n  color: white;\n  padding: 15px 15px;\n  &:not(:last-child) {\n    margin-right: 10px;\n  }\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n"]);return p=function(){return n},n}var h=m.b.button(p());h.Container=m.b.div(f());var g=h,v=function(n){Object(s.a)(t,n);var e=Object(b.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var n=this.props.changeStatistic;return r.a.createElement(g.Container,null,r.a.createElement("h2",null,"Please leave feedback"),r.a.createElement(g,{name:"good",onClick:n},"Good"),r.a.createElement(g,{name:"neutral",onClick:n},"Neutral"),r.a.createElement(g,{name:"bad",onClick:n},"Bad"))}}]),t}(a.Component);function E(){var n=Object(d.a)(["\ntext-align: center;\n& h2 {\n    margin: 20px 0;\n}\n"]);return E=function(){return n},n}function j(){var n=Object(d.a)(["\ntext-align: left;\nwidth: 250px;\nmargin: 0 auto;\n& li:not(:last-child) {\nmargin-bottom: 10px;\n}\n"]);return j=function(){return n},n}var x=m.b.ul(j());x.Container=m.b.div(E());var O=x,k=function(n){Object(s.a)(t,n);var e=Object(b.a)(t);function t(){return Object(o.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){var n=this.props.statistics,e=n.good,t=n.neutral,a=n.bad,i=e+t+a,c=Math.round(e/i*100);return r.a.createElement(O.Container,null,r.a.createElement("h2",null,"Statistics"),i>0&&r.a.createElement(O,null,r.a.createElement("li",null,"Good ",e),r.a.createElement("li",null,"Neutral ",t),r.a.createElement("li",null,"Bad ",a),r.a.createElement("li",null,"Total ",i),r.a.createElement("li",null,"Positive feedback: ",c,"%")))}}]),t}(a.Component);function y(){var n=Object(d.a)(["\nhtml {\n  box-sizing: border-box;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  margin: 0;\n  font-family: Arial, sans-serif;\n  padding-bottom: 20px;\n}\nli {\n    list-style-type: none;\n}\n"]);return y=function(){return n},n}var C=Object(m.a)(y()),w=function(n){Object(s.a)(t,n);var e=Object(b.a)(t);function t(){var n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=e.call.apply(e,[this].concat(r))).state={good:0,neutral:0,bad:0},n.handleStatistic=function(e){var t=e.target.name;n.setState((function(n){return Object(l.a)({},t,n[t]+1)}))},n}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(v,{changeStatistic:this.handleStatistic}),r.a.createElement(k,{statistics:this.state}))}}]),t}(a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.df3230c9.chunk.js.map