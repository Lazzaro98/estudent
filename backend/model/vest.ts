import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Vest = new Schema ({
    naslov:{
        type: String
    },
    predmeti:{
        type: Array
    },
    tekst:{
        type: String
    },
    datum:{
        type: String
    },
    Fajlovi:{
        type:Array
    }
})

export default mongoose.model('vest',Vest,'vesti');