const mongoose =
require("mongoose");

const movieSchema =
new mongoose.Schema({

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

        required: true

    },

    imagen: {

        type: String,

        required: true

    },

    creadaPorUsuario: {

        type: Boolean,

        default: false

    }

},

{

    timestamps: true

});

module.exports =
mongoose.model(
    "Movie",
    movieSchema
);