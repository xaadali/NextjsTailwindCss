import mongoose from "mongoose";

const KMSchema = new mongoose.Schema({
  name: String,
});

const Km = mongoose.model("KM") || mongoose.model("KM", KMSchema);

export default Km;
