const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: "10mb" })); // Modifed limit
app.use(cors());
app.set("trust proxy", true);
app.use(routes);

mongoose
  .connect(
    "mongodb+srv://vsambann:IFGfDNd2m8i0tPuJ@uitracker.0vrrhvf.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Database connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server listening on port ${process.env.PORT || 5000}...`);
    });
  })
  .catch((err) => {
    console.log("Error establishing connection ", err);
  });
