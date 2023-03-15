const mongoose = require('mongoose');

let count = 0;

const options = {
    autoIndex:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connectWithRetry = ()=>{
  console.log('Mongo connection with retry');
  mongoose.connect('mongodb://keylinmyapidb:12345@localhost:27017/myapi',options)
  .then(()=>{
      console.log('Mongo is connected');
  }).catch(error=>{
      console.log('Mongo connection unsuccessful, retry after 5 seconds. ', ++count);
      console.log('Mongo connection: ', error);
      setTimeout(connectWithRetry, 5000);
  })
}


connectWithRetry();
exports.mongoose = mongoose;
