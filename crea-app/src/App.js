import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom";

import Layout from './pages/Layout'
import Home from './pages/Home'
import Store from './pages/Store'

function App() {
  return (
    <div>
      <Layout />
      <p>Texto de prueba en App</p>
      <BrowserRouter>
            <Switch>
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Store" component={Store} />
            </Switch>
        </BrowserRouter>
    </div>
      
  );
} 

export default App;
