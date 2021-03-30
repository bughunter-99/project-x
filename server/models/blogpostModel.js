import mongoose from 'mongoose';

const blogpostSchema = mongoose.Schema(
  {
    bannerImageUrl: {
      type: String,
      required: true,
      default: 'https://i.imgur.com/y9xUW3K.png',
    },
    postTitle: {
      type: String,
      required: true,
    },
    postDescription: {
      type: String,
      required: true,
    },
    postContent: {
      type: String,
      required: true,
    },
    postThumbnail: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model('Post', blogpostSchema);

export default Post;
