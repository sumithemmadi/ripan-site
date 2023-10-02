// import logo from './logo.png';
// import logo_bgremoved from './logo-removebg.png';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="home">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
