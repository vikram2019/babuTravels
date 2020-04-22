let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let RegisterUserSchema = Schema({

    firstName : {
        type : String,
        required : true
    },
    middleName : {
        type : String,
        required : false
    },
    lastName : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    address : {
        permanent : {
            adressLine1 : {
                type : String,
                required : false
            },
            adressLine2 : {
                type : String,
                required : false
            },
            city : {
                type : String,
                required : false
            },
            district : {
                type : String,
                required : false
            },
            state : {
                type : String,
                required : false
            },
            country : {
                type : String,
                required : false
            },
            pincode : {
                type : String,
                required : false
            }
        },
        correspondence : {
            adressLine1 : {
                type : String,
                required : false
            },
            adressLine2 : {
                type : String,
                required : false
            },
            city : {
                type : String,
                required : false
            },
            district : {
                type : String,
                required : false
            },
            state : {
                type : String,
                required : false
            },
            country : {
                type : String,
                required : false
            },
            pincode : {
                type : String,
                required : false
            }
        }
    },
    email : {
        type : String,
        required : true
    },
    alternateEmail : {
        type : String,
        required : true
    },
    phone : {
        Mobile : {
            type : Number,
            required : true
        },
        alternateNumber : {
            type : Number,
            required : false
        },
        landLine : {
            type : Number,
            required : false
        }
    },
    dateOfBirth : {
        year : {
            type : Number,
            required : true
        },
        month : {
            type : String,
            required : true
        },
        date : {
            type : Number,
            required : true
        }
    },
    isTrue : {
        type : Boolean,
        required : false
    }
});

let RegisterUser = module.exports = mongoose.model('registerUser', RegisterUserSchema);
