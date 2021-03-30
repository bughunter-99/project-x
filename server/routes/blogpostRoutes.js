import express from 'express';
import { protect, adminProtect } from '../middleware/authMiddleware.js';
import {
  createPost,
  getAllPost,
  getPostById,
} from '../controllers/blogpostController.js';

const router = express.Router();

router.route('/create').post(createPost, protect, adminProtect);
router.route('/').get(getAllPost);
router.route('/:id').get(getPostById);

export default router;
