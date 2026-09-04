import express from 'express';
import './config/database.js';
import { createResourceRouter } from './routes/resource.js';

const app = express();
const port = 8000;
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : `http://localhost:${port}`;

app.use(express.json());

app.use('/api/users', createResourceRouter('users'));
app.use('/api/teams', createResourceRouter('teams'));
app.use('/api/activities', createResourceRouter('activities'));
app.use('/api/leaderboard', createResourceRouter('leaderboard'));
app.use('/api/workouts', createResourceRouter('workouts'));

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api', baseUrl });
});

app.listen(port, () => {
  console.log(`OctoFit Tracker API listening at ${baseUrl}`);
});
