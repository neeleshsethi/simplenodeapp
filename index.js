const http = require('http');

const server = http.createServer((req, res) => {
    
    if (req.url == '/') {
        res.end('<h1>hello, world<h1>');

    }
}




);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log('Server running on port'));