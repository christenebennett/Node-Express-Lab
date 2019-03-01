import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import PostCard from './components/PostCard';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount(){
    axios
      .get('http://localhost:9090/api/posts/')
      .then(res => this.setState({posts: res.data}))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Posts</h1>
          <div className="posts-list">
            {this.state.posts.map(post => (
              <PostCard 
                title={post.title}
                contents={post.contents}
              />
              ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
