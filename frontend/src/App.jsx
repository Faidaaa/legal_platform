import{BrowserRouter,Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Upload from './pages/Upload';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return(
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;