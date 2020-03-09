import mongoose from 'mongoose'

import { isProd, mongoUri, mongoOptions } from '../config'

export default async () => {
  try {
    await mongoose.connect(mongoUri, mongoOptions)

    !isProd && process.stdout.write(`Database connected at ${mongoUri}`)
  } catch (error) {
    process.stdout.write(`Database error: ${error}`)
  }
}
