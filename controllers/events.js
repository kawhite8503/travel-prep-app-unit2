import { Event } from '../models/event.js'
import { Profile } from '../models/profile.js'

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
    Profile.findById(req.user.profile._id)
    .then(profile => {
      profile.events.push(event)
      profile.save()
      .then(profile => {
        res.redirect(`/events/${event._id}/items`)
      })
    })
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

function createItem(req,res) {
    Event.findById(req.params.id)
    .then(event => {
      event.packItems.push(req.body)
      event.save()
      .then(() => {
        console.log(event.packItems)
        res.redirect(`/events/${event._id}/items`)
      })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  }) 
}


function show(req,res) {
  Event.findById(req.params.id)
  .then(event => {
    res.render('events/show', {
      title: 'Special Event',
      event: event
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  }) 
}

function showItems(req,res) {
  Event.findById(req.params.id)
  .then(event => {
    console.log(event)
    res.render('events/items/show', {
      title: 'Packing List',
      event: event,
    })
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
  createItem,
  show,
  showItems,
}