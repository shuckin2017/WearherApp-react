import mongoose from 'mongoose';

const Clients = new mongoose.Schema({
    fullname: { type: String },
    phone: { type: String },
    email: { type: String, required: true},
})

export default mongoose.model('Clients', Clients)