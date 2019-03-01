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



module.exports = router;