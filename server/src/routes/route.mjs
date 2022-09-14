import express from 'express';
import userController from '../controllers/user.controller.mjs';
import staffController from '../controllers/staff.controller.mjs';
import taskController from '../controllers/task.controller.mjs';

const router = express.Router();

// user route -------------------------------------
router.route('/user')
    .get(userController.getUsers);

router.route('/user')
    .post(userController.addUser);

router.route('/user/:id')
    .put(userController.updateUser)
    .delete(userController.deleteUser);
//------------------------xx------------------------

// staff route--------------------------------------
router.route('/staff')
    .get(staffController.getStaffs)
    .post(staffController.addStaff);

router.route('/staff/:id')
    .put(staffController.updateStaff)
    .delete(staffController.deleteStaff);
//------------------------xx-------------------------

//task route----------------------------------------
router.route('/task')
    .get(taskController.getTasks)
    .post(taskController.addTask)

router.route('/task/:id')
    .delete(taskController.deleteTask)

export default router;