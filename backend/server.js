const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads",
    express.static(
        path.join(__dirname, "uploads")
    )
);
app.use(
    "/api/reviews",
    require("./routes/reviewRoutes")
);

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB conectado"))
.catch((error) => console.log(error));

app.use("/api/auth", require("./routes/authRoutes"));

app.use("/api/movies", require("./routes/movieRoutes"));

app.get("/", (req, res) => {
    res.send("API funcionando");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});