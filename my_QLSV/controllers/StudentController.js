const student = require('./models/Student')
const mongooseToObject = require('../util/mongoose')

class StudentRouter   {
    async getStudents(req, res, next) {
        let allStudents = await student.find({});
        
        res.json( mongooseToObject.multipleMongooseToObject(allStudents ));
        
    }

    async getStudent (req, res, next) {
        let s = req.params.MSSV;
        let oneStudent =  await student.findOne({MSSV : s});
        res.json(mongooseToObject.mongooseToObject(oneStudent))
            
    } 


    async postStudent (req, res, next) {
        let tmp = req.body;
        await student.create(tmp);
        res.redirect(303, '/Students');
        
    }

    async putStudent (req, res, next) {
        let tmp = req.params;

        await student.findOneAndUpdate({MSSV : tmp.MSSV}, req.body);
        res.redirect(303, '/Students');
        
        
    }

    async deleteStudent (req, res, next) {
        let tmp = req.params.MSSV;
        await student.deleteMany({MSSV : tmp});
        res.redirect(303, '/Students');
        
    } 


}

module.exports = new StudentRouter();

