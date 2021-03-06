import React, { useEffect, useState } from "react";
//import SearchBar from "./components/Searchbar";
import youtube from "./apis/youtube";
//import VideoList from "./components/VideoList";
//import VideoDetail from "./components/VideoDetail";
//import Axios from "axios";
import Container from "@material-ui/core/Container";
//import Chat from './components/Chat/Chat';
import Join from "./components/Join/Join";
import Room from "./components/Room/Room";
import Login from "./components/Login/Login";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };
  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      },
    });

    this.setState({
      videos: response.data.items,
    });
    console.log("this is resp", response);
  };
  handleVideoSelect = (video) => {
    console.log("selected video");
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <Container maxWidth="100%">
        <Router>
          {/* <Route path="/" exact component={Join} /> */}
          <Route path="/" exact component={Login} />
          <Route path="/room" component={Room} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/home" component={Home} />
          <Route path="/search" component={Search} />
        </Router>
      </Container>
    );
  }
}

export default App;
