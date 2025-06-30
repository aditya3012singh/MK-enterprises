import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Create nodemailer transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    service: 'gmail', // You can change this to other services
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email templates
const createCustomerEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #ea580c, #dc2626); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .footer { background: #f8f9fa; padding: 15px; text-align: center; font-size: 12px; color: #666; }
        .highlight { background: #fff3cd; padding: 10px; border-left: 4px solid #ffc107; margin: 15px 0; }
        .contact-info { background: #e7f3ff; padding: 15px; border-radius: 5px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🙏 MK Enterprises (Ma Kanjya Enterprises)</h1>
        <p>Thank you for contacting us!</p>
      </div>
      
      <div class="content">
        <p>Dear <strong>${formData.name}</strong>,</p>
        
        <p>Thank you for reaching out to MK Enterprises. We have received your inquiry and Sonu Singh will personally review your requirements.</p>
        
        <div class="highlight">
          <h3>Your Inquiry Details:</h3>
          <p><strong>Service Interest:</strong> ${formData.serviceType}</p>
          <p><strong>Business Type:</strong> ${formData.dealerType}</p>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          ${formData.bulkOrder ? `<p><strong>Bulk Order:</strong> Yes (${formData.quantity})</p>` : ''}
          <p><strong>Message:</strong> ${formData.message}</p>
        </div>
        
        <p><strong>What happens next?</strong></p>
        <ul>
          <li>Sonu Singh will personally review your requirements within 24 hours</li>
          <li>You'll receive a detailed response with pricing and availability</li>
          ${formData.bulkOrder ? '<li>Special bulk pricing will be provided for your order</li>' : ''}
          <li>We'll connect you with relevant dealers in our network if requested</li>
        </ul>
        
        <div class="contact-info">
          <h3>Contact Information:</h3>
          <p><strong>Sonu Singh - Founder & CEO</strong></p>
          <p>📞 +91 98765 43210 | +91 87654 32109</p>
          <p>📧 sonu@mkenterprises.com</p>
          <p>📍 MK Enterprises, Commercial Complex, Lucknow, Uttar Pradesh - 226001</p>
        </div>
        
        <p>We appreciate your interest in our products and services. With Ma Kanjya's blessings, we look forward to building a successful business relationship with you.</p>
        
        <p>Best regards,<br>
        <strong>Sonu Singh</strong><br>
        Founder & CEO<br>
        MK Enterprises (Ma Kanjya Enterprises)</p>
      </div>
      
      <div class="footer">
        <p>🙏 Blessed by Ma Kanjya Devi | Serving dealers with dedication and integrity</p>
        <p>This is an automated response. Please do not reply to this email.</p>
      </div>
    </body>
    </html>
  `;
};

const createAdminEmailTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .header { background: linear-gradient(135deg, #ea580c, #dc2626); color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; }
        .customer-details { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; }
        .urgent { background: #ffebee; border-left: 4px solid #f44336; padding: 10px; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🔔 New Contact Form Submission</h1>
        <p>MK Enterprises Website</p>
      </div>
      
      <div class="content">
        <p>Dear Sonu Singh,</p>
        
        <p>You have received a new inquiry through the MK Enterprises website.</p>
        
        ${formData.bulkOrder ? '<div class="urgent"><strong>🚨 BULK ORDER INQUIRY - Priority Response Required!</strong></div>' : ''}
        
        <div class="customer-details">
          <h3>Customer Information:</h3>
          <p><strong>Name:</strong> ${formData.name}</p>
          <p><strong>Email:</strong> ${formData.email}</p>
          <p><strong>Phone:</strong> ${formData.phone}</p>
          <p><strong>Company:</strong> ${formData.company || 'Not provided'}</p>
          <p><strong>Service Interest:</strong> ${formData.serviceType}</p>
          <p><strong>Business Type:</strong> ${formData.dealerType}</p>
          
          <h3>Inquiry Details:</h3>
          <p><strong>Subject:</strong> ${formData.subject}</p>
          <p><strong>Message:</strong></p>
          <p style="background: white; padding: 10px; border-radius: 3px;">${formData.message}</p>
          
          ${formData.bulkOrder ? `
            <h3>🎯 Bulk Order Details:</h3>
            <p><strong>Bulk Order:</strong> Yes</p>
            <p><strong>Quantity:</strong> ${formData.quantity}</p>
          ` : ''}
        </div>
        
        <p><strong>Recommended Actions:</strong></p>
        <ul>
          <li>Contact the customer within 24 hours</li>
          <li>Prepare pricing information based on their requirements</li>
          ${formData.bulkOrder ? '<li>Calculate bulk pricing and delivery timeline</li>' : ''}
          <li>Check dealer network for potential connections</li>
          ${formData.serviceType === 'property' ? '<li>Prepare property portfolio for review</li>' : ''}
        </ul>
        
        <p>Time of submission: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
      </div>
    </body>
    </html>
  `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const formData = req.body;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      return res.status(400).json({ 
        success: false, 
        message: 'Please fill in all required fields' 
      });
    }

    const transporter = createTransporter();

    // Send confirmation email to customer
    const customerMailOptions = {
      from: `"MK Enterprises" <${process.env.EMAIL_USER}>`,
      to: formData.email,
      subject: `Thank you for contacting MK Enterprises - ${formData.subject}`,
      html: createCustomerEmailTemplate(formData)
    };

    // Send notification email to admin (Sonu Singh)
    const adminMailOptions = {
      from: `"MK Enterprises Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `${formData.bulkOrder ? '🚨 BULK ORDER - ' : ''}New Contact Form Submission - ${formData.subject}`,
      html: createAdminEmailTemplate(formData)
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(customerMailOptions),
      transporter.sendMail(adminMailOptions)
    ]);

    res.json({ 
      success: true, 
      message: 'Thank you for your inquiry! We will get back to you within 24 hours.' 
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Sorry, there was an error sending your message. Please try again or contact us directly.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});