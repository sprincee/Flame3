import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';
import { signInWithEmailLink } from 'firebase/auth';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        const msg = {
            to: 'mahadsuhaibkhan@gmail.com', 
            from: 'mahadsuhaibkhan@gmail.com', 
            subject: `New Contact Form Submission from ${name}`,
            text: `
              Name: ${name}
              Email: ${email}
              
              Message:
              ${message}
            `,
            html: `
              <h3>New Contact Form Submission</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <br/>
              <p><strong>Message:</strong><p>
              <p>${message}</p>
            `,
        };

        await sgMail.send(msg);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'Failed to send message' },
            { status: 500 }
          );
        }
      }