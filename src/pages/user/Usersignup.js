// import logo from './logo.png';
// import logo_bgremoved from './logo-removebg.png';
// import '../../App.css';
import '../styles/Adminlogin.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Adminlogin() {
    return (
        <div className="App">
            <Navbar />
            <section className="login-container" id='login'>
                <div className="loginform-content">
                    <span className="loginform-heading">Signup</span>
                    <p className="loginform-paragraph">User login page</p>

                    <hr className="divider" />
                    <form className='login-form'>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="firstname" className='input-lable'>Your email</label>
                            <input type="text" id="firstname" className="loginform-input" placeholder="Enter your  firstname" required />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="lastname" className='input-lable'>Your email</label>
                            <input type="text" id="lastname" className="loginform-input" placeholder="Enter you lastname" required />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="email" className='input-lable'>Your email</label>
                            <input type="email" id="email" className="loginform-input" placeholder="name@example.com" required />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="password" className='input-lable'>Password</label>
                            <input type="password" id="password" className="loginform-input" placeholder="Enter your password" required />
                        </div>
                        <div style={{ marginBottom: '1rem' }}>
                            <label htmlFor="cpassword" className='input-lable'>Password</label>
                            <input type="password" id="cpassword" className="loginform-input" placeholder="Confirm your password" required />
                        </div>
                        <div className='login-buttons'>
                            <button type="submit" className="login-button">Signup</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
}