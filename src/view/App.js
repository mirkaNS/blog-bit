import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { SinglePostPage } from "./SinglePostPage";
import { Authors } from "./Authors";
import { SingleAuthor } from "./SingleAuthor";
import { About } from "./About";
import { Footer } from "./Footer";
import { NewPostPage } from './NewPostPage';


class App extends Component {


  render() {
    return (
      <Fragment >
        <Header />
        <div className="container style">
          <Switch >
            <Route path="/home/new" component={NewPostPage} />
            <Route path="/authors/:id" component={SingleAuthor} />
            <Route path="/authors" component={Authors} />
            <Route path="/about" component={About} />
            <Route path="/home/singlePostPage" component={SinglePostPage} />
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
