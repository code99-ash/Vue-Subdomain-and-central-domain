const mongoose = require('mongoose');

const MsgSchema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
    message: {
        type: String, required: true
    },
}, { timestamps: true });

const ForumSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    thumbnail: { type: String, required: false },
    users: [{ 
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: MsgSchema, required: true
    }]
}, { timestamps: true })

const Forum = mongoose.model('Forum', ForumSchema,null, { overwriteModels: true })
export default Forum