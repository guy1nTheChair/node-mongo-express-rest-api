const Express = require("express");
const app = Express();
const dbClient = require("mongodb").MongoClient;
const routerModule = require("./routes");
const PORT = 3000;
const URI =
  "mongodb+srv://<userID>:<password>@cluster0-i0ymi.mongodb.net/test?retryWrites=true&w=majority";

const client = new dbClient(URI, { useNewUrlParser: true });

app.use("/", routerModule);

client.connect(err => {
  if (!err) {
    console.log("Connected to MongoDB");
  } else {
    console.log(err);
  }
  const collection = client.db("test").collection("devices");
  client.close();
});

app.listen(PORT, () => {
  console.log(`Server Started at port ${PORT}...`);
});
