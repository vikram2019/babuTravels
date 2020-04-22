let Promise = require('promise');
let registerUserOperation = require('../operation/registrationOperation');

let registerNewUser = (parameter)=>{
console.log('=======inside the controller ====== '+JSON.stringify(parameter));
  return new Promise((resolve, reject)=>{
    registerUserOperation.registerUser(parameter).then((savedUser)=>{
      if(savedUser){
        resolve(savedUser);
      }else{
        reject('Error in saving the user')
      }
    }).catch((err)=>{
      reject('Error in saving the user');
    })
  })
}

module.exports = {
  registerNewUser : registerNewUser,
}
