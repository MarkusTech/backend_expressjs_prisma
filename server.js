import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import bodyParser from "body-parser";
import colors from "colors";

// dotenv config
dotenv.config();
const port = process.env.PORT;

// rest obj
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));

// Test API
app.use("/", (req, res) => {
  res.send("Server is online");
});

// rest API

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.bgCyan);
});
