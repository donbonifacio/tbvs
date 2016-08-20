// Compiled by ClojureScript 1.8.51 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__25176__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__25175 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__25175,(0),null);
var body = cljs.core.nthnext.call(null,vec__25175,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__25176 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25177__i = 0, G__25177__a = new Array(arguments.length -  0);
while (G__25177__i < G__25177__a.length) {G__25177__a[G__25177__i] = arguments[G__25177__i + 0]; ++G__25177__i;}
  args = new cljs.core.IndexedSeq(G__25177__a,0);
} 
return G__25176__delegate.call(this,args);};
G__25176.cljs$lang$maxFixedArity = 0;
G__25176.cljs$lang$applyTo = (function (arglist__25178){
var args = cljs.core.seq(arglist__25178);
return G__25176__delegate(args);
});
G__25176.cljs$core$IFn$_invoke$arity$variadic = G__25176__delegate;
return G__25176;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__19239__auto__ = (function sablono$core$update_arglists_$_iter__25183(s__25184){
return (new cljs.core.LazySeq(null,(function (){
var s__25184__$1 = s__25184;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25184__$1);
if(temp__4657__auto__){
var s__25184__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25184__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__25184__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__25186 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__25185 = (0);
while(true){
if((i__25185 < size__19238__auto__)){
var args = cljs.core._nth.call(null,c__19237__auto__,i__25185);
cljs.core.chunk_append.call(null,b__25186,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__25187 = (i__25185 + (1));
i__25185 = G__25187;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25186),sablono$core$update_arglists_$_iter__25183.call(null,cljs.core.chunk_rest.call(null,s__25184__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25186),null);
}
} else {
var args = cljs.core.first.call(null,s__25184__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__25183.call(null,cljs.core.rest.call(null,s__25184__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__19536__auto__ = [];
var len__19529__auto___25193 = arguments.length;
var i__19530__auto___25194 = (0);
while(true){
if((i__19530__auto___25194 < len__19529__auto___25193)){
args__19536__auto__.push((arguments[i__19530__auto___25194]));

var G__25195 = (i__19530__auto___25194 + (1));
i__19530__auto___25194 = G__25195;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__19239__auto__ = (function sablono$core$iter__25189(s__25190){
return (new cljs.core.LazySeq(null,(function (){
var s__25190__$1 = s__25190;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25190__$1);
if(temp__4657__auto__){
var s__25190__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25190__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__25190__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__25192 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__25191 = (0);
while(true){
if((i__25191 < size__19238__auto__)){
var style = cljs.core._nth.call(null,c__19237__auto__,i__25191);
cljs.core.chunk_append.call(null,b__25192,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__25196 = (i__25191 + (1));
i__25191 = G__25196;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25192),sablono$core$iter__25189.call(null,cljs.core.chunk_rest.call(null,s__25190__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25192),null);
}
} else {
var style = cljs.core.first.call(null,s__25190__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__25189.call(null,cljs.core.rest.call(null,s__25190__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq25188){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25188));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to25197 = (function sablono$core$link_to25197(var_args){
var args__19536__auto__ = [];
var len__19529__auto___25200 = arguments.length;
var i__19530__auto___25201 = (0);
while(true){
if((i__19530__auto___25201 < len__19529__auto___25200)){
args__19536__auto__.push((arguments[i__19530__auto___25201]));

var G__25202 = (i__19530__auto___25201 + (1));
i__19530__auto___25201 = G__25202;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to25197.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.link_to25197.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to25197.cljs$lang$maxFixedArity = (1);

sablono.core.link_to25197.cljs$lang$applyTo = (function (seq25198){
var G__25199 = cljs.core.first.call(null,seq25198);
var seq25198__$1 = cljs.core.next.call(null,seq25198);
return sablono.core.link_to25197.cljs$core$IFn$_invoke$arity$variadic(G__25199,seq25198__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to25197);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to25203 = (function sablono$core$mail_to25203(var_args){
var args__19536__auto__ = [];
var len__19529__auto___25208 = arguments.length;
var i__19530__auto___25209 = (0);
while(true){
if((i__19530__auto___25209 < len__19529__auto___25208)){
args__19536__auto__.push((arguments[i__19530__auto___25209]));

var G__25210 = (i__19530__auto___25209 + (1));
i__19530__auto___25209 = G__25210;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to25203.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.mail_to25203.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__25206){
var vec__25207 = p__25206;
var content = cljs.core.nth.call(null,vec__25207,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__18459__auto__ = content;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to25203.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to25203.cljs$lang$applyTo = (function (seq25204){
var G__25205 = cljs.core.first.call(null,seq25204);
var seq25204__$1 = cljs.core.next.call(null,seq25204);
return sablono.core.mail_to25203.cljs$core$IFn$_invoke$arity$variadic(G__25205,seq25204__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to25203);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list25211 = (function sablono$core$unordered_list25211(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__19239__auto__ = (function sablono$core$unordered_list25211_$_iter__25216(s__25217){
return (new cljs.core.LazySeq(null,(function (){
var s__25217__$1 = s__25217;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25217__$1);
if(temp__4657__auto__){
var s__25217__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25217__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__25217__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__25219 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__25218 = (0);
while(true){
if((i__25218 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__25218);
cljs.core.chunk_append.call(null,b__25219,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25220 = (i__25218 + (1));
i__25218 = G__25220;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25219),sablono$core$unordered_list25211_$_iter__25216.call(null,cljs.core.chunk_rest.call(null,s__25217__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25219),null);
}
} else {
var x = cljs.core.first.call(null,s__25217__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list25211_$_iter__25216.call(null,cljs.core.rest.call(null,s__25217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list25211);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list25221 = (function sablono$core$ordered_list25221(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__19239__auto__ = (function sablono$core$ordered_list25221_$_iter__25226(s__25227){
return (new cljs.core.LazySeq(null,(function (){
var s__25227__$1 = s__25227;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25227__$1);
if(temp__4657__auto__){
var s__25227__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25227__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__25227__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__25229 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__25228 = (0);
while(true){
if((i__25228 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__25228);
cljs.core.chunk_append.call(null,b__25229,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__25230 = (i__25228 + (1));
i__25228 = G__25230;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25229),sablono$core$ordered_list25221_$_iter__25226.call(null,cljs.core.chunk_rest.call(null,s__25227__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25229),null);
}
} else {
var x = cljs.core.first.call(null,s__25227__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list25221_$_iter__25226.call(null,cljs.core.rest.call(null,s__25227__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list25221);
/**
 * Create an image element.
 */
sablono.core.image25231 = (function sablono$core$image25231(var_args){
var args25232 = [];
var len__19529__auto___25235 = arguments.length;
var i__19530__auto___25236 = (0);
while(true){
if((i__19530__auto___25236 < len__19529__auto___25235)){
args25232.push((arguments[i__19530__auto___25236]));

var G__25237 = (i__19530__auto___25236 + (1));
i__19530__auto___25236 = G__25237;
continue;
} else {
}
break;
}

var G__25234 = args25232.length;
switch (G__25234) {
case 1:
return sablono.core.image25231.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image25231.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25232.length)].join('')));

}
});

sablono.core.image25231.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image25231.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image25231.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image25231);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__25239_SHARP_,p2__25240_SHARP_){
return [cljs.core.str(p1__25239_SHARP_),cljs.core.str("["),cljs.core.str(p2__25240_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__25241_SHARP_,p2__25242_SHARP_){
return [cljs.core.str(p1__25241_SHARP_),cljs.core.str("-"),cljs.core.str(p2__25242_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field25243 = (function sablono$core$color_field25243(var_args){
var args25244 = [];
var len__19529__auto___25311 = arguments.length;
var i__19530__auto___25312 = (0);
while(true){
if((i__19530__auto___25312 < len__19529__auto___25311)){
args25244.push((arguments[i__19530__auto___25312]));

var G__25313 = (i__19530__auto___25312 + (1));
i__19530__auto___25312 = G__25313;
continue;
} else {
}
break;
}

var G__25246 = args25244.length;
switch (G__25246) {
case 1:
return sablono.core.color_field25243.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field25243.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25244.length)].join('')));

}
});

sablono.core.color_field25243.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.color_field25243.call(null,name__25164__auto__,null);
});

sablono.core.color_field25243.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.color_field25243.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field25243);

/**
 * Creates a date input field.
 */
sablono.core.date_field25247 = (function sablono$core$date_field25247(var_args){
var args25248 = [];
var len__19529__auto___25315 = arguments.length;
var i__19530__auto___25316 = (0);
while(true){
if((i__19530__auto___25316 < len__19529__auto___25315)){
args25248.push((arguments[i__19530__auto___25316]));

var G__25317 = (i__19530__auto___25316 + (1));
i__19530__auto___25316 = G__25317;
continue;
} else {
}
break;
}

var G__25250 = args25248.length;
switch (G__25250) {
case 1:
return sablono.core.date_field25247.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field25247.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25248.length)].join('')));

}
});

sablono.core.date_field25247.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.date_field25247.call(null,name__25164__auto__,null);
});

sablono.core.date_field25247.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.date_field25247.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field25247);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field25251 = (function sablono$core$datetime_field25251(var_args){
var args25252 = [];
var len__19529__auto___25319 = arguments.length;
var i__19530__auto___25320 = (0);
while(true){
if((i__19530__auto___25320 < len__19529__auto___25319)){
args25252.push((arguments[i__19530__auto___25320]));

var G__25321 = (i__19530__auto___25320 + (1));
i__19530__auto___25320 = G__25321;
continue;
} else {
}
break;
}

var G__25254 = args25252.length;
switch (G__25254) {
case 1:
return sablono.core.datetime_field25251.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field25251.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25252.length)].join('')));

}
});

sablono.core.datetime_field25251.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.datetime_field25251.call(null,name__25164__auto__,null);
});

sablono.core.datetime_field25251.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.datetime_field25251.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field25251);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field25255 = (function sablono$core$datetime_local_field25255(var_args){
var args25256 = [];
var len__19529__auto___25323 = arguments.length;
var i__19530__auto___25324 = (0);
while(true){
if((i__19530__auto___25324 < len__19529__auto___25323)){
args25256.push((arguments[i__19530__auto___25324]));

var G__25325 = (i__19530__auto___25324 + (1));
i__19530__auto___25324 = G__25325;
continue;
} else {
}
break;
}

var G__25258 = args25256.length;
switch (G__25258) {
case 1:
return sablono.core.datetime_local_field25255.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field25255.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25256.length)].join('')));

}
});

sablono.core.datetime_local_field25255.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.datetime_local_field25255.call(null,name__25164__auto__,null);
});

sablono.core.datetime_local_field25255.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.datetime_local_field25255.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field25255);

/**
 * Creates a email input field.
 */
sablono.core.email_field25259 = (function sablono$core$email_field25259(var_args){
var args25260 = [];
var len__19529__auto___25327 = arguments.length;
var i__19530__auto___25328 = (0);
while(true){
if((i__19530__auto___25328 < len__19529__auto___25327)){
args25260.push((arguments[i__19530__auto___25328]));

var G__25329 = (i__19530__auto___25328 + (1));
i__19530__auto___25328 = G__25329;
continue;
} else {
}
break;
}

var G__25262 = args25260.length;
switch (G__25262) {
case 1:
return sablono.core.email_field25259.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field25259.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25260.length)].join('')));

}
});

sablono.core.email_field25259.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.email_field25259.call(null,name__25164__auto__,null);
});

sablono.core.email_field25259.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.email_field25259.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field25259);

/**
 * Creates a file input field.
 */
sablono.core.file_field25263 = (function sablono$core$file_field25263(var_args){
var args25264 = [];
var len__19529__auto___25331 = arguments.length;
var i__19530__auto___25332 = (0);
while(true){
if((i__19530__auto___25332 < len__19529__auto___25331)){
args25264.push((arguments[i__19530__auto___25332]));

var G__25333 = (i__19530__auto___25332 + (1));
i__19530__auto___25332 = G__25333;
continue;
} else {
}
break;
}

var G__25266 = args25264.length;
switch (G__25266) {
case 1:
return sablono.core.file_field25263.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field25263.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25264.length)].join('')));

}
});

sablono.core.file_field25263.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.file_field25263.call(null,name__25164__auto__,null);
});

sablono.core.file_field25263.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.file_field25263.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field25263);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field25267 = (function sablono$core$hidden_field25267(var_args){
var args25268 = [];
var len__19529__auto___25335 = arguments.length;
var i__19530__auto___25336 = (0);
while(true){
if((i__19530__auto___25336 < len__19529__auto___25335)){
args25268.push((arguments[i__19530__auto___25336]));

var G__25337 = (i__19530__auto___25336 + (1));
i__19530__auto___25336 = G__25337;
continue;
} else {
}
break;
}

var G__25270 = args25268.length;
switch (G__25270) {
case 1:
return sablono.core.hidden_field25267.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field25267.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25268.length)].join('')));

}
});

sablono.core.hidden_field25267.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.hidden_field25267.call(null,name__25164__auto__,null);
});

sablono.core.hidden_field25267.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.hidden_field25267.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field25267);

/**
 * Creates a month input field.
 */
sablono.core.month_field25271 = (function sablono$core$month_field25271(var_args){
var args25272 = [];
var len__19529__auto___25339 = arguments.length;
var i__19530__auto___25340 = (0);
while(true){
if((i__19530__auto___25340 < len__19529__auto___25339)){
args25272.push((arguments[i__19530__auto___25340]));

var G__25341 = (i__19530__auto___25340 + (1));
i__19530__auto___25340 = G__25341;
continue;
} else {
}
break;
}

var G__25274 = args25272.length;
switch (G__25274) {
case 1:
return sablono.core.month_field25271.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field25271.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25272.length)].join('')));

}
});

sablono.core.month_field25271.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.month_field25271.call(null,name__25164__auto__,null);
});

