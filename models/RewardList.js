const mongoose = require('mongoose');

const RewardList = mongoose.Schema({
    name :{
        type: String,
        required: true,
    },
    description :{
        type: String,
        required: true,
    },
    imageUrl :{
        type: String,
        required: true,
    },
    quantity :{
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('RewardLists', RewardList);