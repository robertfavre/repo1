import logo from "./logo.svg";
import "./App.css";
import React from 'react';
import axios from "axios";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn el React
        </a>
        <PostList />
      </header>
    </div>
  );
}
export default App;

class PostList extends React.Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      const posts = res.data;
      console.log(posts);
      this.setState({ posts });
    });
  }

  render() {
    return (
      <ul>
        {this.state.posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    );
  }
}
