import Header from "../task/header/Header";
import Footer from "../task/footer/Footer";
import "./checkout.css";
import { Slider } from "antd";
import { useState } from "react";

export default function Checkout() {
  const [disabled, setDisabled] = useState(false);
  const onChange = (checked) => {
    setDisabled(checked);
  };

  return (
    <>
      <div className="checkoutPage">
        <Header />
        <div className="checkoutPage-Container">
          <div className="sliderInput">
            <div className="sliderInput-input1">
              <img src="/images/passed.png" alt="" />
              <p>Shopping Summary</p>
            </div>
            <div className="sliderInput-input2">
              <Slider
                className="slider1"
                defaultValue={0}
                disabled={disabled}
              />
              <p>Checkout</p>
            </div>
            <div className="sliderInput-input2">
              <Slider
                className="slider2"
                defaultValue={0}
                disabled={disabled}
              />
              <p>Payament</p>
            </div>{" "}
            <div className="sliderInput-input2">
              <Slider
                className="slider3"
                defaultValue={0}
                disabled={disabled}
              />
              <p>Shipping</p>
            </div>
     
          </div>

          <div className="  Container-Form-Interact">
            <div className="Container-Form-Interact-User">
              <p className="buyerInfo"> Buyer Info </p>
              <div className="divForm">
                <div className="divForm1">
                  <div className="divFormMini1">
                    <div className="divFormMini11">
                      <p> First Name</p>
                      <input type="text" />
                    </div>
                    <div className="divFormMini11">
                      <p> Email Address</p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="divFormMini2">
                    <div className="divFormMini2">
                      <p>Last Name</p>
                      <input type="text" />
                    </div>
                    <div className="divFormMini2">
                      <p>Mobile Phone Number</p>
                      <input type="tel" />
                    </div>
                  </div>
                </div>
                <div className="divForm2">
                  <div className="divForm2Mini2">
                    <p> Address</p>
                    <input type="text" />
                  </div>
                </div>
                <div className="divForm3">
                  <div className="divForm3Mini">
                    <div className="divForm3Mini1">
                      <div className="divFormMinii">
                        <p> STATE</p>
                        <select id="cars">
                          <option value="volvo">Volvo</option>
                          <option value="saab">Saab</option>
                          <option value="vw">VW</option>
                          <option value="audi" selected>Audi</option>
                        </select>
                      </div>
                      <div className="divFormMini11">
                        <p style={
                          {paddingTop:"10px"}
                        }> Postcode/ZIP</p>
                        <input type="text" />
                      </div>
                    </div>
                    <div className="divFormMini2">
                      <div className="divFormMini2">
                        <p>Town/City</p>
                        <input type="text" />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="divForm4Mini">
                    <p> NOTE</p>
                    <input type="text" />
                  </div>
                </div>
              </div>
            </div>
            <div className="Container-Form-Interact-Card">
              <p className="payInfor"> Payment </p>
              <div className="imageCard">
                <img src="images/method01.png" alt="" />
                <img src="images/method01 (2).png" alt="" />
                <img src="images/method01 (1).png" alt="" />
              </div>
              <div className="textDecoretions"></div>
              <div className="stop">
                <div className="divForm2Mini2">
                  <p> Name On Card</p>
                  <input type="text" />
                </div>
              </div>
              <div className="cardAndCvv">
                <div className="cardThis">
                  <p>Card Number </p>
                  <input type="number" placeholder="0000-0000-0000-0000"/>
                </div>
                <div className="cvvThis">
                  <p>Cvv</p>
                  <div className="inputAndImg">
                    <input type="text" />
                    <img className="imgInput" src="images/Group.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="monthAndYear">
                <div  className="monthThis">
                  <p> Month </p>
                  <select id="cars">
                          <option value="volvo">January</option>
                          <option value="saab">February</option>
                          <option value="vw">March</option>
                          <option value="audi" >April</option>
                          <option value="volvo">Volvo</option>
                          <option value="saab">May</option>
                          <option value="vw">June</option>
                          <option value="audi" >July</option> 
                          <option value="saab">August</option>
                          <option value="vw">September</option>
                          <option value="audi" >October</option>  
                          <option value="saab">November</option>
                          <option value="vw">December</option>
                          <option value="audi" selected>Null</option>
                        </select>
                   </div>
                <div className="yearThis">
                  <p>Year</p>
                  <input type="month" />
                </div>
              </div>
              <div className="divClickOrder"> 
                <p> PLACE ORDER</p>
              </div>
            </div>
          </div>
          <div className="divOptionCaseCheck">
            <div className="divOptionCaseCheckMini">
             <img src="images/icon.png" alt="" /> <br />
             <p>Quick Delivery</p> <br />
             <p className="loremCaseCheckMini"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Asperiores vero corrupti, </p>
            </div>
            <div  className="divOptionCaseCheckMini">
             <img src="images/icon.png" alt="" /> <br />
             <p>Quick Delivery</p> <br />
             <p className="loremCaseCheckMini"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Asperiores vero corrupti, ,</p>
            </div>
            <div  className="divOptionCaseCheckMini">
             <img src="images/icon.png" alt="" /> <br />
             <p>Quick Delivery</p> <br />
             <p className="loremCaseCheckMini"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Asperiores vero corrupti, ,</p>
            </div>
            <div  className="divOptionCaseCheckMini">
             <img src="images/icon.png" alt="" /> <br />
             <p>Quick Delivery</p> <br />
             <p className=" loremCaseCheckMini"> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Asperiores vero corrupti, ,</p>
            </div>
       
       

          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
