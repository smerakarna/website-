// express.ts

import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path'
// Load environment variables from .env file
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(process.env.PORT || '4000', 10);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname,"./index.html"))
});
app.get('/register', (req: Request, res: Response) => {
  res.sendFile(path.resolve(__dirname,'./register.html'));
});
app.post('/register', (req: Request, res: Response) => {
  console.log(req.body)
});
// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
