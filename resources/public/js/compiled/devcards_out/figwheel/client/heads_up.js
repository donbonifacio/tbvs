// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__19536__auto__ = [];
var len__19529__auto___28262 = arguments.length;
var i__19530__auto___28263 = (0);
while(true){
if((i__19530__auto___28263 < len__19529__auto___28262)){
args__19536__auto__.push((arguments[i__19530__auto___28263]));

var G__28264 = (i__19530__auto___28263 + (1));
i__19530__auto___28263 = G__28264;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((2) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__19537__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28254_28265 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28255_28266 = null;
var count__28256_28267 = (0);
var i__28257_28268 = (0);
while(true){
if((i__28257_28268 < count__28256_28267)){
var k_28269 = cljs.core._nth.call(null,chunk__28255_28266,i__28257_28268);
e.setAttribute(cljs.core.name.call(null,k_28269),cljs.core.get.call(null,attrs,k_28269));

var G__28270 = seq__28254_28265;
var G__28271 = chunk__28255_28266;
var G__28272 = count__28256_28267;
var G__28273 = (i__28257_28268 + (1));
seq__28254_28265 = G__28270;
chunk__28255_28266 = G__28271;
count__28256_28267 = G__28272;
i__28257_28268 = G__28273;
continue;
} else {
var temp__4657__auto___28274 = cljs.core.seq.call(null,seq__28254_28265);
if(temp__4657__auto___28274){
var seq__28254_28275__$1 = temp__4657__auto___28274;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28254_28275__$1)){
var c__19270__auto___28276 = cljs.core.chunk_first.call(null,seq__28254_28275__$1);
var G__28277 = cljs.core.chunk_rest.call(null,seq__28254_28275__$1);
var G__28278 = c__19270__auto___28276;
var G__28279 = cljs.core.count.call(null,c__19270__auto___28276);
var G__28280 = (0);
seq__28254_28265 = G__28277;
chunk__28255_28266 = G__28278;
count__28256_28267 = G__28279;
i__28257_28268 = G__28280;
continue;
} else {
var k_28281 = cljs.core.first.call(null,seq__28254_28275__$1);
e.setAttribute(cljs.core.name.call(null,k_28281),cljs.core.get.call(null,attrs,k_28281));

var G__28282 = cljs.core.next.call(null,seq__28254_28275__$1);
var G__28283 = null;
var G__28284 = (0);
var G__28285 = (0);
seq__28254_28265 = G__28282;
chunk__28255_28266 = G__28283;
count__28256_28267 = G__28284;
i__28257_28268 = G__28285;
continue;
}
} else {
}
}
break;
}

var seq__28258_28286 = cljs.core.seq.call(null,children);
var chunk__28259_28287 = null;
var count__28260_28288 = (0);
var i__28261_28289 = (0);
while(true){
if((i__28261_28289 < count__28260_28288)){
var ch_28290 = cljs.core._nth.call(null,chunk__28259_28287,i__28261_28289);
e.appendChild(ch_28290);

var G__28291 = seq__28258_28286;
var G__28292 = chunk__28259_28287;
var G__28293 = count__28260_28288;
var G__28294 = (i__28261_28289 + (1));
seq__28258_28286 = G__28291;
chunk__28259_28287 = G__28292;
count__28260_28288 = G__28293;
i__28261_28289 = G__28294;
continue;
} else {
var temp__4657__auto___28295 = cljs.core.seq.call(null,seq__28258_28286);
if(temp__4657__auto___28295){
var seq__28258_28296__$1 = temp__4657__auto___28295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28258_28296__$1)){
var c__19270__auto___28297 = cljs.core.chunk_first.call(null,seq__28258_28296__$1);
var G__28298 = cljs.core.chunk_rest.call(null,seq__28258_28296__$1);
var G__28299 = c__19270__auto___28297;
var G__28300 = cljs.core.count.call(null,c__19270__auto___28297);
var G__28301 = (0);
seq__28258_28286 = G__28298;
chunk__28259_28287 = G__28299;
count__28260_28288 = G__28300;
i__28261_28289 = G__28301;
continue;
} else {
var ch_28302 = cljs.core.first.call(null,seq__28258_28296__$1);
e.appendChild(ch_28302);

var G__28303 = cljs.core.next.call(null,seq__28258_28296__$1);
var G__28304 = null;
var G__28305 = (0);
var G__28306 = (0);
seq__28258_28286 = G__28303;
chunk__28259_28287 = G__28304;
count__28260_28288 = G__28305;
i__28261_28289 = G__28306;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28251){
var G__28252 = cljs.core.first.call(null,seq28251);
var seq28251__$1 = cljs.core.next.call(null,seq28251);
var G__28253 = cljs.core.first.call(null,seq28251__$1);
var seq28251__$2 = cljs.core.next.call(null,seq28251__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28252,G__28253,seq28251__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__19384__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__19385__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__19386__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__19387__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__19388__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__,hierarchy__19388__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__,hierarchy__19388__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__19388__auto__,method_table__19384__auto__,prefer_table__19385__auto__,method_cache__19386__auto__,cached_hierarchy__19387__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_28307 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_28307.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_28307.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_28307.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_28307);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__28308,st_map){
var map__28313 = p__28308;
var map__28313__$1 = ((((!((map__28313 == null)))?((((map__28313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28313):map__28313);
var container_el = cljs.core.get.call(null,map__28313__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__28313,map__28313__$1,container_el){
return (function (p__28315){
var vec__28316 = p__28315;
var k = cljs.core.nth.call(null,vec__28316,(0),null);
var v = cljs.core.nth.call(null,vec__28316,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__28313,map__28313__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__28317,dom_str){
var map__28320 = p__28317;
var map__28320__$1 = ((((!((map__28320 == null)))?((((map__28320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28320):map__28320);
var c = map__28320__$1;
var content_area_el = cljs.core.get.call(null,map__28320__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__28322){
var map__28325 = p__28322;
var map__28325__$1 = ((((!((map__28325 == null)))?((((map__28325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28325):map__28325);
var content_area_el = cljs.core.get.call(null,map__28325__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_28368){
var state_val_28369 = (state_28368[(1)]);
if((state_val_28369 === (1))){
var inst_28353 = (state_28368[(7)]);
var inst_28353__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28354 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28355 = ["10px","10px","100%","68px","1.0"];
var inst_28356 = cljs.core.PersistentHashMap.fromArrays(inst_28354,inst_28355);
var inst_28357 = cljs.core.merge.call(null,inst_28356,style);
var inst_28358 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28353__$1,inst_28357);
var inst_28359 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28353__$1,msg);
var inst_28360 = cljs.core.async.timeout.call(null,(300));
var state_28368__$1 = (function (){var statearr_28370 = state_28368;
(statearr_28370[(7)] = inst_28353__$1);

(statearr_28370[(8)] = inst_28359);

(statearr_28370[(9)] = inst_28358);

return statearr_28370;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28368__$1,(2),inst_28360);
} else {
if((state_val_28369 === (2))){
var inst_28353 = (state_28368[(7)]);
var inst_28362 = (state_28368[(2)]);
var inst_28363 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_28364 = ["auto"];
var inst_28365 = cljs.core.PersistentHashMap.fromArrays(inst_28363,inst_28364);
var inst_28366 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28353,inst_28365);
var state_28368__$1 = (function (){var statearr_28371 = state_28368;
(statearr_28371[(10)] = inst_28362);

return statearr_28371;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28368__$1,inst_28366);
} else {
return null;
}
}
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto____0 = (function (){
var statearr_28375 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28375[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto__);

(statearr_28375[(1)] = (1));

return statearr_28375;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto____1 = (function (state_28368){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_28368);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e28376){if((e28376 instanceof Object)){
var ex__20476__auto__ = e28376;
var statearr_28377_28379 = state_28368;
(statearr_28377_28379[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28368);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28380 = state_28368;
state_28368 = G__28380;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto__ = function(state_28368){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto____1.call(this,state_28368);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_28378 = f__21832__auto__.call(null);
(statearr_28378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_28378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var args28381 = [];
var len__19529__auto___28384 = arguments.length;
var i__19530__auto___28385 = (0);
while(true){
if((i__19530__auto___28385 < len__19529__auto___28384)){
args28381.push((arguments[i__19530__auto___28385]));

var G__28386 = (i__19530__auto___28385 + (1));
i__19530__auto___28385 = G__28386;
continue;
} else {
}
break;
}

var G__28383 = args28381.length;
switch (G__28383) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28381.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str(" <span style=\""),cljs.core.str("display: inline-block;"),cljs.core.str("font-size: 13px;"),cljs.core.str("\">"),cljs.core.str(sub_head),cljs.core.str("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__28389 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__28389,(0),null);
var ln = cljs.core.nth.call(null,vec__28389,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__28392 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__28392,(0),null);
var file_line = cljs.core.nth.call(null,vec__28392,(1),null);
var file_column = cljs.core.nth.call(null,vec__28392,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__28392,file_name,file_line,file_column){
return (function (p1__28390_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__28390_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__28392,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__18459__auto__ = file_line;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
var and__18447__auto__ = cause;
if(cljs.core.truth_(and__18447__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__18447__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(ex){
return cljs.core.take_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.nil_QMARK_),cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),ex));
});
figwheel.client.heads_up.exception_info_QMARK_ = (function figwheel$client$heads_up$exception_info_QMARK_(ex){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Symbol(null,"clojure.lang.ExceptionInfo","clojure.lang.ExceptionInfo",-550564927,null));
});
figwheel.client.heads_up.parse_failed_compile = (function figwheel$client$heads_up$parse_failed_compile(p__28393){
var map__28396 = p__28393;
var map__28396__$1 = ((((!((map__28396 == null)))?((((map__28396.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28396.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28396):map__28396);
var ex = map__28396__$1;
var exception_data = cljs.core.get.call(null,map__28396__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var exception = cljs.core.first.call(null,exception_data);
if(cljs.core.truth_((function (){var and__18447__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exception);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.re_matches.call(null,/failed compiling.*/,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception));
} else {
return and__18447__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503),true,new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(exception),new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.get_in.call(null,exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"file","file",-1269645878)], null)));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_analysis_error = (function figwheel$client$heads_up$parse_analysis_error(p__28398){
var map__28404 = p__28398;
var map__28404__$1 = ((((!((map__28404 == null)))?((((map__28404.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28404.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28404):map__28404);
var ex = map__28404__$1;
var exception_data = cljs.core.get.call(null,map__28404__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28404,map__28404__$1,ex,exception_data){
return (function (p__28406){
var map__28407 = p__28406;
var map__28407__$1 = ((((!((map__28407 == null)))?((((map__28407.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28407.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28407):map__28407);
var exc = map__28407__$1;
var data = cljs.core.get.call(null,map__28407__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18447__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18447__auto__)){
return data;
} else {
return and__18447__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword("cljs","analysis-error","cljs/analysis-error",-420526349));
} else {
return null;
}
});})(map__28404,map__28404__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var analysis_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285),analysis_exception,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"class","class",-2030961996)], null))], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(analysis_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__18459__auto__ = cljs.core.get_in.call(null,analysis_exception,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(analysis_exception);
}
})()], null));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_reader_error = (function figwheel$client$heads_up$parse_reader_error(p__28409){
var map__28415 = p__28409;
var map__28415__$1 = ((((!((map__28415 == null)))?((((map__28415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28415):map__28415);
var ex = map__28415__$1;
var exception_data = cljs.core.get.call(null,map__28415__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (map__28415,map__28415__$1,ex,exception_data){
return (function (p__28417){
var map__28418 = p__28417;
var map__28418__$1 = ((((!((map__28418 == null)))?((((map__28418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28418):map__28418);
var exc = map__28418__$1;
var data = cljs.core.get.call(null,map__28418__$1,new cljs.core.Keyword(null,"data","data",-232669377));
if(cljs.core.truth_((function (){var and__18447__auto__ = figwheel.client.heads_up.exception_info_QMARK_.call(null,exc);
if(cljs.core.truth_(and__18447__auto__)){
return data;
} else {
return and__18447__auto__;
}
})())){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
} else {
return null;
}
});})(map__28415,map__28415__$1,ex,exception_data))
,exception_data));
if(cljs.core.truth_(temp__4655__auto__)){
var reader_exception = temp__4655__auto__;
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098),reader_exception], null),cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(reader_exception),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"column","column",2078222095)], null)),ex,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(reader_exception)], null));
} else {
return ex;
}
});
figwheel.client.heads_up.patch_eof_reader_exception = (function figwheel$client$heads_up$patch_eof_reader_exception(p__28420){
var map__28424 = p__28420;
var map__28424__$1 = ((((!((map__28424 == null)))?((((map__28424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28424):map__28424);
var ex = map__28424__$1;
var reader_exception = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var message = cljs.core.get.call(null,map__28424__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__18447__auto__ = reader_exception;
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.re_matches.call(null,/EOF while reading, starting.*/,message);
} else {
return and__18447__auto__;
}
})())){
var temp__4657__auto__ = cljs.core.re_matches.call(null,/.*line\s(\d*)\sand\scolumn\s(\d*).*/,message);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__28426 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__28426,(0),null);
var line = cljs.core.nth.call(null,vec__28426,(1),null);
var column = cljs.core.nth.call(null,vec__28426,(2),null);
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),(line | (0)),new cljs.core.Keyword(null,"column","column",2078222095),(column | (0)));
} else {
return null;
}
} else {
return ex;
}
});
figwheel.client.heads_up.ensure_file_line = (function figwheel$client$heads_up$ensure_file_line(p__28427){
var map__28433 = p__28427;
var map__28433__$1 = ((((!((map__28433 == null)))?((((map__28433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28433):map__28433);
var ex = map__28433__$1;
var exception_data = cljs.core.get.call(null,map__28433__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var map__28435 = cljs.core.apply.call(null,cljs.core.merge,cljs.core.keep.call(null,new cljs.core.Keyword(null,"data","data",-232669377),exception_data));
var map__28435__$1 = ((((!((map__28435 == null)))?((((map__28435.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28435.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28435):map__28435);
var file = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28435__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__28437 = ex;
var G__28437__$1 = (((new cljs.core.Keyword(null,"file","file",-1269645878) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"file","file",-1269645878),file,G__28437):G__28437);
var G__28437__$2 = (((new cljs.core.Keyword(null,"line","line",212345235) == null))?cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"line","line",212345235),line,G__28437__$1):G__28437__$1);
if((new cljs.core.Keyword(null,"message","message",-406056002) == null)){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.last.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"message","message",-406056002),exception_data)),G__28437__$2);
} else {
return G__28437__$2;
}
});
figwheel.client.heads_up.remove_file_from_message = (function figwheel$client$heads_up$remove_file_from_message(p__28438){
var map__28441 = p__28438;
var map__28441__$1 = ((((!((map__28441 == null)))?((((map__28441.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28441.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28441):map__28441);
var ex = map__28441__$1;
var message = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__28441__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__18447__auto__ = file;
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.re_matches.call(null,/.*in file.*/,message);
} else {
return and__18447__auto__;
}
})())){
return cljs.core.assoc.call(null,ex,new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.first.call(null,clojure.string.split.call(null,message,"in file")));
} else {
return ex;
}
});
figwheel.client.heads_up.parse_exception = (function figwheel$client$heads_up$parse_exception(exception_data){
return figwheel.client.heads_up.remove_file_from_message.call(null,figwheel.client.heads_up.patch_eof_reader_exception.call(null,figwheel.client.heads_up.parse_reader_error.call(null,figwheel.client.heads_up.parse_analysis_error.call(null,figwheel.client.heads_up.parse_failed_compile.call(null,cljs.core.update_in.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886),exception_data], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exception-data","exception-data",-512474886)], null),figwheel.client.heads_up.flatten_exception))))));
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__28445){
var map__28448 = p__28445;
var map__28448__$1 = ((((!((map__28448 == null)))?((((map__28448.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28448.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28448):map__28448);
var exception = map__28448__$1;
var failed_compiling = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var reader_exception = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var analysis_exception = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var class$ = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var file = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__28448__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var last_message = (cljs.core.truth_((function (){var and__18447__auto__ = file;
if(cljs.core.truth_(and__18447__auto__)){
return line;
} else {
return and__18447__auto__;
}
})())?[cljs.core.str("Please see line "),cljs.core.str(line),cljs.core.str(" of file "),cljs.core.str(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str("Please see "),cljs.core.str(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__28448,map__28448__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__28443_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__28443_SHARP_),cljs.core.str("</div>")].join('');
});})(last_message,map__28448,map__28448__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str((cljs.core.truth_(class$)?[cljs.core.str(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str(": ")].join(''):"")),cljs.core.str("<span style=\"font-weight:bold;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str("</span>")].join('')], null):cljs.core.map.call(null,((function (last_message,map__28448,map__28448__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message){
return (function (p1__28444_SHARP_){
return [cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__28444_SHARP_))),cljs.core.str(": "),cljs.core.str(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__28444_SHARP_)))].join('');
});})(last_message,map__28448,map__28448__$1,exception,failed_compiling,reader_exception,analysis_exception,class$,file,line,column,message))
,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception)))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__28453 = figwheel.client.heads_up.exception__GT_display_data.call(null,figwheel.client.heads_up.parse_exception.call(null,exception_data));
var map__28453__$1 = ((((!((map__28453 == null)))?((((map__28453.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28453.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28453):map__28453);
var head = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__28453__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file,line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__28457 = figwheel.client.heads_up.ensure_container.call(null);
var map__28457__$1 = ((((!((map__28457 == null)))?((((map__28457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28457):map__28457);
var content_area_el = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_28505){
var state_val_28506 = (state_28505[(1)]);
if((state_val_28506 === (1))){
var inst_28488 = (state_28505[(7)]);
var inst_28488__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_28489 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_28490 = ["0.0"];
var inst_28491 = cljs.core.PersistentHashMap.fromArrays(inst_28489,inst_28490);
var inst_28492 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28488__$1,inst_28491);
var inst_28493 = cljs.core.async.timeout.call(null,(300));
var state_28505__$1 = (function (){var statearr_28507 = state_28505;
(statearr_28507[(7)] = inst_28488__$1);

(statearr_28507[(8)] = inst_28492);

return statearr_28507;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28505__$1,(2),inst_28493);
} else {
if((state_val_28506 === (2))){
var inst_28488 = (state_28505[(7)]);
var inst_28495 = (state_28505[(2)]);
var inst_28496 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_28497 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_28498 = cljs.core.PersistentHashMap.fromArrays(inst_28496,inst_28497);
var inst_28499 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_28488,inst_28498);
var inst_28500 = cljs.core.async.timeout.call(null,(200));
var state_28505__$1 = (function (){var statearr_28508 = state_28505;
(statearr_28508[(9)] = inst_28499);

(statearr_28508[(10)] = inst_28495);

return statearr_28508;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28505__$1,(3),inst_28500);
} else {
if((state_val_28506 === (3))){
var inst_28488 = (state_28505[(7)]);
var inst_28502 = (state_28505[(2)]);
var inst_28503 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_28488,"");
var state_28505__$1 = (function (){var statearr_28509 = state_28505;
(statearr_28509[(11)] = inst_28502);

return statearr_28509;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28505__$1,inst_28503);
} else {
return null;
}
}
}
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__20473__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__20473__auto____0 = (function (){
var statearr_28513 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28513[(0)] = figwheel$client$heads_up$clear_$_state_machine__20473__auto__);

(statearr_28513[(1)] = (1));

return statearr_28513;
});
var figwheel$client$heads_up$clear_$_state_machine__20473__auto____1 = (function (state_28505){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_28505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e28514){if((e28514 instanceof Object)){
var ex__20476__auto__ = e28514;
var statearr_28515_28517 = state_28505;
(statearr_28515_28517[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28514;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28518 = state_28505;
state_28505 = G__28518;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__20473__auto__ = function(state_28505){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__20473__auto____1.call(this,state_28505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__20473__auto____0;
figwheel$client$heads_up$clear_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__20473__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_28516 = f__21832__auto__.call(null);
(statearr_28516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_28516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_28550){
var state_val_28551 = (state_28550[(1)]);
if((state_val_28551 === (1))){
var inst_28540 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28550__$1,(2),inst_28540);
} else {
if((state_val_28551 === (2))){
var inst_28542 = (state_28550[(2)]);
var inst_28543 = cljs.core.async.timeout.call(null,(400));
var state_28550__$1 = (function (){var statearr_28552 = state_28550;
(statearr_28552[(7)] = inst_28542);

return statearr_28552;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28550__$1,(3),inst_28543);
} else {
if((state_val_28551 === (3))){
var inst_28545 = (state_28550[(2)]);
var inst_28546 = figwheel.client.heads_up.clear.call(null);
var state_28550__$1 = (function (){var statearr_28553 = state_28550;
(statearr_28553[(8)] = inst_28545);

return statearr_28553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28550__$1,(4),inst_28546);
} else {
if((state_val_28551 === (4))){
var inst_28548 = (state_28550[(2)]);
var state_28550__$1 = state_28550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28550__$1,inst_28548);
} else {
return null;
}
}
}
}
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto____0 = (function (){
var statearr_28557 = [null,null,null,null,null,null,null,null,null];
(statearr_28557[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto__);

(statearr_28557[(1)] = (1));

return statearr_28557;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto____1 = (function (state_28550){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_28550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e28558){if((e28558 instanceof Object)){
var ex__20476__auto__ = e28558;
var statearr_28559_28561 = state_28550;
(statearr_28559_28561[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28558;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28562 = state_28550;
state_28550 = G__28562;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto__ = function(state_28550){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto____1.call(this,state_28550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_28560 = f__21832__auto__.call(null);
(statearr_28560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_28560;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1471010646917