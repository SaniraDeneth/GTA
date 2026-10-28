# Architecture

This is a small npm-workspaces monorepo for one Buildathon event. The React/Vite client communicates with the Express API through Axios. Express owns session-based authentication, validation, and feature routes; MongoDB/Mongoose owns the five shared collections described in `DATABASE.md`.

The starter keeps route declarations separate from controllers and services so each feature can be implemented without restructuring the project. `GET /api/health` is the only completed API endpoint. All other mounted routes return `501 Not Implemented` until their owner implements them.

No multi-event abstraction, judging collection, announcement collection, payment gateway, Redux store, TypeScript, Docker, or server-rendering framework is part of this foundation.
