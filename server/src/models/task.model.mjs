import mongoose from 'mongoose';

const task  = new mongoose.Schema ({

    taskOwn : {
        type: String,
        required: true,
        trim: true
    },

    dayRecov:[ 
        {
            type: String,
            required: true,
            trim: true
        } 
    ],

    timeRecov: {
        type: String,
        required: true,
        trim: true
    }

})

export default mongoose.model('Task', task);