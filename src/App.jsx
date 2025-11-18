import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ValuePropositionSection from './sections/ValuePropositionSection';
import HowItWorksSection from './sections/HowItWorksSection';
import CommunitySection from './sections/CommunitySection';
import FooterSection from './sections/FooterSection';
import SubscriptionBlock from './sections/SubscriptionBlock';



function App() {
  return (
    <div className="min-h-screen bg-aptos-dark">
      <HeroSection />
      <AboutSection />
      <ValuePropositionSection />
      <HowItWorksSection />
      <SubscriptionBlock />
      <CommunitySection />
      <FooterSection />
    </div>
  );
}

export default App;