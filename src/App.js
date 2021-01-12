import React, { createContext, useState } from 'react';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import RegisterForm from './Components/RegisterForm/RegisterForm';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';



export const UserContext = createContext();

const App = () => {
 const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router> 
        <Switch>
        <Route  path="/home">
              <Home></Home>
          </Route>

          
          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route  path="/login">
              <Login></Login>
          </Route>
    
          <PrivateRoute  path="/registerForm">
              <RegisterForm></RegisterForm>
          </PrivateRoute>

          <Route  path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
       
      </UserContext.Provider>
  );
};

export default App;