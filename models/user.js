var mongoose = require('mongoose');

var Schema = mongoose.Schema({
	userType:{
		type:String,
		required:true, // hacker,company
        index : true
	},
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String
    },
    notes: {
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'Invited', // Invited,Active,Deleted
        index : true
    },
    createdAt:{
        type:Date,
        default:function(){
            return new Date();
        }
    },
    updatedAt:{
        type:Date,
        default:function(){
            return new Date();
        },
        index : true
    },
    createdBy:{
        type:String,
        ref:'User'
    },
    updatedBy:{
        type:String,
        ref:'User'
    }
});

module.exports = mongoose.model('User', Schema);