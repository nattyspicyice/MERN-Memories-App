import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';

//imported router from posts.js
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

//Express Middleware to connect router application
app.use('/posts', postRoutes)

//MONGODB SETUP - Start//

const CONNECTION_URL = 'mongodb+srv://nattyspickle:nattyspickle@sei.ssf6lll.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8000;

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)) ) //notifies us that the database has been successfully connected
    .catch((error) => console.log(error.message)) //notifies us of error in case the connection to the database is unsuccessful

// mongoose.set('useFindAndModify', false);--> Deprecated now, AKA no longer necessary, using this instead:
mongoose.connect(CONNECTION_URL).then(()=>{console.log('Connected to Mongo')})

