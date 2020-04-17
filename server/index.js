const express = require('express')
const massive = require('massive')
require('dotenv').config()
const session = require('express-session')
const ctrl = require('./controller')
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false,
    },
}).then((dbInstance) => {
    app.set('db', dbInstance)
    console.log('db connected')
    app.listen(SERVER_PORT, () => {
        console.log(`Server listening on port ${SERVER_PORT}`)
    })
})