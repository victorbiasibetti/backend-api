const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors());

app.get('/', (request, response) => {
  response.status(200).send({
    msg: 'hello world'
  })
})


app.listen(process.env.PORT || 4000, () => console.log('server on'));