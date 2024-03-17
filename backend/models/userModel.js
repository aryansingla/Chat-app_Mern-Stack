const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {type: Sytring, required: true},
    email : {type: Sytring, required: true},
    password : {type: Sytring, required: true},
    pic : {type: Sytring, required: true , default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"},
},
{
    timestamps: true,
});

const User = mongoose.model("User",userSchema);

module.exports = User;