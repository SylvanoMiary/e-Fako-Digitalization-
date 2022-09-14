import bodyParser from "body-parser";
import Staff from "./../models/staff.model.mjs"; 

class staffController {

    getStaffs(req, res) {
        Staff.find().then(staffs => {
            res.json(staffs);
        });
    };

    addStaff(req, res) {
        const newStaff = req.body;
        Staff.create(newStaff).then( ({ _id, firstName, lastName}) => {
            res.json( { _id, firstName, lastName} );
        });
    }

    deleteStaff (req, res) {
        const staffId = req.params.id; 
        Staff.deleteOne( { _id: staffId } ).then( () => {
            res.json( {message: 'staff fired'} )
        });
    }  
    
    updateStaff(req, res) {
        const staff = req.params.id;
        Staff.findById(staff).then( dbStaff => {
            Object.assign(dbStaff, req.body);
            dbStaff.save().then( () => {
                res.json(dbStaff);
            }); 
        });
    }

}
export default new staffController();