const express = require('express');
const cors = require('cors');

const PostsRouter = require('./posts/posts-router');

const server = express();

server.use(express.json());
server.use(cors());
server.use('/api/posts', PostsRouter);

server.get('/', (req, res) => {
  console.log('query', req.query)
  res.send(`
    <h1>Posts</h1>
  `)
})







module.exports = server;