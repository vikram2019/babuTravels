let express = require('express');
let router = express.Router();
let registerUserController = require('../controller/registrationController');

router.post('/registerNewUser', (req, res, next)=>{
    let newUser = {
        firstName : req.body.firstName,
        middleName : req.body.middleName,
        lastName : req.body.lastName,
        userId : req.body.userId,
        password : req.body.password,
        email : req.body.email,
        alternateEmail : req.body.alternateEmail,
        isTrue : true,
        address : {
            permanent : {
                adressLine1 : req.body.address.permanent.adressLine1,
                adressLine2 : req.body.address.permanent.adressLine2,
                city : req.body.address.permanent.city,
                district : req.body.address.permanent.district,
                state : req.body.address.permanent.state,
                country : req.body.address.permanent.country,
                pincode : req.body.address.permanent.pincode
            },
            correspondence : {
                adressLine1 : req.body.address.correspondence.adressLine1,
                adressLine2 : req.body.address.correspondence.adressLine2,
                city : req.body.address.correspondence.city,
                district : req.body.address.correspondence.district,
                state : req.body.address.correspondence.state,
                country : req.body.address.correspondence.country,
                pincode : req.body.address.correspondence.pincode
            }
        },
        dateOfBirth : {
            date : req.body.dateOfBirth.date,
            month : req.body.dateOfBirth.month,
            year : req.body.dateOfBirth.year
        },
        phone : {
            Mobile : req.body.phone.Mobile,
            alternateNumber : req.body.phone.alternateNumber,
            landLine : req.body.phone.landLine,
        }
    }

    console.log('-------- inside the routes ======= '+JSON.stringify(newUser));
    registerUserController.registerNewUser(newUser).then((registeredUser)=>{
      if(registeredUser){
        res.send({
          success : true,
          MSG : 'Successfully created the new user',
          registeredUser : registeredUser
        })
      }else{
        res.send({
          success : false,
          MSG : 'Error in creating new user',
          Error : err
        })
      }
    })

});


module.exports = router;
