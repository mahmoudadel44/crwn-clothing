import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components//header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up-component";
import { auth } from "./firebase/firebase.utils";
const HatsPage = (props) => {
  console.log(props);
  return <h1>Hats</h1>;
};
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }
  unSubscribeFromAuth = null;
  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log("user", user);
    });
  }
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </>
    );
  }
}
export default App;
