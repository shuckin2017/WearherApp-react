import mongoose from 'mongoose'

const Clients = new mongoose.Schema({
    fullname: {type: String, required: true },
    phone: {type: String, required: true },
    email: {type: String, required: true },
})

export default mongoose.model('Clients', Clients)