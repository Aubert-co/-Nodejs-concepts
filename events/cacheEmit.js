import { EventEmitter } from "events";
const evnt = new EventEmitter()

/**
 * simula um cache
 */
var cache = {}
const times =(val)=>{
    if(val.match(/h/i))return val.split(/h/i)[0]*3600000
    return val.split(/m/i)[0] *60*1000
}

evnt.on('set:cache',(key,data,time)=>{
    time = !time ? '1h':time
    if(!cache[key])cache[key] = {}
    cache[key].data=data
    cache[key].time = Date.now()+times(time)
})

evnt.on('get:cache',(key,callBack)=>{
    if(cache[key] && cache[key].time > Date.now())return callBack(cache[key].data)
    
    delete cache[key]
    return callBack(null)
})

export   default evnt