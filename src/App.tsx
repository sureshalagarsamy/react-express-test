import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Route,
	Link
  } from 'react-router-dom';

  import Home from './components/Home';
  import About from './components/About';

interface IProps {}
interface IState { 
	name: string;
}
class App extends Component<IProps, IState> {
	constructor(props: IProps, context: IState) {
		super(props, context);
		this.state = {
			name : 'ABCD'
		}
	}
	render(){
		return(
			<div>
				<Router>
        <div>
          <ul>
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/about"> About </Link>
            </li>
          </ul>
		  <Route exact path='/' component={Home}></Route>
		  <Route exact path='/about' component={About}></Route>
        </div>
      </Router>
			</div>
		);
	}
}

export default App;
