import React, { useState } from 'react'
import "../styles/mix.css"
import { NavLink, } from "react-router-dom"
// useNavigate
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Login = () => {
    const [email, setEmail] = useState("");

    // sendotp
    const sendOtp = async (e) => {
        e.preventDefault();

        if (email === "") {
            toast.error("Enter Your Email !")
        }
        else if (!email.includes("@")) {
            toast.error("Enter Valid Email !")
        }
        else {
            toast.success("login success")
            // setSpiner(true)
            // const data = {
            //     email: email
            // }

            // const response = await sentOtpFunction(data);

            // if (response.status === 200) {
            //     setSpiner(false)
            //     navigate("/user/otp",{state:email})
            // } else {
            //     toast.error(response.response.data.error);
            // }
        }
    }



return (
    <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Welcome Back, Log In</h1>
                <p>Hi, we are you glad you are back. Please login.</p>
            </div>
            <form>
                <div className="form_input">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Your Email Address' />
                </div>
                <button className='btn' onClick={sendOtp}
                >Login
                    {
                        // spiner ? <span><Spinner animation="border" /></span>:""
                    }
                </button>
                <p>Don't have and account <NavLink to="/register">Sign up</NavLink> </p>
            </form>
        </div>
        <ToastContainer />
    </section>
)
    }

export default Login