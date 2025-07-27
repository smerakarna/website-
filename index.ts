// express.ts

import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '3000', 10);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express with TypeScript!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});