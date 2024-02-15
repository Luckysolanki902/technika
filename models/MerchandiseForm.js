import mongoose from 'mongoose';

const merchandiseformSchema = new mongoose.Schema({
    item: String,
    eventName: String,
    fullname: String,
    email: String,
    branch: String,
    phone: String,
    year: String,
    gender: String,
    college: String,
    imageUrl: String,
});

mongoose.models = {}
const MerchandiseForm = mongoose.model('MerchandiseForm', merchandiseformSchema);

export default MerchandiseForm;
