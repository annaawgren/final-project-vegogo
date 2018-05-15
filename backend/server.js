import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import cors from "cors"


const app = express()

app.use(bodyParser.json())
app.use(cors())

mongoose.connect("mongodb://localhost/vegogo", { useMongoClient: true })
mongoose.Promise = Promise

mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))



const Restaurant = mongoose.model("Eat", {
  name: String
  // street: String,
  // zipcode: Number,
  // city: String,
  // phoneNumber: Number,
  // description: String
})

//get the model and saves it on the database
app.post("/restaurant", (req, res) => {
  const restaurant = new Restaurant(req.body)

  restaurant.save()
  .then(() => { res.status(201).send("Restaurant created") })
  .catch(err => { res.status(400).send(err) })
})

app.get("/restaurant", (req, res) => {
  Restaurant.find().then(restaurant => {
    console.log(restaurant)
    res.json(restaurant)
  })
})

app.get("/", (req, res) =>
  res.send("Hello World!")
)

app.listen(3000, () =>
  console.log("Example app listening on port 3000!")
)

//
// You can load the contacts.json file into your server.js file using const contacts = require("./contacts.json")
