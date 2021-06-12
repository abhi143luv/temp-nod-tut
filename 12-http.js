const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('<b>Welcome to the Homepage</b>')
    }
    if(req.url === 'about'){
        res.end('<b>This is our About Us page</b>')
    }
    res.end(`    
        <h1>Oops!!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href = "/">Back Home</a>
    `)
})

server.listen(5000)