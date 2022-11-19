const express = require('express');
const mongoose = require('mongoose');
import {newMessage} from './controllers/ChatsCtrl.js'
import ssRo from './routes'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/', ssRo.router)
app.get('/message', (...params) => newMessage(...params))

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