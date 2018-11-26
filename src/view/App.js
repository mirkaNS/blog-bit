import React, { Component, Fragment } from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { fetchUserData, fetchPostData } from "../services/UserService"

import { Header } from "./Header";
import { HomePage } from "./HomePage";
import { SinglePostPage } from "./SinglePostPage";
import { Authors } from "./Authors";
import { SingleAuthor } from "./SingleAuthor";
import { About } from "./About";
import { Footer } from "./Footer";
import { NewPostPage } from './NewPostPage';

import { User } from "../entities/User"
import { Post } from "../entities/Post"


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {

      postArray: [],
      userArray: []

    }
  }

  componentDidMount() {
    // fetchUserData()
    //   .then((response) => {
    //     return response
    //   });

    fetchPostData()
      .then((response) => {

        const postArray = response.map((user) => {
          return new Post(user.id, user.userId, user.body, user.title);
        })
        console.log(postArray)
        return postArray;
      });

  }


  render() {
    return (
      <Fragment >
        <Header />
        <div className="container">
          <Switch >
            <Route path="/home/new" component={NewPostPage} />
            <Route path="/authors/singleAuthor" component={SingleAuthor} />
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
