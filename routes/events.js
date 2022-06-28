import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()

router.get('/new', eventsCtrl.new)
router.get('/:id', eventsCtrl.show)
router.get('/:id/items', eventsCtrl.newItem)

router.post('/', eventsCtrl.create)
router.post('/:id/items', eventsCtrl.createItem)


export {
  router
}
