import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import AccessibilityPreview from "../components/AccessibilityPreview";
import UploadSection from "../components/UploadSection";

function Home() {
  return (
    <>
      <Hero />
      <FeatureSection />
      <HowItWorks />
      <AccessibilityPreview />
      <UploadSection />
    </>
  );
}

export default Home;