const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
 const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
 app.use("/books", router); // localhost:5000/books
// app.use("/",(req,res,next)=>{
//     res.send("this is page");
// });
mongoose
  .connect(
    "mongodb+srv://manaswigurram18:manu@cluster0.w1xnwda.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));