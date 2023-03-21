import { useState } from "react";
import { useNavigate } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import "./responsive.css"

export default function Register () {

  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validatorMsg, setValidationMsg] = useState('');


  const onChangeName = (event) => {
    const value = event.target.value;
    setName(value);
  };

  const onChangeEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const onChangePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const validateAll = () => {
    const msg = {};
    if (!name) {
      msg.name = 'Bạn phải nhập tên';
    } else if (name.length<8) {
      msg.name = 'Tên chưa đúng định dạng phải dài hơn 8 kí tự';
    }

    if (!email) {
      msg.email = 'Bạn phải nhập email';
    } else if (!isEmail(email)) {
      msg.email = 'Email chưa đúng định dạng';
    }

    if (!password) {
      msg.password = 'Bạn phải nhập  mật khẩu';
    } else if (password.length<6) {
      msg.password = 'Độ dài mật khẩu phải lớn hơn 6 kí tự';
    }

    setValidationMsg(msg);

    if (Object.keys(msg).length > 0) {
      return false;
    }
    return true;  
  };

  const onSubmitRegister = (e) => {
    console.log(111111);
    e.preventDefault();
    const isValid = validateAll();
    if (isValid) {  
      const user = { name, email, password };
      localStorage.setItem('user', JSON.stringify(user));

    navigate('/login');
  } };

    return (  
        <>
      <div className="register">
        <div className="loginMini">
          <div className="divtaitleLogin">
            <div className="divtaitleLoginMini">
              <p className="go">Go HieuBerShop</p>
              <p className="themore">the most Barber vip pro wourld</p>
              <p className="readmoreLogin"> Read More</p>
            </div>
            <div className="divtaitleLoginMiniImg"> 
            <img width="330px" src="/Group 2.png" alt="" />

            </div>
          </div>
          <div className="formLogin">
            <div className="formLoginMini">
              <div className="taitleFormLogin">
                <p className="hello">Hello !</p>
                <p>Sign up to Get Start</p>
              </div>
              <form className="formloginMiniInput" onSubmit={onSubmitRegister}>
               <input type="text" id="name" name="name" value={name} onChange={onChangeName} placeholder="Full Name"/>{" "}
               <p className="errors">{validatorMsg.name} </p>
                <div className="divTaitleInput1" >
                <i className="fa-regular fa-envelope"></i>    
                </div> <br />
                <input type="email" id="email" value={email} onChange={onChangeEmail} placeholder="Email Address" />{" "}
               <p className="errors">{validatorMsg.email}</p>
                <div className="divTaitleInput2" >
                <i className="fa-solid fa-user"></i> 
                </div>
                <br />
                <input type="password" id="password" name="email" value={password} onChange={onChangePassword}   placeholder="Password"/>{" "}
                <p className="errors">{validatorMsg.password}  </p>
                <div className="divTaitleInput3">
               
                <i className="fa-solid fa-lock"></i>
                </div>
                <div className="loginNe" type="submit" onClick={onSubmitRegister} > Register  </div> <br />
              </form>
            </div>
          </div>
        </div>
      </div>
        </>
    );
}
