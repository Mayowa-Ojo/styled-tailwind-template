import React from "react";
import { GlobalStyles } from "twin.macro";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import { Login } from "./containers";
import Store from "./store";

function App() {
   return (
      <Store>
         <Router>
            <GlobalStyles />

            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/login" exact component={Login} />
            </Switch>
         </Router>
      </Store>
   );
}

const Home = () => {

   return (
      <Redirect to="/login" />
   )
}

export default App;
