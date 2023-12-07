const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    mobile: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        //required: true,
    },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;