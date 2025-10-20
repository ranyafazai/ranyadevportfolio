# 📧 EmailJS Setup Guide - Real Email Functionality

## 🎯 Goal
Set up EmailJS so that when someone fills out your contact form, you receive a real email at **ranyafazaei@gmail.com**.

## 📋 Step-by-Step Setup

### **Step 1: Create EmailJS Account**
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"**
3. Use your email: **ranyafazaei@gmail.com**
4. Verify your email address

### **Step 2: Add Gmail Service**
1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"**
4. Click **"Connect Account"**
5. Sign in with **ranyafazaei@gmail.com**
6. Allow EmailJS to access your Gmail
7. **Copy the Service ID** (looks like `service_xxxxxxx`)

### **Step 3: Create Email Template**
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `Portfolio Contact Form`

**Subject:** `Nouveau message de contact - Portfolio Ranya Fazai`

**Content:**
```
Bonjour Ranya,

Vous avez reçu un nouveau message depuis votre portfolio !

Nom: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Envoyé depuis ranyafazai.dev
Date: {{current_date}}
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_xxxxxxx`)

### **Step 4: Get Public Key**
1. Go to **"Account"** → **"General"**
2. **Copy your Public Key** (looks like `xxxxxxxxxxxxxxxx`)

### **Step 5: Update Configuration**
1. Open `src/config/emailjs.js`
2. Replace the placeholder values:

```javascript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_xxxxxxx',     // Your actual service ID
  TEMPLATE_ID: 'template_xxxxxxx',   // Your actual template ID
  PUBLIC_KEY: 'xxxxxxxxxxxxxxxx',    // Your actual public key
};
```

### **Step 6: Test the Form**
1. Start your development server: `npm start`
2. Go to the contact section
3. Fill out the form with test data
4. Submit the form
5. Check your Gmail inbox at **ranyafazaei@gmail.com**

## 🔧 Troubleshooting

### **If you get "EmailJS not configured" error:**
- Make sure you've updated `src/config/emailjs.js` with your actual credentials
- Check that all three values are correct

### **If emails don't arrive:**
- Check your Gmail spam folder
- Verify the Service ID, Template ID, and Public Key are correct
- Make sure your Gmail account is properly connected to EmailJS

### **If you get a CORS error:**
- This is normal in development
- The error will disappear when you deploy to production

## 📊 EmailJS Free Plan Limits
- **200 emails per month** (perfect for a portfolio)
- **2 email services**
- **2 email templates**
- **1,000 requests per month**

## 🚀 Production Deployment
Once you deploy to Vercel, the contact form will work perfectly in production and you'll receive real emails!

## 📞 Support
If you need help:
1. Check the EmailJS documentation
2. Make sure all credentials are correct
3. Test with a simple email first

---

**After setup, every contact form submission will send you a real email at ranyafazaei@gmail.com!** 📧✨
