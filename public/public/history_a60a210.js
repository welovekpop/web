(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{830:function(e,o,t){"use strict";t.r(o);var n=t(2),s=t.n(n),a=t(0),i=t.n(a),r=t(12),c=t.n(r),d=t(6),u=t.n(d),l=t(1),p=t.n(l),m=t(5),v=t.n(m),w=t(10),R=t(61),f=t(77),h=t(36),y=t.n(h),M=t(248),N=t(247),g=t(13),A=t.n(g),O=t(56),D=t(117),B=t(62),b=t(324),k=t(118),C=t(17),H=t.n(C),P=t(110),E=t.n(P),L=t(119);var S=function(e){var o=e.t,t=Math.max(0,Math.floor((e.currentTime-e.timestamp)/1e3)),n=E()(1e3*t,{long:!0}),s=function(e){var o=e.split(" "),t=o[0];return{key:o[1].replace(/s$/,"")+"s",count:parseInt(t,10)}}(n),a=s.key,r=s.count;return i()("span",{},void 0,o("timeAgo.format",{time:o("timeAgo."+a,{count:r,defaultValue:n})}))};S.propTypes={};var T=H()(Object(w.c)(),Object(L.a)())(S),j=t(115),V=t(114),I=t(113),K=t(169),F=function(e){var o=e.upvotes,t=e.downvotes,n=e.favorites,s=e.isUpvote,a=e.isDownvote,r=e.isFavorite?I.a:K.a;return i()("div",{className:"HistoryVotes AudienceResponse"},void 0,i()("div",{className:"ResponseButton ResponseButton--static"},void 0,i()("div",{className:"ResponseButton-content"},void 0,i()(V.a,{className:u()("HistoryVotes-icon",s&&"ResponseButton-icon--upvoted")}),i()("span",{className:"ResponseButton-count"},void 0,o.length))),i()("div",{className:"ResponseButton ResponseButton--static"},void 0,i()("div",{className:"ResponseButton-content"},void 0,i()(r,{className:"HistoryVotes-icon ResponseButton-icon--favorite"}),i()("span",{className:"ResponseButton-count"},void 0,n.length))),i()("div",{className:"ResponseButton ResponseButton--static"},void 0,i()("div",{className:"ResponseButton-content"},void 0,i()(j.a,{className:u()("HistoryVotes-icon",a&&"ResponseButton-icon--downvoted")}),i()("span",{className:"ResponseButton-count"},void 0,t.length))))};F.propTypes={};var J=F,_={beginDrag:function(e){var o=e.selection,t=e.media;return{media:function(e,o){return e.some(function(e){return e._id===o._id})}(o,t.media)?o:[t.media]}}},q=Object(O.DragSource)(B.MEDIA,_,function(e){return{connectDragSource:e.dragSource(),connectDragPreview:e.dragPreview()}}),x=function(e){function o(){for(var o,t=arguments.length,n=Array(t),s=0;s<t;s++)n[s]=arguments[s];return(o=e.call.apply(e,[this].concat(n))||this).state={showActions:!1},o.handleMouseEnter=function(){o.setState({showActions:!0})},o.handleMouseLeave=function(){o.setState({showActions:!1})},o.handleDoubleClick=function(){var e=o.props;(0,e.onOpenPreviewMediaDialog)(e.media.media)},o.handleKeyPress=function(e){"Space"===e.code&&(0,o.props.onClick)()},o}A()(o,e);var t=o.prototype;return t.componentDidMount=function(){(0,this.props.connectDragPreview)(Object(D.getEmptyImage)())},t.render=function(){var e=this.props,o=e.media,t=e.className,n=e.selection,s=e.connectDragSource,a=e.makeActions,r=e.onClick,c=this.state.showActions,d=o.media,l=o.timestamp,m=o.user,v=o.stats,w=e.selected?"is-selected":"",R=i()("div",{className:"MediaListRow-thumb"},void 0,i()("img",{className:"MediaListRow-image",src:d.thumbnail,alt:""}));return s(i()("div",{className:u()("MediaListRow","HistoryRow",t,w),onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,onDoubleClick:this.handleDoubleClick,onKeyPress:this.handleKeyPress,onClick:r},void 0,R,i()(k.a,{className:"HistoryRow-song",size:"mediaRow",artist:d.artist,title:d.title}),i()("div",{className:"HistoryRow-votes"},void 0,p.a.createElement(J,v)),i()("div",{className:"HistoryRow-user"},void 0,m.username),i()("div",{className:"HistoryRow-time",dateTime:l},void 0,i()(T,{timestamp:l})),c&&i()(b.a,{className:u()("MediaListRow-actions",w),selection:n,media:d,makeActions:a})))},o}(p.a.Component);x.defaultProps={selected:!1},x.propTypes={};var z=q(x),U=function(){return[]},$=y()(function(e){var o=e.onOpenAddMediaMenu;return{className:"RoomHistory-list",listComponent:"div",rowComponent:z,makeActions:o?function(e){return function(o,t){return i()(p.a.Fragment,{},void 0,i()(N.a,{onAdd:function(n){return e(n,o,t)}}))}}(o):U}})(M.a);$.propTypes={onOpenAddMediaMenu:v.a.func.isRequired};var G=$,Q=Object(w.c)(),W=function(e){var o=e.t,t=e.className,n=e.onCloseOverlay,a=e.onOpenAddMediaMenu,r=e.onOpenPreviewMediaDialog,d=c()(e,["t","className","onCloseOverlay","onOpenAddMediaMenu","onOpenPreviewMediaDialog"]);return i()("div",{className:u()("RoomHistory",t)},void 0,i()(R.a,{direction:"top",className:"AppRow AppRow--top",title:o("history.title"),onCloseOverlay:n}),i()(f.a,{className:"RoomHistory-body"},void 0,p.a.createElement(G,s()({onOpenAddMediaMenu:a,onOpenPreviewMediaDialog:r},d))))};W.propTypes={};o.default=Q(W)}}]);
//# sourceMappingURL=history_a60a210.js.map