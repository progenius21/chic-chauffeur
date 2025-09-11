// Email configuration for Google Apps password authentication
export const emailConfig = {
  // Gmail SMTP settings
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address
    pass: process.env.EMAIL_APP_PASSWORD, // Your Google App Password
  },
};

// Email templates and settings
export const emailSettings = {
  from: process.env.EMAIL_USER || 'noreply@londoncoupes.com',
  to: process.env.BOOKING_EMAIL_RECIPIENT || 'enquiries@londoncoupes.com',
  subject: 'New Booking Request - London Coupes',
};

// Service options for the booking form
export const serviceOptions = [
  {
    id: 'executive-transport',
    name: 'Executive Transport',
    duration: '1–2 hrs',
    description: 'Professional chauffeur service for business meetings, airport transfers, and corporate events.',
  },
  {
    id: 'special-occasions',
    name: 'Special Occasions',
    duration: '2–4 hrs',
    description: 'Weddings, anniversaries, and milestone celebrations deserve the finest in classic luxury.',
  },
  {
    id: 'heritage-tours',
    name: 'Heritage Tours',
    duration: '3–6 hrs',
    description: "Explore London's rich history in authentic style with our curated heritage experiences.",
  },
];

// Function to format booking email content
export function formatBookingEmail(bookingData: {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message?: string;
}) {
  const service = serviceOptions.find(s => s.id === bookingData.serviceType);
  
  return {
    subject: `New Booking Request - ${service?.name || bookingData.serviceType}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background-color: #1a365d; color: white; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h1 style="margin: 0; font-size: 24px;">New Booking Request</h1>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">London Coupes - Distinguished Service</p>
        </div>
        
        <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1a365d; margin-top: 0;">Customer Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Name:</td>
              <td style="padding: 8px 0; color: #2d3748;">${bookingData.name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Email:</td>
              <td style="padding: 8px 0; color: #2d3748;">${bookingData.email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Phone:</td>
              <td style="padding: 8px 0; color: #2d3748;">${bookingData.phone}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1a365d; margin-top: 0;">Service Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Service Type:</td>
              <td style="padding: 8px 0; color: #2d3748;">${service?.name || bookingData.serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568;">Duration:</td>
              <td style="padding: 8px 0; color: #2d3748;">${service?.duration || 'N/A'}</td>
            </tr>
            ${service?.description ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #4a5568; vertical-align: top;">Description:</td>
              <td style="padding: 8px 0; color: #2d3748;">${service.description}</td>
            </tr>
            ` : ''}
          </table>
        </div>
        
        ${bookingData.message ? `
        <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1a365d; margin-top: 0;">Additional Message</h2>
          <p style="color: #2d3748; margin: 0; white-space: pre-wrap;">${bookingData.message}</p>
        </div>
        ` : ''}
        
        <div style="background-color: #e6fffa; padding: 20px; border-radius: 8px; border-left: 4px solid #38b2ac;">
          <h3 style="color: #1a365d; margin-top: 0;">Next Steps</h3>
          <p style="color: #2d3748; margin: 0;">
            Please contact the customer to confirm availability and finalize the booking details. 
            You can reach them at ${bookingData.email} or ${bookingData.phone}.
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #718096; font-size: 14px; margin: 0;">
            This booking request was submitted through the London Coupes website.
          </p>
        </div>
      </div>
    `,
    text: `
New Booking Request - London Coupes

Customer Information:
- Name: ${bookingData.name}
- Email: ${bookingData.email}
- Phone: ${bookingData.phone}

Service Details:
- Service Type: ${service?.name || bookingData.serviceType}
- Duration: ${service?.duration || 'N/A'}
${service?.description ? `- Description: ${service.description}` : ''}

${bookingData.message ? `Additional Message:\n${bookingData.message}\n` : ''}

Next Steps:
Please contact the customer to confirm availability and finalize the booking details.
You can reach them at ${bookingData.email} or ${bookingData.phone}.

This booking request was submitted through the London Coupes website.
    `.trim(),
  };
}
