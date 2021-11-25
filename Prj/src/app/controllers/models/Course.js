const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name : {type : String, default : "Tran Duc Hai"},
    desCription : {type : String, default : "aasdf df asd f asd fa dsf asd fads sfd "},
    image : {type : String, default : "https://gamek.mediacdn.vn/thumb_w/640/133514250583805952/2021/7/6/kui1-16255596041271224579871.jpg"},
    createAt : {type : Date, default : Date.now},
    updateAt : {type : Date, default : Date.now}
     
});

// cái course đầu là name thôi cái sau là yêu cầu truyền 1 đối tương Schema
module.exports = mongoose.model('Course', Course); 

