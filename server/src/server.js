import app from './app.js';
import { env } from './config/env.js';
import { connectDatabase } from './config/db.js';

try {
  await connectDatabase();
  app.listen(env.port, () => console.log(`API listening on http://localhost:${env.port}`));
} catch (error) {
  console.error('Unable to start server: MongoDB is unavailable.', error.message);
  process.exitCode = 1;
}
