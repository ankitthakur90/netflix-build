import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { HomeScreen } from './screens/HomeScreen';
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { auth } from "./app/firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice.js";

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged in
        // console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        // Logged Out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<HomeScreen />} /> */}
          {!user ? (
            <Route path="/" element={<LoginScreen />} />
          ) : (
            <>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
