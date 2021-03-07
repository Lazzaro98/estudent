import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Predmet = new Schema ({
    naziv:{
        type: String
    },
    obavestenja:{
        type: Array
    },
    informacije:{
        type: Array
    },
    predavanja:{
        type: Array
    },
    vezbe:{
        type:Array
    },
    ispiti:{
        type:Array
    },
    lab:{
        type:Array
    },
    projekat:{
        type:Array
    },
    semestar:{
        type:Number
    },
    spiskovi:{
        type:Array
    }
})

export default mongoose.model('predmet',Predmet,'predmeti');