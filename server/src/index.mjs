import server from './configs/express.configs.mjs';
import env from './configs/environment.mjs';
import dbConnect from './configs/mongoose.config.mjs';

dbConnect( () => {
    const app = server.init(); 
    const srv = app.listen(env.port, () => {
        console.log(`app started and listen on port ${env.port}`);
    });
});