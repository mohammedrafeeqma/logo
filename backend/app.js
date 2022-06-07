const express = require('express')
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
const userRoute = require('./router/user')
const adminRoute = require('./router/admin')

dotenv.config()
console.log(111);
console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("mongoDB connected"); 
})


app.use(express.json())
app.use('/',userRoute)
app.use('/admin',adminRoute)



if(process.env.NODE_ENV === 'production')
{
    console.log(path.join(__dirname,'../', '/frontend/build'));
  app.use(express.static(path.join(__dirname,'../', '/frontend/build')))
  app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname, '../frontend', 'build', 'index.html'))
  )
}
else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}



app.use(function(err, req, res, next) {
    
  
    // render the error page
    console.log("error consoling");
    console.log(err);
    res.status(500);
    res.json("error");
  });

const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Server is running`);
})