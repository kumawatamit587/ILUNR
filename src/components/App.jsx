import React from "react";
import Home from "./Home";
import Logintab from "./Logintab"
import Loginpage from "./Loginpage";
import Loged from "./Loged";
import Error from "./Error";
import {Route,Switch} from "react-router-dom";

function App() {

  return (
    <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/logintab" component={Logintab} />
               <Route exact path="/loginpage" component={Loginpage} />
               <Route exact path="/loged" component={Loged} />
               <Route component={Error} />
           </Switch>
  );
}

export default App;
