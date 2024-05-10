"use strict";const e=require("../../common/vendor.js"),t=require("../../stores/cart.js"),i=require("../../api/request.js");if(!Array){(e.resolveComponent("uni-col")+e.resolveComponent("uni-row")+e.resolveComponent("uni-icons")+e.resolveComponent("uni-section"))()}Math||((()=>"../../uni_modules/uni-row/components/uni-col/uni-col.js")+(()=>"../../uni_modules/uni-row/components/uni-row/uni-row.js")+(()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../uni_modules/uni-section/components/uni-section/uni-section.js")+n)();const n=()=>"./cart.js",s={__name:"dishes-detail",setup(n){const s=t.useCartStore(),o=e.ref({}),u=e.ref(!1);return e.onLoad((e=>{e.operate&&"edit"==e.operate&&(u.value=!0),i.http.get("/dishes/detail?id="+e.id).then((e=>{o.value=e.data}))})),(t,i)=>e.e({a:o.value.dishesImage,b:o.value.dishesName,c:e.t(o.value.dishesName),d:e.p({span:17}),e:u.value},u.value?e.e({f:e.unref(s).cartItems.find((e=>e.id===o.value.id))},e.unref(s).cartItems.find((e=>e.id===o.value.id))?{g:e.o((t=>e.unref(s).subtractItem(o.value))),h:e.o((e=>t.subtractToCart(t.dish)))}:{i:e.o((t=>e.unref(s).addItem(o.value)))},{j:e.p({span:7})}):{},{k:e.p({span:5}),l:e.f(o.value.difficultyFactor,((e,t,i)=>({a:"ca5d90be-7-"+i+",ca5d90be-6-"+i,b:t,c:"ca5d90be-6-"+i+",ca5d90be-4"}))),m:e.p({type:"star-filled",size:"30"}),n:e.p({span:2}),o:e.t(o.value.useTime),p:e.t(o.value.prices),q:e.p({title:"基础信息",type:"circle",titleFontSize:"18px"}),r:e.p({title:"所需食材",type:"circle",titleFontSize:"18px"}),s:e.p({title:"制作方法",type:"circle",titleFontSize:"18px"}),t:u.value},(u.value,{}))}};wx.createPage(s);