// Compiled by ClojureScript 1.8.51 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args21876 = [];
var len__19529__auto___21882 = arguments.length;
var i__19530__auto___21883 = (0);
while(true){
if((i__19530__auto___21883 < len__19529__auto___21882)){
args21876.push((arguments[i__19530__auto___21883]));

var G__21884 = (i__19530__auto___21883 + (1));
i__19530__auto___21883 = G__21884;
continue;
} else {
}
break;
}

var G__21878 = args21876.length;
switch (G__21878) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21876.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21879 = (function (f,blockable,meta21880){
this.f = f;
this.blockable = blockable;
this.meta21880 = meta21880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21881,meta21880__$1){
var self__ = this;
var _21881__$1 = this;
return (new cljs.core.async.t_cljs$core$async21879(self__.f,self__.blockable,meta21880__$1));
});

cljs.core.async.t_cljs$core$async21879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21881){
var self__ = this;
var _21881__$1 = this;
return self__.meta21880;
});

cljs.core.async.t_cljs$core$async21879.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21879.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21879.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21879.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21880","meta21880",2047152374,null)], null);
});

cljs.core.async.t_cljs$core$async21879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21879";

cljs.core.async.t_cljs$core$async21879.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21879");
});

cljs.core.async.__GT_t_cljs$core$async21879 = (function cljs$core$async$__GT_t_cljs$core$async21879(f__$1,blockable__$1,meta21880){
return (new cljs.core.async.t_cljs$core$async21879(f__$1,blockable__$1,meta21880));
});

}

return (new cljs.core.async.t_cljs$core$async21879(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args21888 = [];
var len__19529__auto___21891 = arguments.length;
var i__19530__auto___21892 = (0);
while(true){
if((i__19530__auto___21892 < len__19529__auto___21891)){
args21888.push((arguments[i__19530__auto___21892]));

var G__21893 = (i__19530__auto___21892 + (1));
i__19530__auto___21892 = G__21893;
continue;
} else {
}
break;
}

var G__21890 = args21888.length;
switch (G__21890) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21888.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str("buf-or-n")].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args21895 = [];
var len__19529__auto___21898 = arguments.length;
var i__19530__auto___21899 = (0);
while(true){
if((i__19530__auto___21899 < len__19529__auto___21898)){
args21895.push((arguments[i__19530__auto___21899]));

var G__21900 = (i__19530__auto___21899 + (1));
i__19530__auto___21899 = G__21900;
continue;
} else {
}
break;
}

var G__21897 = args21895.length;
switch (G__21897) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21895.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args21902 = [];
var len__19529__auto___21905 = arguments.length;
var i__19530__auto___21906 = (0);
while(true){
if((i__19530__auto___21906 < len__19529__auto___21905)){
args21902.push((arguments[i__19530__auto___21906]));

var G__21907 = (i__19530__auto___21906 + (1));
i__19530__auto___21906 = G__21907;
continue;
} else {
}
break;
}

var G__21904 = args21902.length;
switch (G__21904) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21902.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21909 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21909);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_21909,ret){
return (function (){
return fn1.call(null,val_21909);
});})(val_21909,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args21910 = [];
var len__19529__auto___21913 = arguments.length;
var i__19530__auto___21914 = (0);
while(true){
if((i__19530__auto___21914 < len__19529__auto___21913)){
args21910.push((arguments[i__19530__auto___21914]));

var G__21915 = (i__19530__auto___21914 + (1));
i__19530__auto___21914 = G__21915;
continue;
} else {
}
break;
}

var G__21912 = args21910.length;
switch (G__21912) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21910.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__19374__auto___21917 = n;
var x_21918 = (0);
while(true){
if((x_21918 < n__19374__auto___21917)){
(a[x_21918] = (0));

var G__21919 = (x_21918 + (1));
x_21918 = G__21919;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__21920 = (i + (1));
i = G__21920;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async21924 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21924 = (function (alt_flag,flag,meta21925){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta21925 = meta21925;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_21926,meta21925__$1){
var self__ = this;
var _21926__$1 = this;
return (new cljs.core.async.t_cljs$core$async21924(self__.alt_flag,self__.flag,meta21925__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_21926){
var self__ = this;
var _21926__$1 = this;
return self__.meta21925;
});})(flag))
;

cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async21924.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21925","meta21925",61180208,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async21924.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21924.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21924";

cljs.core.async.t_cljs$core$async21924.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21924");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async21924 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21924(alt_flag__$1,flag__$1,meta21925){
return (new cljs.core.async.t_cljs$core$async21924(alt_flag__$1,flag__$1,meta21925));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async21924(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async21930 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21930 = (function (alt_handler,flag,cb,meta21931){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta21931 = meta21931;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21932,meta21931__$1){
var self__ = this;
var _21932__$1 = this;
return (new cljs.core.async.t_cljs$core$async21930(self__.alt_handler,self__.flag,self__.cb,meta21931__$1));
});

cljs.core.async.t_cljs$core$async21930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21932){
var self__ = this;
var _21932__$1 = this;
return self__.meta21931;
});

cljs.core.async.t_cljs$core$async21930.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async21930.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async21930.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21931","meta21931",-179140380,null)], null);
});

cljs.core.async.t_cljs$core$async21930.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21930.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21930";

cljs.core.async.t_cljs$core$async21930.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async21930");
});

cljs.core.async.__GT_t_cljs$core$async21930 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21930(alt_handler__$1,flag__$1,cb__$1,meta21931){
return (new cljs.core.async.t_cljs$core$async21930(alt_handler__$1,flag__$1,cb__$1,meta21931));
});

}

