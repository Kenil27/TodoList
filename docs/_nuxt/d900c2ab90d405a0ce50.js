(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{158:function(e,t,o){var n=o(160);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);(0,o(42).default)("d4be674c",n,!0,{sourceMap:!1})},159:function(e,t,o){"use strict";var n=o(158);o.n(n).a},160:function(e,t,o){(e.exports=o(41)(!1)).push([e.i,"\n.container{height:100vh;background-color:#fff8dc\n}\n.header{text-align:center;margin:20px;font-size:36px;font-family:Times New Roman,Times,serif;color:#00f\n}\n.todo{display:flex;flex-direction:column;align-items:center;position:relative\n}\n.list{border:1px solid #7fffd4;border-radius:15px;height:40px;padding-left:10px;background-color:#7fffd4\n}\n.all-todos,.list{width:35%\n}\n.list-item{background-color:#fff;margin-bottom:10px;height:30px\n}\n.btn{float:right;background:transparent\n}",""])},161:function(e,t,o){"use strict";o.r(t);var n={data:function(){return{pushItem:"",notes:[]}},mounted:function(){var e=localStorage.getItem("myTodos");if(e){var t=JSON.parse(e);this.notes=t}else this.notes=[]},methods:{pushInput:function(){this.notes.push({title:this.pushItem,checked:!1}),this.pushItem="",this.saveNotesToStorage()},toggleNote:function(e){this.saveNotesToStorage()},removeItem:function(e){this.notes.splice(this.notes.indexOf(e),1),this.saveNotesToStorage()},saveNotesToStorage:function(){localStorage.setItem("myTodos",JSON.stringify(this.notes))}}},s=(o(159),o(18)),i=Object(s.a)(n,function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",{staticClass:"header"},[e._v(" My Todo List")]),e._v(" "),o("div",{staticClass:"todo"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.pushItem,expression:"pushItem"}],staticClass:"list",attrs:{type:"text",placeholder:"+  Add a to-do..."},domProps:{value:e.pushItem},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.pushInput(t):null},input:function(t){t.target.composing||(e.pushItem=t.target.value)}}}),e._v(" "),o("br"),o("br"),o("div",{staticClass:"all-todos"},e._l(e.notes,function(t){return o("p",{key:t.title,staticClass:"list-item"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"note.checked"}],staticClass:"checkmark",attrs:{type:"checkbox",id:"checkbox"},domProps:{checked:Array.isArray(t.checked)?e._i(t.checked,null)>-1:t.checked},on:{change:[function(o){var n=t.checked,s=o.target,i=!!s.checked;if(Array.isArray(n)){var a=e._i(n,null);s.checked?a<0&&e.$set(t,"checked",n.concat([null])):a>-1&&e.$set(t,"checked",n.slice(0,a).concat(n.slice(a+1)))}else e.$set(t,"checked",i)},e.toggleNote]}}),e._v("\n          "+e._s(t.title)+"\n          "),o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(o){e.removeItem(t)}}},[e._v("x")])])}))])])},[],!1,null,null,null);i.options.__file="index.vue";t.default=i.exports}}]);