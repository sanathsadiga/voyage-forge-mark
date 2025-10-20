import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, company, subject, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    const fullName = `${firstName} ${lastName}`;

    // Use onboarding@resend.dev for development, your verified domain for production
    const fromEmail = process.env.NODE_ENV === 'production' 
      ? 'Voyage Forge <contact@notify.voyage-forge.com>' 
      : 'Voyage Forge <onboarding@resend.dev>';

    // Email to you (business owner)
    const businessEmail = await resend.emails.send({
      from: fromEmail,
      to: ['founder@voyage-forge.com'],
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 0; border-radius: 10px; overflow: hidden;">
          <div style="background: white; margin: 20px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center;">
              <h2 style="margin: 0; font-size: 28px; font-weight: bold;">New Contact Form Submission</h2>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">From Voyage Forge Website</p>
            </div>
            
            <div style="padding: 30px;">
              <div style="margin-bottom: 25px;">
                <h3 style="color: #333; margin: 0 0 8px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea; padding-bottom: 5px; display: inline-block;">Contact Information</h3>
                <p style="margin: 15px 0 5px 0; color: #555;"><strong>Name:</strong> ${fullName}</p>
                <p style="margin: 5px 0; color: #555;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
                <p style="margin: 5px 0; color: #555;"><strong>Company:</strong> ${company || 'Not specified'}</p>
                <p style="margin: 5px 0; color: #555;"><strong>Subject:</strong> ${subject}</p>
              </div>
              
              <div style="margin-bottom: 25px;">
                <h3 style="color: #333; margin: 0 0 15px 0; font-size: 16px; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #667eea; padding-bottom: 5px; display: inline-block;">Message</h3>
                <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #667eea;">
                  <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #666; font-size: 12px; margin: 0;">This email was sent from the Voyage Forge contact form</p>
                <p style="color: #666; font-size: 12px; margin: 5px 0 0 0;">Received on: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    // Confirmation email to visitor
    const visitorEmail = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: 'Thank you for contacting Voyage Forge - We received your message!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%); padding: 0; border-radius: 10px; overflow: hidden;">
          <div style="background: white; margin: 20px; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <div style="background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%); color: #333; padding: 30px; text-align: center;">
              <h2 style="margin: 0; font-size: 28px; font-weight: bold;">Thank You for Reaching Out!</h2>
              <p style="margin: 10px 0 0 0; opacity: 0.8;">We've received your message and will respond soon</p>
            </div>
            
            <div style="padding: 30px;">
              <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 0;">Hi ${firstName},</p>
              
              <p style="color: #555; font-size: 16px; line-height: 1.6;">Thank you for contacting Voyage Forge! We've successfully received your message about <strong>"${subject}"</strong> and our team will review it shortly.</p>
              
              <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 25px 0; border-left: 4px solid #fab1a0;">
                <h3 style="color: #333; margin: 0 0 10px 0; font-size: 16px;">What happens next?</h3>
                <ul style="color: #555; line-height: 1.6; margin: 0; padding-left: 20px;">
                  <li>Our founder will personally review your message</li>
                  <li>We'll respond within 24 hours during business hours</li>
                  <li>For urgent matters, feel free to call us at +91 9483730167</li>
                </ul>
              </div>
              
              <div style="background: linear-gradient(135deg, #74b9ff 0%, #0984e3 100%); color: white; padding: 20px; border-radius: 8px; margin: 25px 0;">
                <h3 style="margin: 0 0 10px 0; font-size: 18px;">Meanwhile, explore Voyage Forge:</h3>
                <p style="margin: 0 0 15px 0; opacity: 0.9;">Discover how AI can transform your travel business</p>
                <a href="https://voyage-forge.com/pricing" style="display: inline-block; background: white; color: #0984e3; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold; margin-right: 10px;">View Pricing</a>
                <a href="https://app.voyage-forge.com/auth?utm_medium=email&utm_campaign=contact" style="display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none; font-weight: bold;">Start Free Trial</a>
              </div>
              
              <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
                <p style="color: #333; font-weight: bold; margin: 0 0 10px 0;">Follow us on social media:</p>
                <div style="margin: 15px 0;">
                  <a href="https://www.linkedin.com/company/voyage-forge/" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none;">LinkedIn</a>
                  <a href="https://www.instagram.com/voyageforgetravelcms/" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none;">Instagram</a>
                  <a href="https://www.facebook.com/profile.php?id=61579234916851" style="display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none;">Facebook</a>
                </div>
                <p style="color: #666; font-size: 12px; margin: 15px 0 0 0;">
                  Best regards,<br>
                  <strong>The Voyage Forge Team</strong><br>
                  founder@voyage-forge.com | +91 9483730167
                </p>
              </div>
            </div>
          </div>
        </div>
      `,
    });

    console.log('Business email sent:', businessEmail);
    console.log('Visitor email sent:', visitorEmail);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! Check your email for confirmation.' 
      },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to send message. Please try again or contact us directly at +91 9483730167' 
      },
      { status: 500 }
    );
  }
}
