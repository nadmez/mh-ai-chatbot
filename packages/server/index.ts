import express, { type Request, type Response } from 'express';
import dotenv from 'dotenv';
const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
   res.send(process.env.OPENAI_API_KEY);
});

app.get('/api/hello', (req: Request, res: Response) => {
   res.json({ message: 'Hello from the server!' });
});

app.listen(port, () => {
   console.log(`Server listening at http://localhost:${port}`);
});
