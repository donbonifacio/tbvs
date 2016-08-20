// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards.core');
goog.require('cljs.core');
goog.require('devcards.util.edn_renderer');
goog.require('devcards.util.utils');
goog.require('devcards.system');
goog.require('cljs.core.async');
goog.require('cljs.test');
goog.require('devcards.util.markdown');
goog.require('sablono.core');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof devcards.core.devcard_event_chan !== 'undefined'){
} else {
devcards.core.devcard_event_chan = cljs.core.async.chan.call(null);
}
/**
 * Make a react Symbol the same way as React 0.14
 */
devcards.core.react_element_type_symbol = (function (){var or__18459__auto__ = (function (){var and__18447__auto__ = typeof Symbol !== 'undefined';
if(and__18447__auto__){
var and__18447__auto____$1 = cljs.core.fn_QMARK_.call(null,Symbol);
if(and__18447__auto____$1){
var and__18447__auto____$2 = (Symbol["for"]);
if(cljs.core.truth_(and__18447__auto____$2)){
return (Symbol["for"]).call(null,"react.element");
} else {
return and__18447__auto____$2;
}
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return (60103);
}
})();
/**
 * This event doesn't need to be fired for the system to run. It will just render
 * a little faster on reload if it is fired. Figwheel isn't required to run devcards.
 */
devcards.core.register_figwheel_listeners_BANG_ = (function devcards$core$register_figwheel_listeners_BANG_(){
if(typeof devcards.core.register_listeners_fig !== 'undefined'){
return null;
} else {
devcards.core.register_listeners_fig = (function (){
document.body.addEventListener("figwheel.js-reload",(function (p1__26236_SHARP_){
return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"jsreload","jsreload",331693051),p1__26236_SHARP_.detail], null));
}));

return true;
})()
;
}
});
devcards.core.assert_options_map = (function devcards$core$assert_options_map(m){
if(!(((m == null)) || (cljs.core.map_QMARK_.call(null,m)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),m], null)], null)], null);
} else {
return m;
}
});
devcards.core.start_devcard_ui_BANG__STAR_ = (function devcards$core$start_devcard_ui_BANG__STAR_(var_args){
var args26237 = [];
var len__19529__auto___26240 = arguments.length;
var i__19530__auto___26241 = (0);
while(true){
if((i__19530__auto___26241 < len__19529__auto___26240)){
args26237.push((arguments[i__19530__auto___26241]));

var G__26242 = (i__19530__auto___26241 + (1));
i__19530__auto___26241 = G__26242;
continue;
} else {
}
break;
}

var G__26239 = args26237.length;
switch (G__26239) {
case 0:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26237.length)].join('')));

}
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devcards.core.start_devcard_ui_BANG__STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$core$IFn$_invoke$arity$1 = (function (options){
if((cljs.core.map_QMARK_.call(null,options)) && (cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options)))){
cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),(function (opts){
return cljs.core.merge.call(null,opts,new cljs.core.Keyword(null,"default-card-options","default-card-options",1708667352).cljs$core$IFn$_invoke$arity$1(options));
}));
} else {
}

devcards.system.start_ui.call(null,devcards.core.devcard_event_chan);

return devcards.core.register_figwheel_listeners_BANG_.call(null);
});

devcards.core.start_devcard_ui_BANG__STAR_.cljs$lang$maxFixedArity = 1;
devcards.core.card_QMARK_ = (function devcards$core$card_QMARK_(c){
var and__18447__auto__ = cljs.core.map_QMARK_.call(null,c);
if(and__18447__auto__){
var map__26250 = c;
var map__26250__$1 = ((((!((map__26250 == null)))?((((map__26250.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26250.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26250):map__26250);
var path = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var func = cljs.core.get.call(null,map__26250__$1,new cljs.core.Keyword(null,"func","func",-238706040));
cljs.core.vector_QMARK_.call(null,path);

cljs.core.not_empty.call(null,path);

cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,path);

return cljs.core.fn_QMARK_.call(null,func);
} else {
return and__18447__auto__;
}
});
devcards.core.register_card = (function devcards$core$register_card(c){
if(cljs.core.truth_(devcards.core.card_QMARK_.call(null,c))){
} else {
throw (new Error("Assert failed: (card? c)"));
}


return cljs.core.async.put_BANG_.call(null,devcards.core.devcard_event_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-card","register-card",-1375971588),c], null));
});
devcards.core.react_raw = (function devcards$core$react_raw(raw_html_str){

return React.DOM.div(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(cljs.core.hash.call(null,raw_html_str))].join(''),new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),raw_html_str], null)], null)));
});

devcards.core.get_hljs = (function devcards$core$get_hljs(){
return (goog.global["hljs"]);
});
devcards.core.highlight_node = (function devcards$core$highlight_node(this$){
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,"code-ref");
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_hljs.call(null);
if(cljs.core.truth_(temp__4657__auto____$1)){
var hljs = temp__4657__auto____$1;
var temp__4657__auto____$2 = (hljs["highlightBlock"]);
if(cljs.core.truth_(temp__4657__auto____$2)){
var highlight_block = temp__4657__auto____$2;
return highlight_block.call(null,node);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
var base__25482__auto___26256 = {"componentDidMount": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "componentDidUpdate": (function (){
var this$ = this;
return devcards.core.highlight_node.call(null,this$);
}), "render": (function (){
var this$ = this;
return React.createElement("pre",{"className": (cljs.core.truth_(devcards.core.get_hljs.call(null))?"com-rigsomelight-devcards-code-highlighting":""), "key": cljs.core.hash.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))},React.createElement("code",{"className": (function (){var or__18459__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "";
}
})(), "ref": "code-ref"},sablono.interpreter.interpret.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"code","code",1586293142)))));
})};
if(typeof devcards.core.CodeHighlight !== 'undefined'){
} else {
devcards.core.CodeHighlight = React.createClass(base__25482__auto___26256);
}

var seq__26252_26257 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26253_26258 = null;
var count__26254_26259 = (0);
var i__26255_26260 = (0);
while(true){
if((i__26255_26260 < count__26254_26259)){
var property__25483__auto___26261 = cljs.core._nth.call(null,chunk__26253_26258,i__26255_26260);
if(cljs.core.truth_((base__25482__auto___26256[property__25483__auto___26261]))){
(devcards.core.CodeHighlight.prototype[property__25483__auto___26261] = (base__25482__auto___26256[property__25483__auto___26261]));
} else {
}

var G__26262 = seq__26252_26257;
var G__26263 = chunk__26253_26258;
var G__26264 = count__26254_26259;
var G__26265 = (i__26255_26260 + (1));
seq__26252_26257 = G__26262;
chunk__26253_26258 = G__26263;
count__26254_26259 = G__26264;
i__26255_26260 = G__26265;
continue;
} else {
var temp__4657__auto___26266 = cljs.core.seq.call(null,seq__26252_26257);
if(temp__4657__auto___26266){
var seq__26252_26267__$1 = temp__4657__auto___26266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26252_26267__$1)){
var c__19270__auto___26268 = cljs.core.chunk_first.call(null,seq__26252_26267__$1);
var G__26269 = cljs.core.chunk_rest.call(null,seq__26252_26267__$1);
var G__26270 = c__19270__auto___26268;
var G__26271 = cljs.core.count.call(null,c__19270__auto___26268);
var G__26272 = (0);
seq__26252_26257 = G__26269;
chunk__26253_26258 = G__26270;
count__26254_26259 = G__26271;
i__26255_26260 = G__26272;
continue;
} else {
var property__25483__auto___26273 = cljs.core.first.call(null,seq__26252_26267__$1);
if(cljs.core.truth_((base__25482__auto___26256[property__25483__auto___26273]))){
(devcards.core.CodeHighlight.prototype[property__25483__auto___26273] = (base__25482__auto___26256[property__25483__auto___26273]));
} else {
}

var G__26274 = cljs.core.next.call(null,seq__26252_26267__$1);
var G__26275 = null;
var G__26276 = (0);
var G__26277 = (0);
seq__26252_26257 = G__26274;
chunk__26253_26258 = G__26275;
count__26254_26259 = G__26276;
i__26255_26260 = G__26277;
continue;
}
} else {
}
}
break;
}
devcards.core.code_highlight = (function devcards$core$code_highlight(code_str,lang){
return React.createElement(devcards.core.CodeHighlight,{"code": code_str, "lang": lang});
});
if(typeof devcards.core.markdown_block__GT_react !== 'undefined'){
} else {
devcards.core.markdown_block__GT_react = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","markdown-block->react"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__26278){
var map__26279 = p__26278;
var map__26279__$1 = ((((!((map__26279 == null)))?((((map__26279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26279):map__26279);
var content = cljs.core.get.call(null,map__26279__$1,new cljs.core.Keyword(null,"content","content",15833224));
return devcards.core.react_raw.call(null,devcards.util.markdown.markdown_to_html.call(null,content));
}));
cljs.core._add_method.call(null,devcards.core.markdown_block__GT_react,new cljs.core.Keyword(null,"code-block","code-block",-2113425141),(function (p__26281){
var map__26282 = p__26281;
var map__26282__$1 = ((((!((map__26282 == null)))?((((map__26282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26282):map__26282);
var block = map__26282__$1;
var content = cljs.core.get.call(null,map__26282__$1,new cljs.core.Keyword(null,"content","content",15833224));
return React.createElement(devcards.core.CodeHighlight,{"code": new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(block), "lang": new cljs.core.Keyword(null,"lang","lang",-1819677104).cljs$core$IFn$_invoke$arity$1(block)});
}));
devcards.core.markdown__GT_react = (function devcards$core$markdown__GT_react(var_args){
var args__19536__auto__ = [];
var len__19529__auto___26285 = arguments.length;
var i__19530__auto___26286 = (0);
while(true){
if((i__19530__auto___26286 < len__19529__auto___26285)){
args__19536__auto__.push((arguments[i__19530__auto___26286]));

var G__26287 = (i__19530__auto___26286 + (1));
i__19530__auto___26286 = G__26287;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic = (function (strs){
var strs__$1 = cljs.core.map.call(null,(function (x){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.truth_(devcards.core.react_element_QMARK_.call(null,x))){
return null;
} else {
return [cljs.core.str("```clojure\n"),cljs.core.str(devcards.util.utils.pprint_code.call(null,x)),cljs.core.str("```\n")].join('');
}
}
}),strs);
if(cljs.core.every_QMARK_.call(null,cljs.core.string_QMARK_,strs__$1)){
var blocks = cljs.core.mapcat.call(null,devcards.util.markdown.parse_out_blocks,strs__$1);
return React.createElement("div",{"key": "devcards-markdown-block", "className": "com-rigsomelight-devcards-markdown com-rigsomelight-devcards-typog"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (blocks,strs__$1){
return (function (i,data){
return React.createElement("div",{"key": i},sablono.interpreter.interpret.call(null,devcards.core.markdown_block__GT_react.call(null,data)));
});})(blocks,strs__$1))
,blocks)));
} else {
var message = "Devcards Error: Didn't pass a seq of strings to less-sensitive-markdown.\n You are probably trying to pass react to markdown instead of strings. (defcard-doc (doc ...)) won't work.";
console.error(message);

return React.createElement("div",{"style": {"color": "#a94442"}, "key": "devcards-markdown-error"},sablono.interpreter.interpret.call(null,message));
}
});

devcards.core.markdown__GT_react.cljs$lang$maxFixedArity = (0);

devcards.core.markdown__GT_react.cljs$lang$applyTo = (function (seq26284){
return devcards.core.markdown__GT_react.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26284));
});
devcards.core.naked_card = (function devcards$core$naked_card(children,card){
var classname = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"classname","classname",777390796)], null));
var padding_QMARK_ = cljs.core.get_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"padding","padding",1660304693)], null));
return React.createElement("div",{"key": "devcards_naked-card", "className": (function (){var G__26289 = devcards.system.devcards_rendered_card_class;
var G__26289__$1 = (cljs.core.truth_(padding_QMARK_)?[cljs.core.str(G__26289),cljs.core.str(" com-rigsomelight-devcards-devcard-padding")].join(''):G__26289);
if(cljs.core.truth_(cljs.core.not_empty.call(null,classname))){
return [cljs.core.str(G__26289__$1),cljs.core.str(" "),cljs.core.str(classname)].join('');
} else {
return G__26289__$1;
}
})()},sablono.interpreter.interpret.call(null,children));
});
devcards.core.frame = (function devcards$core$frame(var_args){
var args26290 = [];
var len__19529__auto___26298 = arguments.length;
var i__19530__auto___26299 = (0);
while(true){
if((i__19530__auto___26299 < len__19529__auto___26298)){
args26290.push((arguments[i__19530__auto___26299]));

var G__26300 = (i__19530__auto___26299 + (1));
i__19530__auto___26299 = G__26300;
continue;
} else {
}
break;
}

var G__26292 = args26290.length;
switch (G__26292) {
case 1:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devcards.core.frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26290.length)].join('')));

}
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$1 = (function (children){
return devcards.core.frame.call(null,children,cljs.core.PersistentArrayMap.EMPTY);
});

