const express = require('express')
const app = express()
const port = 2000
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('¯\_(ツ)_/¯ Lesson 19 Server (Back-end)')
})

app.get('/api/product', (req, res) => {
  res.json({
    name: "Омлет по-итальянски ¯\_(ツ)_/¯",
    description: "Вкусный омлет на завтрак."
  })
})

app.listen(port, () => {
  console.log(`Lesson 19 http://localhost:${port}`)
})