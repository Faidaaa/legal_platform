import{FiUpload, FiArrowRight} from 'react-icons/fi';
import './Hero.css';

function Hero() {
    return(
        <section className="hero">
            <div className="hero-left">
                <h1>Making Legal <br/>Documents <span>Accessible</span><br/>to Everyone</h1>
                <p>Simplify complex legal documents using AI-powered explanations, visual storyboards, voice assistance, and accessibility tools designed for everyone.</p>
                <div className="hero-buttons">
                    <button className="primary-button"><FiUpload/>Upload Document</button>
                    <button className="secondary-button"><FiArrowRight/>Learn More</button>
                </div>  
                <div className="hero-tags">
                    <span>AI-Powered</span>
                    <span>Secure</span>
                    <span>Accessible</span>
                </div>
            </div>
            <div className="hero-right">
                <div className="image-placeholder">Illustration Coming Soon</div>
            </div>
        </section>
    );
    
}
export default Hero;