import express from 'express';
import simpleProducer from './producers/SampleProducer';
import { simpleWorker } from './Workers';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript Backend!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

simpleProducer(
  "SampleJob",
  {
    name: "yeshwanth",
    village: "Machinonipally"
  }
)
simpleWorker("SampleQueue")