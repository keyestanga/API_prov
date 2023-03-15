'use strict'

const userModel = require('./model');

exports.getAllUsers = (req, res)=>{
    console.log('Received getAllUsers request');

    userModel.getUsers().then((users, error)=>{
        if(error){
            throw error.message;
        }
        if(users){
            return res.status(200).send(users);
        }else{
            return res.status(204);
        }
    }).catch(error=>{
        throw error.message;
    })
}

exports.addUser = (req, res)=>{
    console.log('Received addUser request');
    console.log('estamos recibiendo: ', req.body);

    userModel.addUser(req.body.info).then((user, error)=>{
        if(error){
            throw error.message;
        }
        if(user){
            return res.status(200).send({info:true});
        }else{
            console.error('error adding user');
            return res.status(500);
        }
    }).catch(error=>{
        throw error.message;
    })
}

exports.deleteUser = (req, res)=>{
  console.log('Received deleteUser request');

  userModel.deleteUser(req.params.id).then((user, error)=>{
      if(error){
          throw error.message;
      }
      if(user){
          return res.status(200).send({info:true});
      }else{
          console.error('error on deleteUser');
          return res.status(500);
      }
  }).catch(error=>{
      throw error.message;
  })
}
