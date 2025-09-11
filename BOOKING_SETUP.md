# Booking System Setup Guide

This guide explains how to set up the new v2 booking system with email functionality using nodemailer and Google Apps password authentication.

## Overview

The booking system has been updated to include:
- **v1 Components**: Archived as `.v1.tsx` files (Calendly-based booking)
- **v2 Components**: New form-based booking with email notifications

## Environment Variables Setup

Create a `.env.local` file in your project root with the following variables:

```env
# Email Configuration for Nodemailer with Google Apps Password
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-16-character-app-password
BOOKING_EMAIL_RECIPIENT=enquiries@londoncoupes.com
```

### Setting up Google Apps Password

1. **Enable 2-Factor Authentication** on your Google account
2. Go to [Google Account Settings](https://myaccount.google.com/)
3. Navigate to **Security** → **2-Step Verification**
4. Scroll down to **App passwords**
5. Click **Generate app password**
6. Select **Mail** and your device
7. Copy the 16-character password (no spaces)
8. Use this password as `EMAIL_APP_PASSWORD`

## Service Options

The booking form includes three service types:

1. **Executive Transport** (1–2 hrs)
   - Professional chauffeur service for business meetings, airport transfers, and corporate events

2. **Special Occasions** (2–4 hrs)
   - Weddings, anniversaries, and milestone celebrations

3. **Heritage Tours** (3–6 hrs)
   - Explore London's rich history in authentic style

## File Structure

```
src/
├── app/
│   ├── api/booking/
│   │   └── route.ts              # API endpoint for form submission
│   └── booking/
│       ├── page.tsx              # v2 booking page
│       └── page.v1.tsx           # Archived v1 page
├── components/ui/
│   ├── booking-modal.tsx         # v2 booking modal
│   └── booking-modal.v1.tsx      # Archived v1 modal
└── utils/
    └── mailer.config.ts          # Email configuration and templates
```

## Features

### v2 Booking Modal
- Form validation
- Service type selection
- Email formatting
- Success/error states
- Auto-close on success

### Email Notifications
- Professional HTML email template
- Customer information formatting
- Service details inclusion
- Reply-to customer email
- Fallback text version

### API Endpoint
- Input validation
- Email sending
- Error handling
- JSON responses

## Testing

1. **Development**: Run `npm run dev` and test the booking form
2. **Production**: Run `npm run build` to ensure everything compiles
3. **Email**: Submit a test booking to verify email delivery

## Migration Notes

- **v1 components are preserved** with `.v1.tsx` suffix
- **Easy rollback** by renaming files back to original names
- **No breaking changes** to existing functionality
- **Environment variables** need to be configured for email functionality

## Troubleshooting

### Build Errors
- Ensure nodemailer is only imported in server-side code (API routes)
- Check that all environment variables are properly set

### Email Issues
- Verify Google Apps password is correct (16 characters, no spaces)
- Ensure 2FA is enabled on Google account
- Check spam folder for test emails
- Verify `EMAIL_USER` matches the account with the app password

### Form Issues
- Check browser console for JavaScript errors
- Verify API route is accessible at `/api/booking`
- Ensure all required form fields are filled

## Security Notes

- Never commit `.env.local` to version control
- Use Google Apps passwords instead of regular passwords
- Validate all form inputs on the server side
- Consider rate limiting for the booking API endpoint
