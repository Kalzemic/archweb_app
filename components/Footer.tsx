import "@/Styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <h3>ArchWeb</h3>
                    <p>Building high-performance web applications for modern businesses.</p>
                </div>

                <div className="footer-links">
                    <h4>Explore</h4>
                    <ul>
                        <li><a href="/#homepage">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#portfolio">Portfolio</a></li>
                        <li><a href="/#contact">Contact</a></li>
                    </ul>
                </div>

                <div className="footer-socials">
                    <h4>Follow us</h4>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://github.com" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} ArchWeb. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
