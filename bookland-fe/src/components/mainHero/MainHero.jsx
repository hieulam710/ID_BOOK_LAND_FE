import "./mainHero.css"

function MainHero() {

    return (<>
        <div className="mainHero-wrapper">
            <div className="wrapper-padding hero-content">
                <div className="hero-left-content">
                    <h6>BESS SELLER</h6>
                    <h1>Think and Grow Rich</h1>
                    <p><span>Napoleon Hill</span> <span>Business & Strategy</span></p>
                    <div className="description-book">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                    </div>
                    <div className="price-n-sale">
                        <h2>$9.5</h2>
                        <span className="light-through-div">$12.0</span>
                        <div className="sale-20-percent">20% OFF</div>
                    </div>
                    <p> <button className="custom-btn-main btn-black">Buy Now</button>
                        <button className="custom-btn-main btn-white">See Detail</button>
                    </p>
                    <div className="our-partner">
                        <span>Our Partner</span>
                        <div className="three-partner-img">
                            <img src="/images/Group 7.png" alt="" />
                            <img src="/images/Group 9.png" alt="" />
                            <img src="/images/Group 11.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default MainHero;