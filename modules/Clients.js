import mongoose from 'mongoose';

const Clients = new mongoose.Schema({
    fullname: { type: String },
    phone: { type: String },
    email: { type: String },
})

export default mongoose.model('Clients', Clients)