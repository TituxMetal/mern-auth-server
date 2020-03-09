export const clientUri = process.env.CLIENT_URI || 'http://localhost:3000'
export const isProd = process.env.NODE_ENV === 'production'
export const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/test'
export const mongoOptions = {
  useCreateIndex: true,
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
}
export const port = process.env.PORT || 5000
