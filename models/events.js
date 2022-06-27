import mongoose from 'mongoose'

const Schema = mongoose.Schema

const eventSchema = new Schema({
  name: String,
  date: Date,
  location: String,
  time: String,
  evtLink: String,
  lodging: String,
  packItems: [itemsSchema],
  image: String,
}, {
  timestamps: true
})

const Event = mongoose.model('Event', EventSchema)

export {
  Event
}