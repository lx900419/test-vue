(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["projectInfoDetails"],{"66d1":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"projectInfoDetails-page"},[s("div",{staticClass:"content"},[s("div",{staticClass:"content_box"},[s("div",{staticClass:"box_header"},[s("h3",{staticClass:"header_title"},[t._v(t._s(t.info.projName))]),s("span",[t._v("作者:"+t._s(t.info.author))]),s("br"),s("span",[t._v("\n          时间:\n          "),s("i",[t._v(t._s(t.info.startDate))])])]),s("div",{staticClass:"box_content"},[t._v(t._s(t.info.synopsis))])])])])},i=[],a=(s("96cf"),s("1da1")),r=(s("cadf"),s("551c"),s("097d"),s("3228")),o={data:function(){return{id:-1,info:{projName:"",synopsis:"",author:"",startDate:""}}},created:function(){this.id=this.$route.query&&this.$route.query.id||-1,-1===this.id&&this.$router.back(),this.getDetail()},methods:{getDetail:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(r["c"])({projId:this.id});case 2:e=t.sent,this.info=e;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()}},c=o,u=s("2877"),d=Object(u["a"])(c,n,i,!1,null,null,null);d.options.__file="ProjectInfoDetails.vue";e["default"]=d.exports}}]);