sablono.core.month_field25271.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.month_field25271.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field25271);

/**
 * Creates a number input field.
 */
sablono.core.number_field25275 = (function sablono$core$number_field25275(var_args){
var args25276 = [];
var len__19529__auto___25343 = arguments.length;
var i__19530__auto___25344 = (0);
while(true){
if((i__19530__auto___25344 < len__19529__auto___25343)){
args25276.push((arguments[i__19530__auto___25344]));

var G__25345 = (i__19530__auto___25344 + (1));
i__19530__auto___25344 = G__25345;
continue;
} else {
}
break;
}

var G__25278 = args25276.length;
switch (G__25278) {
case 1:
return sablono.core.number_field25275.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field25275.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25276.length)].join('')));

}
});

sablono.core.number_field25275.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.number_field25275.call(null,name__25164__auto__,null);
});

sablono.core.number_field25275.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.number_field25275.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field25275);

/**
 * Creates a password input field.
 */
sablono.core.password_field25279 = (function sablono$core$password_field25279(var_args){
var args25280 = [];
var len__19529__auto___25347 = arguments.length;
var i__19530__auto___25348 = (0);
while(true){
if((i__19530__auto___25348 < len__19529__auto___25347)){
args25280.push((arguments[i__19530__auto___25348]));

var G__25349 = (i__19530__auto___25348 + (1));
i__19530__auto___25348 = G__25349;
continue;
} else {
}
break;
}

var G__25282 = args25280.length;
switch (G__25282) {
case 1:
return sablono.core.password_field25279.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field25279.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25280.length)].join('')));

}
});

