import { query } from "./database.js";


const getRandomNumber =(min, max)=> Math.random() * (max - min) + min;
  
 
  function getRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  
  function createRandomItem() {
    const price = getRandomNumber(10, 100);
    const img_path = `/images/${getRandomString(10)}.jpg`;
    const name = getRandomString(8);
    const color = getRandomString(5);
    const quantity = Math.floor(getRandomNumber(1, 100));
  
    return {
      price: price.toFixed(2),
      img_path: img_path,
      name: name,
      color: color,
      quantity: quantity
    };
  }
  
  const insertValues = async()=>{
   
  for (let i = 0; i < 50; i++) {
    const {price,img_path,name,color,quantity}  = createRandomItem()
    await query(`INSERT INTO items (price, img_path, name, color, quantity) VALUES ('${price}', '${img_path}', '${name}', '${color}', '${quantity}')`)
    .catch((err)=>{
        throw err
    }).finally(()=>{
        console.log('sucess')
    })
  }
}
//insertValues()
  
 
  