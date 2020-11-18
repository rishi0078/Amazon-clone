import React,{useEffect} from 'react';
import {BrowserRouter as Router,Route, Switch} from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from "./Home"
import Login from "./Login"
import Checkout from "./Checkout";
import { auth } from './firebase';
import {useStateValue} from "./StateProvider";

function App() {
  const[{user},dispatch] = useStateValue();

  //useEffect 
  //Piece of code which runs based on the condition

  useEffect(() => {
    const unsubscribe=auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        //the user is login
        dispatch({
          type:"Set_User",
          user:authUser,
        })
      }
      else{
        // the user id logged out
        dispatch({
          type:"Set_User",
          user:null,
        })

      }
    });
    //Any cleanup operation go in here....
    return ()=>{
      unsubscribe();
    };
 
  }, []);
  
  console.log(user);

  return (
       <Router>
    <div className="app">
      <Switch>
        <Route path="/checkout">
               <Header />
              <Checkout />
        </Route>

        <Route path="/login">
               <Login />
        </Route>

        <Route path="/">
          <Header />
          <Home />
        </Route>
       </Switch>
    </div>
    </Router>
  );
}

export default App;
