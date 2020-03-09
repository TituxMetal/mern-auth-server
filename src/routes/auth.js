import express from 'express'

const router = express.Router()

router.get('/register', (req, res) => {
  res.json({
    data: 'register route'
  })
})

router.get('/login', (req, res) => {
  res.json({
    data: 'login route'
  })
})

export default router
