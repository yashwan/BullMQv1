import express from 'express';
import router from './routes';
import logger from './logger';

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', router)

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});