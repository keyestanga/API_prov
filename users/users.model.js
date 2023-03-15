const mongoose = require('./mongoose.service').mongoose;

const usersSchema = new mongoose.Schema({
  email:{
    type:mongoose.Schema.Types.String
  },
 username:{
    type:mongoose.Schema.Types.Number
  },
 password:{
    type:mongoose.Schema.Types.String
  }
},{versionKey: false})


usersSchema.set('toJSON', {virtuals:false});

const Users = mongoose.model('users', usersSchema, 'users');

exports.getUsers = ()=> {

  return new Promise((resolve, reject)=>{
    Users.find({}).exec((error, result)=>{
      if(error){
        reject(error.message);
        throw error.message;
      }
      if(result){
        resolve(result);
      }
    })
  }).catch(error=>{
    throw error.message;
  })
}

exports.addUser = (info)=>{
  try{
    const user = new Users(info);

    return user.save().catch(error=>error.message);
  }catch(error){
    throw error.message
  }
}

exports.deleteUser = (id)=>{
  return new Promise((resolve, reject)=>{
    Users.deleteOne({_id:id}).exec((error, result)=>{
      if(error){
        reject(error.message);
        throw error.message;
      }
      if(result.deleteCount){
        resolve(true);
      }else{
        resolve(false);
      }
    })
  }).catch(error=>{
    throw error.message;
  })
}
