"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.HOST = exports.httpServer = void 0;
// Express app
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var body_parser_1 = __importDefault(require("body-parser"));
// Handlebars
var path_1 = __importDefault(require("path"));
var handlebars_service_1 = __importDefault(require("./services/handlebars.service"));
// Http server
var http_1 = require("http");
// Morgan
var morgan_1 = __importDefault(require("morgan"));
// Mongoose
var mongoose_config_1 = __importDefault(require("./config/database/mongoose.config"));
// Error handler
var handleError_util_1 = __importDefault(require("./utils/handleError.util"));
// Environments
var config_1 = require("./config");
// Secure
var cors_1 = __importDefault(require("cors"));
// Constants
var HOST = config_1.envConfig.HOST, PORT = config_1.envConfig.PORT;
exports.HOST = HOST;
exports.PORT = PORT;
// Server
var app = (0, express_1.default)();
var httpServer = (0, http_1.createServer)(app);
exports.httpServer = httpServer;
//
// CORS
//
app.use((0, cors_1.default)({
    origin: "*",
}));
//
// MORGAN
//
app.use((0, morgan_1.default)("tiny"));
//
// BODY PARSER
//
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.raw());
app.use(body_parser_1.default.text());
app.use(body_parser_1.default.json());
//
// STATIC FILES
//
app.use("/public", express_1.default.static(path_1.default.join(__dirname, "../public")));
//
// HANDLEBARS
//
var setupExHbs = new handlebars_service_1.default(app);
setupExHbs.setup();
//
// HANDLE ROUTE
//
(0, routes_1.default)(app);
//
// ERROR HANDLER
//
app.use(handleError_util_1.default);
//
// START SERVER
//
httpServer.listen(PORT, HOST, function () {
    console.log("Server is running on http://".concat(HOST, ":").concat(PORT));
});
//
// MONGOOSE
//
(0, mongoose_config_1.default)()
    .then(function () {
    console.log("Connected to database!");
})
    .catch(function () {
    console.log("Connect fail to database!");
});
