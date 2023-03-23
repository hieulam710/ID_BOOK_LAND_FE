import "./feature.css";


function FeatureComponent() {
    return (<>
        <div className="feature-cpn-wrapper wrapper-padding">
            <div className="feature-item">
                <div className="feature-item-img border-dash">
                    <img src="/images/Vector.png" alt="" />
                </div>
                <span>125,663</span>
                <p>Happy Customers</p>
            </div>
            <div className="feature-item">
                <div className="feature-item-img border-dash">
                    <img src="/images/open-book 1.png" alt="" />
                </div>
                <span>50,672+</span>
                <p>Book Collections</p>
            </div>
            <div className="feature-item">
                <div className="feature-item-img border-dash">
                    <img src="/images/store 1.png" alt="" />
                </div>
                <span>1,562</span>
                <p>Our Stores</p>
            </div>
            <div className="feature-item">
                <div className="feature-item-img border-dash">
                    <img src="/images/quill 1.png" alt="" />
                </div>
                <span>457</span>
                <p>Famous Writers</p>
            </div>
        </div>
    </>);
}

export default FeatureComponent;