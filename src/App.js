import './App.css';
import React, { useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Home from './components/Home';
import Schedule from "./components/schedule/Schedule"
import VerifyName from "./components/VerifyName"
import { useCookies } from 'react-cookie'
import './styles.css'



function App() {
  const [token, setToken] = useCookies(['psa-token']);
  const [ResponseUsername, setResponseUsername] = useCookies(['psa-name']);
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/" render={(props) => (<Home {...props} />)} />
        <Route path="/login" render={(props) => (<Login {...props} />)} />
        <Route path="/schedule" render={(props) => (<Schedule {...props} />)} />
        <Route path="/verify-name" render={(props) => (<VerifyName {...props} />)} />
      </Switch>
    </div>
  );
}

export default App;
