import React, { Component } from "react";
import EnglishPage from "../EngishPage";
import PersianPage from "../PersianPage";
import Main from "../Main";
import { BrowserRouter, Switch, Route } from "react-router-dom"

class App extends Component {
  state = { location: null }
  findLocation() {
    const xhttp = new XMLHttpRequest();
    let data;
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        data = JSON.parse(xhttp.responseText);
        //this.setState({location:JSON.parse(xhttp.responseText)})
      }
    };
    xhttp.open("GET", "https://ipapi.co/json/", false);
    xhttp.send();
    //console.log(data)
    return data;
  }

  setLocation() {
    const data = this.findLocation();
   this.setState({ location: data })
  }

  componentWillMount = () => {
    this.setLocation();
  }


  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" 
            render={()=><Main location={this.state.location} />} 
            
            />
            <Route exact path="/En" 
            component={EnglishPage} 
            
            />
            <Route exact path="/Fa" 
            component={PersianPage} 
            
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
