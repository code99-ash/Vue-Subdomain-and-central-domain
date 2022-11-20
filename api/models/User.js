const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    avatar: { type: String, required: false },
    role: { 
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
})

const User = mongoose.model('User', UserSchema, null, { overwriteModels: true });
export default User