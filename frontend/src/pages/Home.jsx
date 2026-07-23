import './../styles/Home.css';
import Navbar from '../components/navbar';
function Home() {
    return(
        <>
            <Navbar />
            <div className="hero">
            <h1>Legal Platform</h1>
            <p>Making Legal documents accessible to everyone.</p>
            <button>Upload Documents</button>
        </div>
        </>
    );
}
export default Home;