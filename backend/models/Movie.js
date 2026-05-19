const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    genero: {
        type: String,
        required: true
    },

    anio: {
        type: Number,
        required: true
    },

    calificacion: {
        type: Number,
        required: true,
        min: 1,
        max: 10
    },

    imagen: {
        type: String,
        required: true
    },

    creadoPor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model("Movie", movieSchema);