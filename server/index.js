const express=require('express')
const app=express()
 const mongoose=require('mongoose')
 const cors=require('cors')
const port=8000
 mongoose.connect("mongodb+srv://jayashri:2525@cluster0.qbfgl4i.mongodb.net/ultrafly")
 .then(()=>console.log("mongodb connected"))
 .catch((err)=>console.log(err))


 app.use(cors()); 
app.use(express.json());
//  app.get('/',(req,res)=>{
//     res.send('<h1>Hello</h1>')
//  })
 const userSchema =new mongoose.Schema({
   name:{
      type:String,
      required:true
   },
   email:{
      type:String,
      required:true
   },
   password:{
      type:String,
      required:true
   }
})

const todoSchema =new mongoose.Schema({
    title:{
       type:String,
       required:true
    },
    desc:{
       type:String,
       required:true
    }
 })

const user=mongoose.model('User',userSchema)
const todo=mongoose.model('Todo',todoSchema)

app.post("/todos",async (req,res)=>{
    const {title,desc}=req.body;

    const data= new todo({title,desc})
    await data.save()
    res.status(200).send("added successfully")
})

app.get("/gettodos",async (req,res)=>{
   const data= await todo.find()
   res.status(200).json(data)
//    console.log(data)
})

 app.post('/register',async(req,res)=>{
const {name,email,password}=req.body
const data=new user({name,email,password})
await data.save()
res.status(200).send("added successfully")
 })

 app.post('/login',async(req,res)=>{
   try{
    const {email,password}=req.body
   const userdata= await user.find({email})
   console.log(userdata)
   if (!userdata) {
      return res.status(404).send('User not found');
  }
  res.status(200).json(userdata)
   }catch(e){
    console.log(e)
   }
  
 })

 app.listen(port,(req,res)=>{
    console.log(`${port} connected`)
 })

