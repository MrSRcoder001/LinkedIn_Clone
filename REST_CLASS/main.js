const express = require('express');
const { v4: uuidv4 } = require('UUID');
const methodOverride=require('method-override');
const app = express();
let port = 3000;
let posts = [
    {
        id: uuidv4(),
        username: "satish",
        content: "its happen to make new thinks",
    }, {
        id: uuidv4(),
        username: "rahul",
        content: "Hard Work is Important to achieve success",
    }, {
        id: uuidv4(),
        username: "Sanket",
        content: "Hard Work is Important but smart work more important",
    }
];
app.use(methodOverride("_method"));

const path = require('path');
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.get("/posts", (req, res) => {
    res.render('index.ejs', { posts });
});

app.get("/posts/new", (req, res) => {
    res.render('newPost.ejs');
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    
    let post = posts.find((p) => id === p.id);
    res.render('show.ejs', { post });
})

app.post("/posts", (req, res) => {
    let id=uuidv4();
    let { username, content } = req.body;
    posts.push({id, username, content });
    res.redirect("/posts");
});


app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    let post=posts.find((p)=> id === p.id);
    post.content=newContent;
    res.redirect('/posts')
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> id !== p.id);
    res.redirect('/posts');
})

app.get("/posts/:id/edit",(req,res)=>{
    let{id}=req.params;
    let post=posts.find((p)=> id === p.id);
    res.render('editPost.ejs',{post});
});

app.listen(port, () => {
    console.log("Server Started", port);
});
