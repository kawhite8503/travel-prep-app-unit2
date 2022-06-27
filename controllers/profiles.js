import { Profile } from '../models/profile.js'

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

export {
  index,
}