webpackJsonp([3],{"+uqi":function(t,s,e){"use strict";var a=e("hsoU"),i=e("8f4f"),n={data:function(){return{elem:this.$refs.selectBox}},methods:{closePopup:function(){console.log("hihi"),this.$emit("goToUpgrade")},nextStep:function(){this.changeStep(this.$refs.selectBox,"back","next",397,this.$refs.first,this.$refs.second)},returnStep:function(){this.changeStep(this.$refs.selectBox,"next","back",397,this.$refs.second,this.$refs.first)},relaseStep:function(){this.changeStep(this.$refs.selectBox,"next","last",340,this.$refs.second,this.$refs.over),this.uploadFailure&&(this.$refs.over.classList.add("failure-message"),this.$refs.fail.innerHTML="失败")},reUpgrade:function(){this.changeStep(this.$refs.selectBox,"last","back",390,this.$refs.over,this.$refs.first),this.$refs.over.classList.remove("failure-message"),this.$refs.fail.innerHTML="完成"},changeStep:function(t,s,e,a,i,n){t.classList.remove(s),t.classList.add(e),t.style.height=a+"px",i.classList.remove("active"),n.classList.add("active")}},components:{OButton:a.a,Popup:i.a},props:["header","stepText","helpMessage","uploadSuccess","uploadFailure"]},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("popup",[e("div",{staticClass:"release-popup",attrs:{slot:"content"},slot:"content"},[e("h2",{staticClass:"header"},[t._v("\n            "+t._s(t.header)+"\n        ")]),t._v(" "),e("div",{staticClass:"upgrade-step"},[e("div",{ref:"first",staticClass:"active"},[e("span",{staticClass:"num-step"},[t._v("1")]),t._v(" "),e("span",[t._v(t._s(t.stepText.first))]),t._v(" "),e("i",{staticClass:"spot"},[t._v("........")])]),t._v(" "),e("div",{ref:"second"},[e("span",{staticClass:"num-step"},[t._v("2")]),t._v(" "),e("span",[t._v(t._s(t.stepText.second))]),t._v(" "),e("i",{staticClass:"spot"},[t._v("........")])]),t._v(" "),e("div",{ref:"over"},[e("span",{staticClass:"num-step"},[t._v("3")]),t._v(" "),e("span",{ref:"fail"},[t._v("完成")])])]),t._v(" "),e("div",{ref:"selectBox",staticClass:"container-wrapper"},[e("div",{staticClass:"slide-box upload-box"},[t._t("firstStep"),t._v(" "),e("div",{staticClass:"alert-btn-box"},[e("o-button",{staticClass:"next-btn",attrs:{text:"下一步",classStyle:"main-btn"},on:{btnClick:t.nextStep}})],1)],2),t._v(" "),e("div",{staticClass:"slide-box select-box"},[t._t("secondStep"),t._v(" "),e("div",{staticClass:"buttons"},[e("o-button",{staticClass:"btn",attrs:{text:"上一步",classStyle:"main-btn"},on:{btnClick:t.returnStep}}),t._v(" "),e("o-button",{staticClass:"btn",attrs:{text:"提交",classStyle:"main-btn"},on:{btnClick:t.relaseStep}})],1)],2),t._v(" "),e("div",{staticClass:"slide-box"},[t.uploadSuccess?e("div",{staticClass:"upload-result"},[e("div",{staticClass:"uploading"},[e("span",{staticClass:"upload-img success-img"}),t._v(" "),e("p",{staticClass:"upload-text"},[t._v("支付成功")])]),t._v(" "),e("p",{staticClass:"help-message"},[t._v("\n                        "+t._s(t.helpMessage)+"\n                    ")]),t._v(" "),t._t("makeSureBtn")],2):t._e(),t._v(" "),t.uploadFailure?e("div",{staticClass:"upload-result"},[e("div",{staticClass:"uploading"},[e("span",{staticClass:"upload-img error-img"}),t._v(" "),e("p",{staticClass:"upload-text"},[t._v("上传失败")])]),t._v(" "),e("p",{staticClass:"help-message"},[t._v("\n                        如遇到无法解决的问题，请"),e("a",{attrs:{href:"javascript:;"}},[t._v("联系客服")])]),t._v(" "),e("o-button",{staticClass:"btn",attrs:{text:"重新支付",classStyle:"main-btn"},on:{btnClick:t.reUpgrade}})],1):t._e()])])]),t._v(" "),e("input",{staticClass:"close-btn",attrs:{slot:"close",type:"button",name:"",onfocus:"this.blur();"},on:{click:t.closePopup},slot:"close"})])},staticRenderFns:[]};var o=e("C7Lr")(n,l,!1,function(t){e("Ah+X")},"data-v-5396dcfe",null);s.a=o.exports},"/ljx":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("hsoU"),i=e("+uqi"),n=e("ZQcc"),l={data:function(){return{header:"升级企业号",stepText:{first:"填写企业信息",second:"支付企业认证费"},helpMessage:"您的企业号已开通成功！到期时间为：2019-6-20",uploadSuccess:!0,uploadFailure:!1,updateFlag:!1}},methods:{goToUpgrade:function(){this.$emit("goToUpgrade")},upgradeSuccess:function(){this.$emit("goToUpgrade",!this.updateFlag)}},components:{OButton:a.a,UpgradeStep:i.a,PayTabs:n.a}},o={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("upgrade-step",{attrs:{header:t.header,stepText:t.stepText,helpMessage:t.helpMessage,uploadSuccess:t.uploadSuccess,uploadFailure:t.uploadFailure},on:{goToUpgrade:t.goToUpgrade}},[e("form",{staticClass:"modify-form",attrs:{slot:"firstStep"},slot:"firstStep"},[e("div",{staticClass:"form-control"},[e("label",{staticClass:"label-title"},[t._v("企业简称：")]),t._v(" "),e("input",{staticClass:"input-control",attrs:{type:"text",name:"username",placeholder:"输入企业的简称"}}),t._v(" "),e("p",{staticClass:"tips"},[t._v("认证后，您的账号昵称将显示为企业简称，并配有企业认证标识")])]),t._v(" "),e("div",{staticClass:"form-control upload-ID"},[e("label",{staticClass:"label-title"},[t._v("企业营业执照：")]),t._v(" "),e("div",{staticClass:"upload-file"},[e("div",{staticClass:"up"},[e("o-button",{staticClass:"upload-btn",attrs:{text:"点击上传",classStyle:"main-btn"},on:{btnClick:function(t){}}}),t._v(" "),e("input",{staticClass:"input-control",attrs:{type:"file"}})],1)])])]),t._v(" "),e("div",{staticClass:"pay-tab",attrs:{slot:"secondStep"},slot:"secondStep"},[e("pay-tabs",[e("p",{staticClass:"text",attrs:{slot:"message"},slot:"message"},[t._v("支付企业认证费："),e("strong",[t._v("300")]),t._v("元/年 ")])])],1),t._v(" "),e("o-button",{staticClass:"btn",attrs:{slot:"makeSureBtn",text:"确定",classStyle:"main-btn"},on:{btnClick:t.upgradeSuccess},slot:"makeSureBtn"})],1)},staticRenderFns:[]};var c=e("C7Lr")(l,o,!1,function(t){e("NwSl")},"data-v-270c6136",null).exports,r={data:function(){return{upgradeFlag:!1,updateFlag:!1}},methods:{goToUpgrade:function(t){this.upgradeFlag=!this.upgradeFlag,this.updateFlag=t}},components:{OButton:a.a,UpgradePopup:c}},p={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"upgrade"},[e("h1",{staticClass:"title"},[t._v("升级为企业号")]),t._v(" "),t._m(0),t._v(" "),e("o-button",{directives:[{name:"show",rawName:"v-show",value:!t.updateFlag,expression:"!updateFlag"}],staticClass:"upgrade-btn",attrs:{text:"升级为企业号",classStyle:"main-btn"},on:{btnClick:t.goToUpgrade}}),t._v(" "),e("o-button",{directives:[{name:"show",rawName:"v-show",value:t.updateFlag,expression:"updateFlag"}],staticClass:"over-btn",attrs:{text:"您已是企业号",classStyle:"gray-btn"}}),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:t.updateFlag,expression:"updateFlag"}],staticClass:"last-date"},[t._v("您的企业号已经开通！到期时间为：2019-6-20")]),t._v(" "),t.upgradeFlag?e("upgrade-popup",{on:{goToUpgrade:t.goToUpgrade}}):t._e()],1)},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",{staticClass:"upgrade-text"},[e("li",[e("h3",[t._v("1、什么是企业号？")]),t._v(" "),e("p",[t._v("企业号是指您所下载的付费作品将有可能用于企业级的商业用途：原点网络的个人号下载的付费作品仅供个人使用，不得用于企业生产的任何产品当中。而企业所下载的付费作品可以用于该账号下的个人和企业两种身份。")]),t._v(" "),e("p",[t._v("原点网络致力于保护素材作品作者的知识产权，实行账号的授权“一对一”保护措施，每一个付费作品的下载信息都将记录与作者的个人账户中，若发现任何侵权行为，原点网络将积极配合作品原作者追究其法律责任。")])]),t._v(" "),e("li",[e("h3",[t._v("2、升级费用")]),t._v(" "),e("p",[t._v("个人号升级为企业号，需每年向平台缴纳"),e("strong",[t._v("300")]),t._v("元的企业服务费。")])])])}]};var u=e("C7Lr")(r,p,!1,function(t){e("LcdB")},"data-v-16e6cf95",null);s.default=u.exports},"Ah+X":function(t,s){},LcdB:function(t,s){},NwSl:function(t,s){},ZQcc:function(t,s,e){"use strict";var a={data:function(){return{payTabs:[{text:"微信支付"},{text:"支付宝支付"}],payContents:[{src:"static/images_icon/QR.png",text:"打开微信扫一扫"},{src:"static/images_icon/alipay.jpg",text:"打开支付宝扫一扫"}],curId:0}},methods:{changePayMethods:function(t){this.curId=t}},components:{OButton:e("hsoU").a}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"pay-tab"},[e("div",{staticClass:"header"},t._l(t.payTabs,function(s,a){return e("o-button",{key:a,staticClass:"pay-btn",class:{active:t.curId===a},attrs:{text:s.text,classStyle:"gray-btn"},on:{btnClick:function(s){t.changePayMethods(a)}}})})),t._v(" "),t._l(t.payContents,function(s,a){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.curId===a,expression:"curId === index"}],key:a,staticClass:"pay-content"},[e("img",{staticClass:"pay-img",attrs:{src:s.src,alt:s.text}}),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))])])}),t._v(" "),t._t("pay-message")],2)},staticRenderFns:[]};var n=e("C7Lr")(a,i,!1,function(t){e("kDuQ")},"data-v-3f12a266",null);s.a=n.exports},kDuQ:function(t,s){}});
//# sourceMappingURL=3.e5b5de1f71590645c390.js.map