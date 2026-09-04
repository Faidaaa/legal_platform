import React from "react";
import "../styles/AccessibilityPreview.css";

function AccessibilityPreview() {
  return (
    <section className="accessibility-preview" id="accessibility">

      <div className="accessibility-container">

        {/* Section heading */}
        <div className="accessibility-heading">
          <h2>Legal Information, Made Accessible</h2>

          <p>
            Understand legal documents in a way that works best for you.
          </p>
        </div>

        {/* Preview area */}
        <div className="accessibility-content">

          {/* Document preview */}
          <div className="document-preview">

            <div className="document-header">
              <span>Legal Document</span>
              <span className="document-status">Simplified</span>
            </div>

            <div className="document-text">
              <h3>Agreement Terms</h3>

              <p>
                The parties agree to the terms and conditions
                described in this agreement.
              </p>

              <div className="simplified-box">
                <strong>In simple words:</strong>

                <p>
                  This means that everyone involved agrees to
                  follow the rules mentioned in this document.
                </p>
              </div>
            </div>

          </div>

          {/* Accessibility controls */}
          <div className="accessibility-controls">

            <h3>Make it work for you</h3>

            <p>
              Customize how you read and understand your legal information.
            </p>

            <div className="accessibility-options">

              <button className="accessibility-option">
                <span className="option-icon">A</span>
                <span>
                  <strong>Text Size</strong>
                  <small>Adjust reading size</small>
                </span>
              </button>

              <button className="accessibility-option">
                <span className="option-icon">◐</span>
                <span>
                  <strong>High Contrast</strong>
                  <small>Improve visual clarity</small>
                </span>
              </button>

              <button className="accessibility-option">
                <span className="option-icon">🔊</span>
                <span>
                  <strong>Listen</strong>
                  <small>Hear the document aloud</small>
                </span>
              </button>

              <button className="accessibility-option">
                <span className="option-icon">Aa</span>
                <span>
                  <strong>Reading Mode</strong>
                  <small>Make text easier to read</small>
                </span>
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AccessibilityPreview;