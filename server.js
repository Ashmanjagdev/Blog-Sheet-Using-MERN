


let express=require("express");
const app=express();
const mongoose=require('mongoose');
let bodyParser=require("body-parser");
const path = require('path');

mongoose.connect('mongodb+srv://ashman_jagdev:ashmanraju@cluster0.n8apx.mongodb.net/BlogsDB');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const blogSchema=new mongoose.Schema ({
  heading: String,
  content: String,
  date: String,
  key: String
});

const Blog=mongoose.model('Blog',blogSchema);


app.get("/clear",function(req,res)
{

  Blog.find({},function(error,data){
      res.send(data);
  });

});

let options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour:'numeric',
  minute: 'numeric'
 };

let r=4;
app.post("/compose",function(req,res)
{
  let date = new Date();
  let d=date.toLocaleString('gb-EG', options);

  let item=req.body.input;
  let heading=req.body.headings;
  const newblog= new Blog ({
    heading: heading,
    content: item,
    date: d,
    key:r
  });
  r++;
  newblog.save();
  res.send("101");
});

app.post("/delete",function(req,res)
{
  const id=req.body.finish;
  Blog.findByIdAndRemove(id,function(err){
    if(!err)
    {
      return res.send("101");
  }
  else {
  }
  });
});

if (process.env.NODE_ENV === 'production') {
  
  app.use(express.static('client/build'));
  const path =require("path");

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'client', 'build','index.html')));
}

app.listen(process.env.PORT || 4000,function() {
  console.log("hosted at port 4000");
});
