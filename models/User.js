var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var userSchema = new mongoose.Schema({

  full_name: { type: String,  required: [true, 'Full name must be provided'] },

  company: { type: String},  //required: [true, 'company must be provided'] },

  company_web: { type: String},  //required: [true, 'company web site must be provided'] },

  company_address:  { type: String},  //required: [true, 'company address must be provided'] },

  company_product:  { type: String},  //required: [true, 'company product must be provided'] },

  email:    { 
    
    type: String,     

    Required:  'Email address cannot be left blank.',
    validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    index: {unique: true, dropDups: true}
    },

  password: { type: String , required: [true,  'Password cannot be left blank']},

  dob: { type: Date , required: [true, 'Date of birth must be provided']},

  country: { type: String , required: [true, 'Country cannot be left blank.']},

  gender: { type: String , required: [true, 'Gender must be provided']},

  owner_manager_name: { type: String},  //required: [true, 'company owner name must be provided'] },

  owner_manager_address: { type: String},  //required: [true, 'company owner address must be provided'] },

  owner_country: { type: String} , //required: [true, 'Owner Country cannot be left blank.']},

  owner_SSN_EIN: { type: String} , //required: [true, 'Owner SSN or EIN  cannot be left blank.']},

  owner_passport: { type: String} , //required: [true, 'Owner passport drive or license cannot be left blank.']},

  owner_email: {
           type: String,
        Required:  'Email address cannot be left blank.',
        validate: [validateEmail, 'Please fill a valid email address'],
             match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        index: {unique: true, dropDups: true}
        },
  owner_skypeid:{ type: String} , //required: [true, 'Owner SSN or EIN  cannot be left blank.']},    
  
  customer_support_name: {type: String}, //required:[true, 'customer support name must be provided']},
  customer_support_phone: {type: String}, //required:[true, 'customer support phone# must be provided']},
  customer_support_email: {
           type: String,
         Required:  'Email address cannot be left blank.',
        validate: [validateEmail, 'Please fill a valid email address'],
             match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        index: {unique: false, dropDups: true}
        },

  accept_credit_cards: {type: String}, 
  processed_before: {type: String}, //required:[true, 'processed before ? must be provided']},
  acct_terminated:{type: String}, //required:[true, 'terminated reason ? must be provided']},
  time_with_processor: {type: String}, //required:[true, 'time with processor ? must be provided']},
  current_processor: {type: String}, //required:[true, 'time with processor ? must be provided']},
  heard_about_us: {type: String}, //required:[true, 'how do you heard about us ? must be provided']},
  agent_name:{type: String}, //required:[true, 'angent name must be provided']},
  monthly_sales: {type: String}, //required:[true, 'estimate monthly sales must be provided']},
  times_transaction: {type: String},// required:[true, 'monthly transaction times? must be provided']},
  max_ticket_value: {type: String},// required:[true, 'max ticket value ? must be provided']},
  min_ticket_value: {type: String},// required:[true, 'min ticket value ? must be provided']}, 


  serviceH: { type: String },

  serviceL: { type: String },


});



module.exports = mongoose.model('Users', userSchema);