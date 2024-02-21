import mongoose from 'mongoose';

const merchandiseformSchema = new mongoose.Schema({
    item: String,
    fullname: String,
    email: String,
    branch: String,
    phone: String,
    year: String,
    gender: String,
    college: String,
    imageUrl: String,
    size: String,
    nameOnTshirt: String,
    couponCode: String,
    tshirtVariant: String,
}, {
    timestamps: true // This option adds createdAt and updatedAt fields to your schema
});

mongoose.models = {}
const MerchandiseForm = mongoose.model('MerchandiseForm', merchandiseformSchema);

export default MerchandiseForm;
