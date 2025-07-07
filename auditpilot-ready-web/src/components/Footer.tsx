import { Separator } from '@/components/ui/separator';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              Medstore Inc.
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              The category leader in AI-native compliance agents, delivering 
              audit-ready solutions for Medicaid, ACA, and federally funded organizations.
            </p>
            <p className="text-sm text-gray-400">
              Patent-pending AuditPilot™ technology
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#product" className="hover:text-white transition-colors">AuditPilot™</a></li>
              <li><a href="#advantages" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Demo</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Investors</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Medstore Inc. All rights reserved. AuditPilot™ is a trademark of Medstore Inc.
          </div>
          <div className="text-gray-400 text-sm">
            Built for AI World Summit 2024
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-sm">
                &copy; {new Date().getFullYear()} Medstore Inc. All rights
                reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="/privacy-policy" className="text-sm hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-sm hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
