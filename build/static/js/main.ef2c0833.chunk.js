(this["webpackJsonpterex-store"]=this["webpackJsonpterex-store"]||[]).push([[0],[,,,,,,function(e,t,r){e.exports={cartItem:"CartItem_cartItem__3C0W8",data:"CartItem_data__2imVT",action:"CartItem_action__1frVU",title:"CartItem_title__17FVl"}},,,function(e,t,r){e.exports={headerMain:"Header_headerMain__3HiXY",nav:"Header_nav__3yRlw",logo:"Header_logo__3_SJs"}},function(e,t,r){e.exports={searchMain:"SearchBar_searchMain__3kQRl",searchInput:"SearchBar_searchInput__9M243",searchIcon:"SearchBar_searchIcon__RP80o"}},function(e,t,r){e.exports={productCard:"ProductCard_productCard__1XyLE",addToCart:"ProductCard_addToCart__28pGK"}},,,,,function(e,t,r){e.exports={productList:"Products_productList__OkurP"}},function(e,t,r){e.exports={sideBarCard:"SideBar_sideBarCard__1UE7M"}},function(e,t,r){e.exports={section:"ProductSection_section__3f1ri"}},,,,,,,,,function(e,t,r){},,function(e,t,r){"use strict";r.r(t);var c=r(15),n=r.n(c),a=(r(27),r(3)),s=r(1),i=r(4),o=r(8),d=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var t,r;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json");case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),u=d,j=r(12),l=r(13),b=r(0),h=Object(s.createContext)(),O={items:[],totalAmount:0},x=function(e){var t=e.children,r=Object(s.useState)(O),c=Object(a.a)(r,2),n=c[0],i=c[1],o=Object(s.useState)({}),d=Object(a.a)(o,2),x=d[0],m=d[1],p=Object(s.useState)(!1),f=Object(a.a)(p,2),v=f[0],_=f[1],C=Object(s.useState)([]),g=Object(a.a)(C,2),y=g[0],I=g[1];return Object(b.jsx)(h.Provider,{value:{cartItems:n,addToCart:function(e){var t=e.id,r=e.name,c=e.price,a=e.imageURL,s=n.totalAmount+c,o=n.items.findIndex((function(e){return e.id===t})),d=n.items[o];u().then((function(e){return I(e)}));var b,h=y.filter((function(e){return e.id===t})),O=h[0]&&h[0].quantity;if(d){if(d.quantity===O)throw m({error:!0,id:d.id}),new Error("Out of stock");var x=Object(l.a)(Object(l.a)({},d),{},{quantity:d.quantity+1});(b=Object(j.a)(n.items))[o]=x,i({items:b,totalAmount:s})}else{var p={id:t,name:r,price:c,quantity:1,imageURL:a};i({items:[].concat(Object(j.a)(n.items),[p]),totalAmount:s})}},removeFromCart:function(e){var t=e.price,r=e.id,c=e.quantity,a=n.totalAmount-t*c,s=n.items.filter((function(e){return e.id!==r}));i({items:s,totalAmount:a})},error:x,showCart:v,setShowCart:_},children:t})},m=h,p=r(6),f=r.n(p),v=function(e){var t=e.item,r=t.name,c=t.price,n=t.imageURL,a=t.quantity,i=t.id,o=Object(s.useContext)(m),d=o.addToCart,u=o.error,j=o.removeFromCart;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:f.a.cartItem,children:[Object(b.jsxs)("div",{className:f.a.data,children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{src:n,style:{width:"100%"},alt:r})}),Object(b.jsxs)("div",{className:f.a.title,children:[Object(b.jsx)("h4",{children:r}),Object(b.jsx)("p",{children:c})]})]}),Object(b.jsxs)("div",{className:f.a.action,children:[Object(b.jsx)("p",{children:a}),Object(b.jsx)("button",{onClick:function(){try{d(t)}catch(u){console.log(u)}},children:"qty+"}),Object(b.jsx)("button",{onClick:function(){return j(t)},children:"delete"})]})]}),u.id===i&&u.error&&Object(b.jsx)("p",{style:{color:"red",textAlign:"center"},children:"Out of Stock"})]})},_=function(){var e=Object(s.useContext)(m).cartItems;return Object(b.jsxs)("div",{children:[e.items.map((function(e){return Object(b.jsx)(v,{item:e},e.id)})),Object(b.jsxs)("h3",{style:{textAlign:"center"},children:["Total Amount: ",e.totalAmount]})]})},C=r(9),g=r.n(C),y=r.p+"static/media/cart.4ff4e469.png",I=function(){var e=Object(s.useContext)(m),t=e.cartItems,r=e.setShowCart;return Object(b.jsxs)("div",{className:g.a.headerMain,children:[Object(b.jsx)("div",{children:Object(b.jsx)("h3",{children:"Terex Store"})}),Object(b.jsxs)("div",{className:g.a.nav,children:[Object(b.jsx)("div",{onClick:function(){return r(!1)},children:Object(b.jsx)("h3",{children:"Products"})}),Object(b.jsxs)("div",{style:{display:"flex"},onClick:function(){return r(!0)},children:[Object(b.jsx)("img",{src:y,alt:"cart",className:g.a.logo}),Object(b.jsx)("span",{style:{marginTop:-10},children:t.items.length})]})]})]})},w=r(11),k=r.n(w),S=function(e){var t=e.product,r=Object(s.useContext)(m),c=r.addToCart,n=r.error;return Object(b.jsxs)("div",{className:k.a.productCard,children:[Object(b.jsx)("img",{src:t.imageURL,alt:t.name}),Object(b.jsx)("h3",{children:t.name}),Object(b.jsxs)("p",{children:["Type: ",t.type]}),Object(b.jsxs)("p",{children:["Gender: ",t.gender]}),Object(b.jsxs)("p",{children:["Color: ",t.color]}),Object(b.jsxs)("p",{children:["Price: INR ",t.price]}),n.id===t.id&&n.error&&Object(b.jsx)("p",{style:{color:"red"},children:"Out of Stock"}),Object(b.jsx)("button",{disabled:n.id===t.id&&n.error,className:k.a.addToCart,onClick:function(){try{c(t)}catch(n){console.log(n)}},children:"Add to cart"})]})},N=r(16),L=r.n(N),T=function(e){var t=e.products;return Object(b.jsx)("div",{className:L.a.productList,children:t.map((function(e){return Object(b.jsx)(S,{product:e},e.id)}))})},A=r(17),P=r.n(A),R=["Red","Blue","Green"],B=["Men","Women"],M=["0-250","251-450","451"],q=["Polo","Hoodie","Basic"],F=function(e,t){var r=function(e){console.log(e.target.value)},c=e.map((function(e,c){return Object(b.jsxs)("li",{children:[Object(b.jsx)("input",{onInput:r,type:"checkbox",id:e,name:e,value:e},t),Object(b.jsx)("label",{htmlFor:e,children:e}),Object(b.jsx)("br",{})]},c)}));return Object(b.jsxs)("div",{children:[Object(b.jsx)("h4",{children:t}),c]})},E=function(){return Object(b.jsxs)("div",{className:P.a.sideBarCard,children:[F(R,"Color"),F(B,"Gender"),F(M,"Price"),F(q,"Type")]})},U=r(18),H=r.n(U),G=function(e){var t=e.products;return Object(b.jsxs)("div",{className:H.a.section,children:[Object(b.jsx)(E,{}),Object(b.jsx)(T,{products:t})]})},J=r(10),V=r.n(J),W=r.p+"static/media/search.06aaae4d.png",X=function(e){var t=e.onFilter,r=Object(s.useRef)(""),c=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var c,n,a,s,o;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r.current.value,n=c.split(" "),a={},n.forEach((function(e){a[e.toLowerCase()]=1})),e.next=6,u();case 6:s=e.sent,o=s.filter((function(e){return a[e.type.toLowerCase()]||a[e.color.toLowerCase()]||a[e.gender.toLowerCase()]||a[e.price]})),t(o);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:V.a.searchMain,children:[Object(b.jsx)("div",{children:Object(b.jsx)("input",{ref:r,className:V.a.searchInput,placeholder:"Search for products.."})}),Object(b.jsx)("div",{onClick:c,children:Object(b.jsx)("img",{src:W,alt:"search-icon",className:V.a.searchIcon})})]})};var z=function(){var e=Object(s.useState)([]),t=Object(a.a)(e,2),r=t[0],c=t[1],n=Object(s.useContext)(m).showCart;return Object(s.useEffect)((function(){u().then((function(e){return c(e)}))}),[]),Object(b.jsxs)("div",{children:[Object(b.jsx)(I,{}),!n&&Object(b.jsx)(X,{onFilter:function(e){c(e)}}),!n&&Object(b.jsx)(G,{products:r}),n&&Object(b.jsx)(_,{})]})};n.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(x,{children:Object(b.jsx)(z,{})}))}],[[29,1,2]]]);
//# sourceMappingURL=main.ef2c0833.chunk.js.map