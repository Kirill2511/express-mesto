(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),s=n.n(c),i=n(6),o=n.n(i),r=(n(15),n(9)),l=n(2),u=n.p+"static/media/logo.c2821b38.svg";var p=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \xabMesto Russia\xbb",className:"header__logo",src:u})})},d=n.p+"static/media/avatar.bbe7c5b6.jpg",b=s.a.createContext();var j=function(e){var t=s.a.useContext(b),n=e.card.owner._id===t._id,c="element__delete ".concat(n?"":"element__delete_invisible"),i=e.card.likes.some((function(e){return e._id===t._id})),o="element__heart ".concat(i?"element__heart_active":"");return Object(a.jsxs)("li",{className:"element",children:[Object(a.jsx)("button",{"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",className:c,name:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",type:"submit",onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsx)("img",{src:e.card.link,alt:e.card.name,className:"element__image",onClick:function(){e.onCardClick(e.card)}}),Object(a.jsxs)("div",{className:"element__container",children:[Object(a.jsx)("h2",{className:"element__title",children:e.card.name}),Object(a.jsxs)("div",{className:"element__container_like",children:[Object(a.jsx)("button",{"aria-label":"\u041b\u0430\u0439\u043a",className:o,name:"\u041b\u0430\u0439\u043a",type:"submit",onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("p",{className:"card__count-likes",children:e.card.likes.length})]})]})]})};var m=function(e){var t=s.a.useContext(b);return Object(a.jsxs)("main",{className:"content",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsx)("button",{className:"button profile__edit-avatar",type:"button",onClick:e.onEditAvatar,children:Object(a.jsx)("img",{alt:"\u0436\u0430\u043a-\u0438\u0432",className:"profile__avatar",srcSet:t.avatar,src:d})}),Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsxs)("div",{className:"profile__wrapper",children:[Object(a.jsx)("h1",{className:"profile__title",children:t.name}),Object(a.jsx)("button",{"aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",className:"profile__edit-button",type:"button",onClick:e.onEditProfile})]}),Object(a.jsx)("p",{className:"profile__subtitle",children:t.about})]}),Object(a.jsx)("button",{"aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:"profile__add-button",type:"button",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"elements",children:Object(a.jsx)("ul",{className:"elements__container",children:e.cards.map((function(t){return Object(a.jsx)(j,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var h=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var f=function(e){var t=e.card,n=e.onClose;return Object(a.jsx)("div",{className:"popup popup_card-image ".concat(t&&"popup_opened"),children:Object(a.jsxs)("div",{className:"popup__gallery",children:[Object(a.jsx)("img",{src:t&&t.link,alt:t&&t.name,className:"popup__image"}),Object(a.jsx)("h2",{className:"popup__card-about",children:t&&t.name}),Object(a.jsx)("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-icon",type:"button",onClick:n})]})})},_=n(7),O=n(8),v=new(function(){function e(t){Object(_.a)(this,e),this.url=t.url,this.headers=t.headers}return Object(O.a)(e,[{key:"_getResponseData",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status)))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this.url,"/cards"),{headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:this.headers}).then((function(t){return e._getResponseData(t)}))}},{key:"postNewCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserInfo",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return t._getResponseData(e)}))}},{key:"setUserAvatar",value:function(e){var t=this;return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then((function(e){return t._getResponseData(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"likeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}},{key:"dislikeCard",value:function(e){var t=this;return fetch("".concat(this.url,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then((function(e){return t._getResponseData(e)}))}}]),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-16",headers:{authorization:"4a48037a-5d1b-4b03-8646-b4d3a5383564","Content-Type":"application/json"}});var x=function(e){return Object(a.jsx)("div",{className:"popup popup__".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("button",{"aria-label":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-icon popup__close",type:"button",onClick:e.onClose}),Object(a.jsx)("h2",{className:"popup__title",children:e.title}),Object(a.jsx)("form",{className:"popup__fields popup__form-avatar",name:"".concat(e.name),onSubmit:e.onSubmit,action:"#",noValidate:!0,children:e.children})]})})};var C=function(e){return Object(a.jsx)("button",{type:"submit",className:"popup__button",children:e.onClick?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":e.button})};var g=function(e){var t=s.a.useRef("");return Object(a.jsxs)(x,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{className:"popup__item popup__input_avatar-link",ref:t,id:"link-avatar",name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,type:"url"}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-avatar-error"})]}),Object(a.jsx)(C,{button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.isLoading})]})};var N=function(e){var t=s.a.useState(""),n=Object(l.a)(t,2),c=n[0],i=n[1],o=s.a.useState(""),r=Object(l.a)(o,2),u=r[0],p=r[1],d=s.a.useContext(b);return s.a.useEffect((function(){i(d.name),p(d.about)}),[d]),Object(a.jsxs)(x,{name:"edit",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{value:c||"",onChange:function(e){i(e.target.value)},className:"popup__item popup__name",id:"name-input",maxLength:"40",minLength:"2",name:"name",placeholder:"\u0418\u043c\u044f",required:!0,type:"text"}),Object(a.jsx)("span",{className:"popup__input-error",id:"name-input-error"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{value:u||"",onChange:function(e){p(e.target.value)},className:"popup__item popup__about",id:"activity-input",maxLength:"200",minLength:"2",name:"about",placeholder:"\u041e\u0431\u043e \u043c\u043d\u0435",required:!0,type:"text"}),Object(a.jsx)("span",{className:"popup__input-error",id:"activity-input-error"}),";"]}),Object(a.jsx)(C,{button:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onClick:e.isLoading})]})};var k=function(e){return Object(a.jsx)(x,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.onDelete()},children:Object(a.jsx)("button",{"aria-label":"\u0414\u0430",className:"popup__button popup__button_card-delete",name:"submit",type:"submit",children:e.isLoading?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...":"\u0414\u0430"})})};var y=function(e){var t=s.a.useState(""),n=Object(l.a)(t,2),c=n[0],i=n[1],o=s.a.useState(""),r=Object(l.a)(o,2),u=r[0],p=r[1];return Object(a.jsxs)(x,{name:"add",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.isClose,onSubmit:function(t){t.preventDefault(),e.postNewCard({name:c,link:u})},children:[Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{value:c||"",onChange:function(e){i(e.target.value)},id:"title-input",className:"popup__item popup__input-name",type:"text",name:"title",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"1",maxLength:"30",autoComplete:"off"}),Object(a.jsx)("span",{className:"popup__input-error",id:"place-input-error"})]}),Object(a.jsxs)("label",{className:"popup__label",children:[Object(a.jsx)("input",{value:u||"",onChange:function(e){p(e.target.value)},className:"popup__item popup__input-url",id:"link-input",type:"url",name:"url",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),Object(a.jsx)("span",{className:"popup__input-error",id:"link-input-error"})]}),Object(a.jsx)(C,{button:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClick:e.isLoading})]})};var L=function(){var e=s.a.useState(!1),t=Object(l.a)(e,2),n=t[0],c=t[1],i=s.a.useState(!1),o=Object(l.a)(i,2),u=o[0],d=o[1],j=s.a.useState(!1),_=Object(l.a)(j,2),O=_[0],x=_[1],C=s.a.useState(!1),L=Object(l.a)(C,2),S=L[0],D=L[1],E=s.a.useState(null),P=Object(l.a)(E,2),U=P[0],w=P[1],R=s.a.useState(!1),A=Object(l.a)(R,2),T=A[0],I=A[1],q=s.a.useState(null),J=Object(l.a)(q,2),F=J[0],M=J[1],B=s.a.useState(!1),H=Object(l.a)(B,2),z=H[0],G=H[1],V=s.a.useState({}),K=Object(l.a)(V,2),Q=K[0],W=K[1],X=s.a.useState([]),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1];function ee(){d(!1),x(!1),D(!1),G(!1),I(!1),M(null),w(null)}function te(e){"Escape"===e.key&&ee()}function ne(e){e.target.classList.contains("popup")&&ee()}return s.a.useEffect((function(){return document.addEventListener("keydown",te),document.addEventListener("click",ne),function(){document.removeEventListener("keydown",te),document.removeEventListener("click",ne)}})),s.a.useEffect((function(){Promise.all([v.getInitialCards(),v.getUserInfo()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];W(a),$(n)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsx)(b.Provider,{value:Q,children:Object(a.jsxs)("div",{className:"page",children:[Object(a.jsx)(p,{}),Object(a.jsx)(m,{cards:Z,onEditAvatar:function(){x(!0)},onEditProfile:function(){d(!0)},onAddPlace:function(){D(!0)},onCardClick:function(e){G(!0),M(e)},onCardLike:function(e){e.likes.some((function(e){return e._id===Q._id}))?v.dislikeCard(e._id).then((function(t){var n=Z.map((function(n){return n._id===e._id?t:n}));$(n)})).catch((function(e){console.log(e)})):v.likeCard(e._id).then((function(t){var n=Z.map((function(n){return n._id===e._id?t:n}));$(n)})).catch((function(e){console.log(e)}))},onCardDelete:function(e){I(!0),w(e)}}),Object(a.jsx)(h,{}),Object(a.jsx)(g,{isOpen:O,isClose:ee,onUpdateAvatar:function(e){c(!0),v.setUserAvatar(e).then((function(e){W(e),ee()})).catch((function(e){console.log(e)})).finally((function(){c(!1)}))},isLoading:n}),Object(a.jsx)(N,{isOpen:u,isClose:ee,onUpdateUser:function(e){c(!0),v.setUserInfo(e).then((function(e){W(e),ee()})).catch((function(e){console.log(e)})).finally((function(){c(!1)}))},isLoading:n}),Object(a.jsx)(y,{isOpen:S,isClose:ee,postNewCard:function(e){c(!0),v.postNewCard(e).then((function(e){return $([e].concat(Object(r.a)(Z)))})).catch((function(e){return console.log(e)})).finally((function(){c(!1),ee()}))},isLoading:n}),Object(a.jsx)(k,{isOpen:T,isClose:ee,onDelete:function(){c(!0),v.deleteCard(U._id).then((function(){var e=Z.filter((function(e){return e._id!==U._id}));$(e),ee()})).catch((function(e){console.log(e)})).finally((function(){c(!1)}))},card:U,isLoading:n}),Object(a.jsx)(f,{isOpen:z,onClose:ee,card:F})]})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};o.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(L,{})}),document.getElementById("root")),S()}},[[16,1,2]]]);
//# sourceMappingURL=main.4482375f.chunk.js.map