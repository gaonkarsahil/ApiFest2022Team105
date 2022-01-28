
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const movieRoute = require('./routes/movies')

dotenv.config()


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true, 
  })
  .then(() =>console.log('DB connection success'))
  .catch((err) => console.log(err, 'For error connecting to DB'))

  app.use(express.json())

  app.use('/api/auth',authRoute)
  app.use('/api/users',userRoute)
  app.use('/api/movies',movieRoute)

app.listen(3000, ()=>{
    console.log('Backend server is ready')
})


   
