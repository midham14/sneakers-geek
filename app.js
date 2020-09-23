const express = require('express')
const routes = require('./routes')
const app = express()
const PORT = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use('/', routes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})