const mongoose=require('mongoose');
const schema=mongoose.Schema;

const UserSchema=new schema({
    username:{
        type:String,
        unique:true,
        required:true
    },
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    male:{
        type:Boolean,
        required:true
    }
});

module.exports=mongoose.model('User',UserSchema);