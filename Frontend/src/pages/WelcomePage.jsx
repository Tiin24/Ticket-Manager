import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import FeaturesSection from "../components/FeatureSection"
import CallToActionSection from "../components/CallToAction"
import Footer from "../components/Footer"

function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
         <FeaturesSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  );
}

export default WelcomePage;
