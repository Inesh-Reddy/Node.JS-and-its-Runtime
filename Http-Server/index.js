// importing express library
const express = require("express");

const app = express();
const port  = 3000;


// middlewares
app.use(express.json());

app.get("/", (req, res)=>{
    res.send('<b>Hello From Backend<b>');
})
app.post(('/conversations'), (req,res)=>{
    console.log(req.query.name);
    res.status(200).json({
        msg: '2+2 = 4',
    })
})
app.listen(port, ()=>{
    console.log(`Server is listening on port : ${port} ...`);
})

