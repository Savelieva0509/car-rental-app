"use strict";(self.webpackChunkcar_rental_app=self.webpackChunkcar_rental_app||[]).push([[697],{697:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(439),r=n(791),s=n(689),i=n(218),c=n(184),l=function(){return(0,c.jsx)(i.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{margin:"20"},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"rgb(152, 253, 131)",color:"rgb(0, 176, 200)"})},o={carList:"CarList_carList__tm3hI",carImage:"CarList_carImage__8BNrY",titleContainer:"CarList_titleContainer__7mIAN",titleInfo:"CarList_titleInfo__2uDt8",titleInfoText:"CarList_titleInfoText__hbX5i",titleInfoTextBlue:"CarList_titleInfoTextBlue__+7bkj",infoContainer:"CarList_infoContainer__u5g-C",infoText:"CarList_infoText__p9cSQ",buttonLearnMore:"CarList_buttonLearnMore__Al437"},f=function(e){var t=e.cars;return(0,c.jsx)("div",{className:o.carListContainer,children:(0,c.jsx)("ul",{className:o.carList,children:t.map((function(e){var t=e.model,n=e.make,a=e.id,r=e.img,s=e.year,i=e.address,l=e.rentalPrice,f=e.rentalCompany,u=e.type,p=e.functionalities,x=(e.fuelConsumption,e.engineSize,e.description,e.accessories,e.rentalConditions,e.mileage,i.split(", ")),m=x[1],d=x[2],h=p[0].split(" ").slice(0,1).join(" ");return(0,c.jsxs)("li",{className:o.carItem,children:[(0,c.jsx)("img",{src:r,alt:"car",className:o.carImage}),(0,c.jsxs)("div",{className:o.titleContainer,children:[(0,c.jsxs)("div",{className:o.titleInfo,children:[(0,c.jsxs)("p",{className:o.titleInfoText,children:[n,"\xa0"]}),(0,c.jsxs)("p",{className:"".concat(o.titleInfoText," ").concat(o.titleInfoTextBlue),children:[t,",\xa0"]}),(0,c.jsx)("p",{className:o.titleInfoText,children:s})]}),(0,c.jsx)("p",{className:o.titleInfoText,children:l})]}),(0,c.jsxs)("div",{className:o.infoContainer,children:[(0,c.jsx)("p",{className:o.infoText,children:m}),(0,c.jsx)("p",{className:o.infoText,children:d}),(0,c.jsx)("p",{className:o.infoText,children:f}),(0,c.jsx)("p",{className:o.infoText,children:u}),(0,c.jsx)("p",{className:o.infoText,children:t}),(0,c.jsx)("p",{className:o.infoText,children:a}),(0,c.jsx)("p",{className:o.infoText,children:h})]}),(0,c.jsx)("button",{type:"button",className:o.buttonLearnMore,children:"Learn more"})]},a)}))})})},u="CatalogPage_catalogContainer__mn9Zl",p=n(861),x=n(757),m=n.n(x),d=n(294);function h(){return(h=(0,p.Z)(m().mark((function e(t){var n,a,r;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,20,n="https://6571f80ad61ba6fcc0141958.mockapi.io/cars?page=".concat(t,"&limit=").concat(20),e.next=5,d.Z.get(n);case 5:return a=e.sent,r=a.data,e.abrupt("return",r);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error getting total cars:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var _=function(e){return h.apply(this,arguments)};var j=function(){var e=(0,r.useState)(1),t=(0,a.Z)(e,1)[0],n=(0,r.useState)(!1),i=(0,a.Z)(n,2),o=i[0],p=i[1],x=(0,r.useState)([]),m=(0,a.Z)(x,2),d=m[0],h=m[1];return(0,r.useEffect)((function(){p(!0),_(t).then((function(e){h(e),console.log(e)})).catch((function(e){console.error("Error fetching cars:",e)})).finally((function(){p(!1)}))}),[t]),(0,c.jsxs)("div",{className:u,children:[o&&(0,c.jsx)(l,{}),(0,c.jsx)(f,{cars:d}),(0,c.jsx)(r.Suspense,{fallback:(0,c.jsx)(l,{center:!0,content:"loading"}),children:(0,c.jsx)(s.j3,{})})]})}}}]);
//# sourceMappingURL=697.03abb12c.chunk.js.map