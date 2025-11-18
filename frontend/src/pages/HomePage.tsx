// src/pages/HomePage.tsx
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { MisionVision } from '../components/MisionVision';

export function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MisionVision />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
