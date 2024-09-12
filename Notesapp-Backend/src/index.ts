import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import noteRoutes from './routes/noteRoutes';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api', noteRoutes);

mongoose.connect('mongodb://localhost:27017/notes', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
