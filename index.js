import express from 'express';
import mongoose from 'mongoose';
import Clients from './modules/Clients.js';

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://admin:@cluster0.tzp5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const {fullname, phone, email} = req.body;
        const clients = await Clients.create({fullname, phone, email});
        res.json(clients);
    } catch (e) {
        res.status(500).json(e)
    }
})

async function startApp(){
    try {
        await  mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.info(`Server started on port ${PORT}...`));
    } catch (e) {
        console.log(e);
    }
}

startApp();



