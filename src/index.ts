import 'module-alias/register'
import express from "express";
import helmet from 'helmet';
import { connect, set } from 'mongoose'
import "reflect-metadata";
import bodyParser from "body-parser";
const cors = require('cors')
const admin = require("firebase-admin");

import {MONGODB_URI, PORT} from "@/application/config/environment";
import { UserRoutes } from './infrastructure/entry-points/api';
const serviceAccount = require("../firebase-serviceaccount.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
async function managerConnectionMongo (): Promise<void> {
  set('strictQuery', true)
  await connect(MONGODB_URI)
}

async function init(): Promise<void> {
 await managerConnectionMongo().then(() =>
    console.log("Connection successfully to database of Mongo: " + MONGODB_URI)
  )
  const app = express();

  app.use(
      cors({
          origin: "*"
      })
  );

   app.use(helmet());
   app.use(bodyParser.urlencoded({ extended: false }));
   app.use(bodyParser.json());
   const userRoutes = new UserRoutes()
   app.use(userRoutes.userRoutes())
   await app.listen(PORT, () => console.log('Running on port: ' + PORT))
}

void init().catch((err) => console.log(err));
