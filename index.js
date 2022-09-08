const express = require('express')

const PORT = process.env.PORT || '3000';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))




//Routes
app.get('/', (req, res)=>{
    console.log("hello hero")
    // res.status(200).json({name: 'Sunil', doing: 'Coding'})
})
// start listening
app.listen(PORT, ()=> {
    console.log('express server is running on PORT:', PORT)
})