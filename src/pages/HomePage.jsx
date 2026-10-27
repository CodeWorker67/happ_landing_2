import { Helmet } from 'react-helmet-async';
import Header from '@components/navigation/Header';
import Footer from '@components/navigation/Footer';
import HeroSection from '@components/sections/HeroSection';
import Ticker from '@components/sections/Ticker';
import FeaturesSection from '@components/sections/FeaturesSection';
import StepsSection from '@components/sections/StepsSection';
import PricingSection from '@components/sections/PricingSection';
import FaqSection from '@components/sections/FaqSection';
import CtaSection from '@components/sections/CtaSection';

export default function HomePage() {
  return (
    <div style={{ width: '100%', fontFamily: '"Plus Jakarta Sans",-apple-system,sans-serif', color: '#111827' }}>
      <Helmet>
        <title>Happ — официальный сайт, сутки в подарок</title>
        <meta
          name="description"
          content="Стабильный и быстрый сервис с мгновенным стартом — доступен на всех платформах. Сутки бесплатно, профиль создаётся сам."
        />
        <link rel="canonical" href="https://happ-time.global/" />
        <meta property="og:url" content="https://happ-time.global/" />
        <meta property="og:title" content="Happ — официальный сайт, сутки в подарок" />
        <meta
          property="og:description"
          content="Стабильный и быстрый сервис с мгновенным стартом — доступен на всех платформах. Сутки бесплатно, профиль создаётся сам."
        />
      </Helmet>
      <Header />
      <HeroSection />
      <Ticker />
      <StepsSection />
      <PricingSection />
      <FeaturesSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
