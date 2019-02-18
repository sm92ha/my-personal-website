import React, { Component } from "react";
import EnglishPage from "../EngishPage";
import PersianPage from "../PersianPage"
import {BrowserRouter , Switch ,Route} from "react-router-dom"

class App extends Component {
  render() {
    return (
     <div>
       <BrowserRouter>
         <Switch>
           <Route exact path="/" component={EnglishPage}/>
           <Route exact path="/Fa" component={PersianPage}/>
           
         </Switch>
        
       </BrowserRouter>
     </div>
    );
  }
}

export default App;
