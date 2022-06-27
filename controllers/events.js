import { Event } from '../models/event.js'

function newEvent(req,res) {
  res.render('events/new', {
    title: "Add Event Details"
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function create(req,res) {
  Event.create(req.body)
  .then(event => {
    console.log(event)
    res.redirect(`events/${event._id}/items/new`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  }) 
}

function newItem(req,res) {
  Event.findById(req.params.id)
  .then(event => {
    res.render('events/items/new', { 
      title: 'Add Items',
      event })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  }) 
}


export {
  newEvent as new,
  create,
  newItem,
}