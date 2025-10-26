/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import GlobalErrorHandler from './app/Middleware/globalErrorhandller';
import NotFoundHandler from './app/Middleware/NotFound';
import route from './app/Routes';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1',route);


const getAController = (req: Request, res: Response) => {
  res.send("server");
};

app.get('/', getAController);

// global error handler
app.use(GlobalErrorHandler)
app.use(NotFoundHandler)



export default app;
