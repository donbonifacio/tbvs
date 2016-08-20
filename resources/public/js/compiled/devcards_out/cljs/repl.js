// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28077_28091 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28078_28092 = null;
var count__28079_28093 = (0);
var i__28080_28094 = (0);
while(true){
if((i__28080_28094 < count__28079_28093)){
var f_28095 = cljs.core._nth.call(null,chunk__28078_28092,i__28080_28094);
cljs.core.println.call(null,"  ",f_28095);

var G__28096 = seq__28077_28091;
var G__28097 = chunk__28078_28092;
var G__28098 = count__28079_28093;
var G__28099 = (i__28080_28094 + (1));
seq__28077_28091 = G__28096;
chunk__28078_28092 = G__28097;
count__28079_28093 = G__28098;
i__28080_28094 = G__28099;
continue;
} else {
var temp__4657__auto___28100 = cljs.core.seq.call(null,seq__28077_28091);
if(temp__4657__auto___28100){
var seq__28077_28101__$1 = temp__4657__auto___28100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28077_28101__$1)){
var c__19270__auto___28102 = cljs.core.chunk_first.call(null,seq__28077_28101__$1);
var G__28103 = cljs.core.chunk_rest.call(null,seq__28077_28101__$1);
var G__28104 = c__19270__auto___28102;
var G__28105 = cljs.core.count.call(null,c__19270__auto___28102);
var G__28106 = (0);
seq__28077_28091 = G__28103;
chunk__28078_28092 = G__28104;
count__28079_28093 = G__28105;
i__28080_28094 = G__28106;
continue;
} else {
var f_28107 = cljs.core.first.call(null,seq__28077_28101__$1);
cljs.core.println.call(null,"  ",f_28107);

var G__28108 = cljs.core.next.call(null,seq__28077_28101__$1);
var G__28109 = null;
var G__28110 = (0);
var G__28111 = (0);
seq__28077_28091 = G__28108;
chunk__28078_28092 = G__28109;
count__28079_28093 = G__28110;
i__28080_28094 = G__28111;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28112 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__18459__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28112);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28112)))?cljs.core.second.call(null,arglists_28112):arglists_28112));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__28081 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28082 = null;
var count__28083 = (0);
var i__28084 = (0);
while(true){
if((i__28084 < count__28083)){
var vec__28085 = cljs.core._nth.call(null,chunk__28082,i__28084);
var name = cljs.core.nth.call(null,vec__28085,(0),null);
var map__28086 = cljs.core.nth.call(null,vec__28085,(1),null);
var map__28086__$1 = ((((!((map__28086 == null)))?((((map__28086.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28086.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28086):map__28086);
var doc = cljs.core.get.call(null,map__28086__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28086__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28113 = seq__28081;
var G__28114 = chunk__28082;
var G__28115 = count__28083;
var G__28116 = (i__28084 + (1));
seq__28081 = G__28113;
chunk__28082 = G__28114;
count__28083 = G__28115;
i__28084 = G__28116;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28081);
if(temp__4657__auto__){
var seq__28081__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28081__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__28081__$1);
var G__28117 = cljs.core.chunk_rest.call(null,seq__28081__$1);
var G__28118 = c__19270__auto__;
var G__28119 = cljs.core.count.call(null,c__19270__auto__);
var G__28120 = (0);
seq__28081 = G__28117;
chunk__28082 = G__28118;
count__28083 = G__28119;
i__28084 = G__28120;
continue;
} else {
var vec__28088 = cljs.core.first.call(null,seq__28081__$1);
var name = cljs.core.nth.call(null,vec__28088,(0),null);
var map__28089 = cljs.core.nth.call(null,vec__28088,(1),null);
var map__28089__$1 = ((((!((map__28089 == null)))?((((map__28089.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28089.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28089):map__28089);
var doc = cljs.core.get.call(null,map__28089__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28089__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28121 = cljs.core.next.call(null,seq__28081__$1);
var G__28122 = null;
var G__28123 = (0);
var G__28124 = (0);
seq__28081 = G__28121;
chunk__28082 = G__28122;
count__28083 = G__28123;
i__28084 = G__28124;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1471010646202