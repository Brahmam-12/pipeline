const http = require('http')
const server = http.createServer((req, res)=>{
	res.end('Hello from Docker + GitHub Actions CI/CD!');
})

server.listen(3000, ()=>{
	console.log('Server running at http://localhost:3000');
});
