"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
// Chỉ có số
var faceSchema = new Schema({
    place: {
        type: String,
        unique: true,
        required: true,
    },
    slot_number: {
        type: String,
        unique: true,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
});
var FaceModel = mongoose_1.default.model("Face", faceSchema);
exports.default = FaceModel;
