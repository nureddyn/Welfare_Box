const mongoose = require('mongoose');

const goodsSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true,
    // },
    userId: {type: String, required: true},
    goodType: {type: String, required: true},
    location: {type: String, required: true},
    quantity: {type: Number, required: true},
    description: {type: String},
    isAvailable: {type: Boolean, required: true},
});

const Goods = mongoose.model('Goods', goodsSchema);

module.exports = Goods;