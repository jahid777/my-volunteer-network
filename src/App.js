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
import RegistrationList from '../src/Components/RegistrationList/RegistrationList';
import EventCard from './Components/EventCard/EventCard';





export const UserContext = createContext();
export const UserCardData = createContext();

const App = () => {
 const [loggedInUser, setLoggedInUser] = useState({});
 const [cardData, setCardData] = useState({});

  return (
    
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <UserCardData.Provider value={[cardData, setCardData]}>
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

          <Route  path="/eventCard">
              <EventCard></EventCard>
          </Route>

          <PrivateRoute  path="/registrationList">
              <RegistrationList></RegistrationList>
          </PrivateRoute>

    
          <PrivateRoute  path="/registerForm">
              <RegisterForm></RegisterForm>
          </PrivateRoute>

          <Route  path="*">
              <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
      </UserCardData.Provider>
      </UserContext.Provider>
      
  );
};

export default App;