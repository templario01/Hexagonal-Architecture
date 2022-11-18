import BrokerBootstrap from './bootstrap/broker.bootstrap'
import ServerBootstrap from './bootstrap/server.bootstrap'

const server = new ServerBootstrap()
const broker = new BrokerBootstrap()

;(async () => {
  try {
    await server.initialize()
    await broker.initialize()
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
})()
