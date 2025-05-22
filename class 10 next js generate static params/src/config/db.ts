import mongoose from "mongoose";
import { Constants } from "../../constants";
const MONGO_DB_URI = Constants.MONGO_DB_URI!;
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export default async function connectToDatabase() {

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGO_DB_URI)
            .then(() => mongoose.connection);
    }
    try {
        cached.conn = await cached.promise;
    } catch (error) {
        cached.promise = null;
        throw error;
    }

    return cached.conn;
}