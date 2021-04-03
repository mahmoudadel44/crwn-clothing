import { Route, Switch } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage.component";
const HatsPage = (props) => {
  console.log(props);
  return <h1>Hats</h1>;
};
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
    </Switch>
  );
};

export default App;
