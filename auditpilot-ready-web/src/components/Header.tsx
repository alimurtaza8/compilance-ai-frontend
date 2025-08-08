import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import ContactModal from './ContactModal';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'demo' | 'investor' | 'summit' | 'general'>('demo');

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#product', label: 'AuditPilot™' },
    { href: '#advantages', label: 'Advantages' },
    {href:'/dashboard-demo', label: 'Dashboard' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleDemoClick = () => {
    setModalType('demo');
    setIsContactModalOpen(true);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <Link to="/">
                <img className="h-10 w-auto" src="/images/logo_main.jpg" alt="Medstore Text Logo" />
              </Link>
              <Link to="/">
                <img className="h-8 w-auto" src="/images/audit_logo.jpg" alt="Medstore Shield Logo" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-slate-700 hover:text-blue-600 transition-colors font-medium relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <Button 
                onClick={handleDemoClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6"
              >
                Request Demo
              </Button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="block px-3 py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-3 py-2">
                  <Button 
                    onClick={() => {
                      handleDemoClick();
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                  >
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        formType={modalType}
      />
    </>
  );
};

export default Header;
