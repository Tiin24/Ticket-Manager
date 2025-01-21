import CallToAction from "../components/LandingPage/CallToAction";
import FeaturesSection from "../components/LandingPage/FeatureSection";
import Footer from "../components/LandingPage/Footer";
import Header from "../components/LandingPage/Header";
import HeroSection from "../components/LandingPage/HeroSection";

function WelcomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <main className="flex-1">
        <HeroSection />
         <FeaturesSection />
        <CallToAction/>
      </main>
      <Footer/>
    </div>
  );
}

export default WelcomePage;
