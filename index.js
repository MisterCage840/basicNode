const express = require("express")
const app = express()
const path = require("path")
const port = 3000
let file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "about.html"))
})
app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "contact-me.html"))
})
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "404.html"))
})

app.listen(port, (error) => {
  if (error) {
    throw error
  }
  console.log(`Listening on port ${port}`)
})

// const http = require("http")

// const server = http.createServer((req, res) => {
//   let file = ""
//   if (req.url == "/") file = "index.html"
//   else if (req.url == "/about") file = "about.html"
//   else if (req.url == "/contact-me") file = "contact-me.html"
//   else file = "404.html"

//   fs.readFile(file, (err, data) => {
//     res.writeHead(200, { "Content-Type": "text/html" })
//     res.end(data)
//   })
// })

// server.listen(port, () => {
//   console.log("Server running on http://localhost:${port}")
// })
