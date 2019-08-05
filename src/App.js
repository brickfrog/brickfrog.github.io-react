import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer';
import ProfileSummary from './components/ProfileSummary/ProfileSummary';
import Home from './components/Home/Home';

ReactGA.initialize('UA-142850824-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <div>
            <Navigation/>
            <ProfileSummary/>
            <Route exact={true} path='/' component={Home}/>
            <Route path='/home' component={Home}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/blog' component={() => { 
     		window.location.href = 'https://ghost.os.justin.vc'; 
    		return null;}}/>
	    <Route path='/notion' component={() => { 
     		window.location.href = 'https://www.notion.so/brickfrog/The-Compendium-0793c301c7194bb99fd1214a2fac672e'; 
    		return null;}}/>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}
 
export default App;
