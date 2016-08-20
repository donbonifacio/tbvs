// Compiled by ClojureScript 1.8.51 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__28565 = cljs.core._EQ_;
var expr__28566 = (function (){var or__18459__auto__ = (function (){try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
return localStorage.getItem("figwheel_autoload");
} else {
return null;
}
}catch (e28569){if((e28569 instanceof Error)){
var e = e28569;
return false;
} else {
throw e28569;

}
}})();
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__28565.call(null,"true",expr__28566))){
return true;
} else {
if(cljs.core.truth_(pred__28565.call(null,"false",expr__28566))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__28566)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{if(cljs.core.truth_(typeof localstorage !== 'undefined')){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
} else {
}

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e28571){if((e28571 instanceof Error)){
var e = e28571;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e28571;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__19536__auto__ = [];
var len__19529__auto___28573 = arguments.length;
var i__19530__auto___28574 = (0);
while(true){
if((i__19530__auto___28574 < len__19529__auto___28573)){
args__19536__auto__.push((arguments[i__19530__auto___28574]));

var G__28575 = (i__19530__auto___28574 + (1));
i__19530__auto___28574 = G__28575;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq28572){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28572));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__28576){
var map__28579 = p__28576;
var map__28579__$1 = ((((!((map__28579 == null)))?((((map__28579.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28579.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28579):map__28579);
var message = cljs.core.get.call(null,map__28579__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__28579__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__18459__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__18447__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__18447__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__18447__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__21831__auto___28741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___28741,ch){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___28741,ch){
return (function (state_28710){
var state_val_28711 = (state_28710[(1)]);
if((state_val_28711 === (7))){
var inst_28706 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28712_28742 = state_28710__$1;
(statearr_28712_28742[(2)] = inst_28706);

(statearr_28712_28742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (1))){
var state_28710__$1 = state_28710;
var statearr_28713_28743 = state_28710__$1;
(statearr_28713_28743[(2)] = null);

(statearr_28713_28743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (4))){
var inst_28663 = (state_28710[(7)]);
var inst_28663__$1 = (state_28710[(2)]);
var state_28710__$1 = (function (){var statearr_28714 = state_28710;
(statearr_28714[(7)] = inst_28663__$1);

return statearr_28714;
})();
if(cljs.core.truth_(inst_28663__$1)){
var statearr_28715_28744 = state_28710__$1;
(statearr_28715_28744[(1)] = (5));

} else {
var statearr_28716_28745 = state_28710__$1;
(statearr_28716_28745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (15))){
var inst_28670 = (state_28710[(8)]);
var inst_28685 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28670);
var inst_28686 = cljs.core.first.call(null,inst_28685);
var inst_28687 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_28686);
var inst_28688 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_28687)].join('');
var inst_28689 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_28688);
var state_28710__$1 = state_28710;
var statearr_28717_28746 = state_28710__$1;
(statearr_28717_28746[(2)] = inst_28689);

(statearr_28717_28746[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (13))){
var inst_28694 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28718_28747 = state_28710__$1;
(statearr_28718_28747[(2)] = inst_28694);

(statearr_28718_28747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (6))){
var state_28710__$1 = state_28710;
var statearr_28719_28748 = state_28710__$1;
(statearr_28719_28748[(2)] = null);

(statearr_28719_28748[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (17))){
var inst_28692 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28720_28749 = state_28710__$1;
(statearr_28720_28749[(2)] = inst_28692);

(statearr_28720_28749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (3))){
var inst_28708 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28710__$1,inst_28708);
} else {
if((state_val_28711 === (12))){
var inst_28669 = (state_28710[(9)]);
var inst_28683 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_28669,opts);
var state_28710__$1 = state_28710;
if(cljs.core.truth_(inst_28683)){
var statearr_28721_28750 = state_28710__$1;
(statearr_28721_28750[(1)] = (15));

} else {
var statearr_28722_28751 = state_28710__$1;
(statearr_28722_28751[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (2))){
var state_28710__$1 = state_28710;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28710__$1,(4),ch);
} else {
if((state_val_28711 === (11))){
var inst_28670 = (state_28710[(8)]);
var inst_28675 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28676 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_28670);
var inst_28677 = cljs.core.async.timeout.call(null,(1000));
var inst_28678 = [inst_28676,inst_28677];
var inst_28679 = (new cljs.core.PersistentVector(null,2,(5),inst_28675,inst_28678,null));
var state_28710__$1 = state_28710;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28710__$1,(14),inst_28679);
} else {
if((state_val_28711 === (9))){
var inst_28670 = (state_28710[(8)]);
var inst_28696 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_28697 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_28670);
var inst_28698 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28697);
var inst_28699 = [cljs.core.str("Not loading: "),cljs.core.str(inst_28698)].join('');
var inst_28700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_28699);
var state_28710__$1 = (function (){var statearr_28723 = state_28710;
(statearr_28723[(10)] = inst_28696);

return statearr_28723;
})();
var statearr_28724_28752 = state_28710__$1;
(statearr_28724_28752[(2)] = inst_28700);

(statearr_28724_28752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (5))){
var inst_28663 = (state_28710[(7)]);
var inst_28665 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_28666 = (new cljs.core.PersistentArrayMap(null,2,inst_28665,null));
var inst_28667 = (new cljs.core.PersistentHashSet(null,inst_28666,null));
var inst_28668 = figwheel.client.focus_msgs.call(null,inst_28667,inst_28663);
var inst_28669 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_28668);
var inst_28670 = cljs.core.first.call(null,inst_28668);
var inst_28671 = figwheel.client.autoload_QMARK_.call(null);
var state_28710__$1 = (function (){var statearr_28725 = state_28710;
(statearr_28725[(8)] = inst_28670);

(statearr_28725[(9)] = inst_28669);

return statearr_28725;
})();
if(cljs.core.truth_(inst_28671)){
var statearr_28726_28753 = state_28710__$1;
(statearr_28726_28753[(1)] = (8));

} else {
var statearr_28727_28754 = state_28710__$1;
(statearr_28727_28754[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (14))){
var inst_28681 = (state_28710[(2)]);
var state_28710__$1 = state_28710;
var statearr_28728_28755 = state_28710__$1;
(statearr_28728_28755[(2)] = inst_28681);

(statearr_28728_28755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (16))){
var state_28710__$1 = state_28710;
var statearr_28729_28756 = state_28710__$1;
(statearr_28729_28756[(2)] = null);

(statearr_28729_28756[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (10))){
var inst_28702 = (state_28710[(2)]);
var state_28710__$1 = (function (){var statearr_28730 = state_28710;
(statearr_28730[(11)] = inst_28702);

return statearr_28730;
})();
var statearr_28731_28757 = state_28710__$1;
(statearr_28731_28757[(2)] = null);

(statearr_28731_28757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28711 === (8))){
var inst_28669 = (state_28710[(9)]);
var inst_28673 = figwheel.client.reload_file_state_QMARK_.call(null,inst_28669,opts);
var state_28710__$1 = state_28710;
if(cljs.core.truth_(inst_28673)){
var statearr_28732_28758 = state_28710__$1;
(statearr_28732_28758[(1)] = (11));

} else {
var statearr_28733_28759 = state_28710__$1;
(statearr_28733_28759[(1)] = (12));

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
});})(c__21831__auto___28741,ch))
;
return ((function (switch__20472__auto__,c__21831__auto___28741,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____0 = (function (){
var statearr_28737 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28737[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__);

(statearr_28737[(1)] = (1));

return statearr_28737;
});
var figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____1 = (function (state_28710){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_28710);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e28738){if((e28738 instanceof Object)){
var ex__20476__auto__ = e28738;
var statearr_28739_28760 = state_28710;
(statearr_28739_28760[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28738;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28761 = state_28710;
state_28710 = G__28761;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__ = function(state_28710){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____1.call(this,state_28710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__20473__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___28741,ch))
})();
var state__21833__auto__ = (function (){var statearr_28740 = f__21832__auto__.call(null);
(statearr_28740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___28741);

return statearr_28740;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___28741,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__28762_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__28762_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_28769 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_28769){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_28767 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_28768 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_28768;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_28767;
}}catch (e28766){if((e28766 instanceof Error)){
var e = e28766;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_28769], null));
} else {
var e = e28766;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_28769))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__28770){
var map__28777 = p__28770;
var map__28777__$1 = ((((!((map__28777 == null)))?((((map__28777.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28777.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28777):map__28777);
var opts = map__28777__$1;
var build_id = cljs.core.get.call(null,map__28777__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__28777,map__28777__$1,opts,build_id){
return (function (p__28779){
var vec__28780 = p__28779;
var map__28781 = cljs.core.nth.call(null,vec__28780,(0),null);
var map__28781__$1 = ((((!((map__28781 == null)))?((((map__28781.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28781.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28781):map__28781);
var msg = map__28781__$1;
var msg_name = cljs.core.get.call(null,map__28781__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28780,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__28780,map__28781,map__28781__$1,msg,msg_name,_,map__28777,map__28777__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__28780,map__28781,map__28781__$1,msg,msg_name,_,map__28777,map__28777__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__28777,map__28777__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__28787){
var vec__28788 = p__28787;
var map__28789 = cljs.core.nth.call(null,vec__28788,(0),null);
var map__28789__$1 = ((((!((map__28789 == null)))?((((map__28789.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28789.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28789):map__28789);
var msg = map__28789__$1;
var msg_name = cljs.core.get.call(null,map__28789__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28788,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__28791){
var map__28801 = p__28791;
var map__28801__$1 = ((((!((map__28801 == null)))?((((map__28801.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28801.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28801):map__28801);
var on_compile_warning = cljs.core.get.call(null,map__28801__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__28801__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__28801,map__28801__$1,on_compile_warning,on_compile_fail){
return (function (p__28803){
var vec__28804 = p__28803;
var map__28805 = cljs.core.nth.call(null,vec__28804,(0),null);
var map__28805__$1 = ((((!((map__28805 == null)))?((((map__28805.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28805.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28805):map__28805);
var msg = map__28805__$1;
var msg_name = cljs.core.get.call(null,map__28805__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__28804,(1));
var pred__28807 = cljs.core._EQ_;
var expr__28808 = msg_name;
if(cljs.core.truth_(pred__28807.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__28808))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__28807.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__28808))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__28801,map__28801__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__,msg_hist,msg_names,msg){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__,msg_hist,msg_names,msg){
return (function (state_29016){
var state_val_29017 = (state_29016[(1)]);
if((state_val_29017 === (7))){
var inst_28944 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28944)){
var statearr_29018_29064 = state_29016__$1;
(statearr_29018_29064[(1)] = (8));

} else {
var statearr_29019_29065 = state_29016__$1;
(statearr_29019_29065[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (20))){
var inst_29010 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29020_29066 = state_29016__$1;
(statearr_29020_29066[(2)] = inst_29010);

(statearr_29020_29066[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (27))){
var inst_29006 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29021_29067 = state_29016__$1;
(statearr_29021_29067[(2)] = inst_29006);

(statearr_29021_29067[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (1))){
var inst_28937 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28937)){
var statearr_29022_29068 = state_29016__$1;
(statearr_29022_29068[(1)] = (2));

} else {
var statearr_29023_29069 = state_29016__$1;
(statearr_29023_29069[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (24))){
var inst_29008 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29024_29070 = state_29016__$1;
(statearr_29024_29070[(2)] = inst_29008);

(statearr_29024_29070[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (4))){
var inst_29014 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29016__$1,inst_29014);
} else {
if((state_val_29017 === (15))){
var inst_29012 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29025_29071 = state_29016__$1;
(statearr_29025_29071[(2)] = inst_29012);

(statearr_29025_29071[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (21))){
var inst_28971 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29026_29072 = state_29016__$1;
(statearr_29026_29072[(2)] = inst_28971);

(statearr_29026_29072[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (31))){
var inst_28995 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28995)){
var statearr_29027_29073 = state_29016__$1;
(statearr_29027_29073[(1)] = (34));

} else {
var statearr_29028_29074 = state_29016__$1;
(statearr_29028_29074[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (32))){
var inst_29004 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29029_29075 = state_29016__$1;
(statearr_29029_29075[(2)] = inst_29004);

(statearr_29029_29075[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (33))){
var inst_28993 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29030_29076 = state_29016__$1;
(statearr_29030_29076[(2)] = inst_28993);

(statearr_29030_29076[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (13))){
var inst_28958 = figwheel.client.heads_up.clear.call(null);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(16),inst_28958);
} else {
if((state_val_29017 === (22))){
var inst_28975 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28976 = figwheel.client.heads_up.append_message.call(null,inst_28975);
var state_29016__$1 = state_29016;
var statearr_29031_29077 = state_29016__$1;
(statearr_29031_29077[(2)] = inst_28976);

(statearr_29031_29077[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (36))){
var inst_29002 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29032_29078 = state_29016__$1;
(statearr_29032_29078[(2)] = inst_29002);

(statearr_29032_29078[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (29))){
var inst_28986 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29033_29079 = state_29016__$1;
(statearr_29033_29079[(2)] = inst_28986);

(statearr_29033_29079[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (6))){
var inst_28939 = (state_29016[(7)]);
var state_29016__$1 = state_29016;
var statearr_29034_29080 = state_29016__$1;
(statearr_29034_29080[(2)] = inst_28939);

(statearr_29034_29080[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (28))){
var inst_28982 = (state_29016[(2)]);
var inst_28983 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28984 = figwheel.client.heads_up.display_warning.call(null,inst_28983);
var state_29016__$1 = (function (){var statearr_29035 = state_29016;
(statearr_29035[(8)] = inst_28982);

return statearr_29035;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(29),inst_28984);
} else {
if((state_val_29017 === (25))){
var inst_28980 = figwheel.client.heads_up.clear.call(null);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(28),inst_28980);
} else {
if((state_val_29017 === (34))){
var inst_28997 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(37),inst_28997);
} else {
if((state_val_29017 === (17))){
var inst_28964 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29036_29081 = state_29016__$1;
(statearr_29036_29081[(2)] = inst_28964);

(statearr_29036_29081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (3))){
var inst_28956 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28956)){
var statearr_29037_29082 = state_29016__$1;
(statearr_29037_29082[(1)] = (13));

} else {
var statearr_29038_29083 = state_29016__$1;
(statearr_29038_29083[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (12))){
var inst_28952 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29039_29084 = state_29016__$1;
(statearr_29039_29084[(2)] = inst_28952);

(statearr_29039_29084[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (2))){
var inst_28939 = (state_29016[(7)]);
var inst_28939__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29016__$1 = (function (){var statearr_29040 = state_29016;
(statearr_29040[(7)] = inst_28939__$1);

return statearr_29040;
})();
if(cljs.core.truth_(inst_28939__$1)){
var statearr_29041_29085 = state_29016__$1;
(statearr_29041_29085[(1)] = (5));

} else {
var statearr_29042_29086 = state_29016__$1;
(statearr_29042_29086[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (23))){
var inst_28978 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28978)){
var statearr_29043_29087 = state_29016__$1;
(statearr_29043_29087[(1)] = (25));

} else {
var statearr_29044_29088 = state_29016__$1;
(statearr_29044_29088[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (35))){
var state_29016__$1 = state_29016;
var statearr_29045_29089 = state_29016__$1;
(statearr_29045_29089[(2)] = null);

(statearr_29045_29089[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (19))){
var inst_28973 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28973)){
var statearr_29046_29090 = state_29016__$1;
(statearr_29046_29090[(1)] = (22));

} else {
var statearr_29047_29091 = state_29016__$1;
(statearr_29047_29091[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (11))){
var inst_28948 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29048_29092 = state_29016__$1;
(statearr_29048_29092[(2)] = inst_28948);

(statearr_29048_29092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (9))){
var inst_28950 = figwheel.client.heads_up.clear.call(null);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(12),inst_28950);
} else {
if((state_val_29017 === (5))){
var inst_28941 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29016__$1 = state_29016;
var statearr_29049_29093 = state_29016__$1;
(statearr_29049_29093[(2)] = inst_28941);

(statearr_29049_29093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (14))){
var inst_28966 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28966)){
var statearr_29050_29094 = state_29016__$1;
(statearr_29050_29094[(1)] = (18));

} else {
var statearr_29051_29095 = state_29016__$1;
(statearr_29051_29095[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (26))){
var inst_28988 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29016__$1 = state_29016;
if(cljs.core.truth_(inst_28988)){
var statearr_29052_29096 = state_29016__$1;
(statearr_29052_29096[(1)] = (30));

} else {
var statearr_29053_29097 = state_29016__$1;
(statearr_29053_29097[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (16))){
var inst_28960 = (state_29016[(2)]);
var inst_28961 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28962 = figwheel.client.heads_up.display_exception.call(null,inst_28961);
var state_29016__$1 = (function (){var statearr_29054 = state_29016;
(statearr_29054[(9)] = inst_28960);

return statearr_29054;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(17),inst_28962);
} else {
if((state_val_29017 === (30))){
var inst_28990 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28991 = figwheel.client.heads_up.display_warning.call(null,inst_28990);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(33),inst_28991);
} else {
if((state_val_29017 === (10))){
var inst_28954 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29055_29098 = state_29016__$1;
(statearr_29055_29098[(2)] = inst_28954);

(statearr_29055_29098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (18))){
var inst_28968 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_28969 = figwheel.client.heads_up.display_exception.call(null,inst_28968);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(21),inst_28969);
} else {
if((state_val_29017 === (37))){
var inst_28999 = (state_29016[(2)]);
var state_29016__$1 = state_29016;
var statearr_29056_29099 = state_29016__$1;
(statearr_29056_29099[(2)] = inst_28999);

(statearr_29056_29099[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29017 === (8))){
var inst_28946 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29016__$1 = state_29016;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29016__$1,(11),inst_28946);
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
});})(c__21831__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__20472__auto__,c__21831__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____0 = (function (){
var statearr_29060 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29060[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__);

(statearr_29060[(1)] = (1));

return statearr_29060;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____1 = (function (state_29016){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_29016);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e29061){if((e29061 instanceof Object)){
var ex__20476__auto__ = e29061;
var statearr_29062_29100 = state_29016;
(statearr_29062_29100[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29016);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29061;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29101 = state_29016;
state_29016 = G__29101;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__ = function(state_29016){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____1.call(this,state_29016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__,msg_hist,msg_names,msg))
})();
var state__21833__auto__ = (function (){var statearr_29063 = f__21832__auto__.call(null);
(statearr_29063[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_29063;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__,msg_hist,msg_names,msg))
);

return c__21831__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__21831__auto___29164 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___29164,ch){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___29164,ch){
return (function (state_29147){
var state_val_29148 = (state_29147[(1)]);
if((state_val_29148 === (1))){
var state_29147__$1 = state_29147;
var statearr_29149_29165 = state_29147__$1;
(statearr_29149_29165[(2)] = null);

(statearr_29149_29165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (2))){
var state_29147__$1 = state_29147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29147__$1,(4),ch);
} else {
if((state_val_29148 === (3))){
var inst_29145 = (state_29147[(2)]);
var state_29147__$1 = state_29147;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29147__$1,inst_29145);
} else {
if((state_val_29148 === (4))){
var inst_29135 = (state_29147[(7)]);
var inst_29135__$1 = (state_29147[(2)]);
var state_29147__$1 = (function (){var statearr_29150 = state_29147;
(statearr_29150[(7)] = inst_29135__$1);

return statearr_29150;
})();
if(cljs.core.truth_(inst_29135__$1)){
var statearr_29151_29166 = state_29147__$1;
(statearr_29151_29166[(1)] = (5));

} else {
var statearr_29152_29167 = state_29147__$1;
(statearr_29152_29167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (5))){
var inst_29135 = (state_29147[(7)]);
var inst_29137 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29135);
var state_29147__$1 = state_29147;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29147__$1,(8),inst_29137);
} else {
if((state_val_29148 === (6))){
var state_29147__$1 = state_29147;
var statearr_29153_29168 = state_29147__$1;
(statearr_29153_29168[(2)] = null);

(statearr_29153_29168[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (7))){
var inst_29143 = (state_29147[(2)]);
var state_29147__$1 = state_29147;
var statearr_29154_29169 = state_29147__$1;
(statearr_29154_29169[(2)] = inst_29143);

(statearr_29154_29169[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29148 === (8))){
var inst_29139 = (state_29147[(2)]);
var state_29147__$1 = (function (){var statearr_29155 = state_29147;
(statearr_29155[(8)] = inst_29139);

return statearr_29155;
})();
var statearr_29156_29170 = state_29147__$1;
(statearr_29156_29170[(2)] = null);

(statearr_29156_29170[(1)] = (2));


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
});})(c__21831__auto___29164,ch))
;
return ((function (switch__20472__auto__,c__21831__auto___29164,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__20473__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__20473__auto____0 = (function (){
var statearr_29160 = [null,null,null,null,null,null,null,null,null];
(statearr_29160[(0)] = figwheel$client$heads_up_plugin_$_state_machine__20473__auto__);

(statearr_29160[(1)] = (1));

return statearr_29160;
});
var figwheel$client$heads_up_plugin_$_state_machine__20473__auto____1 = (function (state_29147){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_29147);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e29161){if((e29161 instanceof Object)){
var ex__20476__auto__ = e29161;
var statearr_29162_29171 = state_29147;
(statearr_29162_29171[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29147);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29161;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29172 = state_29147;
state_29147 = G__29172;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__20473__auto__ = function(state_29147){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__20473__auto____1.call(this,state_29147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__20473__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__20473__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___29164,ch))
})();
var state__21833__auto__ = (function (){var statearr_29163 = f__21832__auto__.call(null);
(statearr_29163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___29164);

return statearr_29163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___29164,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_29193){
var state_val_29194 = (state_29193[(1)]);
if((state_val_29194 === (1))){
var inst_29188 = cljs.core.async.timeout.call(null,(3000));
var state_29193__$1 = state_29193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29193__$1,(2),inst_29188);
} else {
if((state_val_29194 === (2))){
var inst_29190 = (state_29193[(2)]);
var inst_29191 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29193__$1 = (function (){var statearr_29195 = state_29193;
(statearr_29195[(7)] = inst_29190);

return statearr_29195;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29193__$1,inst_29191);
} else {
return null;
}
}
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____0 = (function (){
var statearr_29199 = [null,null,null,null,null,null,null,null];
(statearr_29199[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__);

(statearr_29199[(1)] = (1));

return statearr_29199;
});
var figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____1 = (function (state_29193){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_29193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e29200){if((e29200 instanceof Object)){
var ex__20476__auto__ = e29200;
var statearr_29201_29203 = state_29193;
(statearr_29201_29203[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29200;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29204 = state_29193;
state_29193 = G__29204;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__ = function(state_29193){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____1.call(this,state_29193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__20473__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_29202 = f__21832__auto__.call(null);
(statearr_29202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_29202;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29205){
var map__29212 = p__29205;
var map__29212__$1 = ((((!((map__29212 == null)))?((((map__29212.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29212.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29212):map__29212);
var ed = map__29212__$1;
var formatted_exception = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29212__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29214_29218 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29215_29219 = null;
var count__29216_29220 = (0);
var i__29217_29221 = (0);
while(true){
if((i__29217_29221 < count__29216_29220)){
var msg_29222 = cljs.core._nth.call(null,chunk__29215_29219,i__29217_29221);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29222);

var G__29223 = seq__29214_29218;
var G__29224 = chunk__29215_29219;
var G__29225 = count__29216_29220;
var G__29226 = (i__29217_29221 + (1));
seq__29214_29218 = G__29223;
chunk__29215_29219 = G__29224;
count__29216_29220 = G__29225;
i__29217_29221 = G__29226;
continue;
} else {
var temp__4657__auto___29227 = cljs.core.seq.call(null,seq__29214_29218);
if(temp__4657__auto___29227){
var seq__29214_29228__$1 = temp__4657__auto___29227;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29214_29228__$1)){
var c__19270__auto___29229 = cljs.core.chunk_first.call(null,seq__29214_29228__$1);
var G__29230 = cljs.core.chunk_rest.call(null,seq__29214_29228__$1);
var G__29231 = c__19270__auto___29229;
var G__29232 = cljs.core.count.call(null,c__19270__auto___29229);
var G__29233 = (0);
seq__29214_29218 = G__29230;
chunk__29215_29219 = G__29231;
count__29216_29220 = G__29232;
i__29217_29221 = G__29233;
continue;
} else {
var msg_29234 = cljs.core.first.call(null,seq__29214_29228__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29234);

var G__29235 = cljs.core.next.call(null,seq__29214_29228__$1);
var G__29236 = null;
var G__29237 = (0);
var G__29238 = (0);
seq__29214_29218 = G__29235;
chunk__29215_29219 = G__29236;
count__29216_29220 = G__29237;
i__29217_29221 = G__29238;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29239){
var map__29242 = p__29239;
var map__29242__$1 = ((((!((map__29242 == null)))?((((map__29242.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29242.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29242):map__29242);
var w = map__29242__$1;
var message = cljs.core.get.call(null,map__29242__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__18447__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__18447__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__18447__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29250 = cljs.core.seq.call(null,plugins);
var chunk__29251 = null;
var count__29252 = (0);
var i__29253 = (0);
while(true){
if((i__29253 < count__29252)){
var vec__29254 = cljs.core._nth.call(null,chunk__29251,i__29253);
var k = cljs.core.nth.call(null,vec__29254,(0),null);
var plugin = cljs.core.nth.call(null,vec__29254,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29256 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29250,chunk__29251,count__29252,i__29253,pl_29256,vec__29254,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29256.call(null,msg_hist);
});})(seq__29250,chunk__29251,count__29252,i__29253,pl_29256,vec__29254,k,plugin))
);
} else {
}

var G__29257 = seq__29250;
var G__29258 = chunk__29251;
var G__29259 = count__29252;
var G__29260 = (i__29253 + (1));
seq__29250 = G__29257;
chunk__29251 = G__29258;
count__29252 = G__29259;
i__29253 = G__29260;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__29250);
if(temp__4657__auto__){
var seq__29250__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29250__$1)){
var c__19270__auto__ = cljs.core.chunk_first.call(null,seq__29250__$1);
var G__29261 = cljs.core.chunk_rest.call(null,seq__29250__$1);
var G__29262 = c__19270__auto__;
var G__29263 = cljs.core.count.call(null,c__19270__auto__);
var G__29264 = (0);
seq__29250 = G__29261;
chunk__29251 = G__29262;
count__29252 = G__29263;
i__29253 = G__29264;
continue;
} else {
var vec__29255 = cljs.core.first.call(null,seq__29250__$1);
var k = cljs.core.nth.call(null,vec__29255,(0),null);
var plugin = cljs.core.nth.call(null,vec__29255,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29265 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29250,chunk__29251,count__29252,i__29253,pl_29265,vec__29255,k,plugin,seq__29250__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29265.call(null,msg_hist);
});})(seq__29250,chunk__29251,count__29252,i__29253,pl_29265,vec__29255,k,plugin,seq__29250__$1,temp__4657__auto__))
);
} else {
}

var G__29266 = cljs.core.next.call(null,seq__29250__$1);
var G__29267 = null;
var G__29268 = (0);
var G__29269 = (0);
seq__29250 = G__29266;
chunk__29251 = G__29267;
count__29252 = G__29268;
i__29253 = G__29269;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29270 = [];
var len__19529__auto___29273 = arguments.length;
var i__19530__auto___29274 = (0);
while(true){
if((i__19530__auto___29274 < len__19529__auto___29273)){
args29270.push((arguments[i__19530__auto___29274]));

var G__29275 = (i__19530__auto___29274 + (1));
i__19530__auto___29274 = G__29275;
continue;
} else {
}
break;
}

var G__29272 = args29270.length;
switch (G__29272) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29270.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__19536__auto__ = [];
var len__19529__auto___29281 = arguments.length;
var i__19530__auto___29282 = (0);
while(true){
if((i__19530__auto___29282 < len__19529__auto___29281)){
args__19536__auto__.push((arguments[i__19530__auto___29282]));

var G__29283 = (i__19530__auto___29282 + (1));
i__19530__auto___29282 = G__29283;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((0) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__19537__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29278){
var map__29279 = p__29278;
var map__29279__$1 = ((((!((map__29279 == null)))?((((map__29279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29279):map__29279);
var opts = map__29279__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29277){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29277));
});

//# sourceMappingURL=client.js.map?rel=1471010647391