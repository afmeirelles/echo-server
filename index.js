const http = require('http')

const server = http.createServer((req, res) => {
    req.pipe(res)
})

server.listen(8000, () => console.log('Server listening on port 8000'))