import mongoose from 'mongoose'

const Schema = mongoose.Schema

const LinkSchema = new Schema({
  description: { type: String },
  url: { type: String, unique: true },
  createdAt: { type: Date, default: new Date() },
  modified_at: { type: Date, default: new Date() }
})


export default mongoose.model( 'Link' , LinkSchema )
