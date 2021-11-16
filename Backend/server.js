// const express = require('express');
// const mongoose = require("mongoose");
// const Router = require("./routes")
// // const bodyParser = require("body-parser");
// // const cors = require("cors");
// // const { Router } = require('express');
// // const dotenv = require("dotenv");
// const app = express();
// // require("dotenv").config();

// const PORT = process.env.PORT || 8070; //logical OR

// // app.use(cors());
// app.use(express.json());
// // app.use(express.urlencoded({
// //   extended: true
// // }));

// // const URL = process.env.MONGODB_URL;
// const username = "uvlakshan";
// const password = "Udara96";
// const cluster = "cluster1.3kml7";
// const dbname = "myFirstDatabase";

// mongoose.connect(
//   `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`, 
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );
// // mongoose.connect(URL,{
// //     useCreateIndex: true,
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //     useFindAndModify: false
// // });
// // const connection = mongoose.connection;
// // connection.once("open", () => {
// //     console.log("Mongodb connection success");
// // })
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });
// app.use(Router);
// app.listen(PORT, () => {
//     console.log(`Server is up and running on port ${PORT}`);
// })

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = `mongodb+srv://uvlakshan:Udara@cluster1.3kml7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const PORT = 8070; //logical OR
app.listen(PORT, () => {
        console.log(`Server is up and running on port ${PORT}`);
    })