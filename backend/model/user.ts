import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let User = new Schema({
    id:{
        type:Object
    },
    username: {
        type:String
    },
    password:{
        type:String
    },
    name:{
        type:String
    },
    surname:{
        type:String
    },
    mail:{
        type:String
    },
    number:{
        type:String
    },
    website:{
        type:String
    },
    bio:{
        type:String
    },
    zvanje:{
        type:String
    },
    classnum:{
        type:Number
    },
    status:{
        type:String
    },
    type:{
        type:Number
    },
    slika:{
        ime:String
    },
    predmeti:{
        type:Array
    },
    prvaprijava:{
        type:Number
    },
    image:{
        type:String
    }
});

export default mongoose.model('User', User, 'users');

