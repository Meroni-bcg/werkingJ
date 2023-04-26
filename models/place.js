const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
    title: {type: String, required:true },
    description: { type: String, required:true },
    image: { type: String, required:true },
    address: { type: String, required:true },
    location: {
        lat: { type: Number, required:true },
        lng: { type: Number, required:true }
    },
    creator: { type: mongoose.Type.ObjectId, required: true, ref: 'User' }
});

placeSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Place', placeSchema);