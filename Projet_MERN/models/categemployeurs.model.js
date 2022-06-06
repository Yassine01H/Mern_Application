import mongoose from "mongoose"
var categemployeurSchema = mongoose.Schema({
titre : String,
description : String,
});
const categemployeurs  = mongoose.model('categemployeurs ', categemployeurSchema);
export default categemployeurs 