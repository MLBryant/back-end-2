const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

const {getHouses, createHouse, updateHouse, deleteHouse} = require('./controller.js')

app.get(`/api/houses`, getHouses);
app.post(`/api/houses`, createHouse);
app.put(`/api/houses/:id`, updateHouse);
app.delete(`/api/houses/:id`, deleteHouse);

app.listen(4050, () => console.log('Server is running on 4050'))