sablono.core.password_field25279.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.password_field25279.call(null,name__25164__auto__,null);
});

sablono.core.password_field25279.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.password_field25279.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field25279);

/**
 * Creates a range input field.
 */
sablono.core.range_field25283 = (function sablono$core$range_field25283(var_args){
var args25284 = [];
var len__19529__auto___25351 = arguments.length;
var i__19530__auto___25352 = (0);
while(true){
if((i__19530__auto___25352 < len__19529__auto___25351)){
args25284.push((arguments[i__19530__auto___25352]));

var G__25353 = (i__19530__auto___25352 + (1));
i__19530__auto___25352 = G__25353;
continue;
} else {
}
break;
}

var G__25286 = args25284.length;
switch (G__25286) {
case 1:
return sablono.core.range_field25283.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field25283.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25284.length)].join('')));

}
});

sablono.core.range_field25283.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.range_field25283.call(null,name__25164__auto__,null);
});

sablono.core.range_field25283.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.range_field25283.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field25283);

/**
 * Creates a search input field.
 */
sablono.core.search_field25287 = (function sablono$core$search_field25287(var_args){
var args25288 = [];
var len__19529__auto___25355 = arguments.length;
var i__19530__auto___25356 = (0);
while(true){
if((i__19530__auto___25356 < len__19529__auto___25355)){
args25288.push((arguments[i__19530__auto___25356]));

var G__25357 = (i__19530__auto___25356 + (1));
i__19530__auto___25356 = G__25357;
continue;
} else {
}
break;
}

var G__25290 = args25288.length;
switch (G__25290) {
case 1:
return sablono.core.search_field25287.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field25287.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25288.length)].join('')));

}
});