return (new cljs.core.async.t_cljs$core$async21930(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21933_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21933_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21934_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21934_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__18459__auto__ = wport;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21935 = (i + (1));
i = G__21935;
continue;
}
} else {
return null;
}
break;
}
})();
var or__18459__auto__ = ret;
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__18447__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__18447__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__18447__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__19536__auto__ = [];
var len__19529__auto___21941 = arguments.length;
var i__19530__auto___21942 = (0);
while(true){
if((i__19530__auto___21942 < len__19529__auto___21941)){
args__19536__auto__.push((arguments[i__19530__auto___21942]));

var G__21943 = (i__19530__auto___21942 + (1));
i__19530__auto___21942 = G__21943;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((1) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__19537__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21938){
var map__21939 = p__21938;
var map__21939__$1 = ((((!((map__21939 == null)))?((((map__21939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__21939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21939):map__21939);
var opts = map__21939__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21936){
var G__21937 = cljs.core.first.call(null,seq21936);
var seq21936__$1 = cljs.core.next.call(null,seq21936);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__21937,seq21936__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args21944 = [];
var len__19529__auto___21994 = arguments.length;
var i__19530__auto___21995 = (0);
while(true){
if((i__19530__auto___21995 < len__19529__auto___21994)){
args21944.push((arguments[i__19530__auto___21995]));

var G__21996 = (i__19530__auto___21995 + (1));
i__19530__auto___21995 = G__21996;
continue;
} else {
}
break;
}

var G__21946 = args21944.length;
switch (G__21946) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21944.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21831__auto___21998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___21998){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___21998){
return (function (state_21970){
var state_val_21971 = (state_21970[(1)]);
if((state_val_21971 === (7))){
var inst_21966 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21972_21999 = state_21970__$1;
(statearr_21972_21999[(2)] = inst_21966);

(statearr_21972_21999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (1))){
var state_21970__$1 = state_21970;
var statearr_21973_22000 = state_21970__$1;
(statearr_21973_22000[(2)] = null);

(statearr_21973_22000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (4))){
var inst_21949 = (state_21970[(7)]);
var inst_21949__$1 = (state_21970[(2)]);
var inst_21950 = (inst_21949__$1 == null);
var state_21970__$1 = (function (){var statearr_21974 = state_21970;
(statearr_21974[(7)] = inst_21949__$1);

return statearr_21974;
})();
if(cljs.core.truth_(inst_21950)){
var statearr_21975_22001 = state_21970__$1;
(statearr_21975_22001[(1)] = (5));

} else {
var statearr_21976_22002 = state_21970__$1;
(statearr_21976_22002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (13))){
var state_21970__$1 = state_21970;
var statearr_21977_22003 = state_21970__$1;
(statearr_21977_22003[(2)] = null);

(statearr_21977_22003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (6))){
var inst_21949 = (state_21970[(7)]);
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21970__$1,(11),to,inst_21949);
} else {
if((state_val_21971 === (3))){
var inst_21968 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21970__$1,inst_21968);
} else {
if((state_val_21971 === (12))){
var state_21970__$1 = state_21970;
var statearr_21978_22004 = state_21970__$1;
(statearr_21978_22004[(2)] = null);

(statearr_21978_22004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (2))){
var state_21970__$1 = state_21970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21970__$1,(4),from);
} else {
if((state_val_21971 === (11))){
var inst_21959 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
if(cljs.core.truth_(inst_21959)){
var statearr_21979_22005 = state_21970__$1;
(statearr_21979_22005[(1)] = (12));

} else {
var statearr_21980_22006 = state_21970__$1;
(statearr_21980_22006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (9))){
var state_21970__$1 = state_21970;
var statearr_21981_22007 = state_21970__$1;
(statearr_21981_22007[(2)] = null);

(statearr_21981_22007[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (5))){
var state_21970__$1 = state_21970;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21982_22008 = state_21970__$1;
(statearr_21982_22008[(1)] = (8));

} else {
var statearr_21983_22009 = state_21970__$1;
(statearr_21983_22009[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (14))){
var inst_21964 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21984_22010 = state_21970__$1;
(statearr_21984_22010[(2)] = inst_21964);

(statearr_21984_22010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (10))){
var inst_21956 = (state_21970[(2)]);
var state_21970__$1 = state_21970;
var statearr_21985_22011 = state_21970__$1;
(statearr_21985_22011[(2)] = inst_21956);

(statearr_21985_22011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21971 === (8))){
var inst_21953 = cljs.core.async.close_BANG_.call(null,to);
var state_21970__$1 = state_21970;
var statearr_21986_22012 = state_21970__$1;
(statearr_21986_22012[(2)] = inst_21953);

(statearr_21986_22012[(1)] = (10));


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
});})(c__21831__auto___21998))
;
return ((function (switch__20472__auto__,c__21831__auto___21998){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_21990 = [null,null,null,null,null,null,null,null];
(statearr_21990[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_21990[(1)] = (1));

return statearr_21990;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_21970){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_21970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e21991){if((e21991 instanceof Object)){
var ex__20476__auto__ = e21991;
var statearr_21992_22013 = state_21970;
(statearr_21992_22013[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e21991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22014 = state_21970;
state_21970 = G__22014;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_21970){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_21970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___21998))
})();
var state__21833__auto__ = (function (){var statearr_21993 = f__21832__auto__.call(null);
(statearr_21993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___21998);

return statearr_21993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___21998))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__22198){
var vec__22199 = p__22198;
var v = cljs.core.nth.call(null,vec__22199,(0),null);
var p = cljs.core.nth.call(null,vec__22199,(1),null);
var job = vec__22199;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21831__auto___22381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___22381,res,vec__22199,v,p,job,jobs,results){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___22381,res,vec__22199,v,p,job,jobs,results){
return (function (state_22204){
var state_val_22205 = (state_22204[(1)]);
if((state_val_22205 === (1))){
var state_22204__$1 = state_22204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22204__$1,(2),res,v);
} else {
if((state_val_22205 === (2))){
var inst_22201 = (state_22204[(2)]);
var inst_22202 = cljs.core.async.close_BANG_.call(null,res);
var state_22204__$1 = (function (){var statearr_22206 = state_22204;
(statearr_22206[(7)] = inst_22201);

return statearr_22206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22204__$1,inst_22202);
} else {
return null;
}
}
});})(c__21831__auto___22381,res,vec__22199,v,p,job,jobs,results))
;
return ((function (switch__20472__auto__,c__21831__auto___22381,res,vec__22199,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22210 = [null,null,null,null,null,null,null,null];
(statearr_22210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22210[(1)] = (1));

return statearr_22210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22204){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22211){if((e22211 instanceof Object)){
var ex__20476__auto__ = e22211;
var statearr_22212_22382 = state_22204;
(statearr_22212_22382[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22383 = state_22204;
state_22204 = G__22383;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22204){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___22381,res,vec__22199,v,p,job,jobs,results))
})();
var state__21833__auto__ = (function (){var statearr_22213 = f__21832__auto__.call(null);
(statearr_22213[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___22381);

return statearr_22213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___22381,res,vec__22199,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22214){
var vec__22215 = p__22214;
var v = cljs.core.nth.call(null,vec__22215,(0),null);
var p = cljs.core.nth.call(null,vec__22215,(1),null);
var job = vec__22215;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__19374__auto___22384 = n;
var __22385 = (0);
while(true){
if((__22385 < n__19374__auto___22384)){
var G__22216_22386 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22216_22386) {
case "compute":
var c__21831__auto___22388 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22385,c__21831__auto___22388,G__22216_22386,n__19374__auto___22384,jobs,results,process,async){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (__22385,c__21831__auto___22388,G__22216_22386,n__19374__auto___22384,jobs,results,process,async){
return (function (state_22229){
var state_val_22230 = (state_22229[(1)]);
if((state_val_22230 === (1))){
var state_22229__$1 = state_22229;
var statearr_22231_22389 = state_22229__$1;
(statearr_22231_22389[(2)] = null);

(statearr_22231_22389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22230 === (2))){
var state_22229__$1 = state_22229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22229__$1,(4),jobs);
} else {
if((state_val_22230 === (3))){
var inst_22227 = (state_22229[(2)]);
var state_22229__$1 = state_22229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22229__$1,inst_22227);
} else {
if((state_val_22230 === (4))){
var inst_22219 = (state_22229[(2)]);
var inst_22220 = process.call(null,inst_22219);
var state_22229__$1 = state_22229;
if(cljs.core.truth_(inst_22220)){
var statearr_22232_22390 = state_22229__$1;
(statearr_22232_22390[(1)] = (5));

} else {
var statearr_22233_22391 = state_22229__$1;
(statearr_22233_22391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22230 === (5))){
var state_22229__$1 = state_22229;
var statearr_22234_22392 = state_22229__$1;
(statearr_22234_22392[(2)] = null);

(statearr_22234_22392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22230 === (6))){
var state_22229__$1 = state_22229;
var statearr_22235_22393 = state_22229__$1;
(statearr_22235_22393[(2)] = null);

(statearr_22235_22393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22230 === (7))){
var inst_22225 = (state_22229[(2)]);
var state_22229__$1 = state_22229;
var statearr_22236_22394 = state_22229__$1;
(statearr_22236_22394[(2)] = inst_22225);

(statearr_22236_22394[(1)] = (3));


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
});})(__22385,c__21831__auto___22388,G__22216_22386,n__19374__auto___22384,jobs,results,process,async))
;
return ((function (__22385,switch__20472__auto__,c__21831__auto___22388,G__22216_22386,n__19374__auto___22384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22240 = [null,null,null,null,null,null,null];
(statearr_22240[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22240[(1)] = (1));

return statearr_22240;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22229){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22241){if((e22241 instanceof Object)){
var ex__20476__auto__ = e22241;
var statearr_22242_22395 = state_22229;
(statearr_22242_22395[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22241;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22396 = state_22229;
state_22229 = G__22396;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22229){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(__22385,switch__20472__auto__,c__21831__auto___22388,G__22216_22386,n__19374__auto___22384,jobs,results,process,async))
})();
var state__21833__auto__ = (function (){var statearr_22243 = f__21832__auto__.call(null);
(statearr_22243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___22388);

return statearr_22243;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(__22385,c__21831__auto___22388,G__22216_22386,n__19374__auto___22384,jobs,results,process,async))
);


break;
case "async":
var c__21831__auto___22397 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22385,c__21831__auto___22397,G__22216_22386,n__19374__auto___22384,jobs,results,process,async){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (__22385,c__21831__auto___22397,G__22216_22386,n__19374__auto___22384,jobs,results,process,async){
return (function (state_22256){
var state_val_22257 = (state_22256[(1)]);
if((state_val_22257 === (1))){
var state_22256__$1 = state_22256;
var statearr_22258_22398 = state_22256__$1;
(statearr_22258_22398[(2)] = null);

(statearr_22258_22398[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (2))){
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22256__$1,(4),jobs);
} else {
if((state_val_22257 === (3))){
var inst_22254 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22256__$1,inst_22254);
} else {
if((state_val_22257 === (4))){
var inst_22246 = (state_22256[(2)]);
var inst_22247 = async.call(null,inst_22246);
var state_22256__$1 = state_22256;
if(cljs.core.truth_(inst_22247)){
var statearr_22259_22399 = state_22256__$1;
(statearr_22259_22399[(1)] = (5));

} else {
var statearr_22260_22400 = state_22256__$1;
(statearr_22260_22400[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (5))){
var state_22256__$1 = state_22256;
var statearr_22261_22401 = state_22256__$1;
(statearr_22261_22401[(2)] = null);

(statearr_22261_22401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (6))){
var state_22256__$1 = state_22256;
var statearr_22262_22402 = state_22256__$1;
(statearr_22262_22402[(2)] = null);

(statearr_22262_22402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22257 === (7))){
var inst_22252 = (state_22256[(2)]);
var state_22256__$1 = state_22256;
var statearr_22263_22403 = state_22256__$1;
(statearr_22263_22403[(2)] = inst_22252);

(statearr_22263_22403[(1)] = (3));


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
});})(__22385,c__21831__auto___22397,G__22216_22386,n__19374__auto___22384,jobs,results,process,async))
;
return ((function (__22385,switch__20472__auto__,c__21831__auto___22397,G__22216_22386,n__19374__auto___22384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22267 = [null,null,null,null,null,null,null];
(statearr_22267[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22267[(1)] = (1));

return statearr_22267;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22256){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22268){if((e22268 instanceof Object)){
var ex__20476__auto__ = e22268;
var statearr_22269_22404 = state_22256;
(statearr_22269_22404[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22268;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22405 = state_22256;
state_22256 = G__22405;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(__22385,switch__20472__auto__,c__21831__auto___22397,G__22216_22386,n__19374__auto___22384,jobs,results,process,async))
})();
var state__21833__auto__ = (function (){var statearr_22270 = f__21832__auto__.call(null);
(statearr_22270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___22397);

return statearr_22270;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(__22385,c__21831__auto___22397,G__22216_22386,n__19374__auto___22384,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22406 = (__22385 + (1));
__22385 = G__22406;
continue;
} else {
}
break;
}

var c__21831__auto___22407 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___22407,jobs,results,process,async){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___22407,jobs,results,process,async){
return (function (state_22292){
var state_val_22293 = (state_22292[(1)]);
if((state_val_22293 === (1))){
var state_22292__$1 = state_22292;
var statearr_22294_22408 = state_22292__$1;
(statearr_22294_22408[(2)] = null);

(statearr_22294_22408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22293 === (2))){
var state_22292__$1 = state_22292;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22292__$1,(4),from);
} else {
if((state_val_22293 === (3))){
var inst_22290 = (state_22292[(2)]);
var state_22292__$1 = state_22292;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22292__$1,inst_22290);
} else {
if((state_val_22293 === (4))){
var inst_22273 = (state_22292[(7)]);
var inst_22273__$1 = (state_22292[(2)]);
var inst_22274 = (inst_22273__$1 == null);
var state_22292__$1 = (function (){var statearr_22295 = state_22292;
(statearr_22295[(7)] = inst_22273__$1);

return statearr_22295;
})();
if(cljs.core.truth_(inst_22274)){
var statearr_22296_22409 = state_22292__$1;
(statearr_22296_22409[(1)] = (5));

} else {
var statearr_22297_22410 = state_22292__$1;
(statearr_22297_22410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22293 === (5))){
var inst_22276 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22292__$1 = state_22292;
var statearr_22298_22411 = state_22292__$1;
(statearr_22298_22411[(2)] = inst_22276);

(statearr_22298_22411[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22293 === (6))){
var inst_22273 = (state_22292[(7)]);
var inst_22278 = (state_22292[(8)]);
var inst_22278__$1 = cljs.core.async.chan.call(null,(1));
var inst_22279 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22280 = [inst_22273,inst_22278__$1];
var inst_22281 = (new cljs.core.PersistentVector(null,2,(5),inst_22279,inst_22280,null));
var state_22292__$1 = (function (){var statearr_22299 = state_22292;
(statearr_22299[(8)] = inst_22278__$1);

return statearr_22299;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22292__$1,(8),jobs,inst_22281);
} else {
if((state_val_22293 === (7))){
var inst_22288 = (state_22292[(2)]);
var state_22292__$1 = state_22292;
var statearr_22300_22412 = state_22292__$1;
(statearr_22300_22412[(2)] = inst_22288);

(statearr_22300_22412[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22293 === (8))){
var inst_22278 = (state_22292[(8)]);
var inst_22283 = (state_22292[(2)]);
var state_22292__$1 = (function (){var statearr_22301 = state_22292;
(statearr_22301[(9)] = inst_22283);

return statearr_22301;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22292__$1,(9),results,inst_22278);
} else {
if((state_val_22293 === (9))){
var inst_22285 = (state_22292[(2)]);
var state_22292__$1 = (function (){var statearr_22302 = state_22292;
(statearr_22302[(10)] = inst_22285);

return statearr_22302;
})();
var statearr_22303_22413 = state_22292__$1;
(statearr_22303_22413[(2)] = null);

(statearr_22303_22413[(1)] = (2));


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
});})(c__21831__auto___22407,jobs,results,process,async))
;
return ((function (switch__20472__auto__,c__21831__auto___22407,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22307 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22307[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22307[(1)] = (1));

return statearr_22307;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22292){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22292);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22308){if((e22308 instanceof Object)){
var ex__20476__auto__ = e22308;
var statearr_22309_22414 = state_22292;
(statearr_22309_22414[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22308;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22415 = state_22292;
state_22292 = G__22415;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___22407,jobs,results,process,async))
})();
var state__21833__auto__ = (function (){var statearr_22310 = f__21832__auto__.call(null);
(statearr_22310[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___22407);

return statearr_22310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___22407,jobs,results,process,async))
);


var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__,jobs,results,process,async){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__,jobs,results,process,async){
return (function (state_22348){
var state_val_22349 = (state_22348[(1)]);
if((state_val_22349 === (7))){
var inst_22344 = (state_22348[(2)]);
var state_22348__$1 = state_22348;
var statearr_22350_22416 = state_22348__$1;
(statearr_22350_22416[(2)] = inst_22344);

(statearr_22350_22416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (20))){
var state_22348__$1 = state_22348;
var statearr_22351_22417 = state_22348__$1;
(statearr_22351_22417[(2)] = null);

(statearr_22351_22417[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (1))){
var state_22348__$1 = state_22348;
var statearr_22352_22418 = state_22348__$1;
(statearr_22352_22418[(2)] = null);

(statearr_22352_22418[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (4))){
var inst_22313 = (state_22348[(7)]);
var inst_22313__$1 = (state_22348[(2)]);
var inst_22314 = (inst_22313__$1 == null);
var state_22348__$1 = (function (){var statearr_22353 = state_22348;
(statearr_22353[(7)] = inst_22313__$1);

return statearr_22353;
})();
if(cljs.core.truth_(inst_22314)){
var statearr_22354_22419 = state_22348__$1;
(statearr_22354_22419[(1)] = (5));

} else {
var statearr_22355_22420 = state_22348__$1;
(statearr_22355_22420[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (15))){
var inst_22326 = (state_22348[(8)]);
var state_22348__$1 = state_22348;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22348__$1,(18),to,inst_22326);
} else {
if((state_val_22349 === (21))){
var inst_22339 = (state_22348[(2)]);
var state_22348__$1 = state_22348;
var statearr_22356_22421 = state_22348__$1;
(statearr_22356_22421[(2)] = inst_22339);

(statearr_22356_22421[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (13))){
var inst_22341 = (state_22348[(2)]);
var state_22348__$1 = (function (){var statearr_22357 = state_22348;
(statearr_22357[(9)] = inst_22341);

return statearr_22357;
})();
var statearr_22358_22422 = state_22348__$1;
(statearr_22358_22422[(2)] = null);

(statearr_22358_22422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (6))){
var inst_22313 = (state_22348[(7)]);
var state_22348__$1 = state_22348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22348__$1,(11),inst_22313);
} else {
if((state_val_22349 === (17))){
var inst_22334 = (state_22348[(2)]);
var state_22348__$1 = state_22348;
if(cljs.core.truth_(inst_22334)){
var statearr_22359_22423 = state_22348__$1;
(statearr_22359_22423[(1)] = (19));

} else {
var statearr_22360_22424 = state_22348__$1;
(statearr_22360_22424[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (3))){
var inst_22346 = (state_22348[(2)]);
var state_22348__$1 = state_22348;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22348__$1,inst_22346);
} else {
if((state_val_22349 === (12))){
var inst_22323 = (state_22348[(10)]);
var state_22348__$1 = state_22348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22348__$1,(14),inst_22323);
} else {
if((state_val_22349 === (2))){
var state_22348__$1 = state_22348;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22348__$1,(4),results);
} else {
if((state_val_22349 === (19))){
var state_22348__$1 = state_22348;
var statearr_22361_22425 = state_22348__$1;
(statearr_22361_22425[(2)] = null);

(statearr_22361_22425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (11))){
var inst_22323 = (state_22348[(2)]);
var state_22348__$1 = (function (){var statearr_22362 = state_22348;
(statearr_22362[(10)] = inst_22323);

return statearr_22362;
})();
var statearr_22363_22426 = state_22348__$1;
(statearr_22363_22426[(2)] = null);

(statearr_22363_22426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (9))){
var state_22348__$1 = state_22348;
var statearr_22364_22427 = state_22348__$1;
(statearr_22364_22427[(2)] = null);

(statearr_22364_22427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (5))){
var state_22348__$1 = state_22348;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22365_22428 = state_22348__$1;
(statearr_22365_22428[(1)] = (8));

} else {
var statearr_22366_22429 = state_22348__$1;
(statearr_22366_22429[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (14))){
var inst_22326 = (state_22348[(8)]);
var inst_22328 = (state_22348[(11)]);
var inst_22326__$1 = (state_22348[(2)]);
var inst_22327 = (inst_22326__$1 == null);
var inst_22328__$1 = cljs.core.not.call(null,inst_22327);
var state_22348__$1 = (function (){var statearr_22367 = state_22348;
(statearr_22367[(8)] = inst_22326__$1);

(statearr_22367[(11)] = inst_22328__$1);

return statearr_22367;
})();
if(inst_22328__$1){
var statearr_22368_22430 = state_22348__$1;
(statearr_22368_22430[(1)] = (15));

} else {
var statearr_22369_22431 = state_22348__$1;
(statearr_22369_22431[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (16))){
var inst_22328 = (state_22348[(11)]);
var state_22348__$1 = state_22348;
var statearr_22370_22432 = state_22348__$1;
(statearr_22370_22432[(2)] = inst_22328);

(statearr_22370_22432[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (10))){
var inst_22320 = (state_22348[(2)]);
var state_22348__$1 = state_22348;
var statearr_22371_22433 = state_22348__$1;
(statearr_22371_22433[(2)] = inst_22320);

(statearr_22371_22433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (18))){
var inst_22331 = (state_22348[(2)]);
var state_22348__$1 = state_22348;
var statearr_22372_22434 = state_22348__$1;
(statearr_22372_22434[(2)] = inst_22331);

(statearr_22372_22434[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22349 === (8))){
var inst_22317 = cljs.core.async.close_BANG_.call(null,to);
var state_22348__$1 = state_22348;
var statearr_22373_22435 = state_22348__$1;
(statearr_22373_22435[(2)] = inst_22317);

(statearr_22373_22435[(1)] = (10));


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
});})(c__21831__auto__,jobs,results,process,async))
;
return ((function (switch__20472__auto__,c__21831__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_22377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__);

(statearr_22377[(1)] = (1));

return statearr_22377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1 = (function (state_22348){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22348);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22378){if((e22378 instanceof Object)){
var ex__20476__auto__ = e22378;
var statearr_22379_22436 = state_22348;
(statearr_22379_22436[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22348);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22437 = state_22348;
state_22348 = G__22437;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__ = function(state_22348){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1.call(this,state_22348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__,jobs,results,process,async))
})();
var state__21833__auto__ = (function (){var statearr_22380 = f__21832__auto__.call(null);
(statearr_22380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_22380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__,jobs,results,process,async))
);

return c__21831__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args22438 = [];
var len__19529__auto___22441 = arguments.length;
var i__19530__auto___22442 = (0);
while(true){
if((i__19530__auto___22442 < len__19529__auto___22441)){
args22438.push((arguments[i__19530__auto___22442]));

var G__22443 = (i__19530__auto___22442 + (1));
i__19530__auto___22442 = G__22443;
continue;
} else {
}
break;
}

var G__22440 = args22438.length;
switch (G__22440) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22438.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args22445 = [];
var len__19529__auto___22448 = arguments.length;
var i__19530__auto___22449 = (0);
while(true){
if((i__19530__auto___22449 < len__19529__auto___22448)){
args22445.push((arguments[i__19530__auto___22449]));

var G__22450 = (i__19530__auto___22449 + (1));
i__19530__auto___22449 = G__22450;
continue;
} else {
}
break;
}

var G__22447 = args22445.length;
switch (G__22447) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22445.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args22452 = [];
var len__19529__auto___22505 = arguments.length;
var i__19530__auto___22506 = (0);
while(true){
if((i__19530__auto___22506 < len__19529__auto___22505)){
args22452.push((arguments[i__19530__auto___22506]));

var G__22507 = (i__19530__auto___22506 + (1));
i__19530__auto___22506 = G__22507;
continue;
} else {
}
break;
}

var G__22454 = args22452.length;
switch (G__22454) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22452.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21831__auto___22509 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___22509,tc,fc){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___22509,tc,fc){
return (function (state_22480){
var state_val_22481 = (state_22480[(1)]);
if((state_val_22481 === (7))){
var inst_22476 = (state_22480[(2)]);
var state_22480__$1 = state_22480;
var statearr_22482_22510 = state_22480__$1;
(statearr_22482_22510[(2)] = inst_22476);

(statearr_22482_22510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (1))){
var state_22480__$1 = state_22480;
var statearr_22483_22511 = state_22480__$1;
(statearr_22483_22511[(2)] = null);

(statearr_22483_22511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (4))){
var inst_22457 = (state_22480[(7)]);
var inst_22457__$1 = (state_22480[(2)]);
var inst_22458 = (inst_22457__$1 == null);
var state_22480__$1 = (function (){var statearr_22484 = state_22480;
(statearr_22484[(7)] = inst_22457__$1);

return statearr_22484;
})();
if(cljs.core.truth_(inst_22458)){
var statearr_22485_22512 = state_22480__$1;
(statearr_22485_22512[(1)] = (5));

} else {
var statearr_22486_22513 = state_22480__$1;
(statearr_22486_22513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (13))){
var state_22480__$1 = state_22480;
var statearr_22487_22514 = state_22480__$1;
(statearr_22487_22514[(2)] = null);

(statearr_22487_22514[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (6))){
var inst_22457 = (state_22480[(7)]);
var inst_22463 = p.call(null,inst_22457);
var state_22480__$1 = state_22480;
if(cljs.core.truth_(inst_22463)){
var statearr_22488_22515 = state_22480__$1;
(statearr_22488_22515[(1)] = (9));

} else {
var statearr_22489_22516 = state_22480__$1;
(statearr_22489_22516[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (3))){
var inst_22478 = (state_22480[(2)]);
var state_22480__$1 = state_22480;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22480__$1,inst_22478);
} else {
if((state_val_22481 === (12))){
var state_22480__$1 = state_22480;
var statearr_22490_22517 = state_22480__$1;
(statearr_22490_22517[(2)] = null);

(statearr_22490_22517[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (2))){
var state_22480__$1 = state_22480;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22480__$1,(4),ch);
} else {
if((state_val_22481 === (11))){
var inst_22457 = (state_22480[(7)]);
var inst_22467 = (state_22480[(2)]);
var state_22480__$1 = state_22480;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22480__$1,(8),inst_22467,inst_22457);
} else {
if((state_val_22481 === (9))){
var state_22480__$1 = state_22480;
var statearr_22491_22518 = state_22480__$1;
(statearr_22491_22518[(2)] = tc);

(statearr_22491_22518[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (5))){
var inst_22460 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22461 = cljs.core.async.close_BANG_.call(null,fc);
var state_22480__$1 = (function (){var statearr_22492 = state_22480;
(statearr_22492[(8)] = inst_22460);

return statearr_22492;
})();
var statearr_22493_22519 = state_22480__$1;
(statearr_22493_22519[(2)] = inst_22461);

(statearr_22493_22519[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (14))){
var inst_22474 = (state_22480[(2)]);
var state_22480__$1 = state_22480;
var statearr_22494_22520 = state_22480__$1;
(statearr_22494_22520[(2)] = inst_22474);

(statearr_22494_22520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (10))){
var state_22480__$1 = state_22480;
var statearr_22495_22521 = state_22480__$1;
(statearr_22495_22521[(2)] = fc);

(statearr_22495_22521[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22481 === (8))){
var inst_22469 = (state_22480[(2)]);
var state_22480__$1 = state_22480;
if(cljs.core.truth_(inst_22469)){
var statearr_22496_22522 = state_22480__$1;
(statearr_22496_22522[(1)] = (12));

} else {
var statearr_22497_22523 = state_22480__$1;
(statearr_22497_22523[(1)] = (13));

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
});})(c__21831__auto___22509,tc,fc))
;
return ((function (switch__20472__auto__,c__21831__auto___22509,tc,fc){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_22501 = [null,null,null,null,null,null,null,null,null];
(statearr_22501[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_22501[(1)] = (1));

return statearr_22501;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_22480){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22480);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22502){if((e22502 instanceof Object)){
var ex__20476__auto__ = e22502;
var statearr_22503_22524 = state_22480;
(statearr_22503_22524[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22480);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22502;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22525 = state_22480;
state_22480 = G__22525;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_22480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_22480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___22509,tc,fc))
})();
var state__21833__auto__ = (function (){var statearr_22504 = f__21832__auto__.call(null);
(statearr_22504[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___22509);

return statearr_22504;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___22509,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_22589){
var state_val_22590 = (state_22589[(1)]);
if((state_val_22590 === (7))){
var inst_22585 = (state_22589[(2)]);
var state_22589__$1 = state_22589;
var statearr_22591_22612 = state_22589__$1;
(statearr_22591_22612[(2)] = inst_22585);

(statearr_22591_22612[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (1))){
var inst_22569 = init;
var state_22589__$1 = (function (){var statearr_22592 = state_22589;
(statearr_22592[(7)] = inst_22569);

return statearr_22592;
})();
var statearr_22593_22613 = state_22589__$1;
(statearr_22593_22613[(2)] = null);

(statearr_22593_22613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (4))){
var inst_22572 = (state_22589[(8)]);
var inst_22572__$1 = (state_22589[(2)]);
var inst_22573 = (inst_22572__$1 == null);
var state_22589__$1 = (function (){var statearr_22594 = state_22589;
(statearr_22594[(8)] = inst_22572__$1);

return statearr_22594;
})();
if(cljs.core.truth_(inst_22573)){
var statearr_22595_22614 = state_22589__$1;
(statearr_22595_22614[(1)] = (5));

} else {
var statearr_22596_22615 = state_22589__$1;
(statearr_22596_22615[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (6))){
var inst_22576 = (state_22589[(9)]);
var inst_22572 = (state_22589[(8)]);
var inst_22569 = (state_22589[(7)]);
var inst_22576__$1 = f.call(null,inst_22569,inst_22572);
var inst_22577 = cljs.core.reduced_QMARK_.call(null,inst_22576__$1);
var state_22589__$1 = (function (){var statearr_22597 = state_22589;
(statearr_22597[(9)] = inst_22576__$1);

return statearr_22597;
})();
if(inst_22577){
var statearr_22598_22616 = state_22589__$1;
(statearr_22598_22616[(1)] = (8));

} else {
var statearr_22599_22617 = state_22589__$1;
(statearr_22599_22617[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (3))){
var inst_22587 = (state_22589[(2)]);
var state_22589__$1 = state_22589;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22589__$1,inst_22587);
} else {
if((state_val_22590 === (2))){
var state_22589__$1 = state_22589;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22589__$1,(4),ch);
} else {
if((state_val_22590 === (9))){
var inst_22576 = (state_22589[(9)]);
var inst_22569 = inst_22576;
var state_22589__$1 = (function (){var statearr_22600 = state_22589;
(statearr_22600[(7)] = inst_22569);

return statearr_22600;
})();
var statearr_22601_22618 = state_22589__$1;
(statearr_22601_22618[(2)] = null);

(statearr_22601_22618[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (5))){
var inst_22569 = (state_22589[(7)]);
var state_22589__$1 = state_22589;
var statearr_22602_22619 = state_22589__$1;
(statearr_22602_22619[(2)] = inst_22569);

(statearr_22602_22619[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (10))){
var inst_22583 = (state_22589[(2)]);
var state_22589__$1 = state_22589;
var statearr_22603_22620 = state_22589__$1;
(statearr_22603_22620[(2)] = inst_22583);

(statearr_22603_22620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22590 === (8))){
var inst_22576 = (state_22589[(9)]);
var inst_22579 = cljs.core.deref.call(null,inst_22576);
var state_22589__$1 = state_22589;
var statearr_22604_22621 = state_22589__$1;
(statearr_22604_22621[(2)] = inst_22579);

(statearr_22604_22621[(1)] = (10));


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
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__20473__auto__ = null;
var cljs$core$async$reduce_$_state_machine__20473__auto____0 = (function (){
var statearr_22608 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22608[(0)] = cljs$core$async$reduce_$_state_machine__20473__auto__);

(statearr_22608[(1)] = (1));

return statearr_22608;
});
var cljs$core$async$reduce_$_state_machine__20473__auto____1 = (function (state_22589){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22589);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22609){if((e22609 instanceof Object)){
var ex__20476__auto__ = e22609;
var statearr_22610_22622 = state_22589;
(statearr_22610_22622[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22589);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22609;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22623 = state_22589;
state_22589 = G__22623;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__20473__auto__ = function(state_22589){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__20473__auto____1.call(this,state_22589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__20473__auto____0;
cljs$core$async$reduce_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__20473__auto____1;
return cljs$core$async$reduce_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_22611 = f__21832__auto__.call(null);
(statearr_22611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_22611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args22624 = [];
var len__19529__auto___22676 = arguments.length;
var i__19530__auto___22677 = (0);
while(true){
if((i__19530__auto___22677 < len__19529__auto___22676)){
args22624.push((arguments[i__19530__auto___22677]));

var G__22678 = (i__19530__auto___22677 + (1));
i__19530__auto___22677 = G__22678;
continue;
} else {
}
break;
}

var G__22626 = args22624.length;
switch (G__22626) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22624.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_22651){
var state_val_22652 = (state_22651[(1)]);
if((state_val_22652 === (7))){
var inst_22633 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
var statearr_22653_22680 = state_22651__$1;
(statearr_22653_22680[(2)] = inst_22633);

(statearr_22653_22680[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (1))){
var inst_22627 = cljs.core.seq.call(null,coll);
var inst_22628 = inst_22627;
var state_22651__$1 = (function (){var statearr_22654 = state_22651;
(statearr_22654[(7)] = inst_22628);

return statearr_22654;
})();
var statearr_22655_22681 = state_22651__$1;
(statearr_22655_22681[(2)] = null);

(statearr_22655_22681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (4))){
var inst_22628 = (state_22651[(7)]);
var inst_22631 = cljs.core.first.call(null,inst_22628);
var state_22651__$1 = state_22651;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22651__$1,(7),ch,inst_22631);
} else {
if((state_val_22652 === (13))){
var inst_22645 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
var statearr_22656_22682 = state_22651__$1;
(statearr_22656_22682[(2)] = inst_22645);

(statearr_22656_22682[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (6))){
var inst_22636 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
if(cljs.core.truth_(inst_22636)){
var statearr_22657_22683 = state_22651__$1;
(statearr_22657_22683[(1)] = (8));

} else {
var statearr_22658_22684 = state_22651__$1;
(statearr_22658_22684[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (3))){
var inst_22649 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22651__$1,inst_22649);
} else {
if((state_val_22652 === (12))){
var state_22651__$1 = state_22651;
var statearr_22659_22685 = state_22651__$1;
(statearr_22659_22685[(2)] = null);

(statearr_22659_22685[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (2))){
var inst_22628 = (state_22651[(7)]);
var state_22651__$1 = state_22651;
if(cljs.core.truth_(inst_22628)){
var statearr_22660_22686 = state_22651__$1;
(statearr_22660_22686[(1)] = (4));

} else {
var statearr_22661_22687 = state_22651__$1;
(statearr_22661_22687[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (11))){
var inst_22642 = cljs.core.async.close_BANG_.call(null,ch);
var state_22651__$1 = state_22651;
var statearr_22662_22688 = state_22651__$1;
(statearr_22662_22688[(2)] = inst_22642);

(statearr_22662_22688[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (9))){
var state_22651__$1 = state_22651;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22663_22689 = state_22651__$1;
(statearr_22663_22689[(1)] = (11));

} else {
var statearr_22664_22690 = state_22651__$1;
(statearr_22664_22690[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (5))){
var inst_22628 = (state_22651[(7)]);
var state_22651__$1 = state_22651;
var statearr_22665_22691 = state_22651__$1;
(statearr_22665_22691[(2)] = inst_22628);

(statearr_22665_22691[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (10))){
var inst_22647 = (state_22651[(2)]);
var state_22651__$1 = state_22651;
var statearr_22666_22692 = state_22651__$1;
(statearr_22666_22692[(2)] = inst_22647);

(statearr_22666_22692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22652 === (8))){
var inst_22628 = (state_22651[(7)]);
var inst_22638 = cljs.core.next.call(null,inst_22628);
var inst_22628__$1 = inst_22638;
var state_22651__$1 = (function (){var statearr_22667 = state_22651;
(statearr_22667[(7)] = inst_22628__$1);

return statearr_22667;
})();
var statearr_22668_22693 = state_22651__$1;
(statearr_22668_22693[(2)] = null);

(statearr_22668_22693[(1)] = (2));


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
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_22672 = [null,null,null,null,null,null,null,null];
(statearr_22672[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_22672[(1)] = (1));

return statearr_22672;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_22651){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_22651);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e22673){if((e22673 instanceof Object)){
var ex__20476__auto__ = e22673;
var statearr_22674_22694 = state_22651;
(statearr_22674_22694[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22673;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22695 = state_22651;
state_22651 = G__22695;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_22651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_22651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_22675 = f__21832__auto__.call(null);
(statearr_22675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_22675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__19122__auto__ = (((_ == null))?null:_);
var m__19123__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,_);
} else {
var m__19123__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__19123__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m);
} else {
var m__19123__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async22917 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22917 = (function (mult,ch,cs,meta22918){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta22918 = meta22918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_22919,meta22918__$1){
var self__ = this;
var _22919__$1 = this;
return (new cljs.core.async.t_cljs$core$async22917(self__.mult,self__.ch,self__.cs,meta22918__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async22917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_22919){
var self__ = this;
var _22919__$1 = this;
return self__.meta22918;
});})(cs))
;

cljs.core.async.t_cljs$core$async22917.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async22917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async22917.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async22917.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22917.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22917.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async22917.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22918","meta22918",1146443526,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async22917.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22917.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22917";

cljs.core.async.t_cljs$core$async22917.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async22917");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async22917 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async22917(mult__$1,ch__$1,cs__$1,meta22918){
return (new cljs.core.async.t_cljs$core$async22917(mult__$1,ch__$1,cs__$1,meta22918));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async22917(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__21831__auto___23138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___23138,cs,m,dchan,dctr,done){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___23138,cs,m,dchan,dctr,done){
return (function (state_23050){
var state_val_23051 = (state_23050[(1)]);
if((state_val_23051 === (7))){
var inst_23046 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23052_23139 = state_23050__$1;
(statearr_23052_23139[(2)] = inst_23046);

(statearr_23052_23139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (20))){
var inst_22951 = (state_23050[(7)]);
var inst_22961 = cljs.core.first.call(null,inst_22951);
var inst_22962 = cljs.core.nth.call(null,inst_22961,(0),null);
var inst_22963 = cljs.core.nth.call(null,inst_22961,(1),null);
var state_23050__$1 = (function (){var statearr_23053 = state_23050;
(statearr_23053[(8)] = inst_22962);

return statearr_23053;
})();
if(cljs.core.truth_(inst_22963)){
var statearr_23054_23140 = state_23050__$1;
(statearr_23054_23140[(1)] = (22));

} else {
var statearr_23055_23141 = state_23050__$1;
(statearr_23055_23141[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (27))){
var inst_22991 = (state_23050[(9)]);
var inst_22993 = (state_23050[(10)]);
var inst_22998 = (state_23050[(11)]);
var inst_22922 = (state_23050[(12)]);
var inst_22998__$1 = cljs.core._nth.call(null,inst_22991,inst_22993);
var inst_22999 = cljs.core.async.put_BANG_.call(null,inst_22998__$1,inst_22922,done);
var state_23050__$1 = (function (){var statearr_23056 = state_23050;
(statearr_23056[(11)] = inst_22998__$1);

return statearr_23056;
})();
if(cljs.core.truth_(inst_22999)){
var statearr_23057_23142 = state_23050__$1;
(statearr_23057_23142[(1)] = (30));

} else {
var statearr_23058_23143 = state_23050__$1;
(statearr_23058_23143[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (1))){
var state_23050__$1 = state_23050;
var statearr_23059_23144 = state_23050__$1;
(statearr_23059_23144[(2)] = null);

(statearr_23059_23144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (24))){
var inst_22951 = (state_23050[(7)]);
var inst_22968 = (state_23050[(2)]);
var inst_22969 = cljs.core.next.call(null,inst_22951);
var inst_22931 = inst_22969;
var inst_22932 = null;
var inst_22933 = (0);
var inst_22934 = (0);
var state_23050__$1 = (function (){var statearr_23060 = state_23050;
(statearr_23060[(13)] = inst_22934);

(statearr_23060[(14)] = inst_22931);

(statearr_23060[(15)] = inst_22932);

(statearr_23060[(16)] = inst_22933);

(statearr_23060[(17)] = inst_22968);

return statearr_23060;
})();
var statearr_23061_23145 = state_23050__$1;
(statearr_23061_23145[(2)] = null);

(statearr_23061_23145[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (39))){
var state_23050__$1 = state_23050;
var statearr_23065_23146 = state_23050__$1;
(statearr_23065_23146[(2)] = null);

(statearr_23065_23146[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (4))){
var inst_22922 = (state_23050[(12)]);
var inst_22922__$1 = (state_23050[(2)]);
var inst_22923 = (inst_22922__$1 == null);
var state_23050__$1 = (function (){var statearr_23066 = state_23050;
(statearr_23066[(12)] = inst_22922__$1);

return statearr_23066;
})();
if(cljs.core.truth_(inst_22923)){
var statearr_23067_23147 = state_23050__$1;
(statearr_23067_23147[(1)] = (5));

} else {
var statearr_23068_23148 = state_23050__$1;
(statearr_23068_23148[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (15))){
var inst_22934 = (state_23050[(13)]);
var inst_22931 = (state_23050[(14)]);
var inst_22932 = (state_23050[(15)]);
var inst_22933 = (state_23050[(16)]);
var inst_22947 = (state_23050[(2)]);
var inst_22948 = (inst_22934 + (1));
var tmp23062 = inst_22931;
var tmp23063 = inst_22932;
var tmp23064 = inst_22933;
var inst_22931__$1 = tmp23062;
var inst_22932__$1 = tmp23063;
var inst_22933__$1 = tmp23064;
var inst_22934__$1 = inst_22948;
var state_23050__$1 = (function (){var statearr_23069 = state_23050;
(statearr_23069[(13)] = inst_22934__$1);

(statearr_23069[(14)] = inst_22931__$1);

(statearr_23069[(15)] = inst_22932__$1);

(statearr_23069[(16)] = inst_22933__$1);

(statearr_23069[(18)] = inst_22947);

return statearr_23069;
})();
var statearr_23070_23149 = state_23050__$1;
(statearr_23070_23149[(2)] = null);

(statearr_23070_23149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (21))){
var inst_22972 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23074_23150 = state_23050__$1;
(statearr_23074_23150[(2)] = inst_22972);

(statearr_23074_23150[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (31))){
var inst_22998 = (state_23050[(11)]);
var inst_23002 = done.call(null,null);
var inst_23003 = cljs.core.async.untap_STAR_.call(null,m,inst_22998);
var state_23050__$1 = (function (){var statearr_23075 = state_23050;
(statearr_23075[(19)] = inst_23002);

return statearr_23075;
})();
var statearr_23076_23151 = state_23050__$1;
(statearr_23076_23151[(2)] = inst_23003);

(statearr_23076_23151[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (32))){
var inst_22992 = (state_23050[(20)]);
var inst_22991 = (state_23050[(9)]);
var inst_22990 = (state_23050[(21)]);
var inst_22993 = (state_23050[(10)]);
var inst_23005 = (state_23050[(2)]);
var inst_23006 = (inst_22993 + (1));
var tmp23071 = inst_22992;
var tmp23072 = inst_22991;
var tmp23073 = inst_22990;
var inst_22990__$1 = tmp23073;
var inst_22991__$1 = tmp23072;
var inst_22992__$1 = tmp23071;
var inst_22993__$1 = inst_23006;
var state_23050__$1 = (function (){var statearr_23077 = state_23050;
(statearr_23077[(20)] = inst_22992__$1);

(statearr_23077[(22)] = inst_23005);

(statearr_23077[(9)] = inst_22991__$1);

(statearr_23077[(21)] = inst_22990__$1);

(statearr_23077[(10)] = inst_22993__$1);

return statearr_23077;
})();
var statearr_23078_23152 = state_23050__$1;
(statearr_23078_23152[(2)] = null);

(statearr_23078_23152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (40))){
var inst_23018 = (state_23050[(23)]);
var inst_23022 = done.call(null,null);
var inst_23023 = cljs.core.async.untap_STAR_.call(null,m,inst_23018);
var state_23050__$1 = (function (){var statearr_23079 = state_23050;
(statearr_23079[(24)] = inst_23022);

return statearr_23079;
})();
var statearr_23080_23153 = state_23050__$1;
(statearr_23080_23153[(2)] = inst_23023);

(statearr_23080_23153[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (33))){
var inst_23009 = (state_23050[(25)]);
var inst_23011 = cljs.core.chunked_seq_QMARK_.call(null,inst_23009);
var state_23050__$1 = state_23050;
if(inst_23011){
var statearr_23081_23154 = state_23050__$1;
(statearr_23081_23154[(1)] = (36));

} else {
var statearr_23082_23155 = state_23050__$1;
(statearr_23082_23155[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (13))){
var inst_22941 = (state_23050[(26)]);
var inst_22944 = cljs.core.async.close_BANG_.call(null,inst_22941);
var state_23050__$1 = state_23050;
var statearr_23083_23156 = state_23050__$1;
(statearr_23083_23156[(2)] = inst_22944);

(statearr_23083_23156[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (22))){
var inst_22962 = (state_23050[(8)]);
var inst_22965 = cljs.core.async.close_BANG_.call(null,inst_22962);
var state_23050__$1 = state_23050;
var statearr_23084_23157 = state_23050__$1;
(statearr_23084_23157[(2)] = inst_22965);

(statearr_23084_23157[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (36))){
var inst_23009 = (state_23050[(25)]);
var inst_23013 = cljs.core.chunk_first.call(null,inst_23009);
var inst_23014 = cljs.core.chunk_rest.call(null,inst_23009);
var inst_23015 = cljs.core.count.call(null,inst_23013);
var inst_22990 = inst_23014;
var inst_22991 = inst_23013;
var inst_22992 = inst_23015;
var inst_22993 = (0);
var state_23050__$1 = (function (){var statearr_23085 = state_23050;
(statearr_23085[(20)] = inst_22992);

(statearr_23085[(9)] = inst_22991);

(statearr_23085[(21)] = inst_22990);

(statearr_23085[(10)] = inst_22993);

return statearr_23085;
})();
var statearr_23086_23158 = state_23050__$1;
(statearr_23086_23158[(2)] = null);

(statearr_23086_23158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (41))){
var inst_23009 = (state_23050[(25)]);
var inst_23025 = (state_23050[(2)]);
var inst_23026 = cljs.core.next.call(null,inst_23009);
var inst_22990 = inst_23026;
var inst_22991 = null;
var inst_22992 = (0);
var inst_22993 = (0);
var state_23050__$1 = (function (){var statearr_23087 = state_23050;
(statearr_23087[(20)] = inst_22992);

(statearr_23087[(27)] = inst_23025);

(statearr_23087[(9)] = inst_22991);

(statearr_23087[(21)] = inst_22990);

(statearr_23087[(10)] = inst_22993);

return statearr_23087;
})();
var statearr_23088_23159 = state_23050__$1;
(statearr_23088_23159[(2)] = null);

(statearr_23088_23159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (43))){
var state_23050__$1 = state_23050;
var statearr_23089_23160 = state_23050__$1;
(statearr_23089_23160[(2)] = null);

(statearr_23089_23160[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (29))){
var inst_23034 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23090_23161 = state_23050__$1;
(statearr_23090_23161[(2)] = inst_23034);

(statearr_23090_23161[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (44))){
var inst_23043 = (state_23050[(2)]);
var state_23050__$1 = (function (){var statearr_23091 = state_23050;
(statearr_23091[(28)] = inst_23043);

return statearr_23091;
})();
var statearr_23092_23162 = state_23050__$1;
(statearr_23092_23162[(2)] = null);

(statearr_23092_23162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (6))){
var inst_22982 = (state_23050[(29)]);
var inst_22981 = cljs.core.deref.call(null,cs);
var inst_22982__$1 = cljs.core.keys.call(null,inst_22981);
var inst_22983 = cljs.core.count.call(null,inst_22982__$1);
var inst_22984 = cljs.core.reset_BANG_.call(null,dctr,inst_22983);
var inst_22989 = cljs.core.seq.call(null,inst_22982__$1);
var inst_22990 = inst_22989;
var inst_22991 = null;
var inst_22992 = (0);
var inst_22993 = (0);
var state_23050__$1 = (function (){var statearr_23093 = state_23050;
(statearr_23093[(20)] = inst_22992);

(statearr_23093[(29)] = inst_22982__$1);

(statearr_23093[(9)] = inst_22991);

(statearr_23093[(21)] = inst_22990);

(statearr_23093[(30)] = inst_22984);

(statearr_23093[(10)] = inst_22993);

return statearr_23093;
})();
var statearr_23094_23163 = state_23050__$1;
(statearr_23094_23163[(2)] = null);

(statearr_23094_23163[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (28))){
var inst_23009 = (state_23050[(25)]);
var inst_22990 = (state_23050[(21)]);
var inst_23009__$1 = cljs.core.seq.call(null,inst_22990);
var state_23050__$1 = (function (){var statearr_23095 = state_23050;
(statearr_23095[(25)] = inst_23009__$1);

return statearr_23095;
})();
if(inst_23009__$1){
var statearr_23096_23164 = state_23050__$1;
(statearr_23096_23164[(1)] = (33));

} else {
var statearr_23097_23165 = state_23050__$1;
(statearr_23097_23165[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (25))){
var inst_22992 = (state_23050[(20)]);
var inst_22993 = (state_23050[(10)]);
var inst_22995 = (inst_22993 < inst_22992);
var inst_22996 = inst_22995;
var state_23050__$1 = state_23050;
if(cljs.core.truth_(inst_22996)){
var statearr_23098_23166 = state_23050__$1;
(statearr_23098_23166[(1)] = (27));

} else {
var statearr_23099_23167 = state_23050__$1;
(statearr_23099_23167[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (34))){
var state_23050__$1 = state_23050;
var statearr_23100_23168 = state_23050__$1;
(statearr_23100_23168[(2)] = null);

(statearr_23100_23168[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (17))){
var state_23050__$1 = state_23050;
var statearr_23101_23169 = state_23050__$1;
(statearr_23101_23169[(2)] = null);

(statearr_23101_23169[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (3))){
var inst_23048 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23050__$1,inst_23048);
} else {
if((state_val_23051 === (12))){
var inst_22977 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23102_23170 = state_23050__$1;
(statearr_23102_23170[(2)] = inst_22977);

(statearr_23102_23170[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (2))){
var state_23050__$1 = state_23050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23050__$1,(4),ch);
} else {
if((state_val_23051 === (23))){
var state_23050__$1 = state_23050;
var statearr_23103_23171 = state_23050__$1;
(statearr_23103_23171[(2)] = null);

(statearr_23103_23171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (35))){
var inst_23032 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23104_23172 = state_23050__$1;
(statearr_23104_23172[(2)] = inst_23032);

(statearr_23104_23172[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (19))){
var inst_22951 = (state_23050[(7)]);
var inst_22955 = cljs.core.chunk_first.call(null,inst_22951);
var inst_22956 = cljs.core.chunk_rest.call(null,inst_22951);
var inst_22957 = cljs.core.count.call(null,inst_22955);
var inst_22931 = inst_22956;
var inst_22932 = inst_22955;
var inst_22933 = inst_22957;
var inst_22934 = (0);
var state_23050__$1 = (function (){var statearr_23105 = state_23050;
(statearr_23105[(13)] = inst_22934);

(statearr_23105[(14)] = inst_22931);

(statearr_23105[(15)] = inst_22932);

(statearr_23105[(16)] = inst_22933);

return statearr_23105;
})();
var statearr_23106_23173 = state_23050__$1;
(statearr_23106_23173[(2)] = null);

(statearr_23106_23173[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (11))){
var inst_22931 = (state_23050[(14)]);
var inst_22951 = (state_23050[(7)]);
var inst_22951__$1 = cljs.core.seq.call(null,inst_22931);
var state_23050__$1 = (function (){var statearr_23107 = state_23050;
(statearr_23107[(7)] = inst_22951__$1);

return statearr_23107;
})();
if(inst_22951__$1){
var statearr_23108_23174 = state_23050__$1;
(statearr_23108_23174[(1)] = (16));

} else {
var statearr_23109_23175 = state_23050__$1;
(statearr_23109_23175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (9))){
var inst_22979 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23110_23176 = state_23050__$1;
(statearr_23110_23176[(2)] = inst_22979);

(statearr_23110_23176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (5))){
var inst_22929 = cljs.core.deref.call(null,cs);
var inst_22930 = cljs.core.seq.call(null,inst_22929);
var inst_22931 = inst_22930;
var inst_22932 = null;
var inst_22933 = (0);
var inst_22934 = (0);
var state_23050__$1 = (function (){var statearr_23111 = state_23050;
(statearr_23111[(13)] = inst_22934);

(statearr_23111[(14)] = inst_22931);

(statearr_23111[(15)] = inst_22932);

(statearr_23111[(16)] = inst_22933);

return statearr_23111;
})();
var statearr_23112_23177 = state_23050__$1;
(statearr_23112_23177[(2)] = null);

(statearr_23112_23177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (14))){
var state_23050__$1 = state_23050;
var statearr_23113_23178 = state_23050__$1;
(statearr_23113_23178[(2)] = null);

(statearr_23113_23178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (45))){
var inst_23040 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23114_23179 = state_23050__$1;
(statearr_23114_23179[(2)] = inst_23040);

(statearr_23114_23179[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (26))){
var inst_22982 = (state_23050[(29)]);
var inst_23036 = (state_23050[(2)]);
var inst_23037 = cljs.core.seq.call(null,inst_22982);
var state_23050__$1 = (function (){var statearr_23115 = state_23050;
(statearr_23115[(31)] = inst_23036);

return statearr_23115;
})();
if(inst_23037){
var statearr_23116_23180 = state_23050__$1;
(statearr_23116_23180[(1)] = (42));

} else {
var statearr_23117_23181 = state_23050__$1;
(statearr_23117_23181[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (16))){
var inst_22951 = (state_23050[(7)]);
var inst_22953 = cljs.core.chunked_seq_QMARK_.call(null,inst_22951);
var state_23050__$1 = state_23050;
if(inst_22953){
var statearr_23118_23182 = state_23050__$1;
(statearr_23118_23182[(1)] = (19));

} else {
var statearr_23119_23183 = state_23050__$1;
(statearr_23119_23183[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (38))){
var inst_23029 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23120_23184 = state_23050__$1;
(statearr_23120_23184[(2)] = inst_23029);

(statearr_23120_23184[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (30))){
var state_23050__$1 = state_23050;
var statearr_23121_23185 = state_23050__$1;
(statearr_23121_23185[(2)] = null);

(statearr_23121_23185[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (10))){
var inst_22934 = (state_23050[(13)]);
var inst_22932 = (state_23050[(15)]);
var inst_22940 = cljs.core._nth.call(null,inst_22932,inst_22934);
var inst_22941 = cljs.core.nth.call(null,inst_22940,(0),null);
var inst_22942 = cljs.core.nth.call(null,inst_22940,(1),null);
var state_23050__$1 = (function (){var statearr_23122 = state_23050;
(statearr_23122[(26)] = inst_22941);

return statearr_23122;
})();
if(cljs.core.truth_(inst_22942)){
var statearr_23123_23186 = state_23050__$1;
(statearr_23123_23186[(1)] = (13));

} else {
var statearr_23124_23187 = state_23050__$1;
(statearr_23124_23187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (18))){
var inst_22975 = (state_23050[(2)]);
var state_23050__$1 = state_23050;
var statearr_23125_23188 = state_23050__$1;
(statearr_23125_23188[(2)] = inst_22975);

(statearr_23125_23188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (42))){
var state_23050__$1 = state_23050;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23050__$1,(45),dchan);
} else {
if((state_val_23051 === (37))){
var inst_23018 = (state_23050[(23)]);
var inst_23009 = (state_23050[(25)]);
var inst_22922 = (state_23050[(12)]);
var inst_23018__$1 = cljs.core.first.call(null,inst_23009);
var inst_23019 = cljs.core.async.put_BANG_.call(null,inst_23018__$1,inst_22922,done);
var state_23050__$1 = (function (){var statearr_23126 = state_23050;
(statearr_23126[(23)] = inst_23018__$1);

return statearr_23126;
})();
if(cljs.core.truth_(inst_23019)){
var statearr_23127_23189 = state_23050__$1;
(statearr_23127_23189[(1)] = (39));

} else {
var statearr_23128_23190 = state_23050__$1;
(statearr_23128_23190[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23051 === (8))){
var inst_22934 = (state_23050[(13)]);
var inst_22933 = (state_23050[(16)]);
var inst_22936 = (inst_22934 < inst_22933);
var inst_22937 = inst_22936;
var state_23050__$1 = state_23050;
if(cljs.core.truth_(inst_22937)){
var statearr_23129_23191 = state_23050__$1;
(statearr_23129_23191[(1)] = (10));

} else {
var statearr_23130_23192 = state_23050__$1;
(statearr_23130_23192[(1)] = (11));

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
});})(c__21831__auto___23138,cs,m,dchan,dctr,done))
;
return ((function (switch__20472__auto__,c__21831__auto___23138,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__20473__auto__ = null;
var cljs$core$async$mult_$_state_machine__20473__auto____0 = (function (){
var statearr_23134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23134[(0)] = cljs$core$async$mult_$_state_machine__20473__auto__);

(statearr_23134[(1)] = (1));

return statearr_23134;
});
var cljs$core$async$mult_$_state_machine__20473__auto____1 = (function (state_23050){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23135){if((e23135 instanceof Object)){
var ex__20476__auto__ = e23135;
var statearr_23136_23193 = state_23050;
(statearr_23136_23193[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23194 = state_23050;
state_23050 = G__23194;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__20473__auto__ = function(state_23050){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__20473__auto____1.call(this,state_23050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__20473__auto____0;
cljs$core$async$mult_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__20473__auto____1;
return cljs$core$async$mult_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___23138,cs,m,dchan,dctr,done))
})();
var state__21833__auto__ = (function (){var statearr_23137 = f__21832__auto__.call(null);
(statearr_23137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___23138);

return statearr_23137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___23138,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args23195 = [];
var len__19529__auto___23198 = arguments.length;
var i__19530__auto___23199 = (0);
while(true){
if((i__19530__auto___23199 < len__19529__auto___23198)){
args23195.push((arguments[i__19530__auto___23199]));

var G__23200 = (i__19530__auto___23199 + (1));
i__19530__auto___23199 = G__23200;
continue;
} else {
}
break;
}

var G__23197 = args23195.length;
switch (G__23197) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23195.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m);
} else {
var m__19123__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,state_map);
} else {
var m__19123__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__19122__auto__ = (((m == null))?null:m);
var m__19123__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,m,mode);
} else {
var m__19123__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__19536__auto__ = [];
var len__19529__auto___23212 = arguments.length;
var i__19530__auto___23213 = (0);
while(true){
if((i__19530__auto___23213 < len__19529__auto___23212)){
args__19536__auto__.push((arguments[i__19530__auto___23213]));

var G__23214 = (i__19530__auto___23213 + (1));
i__19530__auto___23213 = G__23214;
continue;
} else {
}
break;
}

var argseq__19537__auto__ = ((((3) < args__19536__auto__.length))?(new cljs.core.IndexedSeq(args__19536__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__19537__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23206){
var map__23207 = p__23206;
var map__23207__$1 = ((((!((map__23207 == null)))?((((map__23207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23207):map__23207);
var opts = map__23207__$1;
var statearr_23209_23215 = state;
(statearr_23209_23215[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__23207,map__23207__$1,opts){
return (function (val){
var statearr_23210_23216 = state;
(statearr_23210_23216[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23207,map__23207__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_23211_23217 = state;
(statearr_23211_23217[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23202){
var G__23203 = cljs.core.first.call(null,seq23202);
var seq23202__$1 = cljs.core.next.call(null,seq23202);
var G__23204 = cljs.core.first.call(null,seq23202__$1);
var seq23202__$2 = cljs.core.next.call(null,seq23202__$1);
var G__23205 = cljs.core.first.call(null,seq23202__$2);
var seq23202__$3 = cljs.core.next.call(null,seq23202__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23203,G__23204,G__23205,seq23202__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async23381 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23381 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23382){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23382 = meta23382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23383,meta23382__$1){
var self__ = this;
var _23383__$1 = this;
return (new cljs.core.async.t_cljs$core$async23381(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23382__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23383){
var self__ = this;
var _23383__$1 = this;
return self__.meta23382;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str("(solo-modes mode)")].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23382","meta23382",-1188979733,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23381.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23381.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23381";

cljs.core.async.t_cljs$core$async23381.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23381");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23381 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23381(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23382){
return (new cljs.core.async.t_cljs$core$async23381(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23382));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23381(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21831__auto___23544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___23544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___23544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23481){
var state_val_23482 = (state_23481[(1)]);
if((state_val_23482 === (7))){
var inst_23399 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23483_23545 = state_23481__$1;
(statearr_23483_23545[(2)] = inst_23399);

(statearr_23483_23545[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (20))){
var inst_23411 = (state_23481[(7)]);
var state_23481__$1 = state_23481;
var statearr_23484_23546 = state_23481__$1;
(statearr_23484_23546[(2)] = inst_23411);

(statearr_23484_23546[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (27))){
var state_23481__$1 = state_23481;
var statearr_23485_23547 = state_23481__$1;
(statearr_23485_23547[(2)] = null);

(statearr_23485_23547[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (1))){
var inst_23387 = (state_23481[(8)]);
var inst_23387__$1 = calc_state.call(null);
var inst_23389 = (inst_23387__$1 == null);
var inst_23390 = cljs.core.not.call(null,inst_23389);
var state_23481__$1 = (function (){var statearr_23486 = state_23481;
(statearr_23486[(8)] = inst_23387__$1);

return statearr_23486;
})();
if(inst_23390){
var statearr_23487_23548 = state_23481__$1;
(statearr_23487_23548[(1)] = (2));

} else {
var statearr_23488_23549 = state_23481__$1;
(statearr_23488_23549[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (24))){
var inst_23434 = (state_23481[(9)]);
var inst_23455 = (state_23481[(10)]);
var inst_23441 = (state_23481[(11)]);
var inst_23455__$1 = inst_23434.call(null,inst_23441);
var state_23481__$1 = (function (){var statearr_23489 = state_23481;
(statearr_23489[(10)] = inst_23455__$1);

return statearr_23489;
})();
if(cljs.core.truth_(inst_23455__$1)){
var statearr_23490_23550 = state_23481__$1;
(statearr_23490_23550[(1)] = (29));

} else {
var statearr_23491_23551 = state_23481__$1;
(statearr_23491_23551[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (4))){
var inst_23402 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23402)){
var statearr_23492_23552 = state_23481__$1;
(statearr_23492_23552[(1)] = (8));

} else {
var statearr_23493_23553 = state_23481__$1;
(statearr_23493_23553[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (15))){
var inst_23428 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23428)){
var statearr_23494_23554 = state_23481__$1;
(statearr_23494_23554[(1)] = (19));

} else {
var statearr_23495_23555 = state_23481__$1;
(statearr_23495_23555[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (21))){
var inst_23433 = (state_23481[(12)]);
var inst_23433__$1 = (state_23481[(2)]);
var inst_23434 = cljs.core.get.call(null,inst_23433__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23435 = cljs.core.get.call(null,inst_23433__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23436 = cljs.core.get.call(null,inst_23433__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23481__$1 = (function (){var statearr_23496 = state_23481;
(statearr_23496[(9)] = inst_23434);

(statearr_23496[(12)] = inst_23433__$1);

(statearr_23496[(13)] = inst_23435);

return statearr_23496;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23481__$1,(22),inst_23436);
} else {
if((state_val_23482 === (31))){
var inst_23463 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23463)){
var statearr_23497_23556 = state_23481__$1;
(statearr_23497_23556[(1)] = (32));

} else {
var statearr_23498_23557 = state_23481__$1;
(statearr_23498_23557[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (32))){
var inst_23440 = (state_23481[(14)]);
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23481__$1,(35),out,inst_23440);
} else {
if((state_val_23482 === (33))){
var inst_23433 = (state_23481[(12)]);
var inst_23411 = inst_23433;
var state_23481__$1 = (function (){var statearr_23499 = state_23481;
(statearr_23499[(7)] = inst_23411);

return statearr_23499;
})();
var statearr_23500_23558 = state_23481__$1;
(statearr_23500_23558[(2)] = null);

(statearr_23500_23558[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (13))){
var inst_23411 = (state_23481[(7)]);
var inst_23418 = inst_23411.cljs$lang$protocol_mask$partition0$;
var inst_23419 = (inst_23418 & (64));
var inst_23420 = inst_23411.cljs$core$ISeq$;
var inst_23421 = (inst_23419) || (inst_23420);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23421)){
var statearr_23501_23559 = state_23481__$1;
(statearr_23501_23559[(1)] = (16));

} else {
var statearr_23502_23560 = state_23481__$1;
(statearr_23502_23560[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (22))){
var inst_23440 = (state_23481[(14)]);
var inst_23441 = (state_23481[(11)]);
var inst_23439 = (state_23481[(2)]);
var inst_23440__$1 = cljs.core.nth.call(null,inst_23439,(0),null);
var inst_23441__$1 = cljs.core.nth.call(null,inst_23439,(1),null);
var inst_23442 = (inst_23440__$1 == null);
var inst_23443 = cljs.core._EQ_.call(null,inst_23441__$1,change);
var inst_23444 = (inst_23442) || (inst_23443);
var state_23481__$1 = (function (){var statearr_23503 = state_23481;
(statearr_23503[(14)] = inst_23440__$1);

(statearr_23503[(11)] = inst_23441__$1);

return statearr_23503;
})();
if(cljs.core.truth_(inst_23444)){
var statearr_23504_23561 = state_23481__$1;
(statearr_23504_23561[(1)] = (23));

} else {
var statearr_23505_23562 = state_23481__$1;
(statearr_23505_23562[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (36))){
var inst_23433 = (state_23481[(12)]);
var inst_23411 = inst_23433;
var state_23481__$1 = (function (){var statearr_23506 = state_23481;
(statearr_23506[(7)] = inst_23411);

return statearr_23506;
})();
var statearr_23507_23563 = state_23481__$1;
(statearr_23507_23563[(2)] = null);

(statearr_23507_23563[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (29))){
var inst_23455 = (state_23481[(10)]);
var state_23481__$1 = state_23481;
var statearr_23508_23564 = state_23481__$1;
(statearr_23508_23564[(2)] = inst_23455);

(statearr_23508_23564[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (6))){
var state_23481__$1 = state_23481;
var statearr_23509_23565 = state_23481__$1;
(statearr_23509_23565[(2)] = false);

(statearr_23509_23565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (28))){
var inst_23451 = (state_23481[(2)]);
var inst_23452 = calc_state.call(null);
var inst_23411 = inst_23452;
var state_23481__$1 = (function (){var statearr_23510 = state_23481;
(statearr_23510[(15)] = inst_23451);

(statearr_23510[(7)] = inst_23411);

return statearr_23510;
})();
var statearr_23511_23566 = state_23481__$1;
(statearr_23511_23566[(2)] = null);

(statearr_23511_23566[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (25))){
var inst_23477 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23512_23567 = state_23481__$1;
(statearr_23512_23567[(2)] = inst_23477);

(statearr_23512_23567[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (34))){
var inst_23475 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23513_23568 = state_23481__$1;
(statearr_23513_23568[(2)] = inst_23475);

(statearr_23513_23568[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (17))){
var state_23481__$1 = state_23481;
var statearr_23514_23569 = state_23481__$1;
(statearr_23514_23569[(2)] = false);

(statearr_23514_23569[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (3))){
var state_23481__$1 = state_23481;
var statearr_23515_23570 = state_23481__$1;
(statearr_23515_23570[(2)] = false);

(statearr_23515_23570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (12))){
var inst_23479 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23481__$1,inst_23479);
} else {
if((state_val_23482 === (2))){
var inst_23387 = (state_23481[(8)]);
var inst_23392 = inst_23387.cljs$lang$protocol_mask$partition0$;
var inst_23393 = (inst_23392 & (64));
var inst_23394 = inst_23387.cljs$core$ISeq$;
var inst_23395 = (inst_23393) || (inst_23394);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23395)){
var statearr_23516_23571 = state_23481__$1;
(statearr_23516_23571[(1)] = (5));

} else {
var statearr_23517_23572 = state_23481__$1;
(statearr_23517_23572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (23))){
var inst_23440 = (state_23481[(14)]);
var inst_23446 = (inst_23440 == null);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23446)){
var statearr_23518_23573 = state_23481__$1;
(statearr_23518_23573[(1)] = (26));

} else {
var statearr_23519_23574 = state_23481__$1;
(statearr_23519_23574[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (35))){
var inst_23466 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
if(cljs.core.truth_(inst_23466)){
var statearr_23520_23575 = state_23481__$1;
(statearr_23520_23575[(1)] = (36));

} else {
var statearr_23521_23576 = state_23481__$1;
(statearr_23521_23576[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (19))){
var inst_23411 = (state_23481[(7)]);
var inst_23430 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23411);
var state_23481__$1 = state_23481;
var statearr_23522_23577 = state_23481__$1;
(statearr_23522_23577[(2)] = inst_23430);

(statearr_23522_23577[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (11))){
var inst_23411 = (state_23481[(7)]);
var inst_23415 = (inst_23411 == null);
var inst_23416 = cljs.core.not.call(null,inst_23415);
var state_23481__$1 = state_23481;
if(inst_23416){
var statearr_23523_23578 = state_23481__$1;
(statearr_23523_23578[(1)] = (13));

} else {
var statearr_23524_23579 = state_23481__$1;
(statearr_23524_23579[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (9))){
var inst_23387 = (state_23481[(8)]);
var state_23481__$1 = state_23481;
var statearr_23525_23580 = state_23481__$1;
(statearr_23525_23580[(2)] = inst_23387);

(statearr_23525_23580[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (5))){
var state_23481__$1 = state_23481;
var statearr_23526_23581 = state_23481__$1;
(statearr_23526_23581[(2)] = true);

(statearr_23526_23581[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (14))){
var state_23481__$1 = state_23481;
var statearr_23527_23582 = state_23481__$1;
(statearr_23527_23582[(2)] = false);

(statearr_23527_23582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (26))){
var inst_23441 = (state_23481[(11)]);
var inst_23448 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23441);
var state_23481__$1 = state_23481;
var statearr_23528_23583 = state_23481__$1;
(statearr_23528_23583[(2)] = inst_23448);

(statearr_23528_23583[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (16))){
var state_23481__$1 = state_23481;
var statearr_23529_23584 = state_23481__$1;
(statearr_23529_23584[(2)] = true);

(statearr_23529_23584[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (38))){
var inst_23471 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23530_23585 = state_23481__$1;
(statearr_23530_23585[(2)] = inst_23471);

(statearr_23530_23585[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (30))){
var inst_23434 = (state_23481[(9)]);
var inst_23435 = (state_23481[(13)]);
var inst_23441 = (state_23481[(11)]);
var inst_23458 = cljs.core.empty_QMARK_.call(null,inst_23434);
var inst_23459 = inst_23435.call(null,inst_23441);
var inst_23460 = cljs.core.not.call(null,inst_23459);
var inst_23461 = (inst_23458) && (inst_23460);
var state_23481__$1 = state_23481;
var statearr_23531_23586 = state_23481__$1;
(statearr_23531_23586[(2)] = inst_23461);

(statearr_23531_23586[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (10))){
var inst_23387 = (state_23481[(8)]);
var inst_23407 = (state_23481[(2)]);
var inst_23408 = cljs.core.get.call(null,inst_23407,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23409 = cljs.core.get.call(null,inst_23407,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23410 = cljs.core.get.call(null,inst_23407,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23411 = inst_23387;
var state_23481__$1 = (function (){var statearr_23532 = state_23481;
(statearr_23532[(16)] = inst_23408);

(statearr_23532[(17)] = inst_23409);

(statearr_23532[(7)] = inst_23411);

(statearr_23532[(18)] = inst_23410);

return statearr_23532;
})();
var statearr_23533_23587 = state_23481__$1;
(statearr_23533_23587[(2)] = null);

(statearr_23533_23587[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (18))){
var inst_23425 = (state_23481[(2)]);
var state_23481__$1 = state_23481;
var statearr_23534_23588 = state_23481__$1;
(statearr_23534_23588[(2)] = inst_23425);

(statearr_23534_23588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (37))){
var state_23481__$1 = state_23481;
var statearr_23535_23589 = state_23481__$1;
(statearr_23535_23589[(2)] = null);

(statearr_23535_23589[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23482 === (8))){
var inst_23387 = (state_23481[(8)]);
var inst_23404 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23387);
var state_23481__$1 = state_23481;
var statearr_23536_23590 = state_23481__$1;
(statearr_23536_23590[(2)] = inst_23404);

(statearr_23536_23590[(1)] = (10));


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
});})(c__21831__auto___23544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__20472__auto__,c__21831__auto___23544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__20473__auto__ = null;
var cljs$core$async$mix_$_state_machine__20473__auto____0 = (function (){
var statearr_23540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23540[(0)] = cljs$core$async$mix_$_state_machine__20473__auto__);

(statearr_23540[(1)] = (1));

return statearr_23540;
});
var cljs$core$async$mix_$_state_machine__20473__auto____1 = (function (state_23481){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23541){if((e23541 instanceof Object)){
var ex__20476__auto__ = e23541;
var statearr_23542_23591 = state_23481;
(statearr_23542_23591[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23592 = state_23481;
state_23481 = G__23592;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__20473__auto__ = function(state_23481){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__20473__auto____1.call(this,state_23481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__20473__auto____0;
cljs$core$async$mix_$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__20473__auto____1;
return cljs$core$async$mix_$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___23544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__21833__auto__ = (function (){var statearr_23543 = f__21832__auto__.call(null);
(statearr_23543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___23544);

return statearr_23543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___23544,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__19123__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v,ch);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args23593 = [];
var len__19529__auto___23596 = arguments.length;
var i__19530__auto___23597 = (0);
while(true){
if((i__19530__auto___23597 < len__19529__auto___23596)){
args23593.push((arguments[i__19530__auto___23597]));

var G__23598 = (i__19530__auto___23597 + (1));
i__19530__auto___23597 = G__23598;
continue;
} else {
}
break;
}

var G__23595 = args23593.length;
switch (G__23595) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23593.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__19122__auto__ = (((p == null))?null:p);
var m__19123__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__19122__auto__)]);
if(!((m__19123__auto__ == null))){
return m__19123__auto__.call(null,p,v);
} else {
var m__19123__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__19123__auto____$1 == null))){
return m__19123__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args23601 = [];
var len__19529__auto___23726 = arguments.length;
var i__19530__auto___23727 = (0);
while(true){
if((i__19530__auto___23727 < len__19529__auto___23726)){
args23601.push((arguments[i__19530__auto___23727]));

var G__23728 = (i__19530__auto___23727 + (1));
i__19530__auto___23727 = G__23728;
continue;
} else {
}
break;
}

var G__23603 = args23601.length;
switch (G__23603) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23601.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__18459__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__18459__auto__)){
return or__18459__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__18459__auto__,mults){
return (function (p1__23600_SHARP_){
if(cljs.core.truth_(p1__23600_SHARP_.call(null,topic))){
return p1__23600_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23600_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__18459__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23604 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23605){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23605 = meta23605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23606,meta23605__$1){
var self__ = this;
var _23606__$1 = this;
return (new cljs.core.async.t_cljs$core$async23604(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23605__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23606){
var self__ = this;
var _23606__$1 = this;
return self__.meta23605;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23604.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23604.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23605","meta23605",-1203297905,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23604";

cljs.core.async.t_cljs$core$async23604.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async23604");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23604 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23604(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23605){
return (new cljs.core.async.t_cljs$core$async23604(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23605));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23604(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21831__auto___23730 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___23730,mults,ensure_mult,p){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___23730,mults,ensure_mult,p){
return (function (state_23678){
var state_val_23679 = (state_23678[(1)]);
if((state_val_23679 === (7))){
var inst_23674 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23680_23731 = state_23678__$1;
(statearr_23680_23731[(2)] = inst_23674);

(statearr_23680_23731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (20))){
var state_23678__$1 = state_23678;
var statearr_23681_23732 = state_23678__$1;
(statearr_23681_23732[(2)] = null);

(statearr_23681_23732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (1))){
var state_23678__$1 = state_23678;
var statearr_23682_23733 = state_23678__$1;
(statearr_23682_23733[(2)] = null);

(statearr_23682_23733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (24))){
var inst_23657 = (state_23678[(7)]);
var inst_23666 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23657);
var state_23678__$1 = state_23678;
var statearr_23683_23734 = state_23678__$1;
(statearr_23683_23734[(2)] = inst_23666);

(statearr_23683_23734[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (4))){
var inst_23609 = (state_23678[(8)]);
var inst_23609__$1 = (state_23678[(2)]);
var inst_23610 = (inst_23609__$1 == null);
var state_23678__$1 = (function (){var statearr_23684 = state_23678;
(statearr_23684[(8)] = inst_23609__$1);

return statearr_23684;
})();
if(cljs.core.truth_(inst_23610)){
var statearr_23685_23735 = state_23678__$1;
(statearr_23685_23735[(1)] = (5));

} else {
var statearr_23686_23736 = state_23678__$1;
(statearr_23686_23736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (15))){
var inst_23651 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23687_23737 = state_23678__$1;
(statearr_23687_23737[(2)] = inst_23651);

(statearr_23687_23737[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (21))){
var inst_23671 = (state_23678[(2)]);
var state_23678__$1 = (function (){var statearr_23688 = state_23678;
(statearr_23688[(9)] = inst_23671);

return statearr_23688;
})();
var statearr_23689_23738 = state_23678__$1;
(statearr_23689_23738[(2)] = null);

(statearr_23689_23738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (13))){
var inst_23633 = (state_23678[(10)]);
var inst_23635 = cljs.core.chunked_seq_QMARK_.call(null,inst_23633);
var state_23678__$1 = state_23678;
if(inst_23635){
var statearr_23690_23739 = state_23678__$1;
(statearr_23690_23739[(1)] = (16));

} else {
var statearr_23691_23740 = state_23678__$1;
(statearr_23691_23740[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (22))){
var inst_23663 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
if(cljs.core.truth_(inst_23663)){
var statearr_23692_23741 = state_23678__$1;
(statearr_23692_23741[(1)] = (23));

} else {
var statearr_23693_23742 = state_23678__$1;
(statearr_23693_23742[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (6))){
var inst_23609 = (state_23678[(8)]);
var inst_23659 = (state_23678[(11)]);
var inst_23657 = (state_23678[(7)]);
var inst_23657__$1 = topic_fn.call(null,inst_23609);
var inst_23658 = cljs.core.deref.call(null,mults);
var inst_23659__$1 = cljs.core.get.call(null,inst_23658,inst_23657__$1);
var state_23678__$1 = (function (){var statearr_23694 = state_23678;
(statearr_23694[(11)] = inst_23659__$1);

(statearr_23694[(7)] = inst_23657__$1);

return statearr_23694;
})();
if(cljs.core.truth_(inst_23659__$1)){
var statearr_23695_23743 = state_23678__$1;
(statearr_23695_23743[(1)] = (19));

} else {
var statearr_23696_23744 = state_23678__$1;
(statearr_23696_23744[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (25))){
var inst_23668 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23697_23745 = state_23678__$1;
(statearr_23697_23745[(2)] = inst_23668);

(statearr_23697_23745[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (17))){
var inst_23633 = (state_23678[(10)]);
var inst_23642 = cljs.core.first.call(null,inst_23633);
var inst_23643 = cljs.core.async.muxch_STAR_.call(null,inst_23642);
var inst_23644 = cljs.core.async.close_BANG_.call(null,inst_23643);
var inst_23645 = cljs.core.next.call(null,inst_23633);
var inst_23619 = inst_23645;
var inst_23620 = null;
var inst_23621 = (0);
var inst_23622 = (0);
var state_23678__$1 = (function (){var statearr_23698 = state_23678;
(statearr_23698[(12)] = inst_23619);

(statearr_23698[(13)] = inst_23621);

(statearr_23698[(14)] = inst_23622);

(statearr_23698[(15)] = inst_23644);

(statearr_23698[(16)] = inst_23620);

return statearr_23698;
})();
var statearr_23699_23746 = state_23678__$1;
(statearr_23699_23746[(2)] = null);

(statearr_23699_23746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (3))){
var inst_23676 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23678__$1,inst_23676);
} else {
if((state_val_23679 === (12))){
var inst_23653 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23700_23747 = state_23678__$1;
(statearr_23700_23747[(2)] = inst_23653);

(statearr_23700_23747[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (2))){
var state_23678__$1 = state_23678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23678__$1,(4),ch);
} else {
if((state_val_23679 === (23))){
var state_23678__$1 = state_23678;
var statearr_23701_23748 = state_23678__$1;
(statearr_23701_23748[(2)] = null);

(statearr_23701_23748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (19))){
var inst_23609 = (state_23678[(8)]);
var inst_23659 = (state_23678[(11)]);
var inst_23661 = cljs.core.async.muxch_STAR_.call(null,inst_23659);
var state_23678__$1 = state_23678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23678__$1,(22),inst_23661,inst_23609);
} else {
if((state_val_23679 === (11))){
var inst_23633 = (state_23678[(10)]);
var inst_23619 = (state_23678[(12)]);
var inst_23633__$1 = cljs.core.seq.call(null,inst_23619);
var state_23678__$1 = (function (){var statearr_23702 = state_23678;
(statearr_23702[(10)] = inst_23633__$1);

return statearr_23702;
})();
if(inst_23633__$1){
var statearr_23703_23749 = state_23678__$1;
(statearr_23703_23749[(1)] = (13));

} else {
var statearr_23704_23750 = state_23678__$1;
(statearr_23704_23750[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (9))){
var inst_23655 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23705_23751 = state_23678__$1;
(statearr_23705_23751[(2)] = inst_23655);

(statearr_23705_23751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (5))){
var inst_23616 = cljs.core.deref.call(null,mults);
var inst_23617 = cljs.core.vals.call(null,inst_23616);
var inst_23618 = cljs.core.seq.call(null,inst_23617);
var inst_23619 = inst_23618;
var inst_23620 = null;
var inst_23621 = (0);
var inst_23622 = (0);
var state_23678__$1 = (function (){var statearr_23706 = state_23678;
(statearr_23706[(12)] = inst_23619);

(statearr_23706[(13)] = inst_23621);

(statearr_23706[(14)] = inst_23622);

(statearr_23706[(16)] = inst_23620);

return statearr_23706;
})();
var statearr_23707_23752 = state_23678__$1;
(statearr_23707_23752[(2)] = null);

(statearr_23707_23752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (14))){
var state_23678__$1 = state_23678;
var statearr_23711_23753 = state_23678__$1;
(statearr_23711_23753[(2)] = null);

(statearr_23711_23753[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (16))){
var inst_23633 = (state_23678[(10)]);
var inst_23637 = cljs.core.chunk_first.call(null,inst_23633);
var inst_23638 = cljs.core.chunk_rest.call(null,inst_23633);
var inst_23639 = cljs.core.count.call(null,inst_23637);
var inst_23619 = inst_23638;
var inst_23620 = inst_23637;
var inst_23621 = inst_23639;
var inst_23622 = (0);
var state_23678__$1 = (function (){var statearr_23712 = state_23678;
(statearr_23712[(12)] = inst_23619);

(statearr_23712[(13)] = inst_23621);

(statearr_23712[(14)] = inst_23622);

(statearr_23712[(16)] = inst_23620);

return statearr_23712;
})();
var statearr_23713_23754 = state_23678__$1;
(statearr_23713_23754[(2)] = null);

(statearr_23713_23754[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (10))){
var inst_23619 = (state_23678[(12)]);
var inst_23621 = (state_23678[(13)]);
var inst_23622 = (state_23678[(14)]);
var inst_23620 = (state_23678[(16)]);
var inst_23627 = cljs.core._nth.call(null,inst_23620,inst_23622);
var inst_23628 = cljs.core.async.muxch_STAR_.call(null,inst_23627);
var inst_23629 = cljs.core.async.close_BANG_.call(null,inst_23628);
var inst_23630 = (inst_23622 + (1));
var tmp23708 = inst_23619;
var tmp23709 = inst_23621;
var tmp23710 = inst_23620;
var inst_23619__$1 = tmp23708;
var inst_23620__$1 = tmp23710;
var inst_23621__$1 = tmp23709;
var inst_23622__$1 = inst_23630;
var state_23678__$1 = (function (){var statearr_23714 = state_23678;
(statearr_23714[(12)] = inst_23619__$1);

(statearr_23714[(13)] = inst_23621__$1);

(statearr_23714[(14)] = inst_23622__$1);

(statearr_23714[(16)] = inst_23620__$1);

(statearr_23714[(17)] = inst_23629);

return statearr_23714;
})();
var statearr_23715_23755 = state_23678__$1;
(statearr_23715_23755[(2)] = null);

(statearr_23715_23755[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (18))){
var inst_23648 = (state_23678[(2)]);
var state_23678__$1 = state_23678;
var statearr_23716_23756 = state_23678__$1;
(statearr_23716_23756[(2)] = inst_23648);

(statearr_23716_23756[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23679 === (8))){
var inst_23621 = (state_23678[(13)]);
var inst_23622 = (state_23678[(14)]);
var inst_23624 = (inst_23622 < inst_23621);
var inst_23625 = inst_23624;
var state_23678__$1 = state_23678;
if(cljs.core.truth_(inst_23625)){
var statearr_23717_23757 = state_23678__$1;
(statearr_23717_23757[(1)] = (10));

} else {
var statearr_23718_23758 = state_23678__$1;
(statearr_23718_23758[(1)] = (11));

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
});})(c__21831__auto___23730,mults,ensure_mult,p))
;
return ((function (switch__20472__auto__,c__21831__auto___23730,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23722 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23722[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23722[(1)] = (1));

return statearr_23722;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23678){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23723){if((e23723 instanceof Object)){
var ex__20476__auto__ = e23723;
var statearr_23724_23759 = state_23678;
(statearr_23724_23759[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23723;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23760 = state_23678;
state_23678 = G__23760;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___23730,mults,ensure_mult,p))
})();
var state__21833__auto__ = (function (){var statearr_23725 = f__21832__auto__.call(null);
(statearr_23725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___23730);

return statearr_23725;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___23730,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args23761 = [];
var len__19529__auto___23764 = arguments.length;
var i__19530__auto___23765 = (0);
while(true){
if((i__19530__auto___23765 < len__19529__auto___23764)){
args23761.push((arguments[i__19530__auto___23765]));

var G__23766 = (i__19530__auto___23765 + (1));
i__19530__auto___23765 = G__23766;
continue;
} else {
}
break;
}

var G__23763 = args23761.length;
switch (G__23763) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23761.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args23768 = [];
var len__19529__auto___23771 = arguments.length;
var i__19530__auto___23772 = (0);
while(true){
if((i__19530__auto___23772 < len__19529__auto___23771)){
args23768.push((arguments[i__19530__auto___23772]));

var G__23773 = (i__19530__auto___23772 + (1));
i__19530__auto___23772 = G__23773;
continue;
} else {
}
break;
}

var G__23770 = args23768.length;
switch (G__23770) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23768.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args23775 = [];
var len__19529__auto___23846 = arguments.length;
var i__19530__auto___23847 = (0);
while(true){
if((i__19530__auto___23847 < len__19529__auto___23846)){
args23775.push((arguments[i__19530__auto___23847]));

var G__23848 = (i__19530__auto___23847 + (1));
i__19530__auto___23847 = G__23848;
continue;
} else {
}
break;
}

var G__23777 = args23775.length;
switch (G__23777) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23775.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__21831__auto___23850 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___23850,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___23850,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23816){
var state_val_23817 = (state_23816[(1)]);
if((state_val_23817 === (7))){
var state_23816__$1 = state_23816;
var statearr_23818_23851 = state_23816__$1;
(statearr_23818_23851[(2)] = null);

(statearr_23818_23851[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (1))){
var state_23816__$1 = state_23816;
var statearr_23819_23852 = state_23816__$1;
(statearr_23819_23852[(2)] = null);

(statearr_23819_23852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (4))){
var inst_23780 = (state_23816[(7)]);
var inst_23782 = (inst_23780 < cnt);
var state_23816__$1 = state_23816;
if(cljs.core.truth_(inst_23782)){
var statearr_23820_23853 = state_23816__$1;
(statearr_23820_23853[(1)] = (6));

} else {
var statearr_23821_23854 = state_23816__$1;
(statearr_23821_23854[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (15))){
var inst_23812 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23822_23855 = state_23816__$1;
(statearr_23822_23855[(2)] = inst_23812);

(statearr_23822_23855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (13))){
var inst_23805 = cljs.core.async.close_BANG_.call(null,out);
var state_23816__$1 = state_23816;
var statearr_23823_23856 = state_23816__$1;
(statearr_23823_23856[(2)] = inst_23805);

(statearr_23823_23856[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (6))){
var state_23816__$1 = state_23816;
var statearr_23824_23857 = state_23816__$1;
(statearr_23824_23857[(2)] = null);

(statearr_23824_23857[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (3))){
var inst_23814 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23816__$1,inst_23814);
} else {
if((state_val_23817 === (12))){
var inst_23802 = (state_23816[(8)]);
var inst_23802__$1 = (state_23816[(2)]);
var inst_23803 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23802__$1);
var state_23816__$1 = (function (){var statearr_23825 = state_23816;
(statearr_23825[(8)] = inst_23802__$1);

return statearr_23825;
})();
if(cljs.core.truth_(inst_23803)){
var statearr_23826_23858 = state_23816__$1;
(statearr_23826_23858[(1)] = (13));

} else {
var statearr_23827_23859 = state_23816__$1;
(statearr_23827_23859[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (2))){
var inst_23779 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23780 = (0);
var state_23816__$1 = (function (){var statearr_23828 = state_23816;
(statearr_23828[(9)] = inst_23779);

(statearr_23828[(7)] = inst_23780);

return statearr_23828;
})();
var statearr_23829_23860 = state_23816__$1;
(statearr_23829_23860[(2)] = null);

(statearr_23829_23860[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (11))){
var inst_23780 = (state_23816[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23816,(10),Object,null,(9));
var inst_23789 = chs__$1.call(null,inst_23780);
var inst_23790 = done.call(null,inst_23780);
var inst_23791 = cljs.core.async.take_BANG_.call(null,inst_23789,inst_23790);
var state_23816__$1 = state_23816;
var statearr_23830_23861 = state_23816__$1;
(statearr_23830_23861[(2)] = inst_23791);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23816__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (9))){
var inst_23780 = (state_23816[(7)]);
var inst_23793 = (state_23816[(2)]);
var inst_23794 = (inst_23780 + (1));
var inst_23780__$1 = inst_23794;
var state_23816__$1 = (function (){var statearr_23831 = state_23816;
(statearr_23831[(10)] = inst_23793);

(statearr_23831[(7)] = inst_23780__$1);

return statearr_23831;
})();
var statearr_23832_23862 = state_23816__$1;
(statearr_23832_23862[(2)] = null);

(statearr_23832_23862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (5))){
var inst_23800 = (state_23816[(2)]);
var state_23816__$1 = (function (){var statearr_23833 = state_23816;
(statearr_23833[(11)] = inst_23800);

return statearr_23833;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23816__$1,(12),dchan);
} else {
if((state_val_23817 === (14))){
var inst_23802 = (state_23816[(8)]);
var inst_23807 = cljs.core.apply.call(null,f,inst_23802);
var state_23816__$1 = state_23816;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23816__$1,(16),out,inst_23807);
} else {
if((state_val_23817 === (16))){
var inst_23809 = (state_23816[(2)]);
var state_23816__$1 = (function (){var statearr_23834 = state_23816;
(statearr_23834[(12)] = inst_23809);

return statearr_23834;
})();
var statearr_23835_23863 = state_23816__$1;
(statearr_23835_23863[(2)] = null);

(statearr_23835_23863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (10))){
var inst_23784 = (state_23816[(2)]);
var inst_23785 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23816__$1 = (function (){var statearr_23836 = state_23816;
(statearr_23836[(13)] = inst_23784);

return statearr_23836;
})();
var statearr_23837_23864 = state_23816__$1;
(statearr_23837_23864[(2)] = inst_23785);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23816__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23817 === (8))){
var inst_23798 = (state_23816[(2)]);
var state_23816__$1 = state_23816;
var statearr_23838_23865 = state_23816__$1;
(statearr_23838_23865[(2)] = inst_23798);

(statearr_23838_23865[(1)] = (5));


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
});})(c__21831__auto___23850,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__20472__auto__,c__21831__auto___23850,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23842 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23842[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23842[(1)] = (1));

return statearr_23842;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23816){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23816);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23843){if((e23843 instanceof Object)){
var ex__20476__auto__ = e23843;
var statearr_23844_23866 = state_23816;
(statearr_23844_23866[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23816);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23843;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23867 = state_23816;
state_23816 = G__23867;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23816){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23816);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___23850,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__21833__auto__ = (function (){var statearr_23845 = f__21832__auto__.call(null);
(statearr_23845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___23850);

return statearr_23845;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___23850,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args23869 = [];
var len__19529__auto___23925 = arguments.length;
var i__19530__auto___23926 = (0);
while(true){
if((i__19530__auto___23926 < len__19529__auto___23925)){
args23869.push((arguments[i__19530__auto___23926]));

var G__23927 = (i__19530__auto___23926 + (1));
i__19530__auto___23926 = G__23927;
continue;
} else {
}
break;
}

var G__23871 = args23869.length;
switch (G__23871) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23869.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___23929 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___23929,out){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___23929,out){
return (function (state_23901){
var state_val_23902 = (state_23901[(1)]);
if((state_val_23902 === (7))){
var inst_23880 = (state_23901[(7)]);
var inst_23881 = (state_23901[(8)]);
var inst_23880__$1 = (state_23901[(2)]);
var inst_23881__$1 = cljs.core.nth.call(null,inst_23880__$1,(0),null);
var inst_23882 = cljs.core.nth.call(null,inst_23880__$1,(1),null);
var inst_23883 = (inst_23881__$1 == null);
var state_23901__$1 = (function (){var statearr_23903 = state_23901;
(statearr_23903[(7)] = inst_23880__$1);

(statearr_23903[(8)] = inst_23881__$1);

(statearr_23903[(9)] = inst_23882);

return statearr_23903;
})();
if(cljs.core.truth_(inst_23883)){
var statearr_23904_23930 = state_23901__$1;
(statearr_23904_23930[(1)] = (8));

} else {
var statearr_23905_23931 = state_23901__$1;
(statearr_23905_23931[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (1))){
var inst_23872 = cljs.core.vec.call(null,chs);
var inst_23873 = inst_23872;
var state_23901__$1 = (function (){var statearr_23906 = state_23901;
(statearr_23906[(10)] = inst_23873);

return statearr_23906;
})();
var statearr_23907_23932 = state_23901__$1;
(statearr_23907_23932[(2)] = null);

(statearr_23907_23932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (4))){
var inst_23873 = (state_23901[(10)]);
var state_23901__$1 = state_23901;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23901__$1,(7),inst_23873);
} else {
if((state_val_23902 === (6))){
var inst_23897 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23908_23933 = state_23901__$1;
(statearr_23908_23933[(2)] = inst_23897);

(statearr_23908_23933[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (3))){
var inst_23899 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23901__$1,inst_23899);
} else {
if((state_val_23902 === (2))){
var inst_23873 = (state_23901[(10)]);
var inst_23875 = cljs.core.count.call(null,inst_23873);
var inst_23876 = (inst_23875 > (0));
var state_23901__$1 = state_23901;
if(cljs.core.truth_(inst_23876)){
var statearr_23910_23934 = state_23901__$1;
(statearr_23910_23934[(1)] = (4));

} else {
var statearr_23911_23935 = state_23901__$1;
(statearr_23911_23935[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (11))){
var inst_23873 = (state_23901[(10)]);
var inst_23890 = (state_23901[(2)]);
var tmp23909 = inst_23873;
var inst_23873__$1 = tmp23909;
var state_23901__$1 = (function (){var statearr_23912 = state_23901;
(statearr_23912[(10)] = inst_23873__$1);

(statearr_23912[(11)] = inst_23890);

return statearr_23912;
})();
var statearr_23913_23936 = state_23901__$1;
(statearr_23913_23936[(2)] = null);

(statearr_23913_23936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (9))){
var inst_23881 = (state_23901[(8)]);
var state_23901__$1 = state_23901;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23901__$1,(11),out,inst_23881);
} else {
if((state_val_23902 === (5))){
var inst_23895 = cljs.core.async.close_BANG_.call(null,out);
var state_23901__$1 = state_23901;
var statearr_23914_23937 = state_23901__$1;
(statearr_23914_23937[(2)] = inst_23895);

(statearr_23914_23937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (10))){
var inst_23893 = (state_23901[(2)]);
var state_23901__$1 = state_23901;
var statearr_23915_23938 = state_23901__$1;
(statearr_23915_23938[(2)] = inst_23893);

(statearr_23915_23938[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23902 === (8))){
var inst_23873 = (state_23901[(10)]);
var inst_23880 = (state_23901[(7)]);
var inst_23881 = (state_23901[(8)]);
var inst_23882 = (state_23901[(9)]);
var inst_23885 = (function (){var cs = inst_23873;
var vec__23878 = inst_23880;
var v = inst_23881;
var c = inst_23882;
return ((function (cs,vec__23878,v,c,inst_23873,inst_23880,inst_23881,inst_23882,state_val_23902,c__21831__auto___23929,out){
return (function (p1__23868_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23868_SHARP_);
});
;})(cs,vec__23878,v,c,inst_23873,inst_23880,inst_23881,inst_23882,state_val_23902,c__21831__auto___23929,out))
})();
var inst_23886 = cljs.core.filterv.call(null,inst_23885,inst_23873);
var inst_23873__$1 = inst_23886;
var state_23901__$1 = (function (){var statearr_23916 = state_23901;
(statearr_23916[(10)] = inst_23873__$1);

return statearr_23916;
})();
var statearr_23917_23939 = state_23901__$1;
(statearr_23917_23939[(2)] = null);

(statearr_23917_23939[(1)] = (2));


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
});})(c__21831__auto___23929,out))
;
return ((function (switch__20472__auto__,c__21831__auto___23929,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23921 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23921[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23921[(1)] = (1));

return statearr_23921;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23901){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23901);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23922){if((e23922 instanceof Object)){
var ex__20476__auto__ = e23922;
var statearr_23923_23940 = state_23901;
(statearr_23923_23940[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23901);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23941 = state_23901;
state_23901 = G__23941;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___23929,out))
})();
var state__21833__auto__ = (function (){var statearr_23924 = f__21832__auto__.call(null);
(statearr_23924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___23929);

return statearr_23924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___23929,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args23942 = [];
var len__19529__auto___23991 = arguments.length;
var i__19530__auto___23992 = (0);
while(true){
if((i__19530__auto___23992 < len__19529__auto___23991)){
args23942.push((arguments[i__19530__auto___23992]));

var G__23993 = (i__19530__auto___23992 + (1));
i__19530__auto___23992 = G__23993;
continue;
} else {
}
break;
}

var G__23944 = args23942.length;
switch (G__23944) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23942.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___23995 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___23995,out){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___23995,out){
return (function (state_23968){
var state_val_23969 = (state_23968[(1)]);
if((state_val_23969 === (7))){
var inst_23950 = (state_23968[(7)]);
var inst_23950__$1 = (state_23968[(2)]);
var inst_23951 = (inst_23950__$1 == null);
var inst_23952 = cljs.core.not.call(null,inst_23951);
var state_23968__$1 = (function (){var statearr_23970 = state_23968;
(statearr_23970[(7)] = inst_23950__$1);

return statearr_23970;
})();
if(inst_23952){
var statearr_23971_23996 = state_23968__$1;
(statearr_23971_23996[(1)] = (8));

} else {
var statearr_23972_23997 = state_23968__$1;
(statearr_23972_23997[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (1))){
var inst_23945 = (0);
var state_23968__$1 = (function (){var statearr_23973 = state_23968;
(statearr_23973[(8)] = inst_23945);

return statearr_23973;
})();
var statearr_23974_23998 = state_23968__$1;
(statearr_23974_23998[(2)] = null);

(statearr_23974_23998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (4))){
var state_23968__$1 = state_23968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23968__$1,(7),ch);
} else {
if((state_val_23969 === (6))){
var inst_23963 = (state_23968[(2)]);
var state_23968__$1 = state_23968;
var statearr_23975_23999 = state_23968__$1;
(statearr_23975_23999[(2)] = inst_23963);

(statearr_23975_23999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (3))){
var inst_23965 = (state_23968[(2)]);
var inst_23966 = cljs.core.async.close_BANG_.call(null,out);
var state_23968__$1 = (function (){var statearr_23976 = state_23968;
(statearr_23976[(9)] = inst_23965);

return statearr_23976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23968__$1,inst_23966);
} else {
if((state_val_23969 === (2))){
var inst_23945 = (state_23968[(8)]);
var inst_23947 = (inst_23945 < n);
var state_23968__$1 = state_23968;
if(cljs.core.truth_(inst_23947)){
var statearr_23977_24000 = state_23968__$1;
(statearr_23977_24000[(1)] = (4));

} else {
var statearr_23978_24001 = state_23968__$1;
(statearr_23978_24001[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (11))){
var inst_23945 = (state_23968[(8)]);
var inst_23955 = (state_23968[(2)]);
var inst_23956 = (inst_23945 + (1));
var inst_23945__$1 = inst_23956;
var state_23968__$1 = (function (){var statearr_23979 = state_23968;
(statearr_23979[(10)] = inst_23955);

(statearr_23979[(8)] = inst_23945__$1);

return statearr_23979;
})();
var statearr_23980_24002 = state_23968__$1;
(statearr_23980_24002[(2)] = null);

(statearr_23980_24002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (9))){
var state_23968__$1 = state_23968;
var statearr_23981_24003 = state_23968__$1;
(statearr_23981_24003[(2)] = null);

(statearr_23981_24003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (5))){
var state_23968__$1 = state_23968;
var statearr_23982_24004 = state_23968__$1;
(statearr_23982_24004[(2)] = null);

(statearr_23982_24004[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (10))){
var inst_23960 = (state_23968[(2)]);
var state_23968__$1 = state_23968;
var statearr_23983_24005 = state_23968__$1;
(statearr_23983_24005[(2)] = inst_23960);

(statearr_23983_24005[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23969 === (8))){
var inst_23950 = (state_23968[(7)]);
var state_23968__$1 = state_23968;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23968__$1,(11),out,inst_23950);
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
});})(c__21831__auto___23995,out))
;
return ((function (switch__20472__auto__,c__21831__auto___23995,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_23987 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23987[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_23987[(1)] = (1));

return statearr_23987;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_23968){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_23968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e23988){if((e23988 instanceof Object)){
var ex__20476__auto__ = e23988;
var statearr_23989_24006 = state_23968;
(statearr_23989_24006[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23988;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24007 = state_23968;
state_23968 = G__24007;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_23968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_23968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___23995,out))
})();
var state__21833__auto__ = (function (){var statearr_23990 = f__21832__auto__.call(null);
(statearr_23990[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___23995);

return statearr_23990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___23995,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24015 = (function (map_LT_,f,ch,meta24016){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24016 = meta24016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24017,meta24016__$1){
var self__ = this;
var _24017__$1 = this;
return (new cljs.core.async.t_cljs$core$async24015(self__.map_LT_,self__.f,self__.ch,meta24016__$1));
});

cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24017){
var self__ = this;
var _24017__$1 = this;
return self__.meta24016;
});

cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24018 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24018 = (function (map_LT_,f,ch,meta24016,_,fn1,meta24019){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24016 = meta24016;
this._ = _;
this.fn1 = fn1;
this.meta24019 = meta24019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24020,meta24019__$1){
var self__ = this;
var _24020__$1 = this;
return (new cljs.core.async.t_cljs$core$async24018(self__.map_LT_,self__.f,self__.ch,self__.meta24016,self__._,self__.fn1,meta24019__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24020){
var self__ = this;
var _24020__$1 = this;
return self__.meta24019;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24008_SHARP_){
return f1.call(null,(((p1__24008_SHARP_ == null))?null:self__.f.call(null,p1__24008_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24018.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24016","meta24016",371071649,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24015","cljs.core.async/t_cljs$core$async24015",7571649,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24019","meta24019",1533438638,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24018.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24018";

cljs.core.async.t_cljs$core$async24018.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async24018");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24018 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24018(map_LT___$1,f__$1,ch__$1,meta24016__$1,___$2,fn1__$1,meta24019){
return (new cljs.core.async.t_cljs$core$async24018(map_LT___$1,f__$1,ch__$1,meta24016__$1,___$2,fn1__$1,meta24019));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24018(self__.map_LT_,self__.f,self__.ch,self__.meta24016,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__18447__auto__ = ret;
if(cljs.core.truth_(and__18447__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__18447__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24015.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24016","meta24016",371071649,null)], null);
});

cljs.core.async.t_cljs$core$async24015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24015";

cljs.core.async.t_cljs$core$async24015.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async24015");
});

cljs.core.async.__GT_t_cljs$core$async24015 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24015(map_LT___$1,f__$1,ch__$1,meta24016){
return (new cljs.core.async.t_cljs$core$async24015(map_LT___$1,f__$1,ch__$1,meta24016));
});

}

return (new cljs.core.async.t_cljs$core$async24015(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24024 = (function (map_GT_,f,ch,meta24025){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24025 = meta24025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24026,meta24025__$1){
var self__ = this;
var _24026__$1 = this;
return (new cljs.core.async.t_cljs$core$async24024(self__.map_GT_,self__.f,self__.ch,meta24025__$1));
});

cljs.core.async.t_cljs$core$async24024.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24026){
var self__ = this;
var _24026__$1 = this;
return self__.meta24025;
});

cljs.core.async.t_cljs$core$async24024.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24024.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24024.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24024.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24024.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24024.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24024.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24025","meta24025",-11195667,null)], null);
});

cljs.core.async.t_cljs$core$async24024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24024";

cljs.core.async.t_cljs$core$async24024.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async24024");
});

cljs.core.async.__GT_t_cljs$core$async24024 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24024(map_GT___$1,f__$1,ch__$1,meta24025){
return (new cljs.core.async.t_cljs$core$async24024(map_GT___$1,f__$1,ch__$1,meta24025));
});

}

return (new cljs.core.async.t_cljs$core$async24024(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24030 = (function (filter_GT_,p,ch,meta24031){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24031 = meta24031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24032,meta24031__$1){
var self__ = this;
var _24032__$1 = this;
return (new cljs.core.async.t_cljs$core$async24030(self__.filter_GT_,self__.p,self__.ch,meta24031__$1));
});

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24032){
var self__ = this;
var _24032__$1 = this;
return self__.meta24031;
});

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24031","meta24031",151439468,null)], null);
});

cljs.core.async.t_cljs$core$async24030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24030";

cljs.core.async.t_cljs$core$async24030.cljs$lang$ctorPrWriter = (function (this__19065__auto__,writer__19066__auto__,opt__19067__auto__){
return cljs.core._write.call(null,writer__19066__auto__,"cljs.core.async/t_cljs$core$async24030");
});

cljs.core.async.__GT_t_cljs$core$async24030 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24030(filter_GT___$1,p__$1,ch__$1,meta24031){
return (new cljs.core.async.t_cljs$core$async24030(filter_GT___$1,p__$1,ch__$1,meta24031));
});

}

return (new cljs.core.async.t_cljs$core$async24030(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args24033 = [];
var len__19529__auto___24077 = arguments.length;
var i__19530__auto___24078 = (0);
while(true){
if((i__19530__auto___24078 < len__19529__auto___24077)){
args24033.push((arguments[i__19530__auto___24078]));

var G__24079 = (i__19530__auto___24078 + (1));
i__19530__auto___24078 = G__24079;
continue;
} else {
}
break;
}

var G__24035 = args24033.length;
switch (G__24035) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24033.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___24081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___24081,out){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___24081,out){
return (function (state_24056){
var state_val_24057 = (state_24056[(1)]);
if((state_val_24057 === (7))){
var inst_24052 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
var statearr_24058_24082 = state_24056__$1;
(statearr_24058_24082[(2)] = inst_24052);

(statearr_24058_24082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (1))){
var state_24056__$1 = state_24056;
var statearr_24059_24083 = state_24056__$1;
(statearr_24059_24083[(2)] = null);

(statearr_24059_24083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (4))){
var inst_24038 = (state_24056[(7)]);
var inst_24038__$1 = (state_24056[(2)]);
var inst_24039 = (inst_24038__$1 == null);
var state_24056__$1 = (function (){var statearr_24060 = state_24056;
(statearr_24060[(7)] = inst_24038__$1);

return statearr_24060;
})();
if(cljs.core.truth_(inst_24039)){
var statearr_24061_24084 = state_24056__$1;
(statearr_24061_24084[(1)] = (5));

} else {
var statearr_24062_24085 = state_24056__$1;
(statearr_24062_24085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (6))){
var inst_24038 = (state_24056[(7)]);
var inst_24043 = p.call(null,inst_24038);
var state_24056__$1 = state_24056;
if(cljs.core.truth_(inst_24043)){
var statearr_24063_24086 = state_24056__$1;
(statearr_24063_24086[(1)] = (8));

} else {
var statearr_24064_24087 = state_24056__$1;
(statearr_24064_24087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (3))){
var inst_24054 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24056__$1,inst_24054);
} else {
if((state_val_24057 === (2))){
var state_24056__$1 = state_24056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24056__$1,(4),ch);
} else {
if((state_val_24057 === (11))){
var inst_24046 = (state_24056[(2)]);
var state_24056__$1 = state_24056;
var statearr_24065_24088 = state_24056__$1;
(statearr_24065_24088[(2)] = inst_24046);

(statearr_24065_24088[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (9))){
var state_24056__$1 = state_24056;
var statearr_24066_24089 = state_24056__$1;
(statearr_24066_24089[(2)] = null);

(statearr_24066_24089[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (5))){
var inst_24041 = cljs.core.async.close_BANG_.call(null,out);
var state_24056__$1 = state_24056;
var statearr_24067_24090 = state_24056__$1;
(statearr_24067_24090[(2)] = inst_24041);

(statearr_24067_24090[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (10))){
var inst_24049 = (state_24056[(2)]);
var state_24056__$1 = (function (){var statearr_24068 = state_24056;
(statearr_24068[(8)] = inst_24049);

return statearr_24068;
})();
var statearr_24069_24091 = state_24056__$1;
(statearr_24069_24091[(2)] = null);

(statearr_24069_24091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24057 === (8))){
var inst_24038 = (state_24056[(7)]);
var state_24056__$1 = state_24056;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24056__$1,(11),out,inst_24038);
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
});})(c__21831__auto___24081,out))
;
return ((function (switch__20472__auto__,c__21831__auto___24081,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_24073 = [null,null,null,null,null,null,null,null,null];
(statearr_24073[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_24073[(1)] = (1));

return statearr_24073;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_24056){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24074){if((e24074 instanceof Object)){
var ex__20476__auto__ = e24074;
var statearr_24075_24092 = state_24056;
(statearr_24075_24092[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24074;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24093 = state_24056;
state_24056 = G__24093;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_24056){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_24056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___24081,out))
})();
var state__21833__auto__ = (function (){var statearr_24076 = f__21832__auto__.call(null);
(statearr_24076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___24081);

return statearr_24076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___24081,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24094 = [];
var len__19529__auto___24097 = arguments.length;
var i__19530__auto___24098 = (0);
while(true){
if((i__19530__auto___24098 < len__19529__auto___24097)){
args24094.push((arguments[i__19530__auto___24098]));

var G__24099 = (i__19530__auto___24098 + (1));
i__19530__auto___24098 = G__24099;
continue;
} else {
}
break;
}

var G__24096 = args24094.length;
switch (G__24096) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24094.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21831__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto__){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto__){
return (function (state_24266){
var state_val_24267 = (state_24266[(1)]);
if((state_val_24267 === (7))){
var inst_24262 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
var statearr_24268_24309 = state_24266__$1;
(statearr_24268_24309[(2)] = inst_24262);

(statearr_24268_24309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (20))){
var inst_24232 = (state_24266[(7)]);
var inst_24243 = (state_24266[(2)]);
var inst_24244 = cljs.core.next.call(null,inst_24232);
var inst_24218 = inst_24244;
var inst_24219 = null;
var inst_24220 = (0);
var inst_24221 = (0);
var state_24266__$1 = (function (){var statearr_24269 = state_24266;
(statearr_24269[(8)] = inst_24243);

(statearr_24269[(9)] = inst_24220);

(statearr_24269[(10)] = inst_24219);

(statearr_24269[(11)] = inst_24218);

(statearr_24269[(12)] = inst_24221);

return statearr_24269;
})();
var statearr_24270_24310 = state_24266__$1;
(statearr_24270_24310[(2)] = null);

(statearr_24270_24310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (1))){
var state_24266__$1 = state_24266;
var statearr_24271_24311 = state_24266__$1;
(statearr_24271_24311[(2)] = null);

(statearr_24271_24311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (4))){
var inst_24207 = (state_24266[(13)]);
var inst_24207__$1 = (state_24266[(2)]);
var inst_24208 = (inst_24207__$1 == null);
var state_24266__$1 = (function (){var statearr_24272 = state_24266;
(statearr_24272[(13)] = inst_24207__$1);

return statearr_24272;
})();
if(cljs.core.truth_(inst_24208)){
var statearr_24273_24312 = state_24266__$1;
(statearr_24273_24312[(1)] = (5));

} else {
var statearr_24274_24313 = state_24266__$1;
(statearr_24274_24313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (15))){
var state_24266__$1 = state_24266;
var statearr_24278_24314 = state_24266__$1;
(statearr_24278_24314[(2)] = null);

(statearr_24278_24314[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (21))){
var state_24266__$1 = state_24266;
var statearr_24279_24315 = state_24266__$1;
(statearr_24279_24315[(2)] = null);

(statearr_24279_24315[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (13))){
var inst_24220 = (state_24266[(9)]);
var inst_24219 = (state_24266[(10)]);
var inst_24218 = (state_24266[(11)]);
var inst_24221 = (state_24266[(12)]);
var inst_24228 = (state_24266[(2)]);
var inst_24229 = (inst_24221 + (1));
var tmp24275 = inst_24220;
var tmp24276 = inst_24219;
var tmp24277 = inst_24218;
var inst_24218__$1 = tmp24277;
var inst_24219__$1 = tmp24276;
var inst_24220__$1 = tmp24275;
var inst_24221__$1 = inst_24229;
var state_24266__$1 = (function (){var statearr_24280 = state_24266;
(statearr_24280[(9)] = inst_24220__$1);

(statearr_24280[(14)] = inst_24228);

(statearr_24280[(10)] = inst_24219__$1);

(statearr_24280[(11)] = inst_24218__$1);

(statearr_24280[(12)] = inst_24221__$1);

return statearr_24280;
})();
var statearr_24281_24316 = state_24266__$1;
(statearr_24281_24316[(2)] = null);

(statearr_24281_24316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (22))){
var state_24266__$1 = state_24266;
var statearr_24282_24317 = state_24266__$1;
(statearr_24282_24317[(2)] = null);

(statearr_24282_24317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (6))){
var inst_24207 = (state_24266[(13)]);
var inst_24216 = f.call(null,inst_24207);
var inst_24217 = cljs.core.seq.call(null,inst_24216);
var inst_24218 = inst_24217;
var inst_24219 = null;
var inst_24220 = (0);
var inst_24221 = (0);
var state_24266__$1 = (function (){var statearr_24283 = state_24266;
(statearr_24283[(9)] = inst_24220);

(statearr_24283[(10)] = inst_24219);

(statearr_24283[(11)] = inst_24218);

(statearr_24283[(12)] = inst_24221);

return statearr_24283;
})();
var statearr_24284_24318 = state_24266__$1;
(statearr_24284_24318[(2)] = null);

(statearr_24284_24318[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (17))){
var inst_24232 = (state_24266[(7)]);
var inst_24236 = cljs.core.chunk_first.call(null,inst_24232);
var inst_24237 = cljs.core.chunk_rest.call(null,inst_24232);
var inst_24238 = cljs.core.count.call(null,inst_24236);
var inst_24218 = inst_24237;
var inst_24219 = inst_24236;
var inst_24220 = inst_24238;
var inst_24221 = (0);
var state_24266__$1 = (function (){var statearr_24285 = state_24266;
(statearr_24285[(9)] = inst_24220);

(statearr_24285[(10)] = inst_24219);

(statearr_24285[(11)] = inst_24218);

(statearr_24285[(12)] = inst_24221);

return statearr_24285;
})();
var statearr_24286_24319 = state_24266__$1;
(statearr_24286_24319[(2)] = null);

(statearr_24286_24319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (3))){
var inst_24264 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24266__$1,inst_24264);
} else {
if((state_val_24267 === (12))){
var inst_24252 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
var statearr_24287_24320 = state_24266__$1;
(statearr_24287_24320[(2)] = inst_24252);

(statearr_24287_24320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (2))){
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24266__$1,(4),in$);
} else {
if((state_val_24267 === (23))){
var inst_24260 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
var statearr_24288_24321 = state_24266__$1;
(statearr_24288_24321[(2)] = inst_24260);

(statearr_24288_24321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (19))){
var inst_24247 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
var statearr_24289_24322 = state_24266__$1;
(statearr_24289_24322[(2)] = inst_24247);

(statearr_24289_24322[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (11))){
var inst_24232 = (state_24266[(7)]);
var inst_24218 = (state_24266[(11)]);
var inst_24232__$1 = cljs.core.seq.call(null,inst_24218);
var state_24266__$1 = (function (){var statearr_24290 = state_24266;
(statearr_24290[(7)] = inst_24232__$1);

return statearr_24290;
})();
if(inst_24232__$1){
var statearr_24291_24323 = state_24266__$1;
(statearr_24291_24323[(1)] = (14));

} else {
var statearr_24292_24324 = state_24266__$1;
(statearr_24292_24324[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (9))){
var inst_24254 = (state_24266[(2)]);
var inst_24255 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24266__$1 = (function (){var statearr_24293 = state_24266;
(statearr_24293[(15)] = inst_24254);

return statearr_24293;
})();
if(cljs.core.truth_(inst_24255)){
var statearr_24294_24325 = state_24266__$1;
(statearr_24294_24325[(1)] = (21));

} else {
var statearr_24295_24326 = state_24266__$1;
(statearr_24295_24326[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (5))){
var inst_24210 = cljs.core.async.close_BANG_.call(null,out);
var state_24266__$1 = state_24266;
var statearr_24296_24327 = state_24266__$1;
(statearr_24296_24327[(2)] = inst_24210);

(statearr_24296_24327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (14))){
var inst_24232 = (state_24266[(7)]);
var inst_24234 = cljs.core.chunked_seq_QMARK_.call(null,inst_24232);
var state_24266__$1 = state_24266;
if(inst_24234){
var statearr_24297_24328 = state_24266__$1;
(statearr_24297_24328[(1)] = (17));

} else {
var statearr_24298_24329 = state_24266__$1;
(statearr_24298_24329[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (16))){
var inst_24250 = (state_24266[(2)]);
var state_24266__$1 = state_24266;
var statearr_24299_24330 = state_24266__$1;
(statearr_24299_24330[(2)] = inst_24250);

(statearr_24299_24330[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24267 === (10))){
var inst_24219 = (state_24266[(10)]);
var inst_24221 = (state_24266[(12)]);
var inst_24226 = cljs.core._nth.call(null,inst_24219,inst_24221);
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24266__$1,(13),out,inst_24226);
} else {
if((state_val_24267 === (18))){
var inst_24232 = (state_24266[(7)]);
var inst_24241 = cljs.core.first.call(null,inst_24232);
var state_24266__$1 = state_24266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24266__$1,(20),out,inst_24241);
} else {
if((state_val_24267 === (8))){
var inst_24220 = (state_24266[(9)]);
var inst_24221 = (state_24266[(12)]);
var inst_24223 = (inst_24221 < inst_24220);
var inst_24224 = inst_24223;
var state_24266__$1 = state_24266;
if(cljs.core.truth_(inst_24224)){
var statearr_24300_24331 = state_24266__$1;
(statearr_24300_24331[(1)] = (10));

} else {
var statearr_24301_24332 = state_24266__$1;
(statearr_24301_24332[(1)] = (11));

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
});})(c__21831__auto__))
;
return ((function (switch__20472__auto__,c__21831__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____0 = (function (){
var statearr_24305 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24305[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__);

(statearr_24305[(1)] = (1));

return statearr_24305;
});
var cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____1 = (function (state_24266){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24306){if((e24306 instanceof Object)){
var ex__20476__auto__ = e24306;
var statearr_24307_24333 = state_24266;
(statearr_24307_24333[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24334 = state_24266;
state_24266 = G__24334;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__ = function(state_24266){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____1.call(this,state_24266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__20473__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto__))
})();
var state__21833__auto__ = (function (){var statearr_24308 = f__21832__auto__.call(null);
(statearr_24308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto__);

return statearr_24308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto__))
);

return c__21831__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args24335 = [];
var len__19529__auto___24338 = arguments.length;
var i__19530__auto___24339 = (0);
while(true){
if((i__19530__auto___24339 < len__19529__auto___24338)){
args24335.push((arguments[i__19530__auto___24339]));

var G__24340 = (i__19530__auto___24339 + (1));
i__19530__auto___24339 = G__24340;
continue;
} else {
}
break;
}

var G__24337 = args24335.length;
switch (G__24337) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24335.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args24342 = [];
var len__19529__auto___24345 = arguments.length;
var i__19530__auto___24346 = (0);
while(true){
if((i__19530__auto___24346 < len__19529__auto___24345)){
args24342.push((arguments[i__19530__auto___24346]));

var G__24347 = (i__19530__auto___24346 + (1));
i__19530__auto___24346 = G__24347;
continue;
} else {
}
break;
}

var G__24344 = args24342.length;
switch (G__24344) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24342.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args24349 = [];
var len__19529__auto___24400 = arguments.length;
var i__19530__auto___24401 = (0);
while(true){
if((i__19530__auto___24401 < len__19529__auto___24400)){
args24349.push((arguments[i__19530__auto___24401]));

var G__24402 = (i__19530__auto___24401 + (1));
i__19530__auto___24401 = G__24402;
continue;
} else {
}
break;
}

var G__24351 = args24349.length;
switch (G__24351) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24349.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___24404 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___24404,out){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___24404,out){
return (function (state_24375){
var state_val_24376 = (state_24375[(1)]);
if((state_val_24376 === (7))){
var inst_24370 = (state_24375[(2)]);
var state_24375__$1 = state_24375;
var statearr_24377_24405 = state_24375__$1;
(statearr_24377_24405[(2)] = inst_24370);

(statearr_24377_24405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24376 === (1))){
var inst_24352 = null;
var state_24375__$1 = (function (){var statearr_24378 = state_24375;
(statearr_24378[(7)] = inst_24352);

return statearr_24378;
})();
var statearr_24379_24406 = state_24375__$1;
(statearr_24379_24406[(2)] = null);

(statearr_24379_24406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24376 === (4))){
var inst_24355 = (state_24375[(8)]);
var inst_24355__$1 = (state_24375[(2)]);
var inst_24356 = (inst_24355__$1 == null);
var inst_24357 = cljs.core.not.call(null,inst_24356);
var state_24375__$1 = (function (){var statearr_24380 = state_24375;
(statearr_24380[(8)] = inst_24355__$1);

return statearr_24380;
})();
if(inst_24357){
var statearr_24381_24407 = state_24375__$1;
(statearr_24381_24407[(1)] = (5));

} else {
var statearr_24382_24408 = state_24375__$1;
(statearr_24382_24408[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24376 === (6))){
var state_24375__$1 = state_24375;
var statearr_24383_24409 = state_24375__$1;
(statearr_24383_24409[(2)] = null);

(statearr_24383_24409[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24376 === (3))){
var inst_24372 = (state_24375[(2)]);
var inst_24373 = cljs.core.async.close_BANG_.call(null,out);
var state_24375__$1 = (function (){var statearr_24384 = state_24375;
(statearr_24384[(9)] = inst_24372);

return statearr_24384;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24375__$1,inst_24373);
} else {
if((state_val_24376 === (2))){
var state_24375__$1 = state_24375;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24375__$1,(4),ch);
} else {
if((state_val_24376 === (11))){
var inst_24355 = (state_24375[(8)]);
var inst_24364 = (state_24375[(2)]);
var inst_24352 = inst_24355;
var state_24375__$1 = (function (){var statearr_24385 = state_24375;
(statearr_24385[(7)] = inst_24352);

(statearr_24385[(10)] = inst_24364);

return statearr_24385;
})();
var statearr_24386_24410 = state_24375__$1;
(statearr_24386_24410[(2)] = null);

(statearr_24386_24410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24376 === (9))){
var inst_24355 = (state_24375[(8)]);
var state_24375__$1 = state_24375;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24375__$1,(11),out,inst_24355);
} else {
if((state_val_24376 === (5))){
var inst_24355 = (state_24375[(8)]);
var inst_24352 = (state_24375[(7)]);
var inst_24359 = cljs.core._EQ_.call(null,inst_24355,inst_24352);
var state_24375__$1 = state_24375;
if(inst_24359){
var statearr_24388_24411 = state_24375__$1;
(statearr_24388_24411[(1)] = (8));

} else {
var statearr_24389_24412 = state_24375__$1;
(statearr_24389_24412[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24376 === (10))){
var inst_24367 = (state_24375[(2)]);
var state_24375__$1 = state_24375;
var statearr_24390_24413 = state_24375__$1;
(statearr_24390_24413[(2)] = inst_24367);

(statearr_24390_24413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24376 === (8))){
var inst_24352 = (state_24375[(7)]);
var tmp24387 = inst_24352;
var inst_24352__$1 = tmp24387;
var state_24375__$1 = (function (){var statearr_24391 = state_24375;
(statearr_24391[(7)] = inst_24352__$1);

return statearr_24391;
})();
var statearr_24392_24414 = state_24375__$1;
(statearr_24392_24414[(2)] = null);

(statearr_24392_24414[(1)] = (2));


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
});})(c__21831__auto___24404,out))
;
return ((function (switch__20472__auto__,c__21831__auto___24404,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_24396 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24396[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_24396[(1)] = (1));

return statearr_24396;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_24375){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24375);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24397){if((e24397 instanceof Object)){
var ex__20476__auto__ = e24397;
var statearr_24398_24415 = state_24375;
(statearr_24398_24415[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24375);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24416 = state_24375;
state_24375 = G__24416;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_24375){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_24375);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___24404,out))
})();
var state__21833__auto__ = (function (){var statearr_24399 = f__21832__auto__.call(null);
(statearr_24399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___24404);

return statearr_24399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___24404,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24417 = [];
var len__19529__auto___24487 = arguments.length;
var i__19530__auto___24488 = (0);
while(true){
if((i__19530__auto___24488 < len__19529__auto___24487)){
args24417.push((arguments[i__19530__auto___24488]));

var G__24489 = (i__19530__auto___24488 + (1));
i__19530__auto___24488 = G__24489;
continue;
} else {
}
break;
}

var G__24419 = args24417.length;
switch (G__24419) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24417.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___24491 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___24491,out){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___24491,out){
return (function (state_24457){
var state_val_24458 = (state_24457[(1)]);
if((state_val_24458 === (7))){
var inst_24453 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
var statearr_24459_24492 = state_24457__$1;
(statearr_24459_24492[(2)] = inst_24453);

(statearr_24459_24492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (1))){
var inst_24420 = (new Array(n));
var inst_24421 = inst_24420;
var inst_24422 = (0);
var state_24457__$1 = (function (){var statearr_24460 = state_24457;
(statearr_24460[(7)] = inst_24422);

(statearr_24460[(8)] = inst_24421);

return statearr_24460;
})();
var statearr_24461_24493 = state_24457__$1;
(statearr_24461_24493[(2)] = null);

(statearr_24461_24493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (4))){
var inst_24425 = (state_24457[(9)]);
var inst_24425__$1 = (state_24457[(2)]);
var inst_24426 = (inst_24425__$1 == null);
var inst_24427 = cljs.core.not.call(null,inst_24426);
var state_24457__$1 = (function (){var statearr_24462 = state_24457;
(statearr_24462[(9)] = inst_24425__$1);

return statearr_24462;
})();
if(inst_24427){
var statearr_24463_24494 = state_24457__$1;
(statearr_24463_24494[(1)] = (5));

} else {
var statearr_24464_24495 = state_24457__$1;
(statearr_24464_24495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (15))){
var inst_24447 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
var statearr_24465_24496 = state_24457__$1;
(statearr_24465_24496[(2)] = inst_24447);

(statearr_24465_24496[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (13))){
var state_24457__$1 = state_24457;
var statearr_24466_24497 = state_24457__$1;
(statearr_24466_24497[(2)] = null);

(statearr_24466_24497[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (6))){
var inst_24422 = (state_24457[(7)]);
var inst_24443 = (inst_24422 > (0));
var state_24457__$1 = state_24457;
if(cljs.core.truth_(inst_24443)){
var statearr_24467_24498 = state_24457__$1;
(statearr_24467_24498[(1)] = (12));

} else {
var statearr_24468_24499 = state_24457__$1;
(statearr_24468_24499[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (3))){
var inst_24455 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24457__$1,inst_24455);
} else {
if((state_val_24458 === (12))){
var inst_24421 = (state_24457[(8)]);
var inst_24445 = cljs.core.vec.call(null,inst_24421);
var state_24457__$1 = state_24457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24457__$1,(15),out,inst_24445);
} else {
if((state_val_24458 === (2))){
var state_24457__$1 = state_24457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24457__$1,(4),ch);
} else {
if((state_val_24458 === (11))){
var inst_24437 = (state_24457[(2)]);
var inst_24438 = (new Array(n));
var inst_24421 = inst_24438;
var inst_24422 = (0);
var state_24457__$1 = (function (){var statearr_24469 = state_24457;
(statearr_24469[(10)] = inst_24437);

(statearr_24469[(7)] = inst_24422);

(statearr_24469[(8)] = inst_24421);

return statearr_24469;
})();
var statearr_24470_24500 = state_24457__$1;
(statearr_24470_24500[(2)] = null);

(statearr_24470_24500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (9))){
var inst_24421 = (state_24457[(8)]);
var inst_24435 = cljs.core.vec.call(null,inst_24421);
var state_24457__$1 = state_24457;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24457__$1,(11),out,inst_24435);
} else {
if((state_val_24458 === (5))){
var inst_24425 = (state_24457[(9)]);
var inst_24422 = (state_24457[(7)]);
var inst_24421 = (state_24457[(8)]);
var inst_24430 = (state_24457[(11)]);
var inst_24429 = (inst_24421[inst_24422] = inst_24425);
var inst_24430__$1 = (inst_24422 + (1));
var inst_24431 = (inst_24430__$1 < n);
var state_24457__$1 = (function (){var statearr_24471 = state_24457;
(statearr_24471[(12)] = inst_24429);

(statearr_24471[(11)] = inst_24430__$1);

return statearr_24471;
})();
if(cljs.core.truth_(inst_24431)){
var statearr_24472_24501 = state_24457__$1;
(statearr_24472_24501[(1)] = (8));

} else {
var statearr_24473_24502 = state_24457__$1;
(statearr_24473_24502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (14))){
var inst_24450 = (state_24457[(2)]);
var inst_24451 = cljs.core.async.close_BANG_.call(null,out);
var state_24457__$1 = (function (){var statearr_24475 = state_24457;
(statearr_24475[(13)] = inst_24450);

return statearr_24475;
})();
var statearr_24476_24503 = state_24457__$1;
(statearr_24476_24503[(2)] = inst_24451);

(statearr_24476_24503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (10))){
var inst_24441 = (state_24457[(2)]);
var state_24457__$1 = state_24457;
var statearr_24477_24504 = state_24457__$1;
(statearr_24477_24504[(2)] = inst_24441);

(statearr_24477_24504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24458 === (8))){
var inst_24421 = (state_24457[(8)]);
var inst_24430 = (state_24457[(11)]);
var tmp24474 = inst_24421;
var inst_24421__$1 = tmp24474;
var inst_24422 = inst_24430;
var state_24457__$1 = (function (){var statearr_24478 = state_24457;
(statearr_24478[(7)] = inst_24422);

(statearr_24478[(8)] = inst_24421__$1);

return statearr_24478;
})();
var statearr_24479_24505 = state_24457__$1;
(statearr_24479_24505[(2)] = null);

(statearr_24479_24505[(1)] = (2));


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
});})(c__21831__auto___24491,out))
;
return ((function (switch__20472__auto__,c__21831__auto___24491,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_24483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24483[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_24483[(1)] = (1));

return statearr_24483;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_24457){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24484){if((e24484 instanceof Object)){
var ex__20476__auto__ = e24484;
var statearr_24485_24506 = state_24457;
(statearr_24485_24506[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24484;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24507 = state_24457;
state_24457 = G__24507;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_24457){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_24457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___24491,out))
})();
var state__21833__auto__ = (function (){var statearr_24486 = f__21832__auto__.call(null);
(statearr_24486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___24491);

return statearr_24486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___24491,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24508 = [];
var len__19529__auto___24582 = arguments.length;
var i__19530__auto___24583 = (0);
while(true){
if((i__19530__auto___24583 < len__19529__auto___24582)){
args24508.push((arguments[i__19530__auto___24583]));

var G__24584 = (i__19530__auto___24583 + (1));
i__19530__auto___24583 = G__24584;
continue;
} else {
}
break;
}

var G__24510 = args24508.length;
switch (G__24510) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24508.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21831__auto___24586 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__21831__auto___24586,out){
return (function (){
var f__21832__auto__ = (function (){var switch__20472__auto__ = ((function (c__21831__auto___24586,out){
return (function (state_24552){
var state_val_24553 = (state_24552[(1)]);
if((state_val_24553 === (7))){
var inst_24548 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24554_24587 = state_24552__$1;
(statearr_24554_24587[(2)] = inst_24548);

(statearr_24554_24587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (1))){
var inst_24511 = [];
var inst_24512 = inst_24511;
var inst_24513 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24552__$1 = (function (){var statearr_24555 = state_24552;
(statearr_24555[(7)] = inst_24512);

(statearr_24555[(8)] = inst_24513);

return statearr_24555;
})();
var statearr_24556_24588 = state_24552__$1;
(statearr_24556_24588[(2)] = null);

(statearr_24556_24588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (4))){
var inst_24516 = (state_24552[(9)]);
var inst_24516__$1 = (state_24552[(2)]);
var inst_24517 = (inst_24516__$1 == null);
var inst_24518 = cljs.core.not.call(null,inst_24517);
var state_24552__$1 = (function (){var statearr_24557 = state_24552;
(statearr_24557[(9)] = inst_24516__$1);

return statearr_24557;
})();
if(inst_24518){
var statearr_24558_24589 = state_24552__$1;
(statearr_24558_24589[(1)] = (5));

} else {
var statearr_24559_24590 = state_24552__$1;
(statearr_24559_24590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (15))){
var inst_24542 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24560_24591 = state_24552__$1;
(statearr_24560_24591[(2)] = inst_24542);

(statearr_24560_24591[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (13))){
var state_24552__$1 = state_24552;
var statearr_24561_24592 = state_24552__$1;
(statearr_24561_24592[(2)] = null);

(statearr_24561_24592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (6))){
var inst_24512 = (state_24552[(7)]);
var inst_24537 = inst_24512.length;
var inst_24538 = (inst_24537 > (0));
var state_24552__$1 = state_24552;
if(cljs.core.truth_(inst_24538)){
var statearr_24562_24593 = state_24552__$1;
(statearr_24562_24593[(1)] = (12));

} else {
var statearr_24563_24594 = state_24552__$1;
(statearr_24563_24594[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (3))){
var inst_24550 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24552__$1,inst_24550);
} else {
if((state_val_24553 === (12))){
var inst_24512 = (state_24552[(7)]);
var inst_24540 = cljs.core.vec.call(null,inst_24512);
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24552__$1,(15),out,inst_24540);
} else {
if((state_val_24553 === (2))){
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24552__$1,(4),ch);
} else {
if((state_val_24553 === (11))){
var inst_24516 = (state_24552[(9)]);
var inst_24520 = (state_24552[(10)]);
var inst_24530 = (state_24552[(2)]);
var inst_24531 = [];
var inst_24532 = inst_24531.push(inst_24516);
var inst_24512 = inst_24531;
var inst_24513 = inst_24520;
var state_24552__$1 = (function (){var statearr_24564 = state_24552;
(statearr_24564[(7)] = inst_24512);

(statearr_24564[(11)] = inst_24530);

(statearr_24564[(12)] = inst_24532);

(statearr_24564[(8)] = inst_24513);

return statearr_24564;
})();
var statearr_24565_24595 = state_24552__$1;
(statearr_24565_24595[(2)] = null);

(statearr_24565_24595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (9))){
var inst_24512 = (state_24552[(7)]);
var inst_24528 = cljs.core.vec.call(null,inst_24512);
var state_24552__$1 = state_24552;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24552__$1,(11),out,inst_24528);
} else {
if((state_val_24553 === (5))){
var inst_24516 = (state_24552[(9)]);
var inst_24520 = (state_24552[(10)]);
var inst_24513 = (state_24552[(8)]);
var inst_24520__$1 = f.call(null,inst_24516);
var inst_24521 = cljs.core._EQ_.call(null,inst_24520__$1,inst_24513);
var inst_24522 = cljs.core.keyword_identical_QMARK_.call(null,inst_24513,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24523 = (inst_24521) || (inst_24522);
var state_24552__$1 = (function (){var statearr_24566 = state_24552;
(statearr_24566[(10)] = inst_24520__$1);

return statearr_24566;
})();
if(cljs.core.truth_(inst_24523)){
var statearr_24567_24596 = state_24552__$1;
(statearr_24567_24596[(1)] = (8));

} else {
var statearr_24568_24597 = state_24552__$1;
(statearr_24568_24597[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (14))){
var inst_24545 = (state_24552[(2)]);
var inst_24546 = cljs.core.async.close_BANG_.call(null,out);
var state_24552__$1 = (function (){var statearr_24570 = state_24552;
(statearr_24570[(13)] = inst_24545);

return statearr_24570;
})();
var statearr_24571_24598 = state_24552__$1;
(statearr_24571_24598[(2)] = inst_24546);

(statearr_24571_24598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (10))){
var inst_24535 = (state_24552[(2)]);
var state_24552__$1 = state_24552;
var statearr_24572_24599 = state_24552__$1;
(statearr_24572_24599[(2)] = inst_24535);

(statearr_24572_24599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24553 === (8))){
var inst_24512 = (state_24552[(7)]);
var inst_24516 = (state_24552[(9)]);
var inst_24520 = (state_24552[(10)]);
var inst_24525 = inst_24512.push(inst_24516);
var tmp24569 = inst_24512;
var inst_24512__$1 = tmp24569;
var inst_24513 = inst_24520;
var state_24552__$1 = (function (){var statearr_24573 = state_24552;
(statearr_24573[(7)] = inst_24512__$1);

(statearr_24573[(14)] = inst_24525);

(statearr_24573[(8)] = inst_24513);

return statearr_24573;
})();
var statearr_24574_24600 = state_24552__$1;
(statearr_24574_24600[(2)] = null);

(statearr_24574_24600[(1)] = (2));


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
});})(c__21831__auto___24586,out))
;
return ((function (switch__20472__auto__,c__21831__auto___24586,out){
return (function() {
var cljs$core$async$state_machine__20473__auto__ = null;
var cljs$core$async$state_machine__20473__auto____0 = (function (){
var statearr_24578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24578[(0)] = cljs$core$async$state_machine__20473__auto__);

(statearr_24578[(1)] = (1));

return statearr_24578;
});
var cljs$core$async$state_machine__20473__auto____1 = (function (state_24552){
while(true){
var ret_value__20474__auto__ = (function (){try{while(true){
var result__20475__auto__ = switch__20472__auto__.call(null,state_24552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__20475__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__20475__auto__;
}
break;
}
}catch (e24579){if((e24579 instanceof Object)){
var ex__20476__auto__ = e24579;
var statearr_24580_24601 = state_24552;
(statearr_24580_24601[(5)] = ex__20476__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__20474__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24602 = state_24552;
state_24552 = G__24602;
continue;
} else {
return ret_value__20474__auto__;
}
break;
}
});
cljs$core$async$state_machine__20473__auto__ = function(state_24552){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__20473__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__20473__auto____1.call(this,state_24552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__20473__auto____0;
cljs$core$async$state_machine__20473__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__20473__auto____1;
return cljs$core$async$state_machine__20473__auto__;
})()
;})(switch__20472__auto__,c__21831__auto___24586,out))
})();
var state__21833__auto__ = (function (){var statearr_24581 = f__21832__auto__.call(null);
(statearr_24581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__21831__auto___24586);

return statearr_24581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21833__auto__);
});})(c__21831__auto___24586,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1471010642966