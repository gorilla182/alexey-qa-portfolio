import express from 'express';
import {
  education,
  footer,
  highlight,
  jobs,
  memes,
  profile,
  progress,
  skills,
  stats,
} from '../src/data/portfolio.js';

export function createApp() {
  const app = express();

  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', service: 'alexey-qa-portfolio-api' });
  });

  app.get('/api/portfolio', (_req, res) => {
    res.json({
      profile,
      highlight,
      stats,
      progress,
      jobs,
      skills,
      memes,
      education,
      footer,
    });
  });

  app.get('/api/profile', (_req, res) => {
    res.json(profile);
  });

  app.get('/api/stats', (_req, res) => {
    res.json(stats);
  });

  app.get('/api/progress', (_req, res) => {
    res.json(progress);
  });

  app.get('/api/jobs', (_req, res) => {
    res.json(jobs);
  });

  app.get('/api/skills', (_req, res) => {
    res.json(skills);
  });

  app.get('/api/memes', (_req, res) => {
    res.json(memes);
  });

  app.use((_req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return app;
}
