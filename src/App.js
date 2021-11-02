import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Amplify
import Amplify from "aws-amplify";

// Pages


// Amplify Configurations
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


const App = () => {
  return (<div>

      <Router>
      <Switch>
      <Route exact path="/">
        Home
      </Route>
      <Route exact path="/categorias">
        Categorias
      </Route>
      <Route exact path="/productos">
       Productos
      </Route>
      <Route exact path="/producto:id">
        Categorias
      </Route>
      <Route exact path="/about">
        About
      </Route>
      <Route exact path="/about">
        About
      </Route>
      

     </Switch>
      </Router>
      
  
  
  
       </div>
    // <Router>
    //   <Header />
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/cart">
    //       <Cart />
    //     </Route>
    //     <Route path="/checkout">
    //       <Checkout />
    //     </Route>
    //     <Route exact path="/jollas">
    //       <Jollas />
    //     </Route>
    //     <Route
    //       path="/jollas/:id"
    //       children={<JollaDetails></JollaDetails>}>
    //     </Route>
    //     <Route path="/admin">
    //       <Admin />
    //     </Route>
    //     <Route path="*">
    //       <Error />
    //     </Route>
    //   </Switch>
    // </Router>
  )
}

export default App;
