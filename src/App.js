import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';


import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import Home from './Home.js';

import logo from './logo.svg';
//import { ReactComponent as BellIcon } from './icons/bell.svg';
import './App.css';

class App extends Component {
  render() {
    return (
		<BrowserRouter>

		  <div className="App">
			<div className = "navigation">
				<div className="navigation-sub">
					
					<Link to="/" className="item">Home</Link>
					<Link to="/articles" className="item">Articles</Link>
					<Link to="/about" className="item">About</Link>
					<Link to="/projects" className="item">Projects</Link>

				</div>
			</div>

			<Route exact path="/" component={Home} />
			<Route path="/articles" component={Articles} />
			<Route path="/projects" component={Projects} />
			<Route path="/about" component={About} />

		  </div>
		</BrowserRouter>
	);
  }
}

export default App;
