"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var BUILD_DIR = path_1.default.join(__dirname, "../build");
var INDEX_DIR = path_1.default.join(BUILD_DIR, "index.html");
var app = express_1.default(); //Define the app which is going to run.
var port = process.env.port || 8080; //Define the port.
/**
 * Define where the content would be served from - in our case it is static content.
*/
app.use(express_1.default.static(BUILD_DIR));
/**
 * Define the entry point. When loading the app on localhost:8080 we will send the content
 * inside res.send(<Content>)
*/
app.get("/", function (req, res) {
    res.sendFile(INDEX_DIR);
});
/**
 * Define on which port the app is running on.
*/
app.listen(port, function () {
    console.log("App is running on port: " + port);
});
