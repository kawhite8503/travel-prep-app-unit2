import mongoose from 'mongoose'

const Schema = mongoose.Schema

const itemsSchema = new Schema ({
  name: String,
  whoFor: String,
  isPacked: Boolean,
}, {
  timestamps: true
})

const eventSchema = new Schema({
  name: String,
  date: String,
  location: String,
  time: String,
  evtLink: String,
  lodging: String,
  packItems: [itemsSchema],
  image: String,
}, {
  timestamps: true
})

const Event = mongoose.model('Event', eventSchema)

export {
  Event
}