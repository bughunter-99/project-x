import asyncHandler from 'express-async-handler';
import Post from '../models/blogpostModel.js';

//@desc create a post
//@route POST /api/post/create
//@access PRIVATE admin protected

const createPost = asyncHandler(async (req, res) => {
  const {
    postTitle,
    postDescription,
    postContent,
    bannerImageUrl,
    postThumbnail,
  } = req.body;

  const post = new Post({
    postTitle,
    postDescription,
    postContent,
    bannerImageUrl,
    postThumbnail,
  });

  const createdPost = await post.save();
  res.status(201).json(createdPost);
});

//@desc get all post
//@route GET /api/post
//@access PUBLIC

const getAllPost = asyncHandler(async (req, res) => {
  const posts = await Post.find({});
  res.status(200).json(posts);
});

//@desc get post by id
//@route GET /api/post/:id
//@access PUBLIC

const getPostById = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (post) {
    res.status(200).json(post);
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

export { createPost, getAllPost, getPostById };
