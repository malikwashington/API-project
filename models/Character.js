import mongoose from "mongoose";


const characterSchema = new mongoose.Schema({
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  eye_color: String,
  birth_year: String,
  gender: String,
  homeworld: String,
  films: Array,
  species: Array,
  vehicles: Array,
  starships: Array,
  created: String,
  edited: String,
  url: String
})

export default mongoose.model('Character', characterSchema)