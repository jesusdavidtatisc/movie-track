require("dotenv").config();

const mongoose =
require("mongoose");

const Review =
require("./models/Review");

const Movie =
require("./models/Movie");

const User =
require("./models/User");

mongoose.connect(
    process.env.MONGO_URI
);

const comments = [

    "Increíble película",
    "La volvería a ver",
    "Muy buena actuación",
    "El final fue brutal",
    "No me gustó mucho",
    "Excelente soundtrack",
    "Visualmente perfecta",
    "La historia engancha mucho",
    "Muy aburrida",
    "Una obra maestra",
    "Demasiado larga",
    "Excelente dirección",
    "Top películas del año",
    "Muy emotiva",
    "Las actuaciones fueron increíbles",
    "Buenísima",
    "Me sorprendió bastante",
    "No cumplió expectativas",
    "El villano fue excelente",
    "Fotografía impresionante"

];

const generateReviews = async () => {

    try {

        await Review.deleteMany();

        const movies =
        await Movie.find();

        const users =
        await User.find();

        const reviews = [];

        for (let i = 0; i < 1000; i++) {

            const randomMovie =

            movies[
                Math.floor(
                    Math.random() *
                    movies.length
                )
            ];

            const randomUser =

            users[
                Math.floor(
                    Math.random() *
                    users.length
                )
            ];

            const randomComment =

            comments[
                Math.floor(
                    Math.random() *
                    comments.length
                )
            ];

            const randomLikes =
            users
            .sort(() => 0.5 - Math.random())
            .slice(
                0,
                Math.floor(Math.random() * 10)
            )
            .map(user => user._id);

            const randomDislikes =
            users
            .sort(() => 0.5 - Math.random())
            .slice(
                0,
                Math.floor(Math.random() * 5)
            )
            .map(user => user._id);

            reviews.push({

                movieId:
                randomMovie._id,

                userId:
                randomUser._id,

                comentario:
                randomComment,

                likes:
                randomLikes,

                dislikes:
                randomDislikes

            });

        }

        await Review.insertMany(
            reviews
        );

        console.log(
            "1000 reviews agregadas"
        );

        mongoose.connection.close();

    } catch (error) {

        console.log(error);

    }
};

generateReviews();