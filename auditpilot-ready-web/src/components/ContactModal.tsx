import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formType: 'demo' | 'investor' | 'summit' | 'general';
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const ContactModal = ({ isOpen, onClose, formType }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      company: '',
      phone: '',
      message: '',
    },
  });

  const getFormTitle = () => {
    switch (formType) {
      case 'demo':
        return 'Schedule a Demo';
      case 'investor':
        return 'Investor Inquiry';
      case 'summit':
        return 'AI World Summit Meeting';
      default:
        return 'Contact Us';
    }
  };

  const getFormDescription = () => {
    switch (formType) {
      case 'demo':
        return 'Ready to see AuditPilot™ in action? Schedule your personalized demo today.';
      case 'investor':
        return 'Interested in our $2M-$5M funding round? Let\'s discuss the opportunity.';
      case 'summit':
        return 'Meeting us at the AI World Summit? Book your dedicated time slot.';
      default:
        return 'Get in touch with our team for any questions or inquiries.';
    }
  };

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // For demo requests, show booking option but also handle form submission
    if (formType === 'demo') {
      try {
        const { error } = await supabase.functions.invoke('send-contact-email', {
          body: {
            ...data,
            formType
          }
        });

        if (error) {
          throw error;
        }

        toast({
          title: "Demo Request Sent!",
          description: "We'll contact you within 24 hours to schedule your demo. You can also book directly using the link below.",
        });

        // Also show the booking link
        window.open('http://link.businesscompliance.ai/widget/bookings/gladysmarketing/consultationcall-cf8ace7c-af20-4a3a-a9bb-819e84589690-8cee7b71-bedb-434d-9062-4a3066eb9673', '_blank');
        
        form.reset();
        onClose();
      } catch (error: any) {
        console.error('Error sending demo request:', error);
        toast({
          title: "Error",
          description: "Failed to send demo request. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    } else {
      // Handle other form types with backend email
      try {
        const { error } = await supabase.functions.invoke('send-contact-email', {
          body: {
            ...data,
            formType
          }
        });

        if (error) {
          throw error;
        }

        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your message. We'll get back to you soon.",
        });

        form.reset();
        onClose();
      } catch (error: any) {
        console.error('Error sending contact form:', error);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again or contact us directly.",
          variant: "destructive",
        });
      }
    }
    
    setIsSubmitting(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900">
            {getFormTitle()}
          </DialogTitle>
          <DialogDescription className="text-slate-600">
            {getFormDescription()}
          </DialogDescription>
        </DialogHeader>

        {formType === 'demo' ? (
          // For demo, show booking link and form
          <div className="space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 className="font-semibold text-blue-900 mb-2">Quick Demo Booking</h3>
              <p className="text-blue-700 mb-4">
                Click the button below to access our calendar and schedule your personalized AuditPilot™ demo.
              </p>
              <Button 
                onClick={() => {
                  window.open('http://link.businesscompliance.ai/widget/bookings/gladysmarketing/consultationcall-cf8ace7c-af20-4a3a-a9bb-819e84589690-8cee7b71-bedb-434d-9062-4a3066eb9673', '_blank');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full"
              >
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Demo Now
                <ExternalLink className="h-4 w-4 ml-2" />
              </Button>
            </div>

            <div className="border-t pt-6">
              <h4 className="font-semibold text-slate-900 mb-4">Or fill out the form below:</h4>
              {/* Form will be shown below */}
            </div>
          </div>
        ) : null}

        {/* Contact Form - now shows for all types including demo */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                rules={{ required: 'Name is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                rules={{ 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@company.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="company"
                rules={{ required: 'Company is required' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Company/Organization</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Organization" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 123-4567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              rules={{ required: 'Message is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your compliance needs and how we can help..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </Form>

        {/* Contact Information */}
        <div className="border-t pt-6 space-y-4">
          <h4 className="font-semibold text-slate-900">Contact Information</h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="font-medium text-slate-900">Office Address</p>
                <p className="text-slate-600">
                  217 Davis Rd STE C<br />
                  Augusta, GA 30907
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-900">Email</p>
                  <a href="mailto:Info@medstoreinc.com" className="text-blue-600 hover:text-blue-700">
                    Info@medstoreinc.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-medium text-slate-900">Phone</p>
                  <a href="tel:+14043332968" className="text-blue-600 hover:text-blue-700">
                    +1 (404) 333-2968
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
