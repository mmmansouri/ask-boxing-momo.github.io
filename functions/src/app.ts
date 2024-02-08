import express, {Request, Response} from "express";
import path from 'path';
import fs from 'fs';
import cors from 'cors';

const app = express();
//const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, ASK-BOXING BACK-END!');
});

// ...

app.get('/api/carousel-home-images', (req: Request, res: Response) => {
  const imagesDirectory = path.join(__dirname, './resources/home-carousel');
  const images = fs.readdirSync(imagesDirectory);
  res.json(images);
});

app.get('/api/carousel-women-images', (req: Request, res: Response) => {
  const imagesDirectory = path.join(__dirname, './resources/women-carousel');
  const images = fs.readdirSync(imagesDirectory);
  res.json(images);
});

// Start the server
/*
if (!process.env.FUNCTION_NAME) {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}
*/

export { app };
