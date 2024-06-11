// pages/index.tsx
import TextRewriter from '../components/TextRewriter'
import ChatgptRewriter from '../components/ChatgptRewriter';
import FeaturesSection from '../components/Features';
import AdvantagesSection from '../components/AdvantagesSection';
import FinalThoughts from '../components/FinalThoughts';
import FAQ from '../components/FAQs';

export default function Home() {
  
  return (
    <div>
      <TextRewriter/>
      <ChatgptRewriter />
      <FeaturesSection />
      <AdvantagesSection />
      <FinalThoughts/>
      <FAQ/>
    </div>
  );
}
