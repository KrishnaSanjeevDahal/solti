const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.use(express.static('public/css/'));
const blogRoutes = require('./routes/blogRoute');
const authRoutes = require('./routes/authRoute');

app.use("",blogRoutes);
app.use("",authRoutes);

app.listen(3000,()=>{
    console.log("Server is running on port no 3000");
});