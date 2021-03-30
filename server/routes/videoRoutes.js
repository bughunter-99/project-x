import express from 'express';
import {
  createVideo,
  getVideos,
  deleteVideo,
  getVideoById,
} from '../controllers/videoController.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/create').post(createVideo, protect, adminProtect);
router.route('/delete/:id').delete(deleteVideo, protect, adminProtect);
router.route('/').get(getVideos);
router.route('/:id').get(getVideoById);

export default router;
