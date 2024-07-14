// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");
// require('dotenv').config();
// const cors = require("cors");
// const Registration = require('./models/Data');
// const userRoute = require("./routes/userRoute")
// const errorHandler = require('./controllers/errroMiddleware')

// const app = express();

// const PORT = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({extended:false})); 

// //Routes
// app.use("/api/users", userRoute);

// app.use(errorHandler);

// // Connect to DB and start server
// mongoose.connect(process.env.MONGO_URI,)
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server Running on Port ${PORT}`);
//     });
//     console.log('Connected to MongoDB');
//   })
//   .catch(err => {
//     console.error('Failed to connect to MongoDB', err);
//   });

// // Define a simple route


const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();
const cors = require("cors");
const Registration = require('./models/Data');
const userRoute = require("./routes/userRoute")
const errorHandler = require('./controllers/errroMiddleware')

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
const corsOptions = {
  origin: 'https://your-frontend-domain.vercel.app', // Replace with your Vercel frontend domain
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRoute);

app.use(errorHandler);

// Connect to DB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port ${PORT}`);
    });
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });
