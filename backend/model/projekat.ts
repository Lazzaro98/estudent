import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Projekat = new Schema ({
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

export default mongoose.model('projekat',Projekat,'projekti');