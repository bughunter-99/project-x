import asyncHandler from 'express-async-handler';
import Video from '../models/videosModel.js';

//@desc create a video post
//@route POST /api/videos/create
//@access PRIVATE admin protected

const createVideo = asyncHandler(async (req, res) => {
  const { title, description, videoUrl } = req.body;

  const video = new Video({
    title,
    description,
    videoUrl,
  });
  const createdVideo = await video.save();
  res.status(201).json(createdVideo);
});

//@desc fetch all video post
//@route GET /api/videos
//@access PUBLIC

const getVideos = asyncHandler(async (req, res) => {
  const videos = await Video.find({});
  res.status(200).json(videos);
});

//@desc get video by id
//@route GET /api/video/:id
//@access PUBLIC

const getVideoById = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);
  if (video) {
    res.status(200).json(video);
  } else {
    res.status(404);
    throw new Error('Video not found');
  }
});

//@desc delete a video post
//@route DELETE /api/video/delete
//@access PRIVATE admin protected

const deleteVideo = asyncHandler(async (req, res) => {
  const video = await Video.findById(req.params.id);

  if (video) {
    video.remove();
    res.json({ message: 'Video deleted successfully' });
  } else {
    res.status(404);
    throw new Error('Video not found');
  }
});

export { createVideo, getVideos, deleteVideo, getVideoById };
