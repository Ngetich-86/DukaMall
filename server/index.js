import express from "express";
import config from "./db/config.js";
import post from "./routes/routes.js";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import cors from "cors"

const app = express();
//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
//jwt middleware
app.use((req, res, next) => {
  if (
    req.headers &&// used to check if the request has the header
    req.headers.authorization &&// used to check if the request has the authorization header
    req.headers.authorization.split(" ")[0] === "JWT"// used to check if the request has the JWT token
  ) {
    jwt.verify(// used to verify the token
      req.headers.authorization.split(" ")[1],
      config.jwt_secret,
      (err, decode) => {
        if (err) req.user = undefined;
        req.user = decode;
        next();
      }
    );
  } else {
    req.user = undefined;
    next();
  }
});

post(app);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(config.port, () => {
  console.log(`Server running at ${config.port}`);
});
