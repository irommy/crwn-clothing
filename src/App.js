// import reactDom from 'react-dom';
import "./App.css";
import HomePage from "./pages/homepage/homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/shop";
import Header from "./components/header/Header";
import SignInAndSignUp from "./pages/signIn&signUp/signIn&signUp";
import { auth } from "./firebase/firebase";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser= {this.state.currentUser } />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/SignIn" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
