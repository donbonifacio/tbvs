// Compiled by ClojureScript 1.8.51 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4655__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4655__auto__)){
var doc = temp__4655__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__19445__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_21768_21770 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_21769_21771 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_21768_21770,_STAR_print_fn_STAR_21769_21771,sb__19445__auto__){
return (function (x__19446__auto__){
return sb__19445__auto__.append(x__19446__auto__);
});})(_STAR_print_newline_STAR_21768_21770,_STAR_print_fn_STAR_21769_21771,sb__19445__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_21769_21771;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_21768_21770;
}
return [cljs.core.str(sb__19445__auto__)].join('');
}catch (e21766){if((e21766 instanceof Error)){
var e1 = e21766;
try{return obj.toString();
}catch (e21767){if((e21767 instanceof Error)){
var e2 = e21767;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e21767;

}
}} else {
throw e21766;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_21773 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_21773;
}});

//# sourceMappingURL=utils.js.map?rel=1471010641344