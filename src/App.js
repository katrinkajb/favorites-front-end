import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import PrivateRoute from './components/PrivateRoute.js';
import Header from './components/Header.js';
import HomePage from './HomePage/HomePage.js';
import SignUpPage from './AuthPages/SignUpPage.js';
import LoginPage from './AuthPages/LoginPage.js';
import Search from './SearchPage/SearchPage.js';
import Favorites from './FavoritesPage/FavoritesPage.js';

export default class App extends Component {
  

  render() {
    // const { user } = this.state;
    return (
      <div className="App">
        <Router>
          <Header 
            // user={this.state.user}
            // handleLogout={this.handleLogout}
          />
            <Switch>
              <Route 
                path="/" 
                exact
                render={(routerProps) => <HomePage {...routerProps} />} 
              />
              <Route 
                path="/signup" 
                exact
                render={(routerProps) => <SignUpPage 
                  // handleUserChange={this.handleUserChange}
                  {...routerProps} />} 
              />
              <Route 
                path="/login" 
                exact
                render={(routerProps) => <LoginPage 
                  // handleUserChange={this.handleUserChange}
                  {...routerProps} />} 
              />
              <Route 
                path="/search" 
                exact
                // token={user && user.token}
                render={(routerProps) => <Search {...routerProps} />} 
              />
              <Route 
                path="/favorites" 
                exact
                // token={user && user.token}
                render={(routerProps) => <Favorites {...routerProps} />} 
              />
            </Switch>
          </Router>
      </div>
    );
  }
}