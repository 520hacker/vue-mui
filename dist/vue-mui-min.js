!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.vueMui=n():t.vueMui=n()}(this,function(){return function(t){function n(s){if(e[s])return e[s].exports;var i=e[s]={exports:{},id:s,loaded:!1};return t[s].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports={Alert:e(13),Confirm:e(16),Prompt:e(19),Actions:e(26),Panel:e(31),Accordion:e(36),Button:e(41),Switch:e(46),Hamburger:e(49),Progress:e(52),Sidebar:e(57),Slide:e(62)}},,,,,,,,,,,,,function(t,n,e){t.exports=e(14),t.exports.template=e(15)},function(t,n){t.exports={data:function(){return{name:"fix-position"}},props:{show:{type:Boolean,"default":!1,twoWay:!0},title:{type:String},content:{type:String}},watch:{show:function(t){var n=document.body;t===!0?n.classList.add(this.name):n.classList.remove(this.name)}}}},function(t,n){t.exports='<div class="t-dimmer" v-show="show"></div>\n<div class="t-modal" v-show="show">\n	<div class="t-modal__header">\n		<h3 class="t-modal__header--tt" v-show="title !== \'\'" v-text="title"></h3>\n		<p class="t-modal__header--ct" v-text="content"></p>\n	</div>\n	<div class="t-modal__footer">\n		<a class="t-modal__footer--btn" v-on="click:show=false">确定</a>\n	</div>\n</div>'},function(t,n,e){t.exports=e(17),t.exports.template=e(18)},function(t,n){t.exports={data:function(){return{name:"fix-position"}},props:{show:{type:Boolean,"default":!1,twoWay:!0},title:{type:String},content:{type:String},onConfirm:{type:Function},onCancel:{type:Function}},watch:{show:function(t){var n=document.body;t===!0?n.classList.add(this.name):n.classList.remove(this.name)}}}},function(t,n){t.exports='<div class="t-dimmer" v-show="show"></div>\n<div class="t-modal" v-show="show">\n	<div class="t-modal__header">\n		<h3 class="t-modal__header--tt" v-show="title !== \'\'" v-text="title"></h3>\n		<p class="t-modal__header--ct" v-text="content"></p>\n	</div>\n	<div class="t-modal__footer">\n		<a class="t-modal__footer--btn" v-on="click:show=false, click: onCancel">取消</a>\n		<a class="t-modal__footer--btn" v-on="click:show=false, click: onConfirm">确定</a>\n	</div>\n</div>'},function(t,n,e){e(20),t.exports=e(24),t.exports.template=e(25)},function(t,n,e){var s=e(21);"string"==typeof s&&(s=[[t.id,s,""]]);e(23)(s,{});s.locals&&(t.exports=s.locals)},function(t,n,e){n=t.exports=e(22)(),n.push([t.id,".t-prompt-ipt {\n  padding: 0 20px 20px;\n}\n.t-prompt-ipt input {\n  width: 100%;\n  line-height: 26px;\n  padding: 3px 10px;\n  border: 1px solid #ddd;\n  box-sizing: border-box;\n}\n",""])},function(t,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],n=0;n<this.length;n++){var e=this[n];e[2]?t.push("@media "+e[2]+"{"+e[1]+"}"):t.push(e[1])}return t.join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var s={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(s[o]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&s[a[0]]||(e&&!a[2]?a[2]=e:e&&(a[2]="("+a[2]+") and ("+e+")"),t.push(a))}},t}},function(t,n,e){function s(t,n){for(var e=0;e<t.length;e++){var s=t[e],i=p[s.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](s.parts[o]);for(;o<s.parts.length;o++)i.parts.push(r(s.parts[o],n))}else{for(var a=[],o=0;o<s.parts.length;o++)a.push(r(s.parts[o],n));p[s.id]={id:s.id,refs:1,parts:a}}}}function i(t){for(var n=[],e={},s=0;s<t.length;s++){var i=t[s],o=i[0],a=i[1],r=i[2],l=i[3],c={css:a,media:r,sourceMap:l};e[o]?e[o].parts.push(c):n.push(e[o]={id:o,parts:[c]})}return n}function o(){var t=document.createElement("style"),n=f();return t.type="text/css",n.appendChild(t),t}function a(){var t=document.createElement("link"),n=f();return t.rel="stylesheet",n.appendChild(t),t}function r(t,n){var e,s,i;if(n.singleton){var r=m++;e=v||(v=o()),s=l.bind(null,e,r,!1),i=l.bind(null,e,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=a(),s=d.bind(null,e),i=function(){e.parentNode.removeChild(e),e.href&&URL.revokeObjectURL(e.href)}):(e=o(),s=c.bind(null,e),i=function(){e.parentNode.removeChild(e)});return s(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;s(t=n)}else i()}}function l(t,n,e,s){var i=e?"":s.css;if(t.styleSheet)t.styleSheet.cssText=x(n,i);else{var o=document.createTextNode(i),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(o,a[n]):t.appendChild(o)}}function c(t,n){var e=n.css,s=n.media;n.sourceMap;if(s&&t.setAttribute("media",s),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}function d(t,n){var e=n.css,s=(n.media,n.sourceMap);s&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");var i=new Blob([e],{type:"text/css"}),o=t.href;t.href=URL.createObjectURL(i),o&&URL.revokeObjectURL(o)}var p={},u=function(t){var n;return function(){return"undefined"==typeof n&&(n=t.apply(this,arguments)),n}},h=u(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),f=u(function(){return document.head||document.getElementsByTagName("head")[0]}),v=null,m=0;t.exports=function(t,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=h());var e=i(t);return s(e,n),function(t){for(var o=[],a=0;a<e.length;a++){var r=e[a],l=p[r.id];l.refs--,o.push(l)}if(t){var c=i(t);s(c,n)}for(var a=0;a<o.length;a++){var l=o[a];if(0===l.refs){for(var d=0;d<l.parts.length;d++)l.parts[d]();delete p[l.id]}}}};var x=function(){var t=[];return function(n,e){return t[n]=e,t.filter(Boolean).join("\n")}}()},function(t,n){t.exports={data:function(){return{key:"",name:"fix-position"}},props:{show:{type:Boolean,"default":!1,twoWay:!0},title:{type:String},content:{type:String},onConfirm:{type:Function},onCancel:{type:Function}},watch:{show:function(t){var n=document.body;t===!0?n.classList.add(this.name):n.classList.remove(this.name)}},methods:{fnConfirm:function(){this.onConfirm(this.key)}}}},function(t,n){t.exports='<div class="t-dimmer" v-show="show"></div>\n<div class="t-modal" v-show="show">\n	<div class="t-modal__header">\n		<h3 class="t-modal__header--tt" v-show="title !== \'\'" v-text="title"></h3>\n		<p class="t-modal__header--ct" v-text="content"></p>\n	</div>\n	<div class="t-prompt-ipt">\n		<input type="text" v-model="key">\n	</div>\n	<div class="t-modal__footer">\n		<a class="t-modal__footer--btn" v-on="click:show=false, click: onCancel">取消</a>\n		<a class="t-modal__footer--btn" v-on="click:show=false, click: fnConfirm">确定</a>\n	</div>\n</div>'},function(t,n,e){e(27),t.exports=e(29),t.exports.template=e(30)},function(t,n,e){var s=e(28);"string"==typeof s&&(s=[[t.id,s,""]]);e(23)(s,{});s.locals&&(t.exports=s.locals)},function(t,n,e){n=t.exports=e(22)(),n.push([t.id,".actions-transition {\n  -webkit-transition: all ease .3s;\n  transition: all ease .3s;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.actions-enter,\n.actions-leave {\n  -webkit-transform: translate3d(0, 100%, 0);\n  transform: translate3d(0, 100%, 0);\n}\n",""])},function(t,n){t.exports={data:function(){return{name:"fix-position"}},props:{show:{type:Boolean,"default":!1,twoWay:!0},title:{type:String,"default":""}},watch:{show:function(t){console.log(t)}}}},function(t,n){t.exports='<div class="t-dimmer" v-show="show"></div>\n<div class="t-actions" v-show="show" v-transition="actions">\n	<ul class="t-actions__list">\n		<li class="t-actions__list--tt" v-if="title" v-text="title"></li>\n		<content></content>\n	</ul>\n	<a class="t-actions__cancel" v-on="click:show=false">取消</a>\n</div>'},function(t,n,e){e(32),t.exports=e(34),t.exports.template=e(35)},function(t,n,e){var s=e(33);"string"==typeof s&&(s=[[t.id,s,""]]);e(23)(s,{});s.locals&&(t.exports=s.locals)},function(t,n,e){n=t.exports=e(22)(),n.push([t.id,".toggle-transition {\n  -webkit-transition: height .3s ease;\n  transition: height .3s ease;\n  overflow: hidden;\n}\n.toggle-enter,\n.toggle-leave {\n  height: 0!important;\n}\n",""])},function(t,n){t.exports={data:function(){return{height:""}},props:{type:{type:String,"default":"normal"},show:{type:Boolean,"default":!0},title:{type:String}},ready:function(){this.init()},methods:{toggle:function(){"normal"!==this.type&&(this.show=!this.show,this.$dispatch("toggle",this))},init:function(){if("normal"===this.type)this.show=!0;else{var t=this.$$.panel;t.style.display="block",t.style.height=t.getBoundingClientRect().height+"px",this.show||(t.style.display="none")}}}}},function(t,n){t.exports='<div class="t-panel">\n	<header class="t-panel__hd" v-on="click:toggle" v-text="title"></header>\n	<div class="t-panel__bd" v-el="panel" v-show="show" v-transition="toggle">\n		<div class="t-panel__bd--ct">\n			<content></content>	\n		</div>\n	</div>\n</div>'},function(t,n,e){e(37),t.exports=e(39),t.exports.template=e(40)},function(t,n,e){var s=e(38);"string"==typeof s&&(s=[[t.id,s,""]]);e(23)(s,{});s.locals&&(t.exports=s.locals)},function(t,n,e){n=t.exports=e(22)(),n.push([t.id,".t-accordion .t-panel + .t-panel {\n  border-top: 0;\n}\n",""])},function(t,n){t.exports={ready:function(){this.init(),this.listen()},methods:{init:function(){this.$children.forEach(function(t,n){n>0&&(t.show=!1)})},listen:function(){var t=this;t.$on("toggle",function(n){t.$children.forEach(function(t){n!==t&&(t.show=!1)})})}}}},function(t,n){t.exports='<div class="t-accordion">\n	<content></content>\n</div>'},function(t,n,e){e(42),t.exports=e(44),t.exports.template=e(45)},function(t,n,e){var s=e(43);"string"==typeof s&&(s=[[t.id,s,""]]);e(23)(s,{});s.locals&&(t.exports=s.locals)},function(t,n,e){n=t.exports=e(22)(),n.push([t.id,"",""])},function(t,n){t.exports={props:{type:{type:String,"default":"normal"},onClick:{type:Function},opt:{type:null,"default":""}},methods:{callback:function(){""===this.opt?this.onClick():this.onClick(this.opt)}}}},function(t,n){t.exports='<a class="t-btn" v-class="\'t-btn--\'+type" v-on="click:callback">button</a>'},function(t,n,e){t.exports=e(47),t.exports.template=e(48)},function(t,n){t.exports={props:{status:{type:Boolean,"default":!1,toWay:!0},callback:{type:Function}},watch:{status:function(){this.callback(this.status)}}}},function(t,n){t.exports='<div class="t-switch" v-class="open:status" v-on="click:status=!status">\n	<div class="t-switch__btn"></div>\n</div>'},function(t,n,e){t.exports=e(50),t.exports.template=e(51)},function(t,n){t.exports={data:function(){return{status:!1}}}},function(t,n){t.exports='<ul class="t-hamburger" v-class="open:status" v-on="click:status=!status">\n  <li></li>\n</ul>'},function(t,n,e){e(53),t.exports=e(55),t.exports.template=e(56)},function(t,n,e){var s=e(54);"string"==typeof s&&(s=[[t.id,s,""]]);e(23)(s,{});s.locals&&(t.exports=s.locals)},function(t,n,e){n=t.exports=e(22)(),n.push([t.id,".t-progress-bar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px;\n  z-index: 999;\n  -webkit-transition: all 200ms ease;\n  transition: all 200ms ease;\n}\n",""])},function(t,n){t.exports={data:function(){return{timer:null,size:100}},props:{color:{type:String,"default":"#4c9cee"},status:{type:String,"default":"hide"},num:{type:Number,"default":100}},watch:{status:function(t){var n=this;return{hide:n.hide,start:n.start,done:n.done}[t].call(n)},num:function(t){100!==t?(clearInterval(this.timer),this.size=100-this.num,this.setSize(this.size),this.start()):this.done()}},methods:{start:function(){var t=this,n=t.size,e=t.$el;e.style.display="block",t.timer=setInterval(function(){n>10?(n-=1,t.setSize.call(t,n)):clearInterval(this.timer)},1e3)},done:function(){var t=this,n=t.$el;t.setSize.call(t,0),clearInterval(this.timer),setTimeout(function(){n.style.display="none",t.setSize.call(t,100),t.size=100},200)},hide:function(){this.$el.style.display="none"},setSize:function(t){this.$el.style.transform="translate3d(-"+t+"%,0,0)",this.$el.style.webkitTransform="translate3d(-"+t+"%,0,0)"}}}},function(t,n){t.exports="<div class=\"t-progress-bar\" v-style=\"background-color:color,\n									 transform:'translate3d(-100%,0,0)',\n									 display:'none'\"></div>"},function(t,n,e){e(58),t.exports=e(60),t.exports.template=e(61)},function(t,n,e){var s=e(59);"string"==typeof s&&(s=[[t.id,s,""]]);e(23)(s,{});s.locals&&(t.exports=s.locals)},function(t,n,e){n=t.exports=e(22)(),n.push([t.id,".ani-open-left-transition,\n.ani-open-right-transition{\n	-webkit-transition: -webkit-transform .3s ease-in-out;\n    transition: transform .3s ease-in-out;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n}\n.ani-open-left-enter,\n.ani-open-left-leave{\n	-webkit-transform: translateX(-100%);\n    transform: translateX(-100%);\n}\n.ani-open-right-enter,\n.ani-open-right-leave{\n	-webkit-transform: translateX(100%);\n    transform: translateX(100%);\n}",""])},function(t,n){t.exports={data:function(){return{name:"aside-fix",top:0,sidebarWidth:0}},props:{show:{type:Boolean,"default":!1},type:{type:String,"default":"open"},from:{type:String,"default":"left"}},watch:{show:function(t){t&&(this.sidebarWidth||(this.sidebarWidth=this.$$.sidebar.getBoundingClientRect().width),this.fix(t))}},created:function(){"push"===this.type&&(this.from="left")},methods:{close:function(t){var n=this;"t-aside-dimmer"===t.target.className&&(n.show=!1,this.fix(!1))},fix:function(t){var n=this,e=document.documentElement,s=document.body;t?(n.top=s.scrollTop,n.setHtmlStyle(e,n.top),n.setBodyStyle(s,e.getBoundingClientRect().width,window.screen.height),"push"===n.type&&n.setPush(s)):("push"===n.type&&n.setPush(s,1),setTimeout(function(){n.setHtmlStyle(e),n.setBodyStyle.call(n,s)},400))},setPush:function(t,n){t.style.marginLeft=n?0:this.sidebarWidth+"px"},setHtmlStyle:function(t,n){t.style.marginTop=n?"-"+n+"px":""},setBodyStyle:function(t,n,e){n?(t.style.width=n+"px",t.style.height=e+"px",t.classList.add(this.name)):(t.style.cssText="",t.classList.remove(this.name),t.scrollTop=this.top)}}}},function(t,n){t.exports='<div class="t-aside" v-class="\'t-aside--\'+from" v-show="show" v-transition="ani-open-{{from}}" v-el="sidebar">\n	<content></content>\n</div>\n<div class="t-aside-dimmer" v-show="show" v-on="click:close($event)"></div>'},function(t,n,e){t.exports=e(63),t.exports.template=e(64)},function(t,n){t.exports={data:function(){return{index:0,width:0,xy:0,zz:0}},props:{list:{type:Array}},ready:function(){var t=this.list.length;this.width=this.$$.box.getBoundingClientRect().width,this.initInner(t).initImg(t)},methods:{initInner:function(t){return this.$$.inner.style.width=t*this.width+"px",this},initImg:function(t){var n=this.$$.inner.children,e=this.width+"px";[].forEach.call(n,function(t){t.style.width=e})},moveInner:function(t,n){var e=this.$$.inner,s=e.dataset.left||0;n?e.dataset.left=t:t=+s+t,e.style.webkitTransform="translate3d("+t+"px, 0, 0)",e.style.transform="translate3d("+t+"px, 0, 0)"},touchstart:function(t){t.preventDefault();var n=t.touches[0];this.zz=0,this.xy=n.clientX},touchmove:function(t){t.preventDefault();var n=t.touches[0];this.zz=n.clientX-this.xy,this.moveInner(this.zz)},touchend:function(t){t.preventDefault();var n=60,e=this.zz;-n>e?this.index<this.list.length-1&&this.index++:e>100&&this.index>0&&this.index--,this.moveInner(-this.index*this.width,1)}}}},function(t,n){t.exports='<div class="t-slide" v-el="box">\n	<ul class="t-slide__inner" v-el="inner" v-on="touchstart:touchstart,touchmove:touchmove,touchend:touchend">\n		<li v-repeat="its:list" class="t-slide__inner--img">\n			<a v-attr="href:its.link">\n				<img v-attr="src:its.img">\n			</a>\n		</li>\n	</ul>\n</div>'}])});