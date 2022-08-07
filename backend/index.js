/*import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import productRoutes from "./backend/route/productroutes.js"

const app = express();

app.use(bodyParser.json())
app.use(cors());
app.use("/",productRoutes);

app.all("*",(req,res)=>{
  res.send("URL does not exit")
})
app.post('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

// app.use('/login', (req, res) => {
//     res.send({
//       token: 'test123'
//     });
//   });

app.listen(5000, () => console.log('API is running on http://localhost:5000/login'));*/
/*const authenticateJWT = (req, res, next) => {
  const token = req.cookies.token;

  if (token) {
    console.log('Hi');
    const decode=jsonwebtoken.verify(token, jwtSecret);
    res.send({"data":{
      decode:decode
    }})
    // jsonwebtoken.verify(token, jwtSecret,(err, user) => {
    //   if(err) {
    //     return res.status(404).send('Bad Auth');
    //   } else {
    //     req.user = user;
    //     next();
    //   }
    //   });
  } else {
      return res.status(401);
  }
};*/

// app.get('/jwt', (req, res) => {
//   const token = jsonwebtoken.sign({
//     time: Date(),
//     userId: 12,
// }, jwtSecret,{ expiresIn: "1h" });
//   res.cookie('token', token, { httpOnly: true ,secure:true}); //set secure, expire in session
//   res.json({ token });
// });

// app.use(expressjwt({ secret: jwtSecret, algorithms: ['HS256'],getToken: req => req.cookies.token }));

import express from "express";
import jsonwebtoken from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";
import csurf from "csurf";
import productRoutes from "./route/productroutes.js";

const app = express();


app.use(express.json());
app.use(cors());


app.use("/", productRoutes);
app.use("/productlist", productRoutes);
app.listen(8080);
console.log("App running on localhost:8080");
