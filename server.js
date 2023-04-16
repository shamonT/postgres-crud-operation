const express = require("express");
const app = express();
const cors = require("cors");
var corsOptions = {
  origin: "https://localhost:8081",
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
const router = require("./routes/productRouter.js");
app.use("/api/products", router);

app.listen(3000, () => console.log("Server listening at port 3000"));

app.get("/", (req, res) => {
  res.send("Hello World");
});
