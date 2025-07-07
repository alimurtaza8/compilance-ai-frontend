import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Mail, Phone, MapPin, Users, DollarSign, ArrowRight, Video, MessageSquare } from 'lucide-react';
import ContactModal from './ContactModal';

const ContactSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'demo' | 'investor' | 'summit' | 'general'>('demo');

  const handleButtonClick = (type: 'demo' | 'investor' | 'summit' | 'general') => {
    setModalType(type);
    setIsContactModalOpen(true);
  };

  return (
    <>
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <Badge variant="outline" className="mb-6 text-blue-600 border-blue-600 px-4 py-2">
              AI World Summit Ready
            </Badge> 
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Transform Your Compliance?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Join forward-thinking organizations that are already experiencing the future of 
              AI-powered compliance with AuditPilot™.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl">
              {/* Organizations CTA */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-xl">
                    <Calendar className="h-6 w-6 mr-3" />
                    For Organizations
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=center"
                      alt="Organization team using compliance software"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Ready to get audit-ready in days? Schedule a personalized demo to see 
                    how AuditPilot™ can transform your compliance process.
                  </p>
                  <Button 
                    onClick={() => handleButtonClick('demo')}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold w-full group mb-3"
                  >
                    <Video className="h-4 w-4 mr-2" />
                    Schedule Demo
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="text-center text-sm text-slate-500">
                    30-minute consultation • No commitment required
                  </div>
                </CardContent>
              </Card>

              {/* Investors CTA */}
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="bg-gradient-to-br from-green-600 to-green-700 text-white rounded-t-lg">
                  <CardTitle className="flex items-center text-xl">
                    <DollarSign className="h-6 w-6 mr-3" />
                    For Investors
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <img 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=200&fit=crop&crop=center"
                      alt="Investment meeting and business growth"
                      className="w-full h-32 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Interested in the future of AI-native compliance? Learn about our 
                    $2M-$5M funding round and growth opportunity.
                  </p>
                  <Button 
                    onClick={() => handleButtonClick('investor')}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold w-full group mb-3"
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Investor Inquiry
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <div className="text-center text-sm text-slate-500">
                    Seed/Series A • $2M-$5M target
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                    <a href="mailto:Info@medstoreinc.com" className="text-slate-600 hover:text-blue-600">
                      Info@medstoreinc.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 transition-colors">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                    <a href="tel:+14043332968" className="text-slate-600 hover:text-green-600">
                      +1 (404) 333-2968
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-purple-200 transition-colors">
                    <MapPin className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Office Address</h4>
                    <p className="text-slate-600">
                      217 Davis Rd STE C<br />
                      Augusta, GA 30907
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            {/* <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Our Traction</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <Card className="border-l-4 border-l-blue-600 bg-blue-50">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-blue-600 mr-3" />
                      <div>
                        <div className="text-3xl font-bold text-slate-900">30</div>
                        <div className="text-sm text-slate-600">Target Clients Y1</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-green-600 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <DollarSign className="h-8 w-8 text-green-600 mr-3" />
                      <div>
                        <div className="text-3xl font-bold text-slate-900">$50M</div>
                        <div className="text-sm text-slate-600">ARR Target 3Y</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-purple-600 bg-purple-50 col-span-2">
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Calendar className="h-8 w-8 text-purple-600 mr-3" />
                      <div>
                        <div className="text-2xl font-bold text-slate-900">20% Market Share</div>
                        <div className="text-sm text-slate-600">BHAG by 2035 across U.S. GovTech & Medicaid orgs</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        formType={modalType}
      />
    </>
  );
};

export default ContactSection;
