const axios = require('axios');
let url = 'https://fakestoreapi.com/users';

axios.get(url)
  .then((res)=>{
    console.log(res.data);
  })
  .catch((err)=>{
    console.log(err);
  })

/*axios.post(url, {
  method:"POST",
  body:JSON.stringify(
      {
          email:'John@gmail.com',
          username:'johnd',
          password:'m38rmF$',
          name:{
              firstname:'John',
              lastname:'Doe'
          },
          address:{
              city:'kilcoole',
              street:'7835 new road',
              number:3,
              zipcode:'12926-3874',
              geolocation:{
                  lat:'-37.3159',
                  long:'81.1496'
              }
          },
          phone:'1-570-236-7033'
      }
  )
})
  .then((result)=>{
    console.log(result.data);
  })
  .catch((err)=>{
    console.log(err);
  })
*/

module.exports = axios;

