const mongoose = require('mongoose');

const marioSchema = new mongoose.Schema({
    name: "Luigi",
    weight: 60,
});

const marioModel = mongoose.model("mariochar", marioSchema);

module.exports = marioModel;