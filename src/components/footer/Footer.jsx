import "./footer.css"
function Footer() {
    return (<>
        <footer >
            <div className="footer-top wrapper-padding">
                <div className="footer-top-title">
                    <span>Subscribe our newsletter for newest books updates</span>
                </div>
                <p>
                    <input type="text" placeholder="Type your email here" />
                    <button className="custom-btn-main btn-yellow">SUBSCRIBE</button>
                </p>
            </div>
            <div className="footer-midle wrapper-padding">
                <h4>+ Book Categories</h4>
                <div className="foter-flex-1">
                    <ul>
                        <li>Architecture</li>
                        <li>Art</li>
                        <li>Action</li>
                        <li>Biography & Autobiography</li>
                    </ul>
                    <ul>
                        <li>Business & Economics</li>
                        <li>Children Fiction</li>
                        <li>Children Non-Fiction</li>
                        <li>Comics & Graphic Novels</li>
                    </ul>
                    <ul>
                        <li>Crafts & Hobbies</li>
                        <li>Design</li>
                        <li>Drama</li>
                        <li>Education</li>
                    </ul>
                    <ul>
                        <li>Fiction</li>
                        <li>Foreign Language Study</li>
                        <li>Games</li>
                        <li>Gardening</li>
                    </ul>
                    <ul>
                        <li>History</li>
                        <li>House & Home</li>
                        <li>Humor</li>
                        <li>Literary Collections</li>
                    </ul>
                    <ul>
                        <li>Medical</li>
                        <li>Nature</li>
                        <li>Performing Arts</li>
                        <li>Pets</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom wrapper-padding">
                <div className="ft-btm-lg-detail">
                    <div className="logo-custom ">
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <p>Bookland is a Book Store Ecommerce Website Template by Peterdraw lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                </div>
                <div>
                    <h3>Get in Touch With Us</h3>

                    <p><i class="fa-solid fa-location-dot"></i> <span>832  Thompson Drive, San FransiscoCA 94107, United States</span></p>
                    <p><i class="fa-solid fa-phone"></i> <span>+123 345123 556</span></p>
                    <p><i class="fa-regular fa-envelope"></i> <span>support@bookland.id</span></p>
                </div>
                <div className="ft-btm-img">
                    <img src="" alt="" />
                </div>
            </div>
        </footer>
    </>);
}

export default Footer;