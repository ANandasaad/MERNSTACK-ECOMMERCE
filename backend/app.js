const express =require("express");
const app =express();

const errorMiddleware =require("./middleware/error");

app.use(express.json())

// Route Imports
const user=require("./routes/userRoute");
const product= require("./routes/productRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);



// Middldeware for error

app.use(errorMiddleware);

module.exports=app