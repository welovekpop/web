(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{658:function(e,t,a){"use strict";var n=a(1),i=a.n(n),l=a(14);t.a=Object(l.a)(i.a.createElement("g",null,i.a.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"})),"ModeEdit")},663:function(e,t,a){"use strict";a.d(t,"a",function(){return b});var n=a(0),i=a.n(n),l=a(13),o=a.n(l),r=a(6),s=a.n(r),c=a(1),u=a.n(c),d=(a(5),a(807)),p=a(809),v=a(793),m=a(38),y=a(21),f=a(37),h=i()("div",{className:"ConfirmDialog-spacer"}),P=i()("div",{className:"Button-loading"},void 0,i()(v.a,{size:"100%"})),b=function(e){function t(){for(var t,a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={busy:!1},t.handleSubmit=function(e){e.preventDefault()},t.handleConfirm=function(e){var a=t.props.onConfirm;e.preventDefault();var n=a();n&&n.finally&&(t.setState({busy:!0}),n.finally(function(){t.setState({busy:!1})}))},t.handleClose=function(e){var a=t.props.onCancel;e&&e.preventDefault&&e.preventDefault(),a()},t}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.cancelLabel,n=e.confirmLabel,l=e.className,o=this.state.busy;return i()(d.a,{className:s()("Dialog",l),onClose:this.handleClose,open:!0},void 0,i()(p.a,{className:"Dialog-body"},void 0,i()(m.a,{onSubmit:this.handleSubmit},void 0,t,i()(y.a,{className:"ConfirmDialog-buttons FormGroup--noSpacing"},void 0,i()("div",{className:"ConfirmDialog-button"},void 0,i()(f.a,{disabled:o,onClick:this.handleClose},void 0,a)),h,i()("div",{className:"ConfirmDialog-button"},void 0,i()(f.a,{disabled:o,onClick:this.handleConfirm},void 0,o?P:n))))))},t}(u.a.Component);b.defaultProps={cancelLabel:"Cancel",confirmLabel:"OK"},b.propTypes={}},664:function(e,t,a){var n=a(196),i=a(665),l=a(666),o="Expected a function",r=Math.max,s=Math.min;e.exports=function(e,t,a){var c,u,d,p,v,m,y=0,f=!1,h=!1,P=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var a=c,n=u;return c=u=void 0,y=t,p=e.apply(n,a)}function g(e){var a=e-m;return void 0===m||a>=t||a<0||h&&e-y>=d}function M(){var e=i();if(g(e))return C(e);v=setTimeout(M,function(e){var a=t-(e-m);return h?s(a,d-(e-y)):a}(e))}function C(e){return v=void 0,P&&c?b(e):(c=u=void 0,p)}function O(){var e=i(),a=g(e);if(c=arguments,u=this,m=e,a){if(void 0===v)return function(e){return y=e,v=setTimeout(M,t),f?b(e):p}(m);if(h)return v=setTimeout(M,t),b(m)}return void 0===v&&(v=setTimeout(M,t)),p}return t=l(t)||0,n(a)&&(f=!!a.leading,d=(h="maxWait"in a)?r(l(a.maxWait)||0,t):d,P="trailing"in a?!!a.trailing:P),O.cancel=function(){void 0!==v&&clearTimeout(v),y=0,c=m=u=v=void 0},O.flush=function(){return void 0===v?p:C(i())},O}},665:function(e,t,a){var n=a(387);e.exports=function(){return n.Date.now()}},666:function(e,t,a){var n=a(196),i=a(244),l=NaN,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt;e.exports=function(e){if("number"==typeof e)return e;if(i(e))return l;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var a=s.test(e);return a||c.test(e)?u(e.slice(2),a?2:8):r.test(e)?l:+e}},667:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=(a(1),a(5),a(10)),o=a(792),r=a(155),s=Object(l.c)(),c=i()(r.a,{className:"PlaylistPanel-emptyIcon"}),u=function(e){var t=e.t;return i()("div",{className:"PlaylistPanel-empty"},void 0,c,i()(o.a,{className:"PlaylistPanel-emptyHeader"},void 0,t("playlists.playlist.empty")),i()(o.a,{},void 0,t("playlists.playlist.emptySub")))};u.propTypes={},t.a=s(u)},826:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(6),o=a.n(l),r=a(1),s=a.n(r),c=(a(5),a(77)),u=a(18),d=a(15),p=a(7),v=a(27),m=a(4);function y(){return{type:m.SHOW_IMPORT_PANEL}}function f(e){return{type:m.SHOW_IMPORT_SOURCE_PANEL,payload:{sourceType:e}}}function h(){return{type:m.HIDE_IMPORT_SOURCE_PANEL}}var P=a(16);function b(){return{type:m.SHOW_SEARCH_RESULTS}}function g(){return{type:m.SEARCH_DELETE}}var M=a(28),C=a(154),O=a(172),S=a(811),N=a(13),E=a.n(N),T=a(56),R=a(793),w=a(812),D=a(174),j=a(62),A=Object(T.DropTarget)(j.MEDIA,{drop:function(e,t){(0,e.onAddToPlaylist)(e.playlist,t.getItem().media)}},function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}}),k={root:"PlaylistMenuRow",selected:"is-selected"},I=i()("div",{className:"PlaylistMenuRow-loading"},void 0,i()(R.a,{size:"100%"})),F=i()("div",{className:"PlaylistMenuRow-active-icon"},void 0,i()(D.a,{})),_=function(e){function t(){return e.apply(this,arguments)||this}return E()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.playlist,n=t.selected,l=t.onClick,r=a.active&&"is-active",s=t.isOver&&"is-droppable";return a.creating?e=I:a.active&&(e=F),(0,t.connectDropTarget)(i()("div",{},void 0,i()(w.a,{selected:n,className:o()(r,s),classes:k,onClick:l},void 0,i()("div",{className:"PlaylistMenuRow-title"},void 0,e,a.name),i()("div",{className:"PlaylistMenuRow-count"},void 0,a.size))))},t}(s.a.Component);_.propTypes={};var L=A(_),H=a(381),z=a.n(H),B=a(10),x=a(122),q=a(246),V=Object(B.c)(),W=i()("div",{className:"PlaylistMenuRow-active-icon"},void 0,i()(x.a,{})),K=i()(x.a,{nativeColor:"#777"}),U=function(e){function t(){for(var t,a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={creating:!1},t.handleOpen=function(){t.setState({creating:!0})},t.handleClose=function(){t.closeDialog()},t.handleSubmit=function(e){return Promise.resolve((0,t.props.onCreatePlaylist)(e)).then(t.closeDialog.bind(z()(z()(t))))},t}E()(t,e);var a=t.prototype;return a.closeDialog=function(){this.setState({creating:!1})},a.render=function(){var e=this.props,t=e.t,a=e.className,n=this.state.creating;return i()(s.a.Fragment,{},void 0,i()(w.a,{className:o()("PlaylistMenuRow","PlaylistMenuRow--create",a),onClick:this.handleOpen},void 0,i()("div",{className:"PlaylistMenuRow-title"},void 0,W,t("playlists.new"))),n&&i()(q.a,{title:t("dialogs.createPlaylist.nameInputTitle"),icon:K,submitLabel:t("dialogs.createPlaylist.action"),onSubmit:this.handleSubmit,onCancel:this.handleClose}))},t}(s.a.Component);U.propTypes={};var $=V(U),J=a(790),Q=a(791),G=a(14),X=Object(G.a)(s.a.createElement("g",null,s.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"})),"Search"),Y=a(121),Z=i()("div",{className:"PlaylistMenuRow-active-icon"},void 0,i()(X,{})),ee=i()(Y.a,{nativeColor:"#777"}),te=function(e){var t=e.className,a=e.query,n=e.onClick,l=e.onClose;return i()(Q.a,{role:"menuitem",className:o()("PlaylistMenuRow","PlaylistMenuRow--search",t)},void 0,i()("button",{type:"button",className:"PlaylistMenuRow-title",onClick:n},void 0,Z,'"',a,'"'),i()("div",{className:"PlaylistMenuRow-count"},void 0,i()(J.a,{className:"PlaylistMenuRow-closeButton",onClick:l},void 0,ee)))};te.propTypes={};var ae=te,ne=Object(G.a)(s.a.createElement("g",null,s.a.createElement("path",{d:"M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"})),"Input"),ie=Object(B.c)(),le=i()("div",{className:"PlaylistMenuRow-loading"},void 0,i()(R.a,{size:"100%"})),oe=i()("div",{className:"PlaylistMenuRow-active-icon"},void 0,i()(ne,{})),re=function(e){var t,a=e.t,n=e.className,l=e.onClick;return t=e.importing?le:oe,i()(w.a,{className:o()("PlaylistMenuRow","PlaylistMenuRow--import",n),onClick:l},void 0,i()("div",{className:"PlaylistMenuRow-title"},void 0,t,a("playlists.import.title")))};re.propTypes={};var se=ie(re),ce=function(e){var t=e.className,a=e.playlists,n=e.selected,l=e.searchQuery,r=e.showSearchResults,s=e.searchResults,c=e.onCreatePlaylist,u=e.onSelectPlaylist,d=e.onSelectSearchResults,p=e.onCloseSearchResults,v=e.onAddToPlaylist,m=e.showImportPanel,y=e.onShowImportPanel,f=r?"is-selected":"",h=m?"is-selected":"",P=n&&!r&&!m;return i()(S.a,{className:o()("PlaylistMenu",t),disablePadding:!0},void 0,i()($,{className:"PlaylistMenu-row",onCreatePlaylist:c}),l&&i()(ae,{className:o()("PlaylistMenu-row",f),query:l,size:s,onClick:d,onClose:p}),a.map(function(e){return i()(L,{className:"PlaylistMenu-row",playlist:e,selected:P&&n._id===e._id,onClick:function(){return u(e._id)},onAddToPlaylist:v},e._id)}),i()(se,{className:o()("PlaylistMenu-row",h),onClick:y}))};ce.propTypes={};var ue=ce,de=Object(p.b)({playlists:M.i,selected:M.k,searchQuery:C.b,showSearchResults:C.f,searchResults:C.c,showImportPanel:O.b}),pe=Object(d.b)(de,function(e){return Object(u.b)({onAddToPlaylist:v.addMedia,onCreatePlaylist:v.createPlaylist,onSelectPlaylist:v.selectPlaylist,onSelectSearchResults:b,onCloseSearchResults:g,onShowImportPanel:y},e)})(ue),ve=a(2),me=a.n(ve),ye=a(33),fe=a(173),he=a(833),Pe=Object(G.a)(s.a.createElement("g",null,s.a.createElement("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})),"CheckBox"),be=Object(G.a)(s.a.createElement("g",null,s.a.createElement("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"})),"CheckBoxOutlineBlank"),ge=a(840),Me=a(658),Ce=Object(B.c)(),Oe=i()(Me.a,{}),Se=i()(Me.a,{nativeColor:"#777"}),Ne=function(e){function t(){for(var t,a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={renaming:!1},t.handleOpen=function(){t.setState({renaming:!0})},t.handleClose=function(){t.closeDialog()},t.handleSubmit=function(e){return(0,t.props.onRename)(e).then(t.closeDialog.bind(z()(z()(t))))},t}E()(t,e);var a=t.prototype;return a.closeDialog=function(){this.setState({renaming:!1})},a.render=function(){var e=this.props,t=e.t,a=e.initialName,n=this.state.renaming;return i()(s.a.Fragment,{},void 0,i()(ge.a,{title:t("playlists.rename"),placement:"top"},void 0,i()(J.a,{className:"PlaylistMeta-iconButton",onClick:this.handleOpen},void 0,Oe)),n&&i()(q.a,{title:t("dialogs.renamePlaylist.nameInputTitle"),submitLabel:t("dialogs.renamePlaylist.action"),icon:Se,value:a,onSubmit:this.handleSubmit,onCancel:this.handleClose}))},t}(s.a.Component);Ne.propTypes={};var Ee=Ce(Ne),Te=Object(G.a)(s.a.createElement("g",null,s.a.createElement("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})),"Delete"),Re=a(663),we=a(21),De=Object(B.c)(),je=i()(Te,{}),Ae=function(e){function t(){for(var t,a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={deleting:!1},t.handleOpen=function(){var e=t.props;e.active?(0,e.onNotDeletable)():t.setState({deleting:!0})},t.handleClose=function(){t.closeDialog()},t.handleConfirm=function(e){return(0,t.props.onDelete)(e).then(t.closeDialog.bind(z()(z()(t))))},t}E()(t,e);var a=t.prototype;return a.closeDialog=function(){this.setState({deleting:!1})},a.render=function(){var e=this.props,t=e.t,a=e.active,n=this.state.deleting;return i()(s.a.Fragment,{},void 0,i()(ge.a,{title:t(a?"playlists.deleteActive":"playlists.delete"),placement:"top"},void 0,i()(J.a,{disabled:a,className:"PlaylistMeta-iconButton",onClick:this.handleOpen},void 0,je)),n&&i()(Re.a,{title:t("dialogs.deletePlaylist.title"),confirmLabel:t("dialogs.deletePlaylist.action"),onConfirm:this.handleConfirm,onCancel:this.handleClose},void 0,i()(we.a,{},void 0,t("dialogs.deletePlaylist.confirm"))))},t}(s.a.Component);Ae.propTypes={};var ke=De(Ae),Ie=a(17),Fe=a.n(Ie),_e=a(112),Le=a.n(_e),He=a(79),ze=a.n(He),Be=Object(G.a)(s.a.createElement("g",null,s.a.createElement("path",{d:"M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"})),"Shuffle"),xe=Fe()(Le()("isLoading","setLoading",!1),ze()({onClick:function(e){return function(){var t=e.setLoading,a=e.onShuffle;t(!0),a().finally(function(){t(!1)})}}}),Object(B.c)()),qe=i()(R.a,{size:"100%"}),Ve=i()(Be,{}),We=function(e){var t=e.t,a=e.isLoading,n=e.onClick;return i()(ge.a,{title:t("playlists.shuffle"),placement:"top"},void 0,i()(J.a,{className:"PlaylistMeta-iconButton",onClick:n},void 0,a?qe:Ve))};We.propTypes={};var Ke=xe(We),Ue=a(664),$e=a.n(Ue),Je=Object(B.c)(),Qe=function(e){function t(){for(var t,a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={isOpen:!1,value:""},t.onFilter=$e()(function(e){(0,t.props.onFilter)(e)},200),t.handleClick=function(){var e=t.state.isOpen,a=!e;e&&t.clearFilter(),t.setState({isOpen:a,value:""},function(){a&&t.input.focus()})},t.handleChange=function(e){var a=e.target.value;t.setState({value:a}),t.onFilter(a)},t.refInput=function(e){t.input=e},t}E()(t,e);var a=t.prototype;return a.clearFilter=function(){""!==this.state.value&&(0,this.props.onFilter)("")},a.render=function(){var e=this.props.t,t=this.state,a=t.isOpen,n=t.value;return i()("div",{className:"PlaylistMediaFilter"},void 0,i()(ge.a,{title:e("playlists.filter"),placement:"top"},void 0,i()(J.a,{className:"PlaylistMeta-iconButton",onClick:this.handleClick},void 0,i()(X,{nativeColor:a?"#fff":null}))),s.a.createElement("input",{type:"text",ref:this.refInput,className:o()("PlaylistMediaFilter-input",a&&"is-open"),value:n,onChange:this.handleChange}))},t}(s.a.Component);Qe.propTypes={};var Ge=Je(Qe),Xe=Object(B.c)(),Ye="playlist-meta-active",Ze=i()(be,{}),et=i()(Pe,{nativeColor:"#fff"}),tt=function(e){var t=e.t,a=e.className,n=e.active,l=e.name,r=e.onShufflePlaylist,s=e.onActivatePlaylist,c=e.onRenamePlaylist,u=e.onDeletePlaylist,d=e.onNotDeletable,p=e.onFilter;return i()("div",{className:o()("PlaylistMeta",a,n&&"PlaylistMeta--active")},void 0,i()("div",{className:"PlaylistMeta-name"},void 0,l),i()("label",{htmlFor:Ye,className:o()("PlaylistMeta-active",n&&"is-active")},void 0,i()(he.a,{id:Ye,checked:n,disabled:n,onChange:n?null:s,icon:Ze,checkedIcon:et}),i()("span",{},void 0,t(n?"playlists.active":"playlists.activate"))),i()(Ge,{onFilter:p}),i()(Ke,{onShuffle:r}),i()(Ee,{initialName:l,onRename:c}),i()(ke,{active:n,onNotDeletable:d,onDelete:u}))};tt.propTypes={};var at=Xe(tt),nt=a(667),it=a(792),lt=a(155),ot=Object(B.c)(),rt=i()(lt.a,{className:"PlaylistPanel-emptyIcon"}),st=function(e){var t=e.t;return i()("div",{className:"PlaylistPanel-empty"},void 0,rt,i()(it.a,{className:"PlaylistPanel-emptyHeader"},void 0,t("playlists.playlist.filterEmpty")),i()(it.a,{},void 0,t("playlists.playlist.filterEmptySub")))};st.propTypes={};var ct=ot(st),ut=a(251),dt=a(12),pt=a.n(dt),vt=a(239),mt={drop:function(e,t,a){var n=t.getItem().media;if(n){var i=e.media._id;if(n.some(function(e){return e._id===i}))return;var l=Object(vt.a)(t,a);e.onMoveMedia(n,l?{before:i}:{after:i})}},hover:function(e,t,a){a.setState({insertingAbove:Object(vt.a)(t,a)})}},yt=i()("div",{className:"PlaylistItemRow-drop-indicator"}),ft=function(e){function t(){for(var t,a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={insertingAbove:!1},t}return E()(t,e),t.prototype.render=function(){var e=this.props,t=e.connectDropTarget,a=e.isOver,n=pt()(e,["connectDropTarget","isOver"]),l=this.state.insertingAbove,o=yt;return t(i()("div",{className:"PlaylistItemRow"},void 0,a&&l&&o,s.a.createElement(ut.a,n),a&&!l&&o))},t}(s.a.Component);ft.propTypes={};var ht=Object(T.DropTarget)(j.MEDIA,mt,function(e,t){return{connectDropTarget:e.dropTarget(),isOver:t.isOver()}})(ft),Pt=a(247),bt=a(243),gt=i()(Te,{}),Mt=function(e){var t=e.onRemove,a=pt()(e,["onRemove"]);return s.a.createElement(bt.a,me()({},a,{onAction:t}),gt)};Mt.propTypes={};var Ct=Mt,Ot=i()(Me.a,{}),St=function(e){var t=e.onEdit,a=pt()(e,["onEdit"]);return s.a.createElement(bt.a,me()({},a,{onAction:t}),Ot)};St.propTypes={};var Nt=St,Et=a(313),Tt=i()(Et.a,{}),Rt=function(e){var t=e.onFirst,a=pt()(e,["onFirst"]);return s.a.createElement(bt.a,me()({},a,{onAction:t}),Tt)};Rt.propTypes={};var wt=Rt,Dt=a(312),jt=i()(Dt.a,{}),At=function(e){var t=e.onLast,a=pt()(e,["onLast"]);return s.a.createElement(bt.a,me()({},a,{onAction:t}),jt)};At.propTypes={};var kt=At,It=i()("div",{className:"PlaylistPanel-loading"},void 0,i()(R.a,{size:"100%"})),Ft=i()(ct,{}),_t=i()(nt.a,{}),Lt=function(e){var t,a=e.className,n=e.playlist,l=e.media,r=e.isFiltered,c=e.onShufflePlaylist,u=e.onActivatePlaylist,d=e.onRenamePlaylist,p=e.onDeletePlaylist,v=e.onNotDeletable,m=e.onLoadPlaylistPage,y=e.onFilterPlaylistItems,f=e.onMoveMedia,h=e.onOpenPreviewMediaDialog;return t=e.loading?It:0===l.length?r?Ft:_t:i()(fe.a,{className:"PlaylistPanel-media",size:l.length,media:l,rowComponent:r?ut.a:ht,rowProps:{onMoveMedia:f},onOpenPreviewMediaDialog:h,makeActions:function(e){var t=e.onOpenAddMediaMenu,a=e.onMoveToFirst,n=e.onMoveToLast,l=e.onEditMedia,o=e.onRemoveFromPlaylist,r=e.isFiltered;return function(e,c,u){return i()(s.a.Fragment,{},void 0,i()(Pt.a,{onAdd:function(a){return t(a,e,c)}}),(u>0||r)&&i()(wt,{onFirst:function(){return a(e,c)}}),0===u&&!r&&i()(kt,{onLast:function(){return n(e,c)}}),i()(Nt,{onEdit:function(){return l(e)}}),i()(Ct,{onRemove:function(){return o(e,c)}}))}}(e),onRequestPage:m}),i()("div",{className:o()("PlaylistPanel",a)},void 0,i()(at,{className:"PlaylistPanel-meta",id:n._id,name:n.name,active:n.active,onShufflePlaylist:c,onActivatePlaylist:u,onRenamePlaylist:d,onDeletePlaylist:p,onNotDeletable:v,onFilter:y}),t)};Lt.propTypes={};var Ht=Lt,zt=Object(p.b)({playlist:M.k,media:M.c,loading:M.e,isFiltered:M.d}),Bt=function(e,t){return t.isSelected(e)?t.get():[e]},xt=function(e,t,a){return Object(v.addMediaMenu)(Bt(t,a),e)},qt=Object(d.b)(zt,function(e){return{dispatch:e}},function(e,t,a){var n,i=t.dispatch;return me()({},a,e,Object(u.b)({onShufflePlaylist:v.shufflePlaylist.bind(null,e.playlist._id),onActivatePlaylist:v.activatePlaylist.bind(null,e.playlist._id),onRenamePlaylist:v.renamePlaylist.bind(null,e.playlist._id),onDeletePlaylist:v.deletePlaylist.bind(null,e.playlist._id),onNotDeletable:v.cannotDeleteActivePlaylist,onOpenAddMediaMenu:xt,onOpenPreviewMediaDialog:ye.f,onMoveToFirst:(n=e.playlist._id,function(e,t){return Object(v.moveMedia)(n,Bt(e,t),{at:"start"})}),onMoveToLast:function(e){return function(t,a){return Object(v.moveMedia)(e,Bt(t,a),{at:"end"})}}(e.playlist._id),onMoveMedia:function(e){return function(t,a){return Object(v.moveMedia)(e,t,a)}}(e.playlist._id),onEditMedia:function(e){return function(t){return Object(v.editMedia)(e,t)}}(e.playlist._id),onRemoveFromPlaylist:function(e){return function(t,a){return Object(v.removeMedia)(e,Bt(t,a))}}(e.playlist._id),onLoadPlaylistPage:function(e){var t=e.isFiltered,a=e.playlist;return function(e){return t?Object(v.loadFilteredPlaylistItems)(a._id,e):Object(v.loadPlaylist)(a._id,e)}}(e),onFilterPlaylistItems:v.filterPlaylistItems.bind(null,e.playlist._id)},i))})(Ht),Vt=a(80),Wt=function(e){var t=e.getAllMediaSources,a=e.selectedSourceType,n=e.sourceStates,l=e.onShowImportPanel,o=e.onHideImportPanel;if(a){var r=(0,e.getMediaSource)(a).ImportPanel,c=n[a];return s.a.createElement(r,me()({onClosePanel:o},c))}var u=[],d=t();return Object.keys(d).forEach(function(e){var t=d[e].ImportForm;t&&u.push(i()(t,{onShowImportPanel:function(){return l(e)},onHideImportPanel:o},e))}),i()("div",{className:"PlaylistImport"},void 0,u)};Wt.propTypes={};var Kt=Object(Vt.a)()(Wt),Ut=Object(p.b)({selectedSourceType:O.a,sourceStates:function(e){return e.sources}}),$t=Object(d.b)(Ut,function(e){return Object(u.b)({onShowImportPanel:f,onHideImportPanel:h},e)})(Kt),Jt=a(41),Qt=Object(B.c)(),Gt=i()(X,{className:"SearchResults-noneIcon"}),Xt=function(e){var t=e.t;return i()("div",{className:"SearchResults-none"},void 0,Gt,i()(it.a,{className:"SearchResults-noneHeader"},void 0,t("playlists.search.noResults")),i()(it.a,{},void 0,t("playlists.search.noResultsSub")))};Xt.propTypes={};var Yt=Qt(Xt),Zt=i()("div",{className:"PlaylistPanel-loading"},void 0,i()(R.a,{size:"100%"})),ea=function(){return Zt},ta=function(e){var t=e.results,a=e.onOpenAddMediaMenu,n=e.onOpenPreviewMediaDialog;return i()(fe.a,{className:"PlaylistPanel-media",media:t,onOpenPreviewMediaDialog:n,makeActions:function(e){return function(t,a){return i()(s.a.Fragment,{},void 0,i()(Pt.a,{onAdd:function(n){return e(n,t,a)}}))}}(a)})};ta.propTypes={};var aa=ta,na=Object(B.c)(),ia=i()(Yt,{}),la=i()(ea,{}),oa=function(e){var t,a=e.t,n=e.className,l=e.query,r=e.results,s=e.onOpenAddMediaMenu,c=e.onOpenPreviewMediaDialog;return t=e.loadingState===Jt.LOADED?r.length>0?i()(aa,{results:r,onOpenPreviewMediaDialog:c,onOpenAddMediaMenu:s}):ia:la,i()("div",{className:o()("PlaylistPanel","SearchResults",n)},void 0,i()("div",{className:"SearchResults-query"},void 0,a("playlists.search.results",{query:l})),t)};oa.propTypes={};var ra=na(oa),sa=Object(p.b)({query:C.b,results:C.d,loadingState:C.a}),ca=function(e,t,a){return Object(v.addMediaMenu)(function(e,t){return t.isSelected(e)?t.get():[e]}(t,a),e)},ua=Object(d.b)(sa,function(e){return Object(u.b)({onOpenAddMediaMenu:ca,onOpenPreviewMediaDialog:ye.f},e)})(ra),da=a(61),pa=Object(B.c)(),va=i()("div",{className:"SearchBar-icon"},void 0,i()(X,{})),ma=function(e){function t(){for(var t,a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={focused:!1},t.handleFocus=function(){t.setState({focused:!0})},t.handleBlur=function(){t.setState({focused:!1})},t.handleKeyDown=function(e){"Enter"===e.key&&(0,t.props.onSubmit)(t.input.value)},t.refInput=function(e){t.input=e},t}return E()(t,e),t.prototype.render=function(){var e=this.props,t=e.t,a=e.children,n=e.className,l=this.state.focused;return i()("div",{className:o()("SearchBar",l?"is-focused":"",n)},void 0,va,a,i()("div",{className:"SearchBar-query"},void 0,s.a.createElement("input",{ref:this.refInput,className:"SearchBar-input",type:"text",placeholder:l?"":t("playlists.search.action"),onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown})))},t}(s.a.Component);ma.propTypes={};var ya=pa(ma),fa=a(794),ha=a(310),Pa=function(e){var t=e.className,a=e.name,n=e.source,l=e.active;return i()("div",{className:o()("SourcePickerElement","SourcePickerElement--"+a,l&&"SourcePickerElement--active",t),style:{backgroundImage:"url("+n.logo+")"}})};Pa.propTypes={};var ba=Pa,ga=Object(Vt.a)(),Ma={anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},Ca=i()(ha.a,{className:"SourcePicker-arrow"}),Oa=function(e){function t(){for(var t,a=arguments.length,n=Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={open:!1},t.handleOpen=function(){t.setState({open:!0,anchor:t.container})},t.handleClose=function(){t.setState({open:!1})},t.handleChange=function(e){var a=t.props.onChange;t.handleClose(),a(e)},t.refContainer=function(e){t.container=e},t}E()(t,e);var a=t.prototype;return a.createElement=function(e){var t=this,a=this.props,n=a.selected,l=a.getMediaSource;return i()("button",{type:"button",className:"SourcePicker-item",onClick:function(){return t.handleChange(e)}},e,i()(ba,{name:e,source:l(e),active:n===e}))},a.render=function(){var e=this,t=this.props,a=t.className,n=t.selected,l=t.getMediaSource,r=this.state,c=r.open,u=r.anchor,d=Object.keys((0,t.getAllMediaSources)()).filter(function(e){return e!==n}).map(function(t){return e.createElement(t)});return s.a.createElement("div",{className:o()("SourcePicker",a),ref:this.refContainer},i()("button",{type:"button",className:"SourcePicker-active",onClick:this.handleOpen},void 0,i()(ba,{name:n,source:l(n),active:!0}),Ca),s.a.createElement(fa.a,me()({classes:{paper:"SourcePicker-list"},open:c,anchorEl:u,onClose:this.handleClose},Ma),d))},t}(s.a.Component);Oa.propTypes={};var Sa=ga(Oa),Na=function(e){var t=e.className,a=e.source,n=e.onSubmit,l=e.onSourceChange;return i()(ya,{className:t,onSubmit:n},void 0,i()(Sa,{className:"SearchBar-source",selected:a,onChange:l}))};Na.propTypes={};var Ea=Na,Ta=Object(p.b)({source:C.e}),Ra={onSubmit:function(e){return Object(P.get)("/search",{qs:{query:e},onStart:function(){return function(t){t(function(e){return{type:m.SEARCH_START,payload:{query:e}}}(e)),t(b())}},onComplete:function(e){return{type:m.SEARCH_COMPLETE,payload:{results:e}}},onError:function(e){return{type:m.SEARCH_COMPLETE,error:!0,payload:e}}})},onSourceChange:function(e){return{type:m.SET_SEARCH_SOURCE,payload:{source:e}}}},wa=Object(d.b)(Ta,Ra)(Ea),Da=Object(B.c)(),ja=i()(wa,{className:"PlaylistHeader-search"}),Aa=function(e){var t=e.t,a=e.className,n=e.onCloseOverlay;return i()(da.a,{className:o()("PlaylistHeader",a),title:t("playlists.title"),onCloseOverlay:n},void 0,ja)};Aa.propTypes={};var ka=Da(Aa),Ia=Object(B.c)(),Fa=function(e){var t=e.t,a=e.className;return i()("div",{className:o()("PlaylistPanel","PlaylistPanel--empty",a)},void 0,t("playlists.noPlaylists"))};Fa.propTypes={};var _a=Ia(Fa),La=i()("div",{className:"PlaylistPanel"},void 0,i()($t,{})),Ha=i()(ua,{}),za=i()(_a,{}),Ba=i()(pe,{className:"PlaylistManager-menu"}),xa=function(e){var t,a=e.className,n=e.selectedPlaylist,l=e.onCloseOverlay;return t=e.showImportPanel?La:e.showSearchResults?Ha:n?i()(qt,{},n._id):za,i()("div",{className:o()("PlaylistManager",a)},void 0,i()(ka,{className:"PlaylistManager-header AppRow AppRow--top",onCloseOverlay:l}),i()(c.a,{},void 0,Ba,i()("div",{className:"PlaylistManager-panel"},void 0,t)))};xa.propTypes={};t.default=xa}}]);
//# sourceMappingURL=playlists_cf92c7c.js.map