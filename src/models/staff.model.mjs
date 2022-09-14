import mongoose from "mongoose";

const staff = new mongoose.Schema ({
        
    regNumber: {
        type: String,
        required: true,
        trim: true
    },

    firstName: {
        type: String,
        required: true,
        trim: true
    },

    lastName : {
        type: String,
        required: true,
        trim : true
    },

    bDate: {
        type: String,
        required: true,
        trim: true
    },
    
    bPlace: {
        type: String,
        required: true,
        trim: true
    },

    fSituation: {
        type: String,
        required: true,
        trim: true
    },

    address: {
        type: String,
        required: true,
        trim: true
    },

    idCard: {
        type: String,
        required: true,
        trim: true
    },

    nationality: {
        type: String,
        required: true,
        trim: true
    },

    hiringDate: {
        type: String,
        required: true,
        trim: true
    },

    post : {
        type: String,
        required: true,
        trim: true
    },

    drivLicense: {
        type: String,
        required: true,
        trim: true
    },

    endService: {
        type: String,
        required: true,
        trim: true
    },

    level : {
        type: String,
        required: true,
        trim: true
    },

    diploma: {
        type: String,
        required: true,
        trim: true
    },

    experiences: {
        type: String,
        required: true,
        trim: true
    },


});

export default mongoose.model("Staff", staff);