import app from '../src/app.js'
import { connectDB } from '../src/config/db.js'

const uri = process.env.MONGODB_URI

let connected = false

export default async function handler(req, res) {
  if (!connected && uri) {
    await connectDB(uri)
    connected = true
  }
  return app(req, res)
}
