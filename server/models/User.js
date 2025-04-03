// const mongoose = require("mongoose")


// const UserSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String,
//     avatar: String,
// })

// const UserModel = mongoose.model("User", UserSchema)
// module.exports = UserModel


const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    googleId: { type: String, unique: true },
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profileImage: { type: String, default: "https://via.placeholder.com" },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
