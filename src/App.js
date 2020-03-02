import React from "react";
import { hashRouter ,Route} from "react-router-dom";
improt About from "./routes/About";

function App(){
  return <HashRouter>
    <Route path="/about" component={About} />
  </HashRouter>

}

export default App;