import { port } from './config'
import server from './server'

server.listen(port, () => process.stdout.write(`The server is running on port ${port}\n`))