devcards.core.frame.cljs$core$IFn$_invoke$arity$2 = (function (children,card){
var map__26293 = card;
var map__26293__$1 = ((((!((map__26293 == null)))?((((map__26293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26293):map__26293);
var path = cljs.core.get.call(null,map__26293__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var options = cljs.core.get.call(null,map__26293__$1,new cljs.core.Keyword(null,"options","options",99638489));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(options))){
if(new cljs.core.Keyword(null,"heading","heading",-1312171873).cljs$core$IFn$_invoke$arity$1(options) === false){
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("com-rigsomelight-devcards-card-base-no-pad "),cljs.core.str((cljs.core.truth_(new cljs.core.Keyword(null,"hide-border","hide-border",1463657151).cljs$core$IFn$_invoke$arity$1(options))?" com-rigsomelight-devcards-card-hide-border":null))].join('')], null))},sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
} else {
return React.createElement("div",{"key": cljs.core.prn_str.call(null,path), "className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad"},React.createElement("div",{"key": "devcards_frame-normal-body", "className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-typog"},(cljs.core.truth_(path)?sablono.interpreter.interpret.call(null,React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (map__26293,map__26293__$1,path,options){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(map__26293,map__26293__$1,path,options))
)},sablono.interpreter.interpret.call(null,cljs.core.name.call(null,cljs.core.last.call(null,path)))," ")):sablono.interpreter.interpret.call(null,(function (){var attrs26295 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(card);
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26295))?sablono.interpreter.attributes.call(null,attrs26295):null),((cljs.core.map_QMARK_.call(null,attrs26295))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26295)], null)));
})()))),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,children,card)));
}
} else {
return React.createElement("span",null);
}
});

devcards.core.frame.cljs$lang$maxFixedArity = 2;

/**
 * @interface
 */
devcards.core.IDevcardOptions = function(){};

devcards.core._devcard_options = (function devcards$core$_devcard_options(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcardOptions$_devcard_options$arity$2 == null)))){
return this$.devcards$core$IDevcardOptions$_devcard_options$arity$2(this$,devcard_opts);
} else {
var x__19122__auto__ = (((this$ == null))?null:this$);
var m__19123__auto__ = (devcards.core._devcard_options[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,this$,devcard_opts);
} else {
var m__19123__auto____$1 = (devcards.core._devcard_options["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcardOptions.-devcard-options",this$);
}
}
}
});


/**
 * @interface
 */
devcards.core.IDevcard = function(){};

devcards.core._devcard = (function devcards$core$_devcard(this$,devcard_opts){
if((!((this$ == null))) && (!((this$.devcards$core$IDevcard$_devcard$arity$2 == null)))){
return this$.devcards$core$IDevcard$_devcard$arity$2(this$,devcard_opts);
} else {
var x__19122__auto__ = (((this$ == null))?null:this$);
var m__19123__auto__ = (devcards.core._devcard[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,this$,devcard_opts);
} else {
var m__19123__auto____$1 = (devcards.core._devcard["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,this$,devcard_opts);
} else {
throw cljs.core.missing_protocol.call(null,"IDevcard.-devcard",this$);
}
}
}
});

devcards.core.ref__GT_node = (function devcards$core$ref__GT_node(this$,ref){
var temp__4657__auto__ = (this$.refs[ref]);
if(cljs.core.truth_(temp__4657__auto__)){
var comp = temp__4657__auto__;
return ReactDOM.findDOMNode(comp);
} else {
return null;
}
});
devcards.core.get_props = (function devcards$core$get_props(this$,k){
return (this$.props[cljs.core.name.call(null,k)]);
});
devcards.core.get_state = (function devcards$core$get_state(this$,k){
if(cljs.core.truth_(this$.state)){
return (this$.state[cljs.core.name.call(null,k)]);
} else {
return null;
}
});
var base__25482__auto___26307 = {"shouldComponentUpdate": (function (next_props,b){
var this$ = this;
var update_QMARK_ = cljs.core._EQ_.call(null,(next_props["change_count"]),devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"change_count","change_count",-533812109)));
return update_QMARK_;
}), "render": (function (){
var this$ = this;
var attrs26302 = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"children_thunk","children_thunk",-1161306645));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26302))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-dont-update"], null)], null),attrs26302)):{"className": "com-rigsomelight-dont-update"}),((cljs.core.map_QMARK_.call(null,attrs26302))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26302)], null)));
})};
if(typeof devcards.core.DontUpdate !== 'undefined'){
} else {
devcards.core.DontUpdate = React.createClass(base__25482__auto___26307);
}

var seq__26303_26308 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26304_26309 = null;
var count__26305_26310 = (0);
var i__26306_26311 = (0);
while(true){
if((i__26306_26311 < count__26305_26310)){
var property__25483__auto___26312 = cljs.core._nth.call(null,chunk__26304_26309,i__26306_26311);
if(cljs.core.truth_((base__25482__auto___26307[property__25483__auto___26312]))){
(devcards.core.DontUpdate.prototype[property__25483__auto___26312] = (base__25482__auto___26307[property__25483__auto___26312]));
} else {
}

var G__26313 = seq__26303_26308;
var G__26314 = chunk__26304_26309;
var G__26315 = count__26305_26310;
var G__26316 = (i__26306_26311 + (1));
seq__26303_26308 = G__26313;
chunk__26304_26309 = G__26314;
count__26305_26310 = G__26315;
i__26306_26311 = G__26316;
continue;
} else {
var temp__4657__auto___26317 = cljs.core.seq.call(null,seq__26303_26308);
if(temp__4657__auto___26317){
var seq__26303_26318__$1 = temp__4657__auto___26317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26303_26318__$1)){
var c__19270__auto___26319 = cljs.core.chunk_first.call(null,seq__26303_26318__$1);
var G__26320 = cljs.core.chunk_rest.call(null,seq__26303_26318__$1);
var G__26321 = c__19270__auto___26319;
var G__26322 = cljs.core.count.call(null,c__19270__auto___26319);
var G__26323 = (0);
seq__26303_26308 = G__26320;
chunk__26304_26309 = G__26321;
count__26305_26310 = G__26322;
i__26306_26311 = G__26323;
continue;
} else {
var property__25483__auto___26324 = cljs.core.first.call(null,seq__26303_26318__$1);
if(cljs.core.truth_((base__25482__auto___26307[property__25483__auto___26324]))){
(devcards.core.DontUpdate.prototype[property__25483__auto___26324] = (base__25482__auto___26307[property__25483__auto___26324]));
} else {
}

var G__26325 = cljs.core.next.call(null,seq__26303_26318__$1);
var G__26326 = null;
var G__26327 = (0);
var G__26328 = (0);
seq__26303_26308 = G__26325;
chunk__26304_26309 = G__26326;
count__26305_26310 = G__26327;
i__26306_26311 = G__26328;
continue;
}
} else {
}
}
break;
}
devcards.core.dont_update = (function devcards$core$dont_update(change_count,children_thunk){
return React.createElement(devcards.core.DontUpdate,{"change_count": change_count, "children_thunk": children_thunk});
});
devcards.core.wrangle_inital_data = (function devcards$core$wrangle_inital_data(this$){
var data = (function (){var or__18459__auto__ = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152)));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
if(((!((data == null)))?((((data.cljs$lang$protocol_mask$partition1$ & (16384))) || (data.cljs$core$IAtom$))?true:(((!data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,data))){
return data;
} else {
return cljs.core.atom.call(null,data);
}
});
devcards.core.get_data_atom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
return devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
}):(function (this$){
return devcards.core.wrangle_inital_data.call(null,this$);
}));
devcards.core.default_derive_main = (function devcards$core$default_derive_main(parent_elem,card,data_atom,change_count){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var main_obj_SINGLEQUOTE_ = (function (){var m = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.fn_QMARK_.call(null,m)){
return m.call(null,data_atom,parent_elem);
} else {
return m;
}
})();
var main_obj = (((!((main_obj_SINGLEQUOTE_ == null))) && (cljs.core.not.call(null,devcards.core.react_element_QMARK_.call(null,main_obj_SINGLEQUOTE_))))?devcards.core.code_highlight.call(null,devcards.util.utils.pprint_code.call(null,main_obj_SINGLEQUOTE_),"clojure"):main_obj_SINGLEQUOTE_);
if(new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308).cljs$core$IFn$_invoke$arity$1(options) === false){
return devcards.core.dont_update.call(null,change_count,main_obj);
} else {
return main_obj;
}
});
devcards.core.render_all_card_elements = (function devcards$core$render_all_card_elements(main,data_atom,card){
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
var hist_ctl = (cljs.core.truth_(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(options))?devcards.core.hist_recorder_STAR_.call(null,data_atom):null);
var document = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(temp__4657__auto__)){
var docu = temp__4657__auto__;
return devcards.core.markdown__GT_react.call(null,docu);
} else {
return null;
}
})();
var edn = (cljs.core.truth_(new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006).cljs$core$IFn$_invoke$arity$1(options))?devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom)):null);
var card__$1 = (((typeof main === 'string') || ((main == null)))?cljs.core.assoc_in.call(null,card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"hide-border","hide-border",1463657151)], null),true):card);
var main__$1 = React.createElement("div",{"key": "devcards-main-section"},sablono.interpreter.interpret.call(null,main));
var children = cljs.core.keep.call(null,cljs.core.identity,(function (){var x__19293__auto__ = document;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$1 = main__$1;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$2 = hist_ctl;
return cljs.core._conj.call(null,(function (){var x__19293__auto____$3 = edn;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto____$3);
})(),x__19293__auto____$2);
})(),x__19293__auto____$1);
})(),x__19293__auto__);
})());
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(options))){
return devcards.core.frame.call(null,children,card__$1);
} else {
return React.createElement("div",{"className": "com-rigsomelight-devcards-frameless"},sablono.interpreter.interpret.call(null,children));
}
});
var base__25482__auto___26335 = {"getInitialState": (function (){
return {"unique_id": cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-base-","devcards-base-",-1457268595,null)), "state_change_count": (0)};
}), "componentDidUpdate": (function (_,___$1){
var this$ = this;
var atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var options = new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(card);
if(cljs.core.truth_(new cljs.core.Keyword(null,"static-state","static-state",-1049492012).cljs$core$IFn$_invoke$arity$1(options))){
var initial_data = new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804).cljs$core$IFn$_invoke$arity$1(card);
var data = (cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,initial_data))?cljs.core.deref.call(null,initial_data):initial_data);
if(cljs.core.not_EQ_.call(null,cljs.core.deref.call(null,atom),data)){
return cljs.core.reset_BANG_.call(null,atom,data);
} else {
return null;
}
} else {
return null;
}
}), "componentWillMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return this$.setState((function (){var or__18459__auto__ = (function (){var and__18447__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(and__18447__auto__)){
return this$.state;
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return {"data_atom": devcards.core.wrangle_inital_data.call(null,this$)};
}
})());
}):(function (){
return null;
})), "componentWillUnmount": (function (){
var this$ = this;
var data_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_((function (){var and__18447__auto__ = data_atom;
if(cljs.core.truth_(and__18447__auto__)){
return id;
} else {
return and__18447__auto__;
}
})())){
return cljs.core.remove_watch.call(null,data_atom,id);
} else {
return null;
}
}), "componentDidMount": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
if(cljs.core.truth_(temp__4657__auto__)){
var data_atom = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
if(cljs.core.truth_(temp__4657__auto____$1)){
var id = temp__4657__auto____$1;
return cljs.core.add_watch.call(null,data_atom,id,((function (id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$){
return (function (_,___$1,___$2,___$3){
return this$.setState({"state_change_count": (devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612)) + (1))});
});})(id,temp__4657__auto____$1,data_atom,temp__4657__auto__,this$))
);
} else {
return null;
}
} else {
return null;
}
}):(function (){
return null;
})), "render": (function (){
var this$ = this;
var data_atom = devcards.core.get_data_atom.call(null,this$);
var card = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"card","card",-1430355152));
var change_count = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"state_change_count","state_change_count",-135095612));
var main = devcards.core.default_derive_main.call(null,this$,card,data_atom,change_count);
return devcards.core.render_all_card_elements.call(null,main,data_atom,card);
})};
if(typeof devcards.core.DevcardBase !== 'undefined'){
} else {
devcards.core.DevcardBase = React.createClass(base__25482__auto___26335);
}

