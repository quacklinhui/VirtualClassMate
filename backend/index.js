import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app = express();

app.use(express.json({limit: "30mb", extended: true}));
app.use(express.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://virtualclassmate:virtualclassmate@cluster.dnmqc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
