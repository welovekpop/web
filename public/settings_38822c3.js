(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{663:function(e,n,a){"use strict";a.d(n,"a",function(){return C});var t=a(0),o=a.n(t),i=a(13),s=a.n(i),l=a(6),r=a.n(l),c=a(1),d=a.n(c),g=(a(5),a(807)),u=a(809),h=a(793),p=a(38),m=a(21),v=a(37),f=o()("div",{className:"ConfirmDialog-spacer"}),b=o()("div",{className:"Button-loading"},void 0,o()(h.a,{size:"100%"})),C=function(e){function n(){for(var n,a=arguments.length,t=Array(a),o=0;o<a;o++)t[o]=arguments[o];return(n=e.call.apply(e,[this].concat(t))||this).state={busy:!1},n.handleSubmit=function(e){e.preventDefault()},n.handleConfirm=function(e){var a=n.props.onConfirm;e.preventDefault();var t=a();t&&t.finally&&(n.setState({busy:!0}),t.finally(function(){n.setState({busy:!1})}))},n.handleClose=function(e){var a=n.props.onCancel;e&&e.preventDefault&&e.preventDefault(),a()},n}return s()(n,e),n.prototype.render=function(){var e=this.props,n=e.children,a=e.cancelLabel,t=e.confirmLabel,i=e.className,s=this.state.busy;return o()(g.a,{className:r()("Dialog",i),onClose:this.handleClose,open:!0},void 0,o()(u.a,{className:"Dialog-body"},void 0,o()(p.a,{onSubmit:this.handleSubmit},void 0,n,o()(m.a,{className:"ConfirmDialog-buttons FormGroup--noSpacing"},void 0,o()("div",{className:"ConfirmDialog-button"},void 0,o()(v.a,{disabled:s,onClick:this.handleClose},void 0,a)),f,o()("div",{className:"ConfirmDialog-button"},void 0,o()(v.a,{disabled:s,onClick:this.handleConfirm},void 0,s?b:t))))))},n}(d.a.Component);C.defaultProps={cancelLabel:"Cancel",confirmLabel:"OK"},C.propTypes={}},828:function(e,n,a){"use strict";a.r(n);var t=a(2),o=a.n(t),i=a(0),s=a.n(i),l=a(12),r=a.n(l),c=a(13),d=a.n(c),g=a(6),u=a.n(g),h=a(1),p=a.n(h),m=a(5),v=a.n(m),f=a(10),b=a(61),C=a(77),y=a(8),S=a.n(y),N=a(3);function w(e){var n,a,t,i=e.classes,s=e.className,l=e.children,r=e.row,c=S()(e,["classes","className","children","row"]);return p.a.createElement("div",o()({className:u()(i.root,(n={},a=i.row,t=r,a in n?Object.defineProperty(n,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[a]=t,n),s)},c),l)}w.propTypes={},w.defaultProps={row:!1};var k=Object(N.default)({root:{display:"flex",flexDirection:"column",flexWrap:"wrap"},row:{flexDirection:"row"}},{name:"MuiFormGroup"})(w),P=a(25),L=a(321);function D(e){var n=e.classes,a=e.className,t=e.color,i=S()(e,["classes","className","color"]);return p.a.createElement("span",{className:u()(n.root,a)},p.a.createElement(L.a,o()({icon:p.a.createElement("span",{className:n.icon}),classes:{root:u()(n.switchBase,n["color".concat(Object(P.a)(t))]),checked:n.checked,disabled:n.disabled},checkedIcon:p.a.createElement("span",{className:u()(n.icon,n.iconChecked)})},i)),p.a.createElement("span",{className:n.bar}))}D.propTypes={},D.defaultProps={color:"secondary"};var T=Object(N.default)(function(e){return{root:{display:"inline-flex",width:62,position:"relative",flexShrink:0,verticalAlign:"middle"},icon:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},iconChecked:{boxShadow:e.shadows[2]},switchBase:{zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},checked:{transform:"translateX(14px)","& + $bar":{opacity:.5}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"& + $bar":{backgroundColor:e.palette.primary.main}}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"& + $bar":{backgroundColor:e.palette.secondary.main}}},disabled:{"& + $bar":{opacity:"light"===e.palette.type?.12:.1},"& $icon":{boxShadow:e.shadows[1]},"&$switchBase":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800],"& + $bar":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}}},bar:{borderRadius:7,display:"block",position:"absolute",width:34,height:14,top:"50%",left:"50%",marginTop:-7,marginLeft:-17,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}},{name:"MuiSwitch"})(D),E=a(45),O=a(315),U=a(381),j=a.n(U),x=a(790),z=a(658),M=a(246),B=a(81),$=Object(f.c)(),A=s()(z.a,{className:"ChangeUsernameButton-icon"}),J=s()(z.a,{nativeColor:"#777"}),F=function(e){function n(){for(var n,a=arguments.length,t=Array(a),o=0;o<a;o++)t[o]=arguments[o];return(n=e.call.apply(e,[this].concat(t))||this).state={changingUsername:!1},n.handleOpen=function(){n.setState({changingUsername:!0})},n.handleClose=function(){n.closeDialog()},n.handleSubmit=function(e){var a=n.props,t=a.onChangeUsername;return e===a.initialUsername?(n.closeDialog(),null):t(e).then(n.closeDialog.bind(j()(j()(n))))},n}d()(n,e);var a=n.prototype;return a.closeDialog=function(){this.setState({changingUsername:!1})},a.render=function(){var e=this.props,n=e.t,a=e.initialUsername,t=this.state.changingUsername;return s()(p.a.Fragment,{},void 0,s()(x.a,{className:"ChangeUsernameButton",onClick:this.handleOpen},void 0,A),s()(B.a,{delay:450},void 0,t?s()(M.a,{title:n("settings.profile.username.change"),submitLabel:n("settings.profile.username.save"),icon:J,value:a,onSubmit:this.handleSubmit,onCancel:this.handleClose}):null))},n}(p.a.Component);F.propTypes={};var I=$(F),V=function(e){var n=e.className,a=e.user,t=e.onChangeUsername;return s()("div",{className:u()("SettingsPanelProfile",n)},void 0,s()(E.a,{className:"SettingsPanelProfile-avatar",user:a}),s()("div",{className:"SettingsPanelProfile-textblock"},void 0,s()("h2",{className:"SettingsPanelProfile-username"},void 0,a.username,s()(I,{onChangeUsername:t,initialUsername:a.username})),s()(O.a,{roles:a.roles}),s()("p",{className:"SettingsPanelProfile-date"},void 0,new Date(a.createdAt).toLocaleString([],{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric"}))))};V.propTypes={};var G=V,R=function(e){var n=e.id,a=e.label,t=p.a.Children.only(e.children);return s()("div",{className:"LabeledControl"},void 0,s()("label",{className:"LabeledControl-label",htmlFor:n},void 0,a),p.a.cloneElement(t,{id:n,className:u()(t.className,"LabeledControl-control")}))};R.propTypes={};var K=R,W=a(171),X=a.n(W),_=a(831),q=a(812),H=X()({i18n:v.a.object}),Q=function(e){var n=e.i18n,a=r()(e,["i18n"]);return p.a.createElement(_.a,o()({className:"LanguagePicker"},a),n.availableLanguages.map(function(e){return s()(q.a,{value:e},e,function(e,n){return e.t("locales."+n)}(n,e))}))};Q.propTypes={};var Y=H(Q),Z=a(797),ee=a(14),ne=Object(ee.a)(p.a.createElement("g",null,p.a.createElement("path",{d:"M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"})),"PowerSettingsNew"),ae=a(663),te=a(21),oe=Object(f.c)(),ie=s()(ne,{className:"LogoutButton-icon"}),se=function(e){function n(){for(var n,a=arguments.length,t=Array(a),o=0;o<a;o++)t[o]=arguments[o];return(n=e.call.apply(e,[this].concat(t))||this).state={showDialog:!1},n.handleOpen=function(){n.setState({showDialog:!0})},n.handleClose=function(){n.closeDialog()},n.handleConfirm=function(){(0,n.props.onLogout)(),n.closeDialog()},n}d()(n,e);var a=n.prototype;return a.closeDialog=function(){this.setState({showDialog:!1})},a.render=function(){var e=this.props.t,n=this.state.showDialog;return s()(p.a.Fragment,{},void 0,s()(Z.a,{className:"LogoutButton",onClick:this.handleOpen},void 0,ie,e("settings.logout")),n&&s()(ae.a,{title:e("dialogs.logout.title"),confirmLabel:e("dialogs.logout.action"),onConfirm:this.handleConfirm,onCancel:this.handleClose},void 0,s()(te.a,{},void 0,e("dialogs.logout.confirm"))))},n}(p.a.Component);se.propTypes={};var le=oe(se),re=a(17),ce=a.n(re),de=a(36),ge=a.n(de),ue=ce()(ge()(function(e){var n=e.onSettingChange;return{onToggleUserJoin:function(e,a){n("notifications.userJoin",a)},onToggleUserLeave:function(e,a){n("notifications.userLeave",a)},onToggleUserNameChanged:function(e,a){n("notifications.userNameChanged",a)},onToggleSkip:function(e,a){n("notifications.skip",a)}}}),Object(f.c)()),he=function(e){var n=e.t,a=e.settings,t=e.onToggleUserJoin,o=e.onToggleUserLeave,i=e.onToggleUserNameChanged,l=e.onToggleSkip;return s()("div",{},void 0,s()("h2",{className:"SettingsPanel-header"},void 0,n("settings.notifications.title")),s()("p",{className:"SettingsPanel-helpText"},void 0,n("settings.notifications.help")),s()(K,{label:n("settings.notifications.userJoin"),id:"uw-setting-userjoin"},void 0,s()(T,{color:"primary",checked:a.notifications.userJoin,onChange:t})),s()(K,{label:n("settings.notifications.userLeave"),id:"uw-setting-userleave"},void 0,s()(T,{color:"primary",checked:a.notifications.userLeave,onChange:o})),s()(K,{label:n("settings.notifications.userNameChanged"),id:"uw-setting-usernamechanged"},void 0,s()(T,{color:"primary",checked:a.notifications.userNameChanged,onChange:i})),s()(K,{label:n("settings.notifications.skip"),id:"uw-setting-skip"},void 0,s()(T,{color:"primary",checked:a.notifications.skip,onChange:l})))};he.propTypes={};var pe=ue(he),me=Object(ee.a)(p.a.createElement("g",null,p.a.createElement("path",{d:"M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})),"Copyright"),ve=a(786),fe=s()("path",{d:"M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"}),be=function(e){return p.a.createElement(ve.a,o()({viewBox:"-40 -40 520 520"},e),fe)},Ce=Object(f.c)(),ye=ge()({className:"SettingsPanel-link",target:"_blank"})(Z.a),Se=s()(be,{className:"SettingsPanel-linkIcon"}),Ne=s()(be,{className:"SettingsPanel-linkIcon"}),we=s()(me,{className:"SettingsPanel-linkIcon"}),ke=function(e){var n=e.t;return s()("div",{},void 0,s()("h2",{className:"SettingsPanel-header"},void 0,n("settings.links.title")),s()(ye,{href:"http://u-wave.net"},void 0,Se,n("settings.links.website")),s()(ye,{href:"https://github.com/u-wave/web"},void 0,Ne,n("settings.links.source")),s()(ye,{href:"https://github.com/u-wave/web/tree/master/LICENSE"},void 0,we,n("settings.links.license")))};ke.propTypes={};var Pe=Ce(ke),Le=Object(f.c)(),De=s()("hr",{className:"SettingsPanel-divider"}),Te=s()("hr",{className:"SettingsPanel-divider"}),Ee=s()(Pe,{}),Oe=s()("hr",{className:"SettingsPanel-divider"}),Ue=s()("hr",{className:"SettingsPanel-divider"}),je=function(e){function n(){for(var n,a=arguments.length,t=Array(a),o=0;o<a;o++)t[o]=arguments[o];return(n=e.call.apply(e,[this].concat(t))||this).handleVideoEnabledChange=function(e,a){(0,n.props.onSettingChange)("videoEnabled",a)},n.handleVideoSizeChange=function(e,a){(0,n.props.onSettingChange)("videoSize",a?"large":"small")},n.handleMentionSoundChange=function(e,a){(0,n.props.onSettingChange)("mentionSound",a)},n.handleLanguageChange=function(e){(0,n.props.onChangeLanguage)(e.target.value)},n}return d()(n,e),n.prototype.render=function(){var e=this.props,n=e.t,a=e.className,t=e.settings,o=e.user,i=e.onSettingChange,l=e.onChangeUsername,r=e.onLogout;return s()("div",{className:u()("SettingsPanel",a)},void 0,o&&s()(G,{user:o,onChangeUsername:l}),o&&De,s()("div",{className:"SettingsPanel-column SettingsPanel-column--left"},void 0,s()("h2",{className:"SettingsPanel-header"},void 0,n("settings.title")),s()(k,{},void 0,s()(K,{label:n("settings.videoEnabled"),id:"uw-setting-videoenabled"},void 0,s()(T,{color:"primary",checked:t.videoEnabled,onChange:this.handleVideoEnabledChange})),s()(K,{label:n("settings.videoSize"),id:"uw-setting-videosize"},void 0,s()(T,{color:"primary",checked:"large"===t.videoSize,onChange:this.handleVideoSizeChange})),s()(K,{label:n("settings.mentionSound"),id:"uw-setting-mentionsound"},void 0,s()(T,{color:"primary",checked:t.mentionSound,onChange:this.handleMentionSoundChange})),s()(K,{label:n("settings.language"),id:"uw-setting-language"},void 0,s()(Y,{value:t.language,onChange:this.handleLanguageChange}))),Te,Ee,o&&s()(p.a.Fragment,{},void 0,Oe,s()(le,{onLogout:r}))),s()("div",{className:"SettingsPanel-column SettingsPanel-column--right"},void 0,s()(pe,{settings:t,onSettingChange:i}),Ue))},n}(p.a.Component);je.propTypes={};var xe=Le(je),ze=Object(f.c)(),Me=function(e){function n(){for(var n,a=arguments.length,t=Array(a),o=0;o<a;o++)t[o]=arguments[o];return(n=e.call.apply(e,[this].concat(t))||this).handleLogout=function(){var e=n.props,a=e.onLogout;(0,e.onCloseOverlay)(),a()},n}return d()(n,e),n.prototype.render=function(){var e=this.props,n=e.t,a=e.className,t=e.onCloseOverlay,i=r()(e,["t","className","onCloseOverlay"]);return s()("div",{className:u()("SettingsManager",a)},void 0,s()(b.a,{title:n("settings.title"),onCloseOverlay:t}),s()(C.a,{className:"SettingsManager-body"},void 0,p.a.createElement(xe,o()({},i,{onLogout:this.handleLogout}))))},n}(p.a.Component);Me.propTypes={};n.default=ze(Me)}}]);
//# sourceMappingURL=settings_38822c3.js.map