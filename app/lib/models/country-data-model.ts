import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const CountrySchema = new Schema({
    name: {
        type: String
    },
    alpha2code: {
        type: String
    }
});
