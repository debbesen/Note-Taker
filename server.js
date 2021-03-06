const express = require("express");
const mongoose = require("mongoose")


const app = express();


const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/notetracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);



require("./routes/api-routes")(app);
require("./routes/html-routes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
