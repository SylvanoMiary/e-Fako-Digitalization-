import bodyParser from 'body-parser';
import Tasks from './../models/task.model.mjs';

class taskController {

    getTasks(req, res) {
        Tasks.find().then(tasks => {
            res.json(tasks);
        });
    };


    addTask(req, res) {
        const newTask = req.body;
        console.log("add task called");
        Tasks.create(newTask).then( ({ _id, taskOwn, dayRecov, timeRecov}) => {
            res.json( { _id, taskOwn, dayRecov, timeRecov} );
        });
    }

    deleteTask (req, res) {
        const taskId = req.params.id; 
        Tasks.deleteOne( { _id: taskId } ).then( () => {
            res.json( {message: 'task deleted'} )
        });
    }  
}

export default new taskController();