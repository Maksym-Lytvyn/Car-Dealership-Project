"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[899],{4038:function(e,n,t){t.d(n,{H:function(){return N}});var r,i=t(9439),o=t(2791),l=t(9434),a=t(6351),s=t(838),c=t(4164),d=function(e){var n={},t=e.split("\n")[0].split(" ");return n.conditionText=t.slice(0,2).join(" "),n.minAge=t[t.length-1],n},p=["title","titleId"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},u.apply(this,arguments)}function f(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function g(e,n){var t=e.title,i=e.titleId,l=f(e,p);return o.createElement("svg",u({width:24,height:24,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},l),t?o.createElement("title",{id:i},t):null,r||(r=o.createElement("path",{d:"M18 6 6 18M6 6l12 12",stroke:"#121417",strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"})))}var h,x,b=o.forwardRef(g),m=(t.p,t(168)),y=t(6088),j={position:"absolute",stroke:"transparent",fill:"#121417",top:12,right:12,width:22,height:22,cursor:"pointer"},w=y.Z.li(h||(h=(0,m.Z)(["\n    font-size: 12px;\n    color: rgba(18, 20, 23, 0.5);\n    display: flex;\n    align-items: center;\n\n    &:not(:last-child)::after {\n        content: '';\n        display: inline-block;\n        width: 1px;\n        height: 16px;\n        background-color: rgba(18, 20, 23, 0.1);\n        margin-left: 6px;\n        margin-right: 6px;\n    }\n"]))),v=t(3329),k=document.getElementById("modal-root"),F=function(e){var n=e.carId,t=e.onClose,r=(0,l.v9)(a.Wz).find((function(e){return e.id===n})),i=r.id,s=r.make,p=r.model,u=r.year,f=r.rentalPrice,g=r.address,h=r.type,x=r.accessories,m=r.mileage,y=r.img,F=r.fuelConsumption,C=r.engineSize,O=r.description,z=r.functionalities,S=r.rentalConditions,W=g.split(",")[1],R=g.split(",")[2],Z=d(S);(0,o.useEffect)((function(){var e=function(e){"Escape"===e.code&&t()};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",e),document.body.style.overflow="visible"}}),[t]);return(0,c.createPortal)((0,v.jsx)("div",{style:{position:"fixed",top:0,width:"100vw",height:"100vh",backgroundColor:"rgba(18, 20, 23, 0.5)",backdropFilter:"blur(2px)"},onClick:function(e){e.target===e.currentTarget&&t()},children:(0,v.jsxs)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",borderRadius:14,backgroundColor:"#FFFFFF",width:541,maxHeight:830,overflow:"auto",padding:34},children:[(0,v.jsx)(b,{style:j,onClick:t}),(0,v.jsx)("img",{src:y,alt:s,loading:"lazy",width:"469",height:"314",style:{width:"100%",height:314,display:"block",objectFit:"cover",borderRadius:14}}),(0,v.jsxs)("div",{style:{marginTop:14,marginBottom:24},children:[(0,v.jsx)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:14,paddingBottom:8},children:(0,v.jsxs)("h2",{style:{fontWeight:500,fontSize:18,lineHeight:1.33,color:"#121417"},children:[s," ",(0,v.jsxs)("span",{style:{color:"#3470FF"},children:[p,", "]}),u]})}),(0,v.jsxs)("ul",{style:{display:"flex",flexWrap:"wrap"},children:[(0,v.jsx)(w,{children:W}),(0,v.jsx)(w,{children:R}),(0,v.jsxs)(w,{children:["Id: ",i]}),(0,v.jsxs)(w,{children:["Year: ",u]}),(0,v.jsxs)(w,{children:["Type: ",h]})]}),(0,v.jsxs)("ul",{style:{display:"flex",flexWrap:"wrap"},children:[(0,v.jsxs)(w,{children:["Fuel Consumption: ",F]}),(0,v.jsxs)(w,{children:["Engine Size: ",C]})]}),(0,v.jsx)("p",{style:{lineHeight:1.43,marginTop:14,width:461},children:O}),(0,v.jsx)("h3",{style:{fontWeight:400,fontSize:14,lineHeight:1.43,color:"#121417",marginTop:24,marginBottom:8},children:"Accessories and functionalities:"}),(0,v.jsx)("ul",{style:{display:"flex",flexWrap:"wrap"},children:x.map((function(e){return(0,v.jsx)(w,{children:e},e)}))}),(0,v.jsx)("ul",{style:{display:"flex",flexWrap:"wrap"},children:z.map((function(e){return(0,v.jsx)(w,{children:e},e)}))}),(0,v.jsx)("h3",{style:{fontWeight:400,fontSize:14,lineHeight:1.43,color:"#121417",marginTop:24,marginBottom:8},children:"Rental Conditions:"}),(0,v.jsxs)("ul",{style:{display:"flex",flexWrap:"wrap",gap:8,fontFamily:"Montserrat, sans-serif",fontSize:12,letterSpacing:-.24,width:461},children:[(0,v.jsx)("li",{style:{borderRadius:35,color:"#363535",backgroundColor:"#F9F9F9",padding:"7px 14px"},children:(0,v.jsxs)("p",{children:[Z.conditionText,(0,v.jsxs)("span",{style:{color:"#3470FF",fontWeight:600},children:[" ",Z.minAge]})]})}),(0,v.jsx)("li",{style:{borderRadius:35,color:"#363535",backgroundColor:"#F9F9F9",padding:"7px 14px"},children:S.split("\n")[1]}),(0,v.jsx)("li",{style:{borderRadius:35,color:"#363535",backgroundColor:"#F9F9F9",padding:"7px 14px"},children:S.split("\n")[2]}),(0,v.jsxs)("li",{style:{borderRadius:35,color:"#363535",backgroundColor:"#F9F9F9",padding:"7px 14px"},children:["Mileage: ",(0,v.jsx)("span",{style:{color:"#121417",fontWeight:600},children:m.toLocaleString("en-US")})]}),(0,v.jsxs)("li",{style:{borderRadius:35,color:"#363535",backgroundColor:"#F9F9F9",padding:"7px 14px"},children:["Price: ",(0,v.jsx)("span",{style:{color:"#121417",fontWeight:600},children:f})]})]})]}),(0,v.jsx)("a",{href:"tel:+380730000000",style:{width:168,height:44,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:12,backgroundColor:"#3470FF",color:"#FFFFFF",fontSize:14,fontWeight:600,lineHeight:1.43,transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1)",cursor:"pointer"},children:"Rental car"})]})}),k)},C=["title","titleId"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},O.apply(this,arguments)}function z(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function S(e,n){var t=e.title,r=e.titleId,i=z(e,C);return o.createElement("svg",O({width:18,height:18,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,x||(x=o.createElement("path",{d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z",stroke:"#fff",strokeOpacity:.8,strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}var W,R=o.forwardRef(S),Z=(t.p,["title","titleId"]);function L(){return L=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},L.apply(this,arguments)}function I(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}function P(e,n){var t=e.title,r=e.titleId,i=I(e,Z);return o.createElement("svg",L({width:18,height:18,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,W||(W=o.createElement("path",{d:"M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z",fill:"#3470FF",stroke:"#3470FF",strokeLinecap:"round",strokeLinejoin:"round"})))}var B,E,T=o.forwardRef(P),M=(t.p,{position:"absolute",stroke:"#3470FF",fill:"transparent",top:14,right:14,cursor:"pointer"}),A=y.Z.li(B||(B=(0,m.Z)(['\n  font-size: 12px;\n  color: rgba(18, 20, 23, 0.5);\n  display: flex;\n  align-items: center;\n\n  &:not(:last-child)::after {\n    content: "";\n    display: inline-block;\n    width: 1px;\n    height: 16px;\n    background-color: rgba(18, 20, 23, 0.1);\n    margin-left: 6px;\n    margin-right: 6px;\n  }\n']))),H=y.Z.button(E||(E=(0,m.Z)(["\n    width: 100%;\n    height: 44px;\n\n    border-radius: 12px;\n    background-color: #3470FF;\n    color: #FFFFFF;\n    font-size: 14px;\n    font-weight: 600;\n    line-height: 1.43;\n    cursor: pointer;\n    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n        &:hover,\n        &:focus {\n        background-color: #0B44CD;\n"]))),D=function(e){var n=e.id,t=e.make,r=e.model,c=e.year,d=e.rentalPrice,p=e.address,u=e.rentalCompany,f=e.type,g=e.accessories,h=e.mileage,x=e.img,b=(0,l.v9)(a.Tc),m=(0,o.useState)(!1),y=(0,i.Z)(m,2),j=y[0],w=y[1],k=(0,l.I0)(),C=function(){return w((function(e){return!e}))};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("li",{style:{width:"100%",flexBasis:"calc((100% - 3 * 29px) / 4)",position:"relative",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[(0,v.jsxs)("div",{style:{paddingBottom:28},children:[b.includes(n)?(0,v.jsx)(T,{width:"18",height:"18",style:M,onClick:function(){return e=n,void k((0,s.Ni)(e));var e}}):(0,v.jsx)(R,{width:"18",height:"18",style:M,onClick:function(){return e=n,void k((0,s.a3)(e));var e}}),(0,v.jsx)("img",{src:x||"../../images/backgrounds/no-image.jpg",style:{width:"100%",height:268,display:"block",objectFit:"cover",borderRadius:14},alt:t,loading:"lazy",width:"274"}),(0,v.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:14,paddingBottom:8},children:[(0,v.jsxs)("h2",{style:{fontWeight:500,fontSize:14,color:"#121417"},children:[t," ",(0,v.jsxs)("span",{style:{color:"#3470FF"},children:[r,", "]}),c]}),(0,v.jsx)("p",{children:d})]}),(0,v.jsxs)("ul",{style:{display:"flex",flexWrap:"wrap"},children:[(0,v.jsx)(A,{children:p.split(",")[1]}),(0,v.jsx)(A,{children:p.split(",")[2]}),(0,v.jsx)(A,{children:u})]}),(0,v.jsxs)("ul",{style:{display:"flex",flexWrap:"wrap"},children:[(0,v.jsx)(A,{children:f}),(0,v.jsx)(A,{children:r}),(0,v.jsx)(A,{children:h}),(0,v.jsx)(A,{children:g[0]})]})]}),(0,v.jsx)(H,{type:"button",onClick:C,children:"\u0414\u043e\u043a\u043b\u0430\u0434\u043d\u0456\u0448\u0435"})]}),j&&(0,v.jsx)(F,{onClose:C,carId:n,children:(0,v.jsx)("img",{alt:t,src:x})})]})},N=function(e){var n=e.cars;return(0,v.jsx)("div",{style:{maxWidth:"100%",paddingLeft:15,paddingRight:15,marginLeft:"auto",marginRight:"auto"},children:(0,v.jsx)("ul",{style:{display:"flex",flexWrap:"wrap",rowGap:50,columnGap:29,paddingTop:50,paddingBottom:50},children:n.map((function(e){var n=e.id,t=e.make,r=e.model,i=e.year,o=e.rentalPrice,l=e.address,a=e.rentalCompany,s=e.type,c=e.accessories,d=e.mileage,p=e.img;return(0,v.jsx)(D,{id:n,make:t,model:r,year:i,rentalPrice:o,address:l,rentalCompany:a,type:s,accessories:c,mileage:d,img:p},n)}))})})}},324:function(e,n,t){t.d(n,{w:function(){return k}});var r,i,o=t(2791),l=t(9434),a=t(1686),s=t.n(a),c=t(2526),d=t(1429),p=t(1413),u=t(1062),f=t(3329),g={control:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{height:"48px",padding:"0",paddingLeft:"14px",backgroundColor:"rgba(247, 247, 251, 1)",borderRadius:"14px",borderColor:(n.isSelected,"transparent"),fontSize:"18px",fontWeight:"500",lineHeight:"1.1","&:hover":{borderColor:"#2684FF"}})},option:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{borderRadius:"14px",paddingBottom:"8px",backgroundColor:n.isSelected?"#3470FF":"white",color:n.isSelected?"white":"rgba(18, 20, 23, 0.2)",fontSize:"16px",fontWeight:"500",lineHeight:"1.25",cursor:"pointer"})},dropdownIndicator:function(e,n){return(0,p.Z)((0,p.Z)({},e),{},{color:"#121417",cursor:"pointer",transform:n.isFocused?"rotate(180deg)":null})},indicatorSeparator:function(e){return(0,p.Z)((0,p.Z)({},e),{},{backgroundColor:"rgba(247, 247, 251, 1)"})},placeholder:function(e){return(0,p.Z)((0,p.Z)({},e),{},{backgroundColor:"rgba(247, 247, 251, 1)",color:"#121417",fontSize:"18px",fontWeight:"500",lineHeight:"1.11"})},menu:function(e){return(0,p.Z)((0,p.Z)({},e),{},{borderRadius:"14px",padding:"14px 8px 14px 18px"})},menuList:function(e){return(0,p.Z)((0,p.Z)({},e),{},{"::-webkit-scrollbar":{width:"8px",height:"130px"},"::-webkit-scrollbar-thumb":{background:"rgba(18, 20, 23, 0.05)",borderRadius:"10px"}})}},h=function(e){var n=e.name,t=e.options,r=e.placeholder,i=e.refProp;return(0,f.jsx)(u.ZP,{required:!0,name:n,options:t,styles:g,placeholder:r,ref:i})},x=function(e){return e.map((function(e){return{value:e,label:e}}))},b=t(168),m=t(6088),y=m.Z.input(r||(r=(0,b.Z)(["\n    box-sizing: border-box;\n    width: 125px;     \n    height: 48px;\n    padding: 14px 14px 14px 70px;\n    background-color: rgba(247, 247, 251, 1);\n    outline: transparent;\n    font-size: 16px;\n    border-color: transparent;\n    border-radius: 14px 0px 0px 14px;\n    border-right: 1px solid rgba(138, 138, 137, 0.20);\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n    &:hover,\n    :focus {\n        border-color: #2684FF;\n    }\n\n    &::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        appearance: none;\n        margin: 0;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 160px;\n        padding: 14px 14px 14px 86px;\n    }\n"]))),j=m.Z.input(i||(i=(0,b.Z)(["\n    box-sizing: border-box;\n    width: 125px; \n    height: 48px;\n    padding: 14px 14px 14px 70px;\n    background-color: rgba(247, 247, 251, 1);\n    outline: transparent;\n    font-size: 16px;\n    border-color: transparent;\n    border-radius: 0px 14px 14px 0px;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    \n\n    &:hover,\n    &:focus {\n        border-color: #2684FF;\n    }\n\n    &::-webkit-inner-spin-button,\n    ::-webkit-outer-spin-button {\n        -webkit-appearance: none;\n        appearance: none;\n        margin: 0;\n    }\n\n    @media screen and (min-width: 768px) {\n        width: 160px;\n        padding: 14px 14px 14px 86px;\n    }\n"]))),w=x(["Dacia","Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land","Renault"]),v=Array.from({length:38},(function(e,n){return{value:String(10*(n+3)),label:String(10*(n+3))}})),k=function(){var e=(0,l.I0)(),n=(0,o.useRef)(null),t=(0,o.useRef)(null);return(0,f.jsx)("div",{style:{paddingLeft:15,paddingRight:15,maxWidth:1200,paddingTop:80,marginLeft:"auto",marginRight:"auto"},children:(0,f.jsxs)("form",{style:{display:"flex",gap:18,alignItems:"center",justifyContent:"center",flexWrap:"nowrap",flexDirection:"row"},onSubmit:function(r){r.preventDefault();var i=r.target,o=i.elements.brand.value.trim(),l=i.elements.mileageFrom.value,a=i.elements.mileageTo.value,p=i.elements.price.value;""!==o&&""!==p&&""!==l&&""!==a?(e((0,d.a8)({brand:o,price:p,mileageFrom:l,mileageTo:a})),e((0,c.x)()),i.reset(),n.current.clearValue(),t.current.clearValue()):s().Notify.failure("\u0411\u0443\u0434\u044c-\u043b\u0430\u0441\u043a\u0430, \u0432\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0430\u043d\u0456")},children:[(0,f.jsxs)("div",{style:{display:"flex",gap:18},children:[(0,f.jsxs)("label",{style:{display:"block",marginBottom:8,color:"#8A8A89",fontSize:14,position:"relative"},children:["\u041c\u0430\u0440\u043a\u0430 \u043c\u0430\u0448\u0438\u043d\u0438",(0,f.jsx)("div",{style:{width:250},children:(0,f.jsx)(h,{name:"brand",options:w,refProp:n,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442"})})]}),(0,f.jsxs)("label",{style:{display:"block",marginBottom:8,color:"#8A8A89",fontSize:14,position:"relative"},children:["\u0426\u0456\u043d\u0430 / \u0433\u043e\u0434\u0438\u043d\u0443",(0,f.jsx)("div",{style:{width:125},children:(0,f.jsx)(h,{name:"price",options:v,refProp:t,placeholder:"\u0414\u043e $"})})]})]}),(0,f.jsxs)("div",{style:{display:"flex",position:"relative",width:320},children:[(0,f.jsxs)("label",{style:{display:"block",marginBottom:8,color:"#8A8A89",fontSize:14,position:"relative"},children:["\u041f\u0440\u043e\u0431\u0456\u0433 / \u043a\u043c",(0,f.jsx)("p",{style:{position:"absolute",top:35,left:22,color:"#000000",fontWeight:500,lineHeight:1.11,fontSize:18},children:"\u0412\u0456\u0434"}),(0,f.jsx)(y,{required:!0,type:"number",name:"mileageFrom",min:"4000",max:"6000",title:"Enter a number from 4000 to 6000"})]}),(0,f.jsxs)("label",{style:{color:"white",fontSize:14,position:"relative",display:"block",marginBottom:8},children:["\u041f\u0440\u043e\u0431\u0456\u0433 / \u043a\u043c",(0,f.jsx)("p",{style:{position:"absolute",top:35,left:22,color:"#000000",fontWeight:500,lineHeight:1.11,fontSize:18},children:"\u0414\u043e"}),(0,f.jsx)(j,{required:!0,type:"number",name:"mileageTo",min:"4001",max:"7000",title:"Enter a number from 4001 to 7000"})]})]}),(0,f.jsx)("div",{style:{display:"flex",gap:20,alignItems:"center",justifyContent:"center",marginTop:4},children:(0,f.jsx)("button",{style:{height:48,minWidth:136,marginTop:10,borderRadius:12,backgroundColor:"#3470FF",color:"#FFFFFF",fontSize:14,fontWeight:600,cursor:"pointer"},type:"submit",children:"\u041f\u043e\u0448\u0443\u043a"})})]})})}},8263:function(e,n,t){t.d(n,{g:function(){return o}});var r=t(1236),i=t(3329),o=function(){return(0,i.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingLeft:25,paddingRight:25,paddingBottom:50,marginLeft:"auto",marginRight:"auto",maxWidth:1200},children:[(0,i.jsx)("img",{src:r,alt:"No results found",width:"400"}),(0,i.jsxs)("p",{style:{marginTop:50,marginBottom:25,color:"#121417",textAlign:"center",fontSize:16},children:["\u0412\u0438\u0431\u0430\u0447\u0442\u0435, \u0437\u0430 \u0432\u0430\u0448\u0438\u043c \u0437\u0430\u043f\u0438\u0442\u043e\u043c \u043d\u0435\u043c\u0430\u0454 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0456\u0432. ",(0,i.jsx)("br",{}),"\u0421\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0456\u043d\u0448\u0438\u0439 \u0437\u0430\u043f\u0438\u0442"]})]})}},9689:function(e,n,t){t.d(n,{$:function(){return r.$}});var r=t(5239)},6351:function(e,n,t){t.d(n,{$D:function(){return p},$U:function(){return l},AO:function(){return d},Dw:function(){return u},Tc:function(){return c},Wz:function(){return i},xU:function(){return a},zh:function(){return s}});var r=t(6916),i=function(e){return e.cars.items},o=function(e){return e.cars.allCars},l=function(e){return e.filter.isFiltred},a=function(e){return e.cars.isLoading},s=function(e){return e.cars.error},c=function(e){return e.favorites.favorites},d=(0,r.P1)([o,function(e){return e.filter.filterBrand},function(e){return e.filter.filterPrice},function(e){return e.filter.filterMileage.from},function(e){return e.filter.filterMileage.to}],(function(e,n,t,r,i){return e.filter((function(e){var o=parseInt(e.rentalPrice.replace("$","")),l=parseInt(t);return(!n||e.make.toLowerCase()===n.toLowerCase())&&(!(t&&o>l)&&!(r&&i&&(e.mileage<r||e.mileage>i)))}))})),p=(0,r.P1)([o,c],(function(e,n){return e.filter((function(e){return n.includes(e.id)}))})),u=(0,r.P1)([d,c],(function(e,n){if(e)return e.filter((function(e){return n.includes(e.id)}))}))},1236:function(e,n,t){e.exports=t.p+"static/media/No_results_found.38b8f67611ed25f02a9e.jpg"}}]);
//# sourceMappingURL=899.78b389bd.chunk.js.map