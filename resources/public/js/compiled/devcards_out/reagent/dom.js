// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__18459__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_20007 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_20007){
return (function (){
var _STAR_always_update_STAR_20008 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20008;
}});})(_STAR_always_update_STAR_20007))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_20007;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args20009 = [];
var len__19529__auto___20012 = arguments.length;
var i__19530__auto___20013 = (0);
while(true){
if((i__19530__auto___20013 < len__19529__auto___20012)){
args20009.push((arguments[i__19530__auto___20013]));

var G__20014 = (i__19530__auto___20013 + (1));
i__19530__auto___20013 = G__20014;
continue;
} else {
}
break;
}

var G__20011 = args20009.length;
switch (G__20011) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args20009.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
reagent.impl.template.find_dom_node = reagent.dom.dom_node;
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__20020_20024 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__20021_20025 = null;
var count__20022_20026 = (0);
var i__20023_20027 = (0);
while(true){
if((i__20023_20027 < count__20022_20026)){
var v_20028 = cljs.core._nth.call(null,chunk__20021_20025,i__20023_20027);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20028);

var G__20029 = seq__20020_20024;
var G__20030 = chunk__20021_20025;
var G__20031 = count__20022_20026;
var G__20032 = (i__20023_20027 + (1));
seq__20020_20024 = G__20029;
chunk__20021_20025 = G__20030;
count__20022_20026 = G__20031;
i__20023_20027 = G__20032;
continue;
} else {
var temp__4657__auto___20033 = cljs.core.seq.call(null,seq__20020_20024);
if(temp__4657__auto___20033){
var seq__20020_20034__$1 = temp__4657__auto___20033;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20020_20034__$1)){
var c__19270__auto___20035 = cljs.core.chunk_first.call(null,seq__20020_20034__$1);
var G__20036 = cljs.core.chunk_rest.call(null,seq__20020_20034__$1);
var G__20037 = c__19270__auto___20035;
var G__20038 = cljs.core.count.call(null,c__19270__auto___20035);
var G__20039 = (0);
seq__20020_20024 = G__20036;
chunk__20021_20025 = G__20037;
count__20022_20026 = G__20038;
i__20023_20027 = G__20039;
continue;
} else {
var v_20040 = cljs.core.first.call(null,seq__20020_20034__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_20040);

var G__20041 = cljs.core.next.call(null,seq__20020_20034__$1);
var G__20042 = null;
var G__20043 = (0);
var G__20044 = (0);
seq__20020_20024 = G__20041;
chunk__20021_20025 = G__20042;
count__20022_20026 = G__20043;
i__20023_20027 = G__20044;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1471014447638