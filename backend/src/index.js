require('dotenv').config({ path: '.env' })

const createServer = require('./createServer')
const server = createServer()

// TODO Use express middleware to handle cookies (JWT)
// TODO Use express middleware to populate current user

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        },
    }, 
    details => { console.log(`Server is now running on port http://localhost:${details.port}`) }
)