var seq__26331_26336 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26332_26337 = null;
var count__26333_26338 = (0);
var i__26334_26339 = (0);
while(true){
if((i__26334_26339 < count__26333_26338)){
var property__25483__auto___26340 = cljs.core._nth.call(null,chunk__26332_26337,i__26334_26339);
if(cljs.core.truth_((base__25482__auto___26335[property__25483__auto___26340]))){
(devcards.core.DevcardBase.prototype[property__25483__auto___26340] = (base__25482__auto___26335[property__25483__auto___26340]));
} else {
}

var G__26341 = seq__26331_26336;
var G__26342 = chunk__26332_26337;
var G__26343 = count__26333_26338;
var G__26344 = (i__26334_26339 + (1));
seq__26331_26336 = G__26341;
chunk__26332_26337 = G__26342;
count__26333_26338 = G__26343;
i__26334_26339 = G__26344;
continue;
} else {
var temp__4657__auto___26345 = cljs.core.seq.call(null,seq__26331_26336);
if(temp__4657__auto___26345){
var seq__26331_26346__$1 = temp__4657__auto___26345;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26331_26346__$1)){
var c__19270__auto___26347 = cljs.core.chunk_first.call(null,seq__26331_26346__$1);
var G__26348 = cljs.core.chunk_rest.call(null,seq__26331_26346__$1);
var G__26349 = c__19270__auto___26347;
var G__26350 = cljs.core.count.call(null,c__19270__auto___26347);
var G__26351 = (0);
seq__26331_26336 = G__26348;
chunk__26332_26337 = G__26349;
count__26333_26338 = G__26350;
i__26334_26339 = G__26351;
continue;
} else {
var property__25483__auto___26352 = cljs.core.first.call(null,seq__26331_26346__$1);
if(cljs.core.truth_((base__25482__auto___26335[property__25483__auto___26352]))){
(devcards.core.DevcardBase.prototype[property__25483__auto___26352] = (base__25482__auto___26335[property__25483__auto___26352]));
} else {
}

var G__26353 = cljs.core.next.call(null,seq__26331_26346__$1);
var G__26354 = null;
var G__26355 = (0);
var G__26356 = (0);
seq__26331_26336 = G__26353;
chunk__26332_26337 = G__26354;
count__26333_26338 = G__26355;
i__26334_26339 = G__26356;
continue;
}
} else {
}
}
break;
}
devcards.core.render_into_dom = (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (this$){
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(temp__4657__auto__)){
var node_fn = temp__4657__auto__;
var temp__4657__auto____$1 = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto____$1)){
var node = temp__4657__auto____$1;
return node_fn.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),node);
} else {
return null;
}
} else {
return null;
}
}):cljs.core.identity);
var base__25482__auto___26361 = {"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-dom-component-","devcards-dom-component-",-730322144,null)))].join('')};
}), "componentDidUpdate": (function (prevP,prevS){
var this$ = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791));
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not_EQ_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"node_fn","node_fn",1182818791)),(prevP["node_fn"]));
} else {
return and__18447__auto__;
}
})())){
return devcards.core.render_into_dom.call(null,this$);
} else {
return null;
}
}), "componentWillUnmount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.ref__GT_node.call(null,this$,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329)));
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return ReactDOM.unmountComponentAtNode(node);
} else {
return null;
}
}), "componentDidMount": (function (){
var this$ = this;
return devcards.core.render_into_dom.call(null,this$);
}), "render": (cljs.core.truth_(devcards.util.utils.html_env_QMARK_.call(null))?(function (){
var this$ = this;
return React.DOM.div({"className": "com-rigsomelight-devcards-dom-node", "ref": devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329))},"Card has not mounted DOM node.");
}):(function (){
return React.DOM.div("Card has not mounted DOM node.");
}))};
if(typeof devcards.core.DomComponent !== 'undefined'){
} else {
devcards.core.DomComponent = React.createClass(base__25482__auto___26361);
}

var seq__26357_26362 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26358_26363 = null;
var count__26359_26364 = (0);
var i__26360_26365 = (0);
while(true){
if((i__26360_26365 < count__26359_26364)){
var property__25483__auto___26366 = cljs.core._nth.call(null,chunk__26358_26363,i__26360_26365);
if(cljs.core.truth_((base__25482__auto___26361[property__25483__auto___26366]))){
(devcards.core.DomComponent.prototype[property__25483__auto___26366] = (base__25482__auto___26361[property__25483__auto___26366]));
} else {
}

var G__26367 = seq__26357_26362;
var G__26368 = chunk__26358_26363;
var G__26369 = count__26359_26364;
var G__26370 = (i__26360_26365 + (1));
seq__26357_26362 = G__26367;
chunk__26358_26363 = G__26368;
count__26359_26364 = G__26369;
i__26360_26365 = G__26370;
continue;
} else {
var temp__4657__auto___26371 = cljs.core.seq.call(null,seq__26357_26362);
if(temp__4657__auto___26371){
var seq__26357_26372__$1 = temp__4657__auto___26371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26357_26372__$1)){
var c__19270__auto___26373 = cljs.core.chunk_first.call(null,seq__26357_26372__$1);
var G__26374 = cljs.core.chunk_rest.call(null,seq__26357_26372__$1);
var G__26375 = c__19270__auto___26373;
var G__26376 = cljs.core.count.call(null,c__19270__auto___26373);
var G__26377 = (0);
seq__26357_26362 = G__26374;
chunk__26358_26363 = G__26375;
count__26359_26364 = G__26376;
i__26360_26365 = G__26377;
continue;
} else {
var property__25483__auto___26378 = cljs.core.first.call(null,seq__26357_26372__$1);
if(cljs.core.truth_((base__25482__auto___26361[property__25483__auto___26378]))){
(devcards.core.DomComponent.prototype[property__25483__auto___26378] = (base__25482__auto___26361[property__25483__auto___26378]));
} else {
}

var G__26379 = cljs.core.next.call(null,seq__26357_26372__$1);
var G__26380 = null;
var G__26381 = (0);
var G__26382 = (0);
seq__26357_26362 = G__26379;
chunk__26358_26363 = G__26380;
count__26359_26364 = G__26381;
i__26360_26365 = G__26382;
continue;
}
} else {
}
}
break;
}
devcards.core.booler_QMARK_ = (function devcards$core$booler_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18459__auto__ = x === true;
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = x === false;
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
var or__18459__auto____$2 = (x == null);
if(or__18459__auto____$2){
return or__18459__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be boolean or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
}
});
devcards.core.stringer_QMARK_ = (function devcards$core$stringer_QMARK_(key,opts){
var x = cljs.core.get.call(null,opts,key);
var or__18459__auto__ = typeof x === 'string';
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = (x == null);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),key,new cljs.core.Keyword(null,"message","message",-406056002),"should be string or nil",new cljs.core.Keyword(null,"value","value",305978217),x], null);
}
}
});
devcards.core.react_element_QMARK_ = (function devcards$core$react_element_QMARK_(main_obj){
var or__18459__auto__ = (main_obj["_isReactElement"]);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core._EQ_.call(null,devcards.core.react_element_type_symbol,(main_obj["$$typeof"]));
}
});
devcards.core.validate_card_options = (function devcards$core$validate_card_options(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
var propagated_errors = cljs.core.get_in.call(null,opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)], null));
return cljs.core.filter.call(null,((function (propagated_errors){
return (function (p1__26383_SHARP_){
return !(p1__26383_SHARP_ === true);
});})(propagated_errors))
,(function (){var map__26392 = opts;
var map__26392__$1 = ((((!((map__26392 == null)))?((((map__26392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26392):map__26392);
var name = cljs.core.get.call(null,map__26392__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var main_obj = cljs.core.get.call(null,map__26392__$1,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742));
var initial_data = cljs.core.get.call(null,map__26392__$1,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804));
var options = cljs.core.get.call(null,map__26392__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.concat.call(null,propagated_errors,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var or__18459__auto__ = cljs.core.map_QMARK_.call(null,options);
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = (options == null);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"message","message",-406056002),"should be a Map or nil",new cljs.core.Keyword(null,"value","value",305978217),options], null);
}
}
})(),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"name","name",1843675177),opts),devcards.core.stringer_QMARK_.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999),opts),(function (){var or__18459__auto__ = (initial_data == null);
if(or__18459__auto__){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = cljs.core.vector_QMARK_.call(null,initial_data);
if(or__18459__auto____$1){
return or__18459__auto____$1;
} else {
var or__18459__auto____$2 = cljs.core.map_QMARK_.call(null,initial_data);
if(or__18459__auto____$2){
return or__18459__auto____$2;
} else {
var or__18459__auto____$3 = ((!((initial_data == null)))?((((initial_data.cljs$lang$protocol_mask$partition1$ & (16384))) || (initial_data.cljs$core$IAtom$))?true:(((!initial_data.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IAtom,initial_data));
if(or__18459__auto____$3){
return or__18459__auto____$3;
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.Keyword(null,"message","message",-406056002),"should be an Atom or a Map or nil.",new cljs.core.Keyword(null,"value","value",305978217),initial_data], null);
}
}
}
}
})()], null),cljs.core.mapv.call(null,((function (map__26392,map__26392__$1,name,main_obj,initial_data,options,propagated_errors){
return (function (p1__26384_SHARP_){
return devcards.core.booler_QMARK_.call(null,p1__26384_SHARP_,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(opts));
});})(map__26392,map__26392__$1,name,main_obj,initial_data,options,propagated_errors))
,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"heading","heading",-1312171873),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"inspect-data","inspect-data",640452006),new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"static-state","static-state",-1049492012)], null)));
})());
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Card should be a Map.",new cljs.core.Keyword(null,"value","value",305978217),opts], null)], null);
}
});
devcards.core.error_line = (function devcards$core$error_line(e){
return React.createElement("div",{"style": {"color": "#a94442", "display": "flex", "margin": "0.5em 0px"}},sablono.interpreter.interpret.call(null,React.createElement("code",{"style": {"flex": "1 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e))?cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(e)):null)))),React.createElement("span",{"style": {"flex": "3 100px", "marginRight": "10px"}},sablono.interpreter.interpret.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(e))),React.createElement("span",{"style": {"flex": "1 100px"}}," Received: ",(function (){var attrs26400 = cljs.core.pr_str.call(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(e));
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs26400))?sablono.interpreter.attributes.call(null,attrs26400):null),((cljs.core.map_QMARK_.call(null,attrs26400))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26400)], null)));
})()));
});
devcards.core.render_errors = (function devcards$core$render_errors(opts,errors){
return React.createElement("div",{"className": "com-rigsomelight-devcards-card-base-no-pad"},(function (){var attrs26404 = [cljs.core.str((((cljs.core.map_QMARK_.call(null,opts)) && (typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts) === 'string'))?[cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(opts)),cljs.core.str(": ")].join(''):null)),cljs.core.str("Devcard received bad options")].join('');
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26404))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-panel-heading","com-rigsomelight-devcards-fail"], null)], null),attrs26404)):{"className": "com-rigsomelight-devcards-panel-heading com-rigsomelight-devcards-fail"}),((cljs.core.map_QMARK_.call(null,attrs26404))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26404)], null)));
})(),sablono.interpreter.interpret.call(null,devcards.core.naked_card.call(null,React.createElement("div",null,(function (){var attrs26405 = cljs.core.map.call(null,devcards.core.error_line,errors);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26405))?sablono.interpreter.attributes.call(null,attrs26405):null),((cljs.core.map_QMARK_.call(null,attrs26405))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26405)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.map_QMARK_.call(null,opts))?(function (){var attrs26406 = devcards.util.edn_renderer.html_edn.call(null,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"propagated-errors","propagated-errors",1359777293)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26406))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-padding-top-border"], null)], null),attrs26406)):{"className": "com-rigsomelight-devcards-padding-top-border"}),((cljs.core.map_QMARK_.call(null,attrs26406))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26406)], null)));
})():null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),true], null)], null))));
});
devcards.core.add_environment_defaults = (function devcards$core$add_environment_defaults(card_options){
return cljs.core.update_in.call(null,card_options,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__26407_SHARP_){
return cljs.core.merge.call(null,new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state)),p1__26407_SHARP_);
}));
});
devcards.core.card_with_errors = (function devcards$core$card_with_errors(card_options){
var errors = devcards.core.validate_card_options.call(null,card_options);
if(cljs.core.truth_(cljs.core.not_empty.call(null,errors))){
return devcards.core.render_errors.call(null,card_options,errors);
} else {
return React.createElement(devcards.core.DevcardBase,{"card": devcards.core.add_environment_defaults.call(null,card_options)});
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.IdentiyOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.IdentiyOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k26409,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__26411 = (((k26409 instanceof cljs.core.Keyword))?k26409.fqn:null);
switch (G__26411) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26409,else__19084__auto__);

}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.IdentiyOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.IdentiyOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26408){
var self__ = this;
var G__26408__$1 = this;
return (new cljs.core.RecordIter((0),G__26408__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__26408){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__26412 = cljs.core.keyword_identical_QMARK_;
var expr__26413 = k__19089__auto__;
if(cljs.core.truth_(pred__26412.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26413))){
return (new devcards.core.IdentiyOptions(G__26408,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.IdentiyOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__26408),null));
}
});

