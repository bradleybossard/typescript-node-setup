import * as express from "express"

const app = express()


app.get('/', (req, res) => res.send("Welcome home"))

app.listen(8000, () => console.log("Server running on 8000!"))
