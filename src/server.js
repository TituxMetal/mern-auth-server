import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import { clientUri } from './config'
import database from './database'
import { authRoutes, welcome } from './routes'

const server = express()

server.use(morgan('dev'))
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(cors({ origin: clientUri }))

database()

server.use('/api', authRoutes)
server.use('/api', welcome)

export default server
