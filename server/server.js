import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import colors from 'colors';
import connectDatabase from './config/database.js';
import usersRoutes from './routes/userRoutes.js';
import videoRoutes from './routes/videoRoutes.js';
import blogpostRoutes from './routes/blogpostRoutes.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';

// start
connectDatabase();
dotenv.config();
const app = express();
app.use(express.json());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// demo route
app.get('/', (req, res) => {
  res.send('working fine');
});
//main routes

app.use('/api/users', usersRoutes);
app.use('/api/videos', videoRoutes);
app.use('/api/post', blogpostRoutes);
app.use(notFound);
app.use(errorHandler);

const PORT = 8000 || process.env.PORT;
app.listen(PORT, console.log('server running on port 8000'));
