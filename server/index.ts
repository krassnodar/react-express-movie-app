import express, { Express } from "express";
import { router } from './controllers';
import cors from 'cors';

const app: Express = express();
app.use(cors());
app.use('/api', router);

const bootstrapApp = async () => {
  try {
    await app.listen(process.env.PORT || 3002, () => {
      console.log('app is active')
    })
  } catch(err) {
    console.log(err);
  }
};

bootstrapApp();