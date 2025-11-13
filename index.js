const http = require("http")
const fs = require("node:fs")
const port = 8080

const server = http.createServer((req, res) => {
  let file = ""
  if (req.url == "/") file = "index.html"
  else if (req.url == "/about") file = "about.html"
  else if (req.url == "/contact-me") file = "contact-me.html"
  else file = "404.html"

  fs.readFile(file, (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" })
    res.end(data)
  })
})

server.listen(port, () => {
  console.log("Server running on http://localhost:${port}")
})
