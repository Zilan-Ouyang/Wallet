import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
// import Dashboard from './pages/Dashboard';
// import WatchList from './pages/WatchList'
import Navbar from './components/Navigationbar';
// import CreateIpo from './pages/CreateIpo';
// import Research from './pages/Research';
// import Bid from './pages/Bid';
class App extends Component {
  render() {
    return (
      <div>
      <Router>
      <Navbar />
        <div>
          <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route path="/dashboard" component={Dashboard} /> */}
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;
