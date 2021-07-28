import express from 'express';
import mogoose from 'mongoose';
import Clients from './modules/Clients.js';

const PORT = process.env.PORT || 5000;
const DB_URL = 'mongodb+srv://admin:SestO910@cluster0.tzp5i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const app = express();

app.get('/', async (req, res) => {
    const { fullname, phone, email } = req.body;
    const clients = await Clients.create({fullname, phone, email});
    res.status(200).json(`Server started on port ${PORT}...`)
})

async function startApp(){
    try {
        await  mogoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.info(`Server started on port ${PORT}...`));
    } catch (e) {
        console.log(e);
    }
}

startApp();



