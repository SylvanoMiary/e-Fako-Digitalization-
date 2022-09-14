import bodyParser from 'body-parser';
import User from './../models/user.model.mjs';

class UserController {

    getUsers(req, res) {
        User.find().then(users => {
            res.json(users);
        });
    };

    addUser(req, res) {
        const newUser = req.body;
        User.create(newUser).then( ({ _id, f_Name, l_Name, mail}) => {
            res.json( { _id, f_Name, l_Name, mail} );
        });
    }

    deleteUser (req, res) {
        const userId = req.params.id;
        User.deleteOne( { _id: userId } ).then( () => {
            res.json( {message: 'user deleted'} )
        });
    }  
    
    updateUser(req, res) {
        const user = req.params.id;
        User.findById( user).then( dbUser => {
            Object.assign(dbUser, req.body);
            dbUser.save().then( () => {
                res.json(dbUser);
            });
        });
    }
}

export default new UserController();