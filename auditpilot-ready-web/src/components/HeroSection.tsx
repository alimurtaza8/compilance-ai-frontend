
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import ContactModal from './ContactModal';

const HeroSection = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'demo' | 'investor' | 'summit' | 'general'>('demo');

  const handleDemoClick = () => {
    setModalType('demo');
    setIsContactModalOpen(true);
  };

  const handleConsultationClick = () => {
    setModalType('general');
    setIsContactModalOpen(true);
  };

  return (
    <>
      <section className="pt-20 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20v20h20z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-full px-6 py-3 mb-8">
                <Shield className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-sm font-medium text-blue-200">Patent-Pending AI Technology</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                <span className="block text-white">AuditPilot™</span>
                <span className="block text-3xl md:text-5xl text-blue-300 font-normal">
                  Audit-Ready in Days, Not Months
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
               The leading AI power Compliance , AI-powered compliance agent that continuously maps, 
                scores, and generates audit evidence for Medicaid, ACA, and federally funded organizations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button 
                  size="lg" 
                  onClick={handleDemoClick}
                  className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-8 py-4 text-lg group"
                >
                  <Zap className="h-5 w-5 mr-2" />
                  See Demo
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={handleConsultationClick}
                  className="border-2 border-blue-400 text-blue-200 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 text-lg"
                >
                  Schedule Consultation
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="flex items-center space-x-8 text-slate-400">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-sm">SOC 2 Compliant</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-blue-400" />
                  <span className="text-sm">Enterprise Ready</span>
                </div>
              </div>
            </div>

            {/* Right content - Hero image */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=faces"
                  alt="AI-powered compliance monitoring dashboard"
                  className="w-full h-96 object-cover rounded-xl shadow-2xl"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">
                  <CheckCircle className="h-4 w-4 inline mr-1" />
                  98% Accuracy
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-semibold">
                  <Zap className="h-4 w-4 inline mr-1" />
                  5-Day Setup
                </div>
              </div>
            </div>
          </div>

          {/* Key Benefits - moved below hero */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
              <p className="text-slate-300">Continuous ARC-AMPE compliance tracking with intelligent automation</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">AI-Powered Intelligence</h3>
              <p className="text-slate-300">Advanced AI agent replaces traditional consultant-led compliance models</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
              <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-yellow-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rapid Deployment</h3>
              <p className="text-slate-300">Get audit-ready in days with automated evidence generation</p>
            </div>
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

export default HeroSection;
