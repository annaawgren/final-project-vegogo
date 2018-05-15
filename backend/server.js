import express from "express"

const app = express()

app.get("/", (req, res) =>
  res.send("Hello World!")
)

app.listen(3000, () =>
  console.log("Example app listening on port 3000!")
)

//
// You can load the contacts.json file into your server.js file using const contacts = require("./contacts.json")
