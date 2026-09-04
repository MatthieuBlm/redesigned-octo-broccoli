import mongoose from 'mongoose';
import { resourceModels } from '../models/resources.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const seedData = {
  users: [
    { name: 'Alex Morgan', username: 'alexm', email: 'alex.morgan@mergington.edu', team: 'Trailblazers' },
    { name: 'Jordan Lee', username: 'jordanl', email: 'jordan.lee@mergington.edu', team: 'Trailblazers' },
    { name: 'Taylor Kim', username: 'taylork', email: 'taylor.kim@mergington.edu', team: 'Pace Makers' },
    { name: 'Riley Chen', username: 'rileyc', email: 'riley.chen@mergington.edu', team: 'Pace Makers' },
  ],
  teams: [
    { name: 'Trailblazers', description: 'Miles, momentum, and steady progress.' },
    { name: 'Pace Makers', description: 'A balanced team focused on consistency.' },
  ],
  activities: [
    { username: 'alexm', activity: 'Running', duration: 35, points: 70, date: new Date('2026-09-01T16:30:00Z') },
    { username: 'jordanl', activity: 'Strength training', duration: 25, points: 50, date: new Date('2026-09-02T17:00:00Z') },
    { username: 'taylork', activity: 'Walking', duration: 45, points: 45, date: new Date('2026-09-02T15:30:00Z') },
    { username: 'rileyc', activity: 'Running', duration: 28, points: 56, date: new Date('2026-09-03T16:00:00Z') },
  ],
  leaderboard: [
    { username: 'alexm', team: 'Trailblazers', score: 320 },
    { username: 'rileyc', team: 'Pace Makers', score: 285 },
    { username: 'jordanl', team: 'Trailblazers', score: 240 },
    { username: 'taylork', team: 'Pace Makers', score: 210 },
  ],
  workouts: [
    { name: 'Starter Run', description: 'Build endurance with an easy interval run.', difficulty: 'Beginner', duration: 20 },
    { name: 'Full Body Circuit', description: 'A balanced strength circuit using bodyweight movements.', difficulty: 'Intermediate', duration: 25 },
    { name: 'Recovery Walk', description: 'A relaxed walk to stay active between harder sessions.', difficulty: 'Beginner', duration: 30 },
  ],
};

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    for (const [resourceName, records] of Object.entries(seedData)) {
      const Resource = resourceModels[resourceName as keyof typeof resourceModels];
      await Resource.deleteMany({});
      await Resource.insertMany(records);
      console.log(`Seeded ${records.length} ${resourceName} records`);
    }

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
