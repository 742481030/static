(this["webpackJsonpcloudreve-frontend-pro"]=this["webpackJsonpcloudreve-frontend-pro"]||[]).push([[4],{5391:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(0),n=t.n(r),o=t(87),s=t(215),i=t(40),c=Object(o.a)((function(e){return{boxHeader:{textAlign:"center",padding:24},avatar:{backgroundColor:e.palette.secondary.main,margin:"0 auto",width:50,height:50},shareDes:{marginTop:12},shareInfo:{color:e.palette.text.disabled,fontSize:14}}}));function l(e){var a=c();return n.a.createElement("div",{className:a.boxHeader},n.a.createElement(s.a,{className:a.avatar,alt:e.share.creator.nick,src:"/api/v3/user/avatar/"+e.share.creator.key+"/l"}),n.a.createElement(i.a,{variant:"h6",className:a.shareDes},e.isFolder&&n.a.createElement(n.a.Fragment,null,"\u6b64\u5206\u4eab\u7531 ",e.share.creator.nick," \u521b\u5efa"),!e.isFolder&&n.a.createElement(n.a.Fragment,null," ",e.share.creator.nick," \u5411\u60a8\u5206\u4eab\u4e86 1 \u4e2a\u6587\u4ef6")),n.a.createElement(i.a,{className:a.shareInfo},e.share.views," \u6b21\u6d4f\u89c8 \u2022"," ",e.share.downloads," \u6b21\u4e0b\u8f7d \u2022"," ",e.share.expire>0?e.share.expire>=86400?Math.round(e.share.expire/86400)+" \u5929\u540e\u5230\u671f":Math.round(e.share.expire/3600)+" \u5c0f\u65f6\u540e\u5230\u671f":e.share.create_date))}},5804:function(e,a,t){"use strict";t.r(a);var r=t(22),n=t(23),o=t(25),s=t(24),i=t(26),c=t(3),l=t(0),p=t.n(l),d=t(8),u=t(16),h=t(5),m=t(46),g=t(40),b=t(387),f=t(7),v=t(142),k=t(50),w=t(17),x=t(288),y=t(9),E=t(20),j=t(5391),C=t(14),O=p.a.lazy((function(){return Promise.resolve().then(t.bind(null,304))})),S=p.a.lazy((function(){return Promise.resolve().then(t.bind(null,287))})),N=function(e){function a(){var e,t;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(i)))).state={anchorEl:null,open:!1,purchaseCallback:null,loading:!1},t.downloaded=!1,t.preview=function(){if(C.a.isSharePage(t.props.location.pathname)){var e=w.a.GetUser();if(!w.a.Check()&&e&&!e.group.shareDownload)return void t.props.toggleSnackbar("top","right","\u8bf7\u5148\u767b\u5f55","warning")}switch(Object(m.f)(t.props.share.source.name)){case"img":return void t.props.showImgPreivew({key:t.props.share.key,name:t.props.share.source.name});case"msDoc":return void t.props.history.push(t.props.share.key+"/doc?name="+encodeURIComponent(t.props.share.source.name));case"audio":return t.props.setSelectedTarget([{key:t.props.share.key,type:"share"}]),void t.props.openMusicDialog();case"video":return void t.props.history.push(t.props.share.key+"/video?name="+encodeURIComponent(t.props.share.source.name));case"edit":return void t.props.history.push(t.props.share.key+"/text?name="+encodeURIComponent(t.props.share.source.name));default:return void t.props.toggleSnackbar("top","right","\u6b64\u6587\u4ef6\u65e0\u6cd5\u9884\u89c8","warning")}},t.scoreHandle=function(e){return function(a){if(t.props.share.score>0){if(!w.a.Check())return void t.props.toggleSnackbar("top","right","\u767b\u5f55\u540e\u624d\u80fd\u7ee7\u7eed\u64cd\u4f5c","warning");if(!w.a.GetUser().group.shareFree&&!t.downloaded)return void t.setState({purchaseCallback:function(){t.setState({purchaseCallback:null}),e(a)}})}e(a)}},t.download=function(e){t.setState({loading:!0}),y.b.put("/share/download/"+t.props.share.key).then((function(e){t.downloaded=!0,window.location.assign(e.data)})).catch((function(e){t.props.toggleSnackbar("top","right",e.message,"warning")})).then((function(){t.setState({loading:!1})}))},t}return Object(i.a)(a,e),Object(n.a)(a,[{key:"componentWillUnmount",value:function(){this.props.setSelectedTarget([])}},{key:"render",value:function(){var e=this,a=this.props.classes,t=w.a.GetUser(),r=w.a.Check();return p.a.createElement("div",{className:a.layout},p.a.createElement(O,null),p.a.createElement(S,null),p.a.createElement(x.a,{callback:this.state.purchaseCallback,score:this.props.share.score,onClose:function(){return e.setState({purchaseCallback:null})}}),p.a.createElement("div",{className:a.box},p.a.createElement(j.a,{share:this.props.share}),p.a.createElement(v.a,null),p.a.createElement("div",{className:a.boxContent},p.a.createElement(k.a,{className:a.icon,isUpload:!0,fileName:this.props.share.source.name}),p.a.createElement("div",{className:a.fileName},p.a.createElement(g.a,{style:{wordBreak:"break-all"}},this.props.share.source.name),p.a.createElement(g.a,{className:a.fileSize},Object(u.q)(this.props.share.source.size)))),p.a.createElement(v.a,null),p.a.createElement("div",{className:a.boxFooter},p.a.createElement("div",{className:a.actionLeft},p.a.createElement(b.a,{onClick:function(){return e.props.openResave(e.props.share.key)},color:"secondary"},"\u4fdd\u5b58\u5230\u6211\u7684\u6587\u4ef6")),p.a.createElement("div",{className:a.actions},this.props.share.preview&&p.a.createElement(b.a,{variant:"outlined",color:"secondary",onClick:this.scoreHandle(this.preview),disabled:this.state.loading},"\u9884\u89c8"),p.a.createElement(b.a,{variant:"contained",color:"secondary",className:a.downloadButton,onClick:this.scoreHandle(this.download),disabled:this.state.loading},"\u4e0b\u8f7d",this.props.share.score>0&&(!r||!t.group.shareFree)&&" ("+this.props.share.score+"\u79ef\u5206)",this.props.share.score>0&&r&&t.group.shareFree&&" (\u514d\u79ef\u5206)")))))}}]),a}(l.Component),R=Object(d.b)((function(e){return{}}),(function(e){return{toggleSnackbar:function(a,t,r,n){e(Object(h.P)(a,t,r,n))},openMusicDialog:function(){e(Object(h.t)())},setSelectedTarget:function(a){e(Object(h.I)(a))},showImgPreivew:function(a){e(Object(h.N)(a))},openResave:function(a){e(Object(h.x)(a))}}}))(Object(f.a)((function(e){var a,t;return{layout:(a={width:"auto",marginTop:"90px",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(c.a)(a,e.breakpoints.up(1100+2*e.spacing(3)),{width:1100,marginTop:"90px",marginLeft:"auto",marginRight:"auto"}),Object(c.a)(a,e.breakpoints.down("sm"),{marginTop:0,marginLeft:0,marginRight:0}),Object(c.a)(a,"justifyContent","center"),Object(c.a)(a,"display","flex"),a),player:{borderRadius:"4px"},fileCotainer:{width:"200px",margin:"0 auto"},buttonCotainer:{width:"400px",margin:"0 auto",textAlign:"center",marginTop:"20px"},paper:{padding:e.spacing(2)},icon:{borderRadius:"10%",marginTop:2},box:(t={width:"100%",maxWidth:440,backgroundColor:e.palette.background.paper,borderRadius:12,boxShadow:"0 8px 16px rgba(29,39,55,.25)"},Object(c.a)(t,e.breakpoints.down("sm"),{height:"calc(100vh - 56px)",borderRadius:0,maxWidth:1e3}),Object(c.a)(t,"display","flex"),Object(c.a)(t,"flexDirection","column"),t),boxContent:{padding:24,display:"flex",flex:"1"},fileName:{marginLeft:20},fileSize:{color:e.palette.text.disabled,fontSize:14},boxFooter:{display:"flex",padding:"20px 16px",justifyContent:"space-between"},downloadButton:{marginLeft:8}}}))(Object(E.k)(N)));a.default=R}}]);
//# sourceMappingURL=4.3be8ef9c.chunk.js.map