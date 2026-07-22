import CareerTimeline from '@/components/CareerTimeline';
import Contact from '@/components/Contact';
import CoreTechnologies from '@/components/CoreTechnologies';
import EngineeringProof from '@/components/EngineeringProof';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <CareerTimeline />
        <CoreTechnologies />
        <EngineeringProof />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
