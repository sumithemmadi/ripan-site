// import logo from './logo.png';
// import logo_bgremoved from './logo-removebg.png';
import '../../App.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Admindashboard() {
    return (
        <div className="App">
            <Navbar />
            <div className="home">
                Dashboard
            </div>
            <Footer />
        </div>
    );
}