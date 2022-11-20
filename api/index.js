const express = require('express');
const mongoose = require('mongoose');

import forumCtrl from './controllers/ForumController';
import AuthCtrl from './controllers/AuthController';
import {newMessage} from './controllers/ChatsCtrl.js'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/message', (...params) => newMessage(...params))

app.get('/forums', (...params) => forumCtrl.getForums(...params))
app.post('/forums/join', (...params) => forumCtrl.joinForum(...params))

app.post('/auth/login', (...params) => AuthCtrl.login(...params))
app.post('/auth/register', (...params) => AuthCtrl.register(...params))
app.post('/auth/user', (...params) => AuthCtrl.user(...params))

mongoose.connect(
    process.env.DB_CONNECT, 
    {useNewUrlParser: true,useUnifiedTopology: true},
    (err) => {
        if(err)
            console.log('Failed to connect to the server, restarting the server will be recommended', err)
        else
        console.log('Connected to db')
    }
);


export default {
    path: '/api',
    handler: app
}