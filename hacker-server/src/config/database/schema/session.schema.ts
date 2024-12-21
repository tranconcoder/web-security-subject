import { model, Schema } from "mongoose";

const sessionSchema = new Schema(
    {
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
    },
    {
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

export const SessionModel = model("Session", sessionSchema);
