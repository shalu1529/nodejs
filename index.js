import  Express  from "express"; 
const app = Express();

const port = 3000;
app.get("/",(req,res) =>{
    res.send("hello world");
});

app.post("/register",(req,res) => {
    res.sendStatus(201);
});

app.put("/user/shalu",(req,res) => {
    res.sendStatus(200);
});
app.patch("/user/angle",(req , res) =>{
    res.sendStatus(200);
});

app.delete("/user/angle",(req , res) =>{
    res.sendStatus(200);
});


app.listen(port, () => {
    console.log(`server start on port ${port}`);
});