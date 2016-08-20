// Compiled by ClojureScript 1.8.51 {}
goog.provide('tbvs_devcards.cor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
tbvs_devcards.cor.canvas = (function tbvs_devcards$cor$canvas(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"canvas","canvas",-1798817489),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"400px",new cljs.core.Keyword(null,"height","height",1025178622),"400px",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"blue"], null)], null)], null);
});
tbvs_devcards.cor.animate = (function tbvs_devcards$cor$animate(renderer,stage,bunny){
renderer.render(stage);

bunny.rotation = (0.02 + bunny.rotation);

return requestAnimationFrame((function (){
return tbvs_devcards$cor$animate.call(null,renderer,stage,bunny);
}));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbvs_devcards.cor","tbvs_devcards.cor",-444627111),new cljs.core.Keyword(null,"rg-example-2","rg-example-2",-121618505)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"rg-example-2",new cljs.core.Keyword(null,"documentation","documentation",1889593999),"some docs",new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){
if(typeof tbvs_devcards.cor.t_tbvs_devcards$cor22714 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {devcards.core.IDevcardOptions}
*/
tbvs_devcards.cor.t_tbvs_devcards$cor22714 = (function (meta22715){
this.meta22715 = meta22715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tbvs_devcards.cor.t_tbvs_devcards$cor22714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22716,meta22715__$1){
var self__ = this;
var _22716__$1 = this;
return (new tbvs_devcards.cor.t_tbvs_devcards$cor22714(meta22715__$1));
});

tbvs_devcards.cor.t_tbvs_devcards$cor22714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22716){
var self__ = this;
var _22716__$1 = this;
return self__.meta22715;
});

tbvs_devcards.cor.t_tbvs_devcards$cor22714.prototype.devcards$core$IDevcardOptions$ = true;

tbvs_devcards.cor.t_tbvs_devcards$cor22714.prototype.devcards$core$IDevcardOptions$_devcard_options$arity$2 = (function (this__20844__auto__,devcard_opts__20845__auto__){
var self__ = this;
var this__20844__auto____$1 = this;
return cljs.core.assoc.call(null,devcard_opts__20845__auto__,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (){var v__20863__auto__ = cljs.core.with_meta.call(null,tbvs_devcards.cor.canvas,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (this__20844__auto____$1){
return (function (this$){
var dom_node = reagent.core.dom_node.call(null,this$);
var options = {"view": dom_node};
var renderer = PIXI.autoDetectRenderer((400),(400),options);
var stage = (new PIXI.Container());
var texture = PIXI.Texture.fromImage.call(null,"bunny.png");
var bunny = (new PIXI.Sprite(texture));
bunny.position.x = (100);

bunny.position.y = (100);

bunny.anchor.x = 0.5;

bunny.anchor.y = 0.5;

cljs.core.println.call(null,dom_node);

cljs.core.println.call(null,"MOUNTED BIAATCH");

stage.addChild(bunny);

return requestAnimationFrame(((function (dom_node,options,renderer,stage,texture,bunny,this__20844__auto____$1){
return (function (){
return tbvs_devcards.cor.animate.call(null,renderer,stage,bunny);
});})(dom_node,options,renderer,stage,texture,bunny,this__20844__auto____$1))
);
});})(this__20844__auto____$1))
], null));
if(cljs.core.fn_QMARK_.call(null,v__20863__auto__)){
return ((function (v__20863__auto__,this__20844__auto____$1){
return (function (data_atom__20864__auto__,owner__20865__auto__){
return reagent.core.as_element.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v__20863__auto__,data_atom__20864__auto__,owner__20865__auto__], null));
});
;})(v__20863__auto__,this__20844__auto____$1))
} else {
return reagent.core.as_element.call(null,v__20863__auto__);
}
})(),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,devcards.core.assert_options_map.call(null,new cljs.core.Keyword(null,"options","options",99638489).cljs$core$IFn$_invoke$arity$1(devcard_opts__20845__auto__))));
});

tbvs_devcards.cor.t_tbvs_devcards$cor22714.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta22715","meta22715",1789488515,null)], null);
});

tbvs_devcards.cor.t_tbvs_devcards$cor22714.cljs$lang$type = true;

tbvs_devcards.cor.t_tbvs_devcards$cor22714.cljs$lang$ctorStr = "tbvs-devcards.cor/t_tbvs_devcards$cor22714";

tbvs_devcards.cor.t_tbvs_devcards$cor22714.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"tbvs-devcards.cor/t_tbvs_devcards$cor22714");
});

tbvs_devcards.cor.__GT_t_tbvs_devcards$cor22714 = (function tbvs_devcards$cor$__GT_t_tbvs_devcards$cor22714(meta22715){
return (new tbvs_devcards.cor.t_tbvs_devcards$cor22714(meta22715));
});

}

return (new tbvs_devcards.cor.t_tbvs_devcards$cor22714(null));
})()
,new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),null,new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watch-atom","watch-atom",-2134031308),false], null)], null));
})], null));
tbvs_devcards.cor.main = (function tbvs_devcards$cor$main(){
var temp__4655__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4655__auto__)){
var node = temp__4655__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
tbvs_devcards.cor.main.call(null);

//# sourceMappingURL=cor.js.map?rel=1471711050544