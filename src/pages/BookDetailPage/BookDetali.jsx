import "./bookDetail.css";
import Header from "../../components/header/Header";
import { MinusOutlined, PlusOutlined, HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Rate } from "antd";
import FeatureComponent from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";

function BookDetail() {
    return (<>
        <Header />
        <div className="book-detail">
            <div className="bookdetail-top">
                <div className="book-img---main-429-299">
                    <img src="" alt="" />
                </div>
                <div className="detail-right">
                    <h1>Think And Grow Rich</h1>
                    <div className="rate-n-social--row">
                        <Rate disabled defaultValue={2} />
                        <div className="box-icon-wid-18">
                            <p> <img src="/images/chat (2) 1.png" style={{ width: "18px" }} alt="" />
                                <span>235 Review</span>
                                <img src="/images/thumb-up 1.png" style={{ width: "18px" }} alt="" />
                                <span>456k Like</span>
                                <div className="img-social">
                                    <img src="/images/social01.png" alt="" />
                                    <img src="/images/social03.png" alt="" />
                                    <img src="/images/social05.png" alt="" />
                                    <img src="/images/social05 (1).png" alt="" />
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="author-n-year">
                        <div >
                            <span>Writen by</span>
                            <h6>Napoleon Rich</h6>
                        </div>
                        <div >
                            <span>Publisher</span>
                            <h6>Printarea Studios</h6>
                        </div>
                        <div >
                            <span>year</span>
                            <h6>2019</h6>
                        </div>
                        <div>
                            <img src="/images/index.png" alt="" />
                        </div>
                        <div>
                            <img src="images/instocks.png" alt="" />
                        </div>
                    </div>
                    <p className="book-descripton">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p >
                    <div className="group-price-n-btn">
                        <div className="book-item-price">
                            <span className="book-price">$15.63</span>
                            <span className="price-through">$16.99</span>
                        </div>
                        <div className="add-n-buy">
                            <div className="decrease-box">
                                <button><MinusOutlined /></button>
                                <span>1</span>
                                <button><PlusOutlined /></button>
                            </div>
                            <div className="add-tocart--btn">
                                <button><ShoppingCartOutlined /> Add to Cart </button>
                            </div>
                            <button className="border---2 btn-whislist">
                                <HeartOutlined />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="book-detail-infor-n-relate">
                <div className="bokdetail-in4 wid-75">
                    <p className="detail-n-review-product">
                        <div>Details Product</div>
                        <div className="unactive"> Customer Reviews</div>
                    </p>
                    <table>
                        <tr>
                            <td className="dt">Book Title</td>
                            <td className="">Think and Grow Rich</td>
                        </tr>
                        <tr>
                            <td className="dt">Author</td>
                            <td className="">Napoleon Rich</td>
                        </tr>
                        <tr>
                            <td className="dt">ISBN</td>
                            <td className="">121341381648 (ISBN13: 121341381648)</td>
                        </tr>
                        <tr>
                            <td className="dt">Ediiton Language</td>
                            <td className="">English</td>
                        </tr>
                        <tr>
                            <td className="dt">Book Format</td>
                            <td className="">Paperback, 450 Pages</td>
                        </tr>
                        <tr>
                            <td className="dt">Date Published</td>
                            <td className="">August 10th 2019</td>
                        </tr>
                        <tr>
                            <td className="dt">Publisher</td>
                            <td className="">Wepress Inc.</td>
                        </tr>
                        <tr>
                            <td className="dt">Tags</td>
                            <td className="book-types---1" > <div className="custom-type">Drama</div>
                                <div className="custom-type">Advanture</div>
                                <div className="custom-type">Surival</div>
                                <div className="custom-type">Biography</div>
                                <div className="custom-type">BestSeller</div>
                                <div className="custom-type">Trending2020</div>
                            </td>
                        </tr>
                    </table>

                </div>
                <div className="related-books wid-25">
                    <div className="detail-n-review-product">
                        <span>Related Book</span>
                    </div>
                    <div className="relate-list-buk">
                        <div className="relate-buk-item">
                            <div className="relate-img-buk">
                                <img src="" alt="" />
                            </div>
                            <div className="relate-buk-infor">
                                <span className="book-name"> Battle drive</span>
                                <span className="book-type"> THRILLE, DRAMA, HORROR</span>
                                <p>  <span className="book-price">$45.5</span> <span className="line-through">$98.4</span></p>
                                <button><ShoppingCartOutlined /> Add to Cart</button>
                            </div>
                        </div>
                        <div className="relate-buk-item">
                            <div className="relate-img-buk">
                                <img src="" alt="" />
                            </div>
                            <div className="relate-buk-infor">
                                <span className="book-name"> Battle drive</span>
                                <span className="book-type"> THRILLE, DRAMA, HORROR</span>
                                <p>  <span className="book-price">$45.5</span> <span className="line-through">$98.4</span></p>
                                <button><ShoppingCartOutlined /> Add to Cart</button>
                            </div>
                        </div><div className="relate-buk-item">
                            <div className="relate-img-buk">
                                <img src="" alt="" />
                            </div>
                            <div className="relate-buk-infor">
                                <span className="book-name"> Battle drive</span>
                                <span className="book-type"> THRILLE, DRAMA, HORROR</span>
                                <p>  <span className="book-price">$45.5</span> <span className="line-through">$98.4</span></p>
                                <button><ShoppingCartOutlined /> Add to Cart</button>
                            </div>
                        </div>
                        <div className="relate-buk-item">
                            <div className="relate-img-buk">
                                <img src="" alt="" />
                            </div>
                            <div className="relate-buk-infor">
                                <span className="book-name"> Battle drive</span>
                                <span className="book-type"> THRILLE, DRAMA, HORROR</span>
                                <p>  <span className="book-price">$45.5</span> <span className="line-through">$98.4</span></p>
                                <button><ShoppingCartOutlined /> Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FeatureComponent/>
        <Footer/>
    </>);
}

export default BookDetail;