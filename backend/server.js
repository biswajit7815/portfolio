import express from 'express';
//import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import Contact from './models/Contact.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongodb:27017/portfolio';
// mongoose.connect(MONGODB_URI)
//   .then(() => console.log('✅ Connected to MongoDB successfully'))
//   .catch((err) => console.error('❌ Failed to connect to MongoDB:', err));

// Routes
// POST /api/contact - Create a new contact message
app.post('/api/contact', async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // const newContact = new Contact({
    //   firstName,
    //   lastName,
    //   email,
    //   message
    // });

    // await newContact.save();

    console.log(`New message received from: ${firstName} ${lastName} (${email})`);

    // Optionally Send Email via Nodemailer
    try {
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: process.env.EMAIL_USER, // sends to yourself
          subject: `Portfolio Submission: ${firstName} ${lastName}`,
          text: `You have a new contact form submission!\n\nName: ${firstName} ${lastName}\nEmail: ${email}\n\nMessage:\n${message}`,
          replyTo: email
        };

        await transporter.sendMail(mailOptions);
        console.log('✅ Email notification dispatched successfully.');
      } else {
        console.warn('⚠️ EMAIL_USER or EMAIL_PASS not set. Email notification skipped.');
      }
    } catch (emailErr) {
      console.error('❌ Nodemailer failed to send email:', emailErr);
      // We still want to let the user know it was saved to DB, so we do not block response.
    }
    
    res.status(201).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
  }
});
app.get('/',  (req,res)=> {
  res.status(200).json({msg:"hii"})
});
// Health check endpoint
// app.get('/api/health', (req, res) => {
  
//   res.status(200).json({ status: 'healthy', database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected' });
// });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend Server running on port ${PORT}`);
});
