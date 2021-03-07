import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let naucniProjekat = new Schema ({
    naslov:{
        type: String
    },
    tekst:{
        type: String
    },
    date:{
        type:String
    }
})

export default mongoose.model('naucni-projekat',naucniProjekat,'naucni-projekti');