import connectToMongo from '@/middleware/middleware';
import MerchandiseForm from '@/models/MerchandiseForm';
import nodemailer from 'nodemailer';

const handler = async (req, res) => {
    try {
        const updatedFormData = req.body;

        // Save form data to MongoDB
        await MerchandiseForm.create(updatedFormData);

        // Send confirmation email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.MAIL_USER,
            to: updatedFormData.email, // assuming your form has an 'email' field
            subject: 'Confirmation of Purchase Registration for Techikka Sub-Council Merchandise',
            text: `We are delighted to inform you that your recent purchase of merchandise from the Technical Sub-Council has been successfully registered. Thank you for choosing our products. We truly appreciate your support and are committed to providing you with high-quality products.\n\nWe will verify your payment and reach out to you within 48 hours to deliver your merchandise to you. ✨✨\n\nBest regards,\nTechnical Sub-Council\nHBTU, Kanpur`,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: true, message: 'Ordered successfully' });
    } catch (error) {
        console.error('Error submitting form:', error.message);

        // Check if the error is related to MongoDB
        if (error.name === 'MongoError') {
            res.status(500).json({ success: false, error: 'Error saving to the database' });
        } else {
            // Handle other errors (e.g., email sending)
            res.status(500).json({ success: false, error: 'Internal Server Error' });
        }
    }
};

export default connectToMongo(handler);
