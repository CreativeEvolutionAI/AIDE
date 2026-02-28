import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import multer from 'multer';
import { fileURLToPath } from 'url';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Configure multer for memory storage (files are kept in buffer)
const storage = multer.memoryStorage();
const upload = multer({ 
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 } // Limit file size to 10MB
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Route for sending email with optional file attachment
  app.post('/api/contact', upload.single('file'), async (req, res) => {
    const { name, email, phone, business } = req.body;
    const file = req.file;

    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check for SMTP credentials
    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Mock Email Send:', { name, email, phone, business, file: file ? file.originalname : 'No file' });
      console.warn('SMTP credentials not found. Email not sent. Check server logs.');
      return res.status(200).json({ message: 'Message received (Mock mode: SMTP not configured)' });
    }

    try {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      const mailOptions: nodemailer.SendMailOptions = {
        from: `"AIDE+ Website" <${process.env.SMTP_USER}>`,
        to: 'aoransundeisgn@gmail.com, aide2070@163.com',
        subject: `New Consultation Request from ${name}`,
        text: `
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Business Context: ${business}
        `,
        html: `
          <h3>New Consultation Request</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Business Context:</strong></p>
          <p>${business}</p>
        `,
        attachments: file ? [
          {
            filename: file.originalname,
            content: file.buffer
          }
        ] : []
      };

      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
