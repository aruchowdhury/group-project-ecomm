import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar/Navbar";

///
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Navbar />
          </div>
          <LandingPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