sablono.core.search_field25287.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.search_field25287.call(null,name__25164__auto__,null);
});

sablono.core.search_field25287.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.search_field25287.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field25287);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field25291 = (function sablono$core$tel_field25291(var_args){
var args25292 = [];
var len__19529__auto___25359 = arguments.length;
var i__19530__auto___25360 = (0);
while(true){
if((i__19530__auto___25360 < len__19529__auto___25359)){
args25292.push((arguments[i__19530__auto___25360]));

var G__25361 = (i__19530__auto___25360 + (1));
i__19530__auto___25360 = G__25361;
continue;
} else {
}
break;
}

var G__25294 = args25292.length;
switch (G__25294) {
case 1:
return sablono.core.tel_field25291.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field25291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25292.length)].join('')));

}
});

sablono.core.tel_field25291.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.tel_field25291.call(null,name__25164__auto__,null);
});

sablono.core.tel_field25291.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.tel_field25291.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field25291);

/**
 * Creates a text input field.
 */
sablono.core.text_field25295 = (function sablono$core$text_field25295(var_args){
var args25296 = [];
var len__19529__auto___25363 = arguments.length;
var i__19530__auto___25364 = (0);
while(true){
if((i__19530__auto___25364 < len__19529__auto___25363)){
args25296.push((arguments[i__19530__auto___25364]));

var G__25365 = (i__19530__auto___25364 + (1));
i__19530__auto___25364 = G__25365;
continue;
} else {
}
break;
}

var G__25298 = args25296.length;
switch (G__25298) {
case 1:
return sablono.core.text_field25295.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field25295.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25296.length)].join('')));

}
});

