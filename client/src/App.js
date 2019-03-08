import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import PostCard from './components/PostCard';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      newPost: {
        title: '',
        contents: ''
      }
    }
  }
  componentDidMount(){
    axios
      .get('http://localhost:9090/api/posts')
      .then(res => this.setState({posts: res.data}))
      .catch(err => console.log(err))
  }

  onInputChange = event => {
    this.setState({
      newPost: {
        ...this.state.newPost,
        [event.target.name]: event.target.value
      }
    })
  }

  onClickAdd(event) {
    event.preventDefault();
    this.addPost(this.state.newPost)
    this.setState({
      newPost: {
        title: '',
        contents: ''
      }
    })
  }

  addPost(newPost) {
    axios
      .post('http://localhost:9090/api/posts', newPost)
      .then(res => this.setState({newPost}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Posts</h1>
          {/* <div>
            <h3>Add Post</h3>
            <form>
              <input type="text" placeholder="Title" name="title" value={this.state.newPost.title} onChange={this.onInputChange}/>
              <input type="text" placeholder="Contents" name="contents" value={this.state.newPost.contents} onChange={this.onInputChange}/>
              <button onClick={this.onClickAdd}>Add Post</button>
            </form>
          </div> */}
          <div className="posts-list">
            
              {this.state.posts.map(post => (
                  <PostCard 
                    key={post.id}
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
