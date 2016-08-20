// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__18459__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__18459__auto__){
return or__18459__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__18459__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__27053_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__27053_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__27058 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__27059 = null;
var count__27060 = (0);
var i__27061 = (0);
while(true){
if((i__27061 < count__27060)){
var n = cljs.core._nth.call(null,chunk__27059,i__27061);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27062 = seq__27058;
var G__27063 = chunk__27059;
var G__27064 = count__27060;
var G__27065 = (i__27061 + (1));
seq__27058 = G__27062;
chunk__27059 = G__27063;
count__27060 = G__27064;
i__27061 = G__27065;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27058);
if(temp__4657__auto__){
var seq__27058__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27058__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__27058__$1);
var G__27066 = cljs.core.chunk_rest.call(null,seq__27058__$1);
var G__27067 = c__19270__auto__;
var G__27068 = cljs.core.count.call(null,c__19270__auto__);
var G__27069 = (0);
seq__27058 = G__27066;
chunk__27059 = G__27067;
count__27060 = G__27068;
i__27061 = G__27069;
continue;
} else {
var n = cljs.core.first.call(null,seq__27058__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__27070 = cljs.core.next.call(null,seq__27058__$1);
var G__27071 = null;
var G__27072 = (0);
var G__27073 = (0);
seq__27058 = G__27070;
chunk__27059 = G__27071;
count__27060 = G__27072;
i__27061 = G__27073;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__27112_27119 = cljs.core.seq.call(null,deps);
var chunk__27113_27120 = null;
var count__27114_27121 = (0);
var i__27115_27122 = (0);
while(true){
if((i__27115_27122 < count__27114_27121)){
var dep_27123 = cljs.core._nth.call(null,chunk__27113_27120,i__27115_27122);
topo_sort_helper_STAR_.call(null,dep_27123,(depth + (1)),state);

var G__27124 = seq__27112_27119;
var G__27125 = chunk__27113_27120;
var G__27126 = count__27114_27121;
var G__27127 = (i__27115_27122 + (1));
seq__27112_27119 = G__27124;
chunk__27113_27120 = G__27125;
count__27114_27121 = G__27126;
i__27115_27122 = G__27127;
continue;
} else {
var temp__4657__auto___27128 = cljs.core.seq.call(null,seq__27112_27119);
if(temp__4657__auto___27128){
var seq__27112_27129__$1 = temp__4657__auto___27128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27112_27129__$1)){
var c__19270__auto___27130 = cljs.core.chunk_first.call(null,seq__27112_27129__$1);
var G__27131 = cljs.core.chunk_rest.call(null,seq__27112_27129__$1);
var G__27132 = c__19270__auto___27130;
var G__27133 = cljs.core.count.call(null,c__19270__auto___27130);
var G__27134 = (0);
seq__27112_27119 = G__27131;
chunk__27113_27120 = G__27132;
count__27114_27121 = G__27133;
i__27115_27122 = G__27134;
continue;
} else {
var dep_27135 = cljs.core.first.call(null,seq__27112_27129__$1);
topo_sort_helper_STAR_.call(null,dep_27135,(depth + (1)),state);

var G__27136 = cljs.core.next.call(null,seq__27112_27129__$1);
var G__27137 = null;
var G__27138 = (0);
var G__27139 = (0);
seq__27112_27119 = G__27136;
chunk__27113_27120 = G__27137;
count__27114_27121 = G__27138;
i__27115_27122 = G__27139;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__27116){
var vec__27118 = p__27116;
var x = cljs.core.nth.call(null,vec__27118,(0),null);
var xs = cljs.core.nthnext.call(null,vec__27118,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__27118,x,xs,get_deps__$1){
return (function (p1__27074_SHARP_){
return clojure.set.difference.call(null,p1__27074_SHARP_,x);
});})(vec__27118,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__27152 = cljs.core.seq.call(null,provides);
var chunk__27153 = null;
var count__27154 = (0);
var i__27155 = (0);
while(true){
if((i__27155 < count__27154)){
var prov = cljs.core._nth.call(null,chunk__27153,i__27155);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27156_27164 = cljs.core.seq.call(null,requires);
var chunk__27157_27165 = null;
var count__27158_27166 = (0);
var i__27159_27167 = (0);
while(true){
if((i__27159_27167 < count__27158_27166)){
var req_27168 = cljs.core._nth.call(null,chunk__27157_27165,i__27159_27167);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27168,prov);

var G__27169 = seq__27156_27164;
var G__27170 = chunk__27157_27165;
var G__27171 = count__27158_27166;
var G__27172 = (i__27159_27167 + (1));
seq__27156_27164 = G__27169;
chunk__27157_27165 = G__27170;
count__27158_27166 = G__27171;
i__27159_27167 = G__27172;
continue;
} else {
var temp__4657__auto___27173 = cljs.core.seq.call(null,seq__27156_27164);
if(temp__4657__auto___27173){
var seq__27156_27174__$1 = temp__4657__auto___27173;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27156_27174__$1)){
var c__19270__auto___27175 = cljs.core.chunk_first.call(null,seq__27156_27174__$1);
var G__27176 = cljs.core.chunk_rest.call(null,seq__27156_27174__$1);
var G__27177 = c__19270__auto___27175;
var G__27178 = cljs.core.count.call(null,c__19270__auto___27175);
var G__27179 = (0);
seq__27156_27164 = G__27176;
chunk__27157_27165 = G__27177;
count__27158_27166 = G__27178;
i__27159_27167 = G__27179;
continue;
} else {
var req_27180 = cljs.core.first.call(null,seq__27156_27174__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27180,prov);

var G__27181 = cljs.core.next.call(null,seq__27156_27174__$1);
var G__27182 = null;
var G__27183 = (0);
var G__27184 = (0);
seq__27156_27164 = G__27181;
chunk__27157_27165 = G__27182;
count__27158_27166 = G__27183;
i__27159_27167 = G__27184;
continue;
}
} else {
}
}
break;
}

var G__27185 = seq__27152;
var G__27186 = chunk__27153;
var G__27187 = count__27154;
var G__27188 = (i__27155 + (1));
seq__27152 = G__27185;
chunk__27153 = G__27186;
count__27154 = G__27187;
i__27155 = G__27188;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__27152);
if(temp__4657__auto__){
var seq__27152__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27152__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__27152__$1);
var G__27189 = cljs.core.chunk_rest.call(null,seq__27152__$1);
var G__27190 = c__19270__auto__;
var G__27191 = cljs.core.count.call(null,c__19270__auto__);
var G__27192 = (0);
seq__27152 = G__27189;
chunk__27153 = G__27190;
count__27154 = G__27191;
i__27155 = G__27192;
continue;
} else {
var prov = cljs.core.first.call(null,seq__27152__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__27160_27193 = cljs.core.seq.call(null,requires);
var chunk__27161_27194 = null;
var count__27162_27195 = (0);
var i__27163_27196 = (0);
while(true){
if((i__27163_27196 < count__27162_27195)){
var req_27197 = cljs.core._nth.call(null,chunk__27161_27194,i__27163_27196);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27197,prov);

var G__27198 = seq__27160_27193;
var G__27199 = chunk__27161_27194;
var G__27200 = count__27162_27195;
var G__27201 = (i__27163_27196 + (1));
seq__27160_27193 = G__27198;
chunk__27161_27194 = G__27199;
count__27162_27195 = G__27200;
i__27163_27196 = G__27201;
continue;
} else {
var temp__4657__auto___27202__$1 = cljs.core.seq.call(null,seq__27160_27193);
if(temp__4657__auto___27202__$1){
var seq__27160_27203__$1 = temp__4657__auto___27202__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27160_27203__$1)){
var c__19270__auto___27204 = cljs.core.chunk_first.call(null,seq__27160_27203__$1);
var G__27205 = cljs.core.chunk_rest.call(null,seq__27160_27203__$1);
var G__27206 = c__19270__auto___27204;
var G__27207 = cljs.core.count.call(null,c__19270__auto___27204);
var G__27208 = (0);
seq__27160_27193 = G__27205;
chunk__27161_27194 = G__27206;
count__27162_27195 = G__27207;
i__27163_27196 = G__27208;
continue;
} else {
var req_27209 = cljs.core.first.call(null,seq__27160_27203__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_27209,prov);

var G__27210 = cljs.core.next.call(null,seq__27160_27203__$1);
var G__27211 = null;
var G__27212 = (0);
var G__27213 = (0);
seq__27160_27193 = G__27210;
chunk__27161_27194 = G__27211;
count__27162_27195 = G__27212;
i__27163_27196 = G__27213;
continue;
}
} else {
}
}
break;
}