sablono.core.text_field25295.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.text_field25295.call(null,name__25164__auto__,null);
});

sablono.core.text_field25295.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.text_field25295.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field25295);

/**
 * Creates a time input field.
 */
sablono.core.time_field25299 = (function sablono$core$time_field25299(var_args){
var args25300 = [];
var len__19529__auto___25367 = arguments.length;
var i__19530__auto___25368 = (0);
while(true){
if((i__19530__auto___25368 < len__19529__auto___25367)){
args25300.push((arguments[i__19530__auto___25368]));

var G__25369 = (i__19530__auto___25368 + (1));
i__19530__auto___25368 = G__25369;
continue;
} else {
}
break;
}

var G__25302 = args25300.length;
switch (G__25302) {
case 1:
return sablono.core.time_field25299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field25299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25300.length)].join('')));

}
});

sablono.core.time_field25299.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.time_field25299.call(null,name__25164__auto__,null);
});

sablono.core.time_field25299.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.time_field25299.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field25299);

/**
 * Creates a url input field.
 */
sablono.core.url_field25303 = (function sablono$core$url_field25303(var_args){
var args25304 = [];
var len__19529__auto___25371 = arguments.length;
var i__19530__auto___25372 = (0);
while(true){
if((i__19530__auto___25372 < len__19529__auto___25371)){
args25304.push((arguments[i__19530__auto___25372]));

var G__25373 = (i__19530__auto___25372 + (1));
i__19530__auto___25372 = G__25373;
continue;
} else {
}
break;
}

var G__25306 = args25304.length;
switch (G__25306) {
case 1:
return sablono.core.url_field25303.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field25303.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25304.length)].join('')));

}
});

