import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AuditEngine from '@/components/AuditEngine';
import ProductSection from '@/components/ProductSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <AuditEngine />
      <ProductSection />
      <AdvantagesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
