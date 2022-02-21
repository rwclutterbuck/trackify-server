const express = require("express")
const app = express();
const cors = require("cors")
const router = require("./routes/route")

app.use(express.json());
app.use(cors());
app.listen(process.env.PORT || 3000, () => console.log("express now departing from port")
)

app.get("/", (req,res) => {
    res.send("hello world").status(200)
})

app.use("/", router)

module.exports = app;

