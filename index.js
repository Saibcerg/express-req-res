const express = require("express");
const app = express();
const path = require("path");




//  midddleware
app.use(express.static("public"));

//*******************************get req without using path.join()

// app.use(express.static("public"))

// app.get("/",(req,res)=>{
//   res.sendFile(__dirname+"/welcome.html")
// })

// app.get("/",(req,res)=>{
//   res.sendFile(__dirname+"/public"+"/index.html")
// })

//               ****************************** get req  using path.join()

// app.get("/",(req,res)=>{
//   res.sendFile(path.join(__dirname, "welcome.html"))
//   // res.sendFile(path.join(__dirname,"public","index.html"))
// })

//*********** */ handling resq/ serving static pages using middleware

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("/java", (rweq, res) => {
  res.sendFile("java");
});
app.get("/js.html", (rweq, res) => {
  res.sendFile("js.html");
});
app.get("/node.html", (rweq, res) => {
  res.sendFile("node.html");
});



// **************** serving dinamic pages


function fact(n) {

  let f = 1;
  for (let i = 1; i <= n; i++)
    f = f * i
  return f
}


app.get("/fact", (req,res) => {
  let n= req.query.num

  console.log(req.query)


  res.send(`<html>

<body>
  <h1>  the factorial of ${n} is ${fact(n)} </h1>
    
</body>
</html>`);

})



app.listen(8888, () => {
  console.log("server started");
});


