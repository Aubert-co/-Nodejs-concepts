async function Getvalue(value){
    const ok = typeof value === 'number' ? true :false

    const obj = {ok,multiple:value*2}
    const  response = await Promise.resolve(obj)


    if(!response.ok)throw new Error('value must to be a number')

    return response

}
 
const obj = (async()=>{
    const {multiple} = await Getvalue(10)
    console.log(multiple)
})()



function returnPromiseObj(name,age){

    const obj = {id:3,name,age}
    if(!name || !age)throw Error('name or age undefined')
    return new Promise((resolve,reject)=>{
        resolve(obj)
        reject('error')
    })
}

returnPromiseObj('lucas',31)
.then((val)=>{
    console.log(val)
})
.catch((e)=>{
    console.log(e)
})