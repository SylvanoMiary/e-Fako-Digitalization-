import express from 'express';
import bodyParser from 'body-parser';
import routes from './../routes/index.r.mjs';
import expose from './expose.js';


const {__dirname} = expose;

class App {

    constructor() {
        this.app = express();
    }

    init() {
        this.initMiddlewares();
        this.initRoute();
        return this.app;
    }

    initStatics() {
        this.app.use(express['static'](__dirname + '/../../../client'));
    }

    initMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: true}));
    }

    initRoute() {
        this.app.use('/api', routes);
    }
}
export default new App();