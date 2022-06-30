import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/new', eventsCtrl.new)
router.get('/:id', eventsCtrl.show)
router.get('/:id/items', eventsCtrl.newItem)
router.get('/:id/items/all', eventsCtrl.showItems)
router.get('/:id/edit', isLoggedIn, eventsCtrl.edit)

router.delete('/:id', isLoggedIn, eventsCtrl.deleteEvent)
router.delete('/:eventId/packItems/:packItemId', isLoggedIn, eventsCtrl.deleteItem)

router.put('/:id', isLoggedIn, eventsCtrl.update)

router.post('/', isLoggedIn, eventsCtrl.create)
router.post('/:id/items', isLoggedIn, eventsCtrl.createItem)


export {
  router
}
