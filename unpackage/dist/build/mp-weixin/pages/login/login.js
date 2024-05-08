"use strict";const e=require("../../common/vendor.js"),o=require("../../api/request.js"),s=require("../../stores/login.js");if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-forms-item")+e.resolveComponent("uni-forms"))()}Math||((()=>"../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js")+(()=>"../../uni_modules/uni-forms/components/uni-forms/uni-forms.js"))();const n={__name:"login",setup(n){const r=s.useLoginStore(),i=e.reactive({username:"",password:"",isRemeber:!0});function a(e){e.detail.value.includes("isRemeber")?(console.log("remeber true"),i.isRemeber=!0):i.isRemeber=!1}return e.onLoad((()=>{i.username=r.loginForm.username,i.password=r.loginForm.password,i.isRemeber=r.loginForm.isRemeber})),(s,n)=>({a:e.o((e=>i.username=e)),b:e.p({placeholder:"请输入用户名",modelValue:i.username}),c:e.p({label:"用户名",required:!0,name:"username"}),d:e.o((e=>i.password=e)),e:e.p({type:"password",placeholder:"请输入密码",modelValue:i.password}),f:e.p({label:"密码",required:!0,name:"password"}),g:i.isRemeber,h:e.o(a),i:e.p({label:"",name:"isRemeber"}),j:e.sr("valiForm","023b0efe-0"),k:e.p({modelValue:i}),l:e.o((s=>{null!=i.username&&""!=i.username?null!=i.password&&""!=i.password?(e.index.showLoading({title:"登录中"}),o.http.post("/login/doLogin",i).then((o=>{const s=o.data;e.index.setStorageSync("iwtoken",s.tokenValue),i.isRemeber?(console.log("保存"),r.saveAccount(i)):r.clearAccount(),e.index.switchTab({url:"/pages/meal/meal"})})).finally((()=>{e.index.hideLoading()}))):e.index.showToast({icon:"error",title:"密码不能为空"}):e.index.showToast({icon:"error",title:"用户名不能为空"})}))})}};wx.createPage(n);
