const express = require('express')
const app = express()

// settings
app.set('port', process.env.PORT || 3000)
app.set('json spaces', 2)

// middlewares
app.use(express.json())

// routes
app.use('/', require('./routes/words'))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`)
})