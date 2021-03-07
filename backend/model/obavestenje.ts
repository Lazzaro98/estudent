import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Obavestenje = new Schema ({
    naslov:{
        type: String
    },
    tekst:{
        type: String
    },
    date:{
        type: String
    },
    type:{
        type: Number
    }
})

export default mongoose.model('obavestenje',Obavestenje,'obavestenja');