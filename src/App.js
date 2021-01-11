import { useSelector, useDispatch } from 'react-redux';
import React,{ useEffect } from 'react';
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { login, logout, selectUser } from './userSlice';
import Login from "./Login";
import { auth } from "./firebase";
import Widgets from "./Widgets";

function App() {
  // TO PULL THE USER FROM THE DATA STORE
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {   //listens to any change in authentication(i.e persisted authentication)
        if(userAuth){
            // user is logged in
            dispatch(  // dispatches user details to store
            login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.displayName,
                photoUrl: userAuth.photoURL,
            })
          );
        } else{
            // user is logged out
            dispatch(logout());
        }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
        )  :(
          <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
          </div>
      )}
    </div>
  );
}

export default App;
