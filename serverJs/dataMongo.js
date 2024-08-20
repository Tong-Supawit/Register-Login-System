require("dotenv").config();
const mongoose = require("mongoose");
const dbUrl = process.env.DATABASE_URL;

mongoose.connect(dbUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).catch(err => console.log(err));

let userSchema = mongoose.Schema({
    username: { type: String, required: true, unique : true },
    email: { type: String, required: true, unique : true },
    password: { type: String, required: true },
    role: { type: String, enum : ["user", "admin"], default : "user"},
})

let User = mongoose.model("dataUser", userSchema);

module.exports = User;