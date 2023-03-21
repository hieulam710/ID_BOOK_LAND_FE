import React, { useState } from "react";
import "./login.css";
import isEmpty from "validator/lib/isEmpty"
import {useNavigate} from 'react-router-dom'
import isEmail from "validator/lib/isEmail";
import "./responsive.css"
export default function Login(props) {

  const navigate=useNavigate()
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [validatorMsg,setValidationMsg]=useState('')


  const onChangeEmail = (event) =>{
     const value=event.target.value
     setEmail(value)
  }
  const onChangePassword = (event) =>{
    const value=(event.target.value) 
    setPassword(value)
 }
 const validateAll=()=>{
  const msg={}
  if(isEmpty(email)){
    msg.email="Bạn phải nhập đúng  định dạng email "

  }else if(!isEmail(email)){
    msg.email="Email chưa đúng định dạng"
  }
  if(isEmpty(password)){
    msg.password="Bạn phải nhập mật khẩu "
   
  }else if(password.length < 6){
    msg.password="Độ dài mật khẩu phải lớn hơn 6 kí tự"
  }  

  setValidationMsg(msg)
  if(Object.keys(msg).length>0) return false
return true
}
 const onSubmitLogin  =(e) =>{
  e.preventDefault();
const isValid=validateAll()
if(isValid) {
const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.email === email && storedUser.password === password) {
    
      navigate('/');
    } else {
      setValidationMsg({ email: 'Email hoặc mật khẩu không đúng' , password:"Email hoặc mật khẩu không đúng" });
    }}}
  return (
    <>
      <div className="login">
        <div className="loginMini">
          <div className="divtaitleLogin">
            <div className="divtaitleLoginMini">
              <p className="go">Go HieuBerShop</p>
              <p className="themore">The most Barber vip pro wourld</p>
              <p className="readmoreLogin"> Read More</p>
            </div>
            <div className="divtaitleLoginMiniImg"> 
            <img width="330px" src="/Group 2.png" alt="" />

            </div>
          </div>
          <div className="formLogin">
            <div className="formLoginMini">
              <div className="taitleFormLogin">
                <p className="hello">Hello Again!</p>
                <p>Welcome Back</p>
              </div>
              <form className="formloginMiniInput"   >
                <input type="email" name="email" value={email} autoComplete="email" onChange={onChangeEmail} placeholder="Email Address" />{" "}  
                 <p className="error"> {validatorMsg.email } </p>
                <div className="divTaitleInput1" >
              <i className="fa-regular fa-envelope"></i>
                </div>
                <br />
                <input type="password" name="password" value={password} autoComplete="password" onChange={onChangePassword} placeholder="Password" />{" "}
                <p className="error">  {validatorMsg.password || validateAll}</p>
                <div className="divTaitleInput2">
                <i className="fa-solid fa-lock"></i>
                </div>
                <button className="loginNe" type="button" onClick={onSubmitLogin} > Login</button> <br />
                <button className="forgotPasswordText" > Forgot Password </button>
                {/* onSubmit={onSubmitLogin} */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
