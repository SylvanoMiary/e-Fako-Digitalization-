import mongoose from "mongoose";

const user = new mongoose.Schema({
   
    f_Name: {
        type: String,
        required: true,
        trim: true
    },

    adress: {
        type: String,
        required: true,
        trim: true
    },
    
    mail: {
        type: String,
        required: true,
        trim: true
    },

    phone: {
        type: String,
        required: true,
        trim: true
    },

});

export default mongoose.model('User', user);