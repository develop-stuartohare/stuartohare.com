var EventEmitter = require('events').EventEmitter;
var Ajax = require('./ajax');
var _ = require('underscore');

class Store extends EventEmitter {

    constructor(dispatcher, stores, data){                      
        
        super();        
        data = data || {};
        this.setMaxListeners(0);   
        this.dispatcher = dispatcher;
        this.stores = stores;
        this.dispatchToken = this.dispatcher.register(this.onDispatch.bind(this));
        this.state = this.getInitialState(data || {});                 
    }

    GET(url, params, cb){
        if(typeof params === 'function'){
            cb = params;
            params = null;
        }
        Ajax.get(url, params, cb.bind(this));
    }
    
    PUT(url, params, cb){
        if(typeof params === 'function'){
            cb = params;
            params = null;
        }        
        Ajax.put(url, params, cb.bind(this));
    }

    POST(url, params, cb){
        if(typeof params === 'function'){
            cb = params;
            params = null;
        }        
        Ajax.post(url, params, cb.bind(this));
    }

    LISTEN(type, cb){
        Ajax.listen(type, cb.bind(this));
    }     

    SUBSCRIBE(room, params, cb){
        if(typeof params === 'function'){
            cb = params;
            params = null;
        }        
        Ajax.subscribeToRoom(room, params, cb.bind(this));
    }    

    emitChange() {
        this.emit('change');
    }

    addChangeListener(callback) {
        this.on('change', callback);
    }

    removeChangeListener(callback) {
        this.removeListener('change', callback);
    }

    onDispatch(action){

        if(this[action.type] && typeof this[action.type] === 'function'){
            this[action.type].apply(this, action.payload);
        }
        return true;        
    }

    dispatch(){
        
        this.dispatcher.action.apply(this.dispatcher, arguments);
    }

    dispatchDefer(){
        var self = this;
        var args = arguments;

        _.defer(function(){
            self.dispatch.apply(self, args);
        })
    }

    isLoading(loading){
        var event = loading ? "LOADING" :"LOADING_END";

        this.dispatchDefer(event);
    }

    waitFor(stores){

        if(!stores) return;
        for(var i=0,store;store=stores[i];i++){
            stores[i] = this.stores[store].dispatchToken;
        }

        return this.dispatcher.waitFor(stores);
    }

    getInitialState(){
        return {};
    }    

    getState(){
        return this.state;
    }   

}

Store.isStore = true;
module.exports = Store;
