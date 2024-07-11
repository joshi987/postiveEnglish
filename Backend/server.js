 require('dotenv').config();
import express, { json, urlencoded } from "express";
import { connect } from "mongoose";
import { json as _json } from "body-parser";
import cors from "cors";
import Registration from './models/Data';
import userRoute from "./routes/userRoute";
import errorHandler from './controllers/errroMiddleware';

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(_json());
app.use(cors());
app.use(json());
app.use(urlencoded({extended:false})); 

//Routes
app.use("/api/users", userRoute);

app.use(errorHandler);

// Connect to DB and start server
connect(process.env.MONGO_URI,)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Define a simple route
