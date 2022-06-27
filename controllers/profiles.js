import { Profile } from '../models/profile.js'
import { Event } from '../models/event.js'

function index(req,res) {
  console.log('PROFILES!!!!!!!!')
  let modelQuery = req.query.name
    ? { name: new RegExp(req.query.name, 'i') }
    : {}
  // Sorting by name
  Profile.find(modelQuery)
  .sort("name")
  .then(profiles => {
    // Passing profiles and name, for use in the EJS
    res.render("profiles/index", { 
      profiles: profiles, 
      name: req.query.name,
    title: "Profiles"
  })
})
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req,res) {
  Profile.findById(req.params.id).populate("events")
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render("profiles/show", {
      title: 'My Events',
      profile: profile,
      isSelf
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  show,
}