devcards.core.IdentiyOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.IdentiyOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return opts;
});

devcards.core.IdentiyOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__26408){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.IdentiyOptions(self__.obj,G__26408,self__.__extmap,self__.__hash));
});

devcards.core.IdentiyOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.IdentiyOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.IdentiyOptions.cljs$lang$type = true;

devcards.core.IdentiyOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/IdentiyOptions");
});

devcards.core.IdentiyOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/IdentiyOptions");
});

devcards.core.__GT_IdentiyOptions = (function devcards$core$__GT_IdentiyOptions(obj){
return (new devcards.core.IdentiyOptions(obj,null,null,null));
});

devcards.core.map__GT_IdentiyOptions = (function devcards$core$map__GT_IdentiyOptions(G__26410){
return (new devcards.core.IdentiyOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26410),null,cljs.core.dissoc.call(null,G__26410,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_options = (function devcards$core$atom_like_options(main_obj,p__26416){
var map__26419 = p__26416;
var map__26419__$1 = ((((!((map__26419 == null)))?((((map__26419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26419):map__26419);
var devcard_opts = map__26419__$1;
var options = cljs.core.get.call(null,map__26419__$1,new cljs.core.Keyword(null,"options","options",99638489));
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),((function (map__26419,map__26419__$1,devcard_opts,options){
return (function (data_atom,_){
return devcards.util.edn_renderer.html_edn.call(null,cljs.core.deref.call(null,data_atom));
});})(map__26419,map__26419__$1,devcard_opts,options))
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),main_obj,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"history","history",-247395220),true], null),devcards.core.assert_options_map.call(null,options)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.AtomLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k26422,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__26424 = (((k26422 instanceof cljs.core.Keyword))?k26422.fqn:null);
switch (G__26424) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26422,else__19084__auto__);

}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.AtomLikeOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.AtomLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26421){
var self__ = this;
var G__26421__$1 = this;
return (new cljs.core.RecordIter((0),G__26421__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__26421){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__26425 = cljs.core.keyword_identical_QMARK_;
var expr__26426 = k__19089__auto__;
if(cljs.core.truth_(pred__26425.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26426))){
return (new devcards.core.AtomLikeOptions(G__26421,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.AtomLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__26421),null));
}
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.AtomLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,self__.obj,opts);
});

devcards.core.AtomLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__26421){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.AtomLikeOptions(self__.obj,G__26421,self__.__extmap,self__.__hash));
});

devcards.core.AtomLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.AtomLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.AtomLikeOptions.cljs$lang$type = true;

devcards.core.AtomLikeOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/AtomLikeOptions");
});

devcards.core.AtomLikeOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/AtomLikeOptions");
});

devcards.core.__GT_AtomLikeOptions = (function devcards$core$__GT_AtomLikeOptions(obj){
return (new devcards.core.AtomLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_AtomLikeOptions = (function devcards$core$map__GT_AtomLikeOptions(G__26423){
return (new devcards.core.AtomLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26423),null,cljs.core.dissoc.call(null,G__26423,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.edn_like_options = (function devcards$core$edn_like_options(main_obj,devcard_opts){
return cljs.core.assoc.call(null,devcard_opts,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.util.edn_renderer.html_edn.call(null,((((!((main_obj == null)))?((((main_obj.cljs$lang$protocol_mask$partition0$ & (32768))) || (main_obj.cljs$core$IDeref$))?true:(((!main_obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,main_obj)))?cljs.core.deref.call(null,main_obj):main_obj)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {devcards.core.IDevcardOptions}
*/
devcards.core.EdnLikeOptions = (function (obj,__meta,__extmap,__hash){
this.obj = obj;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__19081__auto__,k__19082__auto__){
var self__ = this;
var this__19081__auto____$1 = this;
return cljs.core._lookup.call(null,this__19081__auto____$1,k__19082__auto__,null);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__19083__auto__,k26432,else__19084__auto__){
var self__ = this;
var this__19083__auto____$1 = this;
var G__26434 = (((k26432 instanceof cljs.core.Keyword))?k26432.fqn:null);
switch (G__26434) {
case "obj":
return self__.obj;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k26432,else__19084__auto__);

}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__19095__auto__,writer__19096__auto__,opts__19097__auto__){
var self__ = this;
var this__19095__auto____$1 = this;
var pr_pair__19098__auto__ = ((function (this__19095__auto____$1){
return (function (keyval__19099__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,cljs.core.pr_writer,""," ","",opts__19097__auto__,keyval__19099__auto__);
});})(this__19095__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__19096__auto__,pr_pair__19098__auto__,"#devcards.core.EdnLikeOptions{",", ","}",opts__19097__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$ = true;

devcards.core.EdnLikeOptions.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__26431){
var self__ = this;
var G__26431__$1 = this;
return (new cljs.core.RecordIter((0),G__26431__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__19079__auto__){
var self__ = this;
var this__19079__auto____$1 = this;
return self__.__meta;
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__19075__auto__){
var self__ = this;
var this__19075__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__19085__auto__){
var self__ = this;
var this__19085__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__19076__auto__){
var self__ = this;
var this__19076__auto____$1 = this;
var h__18894__auto__ = self__.__hash;
if(!((h__18894__auto__ == null))){
return h__18894__auto__;
} else {
var h__18894__auto____$1 = cljs.core.hash_imap.call(null,this__19076__auto____$1);
self__.__hash = h__18894__auto____$1;

return h__18894__auto____$1;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__19077__auto__,other__19078__auto__){
var self__ = this;
var this__19077__auto____$1 = this;
if(cljs.core.truth_((function (){var and__18447__auto__ = other__19078__auto__;
if(cljs.core.truth_(and__18447__auto__)){
var and__18447__auto____$1 = (this__19077__auto____$1.constructor === other__19078__auto__.constructor);
if(and__18447__auto____$1){
return cljs.core.equiv_map.call(null,this__19077__auto____$1,other__19078__auto__);
} else {
return and__18447__auto____$1;
}
} else {
return and__18447__auto__;
}
})())){
return true;
} else {
return false;
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__19090__auto__,k__19091__auto__){
var self__ = this;
var this__19090__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"obj","obj",981763962),null], null), null),k__19091__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__19090__auto____$1),self__.__meta),k__19091__auto__);
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__19091__auto__)),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__19088__auto__,k__19089__auto__,G__26431){
var self__ = this;
var this__19088__auto____$1 = this;
var pred__26435 = cljs.core.keyword_identical_QMARK_;
var expr__26436 = k__19089__auto__;
if(cljs.core.truth_(pred__26435.call(null,new cljs.core.Keyword(null,"obj","obj",981763962),expr__26436))){
return (new devcards.core.EdnLikeOptions(G__26431,self__.__meta,self__.__extmap,null));
} else {
return (new devcards.core.EdnLikeOptions(self__.obj,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__19089__auto__,G__26431),null));
}
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__19093__auto__){
var self__ = this;
var this__19093__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"obj","obj",981763962),self__.obj],null))], null),self__.__extmap));
});

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$ = true;

devcards.core.EdnLikeOptions.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,self__.obj,devcard_opts);
});

devcards.core.EdnLikeOptions.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__19080__auto__,G__26431){
var self__ = this;
var this__19080__auto____$1 = this;
return (new devcards.core.EdnLikeOptions(self__.obj,G__26431,self__.__extmap,self__.__hash));
});

devcards.core.EdnLikeOptions.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__19086__auto__,entry__19087__auto__){
var self__ = this;
var this__19086__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__19087__auto__)){
return cljs.core._assoc.call(null,this__19086__auto____$1,cljs.core._nth.call(null,entry__19087__auto__,(0)),cljs.core._nth.call(null,entry__19087__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__19086__auto____$1,entry__19087__auto__);
}
});

devcards.core.EdnLikeOptions.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

devcards.core.EdnLikeOptions.cljs$lang$type = true;

devcards.core.EdnLikeOptions.cljs$lang$ctorPrSeq = (function (this__19115__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"devcards.core/EdnLikeOptions");
});

devcards.core.EdnLikeOptions.cljs$lang$ctorPrWriter = (function (this__19115__auto__,writer__19116__auto__){
return cljs.core._write.call(null,writer__19116__auto__,"devcards.core/EdnLikeOptions");
});

devcards.core.__GT_EdnLikeOptions = (function devcards$core$__GT_EdnLikeOptions(obj){
return (new devcards.core.EdnLikeOptions(obj,null,null,null));
});

