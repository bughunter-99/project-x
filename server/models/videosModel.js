import mongoose from 'mongoose';

const videoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    videoUrl: {
      type: String,
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
      default:
        'https://export-download.canva.com/v4IsM/DAEZqAv4IsM/3/0/0001-18770304715.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20210323%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20210323T152313Z&X-Amz-Expires=69737&X-Amz-Signature=99cd6543378cccb1c63a2c63ed91acd8dc6c1e8741bfb571c3e6dd6fdc3ff444&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27Blue%2520and%2520White%2520Calm%2520Education%2520YouTube%2520Thumbnail.png&response-expires=Wed%2C%2024%20Mar%202021%2010%3A45%3A30%20GMT',
    },
  },
  { timestamps: true }
);

const Video = mongoose.model('Video', videoSchema);

export default Video;
