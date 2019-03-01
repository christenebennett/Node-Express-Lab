const express = require('express');

const router = express.Router();

const Posts = require('../data/db')

router.get('/', async (req, res) => {
  try {
    const posts = await Posts.find(req.query);
    res.status(201).json(posts);
  } catch (error) {
    res.status(500).json({error: "The posts information could not be retrieved."})
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Posts.findById(id);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({message: "The post with the specified ID does not exist."})
  }
})

router.post('/', async (req, res) => {
  try {
    const newPost = req.body;
    if (newPost.title && newPost.contents) {
      const post = await Posts.insert(newPost);
      res.status(201).json({post});
    } else {
      res.status(400).json({errorMessage: "Please provide title and contents for the post."})
    }
  } catch (error) {
    res.status(500).json({error: "There was an error while saving the post to the database"})
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const posts = await Posts.remove(id);
    if (posts > 0) {
      res.status(200).json({posts})
    } else {
      res.status(404).json({message: "The post with the specified ID does not exist."})
    }
    
  } catch (error) {
    res.status(500).json({error: "The post could not be removed"})
  }
})

module.exports = router;