devcards.core.map__GT_EdnLikeOptions = (function devcards$core$map__GT_EdnLikeOptions(G__26433){
return (new devcards.core.EdnLikeOptions(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(G__26433),null,cljs.core.dissoc.call(null,G__26433,new cljs.core.Keyword(null,"obj","obj",981763962)),null));
});

devcards.core.atom_like_QMARK_ = (function devcards$core$atom_like_QMARK_(x){
var and__18447__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition1$ & (2))) || (x.cljs$core$IWatchable$))?true:(((!x.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWatchable,x));
if(and__18447__auto__){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
} else {
return and__18447__auto__;
}
});
devcards.core.edn_like_QMARK_ = (function devcards$core$edn_like_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition0$ & (32768))) || (x.cljs$core$IDeref$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x);
}
});
devcards.core.coerce_to_devcards_options = (function devcards$core$coerce_to_devcards_options(main_obj){
if(((!((main_obj == null)))?(((false) || (main_obj.devcards$core$IDevcardOptions$))?true:(((!main_obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj):false)):cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcardOptions,main_obj))){
return main_obj;
} else {
if(cljs.core.truth_(devcards.core.atom_like_QMARK_.call(null,main_obj))){
return (new devcards.core.AtomLikeOptions(main_obj,null,null,null));
} else {
if(cljs.core.truth_(devcards.core.edn_like_QMARK_.call(null,main_obj))){
return (new devcards.core.EdnLikeOptions(main_obj,null,null,null));
} else {
return (new devcards.core.IdentiyOptions(main_obj,null,null,null));

}
}
}
});
devcards.core.card_base = (function devcards$core$card_base(opts){
var opts__$1 = cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_));
if((function (){var G__26450 = new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(!((G__26450 == null))){
if((false) || (G__26450.devcards$core$IDevcard$)){
return true;
} else {
if((!G__26450.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__26450);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devcards.core.IDevcard,G__26450);
}
})()){
return devcards.core._devcard.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1),opts__$1);
} else {
return devcards.core.card_with_errors.call(null,devcards.core._devcard_options.call(null,devcards.core.coerce_to_devcards_options.call(null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742).cljs$core$IFn$_invoke$arity$1(opts__$1)),opts__$1));
}
});
devcards.core.dom_node_STAR_ = (function devcards$core$dom_node_STAR_(node_fn){
return (function (data_atom,owner){
return React.createElement(devcards.core.DomComponent,{"node_fn": node_fn, "data_atom": data_atom});
});
});
(devcards.core.IDevcardOptions["string"] = true);

(devcards.core._devcard_options["string"] = (function (this$,devcard_opts){
return cljs.core.update_in.call(null,devcard_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742)], null),devcards.core.markdown__GT_react);
}));
cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentArrayMap.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentVector.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.PersistentHashSet.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.List.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.List.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.LazySeq.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Cons.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Cons.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.EmptyList.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.edn_like_options.call(null,this$__$1,devcard_opts);
});
cljs.core.Atom.prototype.devcards$core$IDevcardOptions$ = true;

cljs.core.Atom.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this$,devcard_opts){
var this$__$1 = this;
return devcards.core.atom_like_options.call(null,this$__$1,devcard_opts);
});
devcards.core.can_go_back = (function devcards$core$can_go_back(this$){
var map__26453 = cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)));
var map__26453__$1 = ((((!((map__26453 == null)))?((((map__26453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26453):map__26453);
var history = cljs.core.get.call(null,map__26453__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26453__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
return ((pointer + (1)) < cljs.core.count.call(null,history));
});
devcards.core.can_go_forward = (function devcards$core$can_go_forward(this$){
return (new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) > (0));
});
devcards.core.in_time_machine_QMARK_ = (function devcards$core$in_time_machine_QMARK_(this$){
return !((new cljs.core.Keyword(null,"pointer","pointer",85071187).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)))) === (0)));
});
devcards.core.back_in_history_BANG_ = (function devcards$core$back_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26457 = cljs.core.deref.call(null,history_atom);
var map__26457__$1 = ((((!((map__26457 == null)))?((((map__26457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26457):map__26457);
var history = cljs.core.get.call(null,map__26457__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26457__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_back.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer + (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer + (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.forward_in_history_BANG_ = (function devcards$core$forward_in_history_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26461 = cljs.core.deref.call(null,history_atom);
var map__26461__$1 = ((((!((map__26461 == null)))?((((map__26461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26461):map__26461);
var history = cljs.core.get.call(null,map__26461__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var pointer = cljs.core.get.call(null,map__26461__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(pointer - (1)),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.nth.call(null,history,(pointer - (1))));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.continue_on_BANG_ = (function devcards$core$continue_on_BANG_(this$){
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
var map__26465 = cljs.core.deref.call(null,history_atom);
var map__26465__$1 = ((((!((map__26465 == null)))?((((map__26465.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26465.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26465):map__26465);
var history = cljs.core.get.call(null,map__26465__$1,new cljs.core.Keyword(null,"history","history",-247395220));
if(cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))){
cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),true);

cljs.core.reset_BANG_.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)),cljs.core.first.call(null,history));

return this$.forceUpdate();
} else {
return null;
}
});
devcards.core.HistoryComponent = React.createClass({"getInitialState": (function (){
return {"unique_id": [cljs.core.str(cljs.core.gensym.call(null,new cljs.core.Symbol(null,"devcards-history-runner-","devcards-history-runner-",-1709703043,null)))].join(''), "history_atom": cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"pointer","pointer",85071187),(0)], null))};
}), "componentWillMount": (function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013)),cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220)], null),(function (){var x__19293__auto__ = cljs.core.deref.call(null,devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})());
}), "componentDidMount": (function (){
var this$ = this;
var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
var id = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"unique_id","unique_id",-796578329));
var history_atom = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"history_atom","history_atom",-533227013));
if(cljs.core.truth_((function (){var and__18447__auto__ = data_atom;
if(cljs.core.truth_(and__18447__auto__)){
return id;
} else {
return and__18447__auto__;
}
})())){
return cljs.core.add_watch.call(null,data_atom,id,((function (data_atom,id,history_atom,this$){
return (function (_,___$1,___$2,n){
if(cljs.core.truth_(devcards.core.in_time_machine_QMARK_.call(null,this$))){
return cljs.core.swap_BANG_.call(null,history_atom,((function (data_atom,id,history_atom,this$){
return (function (p__26467){
var map__26468 = p__26467;
var map__26468__$1 = ((((!((map__26468 == null)))?((((map__26468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26468):map__26468);
var ha = map__26468__$1;
var pointer = cljs.core.get.call(null,map__26468__$1,new cljs.core.Keyword(null,"pointer","pointer",85071187));
var history = cljs.core.get.call(null,map__26468__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var ignore_click = cljs.core.get.call(null,map__26468__$1,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927));
if(cljs.core.truth_(ignore_click)){
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
} else {
return cljs.core.assoc.call(null,ha,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var abridged_hist = cljs.core.drop.call(null,pointer,history);
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,abridged_hist))){
return cljs.core.cons.call(null,n,abridged_hist);
} else {
return abridged_hist;
}
})(),new cljs.core.Keyword(null,"pointer","pointer",85071187),(0));
}
});})(data_atom,id,history_atom,this$))
);
} else {
return cljs.core.swap_BANG_.call(null,history_atom,cljs.core.assoc,new cljs.core.Keyword(null,"history","history",-247395220),(function (){var hist = new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,history_atom));
if(cljs.core.not_EQ_.call(null,n,cljs.core.first.call(null,hist))){
return cljs.core.cons.call(null,n,hist);
} else {
return hist;
}
})(),new cljs.core.Keyword(null,"ignore-click","ignore-click",-875855927),false);
}
});})(data_atom,id,history_atom,this$))
);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
if(cljs.core.truth_((function (){var or__18459__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())){
return React.createElement("div",{"style": {"display": (cljs.core.truth_((function (){var or__18459__auto__ = devcards.core.can_go_back.call(null,this$);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return devcards.core.can_go_forward.call(null,this$);
}
})())?"block":"none")}, "className": "com-rigsomelight-devcards-history-control-bar"},(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.back_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_back.call(null,this$))?"visible":"hidden")}, "href": "#", "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-left"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

var data_atom = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"data_atom","data_atom",257894504));
return cljs.core.reset_BANG_.call(null,data_atom,cljs.core.deref.call(null,data_atom));
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-stop"},"")));
})(),(function (){var action = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.forward_in_history_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": action, "onTouchEnd": action},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-right"},"")));
})(),(function (){var listener = ((function (this$){
return (function (e){
e.preventDefault();

return devcards.core.continue_on_BANG_.call(null,this$);
});})(this$))
;
return sablono.interpreter.interpret.call(null,React.createElement("button",{"style": {"visibility": (cljs.core.truth_(devcards.core.can_go_forward.call(null,this$))?"visible":"hidden")}, "onClick": listener, "onTouchEnd": listener},React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-small-arrow"}),React.createElement("span",{"className": "com-rigsomelight-devcards-history-control-block"})));
})());
} else {
return null;
}
})});
devcards.core.hist_recorder_STAR_ = (function devcards$core$hist_recorder_STAR_(data_atom){
return React.createElement(devcards.core.HistoryComponent,{"data_atom": data_atom, "key": "devcards-history-control-bar"});
});
devcards.core.collect_test = (function devcards$core$collect_test(m){
return cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206)], null),cljs.core.conj,cljs.core.merge.call(null,cljs.core.select_keys.call(null,cljs.test.get_current_env.call(null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null)),m));
});
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"pass","pass",1574159993)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"fail","fail",1706214930)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"fail","fail",1706214930));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"error","error",-978969032)], null),(function (m){
cljs.test.inc_report_counter_BANG_.call(null,new cljs.core.Keyword(null,"error","error",-978969032));

devcards.core.collect_test.call(null,m);

return m;
}));
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463)], null),(function (m){
devcards.core.collect_test.call(null,m);

return m;
}));
devcards.core.run_test_block = (function devcards$core$run_test_block(f){
var _STAR_current_env_STAR_26483 = cljs.test._STAR_current_env_STAR_;
cljs.test._STAR_current_env_STAR_ = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));

