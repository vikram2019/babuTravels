let Promise = require('promise');
let registerUserModal = require('../modal/registrationModal');;

let registerUser = (parameter)=>{
  console.log('--------- inside the operation file @@@@@@@@  '+JSON.stringify(parameter));
  return new Promise((resolve, reject)=>{
    if(parameter){
    let saveUser = new registerUserModal(parameter);
    saveUser.save().then((savedUser)=>{
      console.log('-----------saved user inside operation file ----- '+JSON.stringify(savedUser));5
      if(savedUser){
        resolve(savedUser);
      }else{
        reject("Error in saving the new User");
      }
    }).catch((err)=>{
      reject('Error in saving the new User');
    })
  }else{
    reject('Error in saving the new User');
  }
  });
}

module.exports = {
  registerUser : registerUser,
}
