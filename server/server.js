import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

const app = express();
const PORT = process.env.PORT || 5000
//middlewares
app.use(express.json())
app.use(cors())


//routes
app.get('/', (req, res) => {
    res.send('Hello from server')
})  

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})