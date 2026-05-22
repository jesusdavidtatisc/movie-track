const mongoose =
require("mongoose");

const reviewSchema =
new mongoose.Schema(

    {

        movieId: {

            type:
            mongoose.Schema.Types.ObjectId,

            ref:"Movie",

            required:true

        },

        userId: {

            type:
            mongoose.Schema.Types.ObjectId,

            ref:"User",

            required:false

        },

        comentario: {

            type:String,

            required:true

        },

        likes:[

            {

                type:
                mongoose.Schema.Types.ObjectId,

                ref:"User"

            }

        ],

        dislikes:[

            {

                type:
                mongoose.Schema.Types.ObjectId,

                ref:"User"

            }

        ]

    },

    {

        timestamps:true

    }
);

module.exports =
mongoose.model(
    "Review",
    reviewSchema
);