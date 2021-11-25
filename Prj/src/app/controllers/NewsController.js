const Course = require('./models/Course');
const mongooseToObject = require('../../util/mongoose')

class NewsController {
    index(req, res){

        //[GET] /news
        res.render('news');
    };


    show(req, res, next) {
        
        // Course.find({}) 
        //     .then(course => {
        //         res.render('home', {
        //             course : mongooseToObject.multipleMongooseToObject(course)
        //         });
        //     })   
        //     .catch(next);
        
        Course.findOne({MSSV : "20194270"})
            .then(course => {
                res.json({course})
            })
            .catch(next);
        

    }

}

module.exports = new NewsController();