import React from 'react';
import './Home.css'; // Import your CSS file

function Home() {
    return (
        <section className="header">
            <div className="container">
                <div className="responsive-width px-4">
                    <div className="pt-32 sm:pt-0">
                        <h2>
                            Ripan Test Book - Indias Best Learning App
                        </h2>
                        <p>
                            Register now and Start learning with Ripan Test Book Expert faculty at home. Get Interactive Live Class, Recorded Video Lectures and Check your Performance with Online Test & Quiz.
                        </p>
                        <div>

                            <a
                                href="/login"
                                className="login-btn"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Login
                            </a>
                            <a
                                href="/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="register"
                            >
                                Register
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container hidden">
                <img
                    src="https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4884.jpg?w=826&t=st=1696240596~exp=1696241196~hmac=91b5c305c320d55f22d6d4b5d07e069eb27fcd146be34ed07661727f2520dd11"
                    alt="..."
                />
            </div>
        </section>
    );
}

export default Home;