try{f.call(null);

return cljs.test.get_current_env.call(null);
}finally {cljs.test._STAR_current_env_STAR_ = _STAR_current_env_STAR_26483;
}});
if(typeof devcards.core.test_render !== 'undefined'){
} else {
devcards.core.test_render = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.core","test-render"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"default","default",-1987822328),(function (m){
var attrs26484 = cljs.core.prn_str.call(null,m);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26484))?sablono.interpreter.attributes.call(null,attrs26484):null),((cljs.core.map_QMARK_.call(null,attrs26484))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26484)], null)));
}));
devcards.core.display_message = (function devcards$core$display_message(p__26485,body){
var map__26489 = p__26485;
var map__26489__$1 = ((((!((map__26489 == null)))?((((map__26489.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26489.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26489):map__26489);
var message = cljs.core.get.call(null,map__26489__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(message)){
return React.createElement("div",null,(function (){var attrs26491 = message;
return cljs.core.apply.call(null,React.createElement,"span",((cljs.core.map_QMARK_.call(null,attrs26491))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-message"], null)], null),attrs26491)):{"className": "com-rigsomelight-devcards-test-message"}),((cljs.core.map_QMARK_.call(null,attrs26491))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26491)], null)));
})(),sablono.interpreter.interpret.call(null,body));
} else {
return body;
}
});
devcards.core.render_pass_fail = (function devcards$core$render_pass_fail(p__26492){
var map__26500 = p__26492;
var map__26500__$1 = ((((!((map__26500 == null)))?((((map__26500.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26500.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26500):map__26500);
var m = map__26500__$1;
var expected = cljs.core.get.call(null,map__26500__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__26500__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var type = cljs.core.get.call(null,map__26500__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return devcards.core.display_message.call(null,m,(function (){var attrs26502 = React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,expected), "lang": "clojure"});
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26502))?sablono.interpreter.attributes.call(null,attrs26502):null),((cljs.core.map_QMARK_.call(null,attrs26502))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26502),sablono.interpreter.interpret.call(null,((cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"fail","fail",1706214930)))?React.createElement("div",{"style": {"marginTop": "5px"}},React.createElement("div",{"style": {"position": "absolute", "fontSize": "0.9em"}},"\u25B6"),React.createElement("div",{"style": {"marginLeft": "20px"}},sablono.interpreter.interpret.call(null,React.createElement(devcards.core.CodeHighlight,{"code": devcards.util.utils.pprint_code.call(null,actual), "lang": "clojure"})))):null))], null)));
})());
});
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"pass","pass",1574159993),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"fail","fail",1706214930),(function (m){
return devcards.core.render_pass_fail.call(null,m);
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"error","error",-978969032),(function (m){
return devcards.core.display_message.call(null,m,React.createElement("div",null,React.createElement("strong",null,"Error: "),(function (){var attrs26509 = [cljs.core.str(new cljs.core.Keyword(null,"actual","actual",107306363).cljs$core$IFn$_invoke$arity$1(m))].join('');
return cljs.core.apply.call(null,React.createElement,"code",((cljs.core.map_QMARK_.call(null,attrs26509))?sablono.interpreter.attributes.call(null,attrs26509):null),((cljs.core.map_QMARK_.call(null,attrs26509))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26509)], null)));
})()));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),(function (m){
var attrs26510 = devcards.core.markdown__GT_react.call(null,new cljs.core.Keyword(null,"documentation","documentation",1889593999).cljs$core$IFn$_invoke$arity$1(m));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26510))?sablono.interpreter.attributes.call(null,attrs26510):null),((cljs.core.map_QMARK_.call(null,attrs26510))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26510)], null)));
}));
cljs.core._add_method.call(null,devcards.core.test_render,new cljs.core.Keyword(null,"context","context",-830191113),(function (p__26511){
var map__26512 = p__26511;
var map__26512__$1 = ((((!((map__26512 == null)))?((((map__26512.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26512.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26512):map__26512);
var testing_contexts = cljs.core.get.call(null,map__26512__$1,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523));
var attrs26514 = cljs.core.interpose.call(null," / ",cljs.core.concat.call(null,cljs.core.map_indexed.call(null,((function (map__26512,map__26512__$1,testing_contexts){
return (function (i,t){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),i,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null)], null),t," "], null);
});})(map__26512,map__26512__$1,testing_contexts))
,cljs.core.reverse.call(null,cljs.core.rest.call(null,testing_contexts))),(function (){var x__19293__auto__ = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(-1)], null),cljs.core.first.call(null,testing_contexts)], null);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})()));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26514))?sablono.interpreter.attributes.call(null,attrs26514):null),((cljs.core.map_QMARK_.call(null,attrs26514))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26514)], null)));
}));
devcards.core.test_doc = (function devcards$core$test_doc(s){
return cljs.test.report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"test-doc","test-doc",1730699463),new cljs.core.Keyword(null,"documentation","documentation",1889593999),s], null));
});
devcards.core.test_renderer = (function devcards$core$test_renderer(t,i){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.call(null,t,i),new cljs.core.Keyword(null,"className","className",-1983287057),[cljs.core.str("com-rigsomelight-devcards-test-line com-rigsomelight-devcards-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t)))].join('')], null),devcards.core.test_render.call(null,t)], null);
});
devcards.core.layout_tests = (function devcards$core$layout_tests(tests){
var attrs26521 = new cljs.core.Keyword(null,"html-list","html-list",-2067090601).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,(function (p__26522,p__26523){
var map__26524 = p__26522;
var map__26524__$1 = ((((!((map__26524 == null)))?((((map__26524.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26524.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26524):map__26524);
var last_context = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"last-context","last-context",-820617548));
var html_list = cljs.core.get.call(null,map__26524__$1,new cljs.core.Keyword(null,"html-list","html-list",-2067090601));
var vec__26525 = p__26523;
var i = cljs.core.nth.call(null,vec__26525,(0),null);
var t = cljs.core.nth.call(null,vec__26525,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-context","last-context",-820617548),new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"html-list","html-list",-2067090601),(function (){var res = (function (){var x__19293__auto__ = devcards.core.test_renderer.call(null,t,i);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__19293__auto__);
})();
var res__$1 = ((cljs.core._EQ_.call(null,last_context,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?res:(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523).cljs$core$IFn$_invoke$arity$1(t)))?cljs.core.cons.call(null,devcards.core.test_renderer.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"context","context",-830191113)], null),cljs.core.select_keys.call(null,t,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null))),i),res):res));
return cljs.core.concat.call(null,html_list,res__$1);
})()], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.call(null,cljs.core.vector,cljs.core.reverse.call(null,tests))));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26521))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-test-card"], null)], null),attrs26521)):{"className": "com-rigsomelight-devcards-test-card"}),((cljs.core.map_QMARK_.call(null,attrs26521))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26521)], null)));
});
devcards.core.render_tests = (function devcards$core$render_tests(this$,path,test_summary){
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(test_summary);
var tests = new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary);
var some_tests = cljs.core.filter.call(null,((function (error_QMARK_,tests){
return (function (p__26539){
var map__26540 = p__26539;
var map__26540__$1 = ((((!((map__26540 == null)))?((((map__26540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26540):map__26540);
var type = cljs.core.get.call(null,map__26540__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core.not_EQ_.call(null,type,new cljs.core.Keyword(null,"test-doc","test-doc",1730699463));
});})(error_QMARK_,tests))
,new cljs.core.Keyword(null,"_devcards_collect_tests","_devcards_collect_tests",-1114031206).cljs$core$IFn$_invoke$arity$1(test_summary));
var total_tests = cljs.core.count.call(null,some_tests);
var map__26538 = new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(test_summary);
var map__26538__$1 = ((((!((map__26538 == null)))?((((map__26538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26538):map__26538);
var fail = cljs.core.get.call(null,map__26538__$1,new cljs.core.Keyword(null,"fail","fail",1706214930));
var pass = cljs.core.get.call(null,map__26538__$1,new cljs.core.Keyword(null,"pass","pass",1574159993));
var error = cljs.core.get.call(null,map__26538__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var error__$1 = (cljs.core.truth_(error_QMARK_)?(error + (1)):error);
return React.createElement("div",{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-card-base-no-pad com-rigsomelight-devcards-typog"},React.createElement("div",{"className": "com-rigsomelight-devcards-panel-heading"},React.createElement("a",{"href": "#", "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1){
return (function (){
return devcards.system.set_current_path_BANG_.call(null,devcards.system.app_state,path);
});})(error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1))
)},sablono.interpreter.interpret.call(null,(cljs.core.truth_(path)?[cljs.core.str(cljs.core.name.call(null,cljs.core.last.call(null,path)))].join(''):null))),React.createElement("button",{"style": {"float": "right", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": cljs.core.identity});
});})(error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,total_tests)),sablono.interpreter.interpret.call(null,((((fail + error__$1) === (0)))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#F7918E", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1){
return (function (p__26543){
var map__26544 = p__26543;
var map__26544__$1 = ((((!((map__26544 == null)))?((((map__26544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26544):map__26544);
var type = cljs.core.get.call(null,map__26544__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fail","fail",1706214930),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null).call(null,type);
});})(error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,[cljs.core.str((fail + error__$1))].join(''))))),sablono.interpreter.interpret.call(null,((((pass == null)) || ((pass === (0))))?null:React.createElement("button",{"style": {"float": "right", "backgroundColor": "#92C648", "color": "#fff", "margin": "3px 3px"}, "onClick": devcards.system.prevent__GT_.call(null,((function (error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1){
return (function (){
return this$.setState({"filter": ((function (error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1){
return (function (p__26546){
var map__26547 = p__26546;
var map__26547__$1 = ((((!((map__26547 == null)))?((((map__26547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26547):map__26547);
var type = cljs.core.get.call(null,map__26547__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"pass","pass",1574159993));
});})(error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1))
});
});})(error_QMARK_,tests,some_tests,total_tests,map__26538,map__26538__$1,fail,pass,error,error__$1))
), "className": "com-rigsomelight-devcards-badge"},sablono.interpreter.interpret.call(null,pass))))),React.createElement("div",{"className": devcards.system.devcards_rendered_card_class},sablono.interpreter.interpret.call(null,devcards.core.layout_tests.call(null,cljs.core.filter.call(null,(function (){var or__18459__auto__ = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.identity;
}
})(),tests)))));
});
devcards.core.test_timeout = (800);
if(typeof devcards.core.test_channel !== 'undefined'){
} else {
devcards.core.test_channel = cljs.core.async.chan.call(null);
}
devcards.core.run_card_tests = (function devcards$core$run_card_tests(test_thunks){
var out = cljs.core.async.chan.call(null);
var test_env = cljs.core.assoc.call(null,cljs.test.empty_env.call(null),new cljs.core.Keyword(null,"reporter","reporter",-805360621),new cljs.core.Keyword(null,"_devcards_test_card_reporter","_devcards_test_card_reporter",-1561437805));
cljs.test.set_env_BANG_.call(null,test_env);

var tests = cljs.core.concat.call(null,test_thunks,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (out,test_env){
return (function (){
cljs.core.async.put_BANG_.call(null,out,cljs.test.get_current_env.call(null));

return cljs.core.async.close_BANG_.call(null,out);
});})(out,test_env))
], null));
cljs.core.prn.call(null,"Running tests!!");

cljs.test.run_block.call(null,tests);

return out;
});
if(typeof devcards.core.test_loop !== 'undefined'){
} else {
devcards.core.test_loop = (function (){var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_26635){
var state_val_26636 = (state_26635[(1)]);
if((state_val_26636 === (7))){
var state_26635__$1 = state_26635;
var statearr_26637_26686 = state_26635__$1;
(statearr_26637_26686[(2)] = false);

(statearr_26637_26686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (20))){
var inst_26576 = (state_26635[(7)]);
var inst_26595 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26576);
var state_26635__$1 = state_26635;
var statearr_26638_26687 = state_26635__$1;
(statearr_26638_26687[(2)] = inst_26595);

(statearr_26638_26687[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (27))){
var inst_26600 = (state_26635[(8)]);
var inst_26610 = (state_26635[(9)]);
var inst_26614 = inst_26600.call(null,inst_26610);
var state_26635__$1 = state_26635;
var statearr_26639_26688 = state_26635__$1;
(statearr_26639_26688[(2)] = inst_26614);

(statearr_26639_26688[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (1))){
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(2),devcards.core.test_channel);
} else {
if((state_val_26636 === (24))){
var state_26635__$1 = state_26635;
var statearr_26640_26689 = state_26635__$1;
(statearr_26640_26689[(2)] = null);

(statearr_26640_26689[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (4))){
var state_26635__$1 = state_26635;
var statearr_26641_26690 = state_26635__$1;
(statearr_26641_26690[(2)] = false);

(statearr_26641_26690[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (15))){
var state_26635__$1 = state_26635;
var statearr_26642_26691 = state_26635__$1;
(statearr_26642_26691[(2)] = false);

(statearr_26642_26691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (21))){
var inst_26576 = (state_26635[(7)]);
var state_26635__$1 = state_26635;
var statearr_26643_26692 = state_26635__$1;
(statearr_26643_26692[(2)] = inst_26576);

(statearr_26643_26692[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (13))){
var inst_26633 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26635__$1,inst_26633);
} else {
if((state_val_26636 === (22))){
var inst_26599 = (state_26635[(10)]);
var inst_26598 = (state_26635[(2)]);
var inst_26599__$1 = cljs.core.get.call(null,inst_26598,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26600 = cljs.core.get.call(null,inst_26598,new cljs.core.Keyword(null,"callback","callback",-705136228));
var state_26635__$1 = (function (){var statearr_26644 = state_26635;
(statearr_26644[(8)] = inst_26600);

(statearr_26644[(10)] = inst_26599__$1);

return statearr_26644;
})();
if(cljs.core.truth_(inst_26599__$1)){
var statearr_26645_26693 = state_26635__$1;
(statearr_26645_26693[(1)] = (23));

} else {
var statearr_26646_26694 = state_26635__$1;
(statearr_26646_26694[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (29))){
var inst_26624 = (state_26635[(2)]);
var inst_26625 = cljs.test.clear_env_BANG_.call(null);
var state_26635__$1 = (function (){var statearr_26647 = state_26635;
(statearr_26647[(11)] = inst_26624);

(statearr_26647[(12)] = inst_26625);

return statearr_26647;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26635__$1,(30),devcards.core.test_channel);
} else {
if((state_val_26636 === (6))){
var state_26635__$1 = state_26635;
var statearr_26648_26695 = state_26635__$1;
(statearr_26648_26695[(2)] = true);

(statearr_26648_26695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (28))){
var inst_26600 = (state_26635[(8)]);
var inst_26616 = [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"actual","actual",107306363)];
var inst_26617 = [new cljs.core.Keyword(null,"error","error",-978969032),"Tests timed out. Please check Dev Console for Exceptions"];
var inst_26618 = cljs.core.PersistentHashMap.fromArrays(inst_26616,inst_26617);
var inst_26619 = devcards.core.collect_test.call(null,inst_26618);
var inst_26620 = cljs.test.get_current_env.call(null);
var inst_26621 = cljs.core.assoc.call(null,inst_26620,new cljs.core.Keyword(null,"error","error",-978969032),"Execution timed out!");
var inst_26622 = inst_26600.call(null,inst_26621);
var state_26635__$1 = (function (){var statearr_26649 = state_26635;
(statearr_26649[(13)] = inst_26619);

return statearr_26649;
})();
var statearr_26650_26696 = state_26635__$1;
(statearr_26650_26696[(2)] = inst_26622);

(statearr_26650_26696[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (25))){
var inst_26631 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26651_26697 = state_26635__$1;
(statearr_26651_26697[(2)] = inst_26631);

(statearr_26651_26697[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (17))){
var state_26635__$1 = state_26635;
var statearr_26652_26698 = state_26635__$1;
(statearr_26652_26698[(2)] = true);

(statearr_26652_26698[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (3))){
var inst_26553 = (state_26635[(14)]);
var inst_26558 = inst_26553.cljs$lang$protocol_mask$partition0$;
var inst_26559 = (inst_26558 & (64));
var inst_26560 = inst_26553.cljs$core$ISeq$;
var inst_26561 = (inst_26559) || (inst_26560);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26561)){
var statearr_26653_26699 = state_26635__$1;
(statearr_26653_26699[(1)] = (6));

} else {
var statearr_26654_26700 = state_26635__$1;
(statearr_26654_26700[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (12))){
var inst_26576 = (state_26635[(7)]);
var inst_26580 = (inst_26576 == null);
var inst_26581 = cljs.core.not.call(null,inst_26580);
var state_26635__$1 = state_26635;
if(inst_26581){
var statearr_26655_26701 = state_26635__$1;
(statearr_26655_26701[(1)] = (14));

} else {
var statearr_26656_26702 = state_26635__$1;
(statearr_26656_26702[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (2))){
var inst_26553 = (state_26635[(14)]);
var inst_26553__$1 = (state_26635[(2)]);
var inst_26555 = (inst_26553__$1 == null);
var inst_26556 = cljs.core.not.call(null,inst_26555);
var state_26635__$1 = (function (){var statearr_26657 = state_26635;
(statearr_26657[(14)] = inst_26553__$1);

return statearr_26657;
})();
if(inst_26556){
var statearr_26658_26703 = state_26635__$1;
(statearr_26658_26703[(1)] = (3));

} else {
var statearr_26659_26704 = state_26635__$1;
(statearr_26659_26704[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (23))){
var inst_26603 = (state_26635[(15)]);
var inst_26599 = (state_26635[(10)]);
var inst_26603__$1 = cljs.core.async.timeout.call(null,devcards.core.test_timeout);
var inst_26604 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26605 = devcards.core.run_card_tests.call(null,inst_26599);
var inst_26606 = [inst_26605,inst_26603__$1];
var inst_26607 = (new cljs.core.PersistentVector(null,2,(5),inst_26604,inst_26606,null));
var state_26635__$1 = (function (){var statearr_26660 = state_26635;
(statearr_26660[(15)] = inst_26603__$1);

return statearr_26660;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26635__$1,(26),inst_26607);
} else {
if((state_val_26636 === (19))){
var inst_26590 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26661_26705 = state_26635__$1;
(statearr_26661_26705[(2)] = inst_26590);

(statearr_26661_26705[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (11))){
var inst_26553 = (state_26635[(14)]);
var inst_26573 = (state_26635[(2)]);
var inst_26574 = cljs.core.get.call(null,inst_26573,new cljs.core.Keyword(null,"tests","tests",-1041085625));
var inst_26575 = cljs.core.get.call(null,inst_26573,new cljs.core.Keyword(null,"callback","callback",-705136228));
var inst_26576 = inst_26553;
var state_26635__$1 = (function (){var statearr_26662 = state_26635;
(statearr_26662[(7)] = inst_26576);

(statearr_26662[(16)] = inst_26575);

(statearr_26662[(17)] = inst_26574);

return statearr_26662;
})();
var statearr_26663_26706 = state_26635__$1;
(statearr_26663_26706[(2)] = null);

(statearr_26663_26706[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (9))){
var inst_26553 = (state_26635[(14)]);
var inst_26570 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26553);
var state_26635__$1 = state_26635;
var statearr_26664_26707 = state_26635__$1;
(statearr_26664_26707[(2)] = inst_26570);

(statearr_26664_26707[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (5))){
var inst_26568 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26568)){
var statearr_26665_26708 = state_26635__$1;
(statearr_26665_26708[(1)] = (9));

} else {
var statearr_26666_26709 = state_26635__$1;
(statearr_26666_26709[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (14))){
var inst_26576 = (state_26635[(7)]);
var inst_26583 = inst_26576.cljs$lang$protocol_mask$partition0$;
var inst_26584 = (inst_26583 & (64));
var inst_26585 = inst_26576.cljs$core$ISeq$;
var inst_26586 = (inst_26584) || (inst_26585);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26586)){
var statearr_26667_26710 = state_26635__$1;
(statearr_26667_26710[(1)] = (17));

} else {
var statearr_26668_26711 = state_26635__$1;
(statearr_26668_26711[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (26))){
var inst_26603 = (state_26635[(15)]);
var inst_26609 = (state_26635[(2)]);
var inst_26610 = cljs.core.nth.call(null,inst_26609,(0),null);
var inst_26611 = cljs.core.nth.call(null,inst_26609,(1),null);
var inst_26612 = cljs.core.not_EQ_.call(null,inst_26611,inst_26603);
var state_26635__$1 = (function (){var statearr_26669 = state_26635;
(statearr_26669[(9)] = inst_26610);

return statearr_26669;
})();
if(inst_26612){
var statearr_26670_26712 = state_26635__$1;
(statearr_26670_26712[(1)] = (27));

} else {
var statearr_26671_26713 = state_26635__$1;
(statearr_26671_26713[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (16))){
var inst_26593 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
if(cljs.core.truth_(inst_26593)){
var statearr_26672_26714 = state_26635__$1;
(statearr_26672_26714[(1)] = (20));

} else {
var statearr_26673_26715 = state_26635__$1;
(statearr_26673_26715[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (30))){
var inst_26627 = (state_26635[(2)]);
var inst_26576 = inst_26627;
var state_26635__$1 = (function (){var statearr_26674 = state_26635;
(statearr_26674[(7)] = inst_26576);

return statearr_26674;
})();
var statearr_26675_26716 = state_26635__$1;
(statearr_26675_26716[(2)] = null);

(statearr_26675_26716[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (10))){
var inst_26553 = (state_26635[(14)]);
var state_26635__$1 = state_26635;
var statearr_26676_26717 = state_26635__$1;
(statearr_26676_26717[(2)] = inst_26553);

(statearr_26676_26717[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (18))){
var state_26635__$1 = state_26635;
var statearr_26677_26718 = state_26635__$1;
(statearr_26677_26718[(2)] = false);

(statearr_26677_26718[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26636 === (8))){
var inst_26565 = (state_26635[(2)]);
var state_26635__$1 = state_26635;
var statearr_26678_26719 = state_26635__$1;
(statearr_26678_26719[(2)] = inst_26565);

(statearr_26678_26719[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var devcards$core$state_machine__20473__auto__ = null;
var devcards$core$state_machine__20473__auto____0 = (function (){
var statearr_26682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26682[(0)] = devcards$core$state_machine__20473__auto__);

(statearr_26682[(1)] = (1));

return statearr_26682;
});
var devcards$core$state_machine__20473__auto____1 = (function (state_26635){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_26635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e26683){if((e26683 instanceof Object)){
var ex__20476__auto__ = e26683;
var statearr_26684_26720 = state_26635;
(statearr_26684_26720[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26721 = state_26635;
state_26635 = G__26721;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
devcards$core$state_machine__20473__auto__ = function(state_26635){
switch(arguments.length){
case 0:
return devcards$core$state_machine__20473__auto____0.call(this);
case 1:
return devcards$core$state_machine__20473__auto____1.call(this,state_26635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$state_machine__20473__auto____0;
devcards$core$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$state_machine__20473__auto____1;
return devcards$core$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_26685 = f__21832__auto__.call(null);
(statearr_26685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_26685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
})();
}
devcards.core.test_card_test_run = (function devcards$core$test_card_test_run(this$,tests){
return cljs.core.async.put_BANG_.call(null,devcards.core.test_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tests","tests",-1041085625),tests,new cljs.core.Keyword(null,"callback","callback",-705136228),(function (results){
return this$.setState({"test_results": results});
})], null));
});
var base__25482__auto___26726 = {"componentWillMount": (function (){
var this$ = this;
var temp__4657__auto__ = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805));
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "componentWillReceiveProps": (function (next_props){
var this$ = this;
var temp__4657__auto__ = (next_props[cljs.core.name.call(null,new cljs.core.Keyword(null,"test_thunks","test_thunks",304669805))]);
if(cljs.core.truth_(temp__4657__auto__)){
var test_thunks = temp__4657__auto__;
return devcards.core.test_card_test_run.call(null,this$,test_thunks);
} else {
return null;
}
}), "render": (function (){
var this$ = this;
var test_summary = devcards.core.get_state.call(null,this$,new cljs.core.Keyword(null,"test_results","test_results",1062111317));
var path = devcards.core.get_props.call(null,this$,new cljs.core.Keyword(null,"path","path",-188191168));
return devcards.core.render_tests.call(null,this$,path,test_summary);
})};
if(typeof devcards.core.TestDevcard !== 'undefined'){
} else {
devcards.core.TestDevcard = React.createClass(base__25482__auto___26726);
}

var seq__26722_26727 = cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.list(new cljs.core.Symbol("cljs-react-reload.core","shouldComponentUpdate","cljs-react-reload.core/shouldComponentUpdate",-526191550,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillReceiveProps","cljs-react-reload.core/componentWillReceiveProps",-1087108864,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillMount","cljs-react-reload.core/componentWillMount",-1529759893,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidMount","cljs-react-reload.core/componentDidMount",-2035273110,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUpdate","cljs-react-reload.core/componentWillUpdate",-453323386,null),new cljs.core.Symbol("cljs-react-reload.core","componentDidUpdate","cljs-react-reload.core/componentDidUpdate",-6660227,null),new cljs.core.Symbol("cljs-react-reload.core","componentWillUnmount","cljs-react-reload.core/componentWillUnmount",-1549767430,null),new cljs.core.Symbol("cljs-react-reload.core","render","cljs-react-reload.core/render",298414516,null))));
var chunk__26723_26728 = null;
var count__26724_26729 = (0);
var i__26725_26730 = (0);
while(true){
if((i__26725_26730 < count__26724_26729)){
var property__25483__auto___26731 = cljs.core._nth.call(null,chunk__26723_26728,i__26725_26730);
if(cljs.core.truth_((base__25482__auto___26726[property__25483__auto___26731]))){
(devcards.core.TestDevcard.prototype[property__25483__auto___26731] = (base__25482__auto___26726[property__25483__auto___26731]));
} else {
}

var G__26732 = seq__26722_26727;
var G__26733 = chunk__26723_26728;
var G__26734 = count__26724_26729;
var G__26735 = (i__26725_26730 + (1));
seq__26722_26727 = G__26732;
chunk__26723_26728 = G__26733;
count__26724_26729 = G__26734;
i__26725_26730 = G__26735;
continue;
} else {
var temp__4657__auto___26736 = cljs.core.seq.call(null,seq__26722_26727);
if(temp__4657__auto___26736){
var seq__26722_26737__$1 = temp__4657__auto___26736;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26722_26737__$1)){
var c__19270__auto___26738 = cljs.core.chunk_first.call(null,seq__26722_26737__$1);
var G__26739 = cljs.core.chunk_rest.call(null,seq__26722_26737__$1);
var G__26740 = c__19270__auto___26738;
var G__26741 = cljs.core.count.call(null,c__19270__auto___26738);
var G__26742 = (0);
seq__26722_26727 = G__26739;
chunk__26723_26728 = G__26740;
count__26724_26729 = G__26741;
i__26725_26730 = G__26742;
continue;
} else {
var property__25483__auto___26743 = cljs.core.first.call(null,seq__26722_26737__$1);
if(cljs.core.truth_((base__25482__auto___26726[property__25483__auto___26743]))){
(devcards.core.TestDevcard.prototype[property__25483__auto___26743] = (base__25482__auto___26726[property__25483__auto___26743]));
} else {
}

var G__26744 = cljs.core.next.call(null,seq__26722_26737__$1);
var G__26745 = null;
var G__26746 = (0);
var G__26747 = (0);
seq__26722_26727 = G__26744;
chunk__26723_26728 = G__26745;
count__26724_26729 = G__26746;
i__26725_26730 = G__26747;
continue;
}
} else {
}
}
break;
}
devcards.core.test_card = (function devcards$core$test_card(var_args){
var args__19536__auto__ = [];
var len__19529__auto___26752 = arguments.length;
var i__19530__auto___26753 = (0);
while(true){
if((i__19530__auto___26753 < len__19529__auto___26752)){
args__19536__auto__.push((arguments[i__19530__auto___26753]));

var G__26754 = (i__19530__auto___26753 + (1));
i__19530__auto___26753 = G__26754;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic = (function (test_thunks){
if(typeof devcards.core.t_devcards$core26749 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {devcards.core.IDevcard}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
devcards.core.t_devcards$core26749 = (function (test_thunks,meta26750){
this.test_thunks = test_thunks;
this.meta26750 = meta26750;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
devcards.core.t_devcards$core26749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26751,meta26750__$1){
var self__ = this;
var _26751__$1 = this;
return (new devcards.core.t_devcards$core26749(self__.test_thunks,meta26750__$1));
});

devcards.core.t_devcards$core26749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26751){
var self__ = this;
var _26751__$1 = this;
return self__.meta26750;
});

devcards.core.t_devcards$core26749.prototype.devcards$core$IDevcard$ = true;

devcards.core.t_devcards$core26749.prototype.devcards$core$IDevcard$_devcard$arity$2 = (function (this$,devcard_opts){
var self__ = this;
var this$__$1 = this;
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(devcards.system._STAR_devcard_data_STAR_);
return React.createElement(devcards.core.TestDevcard,{"test_thunks": self__.test_thunks, "path": path});
});

devcards.core.t_devcards$core26749.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"test-thunks","test-thunks",2032684042,null),new cljs.core.Symbol(null,"meta26750","meta26750",364660246,null)], null);
});

devcards.core.t_devcards$core26749.cljs$lang$type = true;

devcards.core.t_devcards$core26749.cljs$lang$ctorStr = "devcards.core/t_devcards$core26749";

devcards.core.t_devcards$core26749.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"devcards.core/t_devcards$core26749");
});

devcards.core.__GT_t_devcards$core26749 = (function devcards$core$__GT_t_devcards$core26749(test_thunks__$1,meta26750){
return (new devcards.core.t_devcards$core26749(test_thunks__$1,meta26750));
});

}

return (new devcards.core.t_devcards$core26749(test_thunks,cljs.core.PersistentArrayMap.EMPTY));
});

devcards.core.test_card.cljs$lang$maxFixedArity = (0);

devcards.core.test_card.cljs$lang$applyTo = (function (seq26748){
return devcards.core.test_card.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26748));
});
devcards.core.get_front_matter = (function devcards$core$get_front_matter(munged_namespace){
return cljs.core.reduce.call(null,cljs.core.aget,goog.global,cljs.core.concat.call(null,clojure.string.split.call(null,cljs.core.name.call(null,munged_namespace),"."),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["front_matter"], null)));
});
devcards.core.get_cards_for_ns = (function devcards$core$get_cards_for_ns(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"cards","cards",169174038).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,devcards.system.app_state));
if(cljs.core.truth_(temp__4657__auto__)){
var cards = temp__4657__auto__;
var temp__4657__auto____$1 = cljs.core.get_in.call(null,cards,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,ns_symbol)], null));
if(cljs.core.truth_(temp__4657__auto____$1)){
var card = temp__4657__auto____$1;
return card;
} else {
return null;
}
} else {
return null;
}
});
devcards.core.load_data_from_channel_BANG_ = (function devcards$core$load_data_from_channel_BANG_(){
return devcards.system.load_data_from_channel_BANG_.call(null,devcards.core.devcard_event_chan);
});
goog.exportSymbol('devcards.core.load_data_from_channel_BANG_', devcards.core.load_data_from_channel_BANG_);
devcards.core.merge_front_matter_options_BANG_ = (function devcards$core$merge_front_matter_options_BANG_(ns_symbol){
var temp__4657__auto__ = new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756).cljs$core$IFn$_invoke$arity$1(devcards.core.get_front_matter.call(null,cljs.core.name.call(null,ns_symbol)));
if(cljs.core.truth_(temp__4657__auto__)){
var base_card_options = temp__4657__auto__;
cljs.core.println.call(null,"Adding base card options!",cljs.core.prn_str.call(null,base_card_options));

return cljs.core.swap_BANG_.call(null,devcards.system.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-card-options","base-card-options",141017756)], null),((function (base_card_options,temp__4657__auto__){
return (function (opts){
return cljs.core.merge.call(null,opts,base_card_options);
});})(base_card_options,temp__4657__auto__))
);
} else {
return null;
}
});
goog.exportSymbol('devcards.core.merge_front_matter_options_BANG_', devcards.core.merge_front_matter_options_BANG_);
devcards.core.render_namespace_to_string = (function devcards$core$render_namespace_to_string(ns_symbol){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return [cljs.core.str("<div id=\"com-rigsomelight-devcards-main\">"),cljs.core.str(React.renderToString((function (){var attrs26756 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),devcards.system.app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26756))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs26756)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs26756))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26756)], null)));
})())),cljs.core.str("</div>")].join('');
} else {
return null;
}
});
goog.exportSymbol('devcards.core.render_namespace_to_string', devcards.core.render_namespace_to_string);
devcards.core.render_ns = (function devcards$core$render_ns(ns_symbol,app_state){
var temp__4657__auto__ = devcards.core.get_cards_for_ns.call(null,ns_symbol);
if(cljs.core.truth_(temp__4657__auto__)){
var card = temp__4657__auto__;
return React.render((function (){var attrs26758 = devcards.system.render_cards.call(null,devcards.system.display_cards.call(null,card),app_state);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs26758))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["com-rigsomelight-devcards-base","com-rigsomelight-devcards-string-render"], null)], null),attrs26758)):{"className": "com-rigsomelight-devcards-base com-rigsomelight-devcards-string-render"}),((cljs.core.map_QMARK_.call(null,attrs26758))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs26758)], null)));
})(),devcards.system.devcards_app_node.call(null));
} else {
return null;
}
});
devcards.core.mount_namespace = (function devcards$core$mount_namespace(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_26788){
var state_val_26789 = (state_26788[(1)]);
if((state_val_26789 === (1))){
var inst_26779 = devcards.core.load_data_from_channel_BANG_.call(null);
var state_26788__$1 = state_26788;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26788__$1,(2),inst_26779);
} else {
if((state_val_26789 === (2))){
var inst_26781 = (state_26788[(2)]);
var inst_26782 = cljs.core.async.timeout.call(null,(100));
var state_26788__$1 = (function (){var statearr_26790 = state_26788;
(statearr_26790[(7)] = inst_26781);

return statearr_26790;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26788__$1,(3),inst_26782);
} else {
if((state_val_26789 === (3))){
var inst_26784 = (state_26788[(2)]);
var inst_26785 = (function (){return ((function (inst_26784,state_val_26789,c__21831__auto__){
return (function (){
return devcards.core.render_ns.call(null,ns_symbol,devcards.system.app_state);
});
;})(inst_26784,state_val_26789,c__21831__auto__))
})();
var inst_26786 = setTimeout(inst_26785,(0));
var state_26788__$1 = (function (){var statearr_26791 = state_26788;
(statearr_26791[(8)] = inst_26784);

return statearr_26791;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26788__$1,inst_26786);
} else {
return null;
}
}
}
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var devcards$core$mount_namespace_$_state_machine__20473__auto__ = null;
var devcards$core$mount_namespace_$_state_machine__20473__auto____0 = (function (){
var statearr_26795 = [null,null,null,null,null,null,null,null,null];
(statearr_26795[(0)] = devcards$core$mount_namespace_$_state_machine__20473__auto__);

(statearr_26795[(1)] = (1));

return statearr_26795;
});
var devcards$core$mount_namespace_$_state_machine__20473__auto____1 = (function (state_26788){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_26788);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e26796){if((e26796 instanceof Object)){
var ex__20476__auto__ = e26796;
var statearr_26797_26799 = state_26788;
(statearr_26797_26799[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26788);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26796;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26800 = state_26788;
state_26788 = G__26800;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
devcards$core$mount_namespace_$_state_machine__20473__auto__ = function(state_26788){
switch(arguments.length){
case 0:
return devcards$core$mount_namespace_$_state_machine__20473__auto____0.call(this);
case 1:
return devcards$core$mount_namespace_$_state_machine__20473__auto____1.call(this,state_26788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
devcards$core$mount_namespace_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = devcards$core$mount_namespace_$_state_machine__20473__auto____0;
devcards$core$mount_namespace_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = devcards$core$mount_namespace_$_state_machine__20473__auto____1;
return devcards$core$mount_namespace_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_26798 = f__21832__auto__.call(null);
(statearr_26798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_26798;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
goog.exportSymbol('devcards.core.mount_namespace', devcards.core.mount_namespace);
devcards.core.mount_namespace_live = (function devcards$core$mount_namespace_live(ns_symbol){
devcards.core.merge_front_matter_options_BANG_.call(null,ns_symbol);

return devcards.system.start_ui_with_renderer.call(null,devcards.core.devcard_event_chan,cljs.core.partial.call(null,devcards.core.render_ns,ns_symbol));
});
goog.exportSymbol('devcards.core.mount_namespace_live', devcards.core.mount_namespace_live);

//# sourceMappingURL=core.js.map?rel=1471010645386