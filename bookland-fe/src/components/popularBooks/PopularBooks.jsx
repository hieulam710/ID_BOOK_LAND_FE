import { useState, useEffect } from "react";
import "./popularBooks.css";


function PopularBooks() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        // Gọi API để lấy danh sách các URL hình ảnh
        fetch('url-api')
            .then(response => response.json())
            .then(data => setImages(data));
    }, []);
    return (<>
        <div className="popular-books-container">
            <div className="title-popular-n-flashsale">
                <h2>Popular This Week</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="slide-popular">
                {images.slice(0, 9).map((imageUrl, index) => (
                    <div key={index} className="custom-img-slide">
                        <img src={imageUrl} alt={`Popular book ${index}`} />
                    </div>
                ))}
            </div>
        </div>
    </>);
}

export default PopularBooks;