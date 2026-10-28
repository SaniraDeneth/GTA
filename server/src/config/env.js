import 'dotenv/config';

export const env = {
  port: Number(process.env.PORT || 5000),
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/buildathon',
  sessionSecret: process.env.SESSION_SECRET || 'local-development-only-change-me',
  clientOrigin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
};
