const SinhVien = require('./models/SinhVien')
const mongooseToObject = require('../util/mongoose')

class StudentRouter   {
    async GetSinhVien(req, res, next) {
        let allStudents = await SinhVien.find({});
        res.json(mongooseToObject.multipleMongooseToObject(allStudents ));
        
    }

    async GetOneSinhVien (req, res, next) {
        let s = req.params.MSSV;
        let oneStudent =  await SinhVien.findOne({MSSV : s});
        res.json(mongooseToObject.mongooseToObject(oneStudent))
            
    } 


    async PostSinhVien (req, res, next) {
        let tmp = req.body;
        await SinhVien.create(tmp);
        res.redirect(303, '/Students');
        
    }

    async PutSinhVien (req, res, next) {
        let tmp = req.params;
        await SinhVien.findOneAndUpdate({MSSV : tmp.MSSV}, req.body);
        res.redirect(303, '/Students');
        
        
    }

    async DeleteOneSinhVien (req, res, next) {
        let tmp = req.params.MSSV;
        await SinhVien.deleteMany({MSSV : tmp});
        res.redirect(303, '/Students');
        
    } 


}



module.exports = new StudentRouter();

