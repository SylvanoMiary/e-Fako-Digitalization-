import mongoose from 'mongoose';
import env from './environment.mjs';

function mongooseConnexion(cb) {
    mongoose.Promise = global.Promise;
    mongoose.connect(env.data);
    
    mongoose.connection.on('connected', () => {
      console.log(`conected to databases ${env.data}`);  
    });

    mongoose.connection.once('open', () => {
        cb();
    });

    mongoose.connection.on('error', () => {
        console.log('unable to connect to database');
    });

    mongoose.connection.once('disconnected', () => {
        console.log('server is disconnected to database')
    });
} 

export default mongooseConnexion;