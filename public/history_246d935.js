(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{783:function(e,o,t){"use strict";t.r(o);var n=t(2),s=t.n(n),a=t(0),i=t.n(a),r=t(8),c=t.n(r),d=t(5),u=t.n(d),l=t(1),p=t.n(l),m=t(3),v=t.n(m),w=t(10),R=t(63),h=t(77),y=t(37),f=t.n(y),M=t(249),N=t(250),g=t(15),A=t.n(g),O=t(12),D=t.n(O),B=t(58),b=t(124),k=t(64),C=t(267),H=t(123),P=t(17),E=t.n(P),L=t(107),S=t.n(L),T=t(122);var j=function(e){var o=e.t,t=Math.max(0,Math.floor((e.currentTime-e.timestamp)/1e3)),n=S()(1e3*t,{long:!0}),s=function(e){var o=e.split(" "),t=o[0];return{key:o[1].replace(/s$/,"")+"s",count:parseInt(t,10)}}(n),a=s.key,r=s.count;return i()("span",{},void 0,o("timeAgo.format",{time:o("timeAgo."+a,{count:r,defaultValue:n})}))};j.propTypes={};var V=E()(Object(w.c)(),Object(T.a)())(j),I=t(116),K=t(117),J=t(118),_=t(162),q=function(e){var o=e.upvotes,t=e.downvotes,n=e.favorites,s=e.isUpvote,a=e.isDownvote,r=e.isFavorite?J.a:_.a;return i()("div",{className:"HistoryVotes AudienceResponse"},void 0,i()("div",{className:"ResponseButton ResponseButton--static"},void 0,i()("div",{className:"ResponseButton-content"},void 0,i()(K.a,{className:u()("HistoryVotes-icon",s&&"ResponseButton-icon--upvoted")}),i()("span",{className:"ResponseButton-count"},void 0,o.length))),i()("div",{className:"ResponseButton ResponseButton--static"},void 0,i()("div",{className:"ResponseButton-content"},void 0,i()(r,{className:"HistoryVotes-icon ResponseButton-icon--favorite"}),i()("span",{className:"ResponseButton-count"},void 0,n.length))),i()("div",{className:"ResponseButton ResponseButton--static"},void 0,i()("div",{className:"ResponseButton-content"},void 0,i()(I.a,{className:u()("HistoryVotes-icon",a&&"ResponseButton-icon--downvoted")}),i()("span",{className:"ResponseButton-count"},void 0,t.length))))};q.propTypes={};var x=q,z={beginDrag:function(e){var o=e.selection,t=e.media;return{media:function(e,o){return e.some(function(e){return e._id===o._id})}(o,t.media)?o:[t.media]}}},F=Object(B.DragSource)(k.MEDIA,z,function(e){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview()}}),U=function(e){function o(){for(var o,t,n=arguments.length,s=Array(n),a=0;a<n;a++)s[a]=arguments[a];return o=t=e.call.apply(e,[this].concat(s))||this,t.state={showActions:!1},t.handleMouseEnter=function(){t.setState({showActions:!0})},t.handleMouseLeave=function(){t.setState({showActions:!1})},t.handleDoubleClick=function(){t.props.onOpenPreviewMediaDialog(t.props.media.media)},t.handleKeyPress=function(e){"Space"===e.code&&t.props.onClick()},o||A()(t)}D()(o,e);var t=o.prototype;return t.componentDidMount=function(){this.props.connectDragPreview(Object(b.getEmptyImage)())},t.render=function(){var e=this.props,o=e.media,t=e.className,n=e.selection,s=e.connectDragSource,a=e.makeActions,r=e.onClick,c=o.media,d=o.timestamp,l=o.user,m=o.stats,v=this.state.showActions,w=e.selected?"is-selected":"",R=i()("div",{className:"MediaListRow-thumb"},void 0,i()("img",{className:"MediaListRow-image",src:c.thumbnail,alt:""}));return s(i()("div",{className:u()("MediaListRow","HistoryRow",t,w),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onDoubleClick:this.handleDoubleClick,onKeyPress:this.handleKeyPress,onClick:r},void 0,R,i()(H.a,{className:"HistoryRow-song",size:"mediaRow",artist:c.artist,title:c.title}),i()("div",{className:"HistoryRow-votes"},void 0,p.a.createElement(x,m)),i()("div",{className:"HistoryRow-user"},void 0,l.username),i()("div",{className:"HistoryRow-time",dateTime:d},void 0,i()(V,{timestamp:d})),v&&i()(C.a,{className:u()("MediaListRow-actions",w),selection:n,media:c,makeActions:a})))},o}(p.a.Component);U.defaultProps={selected:!1},U.propTypes={};var $=F(U),G=function(){return[]},Q=f()(function(e){return{className:"RoomHistory-list",listComponent:"div",rowComponent:$,makeActions:e.onOpenAddMediaMenu?(o=e.onOpenAddMediaMenu,function(e,t){return[i()(N.a,{onAdd:function(n){return o(n,e,t)}},"add")]}):G};var o})(M.a);Q.propTypes={onOpenAddMediaMenu:v.a.func.isRequired};var W=Q,X=Object(w.c)(),Y=function(e){var o=e.t,t=e.className,n=e.onCloseOverlay,a=e.onOpenAddMediaMenu,r=e.onOpenPreviewMediaDialog,d=c()(e,["t","className","onCloseOverlay","onOpenAddMediaMenu","onOpenPreviewMediaDialog"]);return i()("div",{className:u()("RoomHistory",t)},void 0,i()(R.a,{direction:"top",className:"AppRow AppRow--top",title:o("history.title"),onCloseOverlay:n}),i()(h.a,{className:"RoomHistory-body"},void 0,p.a.createElement(W,s()({onOpenAddMediaMenu:a,onOpenPreviewMediaDialog:r},d))))};Y.propTypes={};o.default=X(Y)}}]);
//# sourceMappingURL=history_246d935.js.map