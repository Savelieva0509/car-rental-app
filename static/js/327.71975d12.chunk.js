"use strict";(self.webpackChunkcar_rental_app=self.webpackChunkcar_rental_app||[]).push([[327],{327:function(e,a,n){n.r(a),n.d(a,{default:function(){return y}});var s=n(439),t=n(791),i=n(689),r=n(218),l=n(184),c=function(){return(0,l.jsx)(r.Yt,{visible:!0,height:"80",width:"80",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{margin:"20"},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"rgb(152, 253, 131)",color:"rgb(0, 176, 200)"})},o=n(942),d=n(413),m={Backdrop:"Modal_Backdrop__7zwOB",ModalContainer:"Modal_ModalContainer__xBW4j",BtnClose:"Modal_BtnClose__Mp4bF",CloseIcon:"Modal_CloseIcon__oK7DV",ContentWrapper:"Modal_ContentWrapper__3v3BX",CarImg:"Modal_CarImg__-45y1",InfoWrapper:"Modal_InfoWrapper__E7pMk",MainInfo:"Modal_MainInfo__H7OBS",CarInfo:"Modal_CarInfo__q0MK6",CarText:"Modal_CarText__C8sXj",ModelBlue:"Modal_ModelBlue__TV2BK",SecondaryInfo:"Modal_SecondaryInfo__UDfAP",SecondaryCarText:"Modal_SecondaryCarText__bKjam",Descriprion:"Modal_Descriprion__rqJEm",Accessories:"Modal_Accessories__kBvyl",AccessoriesTitle:"Modal_AccessoriesTitle__wF0KY",AccessoryList:"Modal_AccessoryList__CXs7n",AccessoryListItem:"Modal_AccessoryListItem__tIWuK",RentalBlock:"Modal_RentalBlock__34IcA",RentalTitle:"Modal_RentalTitle__FaJwC",RentalInfo:"Modal_RentalInfo__NKQMb",RentalItem:"Modal_RentalItem__V6iSb",RentalButton:"Modal_RentalButton__NjdsC"},_=function(e){var a=e.isOpen,n=e.onClose,s=e.model,i=e.make,r=e.id,c=e.img,o=e.year,d=e.address,_=e.rentalPrice,u=e.type,x=e.functionalities,f=e.fuelConsumption,p=e.engineSize,h=e.description,j=e.accessories,C=e.rentalConditions,N=e.mileage,v=(0,t.useCallback)((function(e){27===e.keyCode&&n()}),[n]);(0,t.useEffect)((function(){return a&&document.addEventListener("keydown",v),function(){document.removeEventListener("keydown",v)}}),[a,v]);var I=d.split(", "),M=I[1],y=I[2],g=C.split("\n",3),T=g[0].match(/\d+/),L=parseInt(T[0],10);return(0,l.jsx)("div",{className:m.Backdrop,onClick:n,children:(0,l.jsx)("div",{className:m.ModalContainer,children:(0,l.jsxs)("div",{className:m.ContentWrapper,children:[(0,l.jsx)("button",{type:"button","aria-label":"close button",onClick:n,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,l.jsx)("img",{className:m.CarImg,src:c,alt:i}),(0,l.jsxs)("div",{className:m.InfoWrapper,children:[(0,l.jsx)("div",{className:m.MainInfo,children:(0,l.jsxs)("div",{className:m.CarInfo,children:[(0,l.jsx)("div",{className:m.CarText,children:i}),(0,l.jsxs)("div",{className:m.ModelBlue,children:[s,(0,l.jsx)("span",{style:{color:"black"},children:","})]}),(0,l.jsx)("div",{className:m.CarText,children:o})]})}),(0,l.jsxs)("div",{className:m.SecondaryInfo,children:[(0,l.jsx)("div",{className:m.SecondaryCarText,children:M}),(0,l.jsx)("div",{className:m.SecondaryCarText,children:y}),(0,l.jsxs)("div",{className:m.SecondaryCarText,children:["id: ",r]}),(0,l.jsxs)("div",{className:m.SecondaryCarText,children:["Year: ",o]}),(0,l.jsxs)("div",{className:m.SecondaryCarText,children:["Type: ",u]}),(0,l.jsxs)("div",{className:m.SecondaryCarText,children:["Fuel Consumption: ",f]}),(0,l.jsxs)("div",{className:m.SecondaryCarText,children:["Engine Size: ",p]})]}),(0,l.jsx)("div",{className:m.Description,children:h}),(0,l.jsxs)("div",{className:m.Accessories,children:[(0,l.jsx)("div",{className:m.AccessoriesTitle,children:"Accessories and functionalities:"}),(0,l.jsxs)("ul",{className:m.AccessoryList,children:[j.map((function(e,a){return(0,l.jsx)("li",{className:m.AccessoryListItem,children:e},a)})),x.map((function(e,a){return(0,l.jsx)("li",{className:m.AccessoryListItem,children:e},a)}))]})]}),(0,l.jsxs)("div",{className:m.RentalBlock,children:[(0,l.jsx)("div",{className:m.RentalTitle,children:"Rental Conditions:"}),(0,l.jsxs)("div",{className:m.RentalInfo,children:[(0,l.jsxs)("div",{className:m.RentalItem,children:["Minimum age: ",(0,l.jsx)("span",{children:L})]}),(0,l.jsx)("div",{className:m.RentalItem,children:g[1]}),(0,l.jsx)("div",{className:m.RentalItem,children:g[2]}),(0,l.jsxs)("div",{className:m.RentalItem,children:["Mileage: ",(0,l.jsx)("span",{children:N.toLocaleString("en-EN")})]}),(0,l.jsxs)("div",{className:m.RentalItem,children:["Price: ",(0,l.jsx)("span",{children:_})]})]})]}),(0,l.jsx)("a",{href:"tel:+380730000000",className:m.RentalButton,children:"Rental car"})]})]})})})},u={carList:"CarList_carList__tm3hI",carImage:"CarList_carImage__8BNrY",titleContainer:"CarList_titleContainer__7mIAN",titleInfo:"CarList_titleInfo__2uDt8",titleInfoText:"CarList_titleInfoText__hbX5i",titleInfoTextBlue:"CarList_titleInfoTextBlue__+7bkj",infoContainer:"CarList_infoContainer__u5g-C",infoText:"CarList_infoText__p9cSQ",buttonLearnMore:"CarList_buttonLearnMore__Al437"},x=function(e){var a=e.cars,n=(0,t.useState)(!1),i=(0,s.Z)(n,2),r=i[0],c=i[1];return(0,l.jsx)("div",{className:u.carListContainer,children:(0,l.jsx)("ul",{className:u.carList,children:a.map((function(e){var a=e.model,n=e.make,s=e.id,t=e.img,i=e.year,m=e.address,x=e.rentalPrice,f=e.rentalCompany,p=e.type,h=e.functionalities,j=e.fuelConsumption,C=e.engineSize,N=e.description,v=e.accessories,I=e.rentalConditions,M=e.mileage,y=m.split(", "),g=y[1],T=y[2],L=h[0].split(" ").slice(0,1).join(" ");return(0,l.jsxs)("li",{className:u.carItem,children:[(0,l.jsx)("img",{src:t,alt:"car",className:u.carImage}),(0,l.jsxs)("div",{className:u.titleContainer,children:[(0,l.jsxs)("div",{className:u.titleInfo,children:[(0,l.jsxs)("p",{className:u.titleInfoText,children:[n,"\xa0"]}),(0,l.jsxs)("p",{className:"".concat(u.titleInfoText," ").concat(u.titleInfoTextBlue),children:[a,",\xa0"]}),(0,l.jsx)("p",{className:u.titleInfoText,children:i})]}),(0,l.jsx)("p",{className:u.titleInfoText,children:x})]}),(0,l.jsxs)("div",{className:u.infoContainer,children:[(0,l.jsx)("p",{className:u.infoText,children:g}),(0,l.jsx)("p",{className:u.infoText,children:T}),(0,l.jsx)("p",{className:u.infoText,children:f}),(0,l.jsx)("p",{className:u.infoText,children:p}),(0,l.jsx)("p",{className:u.infoText,children:a}),(0,l.jsx)("p",{className:u.infoText,children:s}),(0,l.jsx)("p",{className:u.infoText,children:L})]}),(0,l.jsx)("button",{type:"button",className:u.buttonLearnMore,onClick:function(){return e=s,void c((function(a){return(0,d.Z)((0,d.Z)({},a),{},(0,o.Z)({},e,!0))}));var e},children:"Learn more"}),r[s]&&(0,l.jsx)(_,{onClose:function(){return e=s,void c((function(a){return(0,d.Z)((0,d.Z)({},a),{},(0,o.Z)({},e,!1))}));var e},model:a,make:n,year:i,rentalPrice:x,address:m,rentalCompany:f,functionalities:h,id:s,type:p,img:t,fuelConsumption:j,engineSize:C,description:N,accessories:v,rentalConditions:I,mileage:M},s)]},s)}))})})},f="CatalogPage_catalogContainer__mn9Zl",p=n(861),h=n(757),j=n.n(h),C=n(294);function N(){return(N=(0,p.Z)(j().mark((function e(a){var n,s,t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,20,n="https://6571f80ad61ba6fcc0141958.mockapi.io/cars?page=".concat(a,"&limit=").concat(20),e.next=5,C.Z.get(n);case 5:return s=e.sent,t=s.data,e.abrupt("return",t);case 10:throw e.prev=10,e.t0=e.catch(0),console.error("Error getting total cars:",e.t0),e.t0;case 14:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var v=function(e){return N.apply(this,arguments)},I="ButtonLoadMore_buttonLoadMore__IOwLn",M=function(e){var a=e.onLoadMore;return(0,l.jsx)("button",{className:I,type:"submit",onClick:a,children:"Load more"})};var y=function(){var e=(0,t.useState)(1),a=(0,s.Z)(e,2),n=a[0],r=a[1],o=(0,t.useState)(!1),d=(0,s.Z)(o,2),m=d[0],_=d[1],u=(0,t.useState)([]),p=(0,s.Z)(u,2),h=p[0],j=p[1];return(0,t.useEffect)((function(){_(!0),v(n).then((function(e){j(e),console.log(e)})).catch((function(e){console.error("Error fetching cars:",e)})).finally((function(){_(!1)}))}),[n]),(0,l.jsxs)("div",{className:f,children:[m&&(0,l.jsx)(c,{}),(0,l.jsx)(x,{cars:h}),(0,l.jsx)(M,{onLoadMore:function(){r((function(e){return e+1}))}}),(0,l.jsx)(t.Suspense,{fallback:(0,l.jsx)(c,{center:!0,content:"loading"}),children:(0,l.jsx)(i.j3,{})})]})}}}]);
//# sourceMappingURL=327.71975d12.chunk.js.map