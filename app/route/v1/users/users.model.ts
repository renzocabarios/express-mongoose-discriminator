import mongoose from "mongoose";
import { RESOURCE } from "../../../constant";

const option = {
    discriminatorKey: 'type',
}

const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
}, option);

export default mongoose.model(RESOURCE.USERS.DEFAULT, schema);
