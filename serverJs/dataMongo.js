const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/dataUsers";
mongoose.connect(dbUrl, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).catch(err => console.log(err));

let userSchema = mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})

let User = mongoose.model("dataUser", userSchema);

module.exports = User;