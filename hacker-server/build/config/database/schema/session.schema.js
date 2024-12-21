"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionModel = void 0;
var mongoose_1 = require("mongoose");
var sessionSchema = new mongoose_1.Schema({
    session: {
        type: String,
        required: true,
        unique: true,
    },
    is_admin: {
        type: Boolean,
        required: true,
        default: false,
    },
}, {
    timestamps: {
        createdAt: "created_at",
        updatedAt: "updated_at",
    },
});
exports.SessionModel = (0, mongoose_1.model)("Session", sessionSchema);
