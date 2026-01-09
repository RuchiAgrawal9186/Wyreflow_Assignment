
import './App.css'
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import InfoCards from './components/InfoCards';
import SocialSection from './components/SocialSection';
import VisionSection from './components/VisionSection';

function App() {
  

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <InfoCards />
      <VisionSection />
      <FAQSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

export default App
