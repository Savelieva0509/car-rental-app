"use strict";(self.webpackChunkcar_rental_app=self.webpackChunkcar_rental_app||[]).push([[765],{7335:function(e,n,a){a.d(n,{Z:function(){return _}});var t=a(4942),r=a(1413),s=a(9439),i=a(2791),l=a(4420),c=a(8617),o=a(71),d={Backdrop:"Modal_Backdrop__7zwOB",ModalContainer:"Modal_ModalContainer__xBW4j",CloseButton:"Modal_CloseButton__ATdYL",ContentWrapper:"Modal_ContentWrapper__3v3BX",CarImg:"Modal_CarImg__-45y1",InfoWrapper:"Modal_InfoWrapper__E7pMk",MainInfo:"Modal_MainInfo__H7OBS",CarInfo:"Modal_CarInfo__q0MK6",CarText:"Modal_CarText__C8sXj",ModelBlue:"Modal_ModelBlue__TV2BK",SecondaryInfo:"Modal_SecondaryInfo__UDfAP",SecondaryCarText:"Modal_SecondaryCarText__bKjam",Descriprion:"Modal_Descriprion__rqJEm",Accessories:"Modal_Accessories__kBvyl",AccessoriesTitle:"Modal_AccessoriesTitle__wF0KY",AccessoryList:"Modal_AccessoryList__CXs7n",AccessoryListItem:"Modal_AccessoryListItem__tIWuK",RentalBlock:"Modal_RentalBlock__34IcA",RentalTitle:"Modal_RentalTitle__FaJwC",RentalInfo:"Modal_RentalInfo__NKQMb",RentalItem:"Modal_RentalItem__V6iSb",RentalButton:"Modal_RentalButton__NjdsC"},u=a(184),m=function(e){var n=e.isOpen,a=e.onClose,t=e.model,r=e.make,s=e.id,l=e.img,c=e.year,m=e.address,f=e.rentalPrice,p=e.type,_=e.functionalities,x=e.fuelConsumption,h=e.engineSize,v=e.description,C=e.accessories,j=e.rentalConditions,N=e.mileage,g=(0,i.useCallback)((function(e){27===e.keyCode&&a()}),[a]);(0,i.useEffect)((function(){return n&&document.addEventListener("keydown",g),function(){document.removeEventListener("keydown",g)}}),[n,g]);var I=m.split(", "),b=I[1],y=I[2],M=j.split("\n",3),k=M[0].match(/\d+/),S=parseInt(k[0],10);return(0,u.jsx)("div",{className:d.Backdrop,onClick:a,children:(0,u.jsx)("div",{className:d.ModalContainer,children:(0,u.jsxs)("div",{className:d.ContentWrapper,children:[(0,u.jsx)("button",{type:"button","aria-label":"close button",onClick:a,className:d.CloseButton,children:(0,u.jsx)(o.bjh,{size:22})}),(0,u.jsx)("img",{className:d.CarImg,src:l,alt:r}),(0,u.jsxs)("div",{className:d.InfoWrapper,children:[(0,u.jsx)("div",{className:d.MainInfo,children:(0,u.jsxs)("div",{className:d.CarInfo,children:[(0,u.jsx)("div",{className:d.CarText,children:r}),(0,u.jsxs)("div",{className:d.ModelBlue,children:[t,(0,u.jsx)("span",{style:{color:"black"},children:","})]}),(0,u.jsx)("div",{className:d.CarText,children:c})]})}),(0,u.jsxs)("div",{className:d.SecondaryInfo,children:[(0,u.jsx)("div",{className:d.SecondaryCarText,children:b}),(0,u.jsx)("div",{className:d.SecondaryCarText,children:y}),(0,u.jsxs)("div",{className:d.SecondaryCarText,children:["id: ",s]}),(0,u.jsxs)("div",{className:d.SecondaryCarText,children:["Year: ",c]}),(0,u.jsxs)("div",{className:d.SecondaryCarText,children:["Type: ",p]}),(0,u.jsxs)("div",{className:d.SecondaryCarText,children:["Fuel Consumption: ",x]}),(0,u.jsxs)("div",{className:d.SecondaryCarText,children:["Engine Size: ",h]})]}),(0,u.jsx)("div",{className:d.Description,children:v}),(0,u.jsxs)("div",{className:d.Accessories,children:[(0,u.jsx)("div",{className:d.AccessoriesTitle,children:"Accessories and functionalities:"}),(0,u.jsxs)("ul",{className:d.AccessoryList,children:[C.map((function(e,n){return(0,u.jsx)("li",{className:d.AccessoryListItem,children:e},n)})),_.map((function(e,n){return(0,u.jsx)("li",{className:d.AccessoryListItem,children:e},n)}))]})]}),(0,u.jsxs)("div",{className:d.RentalBlock,children:[(0,u.jsx)("div",{className:d.RentalTitle,children:"Rental Conditions:"}),(0,u.jsxs)("div",{className:d.RentalInfo,children:[(0,u.jsxs)("div",{className:d.RentalItem,children:["Minimum age: ",(0,u.jsx)("span",{children:S})]}),(0,u.jsx)("div",{className:d.RentalItem,children:M[1]}),(0,u.jsx)("div",{className:d.RentalItem,children:M[2]}),(0,u.jsxs)("div",{className:d.RentalItem,children:["Mileage: ",(0,u.jsx)("span",{children:N.toLocaleString("en-EN")})]}),(0,u.jsxs)("div",{className:d.RentalItem,children:["Price: ",(0,u.jsx)("span",{children:f})]})]})]}),(0,u.jsx)("a",{href:"tel:+380730000000",className:d.RentalButton,children:"Rental car"})]})]})})})},f={carList:"CarList_carList__tm3hI",carItem:"CarList_carItem__Pk2at",carImage:"CarList_carImage__8BNrY",titleContainer:"CarList_titleContainer__7mIAN",titleInfo:"CarList_titleInfo__2uDt8",titleInfoText:"CarList_titleInfoText__hbX5i",titleInfoTextBlue:"CarList_titleInfoTextBlue__+7bkj",infoContainer:"CarList_infoContainer__u5g-C",infoText:"CarList_infoText__p9cSQ",buttonLearnMore:"CarList_buttonLearnMore__Al437",likeIcon:"CarList_likeIcon__yGRS0"},p=a(4137),_=function(e){var n=e.cars,a=(0,l.I0)(),o=(0,i.useState)(!1),d=(0,s.Z)(o,2),_=d[0],x=d[1],h=(0,l.v9)((function(e){return e.favorite})),v=function(e){return h.some((function(n){return n===e}))};return(0,u.jsx)("div",{className:f.carListContainer,children:(0,u.jsx)("ul",{className:f.carList,children:n.map((function(e){var n=e.model,s=e.make,i=e.id,l=e.img,o=e.year,d=e.address,h=e.rentalPrice,C=e.rentalCompany,j=e.type,N=e.functionalities,g=e.fuelConsumption,I=e.engineSize,b=e.description,y=e.accessories,M=e.rentalConditions,k=e.mileage,S=d.split(", "),T=S[1],L=S[2],Z=N[0].split(" ").slice(0,1).join(" ");return(0,u.jsxs)("li",{className:f.carItem,children:[(0,u.jsx)("img",{src:l,alt:"car",className:f.carImage}),(0,u.jsx)("div",{className:f.likeIcon,onClick:function(){var e;v(e=i)?a((0,p.L6)(e)):a((0,p.gv)(e))},children:v(i)?(0,u.jsx)(c.dOX,{color:"#3470ff",size:18}):(0,u.jsx)(c.wkn,{size:18})}),(0,u.jsxs)("div",{className:f.titleContainer,children:[(0,u.jsxs)("div",{className:f.titleInfo,children:[(0,u.jsxs)("p",{className:f.titleInfoText,children:[s,"\xa0"]}),(0,u.jsxs)("p",{className:"".concat(f.titleInfoText," ").concat(f.titleInfoTextBlue),children:[n,",\xa0"]}),(0,u.jsx)("p",{className:f.titleInfoText,children:o})]}),(0,u.jsx)("p",{className:f.titleInfoText,children:h})]}),(0,u.jsxs)("div",{className:f.infoContainer,children:[(0,u.jsx)("p",{className:f.infoText,children:T}),(0,u.jsx)("p",{className:f.infoText,children:L}),(0,u.jsx)("p",{className:f.infoText,children:C}),(0,u.jsx)("p",{className:f.infoText,children:j}),(0,u.jsx)("p",{className:f.infoText,children:n}),(0,u.jsx)("p",{className:f.infoText,children:i}),(0,u.jsx)("p",{className:f.infoText,children:Z})]}),(0,u.jsx)("button",{type:"button",className:f.buttonLearnMore,onClick:function(){return e=i,void x((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,t.Z)({},e,!0))}));var e},children:"Learn more"}),_[i]&&(0,u.jsx)(m,{onClose:function(){return e=i,void x((function(n){return(0,r.Z)((0,r.Z)({},n),{},(0,t.Z)({},e,!1))}));var e},model:n,make:s,year:o,rentalPrice:h,address:d,rentalCompany:C,functionalities:N,id:i,type:j,img:l,fuelConsumption:g,engineSize:I,description:b,accessories:y,rentalConditions:M,mileage:k},i)]},i)}))})})}},7765:function(e,n,a){a.r(n),a.d(n,{default:function(){return P}});var t=a(3433),r=a(5861),s=a(9439),i=a(4687),l=a.n(i),c=a(2791),o=a(4420),d=a(7689),u=a(9041),m=a(184),f=function(){return(0,m.jsx)(u.Yt,{visible:!0,height:"200",width:"200",ariaLabel:"MagnifyingGlass-loading",wrapperStyle:{margin:"20"},wrapperClass:"MagnifyingGlass-wrapper",glassColor:"white",color:"rgba(52, 112, 255, 1)\n"})},p=a(7335),_=a(1413),x=a(4602),h="Button_buttonSearch__FmJV3",v=function(e){var n=e.onClick;return(0,m.jsx)("button",{type:"button",className:h,onClick:n,children:"Search"})},C="Filter_Container__2veh+",j="Filter_SelectContainer__VEX8h",N="Filter_Label__MldcW",g="Filter_Form__Pf0yy",I="Filter_InputContainer__UoAb8",b="Filter_InputLeft__+MB8N",y="Filter_InputRight__ydlsN",M=function(e){var n=e.makes,a=e.prices,t=e.handleMakeChange,r=e.handlePriceChange,i=e.handleFilterClick,l=(0,c.useState)(null),o=(0,s.Z)(l,2),d=o[0],u=o[1],f=(0,c.useState)(null),p=(0,s.Z)(f,2),_=p[0],h=p[1],M=(0,c.useState)(""),S=(0,s.Z)(M,2),T=S[0],L=S[1],Z=(0,c.useState)(""),B=(0,s.Z)(Z,2),w=B[0],R=B[1],F=n.map((function(e){return{value:e,label:e}})),A=Array.from(new Set(a.map((function(e){return parseInt(e.slice(1))})))).sort((function(e,n){return e-n})).map((function(e){return{value:e,label:"".concat(10*Math.floor(e/10))}})),P=function(e,n){var a=e.target.value;(/^\d*$/.test(a)||""===a)&&n(a)};return(0,m.jsxs)("div",{className:C,children:[(0,m.jsxs)("div",{className:j,children:[(0,m.jsx)("label",{htmlFor:"nameSelect",className:N,children:"Car brand"}),(0,m.jsx)(x.ZP,{id:"nameSelect",placeholder:"Enter the text",value:d,isClearable:!0,onChange:function(e){u(e),t(e)},options:F,styles:k,components:{IndicatorSeparator:function(){return null}}})]}),(0,m.jsxs)("div",{className:j,children:[(0,m.jsx)("label",{htmlFor:"priceSelect",className:N,children:"Price/ 1 hour"}),(0,m.jsx)(x.ZP,{id:"priceSelect",placeholder:"To $",value:_,onChange:function(e){h(e),r(e)},options:A,styles:k,components:{IndicatorSeparator:function(){return null}}})]}),(0,m.jsxs)("form",{className:g,children:[(0,m.jsx)("label",{className:N,children:"Car mileage / km"}),(0,m.jsxs)("div",{className:I,children:[(0,m.jsx)("input",{className:b,type:"text",placeholder:"From",value:T,onChange:function(e){return P(e,L)}}),(0,m.jsx)("input",{className:y,placeholder:"To",type:"text",value:w,onChange:function(e){return P(e,R)}})]})]}),(0,m.jsx)(v,{onClick:function(){return i(d,_,T,w)}})]})},k={control:function(e){return(0,_.Z)((0,_.Z)({},e),{},{width:"224px",height:"48px",borderColor:"rgba(18, 20, 23, 0.2)",border:"none",borderRadius:"14px",padding:"8px",fontSize:"16px",fontFamily:"Manrope",backgroundColor:"rgba(247, 247, 251, 1)",appearance:"none"})},option:function(e,n){var a=n.isFocused;return(0,_.Z)((0,_.Z)({},e),{},{color:a?"black":"rgba(18, 20, 23, 0.2)",fontFamily:"Manrope"})},placeholder:function(e){return(0,_.Z)((0,_.Z)({},e),{},{color:"rgba(18, 20, 23, 1)"})},dropdownIndicator:function(e,n){return(0,_.Z)((0,_.Z)({},e),{},{transition:"all .2s ease",transform:n.selectProps.menuIsOpen?"rotate(180deg)":null})}},S=a(8699),T=a(5294);T.Z.defaults.baseURL="https://6571f80ad61ba6fcc0141958.mockapi.io";var L=function(){var e=(0,r.Z)(l().mark((function e(){var n,a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T.Z.get("/cars");case 3:return n=e.sent,a=n.data,e.abrupt("return",a);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error getting total cars:",e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),Z="ButtonLoadMore_buttonLoadMore__IOwLn",B=function(e){var n=e.onLoadMore;return(0,m.jsx)("button",{className:Z,type:"submit",onClick:n,children:"Load more"})},w=function(e){return e.cars.items},R=a(7127),F=a(9562),A=a(2601);var P=function(){var e=(0,o.v9)(w),n=(0,o.v9)(R.bA),a=(0,o.v9)(R.Bf),i=(0,o.v9)(R.Y7),u=(0,o.v9)(R.vw),_=(0,o.I0)(),x=(0,c.useState)(1),h=(0,s.Z)(x,2),v=h[0],C=h[1],j=(0,c.useState)(0),N=(0,s.Z)(j,2),g=N[0],I=N[1],b=(0,c.useState)(!1),y=(0,s.Z)(b,2),k=y[0],T=y[1],Z=(0,c.useState)([]),P=(0,s.Z)(Z,2),E=P[0],z=P[1],W=(0,c.useState)([]),D=(0,s.Z)(W,2),K=D[0],O=D[1],X=(0,c.useState)([]),Y=(0,s.Z)(X,2),V=Y[0],G=Y[1];return console.log(V),(0,c.useEffect)((function(){var e=function(){var e=(0,r.Z)(l().mark((function e(){var n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L();case 3:n=e.sent,_((0,F.Nv)(n)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching total cars:",e.t0);case 10:return e.prev=10,T(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();T(!0),e()}),[_]),(0,c.useEffect)((function(){g!==v&&(_((0,A.c)(v)),I(v))}),[_,v,g]),(0,c.useEffect)((function(){var r=(0,t.Z)(new Set(e.map((function(e){return e.make}))));O(r);var s=(0,t.Z)(new Set(e.map((function(e){return e.rentalPrice}))));G(s);var l=e.filter((function(e){var t=!n||e.make===n.label,r=!a||parseFloat(e.rentalPrice.slice(1))===a.value,s=(!i||e.mileage>=i)&&(!u||e.mileage<=u);return t&&r&&s}));console.log("Filtered Cars:",l),z(l)}),[e,n,a,i,u]),(0,m.jsxs)("div",{className:S.Z.catalogContainer,children:[k&&(0,m.jsx)(f,{}),(0,m.jsx)(M,{makes:K,prices:V,handleMakeChange:function(e){_((0,R.i9)(e))},handlePriceChange:function(e){_((0,R.hc)(e))},handleFilterClick:function(n,a,t,r){_((0,R.i9)(n)),_((0,R.hc)(a)),_((0,R.DF)(t)),_((0,R.T8)(r));var s=e.filter((function(e){var s=!n||e.make===n.label,i=!a||parseFloat(e.rentalPrice.slice(1))===a.value,l=(!t||e.mileage>=t)&&(!r||e.mileage<=r);return s&&i&&l}));z(s)}}),(0,m.jsx)(p.Z,{cars:0!==E.length?E:e}),0!==e.length&&(0,m.jsx)(B,{onLoadMore:function(){C((function(e){return e+1}))}}),(0,m.jsx)(c.Suspense,{fallback:(0,m.jsx)(f,{center:!0,content:"loading"}),children:(0,m.jsx)(d.j3,{})})]})}},8699:function(e,n){n.Z={catalogContainer:"CatalogPage_catalogContainer__mn9Zl"}}}]);
//# sourceMappingURL=765.ed5c9c4f.chunk.js.map