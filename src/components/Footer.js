import './Footer.css';
import logo from '../logo.png';

export default function Footer() {
    return (
        <footer className="foot">
            <div className="footer-container">
                <div className="footer-logo-container">
                    <div>
                        <a href="/">
                            <img src={logo} alt="logo homepage" loading="lazy" className="footer-logo fade-in" />
                        </a>
                        <h2>Ripan Global LLC</h2>
                        <div className="social-account">
                            <div className="bio-social-account">
                                <a href="mailto:sumithemmadi244@gmail.com" target="_blank" rel="noreferrer">
                                    <img src="/assets/icons/sa/gmail.svg" alt="Gmail-Logo" loading="lazy" className="social-logo" />
                                </a>


                                <a href="https://www.facebook.com/sumithemmadi" target="_blank" rel="noreferrer">
                                    <img src="/assets/icons/sa/facebook.svg" alt="Facebook-Logo" loading="lazy" className="social-logo" />
                                </a>

                                <a href="https://t.me/sumithemmadi/" target="_blank" rel="noreferrer">
                                    <img src="/assets/icons/sa/telegram.svg" alt="Telegram_-Logo" loading="lazy" className="social-logo" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block-container">
                    <div className="footer-block">
                        <span className="footer-title">Services</span>
                        <ul>
                            <li className="my-4"><a className="footer-link" href="/abc">abcdefgh abcdefgh</a></li>
                            <li className="my-4"><a className="footer-link" href="/abc">abcdefgh abcdefgh</a></li>
                            <li className="my-4"><a className="footer-link" href="/abc">abcdefgh abcdefgh</a></li>
                            <li className="my-4">
                                <a rel="noopener noreferrer" target="_blank" href="/abc" className="footer-link">
                                    abcdefgh abcdefgh
                                    <span className="sr-only">(new window)</span>
                                </a>
                            </li>
                            <li className="my-4"><a className="footer-link" href="/abc">abcdefgh abcdefgh</a></li>
                            <li className="my-4"><a className="footer-link" href="/abc">abcdefgh abcdefgh</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}