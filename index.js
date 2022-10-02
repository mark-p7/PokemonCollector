import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 5000
app.use(express.json());
// mongoose.connect(process.env.MONGO_URI)

app.listen(process.env.PORT || port, async () => {
    console.log(process.env.MONGO_URI);
    console.log("Server up");
});

