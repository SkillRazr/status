import expres from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import api from './routes/apiRoutes.js'
const app=expres();
app.use(bodyParser.urlencoded({extended:true}));
app.use(expres.json());
app.use(cors());
const port=8800;
app.get('/',(req,res)=>{
    res.send("Welcome to my server")
})
app.use("/api",api)
app.listen(8800,()=>{
    console.log(`Server is running on port ${port} `)
})