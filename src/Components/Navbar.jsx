import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import logo from "../assets/logo_of_adventure.png";
//import { useContext } from "react";
//import { DataContext } from "../provider/DataProvider";
//import { getAuth, signOut } from "firebase/auth";
const Navbar = () => {
  //const { user } = useContext(DataContext);
  //console.log(user);

//   const handleLogout = () => {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         // Sign-out successful.
//         //console.log("Logout Successfull");
//       })
//       .catch((error) => {
//         // An error happened.
//       });
//   };

  return (
    <div className="">
      <div className="flex justify-between">
        <div className="flex gap-3 justify-center items-center">
          <img className="h-10" src={logo} alt="" />
          <h2 className="font-bold text-xl">MovieStore</h2>
        </div>


        <div>
          <Link to={"/"} className="btn btn-link">Home</Link>
          <Link to={"/addMovie"} className="btn btn-link">Add Movie</Link>
           <Link to={"/allMovie"} className="btn btn-link">All Movie</Link>
          <Link to={"/favourite"} className="btn btn-link">Favourite Movie</Link>
         
        </div>

        <div className="flex gap-4 justify-center items-center">
          <Link to="/register" className="btn font-bold">
            Register
          </Link>
          {/* <div>
            {user && user?.email ? (
              <button onClick={handleLogout} className="btn rounded-none">
                LogOut
              </button>
            ) : (
              <Link to="/login" className="btn rounded-none">
                Login
              </Link>
            )}
          </div> */}

          <div>
            {/* {user && user?.email ? (
              <div>
                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
              </div>
            ) : (
              <img className="w-10 rounded-full" src={userIcon} alt="" />
            )} */}
            <img className="w-10 rounded-full" src={userIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
