// Compiled by ClojureScript 1.8.51 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = {};
o.warn = ((function (o){
return (function() { 
var G__19684__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19684 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19685__i = 0, G__19685__a = new Array(arguments.length -  0);
while (G__19685__i < G__19685__a.length) {G__19685__a[G__19685__i] = arguments[G__19685__i + 0]; ++G__19685__i;}
  args = new cljs.core.IndexedSeq(G__19685__a,0);
} 
return G__19684__delegate.call(this,args);};
G__19684.cljs$lang$maxFixedArity = 0;
G__19684.cljs$lang$applyTo = (function (arglist__19686){
var args = cljs.core.seq(arglist__19686);
return G__19684__delegate(args);
});
G__19684.cljs$core$IFn$_invoke$arity$variadic = G__19684__delegate;
return G__19684;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__19687__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__19687 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19688__i = 0, G__19688__a = new Array(arguments.length -  0);
while (G__19688__i < G__19688__a.length) {G__19688__a[G__19688__i] = arguments[G__19688__i + 0]; ++G__19688__i;}
  args = new cljs.core.IndexedSeq(G__19688__a,0);
} 
return G__19687__delegate.call(this,args);};
G__19687.cljs$lang$maxFixedArity = 0;
G__19687.cljs$lang$applyTo = (function (arglist__19689){
var args = cljs.core.seq(arglist__19689);
return G__19687__delegate(args);
});
G__19687.cljs$core$IFn$_invoke$arity$variadic = G__19687__delegate;
return G__19687;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1471014446422