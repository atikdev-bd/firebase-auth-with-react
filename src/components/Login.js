import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import GoogleSvg from '../Assets/svg/icons8-google.svg'
import { AuthContext } from "./ContextApi";

const Login = () => {
  const navigate = useNavigate()
  const {loginUser, googlePopUp} = useContext(AuthContext)

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email,password)
    .then(result =>{
      const user = result.user
      console.log(user)
      form.reset()
      navigate('/home')
      
    })
    .catch(error => console.error(error))
 
    
  };
  const loginWithGoogle = ()=>{
    googlePopUp()
    .then(result => {
      const user = result.user
      navigate('/home')
    }).catch(error=> console.log(error))
  }
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
           
          </div>
          <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                name="email"
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
              <div>
                <p className="text-zinc-300 text-xl">Continue with</p>
                <img onClick={loginWithGoogle} className="w-20 mx-auto" src={GoogleSvg} alt="" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
