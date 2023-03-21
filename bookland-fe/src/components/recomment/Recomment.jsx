import "./recomment.css";

function Recomment() {
    return (<>
        <div className="recomment-wrapper wrapper-padding">
            <h1>Recommended For You</h1>
            <div className="rcm-box-flex">
                <div className="rcm-left border--1">
                    <div className="wid-60-per">
                        <h3>Battle Drive</h3>
                        <span className="author">by Napoleon Sigh</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <div className="price-n-sale">
                            <h2>$9.5</h2>
                            <span className="light-through-div">$12.0</span>
                            <button className="custom-btn-main btn-yellow">  Buy Now </button>
                        </div>
                    </div>
                    <div className="c-img-190-270">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="rcm-right ">
                    <div className="border--1 rcm-right-item itemm---2">
                        <div className="c-img-90-128">
                            <img src="" alt="" />
                        </div>
                        <div  className="wid-53">
                            <h3>Battle Drive</h3>
                            <span className="author">by Napoleon Sigh</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>

                        </div>
                        <div className="wid-23">
                            <div className="price-n-sale">
                                <h2>$9.5</h2>
                                <span className="light-through-div">$12.0</span>
                                <button className="custom-btn-main btn-yellow">Buy</button>
                            </div>
                        </div>
                    </div><div className="border--1  rcm-right-item itemm---2">
                        <div className="c-img-90-128">
                            <img src="" alt="" />
                        </div>
                        <div className="wid-53">
                            <h3>Battle Drive</h3>
                            <span  className="author">by Napoleon Sigh</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>

                        </div>
                        <div className="wid-23"> 
                            <div className="price-n-sale">
                                <h2>$9.5</h2>
                                <span className="light-through-div">$12.0</span>
                                <button className="custom-btn-main btn-yellow">Buy</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default Recomment;