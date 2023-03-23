import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banners/Banner";
import FeatureComponent from "../../components/feature/Feature";
import { useState, useEffect } from "react";
import { Rate } from 'antd';

import "./bookListPage.css"
import { AppstoreOutlined, ShoppingCartOutlined, HeartOutlined } from "@ant-design/icons";
import { Button, Space, Tooltip } from 'antd';


const desc = ["1.0", "2.0", "3.0", "4.0", "5.0"];

function BookListPage() {
    const [value, setValue] = useState(4);
    return (<>
        <Header />
        <div className="books-list-container wrapper-padding">
            <h1>Books</h1>
            <div className="nav-bar-time-filter  border---2">
                <div className="float-start">
                    <span className="active">Today</span>
                    <span className="unactive">This Week</span>
                    <span className="unactive">This Month</span>
                </div>
                <div className="float-end">
                    <p>
                        <i class="fa-solid fa-bars"></i>
                        <AppstoreOutlined />
                    </p>
                    <p><i class="fa-solid fa-sliders"></i> <span>Categories</span></p>
                    <p> <i class="fa-solid fa-arrow-down-wide-short"></i> <span>Newest</span></p>
                </div>
            </div>
            <div className="list-book-wraper">
                <div className="book-element hei-210 border---2">
                    <div className="book-image-180-130">
                        <img src="" alt="" />
                    </div>
                    <div className="book-information">
                        <span className="book-type">ADVANTURE, SCIENCE, COMEDY</span>
                        <h2 id="bookName">The Missadventure of David</h2>
                        <p id="bookDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="grid-20-25-10-30-15">
                            <div>
                                <span>Writen by</span>
                                <h6>Kevin Smiley</h6>
                            </div>
                            <div>
                                <span>Publisher</span>
                                <h6>Printarea Studios</h6>
                            </div><div>
                                <span>Year</span>
                                <h6>2019</h6>
                            </div>
                            <div>
                                <Rate value={value} />
                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                            </div>
                            <span> 235 Reviews</span>
                        </div>
                    </div>
                    <div className="book-price-sale-1">
                        <div className="fff-1"> <div className="div-sale-custom cl-FF754C">Get 20% Discount for today</div>
                            <div className="div-sale-custom cl-FF754C">50% OFF Discount</div>
                            <div className="div-sale-custom cl-F0F0F0">See 2+ promos</div>
                        </div>
                        <p><span id="bookPrice"> $ 54.78</span> <span className="price-through">$70.00</span> </p>
                        <p>
                            <Button type="primary" icon={<ShoppingCartOutlined />}>
                                Add to Cart
                            </Button>
                            <button className="border---2 btn-whislist">
                                <HeartOutlined />
                            </button>
                        </p>
                    </div>
                </div>
                <div className="book-element hei-210 border---2">
                    <div className="book-image-180-130">
                        <img src="" alt="" />
                    </div>
                    <div className="book-information">
                        <span className="book-type">ADVANTURE, SCIENCE, COMEDY</span>
                        <h2 id="bookName">The Missadventure of David</h2>
                        <p id="bookDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="grid-20-25-10-30-15">
                            <div>
                                <span>Writen by</span>
                                <h6>Kevin Smiley</h6>
                            </div>
                            <div>
                                <span>Publisher</span>
                                <h6>Printarea Studios</h6>
                            </div><div>
                                <span>Year</span>
                                <h6>2019</h6>
                            </div>
                            <div>
                                <Rate value={value} />
                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                            </div>
                            <span> 235 Reviews</span>
                        </div>
                    </div>
                    <div className="book-price-sale-1">
                        <div className="fff-1"> <div className="div-sale-custom cl-FF754C">Get 20% Discount for today</div>
                            <div className="div-sale-custom cl-FF754C">50% OFF Discount</div>
                            <div className="div-sale-custom cl-F0F0F0">See 2+ promos</div>
                        </div>
                        <p><span id="bookPrice"> $ 54.78</span> <span className="price-through">$70.00</span> </p>
                        <p>
                            <Button type="primary" icon={<ShoppingCartOutlined />}>
                                Add to Cart
                            </Button>
                            <button className="border---2 btn-whislist">
                                <HeartOutlined />
                            </button>
                        </p>
                    </div>
                </div><div className="book-element hei-210 border---2">
                    <div className="book-image-180-130">
                        <img src="" alt="" />
                    </div>
                    <div className="book-information">
                        <span className="book-type">ADVANTURE, SCIENCE, COMEDY</span>
                        <h2 id="bookName">The Missadventure of David</h2>
                        <p id="bookDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="grid-20-25-10-30-15">
                            <div>
                                <span>Writen by</span>
                                <h6>Kevin Smiley</h6>
                            </div>
                            <div>
                                <span>Publisher</span>
                                <h6>Printarea Studios</h6>
                            </div><div>
                                <span>Year</span>
                                <h6>2019</h6>
                            </div>
                            <div>
                                <Rate value={value} />
                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                            </div>
                            <span> 235 Reviews</span>
                        </div>
                    </div>
                    <div className="book-price-sale-1">
                        <div className="fff-1"> <div className="div-sale-custom cl-FF754C">Get 20% Discount for today</div>
                            <div className="div-sale-custom cl-FF754C">50% OFF Discount</div>
                            <div className="div-sale-custom cl-F0F0F0">See 2+ promos</div>
                        </div>
                        <p><span id="bookPrice"> $ 54.78</span> <span className="price-through">$70.00</span> </p>
                        <p>
                            <Button type="primary" icon={<ShoppingCartOutlined />}>
                                Add to Cart
                            </Button>
                            <button className="border---2 btn-whislist">
                                <HeartOutlined />
                            </button>
                        </p>
                    </div>
                </div><div className="book-element hei-210 border---2">
                    <div className="book-image-180-130">
                        <img src="" alt="" />
                    </div>
                    <div className="book-information">
                        <span className="book-type">ADVANTURE, SCIENCE, COMEDY</span>
                        <h2 id="bookName">The Missadventure of David</h2>
                        <p id="bookDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="grid-20-25-10-30-15">
                            <div>
                                <span>Writen by</span>
                                <h6>Kevin Smiley</h6>
                            </div>
                            <div>
                                <span>Publisher</span>
                                <h6>Printarea Studios</h6>
                            </div><div>
                                <span>Year</span>
                                <h6>2019</h6>
                            </div>
                            <div>
                                <Rate value={value} />
                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                            </div>
                            <span> 235 Reviews</span>
                        </div>
                    </div>
                    <div className="book-price-sale-1">
                        <div className="fff-1"> <div className="div-sale-custom cl-FF754C">Get 20% Discount for today</div>
                            <div className="div-sale-custom cl-FF754C">50% OFF Discount</div>
                            <div className="div-sale-custom cl-F0F0F0">See 2+ promos</div>
                        </div>
                        <p><span id="bookPrice"> $ 54.78</span> <span className="price-through">$70.00</span> </p>
                        <p>
                            <Button type="primary" icon={<ShoppingCartOutlined />}>
                                Add to Cart
                            </Button>
                            <button className="border---2 btn-whislist">
                                <HeartOutlined />
                            </button>
                        </p>
                    </div>
                </div><div className="book-element hei-210 border---2">
                    <div className="book-image-180-130">
                        <img src="" alt="" />
                    </div>
                    <div className="book-information">
                        <span className="book-type">ADVANTURE, SCIENCE, COMEDY</span>
                        <h2 id="bookName">The Missadventure of David</h2>
                        <p id="bookDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="grid-20-25-10-30-15">
                            <div>
                                <span>Writen by</span>
                                <h6>Kevin Smiley</h6>
                            </div>
                            <div>
                                <span>Publisher</span>
                                <h6>Printarea Studios</h6>
                            </div><div>
                                <span>Year</span>
                                <h6>2019</h6>
                            </div>
                            <div>
                                <Rate value={value} />
                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                            </div>
                            <span> 235 Reviews</span>
                        </div>
                    </div>
                    <div className="book-price-sale-1">
                        <div className="fff-1"> <div className="div-sale-custom cl-FF754C">Get 20% Discount for today</div>
                            <div className="div-sale-custom cl-FF754C">50% OFF Discount</div>
                            <div className="div-sale-custom cl-F0F0F0">See 2+ promos</div>
                        </div>
                        <p><span id="bookPrice"> $ 54.78</span> <span className="price-through">$70.00</span> </p>
                        <p>
                            <Button type="primary" icon={<ShoppingCartOutlined />}>
                                Add to Cart
                            </Button>
                            <button className="border---2 btn-whislist">
                                <HeartOutlined />
                            </button>
                        </p>
                    </div>
                </div>
                <div className="book-element hei-210 border---2">
                    <div className="book-image-180-130">
                        <img src="" alt="" />
                    </div>
                    <div className="book-information">
                        <span className="book-type">ADVANTURE, SCIENCE, COMEDY</span>
                        <h2 id="bookName">The Missadventure of David</h2>
                        <p id="bookDescription">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <div className="grid-20-25-10-30-15">
                            <div>
                                <span>Writen by</span>
                                <h6>Kevin Smiley</h6>
                            </div>
                            <div>
                                <span>Publisher</span>
                                <h6>Printarea Studios</h6>
                            </div><div>
                                <span>Year</span>
                                <h6>2019</h6>
                            </div>
                            <div>
                                <Rate value={value} />
                                {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
                            </div>
                            <span> 235 Reviews</span>
                        </div>
                    </div>
                    <div className="book-price-sale-1">
                        <div className="fff-1"> <div className="div-sale-custom cl-FF754C">Get 20% Discount for today</div>
                            <div className="div-sale-custom cl-FF754C">50% OFF Discount</div>
                            <div className="div-sale-custom cl-F0F0F0">See 2+ promos</div>
                        </div>
                        <p><span id="bookPrice"> $ 54.78</span> <span className="price-through">$70.00</span> </p>
                        <p>
                            <Button type="primary" icon={<ShoppingCartOutlined />}>
                                Add to Cart
                            </Button>
                            <button className="border---2 btn-whislist">
                                <HeartOutlined />
                            </button>
                        </p>
                    </div>
                </div>
            </div>
            <div className="pagination">
                <button > <i class="fa-solid fa-angle-left"></i> Previos</button>
                <div className="list-page-data border---2">
                    <span className="action">1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
                <button > Next  <i class="fa-solid fa-angle-right"></i></button>
            </div>

        </div>
        <Banner />
        <FeatureComponent />
        <Footer/>
    </>);
}

export default BookListPage;