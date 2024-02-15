import connectToMongo from '@/middleware/middleware';
import MerchandiseForm from '@/models/MerchandiseForm'

const handler = async (req, res) => {
    try {
        const updatedFormData = req.body;
        // Save form data to MongoDB
        await MerchandiseForm.create(updatedFormData);
        res.status(200).json({ success: true, message: 'Ordered successfully' });
    } catch (error) {
        console.error('Error submitting form:', error.message);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export default connectToMongo(handler);
