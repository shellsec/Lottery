webpackJsonp([3],{"+skl":function(t,e){},"1UWp":function(t,e){},"1Y7j":function(t,e){},Hi12:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},o,!1,function(t){n("Hi12")},null,null).exports,s=n("/ocq"),i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._v(" "),n("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),n("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),n("br"),t._v(" "),n("li",[n("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};var l=n("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},i,!1,function(t){n("1Y7j")},"data-v-235f4189",null).exports,u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Layout",{style:{minHeight:"100vh"}},[n("Sider",{ref:"side1",attrs:{breakpoint:"sm","hide-trigger":"",collapsible:"","collapsed-width":78},model:{value:t.isCollapsed,callback:function(e){t.isCollapsed=e},expression:"isCollapsed"}},[n("Menu",{class:t.menuitemClasses,attrs:{"active-name":"1",theme:"dark",width:"auto"}},[n("MenuItem",{attrs:{name:"1"},nativeOn:{click:function(e){return t.toGoForecastNumber(e)}}},[n("Icon",{attrs:{type:"happy-outline"}}),t._v(" "),n("span",[t._v("山东11选5")])],1),t._v(" "),n("MenuItem",{attrs:{name:"2"},nativeOn:{click:function(e){return t.toGoTrendingToday(e)}}},[n("Icon",{attrs:{type:"connection-bars"}}),t._v(" "),n("span",[t._v("数据统计")])],1)],1),t._v(" "),n("p",{staticStyle:{color:"#F9453E","font-size":"14px",position:"absolute",bottom:"0",width:"100%",height:"80px","text-align":"center"}},[t._v("投注有风险，投资需谨慎")]),t._v(" "),n("Adsense",{attrs:{"data-ad-client":"ca-pub-8836920368192866","data-ad-slot":"8089222718"}})],1),t._v(" "),n("Layout",[n("Header",{staticClass:"layout-header-bar",style:{padding:0}},[n("Icon",{class:t.rotateIcon,style:{margin:"20px 20px 0"},attrs:{type:"navicon-round",size:"24"},nativeOn:{click:function(e){return t.collapsedSider(e)}}}),t._v(" "),n("div",{staticClass:"head-rules"},[n("Row",{attrs:{type:"flex",justify:"end",align:"middle"}},[n("a",{staticStyle:{color:"#3399ff","font-size":"16px","font-weight":"bold"},attrs:{href:"#"},on:{click:function(e){t.rules_modal=!0}}},[t._v("玩法说明\n                            "),n("Icon",{attrs:{type:"help-circled"}})],1),t._v(" "),n("Modal",{attrs:{title:"玩法说明"},on:{"on-ok":t.ok,"on-cancel":t.cancel},model:{value:t.rules_modal,callback:function(e){t.rules_modal=e},expression:"rules_modal"}},[n("p",[t._v("本网站是从11个号码中随机选5个号码进行组合得出所有结果，在购买网站上把选择出来的5个号码的所有组合进行购买，只要当期顺序摇出的5个开奖号码中包含所选号码，即为中奖。中奖概率会大大提升，购买网站是可以一次性粘贴所有的结果一次性购买的，中奖率极高。")]),t._v(" "),n("p",[t._v("M0: 是指跟上期开奖没有重号；")]),t._v(" "),n("p",[t._v("M1: 是指跟上期开奖有一个重号；")]),t._v(" "),n("p",[t._v("M2: 是指跟上期开奖有两个重号；")]),t._v(" "),n("p",[t._v("M3: 是指跟上期开奖有三个重号；")]),t._v(" "),n("p",[t._v("M4: 是指跟上期开奖有四个重号；")]),t._v(" "),n("p",[t._v("筛选功能：可以选择你猜的类型，筛除号码，定胆号码，筛除大小比，筛除奇偶比，这样可以根据自己的判断得出自认为更好的结果，这样可以获得更少的组数，中更多的MONEY；")]),t._v(" "),n("p",[t._v("数据统计：可以查看往日开出来的类型，大小比，奇偶比，助你更好的选择；")]),t._v(" "),n("p",[t._v("偷偷的在这里告诉你，在所选的组数只要有一组中奖，就是中奖，一旦中奖，本次投注不会亏损本金。")]),t._v(" "),n("p",{staticStyle:{color:"#F9453E","font-size":"14px"}},[t._v("投注有风险，投资需谨慎")])])],1)],1)],1),t._v(" "),n("Content",{style:{margin:"12px",padding:"0px 20px 20px",background:"#fff",minHeight:"260px"}},[n("div",[n("keep-alive",[n("router-view")],1)],1)]),t._v(" "),n("Footer",{staticClass:"layout-footer-center"},[t._v(" copyright©2017-2018")])],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")({data:function(){return{isCollapsed:!1,userName:"我就是我",rules_modal:!1}},computed:{rotateIcon:function(){return["menu-icon",this.isCollapsed?"rotate-icon":""]},menuitemClasses:function(){return["menu-item",this.isCollapsed?"collapsed-menu":""]}},methods:{collapsedSider:function(){this.$refs.side1.toggleCollapse()},toGoForecastNumber:function(){this.$router.push({path:"/forecastNumber"})},toGoTrendingToday:function(){this.$router.push({path:"/trendingToday"})},rulesClick:function(){}}},u,!1,function(t){n("1UWp")},"data-v-464389e0",null).exports;a.default.use(s.a);var p=new s.a({mode:"history",routes:[{path:"/",name:"Main",component:c,redirect:"/forecastNumber",children:[{path:"trendingToday",name:"trendingToday",component:function(t){return n.e(1).then(function(){var e=[n("/As6")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"数据统计"}},{path:"forecastNumber",name:"玩法选择",component:function(t){return n.e(0).then(function(){var e=[n("Fdf9")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{title:"11选5辅助"}}]},{path:"/hello",name:"HelloWorld",component:l}]}),v=n("BTaQ"),d=n.n(v),_=n("vXZn"),h=n.n(_),f=n("p/TY"),m=n.n(f),g=n("LKcQ"),b=n.n(g),y=(n("+skl"),n("8xvC")),k=n.n(y);a.default.use(n("B60x")),a.default.use(k.a.Adsense),a.default.use(d.a),a.default.component(h.a.name,h.a),a.default.component(m.a.name,m.a),a.default.component(b.a.name,b.a),a.default.config.productionTip=!1,p.beforeEach(function(t,e,n){t.meta.title&&(document.title=t.meta.title),n()}),new a.default({el:"#app",components:{App:r},template:"<App/>",router:p,render:function(t){return t(r)}})}},["NHnr"]);