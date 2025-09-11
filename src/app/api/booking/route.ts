import { emailConfig, emailSettings, formatBookingEmail } from '@/utils/mailer.config'
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, serviceType, message } = body

    // Validate required fields
    if (!name || !email || !phone || !serviceType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Format the booking email
    const emailContent = formatBookingEmail({
      name,
      email,
      phone,
      serviceType,
      message: message || ''
    })

    // Create transporter instance
    const transporter = nodemailer.createTransport(emailConfig)

    // Send email
    const mailOptions = {
      from: emailSettings.from,
      to: emailSettings.to,
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
      replyTo: email, // Allow replies to go directly to the customer
    }

    console.log("XX", mailOptions)

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Booking request sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending booking email:', error)
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    )
  }
}