var G__27214 = cljs.core.next.call(null,seq__27152__$1);
var G__27215 = null;
var G__27216 = (0);
var G__27217 = (0);
seq__27152 = G__27214;
chunk__27153 = G__27215;
count__27154 = G__27216;
i__27155 = G__27217;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__27222_27226 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__27223_27227 = null;
var count__27224_27228 = (0);
var i__27225_27229 = (0);
while(true){
if((i__27225_27229 < count__27224_27228)){
var ns_27230 = cljs.core._nth.call(null,chunk__27223_27227,i__27225_27229);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27230);

var G__27231 = seq__27222_27226;
var G__27232 = chunk__27223_27227;
var G__27233 = count__27224_27228;
var G__27234 = (i__27225_27229 + (1));
seq__27222_27226 = G__27231;
chunk__27223_27227 = G__27232;
count__27224_27228 = G__27233;
i__27225_27229 = G__27234;
continue;
} else {
var temp__4657__auto___27235 = cljs.core.seq.call(null,seq__27222_27226);
if(temp__4657__auto___27235){
var seq__27222_27236__$1 = temp__4657__auto___27235;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27222_27236__$1)){
var c__19270__auto___27237 = cljs.core.chunk_first.call(null,seq__27222_27236__$1);
var G__27238 = cljs.core.chunk_rest.call(null,seq__27222_27236__$1);
var G__27239 = c__19270__auto___27237;
var G__27240 = cljs.core.count.call(null,c__19270__auto___27237);
var G__27241 = (0);
seq__27222_27226 = G__27238;
chunk__27223_27227 = G__27239;
count__27224_27228 = G__27240;
i__27225_27229 = G__27241;
continue;
} else {
var ns_27242 = cljs.core.first.call(null,seq__27222_27236__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_27242);

var G__27243 = cljs.core.next.call(null,seq__27222_27236__$1);
var G__27244 = null;
var G__27245 = (0);
var G__27246 = (0);
seq__27222_27226 = G__27243;
chunk__27223_27227 = G__27244;
count__27224_27228 = G__27245;
i__27225_27229 = G__27246;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__18459__auto__ = goog.require__;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__27247__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__27247 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27248__i = 0, G__27248__a = new Array(arguments.length -  0);
while (G__27248__i < G__27248__a.length) {G__27248__a[G__27248__i] = arguments[G__27248__i + 0]; ++G__27248__i;}
  args = new cljs.core.IndexedSeq(G__27248__a,0);
} 
return G__27247__delegate.call(this,args);};
G__27247.cljs$lang$maxFixedArity = 0;
G__27247.cljs$lang$applyTo = (function (arglist__27249){
var args = cljs.core.seq(arglist__27249);
return G__27247__delegate(args);
});
G__27247.cljs$core$IFn$_invoke$arity$variadic = G__27247__delegate;
return G__27247;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__27251 = cljs.core._EQ_;
var expr__27252 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__27251.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27252))){
var path_parts = ((function (pred__27251,expr__27252){
return (function (p1__27250_SHARP_){
return clojure.string.split.call(null,p1__27250_SHARP_,/[\/\\]/);
});})(pred__27251,expr__27252))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__27251,expr__27252){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27254){if((e27254 instanceof Error)){
var e = e27254;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e27254;

}
}})());
});
;})(path_parts,sep,root,pred__27251,expr__27252))
} else {
if(cljs.core.truth_(pred__27251.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27252))){
return ((function (pred__27251,expr__27252){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__27251,expr__27252){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__27251,expr__27252))
);

return deferred.addErrback(((function (deferred,pred__27251,expr__27252){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__27251,expr__27252))
);
});
;})(pred__27251,expr__27252))
} else {
return ((function (pred__27251,expr__27252){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__27251,expr__27252))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__27255,callback){
var map__27258 = p__27255;
var map__27258__$1 = ((((!((map__27258 == null)))?((((map__27258.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27258.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27258):map__27258);
var file_msg = map__27258__$1;
var request_url = cljs.core.get.call(null,map__27258__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__27258,map__27258__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__27258,map__27258__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_27282){
var state_val_27283 = (state_27282[(1)]);
if((state_val_27283 === (7))){
var inst_27278 = (state_27282[(2)]);
var state_27282__$1 = state_27282;
var statearr_27284_27304 = state_27282__$1;
(statearr_27284_27304[(2)] = inst_27278);

(statearr_27284_27304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27283 === (1))){
var state_27282__$1 = state_27282;
var statearr_27285_27305 = state_27282__$1;
(statearr_27285_27305[(2)] = null);

(statearr_27285_27305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27283 === (4))){
var inst_27262 = (state_27282[(7)]);
var inst_27262__$1 = (state_27282[(2)]);
var state_27282__$1 = (function (){var statearr_27286 = state_27282;
(statearr_27286[(7)] = inst_27262__$1);

return statearr_27286;
})();
if(cljs.core.truth_(inst_27262__$1)){
var statearr_27287_27306 = state_27282__$1;
(statearr_27287_27306[(1)] = (5));

} else {
var statearr_27288_27307 = state_27282__$1;
(statearr_27288_27307[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27283 === (6))){
var state_27282__$1 = state_27282;
var statearr_27289_27308 = state_27282__$1;
(statearr_27289_27308[(2)] = null);

(statearr_27289_27308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27283 === (3))){
var inst_27280 = (state_27282[(2)]);
var state_27282__$1 = state_27282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27282__$1,inst_27280);
} else {
if((state_val_27283 === (2))){
var state_27282__$1 = state_27282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27282__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_27283 === (11))){
var inst_27274 = (state_27282[(2)]);
var state_27282__$1 = (function (){var statearr_27290 = state_27282;
(statearr_27290[(8)] = inst_27274);

return statearr_27290;
})();
var statearr_27291_27309 = state_27282__$1;
(statearr_27291_27309[(2)] = null);

(statearr_27291_27309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27283 === (9))){
var inst_27268 = (state_27282[(9)]);
var inst_27266 = (state_27282[(10)]);
var inst_27270 = inst_27268.call(null,inst_27266);
var state_27282__$1 = state_27282;
var statearr_27292_27310 = state_27282__$1;
(statearr_27292_27310[(2)] = inst_27270);

(statearr_27292_27310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27283 === (5))){
var inst_27262 = (state_27282[(7)]);
var inst_27264 = figwheel.client.file_reloading.blocking_load.call(null,inst_27262);
var state_27282__$1 = state_27282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27282__$1,(8),inst_27264);
} else {
if((state_val_27283 === (10))){
var inst_27266 = (state_27282[(10)]);
var inst_27272 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_27266);
var state_27282__$1 = state_27282;
var statearr_27293_27311 = state_27282__$1;
(statearr_27293_27311[(2)] = inst_27272);

(statearr_27293_27311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27283 === (8))){
var inst_27268 = (state_27282[(9)]);
var inst_27262 = (state_27282[(7)]);
var inst_27266 = (state_27282[(2)]);
var inst_27267 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_27268__$1 = cljs.core.get.call(null,inst_27267,inst_27262);
var state_27282__$1 = (function (){var statearr_27294 = state_27282;
(statearr_27294[(9)] = inst_27268__$1);

(statearr_27294[(10)] = inst_27266);

return statearr_27294;
})();
if(cljs.core.truth_(inst_27268__$1)){
var statearr_27295_27312 = state_27282__$1;
(statearr_27295_27312[(1)] = (9));

} else {
var statearr_27296_27313 = state_27282__$1;
(statearr_27296_27313[(1)] = (10));

}

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
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__20473__auto__ = null;
var figwheel$client$file_reloading$state_machine__20473__auto____0 = (function (){
var statearr_27300 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27300[(0)] = figwheel$client$file_reloading$state_machine__20473__auto__);

(statearr_27300[(1)] = (1));

return statearr_27300;
});
var figwheel$client$file_reloading$state_machine__20473__auto____1 = (function (state_27282){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_27282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e27301){if((e27301 instanceof Object)){
var ex__20476__auto__ = e27301;
var statearr_27302_27314 = state_27282;
(statearr_27302_27314[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27315 = state_27282;
state_27282 = G__27315;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__20473__auto__ = function(state_27282){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__20473__auto____1.call(this,state_27282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__20473__auto____0;
figwheel$client$file_reloading$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__20473__auto____1;
return figwheel$client$file_reloading$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_27303 = f__21832__auto__.call(null);
(statearr_27303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_27303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__27316,callback){
var map__27319 = p__27316;
var map__27319__$1 = ((((!((map__27319 == null)))?((((map__27319.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27319.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27319):map__27319);
var file_msg = map__27319__$1;
var namespace = cljs.core.get.call(null,map__27319__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__27319,map__27319__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__27319,map__27319__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__27321){
var map__27324 = p__27321;
var map__27324__$1 = ((((!((map__27324 == null)))?((((map__27324.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27324.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27324):map__27324);
var file_msg = map__27324__$1;
var namespace = cljs.core.get.call(null,map__27324__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__18447__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__18447__auto__){
var or__18459__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
var or__18459__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__18459__auto____$1)){
return or__18459__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__18447__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__27326,callback){
var map__27329 = p__27326;
var map__27329__$1 = ((((!((map__27329 == null)))?((((map__27329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27329):map__27329);
var file_msg = map__27329__$1;
var request_url = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__27329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__21831__auto___27417 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___27417,out){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___27417,out){
return (function (state_27399){
var state_val_27400 = (state_27399[(1)]);
if((state_val_27400 === (1))){
var inst_27377 = cljs.core.nth.call(null,files,(0),null);
var inst_27378 = cljs.core.nthnext.call(null,files,(1));
var inst_27379 = files;
var state_27399__$1 = (function (){var statearr_27401 = state_27399;
(statearr_27401[(7)] = inst_27379);

(statearr_27401[(8)] = inst_27378);

(statearr_27401[(9)] = inst_27377);

return statearr_27401;
})();
var statearr_27402_27418 = state_27399__$1;
(statearr_27402_27418[(2)] = null);

(statearr_27402_27418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (2))){
var inst_27379 = (state_27399[(7)]);
var inst_27382 = (state_27399[(10)]);
var inst_27382__$1 = cljs.core.nth.call(null,inst_27379,(0),null);
var inst_27383 = cljs.core.nthnext.call(null,inst_27379,(1));
var inst_27384 = (inst_27382__$1 == null);
var inst_27385 = cljs.core.not.call(null,inst_27384);
var state_27399__$1 = (function (){var statearr_27403 = state_27399;
(statearr_27403[(11)] = inst_27383);

(statearr_27403[(10)] = inst_27382__$1);

return statearr_27403;
})();
if(inst_27385){
var statearr_27404_27419 = state_27399__$1;
(statearr_27404_27419[(1)] = (4));

} else {
var statearr_27405_27420 = state_27399__$1;
(statearr_27405_27420[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (3))){
var inst_27397 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27399__$1,inst_27397);
} else {
if((state_val_27400 === (4))){
var inst_27382 = (state_27399[(10)]);
var inst_27387 = figwheel.client.file_reloading.reload_js_file.call(null,inst_27382);
var state_27399__$1 = state_27399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27399__$1,(7),inst_27387);
} else {
if((state_val_27400 === (5))){
var inst_27393 = cljs.core.async.close_BANG_.call(null,out);
var state_27399__$1 = state_27399;
var statearr_27406_27421 = state_27399__$1;
(statearr_27406_27421[(2)] = inst_27393);

(statearr_27406_27421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (6))){
var inst_27395 = (state_27399[(2)]);
var state_27399__$1 = state_27399;
var statearr_27407_27422 = state_27399__$1;
(statearr_27407_27422[(2)] = inst_27395);

(statearr_27407_27422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27400 === (7))){
var inst_27383 = (state_27399[(11)]);
var inst_27389 = (state_27399[(2)]);
var inst_27390 = cljs.core.async.put_BANG_.call(null,out,inst_27389);
var inst_27379 = inst_27383;
var state_27399__$1 = (function (){var statearr_27408 = state_27399;
(statearr_27408[(7)] = inst_27379);

(statearr_27408[(12)] = inst_27390);

return statearr_27408;
})();
var statearr_27409_27423 = state_27399__$1;
(statearr_27409_27423[(2)] = null);

(statearr_27409_27423[(1)] = (2));


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
});})(c__21831__auto___27417,out))
;
return ((function (switch__20472__auto__,c__21831__auto___27417,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____0 = (function (){
var statearr_27413 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27413[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__);

(statearr_27413[(1)] = (1));

return statearr_27413;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____1 = (function (state_27399){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_27399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e27414){if((e27414 instanceof Object)){
var ex__20476__auto__ = e27414;
var statearr_27415_27424 = state_27399;
(statearr_27415_27424[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27425 = state_27399;
state_27399 = G__27425;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__ = function(state_27399){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____1.call(this,state_27399);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___27417,out))
})();
var state__21833__auto__ = (function (){var statearr_27416 = f__21832__auto__.call(null);
(statearr_27416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___27417);

return statearr_27416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___27417,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__27426,opts){
var map__27430 = p__27426;
var map__27430__$1 = ((((!((map__27430 == null)))?((((map__27430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27430):map__27430);
var eval_body__$1 = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__27430__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18447__auto__ = eval_body__$1;
if(cljs.core.truth_(and__18447__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__18447__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e27432){var e = e27432;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__27433_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27433_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__27438){
var vec__27439 = p__27438;
var k = cljs.core.nth.call(null,vec__27439,(0),null);
var v = cljs.core.nth.call(null,vec__27439,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__27440){
var vec__27441 = p__27440;
var k = cljs.core.nth.call(null,vec__27441,(0),null);
var v = cljs.core.nth.call(null,vec__27441,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__27445,p__27446){
var map__27693 = p__27445;
var map__27693__$1 = ((((!((map__27693 == null)))?((((map__27693.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27693.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27693):map__27693);
var opts = map__27693__$1;
var before_jsload = cljs.core.get.call(null,map__27693__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__27693__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__27693__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__27694 = p__27446;
var map__27694__$1 = ((((!((map__27694 == null)))?((((map__27694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27694):map__27694);
var msg = map__27694__$1;
var files = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__27694__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_27847){
var state_val_27848 = (state_27847[(1)]);
if((state_val_27848 === (7))){
var inst_27708 = (state_27847[(7)]);
var inst_27711 = (state_27847[(8)]);
var inst_27710 = (state_27847[(9)]);
var inst_27709 = (state_27847[(10)]);
var inst_27716 = cljs.core._nth.call(null,inst_27709,inst_27711);
var inst_27717 = figwheel.client.file_reloading.eval_body.call(null,inst_27716,opts);
var inst_27718 = (inst_27711 + (1));
var tmp27849 = inst_27708;
var tmp27850 = inst_27710;
var tmp27851 = inst_27709;
var inst_27708__$1 = tmp27849;
var inst_27709__$1 = tmp27851;
var inst_27710__$1 = tmp27850;
var inst_27711__$1 = inst_27718;
var state_27847__$1 = (function (){var statearr_27852 = state_27847;
(statearr_27852[(7)] = inst_27708__$1);

(statearr_27852[(8)] = inst_27711__$1);

(statearr_27852[(9)] = inst_27710__$1);

(statearr_27852[(10)] = inst_27709__$1);

(statearr_27852[(11)] = inst_27717);

return statearr_27852;
})();
var statearr_27853_27939 = state_27847__$1;
(statearr_27853_27939[(2)] = null);

(statearr_27853_27939[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (20))){
var inst_27751 = (state_27847[(12)]);
var inst_27759 = figwheel.client.file_reloading.sort_files.call(null,inst_27751);
var state_27847__$1 = state_27847;
var statearr_27854_27940 = state_27847__$1;
(statearr_27854_27940[(2)] = inst_27759);

(statearr_27854_27940[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (27))){
var state_27847__$1 = state_27847;
var statearr_27855_27941 = state_27847__$1;
(statearr_27855_27941[(2)] = null);

(statearr_27855_27941[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (1))){
var inst_27700 = (state_27847[(13)]);
var inst_27697 = before_jsload.call(null,files);
var inst_27698 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_27699 = (function (){return ((function (inst_27700,inst_27697,inst_27698,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27442_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27442_SHARP_);
});
;})(inst_27700,inst_27697,inst_27698,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27700__$1 = cljs.core.filter.call(null,inst_27699,files);
var inst_27701 = cljs.core.not_empty.call(null,inst_27700__$1);
var state_27847__$1 = (function (){var statearr_27856 = state_27847;
(statearr_27856[(13)] = inst_27700__$1);

(statearr_27856[(14)] = inst_27698);

(statearr_27856[(15)] = inst_27697);

return statearr_27856;
})();
if(cljs.core.truth_(inst_27701)){
var statearr_27857_27942 = state_27847__$1;
(statearr_27857_27942[(1)] = (2));

} else {
var statearr_27858_27943 = state_27847__$1;
(statearr_27858_27943[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (24))){
var state_27847__$1 = state_27847;
var statearr_27859_27944 = state_27847__$1;
(statearr_27859_27944[(2)] = null);

(statearr_27859_27944[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (39))){
var inst_27801 = (state_27847[(16)]);
var state_27847__$1 = state_27847;
var statearr_27860_27945 = state_27847__$1;
(statearr_27860_27945[(2)] = inst_27801);

(statearr_27860_27945[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (46))){
var inst_27842 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27861_27946 = state_27847__$1;
(statearr_27861_27946[(2)] = inst_27842);

(statearr_27861_27946[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (4))){
var inst_27745 = (state_27847[(2)]);
var inst_27746 = cljs.core.List.EMPTY;
var inst_27747 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_27746);
var inst_27748 = (function (){return ((function (inst_27745,inst_27746,inst_27747,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27443_SHARP_){
var and__18447__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__27443_SHARP_);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__27443_SHARP_));
} else {
return and__18447__auto__;
}
});
;})(inst_27745,inst_27746,inst_27747,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27749 = cljs.core.filter.call(null,inst_27748,files);
var inst_27750 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_27751 = cljs.core.concat.call(null,inst_27749,inst_27750);
var state_27847__$1 = (function (){var statearr_27862 = state_27847;
(statearr_27862[(17)] = inst_27745);

(statearr_27862[(18)] = inst_27747);

(statearr_27862[(12)] = inst_27751);

return statearr_27862;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_27863_27947 = state_27847__$1;
(statearr_27863_27947[(1)] = (16));

} else {
var statearr_27864_27948 = state_27847__$1;
(statearr_27864_27948[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (15))){
var inst_27735 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27865_27949 = state_27847__$1;
(statearr_27865_27949[(2)] = inst_27735);

(statearr_27865_27949[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (21))){
var inst_27761 = (state_27847[(19)]);
var inst_27761__$1 = (state_27847[(2)]);
var inst_27762 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_27761__$1);
var state_27847__$1 = (function (){var statearr_27866 = state_27847;
(statearr_27866[(19)] = inst_27761__$1);

return statearr_27866;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27847__$1,(22),inst_27762);
} else {
if((state_val_27848 === (31))){
var inst_27845 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27847__$1,inst_27845);
} else {
if((state_val_27848 === (32))){
var inst_27801 = (state_27847[(16)]);
var inst_27806 = inst_27801.cljs$lang$protocol_mask$partition0$;
var inst_27807 = (inst_27806 & (64));
var inst_27808 = inst_27801.cljs$core$ISeq$;
var inst_27809 = (inst_27807) || (inst_27808);
var state_27847__$1 = state_27847;
if(cljs.core.truth_(inst_27809)){
var statearr_27867_27950 = state_27847__$1;
(statearr_27867_27950[(1)] = (35));

} else {
var statearr_27868_27951 = state_27847__$1;
(statearr_27868_27951[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (40))){
var inst_27822 = (state_27847[(20)]);
var inst_27821 = (state_27847[(2)]);
var inst_27822__$1 = cljs.core.get.call(null,inst_27821,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_27823 = cljs.core.get.call(null,inst_27821,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_27824 = cljs.core.not_empty.call(null,inst_27822__$1);
var state_27847__$1 = (function (){var statearr_27869 = state_27847;
(statearr_27869[(21)] = inst_27823);

(statearr_27869[(20)] = inst_27822__$1);

return statearr_27869;
})();
if(cljs.core.truth_(inst_27824)){
var statearr_27870_27952 = state_27847__$1;
(statearr_27870_27952[(1)] = (41));

} else {
var statearr_27871_27953 = state_27847__$1;
(statearr_27871_27953[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (33))){
var state_27847__$1 = state_27847;
var statearr_27872_27954 = state_27847__$1;
(statearr_27872_27954[(2)] = false);

(statearr_27872_27954[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (13))){
var inst_27721 = (state_27847[(22)]);
var inst_27725 = cljs.core.chunk_first.call(null,inst_27721);
var inst_27726 = cljs.core.chunk_rest.call(null,inst_27721);
var inst_27727 = cljs.core.count.call(null,inst_27725);
var inst_27708 = inst_27726;
var inst_27709 = inst_27725;
var inst_27710 = inst_27727;
var inst_27711 = (0);
var state_27847__$1 = (function (){var statearr_27873 = state_27847;
(statearr_27873[(7)] = inst_27708);

(statearr_27873[(8)] = inst_27711);

(statearr_27873[(9)] = inst_27710);

(statearr_27873[(10)] = inst_27709);

return statearr_27873;
})();
var statearr_27874_27955 = state_27847__$1;
(statearr_27874_27955[(2)] = null);

(statearr_27874_27955[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (22))){
var inst_27761 = (state_27847[(19)]);
var inst_27769 = (state_27847[(23)]);
var inst_27764 = (state_27847[(24)]);
var inst_27765 = (state_27847[(25)]);
var inst_27764__$1 = (state_27847[(2)]);
var inst_27765__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27764__$1);
var inst_27766 = (function (){var all_files = inst_27761;
var res_SINGLEQUOTE_ = inst_27764__$1;
var res = inst_27765__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_27761,inst_27769,inst_27764,inst_27765,inst_27764__$1,inst_27765__$1,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__27444_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__27444_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_27761,inst_27769,inst_27764,inst_27765,inst_27764__$1,inst_27765__$1,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27767 = cljs.core.filter.call(null,inst_27766,inst_27764__$1);
var inst_27768 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_27769__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_27768);
var inst_27770 = cljs.core.not_empty.call(null,inst_27769__$1);
var state_27847__$1 = (function (){var statearr_27875 = state_27847;
(statearr_27875[(23)] = inst_27769__$1);

(statearr_27875[(24)] = inst_27764__$1);

(statearr_27875[(26)] = inst_27767);

(statearr_27875[(25)] = inst_27765__$1);

return statearr_27875;
})();
if(cljs.core.truth_(inst_27770)){
var statearr_27876_27956 = state_27847__$1;
(statearr_27876_27956[(1)] = (23));

} else {
var statearr_27877_27957 = state_27847__$1;
(statearr_27877_27957[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (36))){
var state_27847__$1 = state_27847;
var statearr_27878_27958 = state_27847__$1;
(statearr_27878_27958[(2)] = false);

(statearr_27878_27958[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (41))){
var inst_27822 = (state_27847[(20)]);
var inst_27826 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_27827 = cljs.core.map.call(null,inst_27826,inst_27822);
var inst_27828 = cljs.core.pr_str.call(null,inst_27827);
var inst_27829 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_27828)].join('');
var inst_27830 = figwheel.client.utils.log.call(null,inst_27829);
var state_27847__$1 = state_27847;
var statearr_27879_27959 = state_27847__$1;
(statearr_27879_27959[(2)] = inst_27830);

(statearr_27879_27959[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (43))){
var inst_27823 = (state_27847[(21)]);
var inst_27833 = (state_27847[(2)]);
var inst_27834 = cljs.core.not_empty.call(null,inst_27823);
var state_27847__$1 = (function (){var statearr_27880 = state_27847;
(statearr_27880[(27)] = inst_27833);

return statearr_27880;
})();
if(cljs.core.truth_(inst_27834)){
var statearr_27881_27960 = state_27847__$1;
(statearr_27881_27960[(1)] = (44));

} else {
var statearr_27882_27961 = state_27847__$1;
(statearr_27882_27961[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (29))){
var inst_27761 = (state_27847[(19)]);
var inst_27769 = (state_27847[(23)]);
var inst_27764 = (state_27847[(24)]);
var inst_27767 = (state_27847[(26)]);
var inst_27801 = (state_27847[(16)]);
var inst_27765 = (state_27847[(25)]);
var inst_27797 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_27800 = (function (){var all_files = inst_27761;
var res_SINGLEQUOTE_ = inst_27764;
var res = inst_27765;
var files_not_loaded = inst_27767;
var dependencies_that_loaded = inst_27769;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27769,inst_27764,inst_27767,inst_27801,inst_27765,inst_27797,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27799){
var map__27883 = p__27799;
var map__27883__$1 = ((((!((map__27883 == null)))?((((map__27883.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27883.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27883):map__27883);
var namespace = cljs.core.get.call(null,map__27883__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27769,inst_27764,inst_27767,inst_27801,inst_27765,inst_27797,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27801__$1 = cljs.core.group_by.call(null,inst_27800,inst_27767);
var inst_27803 = (inst_27801__$1 == null);
var inst_27804 = cljs.core.not.call(null,inst_27803);
var state_27847__$1 = (function (){var statearr_27885 = state_27847;
(statearr_27885[(28)] = inst_27797);

(statearr_27885[(16)] = inst_27801__$1);

return statearr_27885;
})();
if(inst_27804){
var statearr_27886_27962 = state_27847__$1;
(statearr_27886_27962[(1)] = (32));

} else {
var statearr_27887_27963 = state_27847__$1;
(statearr_27887_27963[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (44))){
var inst_27823 = (state_27847[(21)]);
var inst_27836 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_27823);
var inst_27837 = cljs.core.pr_str.call(null,inst_27836);
var inst_27838 = [cljs.core.str("not required: "),cljs.core.str(inst_27837)].join('');
var inst_27839 = figwheel.client.utils.log.call(null,inst_27838);
var state_27847__$1 = state_27847;
var statearr_27888_27964 = state_27847__$1;
(statearr_27888_27964[(2)] = inst_27839);

(statearr_27888_27964[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (6))){
var inst_27742 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27889_27965 = state_27847__$1;
(statearr_27889_27965[(2)] = inst_27742);

(statearr_27889_27965[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (28))){
var inst_27767 = (state_27847[(26)]);
var inst_27794 = (state_27847[(2)]);
var inst_27795 = cljs.core.not_empty.call(null,inst_27767);
var state_27847__$1 = (function (){var statearr_27890 = state_27847;
(statearr_27890[(29)] = inst_27794);

return statearr_27890;
})();
if(cljs.core.truth_(inst_27795)){
var statearr_27891_27966 = state_27847__$1;
(statearr_27891_27966[(1)] = (29));

} else {
var statearr_27892_27967 = state_27847__$1;
(statearr_27892_27967[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (25))){
var inst_27765 = (state_27847[(25)]);
var inst_27781 = (state_27847[(2)]);
var inst_27782 = cljs.core.not_empty.call(null,inst_27765);
var state_27847__$1 = (function (){var statearr_27893 = state_27847;
(statearr_27893[(30)] = inst_27781);

return statearr_27893;
})();
if(cljs.core.truth_(inst_27782)){
var statearr_27894_27968 = state_27847__$1;
(statearr_27894_27968[(1)] = (26));

} else {
var statearr_27895_27969 = state_27847__$1;
(statearr_27895_27969[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (34))){
var inst_27816 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
if(cljs.core.truth_(inst_27816)){
var statearr_27896_27970 = state_27847__$1;
(statearr_27896_27970[(1)] = (38));

} else {
var statearr_27897_27971 = state_27847__$1;
(statearr_27897_27971[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (17))){
var state_27847__$1 = state_27847;
var statearr_27898_27972 = state_27847__$1;
(statearr_27898_27972[(2)] = recompile_dependents);

(statearr_27898_27972[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (3))){
var state_27847__$1 = state_27847;
var statearr_27899_27973 = state_27847__$1;
(statearr_27899_27973[(2)] = null);

(statearr_27899_27973[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (12))){
var inst_27738 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27900_27974 = state_27847__$1;
(statearr_27900_27974[(2)] = inst_27738);

(statearr_27900_27974[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (2))){
var inst_27700 = (state_27847[(13)]);
var inst_27707 = cljs.core.seq.call(null,inst_27700);
var inst_27708 = inst_27707;
var inst_27709 = null;
var inst_27710 = (0);
var inst_27711 = (0);
var state_27847__$1 = (function (){var statearr_27901 = state_27847;
(statearr_27901[(7)] = inst_27708);

(statearr_27901[(8)] = inst_27711);

(statearr_27901[(9)] = inst_27710);

(statearr_27901[(10)] = inst_27709);

return statearr_27901;
})();
var statearr_27902_27975 = state_27847__$1;
(statearr_27902_27975[(2)] = null);

(statearr_27902_27975[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (23))){
var inst_27761 = (state_27847[(19)]);
var inst_27769 = (state_27847[(23)]);
var inst_27764 = (state_27847[(24)]);
var inst_27767 = (state_27847[(26)]);
var inst_27765 = (state_27847[(25)]);
var inst_27772 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_27774 = (function (){var all_files = inst_27761;
var res_SINGLEQUOTE_ = inst_27764;
var res = inst_27765;
var files_not_loaded = inst_27767;
var dependencies_that_loaded = inst_27769;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27769,inst_27764,inst_27767,inst_27765,inst_27772,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27773){
var map__27903 = p__27773;
var map__27903__$1 = ((((!((map__27903 == null)))?((((map__27903.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27903.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27903):map__27903);
var request_url = cljs.core.get.call(null,map__27903__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27769,inst_27764,inst_27767,inst_27765,inst_27772,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27775 = cljs.core.reverse.call(null,inst_27769);
var inst_27776 = cljs.core.map.call(null,inst_27774,inst_27775);
var inst_27777 = cljs.core.pr_str.call(null,inst_27776);
var inst_27778 = figwheel.client.utils.log.call(null,inst_27777);
var state_27847__$1 = (function (){var statearr_27905 = state_27847;
(statearr_27905[(31)] = inst_27772);

return statearr_27905;
})();
var statearr_27906_27976 = state_27847__$1;
(statearr_27906_27976[(2)] = inst_27778);

(statearr_27906_27976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (35))){
var state_27847__$1 = state_27847;
var statearr_27907_27977 = state_27847__$1;
(statearr_27907_27977[(2)] = true);

(statearr_27907_27977[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (19))){
var inst_27751 = (state_27847[(12)]);
var inst_27757 = figwheel.client.file_reloading.expand_files.call(null,inst_27751);
var state_27847__$1 = state_27847;
var statearr_27908_27978 = state_27847__$1;
(statearr_27908_27978[(2)] = inst_27757);

(statearr_27908_27978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (11))){
var state_27847__$1 = state_27847;
var statearr_27909_27979 = state_27847__$1;
(statearr_27909_27979[(2)] = null);

(statearr_27909_27979[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (9))){
var inst_27740 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27910_27980 = state_27847__$1;
(statearr_27910_27980[(2)] = inst_27740);

(statearr_27910_27980[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (5))){
var inst_27711 = (state_27847[(8)]);
var inst_27710 = (state_27847[(9)]);
var inst_27713 = (inst_27711 < inst_27710);
var inst_27714 = inst_27713;
var state_27847__$1 = state_27847;
if(cljs.core.truth_(inst_27714)){
var statearr_27911_27981 = state_27847__$1;
(statearr_27911_27981[(1)] = (7));

} else {
var statearr_27912_27982 = state_27847__$1;
(statearr_27912_27982[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (14))){
var inst_27721 = (state_27847[(22)]);
var inst_27730 = cljs.core.first.call(null,inst_27721);
var inst_27731 = figwheel.client.file_reloading.eval_body.call(null,inst_27730,opts);
var inst_27732 = cljs.core.next.call(null,inst_27721);
var inst_27708 = inst_27732;
var inst_27709 = null;
var inst_27710 = (0);
var inst_27711 = (0);
var state_27847__$1 = (function (){var statearr_27913 = state_27847;
(statearr_27913[(7)] = inst_27708);

(statearr_27913[(8)] = inst_27711);

(statearr_27913[(32)] = inst_27731);

(statearr_27913[(9)] = inst_27710);

(statearr_27913[(10)] = inst_27709);

return statearr_27913;
})();
var statearr_27914_27983 = state_27847__$1;
(statearr_27914_27983[(2)] = null);

(statearr_27914_27983[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (45))){
var state_27847__$1 = state_27847;
var statearr_27915_27984 = state_27847__$1;
(statearr_27915_27984[(2)] = null);

(statearr_27915_27984[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (26))){
var inst_27761 = (state_27847[(19)]);
var inst_27769 = (state_27847[(23)]);
var inst_27764 = (state_27847[(24)]);
var inst_27767 = (state_27847[(26)]);
var inst_27765 = (state_27847[(25)]);
var inst_27784 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_27786 = (function (){var all_files = inst_27761;
var res_SINGLEQUOTE_ = inst_27764;
var res = inst_27765;
var files_not_loaded = inst_27767;
var dependencies_that_loaded = inst_27769;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27769,inst_27764,inst_27767,inst_27765,inst_27784,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__27785){
var map__27916 = p__27785;
var map__27916__$1 = ((((!((map__27916 == null)))?((((map__27916.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27916.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27916):map__27916);
var namespace = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__27916__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27769,inst_27764,inst_27767,inst_27765,inst_27784,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27787 = cljs.core.map.call(null,inst_27786,inst_27765);
var inst_27788 = cljs.core.pr_str.call(null,inst_27787);
var inst_27789 = figwheel.client.utils.log.call(null,inst_27788);
var inst_27790 = (function (){var all_files = inst_27761;
var res_SINGLEQUOTE_ = inst_27764;
var res = inst_27765;
var files_not_loaded = inst_27767;
var dependencies_that_loaded = inst_27769;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27769,inst_27764,inst_27767,inst_27765,inst_27784,inst_27786,inst_27787,inst_27788,inst_27789,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_27761,inst_27769,inst_27764,inst_27767,inst_27765,inst_27784,inst_27786,inst_27787,inst_27788,inst_27789,state_val_27848,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_27791 = setTimeout(inst_27790,(10));
var state_27847__$1 = (function (){var statearr_27918 = state_27847;
(statearr_27918[(33)] = inst_27784);

(statearr_27918[(34)] = inst_27789);

return statearr_27918;
})();
var statearr_27919_27985 = state_27847__$1;
(statearr_27919_27985[(2)] = inst_27791);

(statearr_27919_27985[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (16))){
var state_27847__$1 = state_27847;
var statearr_27920_27986 = state_27847__$1;
(statearr_27920_27986[(2)] = reload_dependents);

(statearr_27920_27986[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (38))){
var inst_27801 = (state_27847[(16)]);
var inst_27818 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27801);
var state_27847__$1 = state_27847;
var statearr_27921_27987 = state_27847__$1;
(statearr_27921_27987[(2)] = inst_27818);

(statearr_27921_27987[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (30))){
var state_27847__$1 = state_27847;
var statearr_27922_27988 = state_27847__$1;
(statearr_27922_27988[(2)] = null);

(statearr_27922_27988[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (10))){
var inst_27721 = (state_27847[(22)]);
var inst_27723 = cljs.core.chunked_seq_QMARK_.call(null,inst_27721);
var state_27847__$1 = state_27847;
if(inst_27723){
var statearr_27923_27989 = state_27847__$1;
(statearr_27923_27989[(1)] = (13));

} else {
var statearr_27924_27990 = state_27847__$1;
(statearr_27924_27990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (18))){
var inst_27755 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
if(cljs.core.truth_(inst_27755)){
var statearr_27925_27991 = state_27847__$1;
(statearr_27925_27991[(1)] = (19));

} else {
var statearr_27926_27992 = state_27847__$1;
(statearr_27926_27992[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (42))){
var state_27847__$1 = state_27847;
var statearr_27927_27993 = state_27847__$1;
(statearr_27927_27993[(2)] = null);

(statearr_27927_27993[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (37))){
var inst_27813 = (state_27847[(2)]);
var state_27847__$1 = state_27847;
var statearr_27928_27994 = state_27847__$1;
(statearr_27928_27994[(2)] = inst_27813);

(statearr_27928_27994[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27848 === (8))){
var inst_27708 = (state_27847[(7)]);
var inst_27721 = (state_27847[(22)]);
var inst_27721__$1 = cljs.core.seq.call(null,inst_27708);
var state_27847__$1 = (function (){var statearr_27929 = state_27847;
(statearr_27929[(22)] = inst_27721__$1);

return statearr_27929;
})();
if(inst_27721__$1){
var statearr_27930_27995 = state_27847__$1;
(statearr_27930_27995[(1)] = (10));

} else {
var statearr_27931_27996 = state_27847__$1;
(statearr_27931_27996[(1)] = (11));

}

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
});})(c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__20472__auto__,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____0 = (function (){
var statearr_27935 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27935[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__);

(statearr_27935[(1)] = (1));

return statearr_27935;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____1 = (function (state_27847){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_27847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e27936){if((e27936 instanceof Object)){
var ex__20476__auto__ = e27936;
var statearr_27937_27997 = state_27847;
(statearr_27937_27997[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27998 = state_27847;
state_27847 = G__27998;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__ = function(state_27847){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____1.call(this,state_27847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__21833__auto__ = (function (){var statearr_27938 = f__21832__auto__.call(null);
(statearr_27938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_27938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__,map__27693,map__27693__$1,opts,before_jsload,on_jsload,reload_dependents,map__27694,map__27694__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__21831__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28001,link){
var map__28004 = p__28001;
var map__28004__$1 = ((((!((map__28004 == null)))?((((map__28004.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28004.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28004):map__28004);
var file = cljs.core.get.call(null,map__28004__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28004,map__28004__$1,file){
return (function (p1__27999_SHARP_,p2__28000_SHARP_){
if(cljs.core._EQ_.call(null,p1__27999_SHARP_,p2__28000_SHARP_)){
return p1__27999_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28004,map__28004__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28010){
var map__28011 = p__28010;
var map__28011__$1 = ((((!((map__28011 == null)))?((((map__28011.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28011.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28011):map__28011);
var match_length = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28011__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28006_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28006_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args28013 = [];
var len__19529__auto___28016 = arguments.length;
var i__19530__auto___28017 = (0);
while(true){
if((i__19530__auto___28017 < len__19529__auto___28016)){
args28013.push((arguments[i__19530__auto___28017]));

var G__28018 = (i__19530__auto___28017 + (1));
i__19530__auto___28017 = G__28018;
continue;
} else {
}
break;
}

var G__28015 = args28013.length;
switch (G__28015) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28013.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28020_SHARP_,p2__28021_SHARP_){
return cljs.core.assoc.call(null,p1__28020_SHARP_,cljs.core.get.call(null,p2__28021_SHARP_,key),p2__28021_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__28022){
var map__28025 = p__28022;
var map__28025__$1 = ((((!((map__28025 == null)))?((((map__28025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28025):map__28025);
var f_data = map__28025__$1;
var file = cljs.core.get.call(null,map__28025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28027,files_msg){
var map__28034 = p__28027;
var map__28034__$1 = ((((!((map__28034 == null)))?((((map__28034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28034):map__28034);
var opts = map__28034__$1;
var on_cssload = cljs.core.get.call(null,map__28034__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__28036_28040 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__28037_28041 = null;
var count__28038_28042 = (0);
var i__28039_28043 = (0);
while(true){
if((i__28039_28043 < count__28038_28042)){
var f_28044 = cljs.core._nth.call(null,chunk__28037_28041,i__28039_28043);
figwheel.client.file_reloading.reload_css_file.call(null,f_28044);

var G__28045 = seq__28036_28040;
var G__28046 = chunk__28037_28041;
var G__28047 = count__28038_28042;
var G__28048 = (i__28039_28043 + (1));
seq__28036_28040 = G__28045;
chunk__28037_28041 = G__28046;
count__28038_28042 = G__28047;
i__28039_28043 = G__28048;
continue;
} else {
var temp__4657__auto___28049 = cljs.core.seq.call(null,seq__28036_28040);
if(temp__4657__auto___28049){
var seq__28036_28050__$1 = temp__4657__auto___28049;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28036_28050__$1)){
var c__19270__auto___28051 = cljs.core.chunk_first.call(null,seq__28036_28050__$1);
var G__28052 = cljs.core.chunk_rest.call(null,seq__28036_28050__$1);
var G__28053 = c__19270__auto___28051;
var G__28054 = cljs.core.count.call(null,c__19270__auto___28051);
var G__28055 = (0);
seq__28036_28040 = G__28052;
chunk__28037_28041 = G__28053;
count__28038_28042 = G__28054;
i__28039_28043 = G__28055;
continue;
} else {
var f_28056 = cljs.core.first.call(null,seq__28036_28050__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_28056);

var G__28057 = cljs.core.next.call(null,seq__28036_28050__$1);
var G__28058 = null;
var G__28059 = (0);
var G__28060 = (0);
seq__28036_28040 = G__28057;
chunk__28037_28041 = G__28058;
count__28038_28042 = G__28059;
i__28039_28043 = G__28060;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__28034,map__28034__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__28034,map__28034__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1471010646108