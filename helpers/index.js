export const writeHeadAndStatus = (res,status,message)=>{
    if(!res)throw new Error('response is required')
    if(!status)status = 200
    if(!message)message = {message:"sucess"}
    res.writeHead(status, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(message))
}

export const getDatasFromCache = (key,evnt)=>{
    return new Promise((resolve,reject)=>{ 
        evnt.emit('get:cache',key,(datas)=>{
            resolve(datas)
        })
    })
}