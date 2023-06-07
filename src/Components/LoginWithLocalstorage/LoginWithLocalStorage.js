import React,{ useRef } from "react";
import HomeComponents from '../Home';
import './style.css';
function LoginWithLocalStorage(){
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }}
    return(
        <div>
            <div >
                <div >
            {
                getEmail&&getPassword?
             <HomeComponents/>:
 <form onSubmit={handleSubmit}>
    <div className="home">
<div className="main">
  <div className="signup">
    <label for="chk" aria-hidden="true">Login</label>
 <div>
     <input type="text" placeholder="Email" ref={email} />
 </div>
 <div>
     <input type="password" placeholder="Password" ref={password}/>
 </div>
 <button>Login</button>
 </div>
 </div></div>
</form>

            }
         
        </div></div></div>
    );
}
export default LoginWithLocalStorage;
