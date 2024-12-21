import mongoose from "mongoose";

const { Schema } = mongoose;

// Chỉ có số
const faceSchema = new Schema({
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

const FaceModel = mongoose.model("Face", faceSchema);

export default FaceModel;
