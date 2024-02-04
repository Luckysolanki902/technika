import connectToMongo from '@/middleware/middleware';
import EventForm from '@/models/EventForm';

const handler = async (req, res) => {
    try {
        const updatedFormData = req.body;
console.log(updatedFormData)
        // Save form data to MongoDB
        await EventForm.create(updatedFormData);

        res.status(200).json({ success: true, message: 'Form submitted successfully' });
    } catch (error) {
        console.error('Error submitting form:', error.message);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

export default connectToMongo(handler);
