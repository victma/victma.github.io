(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Nr18:function(t,e,r){"use strict";var n=r("S/j/"),o=r("d/Gc"),i=r("ne8i");t.exports=function(t){for(var e=n(this),r=i(e.length),a=arguments.length,c=o(a>1?arguments[1]:void 0,r),l=a>2?arguments[2]:void 0,d=void 0===l?r:o(l,r);d>c;)e[c++]=t;return e}},RXBc:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return D}));var n,o=r("q1tI"),i=r.n(o),a=r("+0cL"),c=r("jM3o"),l=(r("dRSK"),r("wTIg")),d=(r("bHtr"),r("MGXT")),s=r("qKvR"),u=Object(l.a)("path",{target:"e1genspl0"})({name:"1use8rk",styles:"cursor:pointer;transition:all 0.2s ease-out;"}),p=function(t){return Object(s.d)(u,{d:t.d,transform:t.transform,strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:1,fillOpacity:t.selected?1:0,onMouseEnter:function(){t.onHover(!0)},onMouseLeave:function(){t.onHover(!1)},onClick:function(){t.onClick()}})},b=function(t){return Object(s.d)("path",{d:t.d,transform:t.transform,strokeLinecap:"butt",strokeLinejoin:"miter",strokeOpacity:1,fill:d.a.map.unedibleFill,onClick:function(){t.onClick()}})};var g,h=Object(l.a)("svg",{target:"egeksdv0"})(((n={})[d.c.mediaQuery.l]={maxWidth:"100%"},n)),f=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).updateHovered=function(t,r){e.props.hovered(r?t:null)},e}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){var t=this;return Object(s.d)(h,{viewBox:"0 0 159.69495 99.785713",fill:d.a.map.fill,stroke:d.a.map.stroke,strokeWidth:.7,height:"100%"},this.props.parts.map((function(e){return e.description?Object(s.d)(p,{key:e.id,d:e.d,transform:e.transform,selected:t.props.selected===e.id,onHover:function(r){return t.updateHovered(e.id,r)},onClick:function(){return t.props.clicked(e.id)}}):Object(s.d)(b,{key:e.id,d:e.d,transform:e.transform,onClick:function(){return t.props.clicked(null)}})})))},n}(o.Component);r("f3/d");var m=Object(l.a)("div",{target:"e1ahnty90"})({name:"1bd0lmm",styles:"position:relative;display:inline-block;cursor:pointer;"}),j=Object(l.a)("div",{target:"e1ahnty91"})(((g={whiteSpace:"nowrap",opacity:0,textAlign:"center",padding:"0 8px",borderRadius:4,position:"absolute",zIndex:1,top:"100%",left:"50%",transform:"translateX(-50%)",transition:"opacity .4s"})[m+":hover &"]={opacity:1},g["&::after"]={content:'" "',position:"absolute",bottom:"100%",left:"50%",marginLeft:-8,borderWidth:8,borderStyle:"solid"},g["&>div, &>hr"]={margin:"8px 0"},g),(function(t){return{backgroundColor:t.background,color:t.color,"&::after":{borderColor:"transparent transparent "+t.background+" transparent"}}})),v=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={visible:!1},e}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.prototype.render=function(){return Object(s.d)(m,null,this.props.children,Object(s.d)(j,{background:this.props.background,color:this.props.color},this.props.title&&Object(s.d)(i.a.Fragment,null,Object(s.d)("div",null,this.props.title),Object(s.d)("hr",null)),"string"==typeof this.props.text?Object(s.d)("div",null,this.props.text):this.props.text.map((function(t){return Object(s.d)("div",null,t)}))))},n}(o.Component);v.defaultProps={background:"black",color:"white"};var O=v,k=Object(l.a)("p",{target:"enz2hrh0"})({fontSize:d.b.partName.nutrition,"& > :not([role=img])":{borderBottom:"2px dotted #444"}}),x=function(t){var e;return Object(s.d)(O,{title:t.title,text:t.tooltip,background:d.a.partName.text,color:d.a.background},Object(s.d)(k,null,Object(s.d)("span",{role:"img","aria-label":t.emojiAria},t.emoji)," ",Object(s.d)("span",null,null!==(e=t.value)&&void 0!==e?e:"-"," ",t.unit)))};x.defaultProps={unit:"%"};var y=x,w=Object(l.a)("p",{target:"e1sdauwx0"})({fontSize:d.b.partName.details,padding:8}),C=function(t){return Object(s.d)(w,null,Object(s.d)("b",null,"Cuisson : "),t.names.join(", "))},P=Object(l.a)("div",{target:"eg987r10"})("padding:8px 16px;border-radius:4px;margin:0 8px;",(function(t){return{color:t.color,backgroundColor:t.background}})),S=function(t){return Object(s.d)(P,{color:t.color,background:t.background},t.text)},_=Object(l.a)("div",{target:"e1isk7v90"})({name:"bwf6iq",styles:"display:flex;justify-content:center;margin:8px;"}),z=function(t){return Object(s.d)(_,null,t.attributes.lean&&Object(s.d)(S,{text:"Maigre",color:d.a.background,background:d.a.partName.badge.lean}),t.attributes.marble&&Object(s.d)(S,{text:"Persillé",color:d.a.background,background:d.a.partName.badge.marble}),t.attributes.gelatin&&Object(s.d)(S,{text:"Gelatineux",color:d.a.background,background:d.a.partName.badge.gelatin}))},N=Object(l.a)("span",{target:"e1ki7bo20"})({name:"1259b8f",styles:"@media (hover: hover){display:none;}"}),H=Object(l.a)("span",{target:"e1ki7bo21"})({name:"b0iqx8",styles:"@media (hover: none){display:none;}"});var A,F,L,R=function(t){return Object(s.d)(i.a.Fragment,null,Object(s.d)(N,null,t.nonHoverable),Object(s.d)(H,null,t.hoverable))};var q,I,Q=Object(l.a)("div",{target:"e5kgfh80"})({name:"ahknia",styles:"text-align:center;height:100%;box-sizing:border-box;overflow:hidden;position:relative;"}),M=Object(l.a)("p",{target:"e5kgfh81"})(((A={boxSizing:"border-box",position:"absolute",left:0,bottom:0,width:"100%",fontSize:24,padding:16,margin:0,background:d.a.partName.background,color:d.a.partName.text})[d.c.mediaQuery.l]={left:"50%",width:500,marginLeft:-250,bottom:32,borderRadius:500},A)),X=Object(l.a)("div",{target:"e5kgfh82"})({transition:"0.5s",margin:"0 auto",maxWidth:d.c.l},(function(t){return{transform:t.show?"translateY(0%)":"translateY(100%)"}})),B=Object(l.a)("h2",{target:"e5kgfh83"})(((F={display:"inline-block",boxSizing:"border-box",margin:0,width:"100%",padding:"32px 32px 16px",background:d.a.partName.background,borderRadius:"8px 8px 0 0"})[d.c.mediaQuery.l]={fontSize:36,width:"unset",margin:"0 32px",padding:"32px 64px 16px"},F)),G=Object(l.a)("div",{target:"e5kgfh84"})(((L={padding:"16px 32px 100%",margin:0,textAlign:"center",background:d.a.partName.background})[d.c.mediaQuery.l]={borderRadius:"8px 8px 0 0"},L)),W=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={label:"",description:"",nutrition:{},recipes:[],attributes:{}},e}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n.getDerivedStateFromProps=function(t,e){return t.name&&t.name!==e.label?{label:t.name,description:t.description,nutrition:t.nutrition,recipes:t.recipes,attributes:t.attributes}:null},n.prototype.render=function(){return console.log(this.state),Object(s.d)(Q,null,Object(s.d)(M,null,Object(s.d)(R,{hoverable:"Survolez la carte pour afficher les détails",nonHoverable:"Cliquez la carte pour afficher les détails"})),Object(s.d)(X,{show:this.props.name},Object(s.d)(B,null,this.state.label),Object(s.d)(G,null,this.state.nutrition.lipids&&Object(s.d)(y,{title:"Lipides",value:this.state.nutrition.lipids.value,emoji:"🍟",emojiAria:"Frites",tooltip:this.state.nutrition.lipids.text.length>0?this.state.nutrition.lipids.text:"Pas de données"}),this.state.recipes.length>0&&Object(s.d)(C,{names:this.state.recipes}),Object(s.d)(z,{attributes:this.state.attributes}),Object(s.d)("p",null,this.state.description))))},n}(o.Component);var J=Object(l.a)("div",{target:"e1hjbg4l0"})({name:"10klw3m",styles:"height:100%;"}),K=Object(l.a)("div",{target:"e1hjbg4l1"})(((q={height:"50%",boxSizing:"border-box",textAlign:"center",padding:"32px 32px 0px",overflowX:"scroll",overflowY:"hidden",direction:"rtl"})[d.c.mediaQuery.l]={height:"66.6%"},q)),Y=Object(l.a)("div",{target:"e1hjbg4l2"})(((I={height:"50%",boxSizing:"border-box"})[d.c.mediaQuery.l]={height:"33.3%"},I)),T=function(t){var e,r;function n(){for(var e,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))||this).state={hovered:null,selected:null},e.updateHoveredPiece=function(t){e.setState({hovered:t})},e.updateClickedPiece=function(t){e.setState({selected:e.state.selected===t?null:t})},e}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=n.prototype;return o.getFocusedPieceId=function(){return this.state.selected||this.state.hovered},o.getPieceProps=function(t){return null===t?{}:this.props.parts.find((function(e){return e.id===t}))},o.render=function(){var t=this;return Object(s.d)(J,null,Object(s.d)(K,null,Object(s.d)(f,{parts:this.props.parts,selected:this.getFocusedPieceId(),hovered:function(e){return t.updateHoveredPiece(e)},clicked:function(e){return t.updateClickedPiece(e)}})),Object(s.d)(Y,null,Object(s.d)(W,this.getPieceProps(this.getFocusedPieceId()))))},n}(o.Component),D=(e.default=function(t){var e=t.data;return Object(s.d)(a.a,null,Object(s.d)(c.a,{title:"Boeuf"}),Object(s.d)(T,{parts:e.mapsJson.parts}))},"976795179")},bHtr:function(t,e,r){var n=r("XKFU");n(n.P,"Array",{fill:r("Nr18")}),r("nGyu")("fill")}}]);
//# sourceMappingURL=component---src-pages-index-js-4d99079156d07f3770d2.js.map