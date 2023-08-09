const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = process.env.PORT || 5000;


// routes
const userRoute = require("./routes/user.js")
const authRoute = require("./routes/auth.js")
const messagesRoute = require("routes/messages.js")
const notificationRoute = require("routes/notifitactions.js")
const postRoute = require("routes/posts.js")

dotenv.config()

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors())


app.use("/api/posts", postRoute)
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/messages", messagesRoute)
app.use("/api/notification", notificationRoute)


app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);