
// import {
//   sendPasswordResetEmail,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import { auth } from "../firebase.init";
import { DataContext } from "../provider/DataProvider";

const Login = () => {
  const {setUser} = useContext(DataContext);
  const {signInUser} = useContext(DataContext);
  const [success, setSuccess] = useState(false);
  const [loginError, setLoginError] = useState("");
  //const emailRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
   // console.log(email, password);

    
    setSuccess(false);
    setLoginError("");

     signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
        setSuccess(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });


    // signInWithEmailAndPassword(auth, email, password)
    //   .then((result) => {
    //    // console.log(result.user);

    //       const user = result.user;
    //       setUser(user);
    //       navigate(location?.state ? location.state : "/");
        
    //       setSuccess(true);
    //   })
    //   .catch((error) => {
    //    // console.log("ERROR", error.message);
    //     setLoginError(error.message);
    //   });
  };

//   const handleForgetPassword = () => {
//     //console.log("get me email address", emailRef.current.value);
//     const email = emailRef.current.value;
//     if (!email) {
//       //console.log("Please provide a valid email address.");
//     } else {
//       sendPasswordResetEmail(auth, email).then(() => {
//         alert("Password Reset email sent, please check your email");
//       });
//     }
//   };

  return (
    <div>

      <h1 className="text-4xl font-bold text-center mb-4">Login here</h1>
      <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">

        
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            {/* <label onClick={handleForgetPassword} className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>

        {
            success && <p className="text-green-600">User login successful.</p>
          }

          {
            loginError && <p className="text-red-500">{loginError}</p> 
          }


        <p>
          New to this website? please <Link to="/register">Register</Link>
        </p>
        <p>
          Go Back to{" "}
          <Link to={"/"}>
            <u>Home</u>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
