const express = require('express');
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('UUID');
const app = express();
const path = require('path');
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public/images")));
app.use(methodOverride("_method"));
let posts = [
  {
    id: uuidv4(),
    username: "Mrsatish Rao",
    logo: "vp.png",
    content: "hard work is important to achive the success",
    bio: "Best selling author Top 20 Enterpreneurs",
    img: "post1.png",
    imgHeading: "HardWork is a key of success in the LIfe",
    like: 0,
    follower: 0,
    comment: 0
  },
  {
    id: uuidv4(),
    username: "MrHacker fork",
    logo: "vp.png",
    bio: "Best selling author Top 20 Enterpreneurs",
    content: "hard work is important to achive the success",
    img: "post2.png",
    imgHeading: "key of success is depend on smartWork with Hardwork",
    like: 0,
    follower: 0,
    comment: 0
  },
  {
    id: uuidv4(),
    username: "MrThinker",
    logo: "vp.png",
    bio: "Best selling author Top 20 Enterpreneurs",
    content: "hard work is important to achive the success",
    img: "post3.png",
    imgHeading: "VISIOn turn Dream into REALITY",
    like: 0,
    follower: 0,
    comment: 0
  }
];

app.get("/index", (req, res) => {
  console.log("its working");
  res.render("index.ejs", { posts });
});
app.get("/post", (req, res) => {
  res.render("post.ejs", { posts });
});
app.post("/index", (req, res) => {
  let { username, bio, imgHeading, content, img } = req.body;
  posts.push({ id: uuidv4(), logo: "vp.png", username, bio, imgHeading, content, img });
  res.redirect("/index");

});

app.delete("/index/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect('/index');
  console.log(posts);
})
// console.log(posts);



const port = 3000;
app.listen(port, (req, res) => {
  console.log("It's working on port no :", port);
});
