import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./mainPages/Home";
import PageOne from "./mainPages/PageOne";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/page1" component={PageOne} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
