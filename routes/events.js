import { Router } from 'express'
import * as eventsCtrl from '../controllers/events.js'

const router = Router()

router.get('/new', eventsCtrl.new)

router.post('/', eventsCtrl.create)

router.get('/:id/items', eventsCtrl.newItem)

export {
  router
}
