const mongoose = require('mongoose');

async function connect () {
    try {

        await mongoose.connect('mongodb://127.0.0.1:27017/my_web_dev'); // nếu connect lõi có thể đổi 127.0.0.1 sang localhosst hoặc ngược lại
        console.log('connect succesfully');

    }catch(error) {
        console.log('connect faile');
        console.log(error);
    }
   
};

module.exports = { connect };
