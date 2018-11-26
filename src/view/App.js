import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

import { Header } from "./Header"
import { HomePage } from "./HomePage"
import { SinglePostTitle } from "./SinglePostTitle"
import { Authors } from "./Authors"
import { SingleAuthor } from "./SingleAuthor"
import { About } from "./About"
import { Footer } from "./Footer"

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route path="/Authors/SingleAuthor" component={SingleAuthor} />
          <Route path="/Authors" component={Authors} />
          <Route path="/About" component={About} />
          <Route path="/Home/SinglePostTitle" component={SinglePostTitle} />
          <Route path="/" component={HomePage} />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
