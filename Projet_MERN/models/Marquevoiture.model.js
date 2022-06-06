import mongoose from "mongoose"
var marquevoitureSchema = mongoose.Schema({
nom : String,
description	: String,
image: String
});
const Marquevoiture = mongoose.model('Marquevoiture', marquevoitureSchema);
export default Marquevoiture