import { useState, useEffect } from "react";

import "./flashSale.css";
function FlashSale() {
    const targetDate = new Date('2023-12-31T23:59:59Z');
    return (<>
        <div className="flash-sale-container wrapper-padding">
            <div className="title-popular-n-flashsale">
                <h1>Flash Sale</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>

            <CountDown targetDate={targetDate} />
            <div className="list-book-flash-sale">
                <div className="fl-sale-book-item">
                    <div className="fls-book-custom-img">
                        <img src="" alt="" />
                    </div>
                    <div className="book-item-infor">
                        <h4>REWORK</h4>
                        <p className="book-type">DRAMA, BIOGRAPHY</p>
                        <p><strong>$ 34.00</strong> <span className="num-linethrough">$ 50.00</span></p>
                    </div>
                </div>
                <div className="fl-sale-book-item">
                    <div className="fls-book-custom-img">
                        <img src="" alt="" />
                    </div>
                    <div className="book-item-infor">
                        <h4>REWORK</h4>
                        <p className="book-type">DRAMA, BIOGRAPHY</p>
                        <p><strong>$ 34.00</strong> <span className="num-linethrough">$ 50.00</span></p>
                    </div>
                </div>
                <div className="fl-sale-book-item">
                    <div className="fls-book-custom-img">
                        <img src="" alt="" />
                    </div>
                    <div className="book-item-infor">
                        <h4>REWORK</h4>
                        <p className="book-type">DRAMA, BIOGRAPHY</p>
                        <p><strong>$ 34.00</strong> <span className="num-linethrough">$ 50.00</span></p>
                    </div>
                </div>
                <div className="fl-sale-book-item">
                    <div className="fls-book-custom-img">
                        <img src="" alt="" />
                    </div>
                    <div className="book-item-infor">
                        <h4>REWORK</h4>
                        <p className="book-type">DRAMA, BIOGRAPHY</p>
                        <p><strong>$ 34.00</strong> <span className="num-linethrough">$ 50.00</span></p>
                    </div>
                </div>
                <div className="fl-sale-book-item">
                    <div className="fls-book-custom-img">
                        <img src="" alt="" />
                    </div>
                    <div className="book-item-infor">
                        <h4>REWORK</h4>
                        <p className="book-type">DRAMA, BIOGRAPHY</p>
                        <p><strong>$ 34.00</strong> <span className="num-linethrough">$ 50.00</span></p>
                    </div>
                </div>
                <div className="fl-sale-book-item">
                    <div className="fls-book-custom-img">
                        <img src="" alt="" />
                    </div>
                    <div className="book-item-infor">
                        <h4>REWORK</h4>
                        <p className="book-type">DRAMA, BIOGRAPHY</p>
                        <p><strong>$ 34.00</strong> <span className="num-linethrough">$ 50.00</span></p>
                    </div>
                </div>
            </div>

        </div>
    </>);
}

export default FlashSale;

function CountDown(props) {

    const { targetDate } = props;
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate.getTime() - now;
            if (distance > 0) {
                const days = Math.floor(distance / (122000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            } else {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="countdown-component">
            <div className="countdown-num">
                <p>{days}</p>
                <span>Day</span>
            </div>
            <div className="countdown-num">
                <p>{hours}</p>
                <span>Hours</span>
            </div>
            <div className="countdown-num">
                <p>{minutes}</p>
                <span>Minutes</span>
            </div>
            <div className="countdown-num">
                <p>{seconds}</p>
                <span>Seconds</span>
            </div>
        </div>
    );

}