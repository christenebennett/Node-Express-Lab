const express = require('express');

const PORT = 9090;

const server = express();

const Posts = require('./data/db');


server.use(express.json());

server.get('/', (req, res) => {
  res.send(
    `<h1>Posts</h1>`
  )
})

server.get('/api/posts', async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(200).json(posts)
  } catch (error) {
    res.status(500).json({error: "The posts information could not be retrieved."})
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port:${9090}`)
})