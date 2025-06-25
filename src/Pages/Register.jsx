//import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DataContext } from "../provider/DataProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
//import { auth } from "../firebase.init";

const Register = () => {
    
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const {user, setUser, createUser, updateUser} = useContext(DataContext);

    


    const handleRegister = (e) => {
          e.preventDefault();

        
          
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;

      
        //console.log(email, password, name, photo);  

        setErrorMessage("");
        setSuccess(false);

        if (password.length < 6) {
          setErrorMessage("Password should be 6 characters or longer");
          return;
        }

        // const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        // if (!passwordRegex.test(password)) {
        //   setErrorMessage(
        //     "At least one uppercase, one lowercase character"
        //   );
        //   return;
        // }

         
        createUser(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setUser(user);
          setSuccess(true);
          // ...


          const profile = {
            displayName : name,
            photoURL : photo
         }

         updateUser(profile)
         //updateProfile(auth.currentUser, profile)
         .then(() =>{
          console.log('user profile updated')
          console.log(user.displayName);
         })
         .catch(error => console.log('User profile update error'));

         }) 


        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          setErrorMessage(error.message);
          setSuccess(false);
          // ..
        });



        // createUserWithEmailAndPassword(auth, email, password)
        // .then((result) => {
        //   const user = result.user;
        //   //console.log(user);
        //   setSuccess(true);
        //   // ...


        //   const profile = {
        //     displayName : name,
        //     photoURL : photo
        //  }
  
        //  updateProfile(auth.currentUser, profile)
        //  .then(() =>{
        //   // console.log('user profile updated')
        //  })
        //  .catch(error => console.log('User profile update error'));

        // }) 


        // .catch((error) => {
        //   const errorCode = error.code;
        //   const errorMessage = error.message;
        //   setErrorMessage(error.message);
        //   setSuccess(false);
        //   // ..
        // });


       

    }

  return (
    <div>
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-center mb-4">Please Register</h2>

        <div className="card bg-base-100 w-full mx-auto text-center max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <button
                onClick={() => setShowPassword(!showPassword)}
                className="btn btn-xs absolute right-2 top-8"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>

          {errorMessage && <p className="text-red-600">{errorMessage}</p>}
          {success && <p className="text-green-600">Register is Successfull.</p>}


          <p>
            Already have an account? Please <Link to="/login">Login</Link>
          </p>
          <p>
             Go Back to <Link to={"/"}><u>Home</u></Link>
         </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
