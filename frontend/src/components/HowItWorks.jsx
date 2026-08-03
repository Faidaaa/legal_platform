import "../styles/HowItWorks.css";

function HowItWorks() {
  return (
    <section className="how-it-works">

      <div className="how-it-works-heading">
        <h2>How It Works</h2>

        <p>
          Understand complex legal documents in four simple steps.
        </p>
      </div>

      <div className="steps-container">

        {/* Step 1 */}
        <div className="work-step">
          <div className="step-number">01</div>

          <div className="step-icon">
            📄
          </div>

          <h3>Upload Document</h3>

          <p>
            Upload your legal document in PDF or image format.
          </p>
        </div>


        {/* Step 2 */}
        <div className="work-step">
          <div className="step-number">02</div>

          <div className="step-icon">
            🧠
          </div>

          <h3>AI Simplifies</h3>

          <p>
            Our AI processes complex legal language and explains it
            in simple terms.
          </p>
        </div>


        {/* Step 3 */}
        <div className="work-step">
          <div className="step-number">03</div>

          <div className="step-icon">
            📖
          </div>

          <h3>Visualize</h3>

          <p>
            Important information can be transformed into an easy-to-follow
            visual storyboard.
          </p>
        </div>


        {/* Step 4 */}
        <div className="work-step">
          <div className="step-number">04</div>

          <div className="step-icon">
            ♿
          </div>

          <h3>Accessible Result</h3>

          <p>
            Read, listen to, and customize the information according
            to your accessibility needs.
          </p>
        </div>

      </div>

    </section>
  );
}

export default HowItWorks;