const adminEmails = [
    'adminstudentsec@technika.com',
    '220104066@HBTU.ac.in',
    
];

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;

        const adminPassword = process.env.ADMIN_PASSWORD;

        if (adminEmails.includes(email) && password === adminPassword) {
            res.status(200).json({ success: true });
        } else {
            res.status(401).json({ success: false });
        }
    } else {
        res.status(405).end(); // Me Not Allowedthod
    }
}
