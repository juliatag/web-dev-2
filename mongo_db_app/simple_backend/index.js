require("dotenv").config();
const mongoose = require("mongoose");
const userModel = require("./models");

const express = require("express"); //node.js framework (server side)
const bodyParser = require("body-parser");
const cors = require("cors"); //cross-orign resource sharing

//adding mongo db connection
mongoose.connect("mongodb+srv://jabbot:" + process.env.MONGODB_PWD + "@cluster0.smx90pj.mongodb.net/myFirstDB?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const app = express();
const port = 3001; // Must be different than the port of the React app

app.use(cors()); // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
app.use(express.json()); // Allows express to read a request body

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//This line setups up a server-side route for the GET /users endpoint
//that will call the callback function to handle the endpoint when it is visited.
app.get("/users", async (req, res) => {
  const users = await userModel.find();
  res.send(users);
});

/* An API post request using body /users*/
app.post("/users", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = {
    username: username,
    password: password,
  };
  //adding try catch to prevent server crashing
  try {
    await userModel.create(user);
  } catch (err) {
    console.log(err);
  }
  res.send(user);
});

/* An API get request using query parameters to /users?username=XXX */
app.get("/user", async (req, res) => {
  const username = req.query.username;
  const user = await userModel.findOne({
    username: username,
  });
  res.send(user);
});

/* An API get request using URL path parameters to /users/:username */
app.get("/users/:username", async (req, res) => {
  const username = req.params.username;
  const user = await userModel.findOne({
    username: username,
  });
  res.send(user);
});

/* An API post request using body to get user
/users/get */
app.post("/users/get", async (req, res) => {
  const username = req.body.username;
  const user = await userModel.findOne({
    username: username,
  });
  res.send(user);
});

/* An API post request using body /users.Replaces the entire user. */
app.put("/users", async (req, res) => {
  const password = req.body.password;
  const username = req.body.username;
  const user = {
    username: username,
    password: password,
  };
  const results = await userModel.replaceOne(
    {
      username: username,
    },
    user
  );
  console.log("matched: " + results.matchedCount);
  console.log("modified: " + results.modifiedCount);
  res.send(results);
});

/* An API post request using body /users/username
that changes a single field */
app.patch("/users/:username/password", async (req, res) => {
  const username = req.params.username;
  const password = req.body.password;
  const results = await userModel.updateOne(
    {
      username: username,
    },
    { password: password }
  );
  console.log("matched: " + results.matchedCount);
  console.log("modified: " + results.modifiedCount);
  res.send(results);
});

/* An API delete request using URL path parameters to /users/:username */
app.delete("/users/:username", async (req, res) => {
  const username = req.params.username;
  const results = await userModel.deleteOne({ username: username });
  res.send(results);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
