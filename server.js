const path = require("path")
const express = require("express")

const DIST_DIR = path.join(__dirname, "dist")
const PORT = process.env.PORT

const app = express()

// This allows us to serve app.js
app.use(express.static(DIST_DIR))

// Just send generated html file back
app.get('/', (req, res) => res.sendFile(path.join(DIST_DIR, "index.html")))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))
