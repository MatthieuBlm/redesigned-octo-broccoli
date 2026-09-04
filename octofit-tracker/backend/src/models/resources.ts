import { Schema, model } from 'mongoose';

const resourceSchema = new Schema(
  {
    name: { type: String, trim: true },
    username: { type: String, trim: true },
    email: { type: String, trim: true, lowercase: true },
    description: { type: String, trim: true },
    team: { type: String, trim: true },
    activity: { type: String, trim: true },
    points: { type: Number, min: 0 },
    score: { type: Number, min: 0 },
    duration: { type: Number, min: 0 },
    difficulty: { type: String, trim: true },
    date: { type: Date },
  },
  { timestamps: true, strict: false },
);

export const resourceModels = {
  users: model('User', resourceSchema),
  teams: model('Team', resourceSchema),
  activities: model('Activity', resourceSchema),
  leaderboard: model('LeaderboardEntry', resourceSchema, 'leaderboard'),
  workouts: model('Workout', resourceSchema),
};

export type ResourceName = keyof typeof resourceModels;