import React from "react";
import { BrowserRouter , Route , Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route to="/" component={Dashboard}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;