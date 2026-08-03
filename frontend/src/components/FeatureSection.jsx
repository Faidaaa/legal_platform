import "../styles/FeatureSection.css";
import FeatureCard from "./FeatureCard";

import { FaRobot } from "react-icons/fa";
import { MdOutlineAutoStories } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
import { FaUniversalAccess } from "react-icons/fa";

function FeatureSection() {
  return (
    <section className="feature-section">

      <h2>Our Features</h2>

      <p className="feature-subtitle">
        Making legal documents easier to understand for everyone.
      </p>

      <div className="feature-grid">

        <FeatureCard
          icon={<FaRobot />}
          title="AI Simplification"
          description="Transforms complex legal language into simple explanations."
        />

        <FeatureCard
          icon={<MdOutlineAutoStories />}
          title="Visual Storyboard"
          description="Converts legal documents into easy-to-follow visual stories."
        />

        <FeatureCard
          icon={<BsFillMicFill />}
          title="Voice Assistance"
          description="Reads legal documents aloud using accessible text-to-speech."
        />

        <FeatureCard
          icon={<FaUniversalAccess />}
          title="Accessibility Tools"
          description="High contrast mode, text scaling, dyslexia-friendly fonts and keyboard navigation."
        />

      </div>

    </section>
  );
}

export default FeatureSection;