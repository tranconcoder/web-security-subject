// Express app
import express from "express";
import handleRoute from "./routes";
import bodyParser from "body-parser";

// Handlebars
import path from "path";
import SetupHandlebars from "./services/handlebars.service";

// Http server
import { createServer } from "http";

// Morgan
import morgan from "morgan";

// Mongoose
import connectDb from "./config/database/mongoose.config";

// Error handler
import handleError from "./utils/handleError.util";

// Environments
import { envConfig } from "./config";

// Secure
import cors from "cors";

// Constants
const { HOST, PORT } = envConfig;

// Server
const app = express();
const httpServer = createServer(app);

//
// CORS
//
app.use(
    cors({
        origin: "*",
    })
);

//
// MORGAN
//
app.use(morgan("tiny"));

//
// BODY PARSER
//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.raw());
app.use(bodyParser.text());
app.use(bodyParser.json());

//
// STATIC FILES
//
app.use("/public", express.static(path.join(__dirname, "../public")));

//
// HANDLEBARS
//
const setupExHbs = new SetupHandlebars(app);
setupExHbs.setup();

//
// HANDLE ROUTE
//
handleRoute(app);

//
// ERROR HANDLER
//
app.use(handleError);

//
// START SERVER
//
httpServer.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});

//
// MONGOOSE
//
connectDb()
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connect fail to database!");
    });

export { httpServer, HOST, PORT };
