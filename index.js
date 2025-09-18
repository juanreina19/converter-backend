const express = require("express");
const cors = require("cors");
const router = require("./routes/converterRoutes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/converter", router);

app.get('/health', (req, res) => {
    res.status(200).send({ status: 'API working correctly!' })
})

app.listen(3500, () => {
    console.log("Listening at port 3500");
})