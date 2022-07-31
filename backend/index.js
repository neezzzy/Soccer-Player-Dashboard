import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes/soccerRoutes";
import cors from "cors";
const app = express();
const PORT = 4000;

mongoose.Promise = global.Promise;
// insert cloud mongo DB here
mongoose.connect("mongodb://localhost/soccerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

routes(app);

app.get("/", (req, res) => {
  res.send("send from the server");
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
