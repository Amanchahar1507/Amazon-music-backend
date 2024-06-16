import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import userRouter from "./src/routes/user_routes.js";
import cookieParser from "cookie-parser";
import podcastRouter from "./src/routes/podcast_routes.js";
import featuredRouter from "./src/routes/featured_routes.js";
import popularArtistRouter from "./src/routes/popularArtist_routes.js";
import libraryRouter from "./src/routes/library_routes.js";
import albumRouter from "./src/routes/album_routes.js";
import trendingPlaylistRouter from "./src/routes/trendingPlaylist_routes.js";

dotenv.config()

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

//ROUTES
app.use("/api/user", userRouter)
app.use("/api/podcast", podcastRouter)
app.use("/api/featured", featuredRouter);
app.use("/api/popular", popularArtistRouter);
app.use("/api/library", libraryRouter);
app.use("/api/album", albumRouter);
app.use("/api/trending", trendingPlaylistRouter);

app.get("/" , (req,res) => {
    res.status(200).send("welcome to home page");

})

let PORT = process.env.PORT || 8000;
console.log(process.env.MONGODB_URI)
app.listen(PORT , () =>{
    // console.log('hi');
    connectDB();
    console.log(`server is listening on port ${PORT}`);
})