sablono.core.url_field25303.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.url_field25303.call(null,name__25164__auto__,null);
});

sablono.core.url_field25303.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.url_field25303.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field25303);

/**
 * Creates a week input field.
 */
sablono.core.week_field25307 = (function sablono$core$week_field25307(var_args){
var args25308 = [];
var len__19529__auto___25375 = arguments.length;
var i__19530__auto___25376 = (0);
while(true){
if((i__19530__auto___25376 < len__19529__auto___25375)){
args25308.push((arguments[i__19530__auto___25376]));

var G__25377 = (i__19530__auto___25376 + (1));
i__19530__auto___25376 = G__25377;
continue;
} else {
}
break;
}

var G__25310 = args25308.length;
switch (G__25310) {
case 1:
return sablono.core.week_field25307.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field25307.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25308.length)].join('')));

}
});

sablono.core.week_field25307.cljs$core$IFn$_invoke$arity$1 = (function (name__25164__auto__){
return sablono.core.week_field25307.call(null,name__25164__auto__,null);
});

sablono.core.week_field25307.cljs$core$IFn$_invoke$arity$2 = (function (name__25164__auto__,value__25165__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__25164__auto__,value__25165__auto__);
});

sablono.core.week_field25307.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field25307);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box25379 = (function sablono$core$check_box25379(var_args){
var args25380 = [];
var len__19529__auto___25383 = arguments.length;
var i__19530__auto___25384 = (0);
while(true){
if((i__19530__auto___25384 < len__19529__auto___25383)){
args25380.push((arguments[i__19530__auto___25384]));

var G__25385 = (i__19530__auto___25384 + (1));
i__19530__auto___25384 = G__25385;
continue;
} else {
}
break;
}

var G__25382 = args25380.length;
switch (G__25382) {
case 1:
return sablono.core.check_box25379.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box25379.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box25379.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25380.length)].join('')));

}
});

sablono.core.check_box25379.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box25379.call(null,name,null);
});

sablono.core.check_box25379.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box25379.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box25379.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box25379.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box25379);
/**
 * Creates a radio button.
 */
sablono.core.radio_button25387 = (function sablono$core$radio_button25387(var_args){
var args25388 = [];
var len__19529__auto___25391 = arguments.length;
var i__19530__auto___25392 = (0);
while(true){
if((i__19530__auto___25392 < len__19529__auto___25391)){
args25388.push((arguments[i__19530__auto___25392]));

var G__25393 = (i__19530__auto___25392 + (1));
i__19530__auto___25392 = G__25393;
continue;
} else {
}
break;
}

var G__25390 = args25388.length;
switch (G__25390) {
case 1:
return sablono.core.radio_button25387.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button25387.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button25387.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25388.length)].join('')));

}
});

sablono.core.radio_button25387.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button25387.call(null,group,null);
});

