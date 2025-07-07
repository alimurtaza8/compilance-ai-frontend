
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
  formType: 'demo' | 'investor' | 'summit' | 'general';
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, phone, message, formType }: ContactEmailRequest = await req.json();

    console.log('Received contact form submission:', { name, email, company, formType });

    // Get form type specific subject
    const getSubject = (type: string) => {
      switch (type) {
        case 'demo':
          return 'New Demo Request - AuditPilot™';
        case 'investor':
          return 'New Investor Inquiry - AuditPilot™';
        case 'summit':
          return 'New AI World Summit Meeting Request - AuditPilot™';
        default:
          return 'New Contact Form Submission - AuditPilot™';
      }
    };

    // Send email to your business
    const emailResponse = await resend.emails.send({
      from: "AuditPilot Contact <onboarding@resend.dev>",
      to: ["info@medstoreinc.com"],
      subject: getSubject(formType),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            ${getSubject(formType)}
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #334155; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
            <p><strong>Form Type:</strong> ${formType.charAt(0).toUpperCase() + formType.slice(1)}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #334155;">Message</h3>
            <div style="background-color: #ffffff; border: 1px solid #e2e8f0; padding: 15px; border-radius: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
            <p>This email was sent from the AuditPilot™ contact form on your website.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Send confirmation email to the user
    await resend.emails.send({
      from: "AuditPilot Team <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting AuditPilot™",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af; border-bottom: 2px solid #1e40af; padding-bottom: 10px;">
            Thank you for your interest in AuditPilot™
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>We have received your ${formType === 'demo' ? 'demo request' : formType === 'investor' ? 'investor inquiry' : formType === 'summit' ? 'summit meeting request' : 'message'} and will get back to you as soon as possible.</p>
          
          <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">What's Next?</h3>
            ${formType === 'demo' ? 
              '<p>Our team will review your demo request and contact you within 24 hours to schedule your personalized AuditPilot™ demonstration.</p>' :
              formType === 'investor' ?
              '<p>Our investor relations team will review your inquiry and reach out to discuss our funding opportunity and growth plans.</p>' :
              formType === 'summit' ?
              '<p>We\'ll confirm your AI World Summit meeting slot and send you the meeting details shortly.</p>' :
              '<p>Our team will review your message and respond within 24-48 hours.</p>'
            }
          </div>
          
          <div style="margin: 20px 0;">
            <h4 style="color: #334155;">Contact Information</h4>
            <p><strong>Email:</strong> info@medstoreinc.com</p>
            <p><strong>Phone:</strong> +1 (404) 333-2968</p>
            <p><strong>Address:</strong> 217 Davis Rd STE C, Augusta, GA 30907</p>
          </div>
          
          <p>Best regards,<br>
          The AuditPilot™ Team<br>
          Medstore Inc.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 12px;">
            <p>This is an automated confirmation email. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ 
      success: true, 
      message: 'Email sent successfully' 
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
