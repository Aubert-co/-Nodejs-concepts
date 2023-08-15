import http from 'http'
import {  GetProductsCache, GetProductsNoCache } from './cache/getProducts.js'
import {writeHeadAndStatus} from './helpers/index.js'

const server  = http.createServer((req,res)=>{

    res.setHeader('Content-Type','application/json')
    res.setHeader('Acess-Control-Allow-Origin','*')
  
    if(req.url === '/homecache'&& req.method === 'GET')return  GetProductsCache(req,res)
    
    if(req.url === '/homenocache'&& req.method === 'GET')return GetProductsNoCache(req,res)
    writeHeadAndStatus(res,500,{message:"not found"})
})

server.listen(8080,()=>{
    console.log("rodando  porta:8080")
})