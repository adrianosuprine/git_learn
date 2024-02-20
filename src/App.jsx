// import React from "react";
import { Route, Switch } from "react-router-dom";
// import NavBar from "./NavBar";
import Home from "./Components/HomePage";
import Actors from "./Components/Actors";
import Directors from "./Components/Directors";
import Movies from "./Components/MoviesPage";
import NavBar from "./Components/NavBar";

function App() {
  return <div>{/*{code here}*/}
   
      <NavBar />
      <Switch>
        <Route path="/actors">
          <Actors />
        </Route>
        <Route path="/directors">
          <Directors />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
   
  
  </div>;
}

export default App;
