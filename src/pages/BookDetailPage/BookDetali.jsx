import "./bookDetail.css";
import Header from "../../components/header/Header";
import { Rate } from "antd";

function BookDetail() {
    return (<>
        <Header/>
        <div className="book-detail">
            <div className="bookdetail-top">
                <div className="book-img---main-429-299">
                    <img src="" alt="" />
                </div>
                <div className="detail-right">
                    <h1>Think And Grow Rich</h1>
                    <div>
                         <Rate disabled defaultValue={2} />

                         
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default BookDetail;