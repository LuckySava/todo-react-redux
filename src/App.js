// import logo from './logo.svg';
import React from "react";
import Header from './components/header/Header';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import style from './App.module.scss'

function App() {
  return (
    <Router>

      <Switch>
        <div className="container">

          <Header />

          <div className={style.main_content}>

            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/about'>
              <About />
            </Route>

          </div>

        </div>
      </Switch>

    </Router>
  );
}


export default App;