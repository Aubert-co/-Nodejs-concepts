import mysql2 from 'mysql2/promise'


const Poolonnection = async()=>{
    try{
    const createConnection = mysql2.createPool({
        host:'localhost',
        port:3306,
        user:'root',
        password:'',
        database:'testando',
        pool:10
    })
    return createConnection
    }catch(err){
        throw new Error(err)
    }
}
const noPoolConnection = async()=>{
    try{
        const createConnection = mysql2.createConnection({
            host:'localhost',
            port:3306,
            user:'root',
            password:'',
            database:'testando',
        })
        return createConnection
    }catch(err){
        throw new Error(err)
       
    }
}
export const noPoolQuery = async(sqlQuery)=>{
    let con
    try{
         con= await noPoolConnection()
        const [results,fields] = await con.query(sqlQuery)
        return results
    }catch(err){
        throw new Error(err)
    }finally{
        if(con)await con.end()
    }
}
export const Poolquery =async(sqlQuery)=>{
    let con
    try{
        con = await Poolonnection()
        const [results,fields] = await con.query(sqlQuery)
        
        return results
    }catch(err){
        throw new Error(err)
    }finally{
        if(con)await con.end()
    }
}
