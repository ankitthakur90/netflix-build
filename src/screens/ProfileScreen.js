// import React from "react";
// import "./ProfileScreen";
// import Nav from "../Nav";
// import { useSelector } from "react-redux";
// import { selectUser } from "../features/userSlice";
// import { auth } from "../app/firebase";

// function ProfileScreen() {
//   const user = useSelector(selectUser);
//   return (
//     <div className="ProfileScreen">
//       <Nav />
//       <div className="ProfileScreen__body">
//         <h1>Edit Profile</h1>
//         <div className="ProfileScreen__info">
//           <img
//             src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
//             alt="Nav Avatar"
//           />
//         </div>
//         <div className="ProfileScreen__details">
//           <h2>{user.email} </h2>
//           <div className="ProfileScreen__plan">
//             <button
//             onClick={()=> auth.signOut()}
//             className="ProfileScreen__signOut">Sign Out</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProfileScreen;

import React from "react";
import "./ProfileScreen.css"; // Assuming you have a CSS file for styling
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../app/firebase";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function ProfileScreen() {
  const user = useSelector(selectUser);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        // Sign out successful, navigate to the login screen
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error.message);
      });
  };

  return (
    <div className="ProfileScreen">
      <Nav />
      <div className="ProfileScreen__body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt="Nav Avatar"
          />

          <div className="ProfileScreen__details">
            <h2>{user.email}</h2>
            <div className="ProfileScreen__plan">
              <h3>Plans</h3>
              <button
                onClick={handleSignOut}
                className="ProfileScreen__signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
