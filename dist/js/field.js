(()=>{"use strict";var e,t={389:(e,t,n)=>{const r=Vue;var a={class:"tab-group"},o=["innerHTML"],l={id:"tabs"},i={class:"block"},s={"aria-label":"Tabs",class:"tab-menu"},c=["dusk","onClick"],u={class:"capitalize"},d={key:0,"aria-hidden":"true",class:"bg-primary-500 nt-absolute nt-inset-x-0 nt-bottom-0 nt-h-0.5"},m={key:1,"aria-hidden":"true",class:"nt-bg-transparent nt-absolute nt-inset-x-0 nt-bottom-0 nt-h-0.5"},f=["label"];const p={emits:["actionExecuted"],props:["resourceName","resourceId","resource","panel"],methods:{actionExecuted:function(){this.$emit("actionExecuted")}}};var b={1:"text-90 font-normal text-xl md:text-2xl",2:"text-90 font-normal md:text-xl",3:"text-90 uppercase tracking-wide font-bold md:text-sm",4:"text-90 font-normal md:text-2xl"};const h={props:{level:{default:1,type:Number}},computed:{component:function(){return"h"+this.level},classes:function(){return b[this.level]}}};var v=n(744);const g=(0,v.Z)(h,[["render",function(e,t,n,a,o,l){return(0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(l.component),{class:(0,r.normalizeClass)(l.classes)},{default:(0,r.withCtx)((function(){return[(0,r.renderSlot)(e.$slots,"default")]})),_:3},8,["class"])}]]);var y={class:"bg-white dark:bg-gray-800 rounded-lg shadow"};const k={},C=(0,v.Z)(k,[["render",function(e,t,n,a,o,l){return(0,r.openBlock)(),(0,r.createElementBlock)("div",y,[(0,r.renderSlot)(e.$slots,"default")])}]]);function x(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return B(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return B(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw o}}}}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const T={mixins:[p],components:{Card:C,Heading:g},props:{panel:{type:Object,required:!0},name:{default:"Panel"},showTitle:{type:Boolean},mode:{type:String,default:"detail"},fields:{type:Array,default:[]},resourceName:{type:String,required:!0},resourceId:{type:[Number,String]},relatedResourceName:{type:String},relatedResourceId:{type:[Number,String]},viaResource:{type:String},viaResourceId:{type:[Number,String]},viaRelationship:{type:String}},data:function(){return{tabs:null,selectedTab:{},darkModeClass:""}},mounted:function(){var e=this;this.observer=new MutationObserver((function(t){var n,r=x(t);try{var a=function(){var t=n.value,r=t.target.getAttribute(t.attributeName);e.$nextTick((function(){e.darkModeClass=r.includes("dark")?"nt-dark":""}))};for(r.s();!(n=r.n()).done;)a()}catch(e){r.e(e)}finally{r.f()}})),this.observer.observe(document.documentElement,{attributes:!0,attributeOldValue:!0,attributeFilter:["class"]}),this.darkModeClass=document.documentElement.classList.contains("dark")?"nt-dark":"";var t=this.tabs=this.panel.fields.reduce((function(e,t){return t.tabSlug in e||(e[t.tabSlug]={name:t.tab,slug:t.tabSlug,init:!1,listable:t.listableTab,fields:[],properties:t.tabInfo,classes:"fields-tab"},["belongs-to-many-field","has-many-field","has-many-through-field","has-one-through-field","morph-to-many-field"].includes(t.component)&&(e[t.tabSlug].classes="relationship-tab")),e[t.tabSlug].fields.push(t),e}),{});this.handleTabClick(t[Object.keys(t)[0]],!0)},methods:{handleTabClick:function(e){this.selectedTab=e},getComponentName:function(e){return e.prefixComponent?"detail-"+e.component:e.component},getBodyClass:function(e){return e.properties.bodyClass},getTabRefName:function(e){return"tab-".concat(e.slug)},getIsTabCurrent:function(e){return this.selectedTab===e||!this.selectedTab&&this.tabs[Object.keys(this.tabs)[0]]===e}},beforeDestroy:function(){this.observer.disconnect()}},S=(0,v.Z)(T,[["render",function(e,t,n,p,b,h){var v=(0,r.resolveComponent)("Heading");return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)(b.darkModeClass)},[(0,r.createElementVNode)("div",a,[(0,r.renderSlot)(e.$slots,"default",{},(function(){return[n.showTitle?((0,r.openBlock)(),(0,r.createBlock)(v,{key:0,level:1,textContent:(0,r.toDisplayString)(n.panel.name)},null,8,["textContent"])):(0,r.createCommentVNode)("",!0),n.panel.helpText?((0,r.openBlock)(),(0,r.createElementBlock)("p",{key:1,class:(0,r.normalizeClass)([n.panel.helpText?"mt-2":"mt-3","nt-text-gray-500 nt-text-sm nt-font-semibold nt-italic"]),innerHTML:n.panel.helpText},null,10,o)):(0,r.createCommentVNode)("",!0)]})),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("nav",s,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(b.tabs,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("a",{key:t,dusk:e.slug+"-tab",class:(0,r.normalizeClass)([h.getIsTabCurrent(e)?"active text-primary-500":"nt-text-gray-800 dark:nt-text-gray-50","tab-item"]),onClick:function(t){return h.handleTabClick(e)}},[(0,r.createElementVNode)("span",u,(0,r.toDisplayString)(e.properties.title),1),h.getIsTabCurrent(e)?((0,r.openBlock)(),(0,r.createElementBlock)("span",d)):((0,r.openBlock)(),(0,r.createElementBlock)("span",m))],10,c)})),128))])])]),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(b.tabs,(function(t,a){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:"related-tabs-fields"+a,ref_for:!0,ref:h.getTabRefName(t),class:(0,r.normalizeClass)(["tab",t.slug,t.classes]),label:t.name},[h.getIsTabCurrent(t)?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:0,class:(0,r.normalizeClass)(h.getBodyClass(t))},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(t.fields,(function(a,o){return(0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(h.getComponentName(a)),{key:o,class:(0,r.normalizeClass)({"remove-bottom-border":o===t.fields.length-1}),field:a,index:o,resource:e.resource,"resource-id":n.resourceId,"resource-name":n.resourceName,onActionExecuted:e.actionExecuted},null,8,["class","field","index","resource","resource-id","resource-name","onActionExecuted"])})),128))],2)):(0,r.createCommentVNode)("",!0)],10,f)),[[r.vShow,h.getIsTabCurrent(t)]])})),128))])],2)}]]);var E={class:"tab-group"},N=["innerHTML"],w={id:"tabs"},I={class:"block"},O={"aria-label":"Tabs",class:"tab-menu"},R=["dusk","onClick"],V={class:"capitalize"},A={key:0,"aria-hidden":"true",class:"bg-primary-500 nt-absolute nt-inset-x-0 nt-bottom-0 nt-h-0.5"},M={key:1,"aria-hidden":"true",class:"nt-bg-transparent nt-absolute nt-inset-x-0 nt-bottom-0 nt-h-0.5"},j=["label"];function z(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return F(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return F(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){i=!0,o=e},f:function(){try{l||null==n.return||n.return()}finally{if(i)throw o}}}}function F(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const $={mixins:[p],components:{Card:C,Heading:g},props:{shownViaNewRelationModal:{type:Boolean,default:!1},panel:{type:Object,required:!0},showTitle:{type:Boolean},name:{default:"Panel"},mode:{type:String,default:"form"},fields:{type:Array,default:[]},formUniqueId:{type:String},validationErrors:{type:Object,required:!0},resourceName:{type:String,required:!0},resourceId:{type:[Number,String]},relatedResourceName:{type:String},relatedResourceId:{type:[Number,String]},viaResource:{type:String},viaResourceId:{type:[Number,String]},viaRelationship:{type:String}},emits:["field-changed","update-last-retrieved-at-timestamp","file-upload-started","file-upload-finished"],data:function(){return{tabs:null,activeTab:"",selectedTab:{},darkModeClass:""}},mounted:function(){var e=this;this.observer=new MutationObserver((function(t){var n,r=z(t);try{var a=function(){var t=n.value,r=t.target.getAttribute(t.attributeName);e.$nextTick((function(){e.darkModeClass=r.includes("dark")?"nt-dark":""}))};for(r.s();!(n=r.n()).done;)a()}catch(e){r.e(e)}finally{r.f()}})),this.observer.observe(document.documentElement,{attributes:!0,attributeOldValue:!0,attributeFilter:["class"]}),this.darkModeClass=document.documentElement.classList.contains("dark")?"nt-dark":"";var t=this.tabs=this.panel.fields.reduce((function(e,t){return t.tabSlug in e||(e[t.tabSlug]={name:t.tab,slug:t.tabSlug,init:!1,listable:t.listableTab,fields:[],properties:t.tabInfo}),e[t.tabSlug].fields.push(t),e}),{});this.handleTabClick(t[Object.keys(t)[0]],!0)},methods:{handleTabClick:function(e){this.selectedTab=e},getComponentName:function(e){return e.prefixComponent?"form-"+e.component:e.component},getBodyClass:function(e){return e.properties.bodyClass},getTabRefName:function(e){return"tab-".concat(e.slug)},getIsTabCurrent:function(e){return this.selectedTab===e||!this.selectedTab&&this.tabs[Object.keys(this.tabs)[0]]===e}},beforeDestroy:function(){this.observer.disconnect()}},D=(0,v.Z)($,[["render",function(e,t,n,a,o,l){var i=(0,r.resolveComponent)("Heading");return(0,r.openBlock)(),(0,r.createElementBlock)("div",{class:(0,r.normalizeClass)(o.darkModeClass)},[(0,r.createElementVNode)("div",E,[(0,r.renderSlot)(e.$slots,"default",{},(function(){return[n.showTitle?((0,r.openBlock)(),(0,r.createBlock)(i,{key:0,level:1,textContent:(0,r.toDisplayString)(n.panel.name)},null,8,["textContent"])):(0,r.createCommentVNode)("",!0),n.panel.helpText?((0,r.openBlock)(),(0,r.createElementBlock)("p",{key:1,class:(0,r.normalizeClass)([n.panel.helpText?"mt-2":"mt-3","text-gray-500 text-sm font-semibold italic"]),innerHTML:n.panel.helpText},null,10,N)):(0,r.createCommentVNode)("",!0)]})),(0,r.createElementVNode)("div",w,[(0,r.createElementVNode)("div",I,[(0,r.createElementVNode)("nav",O,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.tabs,(function(e,t){return(0,r.openBlock)(),(0,r.createElementBlock)("a",{key:t,dusk:e.slug+"-tab",class:(0,r.normalizeClass)([l.getIsTabCurrent(e)?"active text-primary-500":"nt-text-gray-800 dark:nt-text-gray-50","tab-item"]),onClick:function(t){return l.handleTabClick(e)}},[(0,r.createElementVNode)("span",V,(0,r.toDisplayString)(e.properties.title),1),l.getIsTabCurrent(e)?((0,r.openBlock)(),(0,r.createElementBlock)("span",A)):((0,r.openBlock)(),(0,r.createElementBlock)("span",M))],10,R)})),128))])])]),((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(o.tabs,(function(a,o){return(0,r.withDirectives)(((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:"related-tabs-fields"+o,ref_for:!0,ref:l.getTabRefName(a),class:(0,r.normalizeClass)(["tab fields-tab",l.getIsTabCurrent(a)?"block":"hidden",a.slug]),label:a.name},[(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)(l.getBodyClass(a))},[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(a.fields,(function(o,i){return(0,r.openBlock)(),(0,r.createBlock)((0,r.resolveDynamicComponent)(l.getComponentName(o)),{key:"tab-"+i,ref_for:!0,ref:"fields",class:(0,r.normalizeClass)({"remove-bottom-border":i===a.fields.length-1}),errors:n.validationErrors,"resource-id":n.resourceId,"resource-name":n.resourceName,"related-resource-name":n.relatedResourceName,"related-resource-id":n.relatedResourceId,field:o,"via-resource":n.viaResource,"via-resource-id":n.viaResourceId,"via-relationship":n.viaRelationship,"shown-via-new-relation-modal":n.shownViaNewRelationModal,"form-unique-id":n.formUniqueId,onFieldChanged:t[0]||(t[0]=function(t){return e.$emit("field-changed")}),onFileDeleted:t[1]||(t[1]=function(t){return e.$emit("update-last-retrieved-at-timestamp")}),onFileUploadStarted:t[2]||(t[2]=function(t){return e.$emit("file-upload-started")}),onFileUploadFinished:t[3]||(t[3]=function(t){return e.$emit("file-upload-finished")}),"show-help-text":null!=o.helpText},null,8,["class","errors","resource-id","resource-name","related-resource-name","related-resource-id","field","via-resource","via-resource-id","via-relationship","shown-via-new-relation-modal","form-unique-id","show-help-text"])})),128))],2)],10,j)),[[r.vShow,l.getIsTabCurrent(a)]])})),128))])],2)}]]);Nova.booting((function(e){e.component("detail-tabs",S),e.component("form-tabs",D)}))},381:()=>{},744:(e,t)=>{t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[e,r]of t)n[e]=r;return n}}},n={};function r(e){var a=n[e];if(void 0!==a)return a.exports;var o=n[e]={exports:{}};return t[e](o,o.exports,r),o.exports}r.m=t,e=[],r.O=(t,n,a,o)=>{if(!n){var l=1/0;for(u=0;u<e.length;u++){for(var[n,a,o]=e[u],i=!0,s=0;s<n.length;s++)(!1&o||l>=o)&&Object.keys(r.O).every((e=>r.O[e](n[s])))?n.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[n,a,o]},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={175:0,546:0};r.O.j=t=>0===e[t];var t=(t,n)=>{var a,o,[l,i,s]=n,c=0;if(l.some((t=>0!==e[t]))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(s)var u=s(r)}for(t&&t(n);c<l.length;c++)o=l[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(u)},n=self.webpackChunkeminiarts_tabs=self.webpackChunkeminiarts_tabs||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})(),r.O(void 0,[546],(()=>r(389)));var a=r.O(void 0,[546],(()=>r(381)));a=r.O(a)})();