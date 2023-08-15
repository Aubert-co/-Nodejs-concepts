import { Poolquery } from "../model/database.js"
import {writeHeadAndStatus,getDatasFromCache} from '../helpers/index.js'
import evnt from "../events/cacheEmit.js"


export const GetProductsCache = async(req,res)=>{
    try{
        const key = "cheap"
        const valuesCache =await getDatasFromCache(key,evnt)

        if(valuesCache)return writeHeadAndStatus(res,200,{datas:valuesCache})
             
        const sql = "SELECT * FROM ITEMS WHERE PRICE < 50 LIMIT 20"
        const datas = await Poolquery(sql)
        
        evnt.emit('set:cache',key,datas)
  
        writeHeadAndStatus(res,200,{datas})
    }catch(err){
        writeHeadAndStatus(res,500,err.message)
    }
}

export const GetProductsNoCache = async(req,res)=>{
    try{
        const sql = "SELECT * FROM ITEMS  LIMIT 50"
        const datas = await Poolquery(sql)
        
        writeHeadAndStatus(res,200,{datas})
    }catch(err){
        writeHeadAndStatus(res,500,err.message)
    }
}