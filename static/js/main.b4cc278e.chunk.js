(this["webpackJsonponline-burger-order"]=this["webpackJsonponline-burger-order"]||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports={BreadTop:"style_BreadTop__hUv7d",Seed:"style_Seed__3i8T2",Second:"style_Second__1OygB",Third:"style_Third__1ENDv",Fourth:"style_Fourth__2yHB5",Salad:"style_Salad__2XJPo",Meat:"style_Meat__1vqzc",Cheese:"style_Cheese__HsFGa",Bacon:"style_Bacon__241tk",BreadBottom:"style_BreadBottom__2Tk5s"}},,,,,,,,,function(e,t,n){e.exports={Sidebar:"style_Sidebar__3klO2",Logo:"style_Logo__38_lz",Open:"style_Open__3I9OT",Close:"style_Close__1lgIP"}},,,function(e,t,n){e.exports={BuildControl:"style_BuildControl__2MoER",Label:"style_Label__Wa2MX",Less:"style_Less__2WJHG",More:"style_More__3ftpS"}},,,,,,function(e,t,n){e.exports={Content:"style_Content__Dp7rG"}},function(e,t,n){e.exports={Toolbar:"style_Toolbar__3nPSU",HideOnMobile:"style_HideOnMobile__3Xwkt"}},,,function(e,t,n){e.exports={MenuItem:"style_MenuItem__1rtbd",active:"style_active__18l-V"}},function(e,t,n){e.exports={BuildControls:"style_BuildControls__3_elQ",OrderButton:"style_OrderButton__lftwv",enable:"style_enable__ldwOM"}},function(e,t,n){e.exports={Button:"style_Button__1FaHY",Success:"style_Success__u7dEO",Danger:"style_Danger__1gnky"}},,,,,,,,,,,function(e,t,n){e.exports={Logo:"style_Logo__bE7VX"}},,function(e,t,n){e.exports={Menu:"style_Menu__1Rhv_"}},function(e,t,n){e.exports={Shadow:"style_Shadow__r4iig"}},function(e,t,n){e.exports={HamburgerMenu:"style_HamburgerMenu__17TTr"}},function(e,t,n){e.exports={Burger:"style_Burger__3a1aH"}},function(e,t,n){e.exports={Modal:"style_Modal__33Ljm"}},function(e,t,n){e.exports={Loader:"style_Loader__3y1Rf",load1:"style_load1__2Jq2u"}},function(e,t,n){e.exports={Orderpage:"style_Orderpage__2fx1s"}},function(e,t,n){e.exports={Order:"style_Order__1nfDe"}},function(e,t,n){e.exports={ShippingPage:"style_ShippingPage__2Mxxt"}},function(e,t,n){e.exports={ContactData:"style_ContactData__3jtl2"}},function(e,t,n){e.exports={Login:"style_Login__3GcCk"}},function(e,t,n){e.exports={Signup:"style_Signup__1sxgD"}},,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),s=n(24),a=n.n(s),o=(n(65),n(6)),c=n(7),i=n(9),d=n(8),u=n(15),l=n(5),j=n(4),b=n(29),O=n.n(b),g=n(30),p=n.n(g),h=n.p+"static/media/burger-logo.ec69c7f6.png",f=n(46),_=n.n(f),x=n(0),m=function(){return Object(x.jsx)("div",{className:_.a.Logo,children:Object(x.jsx)(u.b,{to:"/",children:Object(x.jsx)("img",{src:h})})})},S=n(48),v=n.n(S),y=n(33),R=n.n(y),I=function(e){return Object(x.jsx)("li",{className:R.a.MenuItem,children:Object(x.jsx)(u.c,{exact:e.exact,activeClassName:R.a.active,to:e.link,children:e.children})})},C=Object(j.b)((function(e){return{userId:e.signupLoginReducer.userId}}))((function(e){return Object(x.jsx)("div",{children:Object(x.jsx)("ul",{className:v.a.Menu,children:e.userId?Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)(I,{link:"/orders",children:"Orders"}),Object(x.jsx)(I,{link:"/logout",children:"Logout"})]}):Object(x.jsxs)(r.Fragment,{children:[Object(x.jsx)(I,{link:"/login",children:"Login"}),Object(x.jsx)(I,{link:"/signup",children:"SignUp"})]})})})})),w=n(20),N=n.n(w),E=n(49),k=n.n(E),T=function(e){return e.show?Object(x.jsx)("div",{onClick:e.hide,className:k.a.Shadow}):null},D=function(e){var t=[N.a.Sidebar,N.a.Close];return e.showSidebar&&(t=[N.a.Sidebar,N.a.Open]),Object(x.jsxs)("div",{children:[Object(x.jsx)(T,{show:e.showSidebar,hide:e.toggleSidebar}),Object(x.jsxs)("div",{className:t.join(" "),children:[Object(x.jsx)("div",{className:N.a.Logo,children:Object(x.jsx)(m,{})}),Object(x.jsx)(C,{})]})]})},L=n(50),A=n.n(L),M=function(e){return Object(x.jsxs)("div",{className:A.a.HamburgerMenu,onClick:e.toggleSidebar,children:[Object(x.jsx)("div",{}),Object(x.jsx)("div",{}),Object(x.jsx)("div",{})]})},P=function(e){return Object(x.jsxs)("header",{className:p.a.Toolbar,children:[Object(x.jsx)(M,{toggleSidebar:e.toggleSidebar}),Object(x.jsx)(m,{}),Object(x.jsx)("nav",{className:p.a.HideOnMobile,children:Object(x.jsx)(C,{})})]})},U=n(19),B=n.n(U),G=B.a.create({baseURL:"https://burger-8b4da-default-rtdb.firebaseio.com/"}),H=(n(90),n(51)),F=n.n(H),V=n(11),Y=n.n(V),z=function(e){return"bread-top"==e.type?Object(x.jsxs)("div",{className:Y.a.BreadTop,children:[Object(x.jsx)("div",{className:Y.a.Seed}),Object(x.jsx)("div",{className:"".concat(Y.a.Seed," ").concat(Y.a.Second)}),Object(x.jsx)("div",{className:"".concat(Y.a.Seed," ").concat(Y.a.Third)}),Object(x.jsx)("div",{className:"".concat(Y.a.Seed," ").concat(Y.a.Fourth)})]}):"salad"==e.type?Object(x.jsx)("div",{className:Y.a.Salad}):"bacon"==e.type?Object(x.jsx)("div",{className:Y.a.Bacon}):"cheese"==e.type?Object(x.jsx)("div",{className:Y.a.Cheese}):"meat"==e.type?Object(x.jsx)("div",{className:Y.a.Meat}):"bread-bottom"==e.type?Object(x.jsx)("div",{className:Y.a.BreadBottom}):Object(x.jsx)("div",{children:"..."})},J=Object(j.b)((function(e){return{ingredients:e.burgerReducer.ingredients}}))((function(e){var t=Object.entries(e.ingredients),n=[];return t.map((function(e,t){for(var r=0;r<e[1];r++)n.push(Object(x.jsx)(z,{type:e[0]},"".concat(t).concat(r)))})),0==n.length&&(n=Object(x.jsx)("p",{children:"Select burger ingredients..."})),Object(x.jsxs)("div",{className:F.a.Burger,children:[Object(x.jsx)(z,{type:"bread-top"}),n,Object(x.jsx)(z,{type:"bread-bottom"})]})})),X=n(2),q=n(34),$=n.n(q),W=n(23),Q=n.n(W),K=function(e){return Object(x.jsxs)("div",{className:Q.a.BuildControl,children:[Object(x.jsxs)("div",{className:Q.a.Label,children:[e.text," :"]}),Object(x.jsx)("button",{onClick:function(){return e.addIngredient(e.type)},className:Q.a.More,children:"add"}),Object(x.jsx)("button",{className:Q.a.Less,onClick:function(){return e.removeIngredient(e.type)},disabled:e.disabled[e.type],children:"remove"})]})},Z=Object(j.b)((function(e){return{burgerIngredients:e.burgerReducer.ingredients,totalPrice:e.burgerReducer.totalPrice,purchasing:e.burgerReducer.purchasing,ingredientNames:e.burgerReducer.ingredientNames}}),(function(e){return{addIngredient:function(t){return e(function(e){return{type:"ADD_INGREDIENT",ingredient:e}}(t))},removeIngredient:function(t){return e(function(e){return{type:"REMOVE_INGREDIENT",ingredient:e}}(t))}}}))((function(e){var t=Object(X.a)({},e.burgerIngredients);for(var n in t)t[n]=t[n]<=0;return Object(x.jsxs)("div",{className:$.a.BuildControls,children:[Object(x.jsxs)("p",{children:["Burger price : ",Object(x.jsxs)("strong",{children:["$",e.totalPrice]})]}),Object.keys(e.ingredientNames).map((function(n,r){return Object(x.jsx)(K,{type:n,text:e.ingredientNames[n],disabled:t,addIngredient:e.addIngredient,removeIngredient:e.removeIngredient},r)})),Object(x.jsx)("button",{onClick:e.showConfirmModal,disabled:!e.purchasing,className:$.a.OrderButton,children:"Order"})]})})),ee=n(52),te=n.n(ee),ne=function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)(T,{show:e.show,hide:e.hide}),Object(x.jsx)("div",{style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"},className:te.a.Modal,children:e.children})]})},re=(n(91),n(35)),se=n.n(re),ae=function(e){return Object(x.jsx)("button",{onClick:e.onClicked,className:"".concat(se.a.Button," ").concat(se.a[e.btnType]),children:e.text})},oe=Object(j.b)((function(e){return{ingredients:e.burgerReducer.ingredients,totalPrice:e.burgerReducer.totalPrice,ingredientNames:e.burgerReducer.ingredientNames}}))((function(e){return Object(x.jsxs)("div",{children:[Object(x.jsx)("h3",{children:"Your orders"}),Object(x.jsx)("p",{children:"ingredients : "}),Object(x.jsx)("ul",{children:Object.keys(e.ingredients).map((function(t,n){return Object(x.jsxs)("li",{children:[e.ingredientNames[t],":",e.ingredients[t]]},n)}))}),Object(x.jsx)("p",{children:Object(x.jsxs)("strong",{children:["Price : $",e.totalPrice]})}),Object(x.jsx)(ae,{onClicked:e.onConfirm,btnType:"Success",text:"CONFIRM"}),Object(x.jsx)(ae,{onClicked:e.onCancel,btnType:"Danger",text:"CANCEL"})]})})),ce=n(53),ie=n.n(ce),de=function(){return Object(x.jsx)("div",{className:ie.a.Loader})},ue=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={confirmOrder:!1,loading:!1},e.showConfirmModal=function(){e.setState({confirmOrder:!0})},e.hideConfirmModal=function(){e.setState({confirmOrder:!1})},e.continueOrder=function(){e.props.history.push({pathname:"/ship"}),e.hideConfirmModal()},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(ne,{show:this.state.confirmOrder,hide:this.hideConfirmModal,children:this.state.loading?Object(x.jsx)(de,{}):Object(x.jsx)(oe,{onCancel:this.hideConfirmModal,onConfirm:this.continueOrder})}),Object(x.jsx)(J,{}),Object(x.jsx)(Z,{showConfirmModal:this.showConfirmModal})]})}}]),n}(r.Component),le=n(54),je=n.n(le),be=n(55),Oe=n.n(be),ge=function(e){return Object(x.jsxs)("div",{className:Oe.a.Order,children:[Object(x.jsxs)("p",{children:["Name :"," ",Object(x.jsx)("strong",{children:e.Order.address?e.Order.address.name:null})]}),Object(x.jsxs)("p",{children:["Ingredients : Bacon : ",e.Order.ingredients.bacon,", Meat :",e.Order.ingredients.meat,", Cheese :",e.Order.ingredients.cheese,", Salad : ",e.Order.ingredients.salad]}),Object(x.jsxs)("p",{children:["Address :",e.Order.address?e.Order.address.address:null]}),Object(x.jsxs)("p",{children:["Price : ",Object(x.jsxs)("strong",{children:["$",e.Order.price]})]})]})},pe=function(e){return{type:"LOAD_ORDERS_SUCCESS",orders:e}},he=function(e){return{type:"LOAD_ORDERS_ERROR",error:e}},fe=function(){return{type:"LOAD_ORDERS_START"}},_e=function(){return{type:"SAVE_ORDER_START"}},xe=function(){return{type:"SAVE_ORDER_SUCCESS"}},me=function(e){return{type:"SAVE_ORDER_ERROR",error:e}},Se=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){e.props.loadOrders()},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:je.a.Orderpage,children:[Object(x.jsx)("h1",{children:"Your orders"}),this.props.loading?Object(x.jsx)(de,{}):this.props.orders.map((function(e){return Object(x.jsx)(ge,{Order:e[1]},e[0])}))]})}}]),n}(r.Component),ve=Object(j.b)((function(e){return{orders:e.orderReducer.orders,loading:e.orderReducer.loading}}),(function(e){return{loadOrders:function(){return e((function(e,t){e(fe());var n=t().signupLoginReducer.token,r=t().signupLoginReducer.userId;G.get("/orders.json?auth=".concat(n,'&orderBy="userId"&equalTo="').concat(r,'"')).then((function(t){var n=Object.entries(t.data).reverse();console.log(n),e(pe(n))})).catch((function(t){e(he(t))}))}))}}}))(Se),ye=n(56),Re=n.n(ye),Ie=n(57),Ce=n.n(Ie),we=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={name:null,address:null},e.changeName=function(t){e.setState({name:t.target.value})},e.changeAddress=function(t){e.setState({address:t.target.value})},e.saveOrder=function(){var t={userId:e.props.userId,auth:e.props.token,ingredients:e.props.ingredients,price:e.props.price,address:{name:e.state.name,address:e.state.address}};e.props.saveOrder(t)},e}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){this.props.newOrderStatus.finished&&!this.props.newOrderStatus.error&&this.props.history.replace("/orders")}},{key:"render",value:function(){return Object(x.jsxs)("div",{className:Ce.a.ContactData,children:[Object(x.jsx)("div",{children:this.props.newOrderStatus.error&&"Error : ".concat(this.props.newOrderStatus.error)}),this.props.newOrderStatus.saving?Object(x.jsx)(de,{}):Object(x.jsxs)("div",{children:[Object(x.jsx)("input",{onChange:this.changeName,type:"text",name:"name",placeholder:"Name"}),Object(x.jsx)("input",{onChange:this.changeAddress,type:"text",name:"address",placeholder:"Address"}),Object(x.jsx)(ae,{onClicked:this.saveOrder,btnType:"Success",text:"ORDER"})]})]})}}]),n}(r.Component),Ne=Object(j.b)((function(e){return{ingredients:e.burgerReducer.ingredients,price:e.burgerReducer.totalPrice,newOrderStatus:e.orderReducer.newOrder,userId:e.signupLoginReducer.userId,token:e.signupLoginReducer.token}}),(function(e){return{saveOrder:function(t){return e(function(e){return function(t,n){t(_e());var r=n().signupLoginReducer.token;G.post("/orders.json?auth=".concat(r,"&"),e).then((function(e){t(xe())})).catch((function(e){t(me(e))}))}}(t))}}}))(Object(l.g)(we)),Ee=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).goBack=function(){e.props.history.goBack()},e.showContactData=function(){e.props.history.replace("/ship/contact")},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:Re.a.ShippingPage,children:[Object(x.jsx)("p",{style:{fontSize:"20px"},children:Object(x.jsxs)("strong",{children:["Your orders : $",this.props.price]})}),Object(x.jsx)(J,{ingredients:this.props.burgerIngredients}),Object(x.jsx)(ae,{onClicked:this.goBack,btnType:"Danger",text:"CANCEL ORDER"}),Object(x.jsx)(ae,{onClicked:this.showContactData,btnType:"Success",text:"CONTACT"}),Object(x.jsx)(l.b,{path:"/ship/contact",children:Object(x.jsx)(Ne,{})})]})}}]),n}(r.Component),ke=Object(j.b)((function(e){return{burgerIngredients:e.burgerReducer.ingredients,price:e.burgerReducer.totalPrice}}))(Ee),Te=n(58),De=n.n(Te),Le=function(){return{type:"SIGNUP_USER_START"}},Ae=function(e,t){return{type:"SIGNUP_USER_SUCCESS",token:e,userId:t}},Me=function(e){return{type:"SIGNUP_USER_ERROR",error:e}},Pe=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),localStorage.removeItem("expireDate"),localStorage.removeItem("refreshToken"),{type:"LOGOUT"}},Ue=function(e){return function(t){setTimeout((function(){t(Pe())}),e)}},Be=function(){return{type:"SIGNIN_USER_START"}},Ge=function(e,t){return{type:"SIGNIN_USER_SUCCESS",token:e,userId:t}},He=function(e){return{type:"SIGNIN_USER_ERROR",error:e}},Fe=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password:""},e.login=function(){e.props.signinUser(e.state.email,e.state.password)},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword=function(t){e.setState({password:t.target.value})},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:De.a.Login,children:[this.props.userId&&Object(x.jsx)(l.a,{to:"/orders"}),Object(x.jsx)("input",{onChange:this.changeEmail,type:"text",placeholder:"email address"}),Object(x.jsx)("input",{onChange:this.changePassword,type:"password",placeholder:"password"}),this.props.error&&Object(x.jsxs)("div",{style:{color:"red"},children:[" ",this.props.error]}),this.props.saving&&Object(x.jsx)(de,{}),Object(x.jsx)(ae,{text:"login",btnType:"Success",onClicked:this.login})]})}}]),n}(r.Component),Ve=Object(j.b)((function(e){return{saving:e.signupLoginReducer.loginIn,error:e.signupLoginReducer.error,userId:e.signupLoginReducer.userId}}),(function(e){return{signinUser:function(t,n){return e(function(e,t){return function(n){n(Be());var r={email:e,password:t,returnSecureToken:!0};B.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAvDvyOhveeYHwPFks4q0kb7aw0JHlVz7w",r).then((function(e){var t=e.data.idToken,r=e.data.localId,s=e.data.expiresIn,a=new Date((new Date).getTime()+1e3*s),o=e.data.refreshToken;localStorage.setItem("token",t),localStorage.setItem("userId",r),localStorage.setItem("expireDate",a),localStorage.setItem("refreshToken",o),n(Ge(t,r)),n(Ue(1e3*s))})).catch((function(e){n(He(e))}))}}(t,n))}}}))(Fe),Ye=n(59),ze=n.n(Ye),Je=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={email:"",password1:"",password2:""},e.Signup=function(){e.state.password1===e.state.password2?e.props.signupUser(e.state.email,e.state.password1):alert("Password does not match")},e.changeEmail=function(t){e.setState({email:t.target.value})},e.changePassword1=function(t){e.setState({password1:t.target.value})},e.changePassword2=function(t){e.setState({password2:t.target.value})},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{className:ze.a.Signup,children:[Object(x.jsx)("h1",{children:"SignUp"}),this.props.userId&&Object(x.jsx)(l.a,{to:"/"}),Object(x.jsx)("input",{onChange:this.changeEmail,type:"text",placeholder:"email address"}),Object(x.jsx)("input",{onChange:this.changePassword1,type:"password",placeholder:"Password"}),Object(x.jsx)("input",{onChange:this.changePassword2,type:"password",placeholder:"Confirm password"}),this.props.error&&Object(x.jsxs)("div",{style:{color:"red"},children:[" ",this.props.error]}),this.props.saving&&Object(x.jsx)(de,{}),Object(x.jsx)(ae,{text:"Signup",btnType:"Danger",onClicked:this.Signup})]})}}]),n}(r.Component),Xe=Object(j.b)((function(e){return{saving:e.signupLoginReducer.loading,error:e.signupLoginReducer.error,userId:e.signupLoginReducer.userId}}),(function(e){return{signupUser:function(t,n){return e(function(e,t){return function(n){n(Le());var r={email:e,password:t,returnSecureToken:!0};B.a.post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAvDvyOhveeYHwPFks4q0kb7aw0JHlVz7w",r).then((function(e){var t=e.data.idToken,r=e.data.localId;localStorage.setItem("token",t),localStorage.setItem("userId",r),n(Ae(t,r))})).catch((function(e){n(Me(e.response.data.error.message))}))}}(t,n))}}}))(Je),qe=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).componentDidMount=function(){e.props.logout()},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(l.a,{to:"/"}),";"]})}}]),n}(r.Component),$e=Object(j.b)(null,(function(e){return{logout:function(){return e(Pe())}}}))(qe),We=function(e){Object(i.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return(e=t.call.apply(t,[this].concat(s))).state={showSidebar:!1},e.componentDidMount=function(){var t=localStorage.getItem("token"),n=localStorage.getItem("userId"),r=new Date(localStorage.getItem("expireDate"));localStorage.getItem("refreshToken");t&&(r>new Date?(e.props.autologin(t,n),e.props.augoLogout(r.getTime()-(new Date).getTime())):e.props.logout())},e.toggleSidebar=function(){e.setState((function(e){return{showSidebar:!e.showSidebar}}))},e}return Object(c.a)(n,[{key:"render",value:function(){return Object(x.jsx)(u.a,{children:Object(x.jsxs)("div",{className:O.a.App,children:[Object(x.jsx)(P,{toggleSidebar:this.toggleSidebar}),Object(x.jsx)(D,{showSidebar:this.state.showSidebar,toggleSidebar:this.toggleSidebar}),Object(x.jsx)("main",{className:O.a.Content,children:this.props.userId?Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/logout",component:$e}),Object(x.jsx)(l.b,{path:"/orders",component:ve}),Object(x.jsx)(l.b,{path:"/ship",component:ke}),Object(x.jsx)(l.b,{path:"/",component:ue})]}):Object(x.jsxs)(l.d,{children:[Object(x.jsx)(l.b,{path:"/login",component:Ve}),Object(x.jsx)(l.b,{path:"/signup",component:Xe}),Object(x.jsx)(l.a,{to:"/login"})]})})]})})}}]),n}(r.Component),Qe=Object(j.b)((function(e){return{userId:e.signupLoginReducer.userId}}),(function(e){return{autologin:function(t,n){return e(Ge(t,n))},logout:function(){return e(Pe())},augoLogout:function(){return e(Ue())}}}))(We),Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,93)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),a(e),o(e)}))},Ze=n(17),et=n(60),tt=n(22),nt={salad:1,cheese:1.5,meat:3,bacon:1},rt={ingredients:{salad:0,cheese:0,meat:0,bacon:0},totalPrice:6,purchasing:!1,ingredientNames:{bacon:"Bacon",cheese:"Cheese",meat:"Meat",salad:"Salad"}},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;if("ADD_INGREDIENT"===t.type)return Object(X.a)(Object(X.a)({},e),{},{ingredients:Object(X.a)(Object(X.a)({},e.ingredients),{},Object(tt.a)({},t.ingredient,e.ingredients[t.ingredient]+1)),totalPrice:e.totalPrice+nt[t.ingredient],purchasing:!0});if("REMOVE_INGREDIENT"===t.type){var n=e.totalPrice-nt[t.ingredient];return Object(X.a)(Object(X.a)({},e),{},{ingredients:Object(X.a)(Object(X.a)({},e.ingredients),{},Object(tt.a)({},t.ingredient,e.ingredients[t.ingredient]-1)),totalPrice:n,purchasing:n>6})}return e},at={orders:[],loading:!1,error:null,newOrder:{saving:!1,error:null,finished:null}},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ORDERS_START":return Object(X.a)(Object(X.a)({},e),{},{loading:!0});case"LOAD_ORDERS_SUCCESS":return Object(X.a)(Object(X.a)({},e),{},{loading:!1,orders:t.orders});case"LOAD_ORDERS_ERROR":return Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:t.error});case"SAVE_ORDER_START":return Object(X.a)(Object(X.a)({},e),{},{newOrder:Object(X.a)(Object(X.a)({},e.newOrder),{},{saving:!0})});case"SAVE_ORDER_SUCCESS":return Object(X.a)(Object(X.a)({},e),{},{newOrder:Object(X.a)(Object(X.a)({},e.newOrder),{},{saving:!1,finished:!0,error:null})});case"SAVE_ORDER_ERROR":return Object(X.a)(Object(X.a)({},e),{},{newOrder:Object(X.a)(Object(X.a)({},e.newOrder),{},{saving:!1,finished:!0,error:t.error})});default:return e}},ct={token:"",userId:"",error:"",loading:!1,loginIn:!1},it=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ct,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGNUP_USER_START":return Object(X.a)(Object(X.a)({},e),{},{loading:!0});case"SIGNUP_USER_SUCCESS":return Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:null,token:t.token,userId:t.userId});case"SIGNUP_USER_ERROR":return Object(X.a)(Object(X.a)({},e),{},{loading:!1,error:t.error.response.data.error.message});case"SIGNIN_USER_START":return Object(X.a)(Object(X.a)({},e),{},{loginIn:!0});case"SIGNIN_USER_SUCCESS":return Object(X.a)(Object(X.a)({},e),{},{loginIn:!1,error:null,token:t.token,userId:t.userId});case"SIGNIN_USER_ERROR":return Object(X.a)(Object(X.a)({},e),{},{loginIn:!1,error:t.error.response.data.error.message});case"LOGOUT":return Object(X.a)(Object(X.a)({},e),{},{token:null,userId:null,error:null});default:return e}},dt=Object(Ze.c)({burgerReducer:st,orderReducer:ot,signupLoginReducer:it}),ut=[function(e){return function(e){return function(t){return e(t)}}},et.a],lt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ze.d,jt=Object(Ze.e)(dt,lt(Ze.a.apply(void 0,ut)));a.a.render(Object(x.jsx)(j.a,{store:jt,children:Object(x.jsx)(Qe,{})}),document.getElementById("root")),Ke()}],[[92,1,2]]]);
//# sourceMappingURL=main.b4cc278e.chunk.js.map