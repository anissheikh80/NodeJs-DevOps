import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World V3 deploy using github actions and aws ecs');
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Server is OK',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});