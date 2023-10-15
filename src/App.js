import "./App.css";
import Card from "./card";
import React, { Component } from "react";
import styles from "./main.module.css";
import loaderimg from "./loaderimg.gif";
import Top from "./topbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      api: [],
      loader: true
    };
  }

  componentDidMount() {
    fetch("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => response.json())
      .then((json) =>
        setTimeout(() => this.setState({ api: json, loader: false }), 200)
      );
  }

  render() {
    let cardArr = this.state.api.Search;
    console.log(this.state.loader);
    return (
      <>
        <Top></Top>
        <div className={styles.Main}>
          {this.state.loader ? (
            <img src={loaderimg} alt="" />
          ) : (
            <div className={styles.CardGrid}>
              {cardArr ? cardArr.map((item) => <Card props={item} />) : null}
            </div>
          )}
        </div>
      </>
    );
  }
}

export default App;