sablono.core.radio_button25387.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button25387.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button25387.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button25387.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button25387);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options25395 = (function sablono$core$select_options25395(coll){
var iter__19239__auto__ = (function sablono$core$select_options25395_$_iter__25404(s__25405){
return (new cljs.core.LazySeq(null,(function (){
var s__25405__$1 = s__25405;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25405__$1);
if(temp__4657__auto__){
var s__25405__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25405__$2)){
var c__19237__auto__ = cljs.core.chunk_first.call(null,s__25405__$2);
var size__19238__auto__ = cljs.core.count.call(null,c__19237__auto__);
var b__25407 = cljs.core.chunk_buffer.call(null,size__19238__auto__);
if((function (){var i__25406 = (0);
while(true){
if((i__25406 < size__19238__auto__)){
var x = cljs.core._nth.call(null,c__19237__auto__,i__25406);
cljs.core.chunk_append.call(null,b__25407,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25410 = x;
var text = cljs.core.nth.call(null,vec__25410,(0),null);
var val = cljs.core.nth.call(null,vec__25410,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25410,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25395.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__25412 = (i__25406 + (1));
i__25406 = G__25412;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25407),sablono$core$select_options25395_$_iter__25404.call(null,cljs.core.chunk_rest.call(null,s__25405__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25407),null);
}
} else {
var x = cljs.core.first.call(null,s__25405__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__25411 = x;
var text = cljs.core.nth.call(null,vec__25411,(0),null);
var val = cljs.core.nth.call(null,vec__25411,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__25411,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options25395.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options25395_$_iter__25404.call(null,cljs.core.rest.call(null,s__25405__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__19239__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options25395);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down25413 = (function sablono$core$drop_down25413(var_args){
var args25414 = [];
var len__19529__auto___25417 = arguments.length;
var i__19530__auto___25418 = (0);
while(true){
if((i__19530__auto___25418 < len__19529__auto___25417)){
args25414.push((arguments[i__19530__auto___25418]));

var G__25419 = (i__19530__auto___25418 + (1));
i__19530__auto___25418 = G__25419;
continue;
} else {
}
break;
}

var G__25416 = args25414.length;
switch (G__25416) {
case 2:
return sablono.core.drop_down25413.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down25413.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25414.length)].join('')));

}
});

sablono.core.drop_down25413.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down25413.call(null,name,options,null);
});

sablono.core.drop_down25413.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down25413.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down25413);
/**
 * Creates a text area element.
 */
sablono.core.text_area25421 = (function sablono$core$text_area25421(var_args){
var args25422 = [];
var len__19529__auto___25425 = arguments.length;
var i__19530__auto___25426 = (0);
while(true){
if((i__19530__auto___25426 < len__19529__auto___25425)){
args25422.push((arguments[i__19530__auto___25426]));

var G__25427 = (i__19530__auto___25426 + (1));
i__19530__auto___25426 = G__25427;
continue;
} else {
}
break;
}

var G__25424 = args25422.length;
switch (G__25424) {
case 1:
return sablono.core.text_area25421.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area25421.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25422.length)].join('')));

}
});

sablono.core.text_area25421.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area25421.call(null,name,null);
});

sablono.core.text_area25421.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__18459__auto__ = value;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area25421.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area25421);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label25429 = (function sablono$core$label25429(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label25429);
/**
 * Creates a submit button.
 */
sablono.core.submit_button25430 = (function sablono$core$submit_button25430(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button25430);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button25431 = (function sablono$core$reset_button25431(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button25431);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to25432 = (function sablono$core$form_to25432(var_args){
var args__19536__auto__ = [];
var len__19529__auto___25437 = arguments.length;
var i__19530__auto___25438 = (0);
while(true){
if((i__19530__auto___25438 < len__19529__auto___25437)){
args__19536__auto__.push((arguments[i__19530__auto___25438]));

var G__25439 = (i__19530__auto___25438 + (1));
i__19530__auto___25438 = G__25439;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to25432.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

sablono.core.form_to25432.cljs$core$IFn$_invoke$arity$variadic = (function (p__25435,body){
var vec__25436 = p__25435;
var method = cljs.core.nth.call(null,vec__25436,(0),null);
var action = cljs.core.nth.call(null,vec__25436,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to25432.cljs$lang$maxFixedArity = (1);

sablono.core.form_to25432.cljs$lang$applyTo = (function (seq25433){
var G__25434 = cljs.core.first.call(null,seq25433);
var seq25433__$1 = cljs.core.next.call(null,seq25433);
return sablono.core.form_to25432.cljs$core$IFn$_invoke$arity$variadic(G__25434,seq25433__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to25432);

//# sourceMappingURL=core.js.map?rel=1471010643826