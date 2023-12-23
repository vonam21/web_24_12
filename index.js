const express=require("express")
const app=express()
app.set('view engine','ejs')
app.set('views','./views')

app.listen(3000,(req,res)=>{
    console.log("nay la code web cua nam")
    console.log("Port is 3000")
})
app.get("/",(req,res)=>{
    res.render('index.ejs')
})

app.get("/nam",(req,res)=>{
    res.render('index3.ejs')
})






