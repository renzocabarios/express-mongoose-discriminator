import mongoose from "mongoose";
import { RESOURCE } from "../../../../constant";
import users from '../users.model'

const option = {
    discriminatorKey: 'type',
}

const schema = new mongoose.Schema({}, option);

export default users.discriminator(RESOURCE.USERS.ADMIN, schema);