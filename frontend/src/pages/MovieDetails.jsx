import {

    useEffect,
    useState

} from "react";

import {

    useParams

} from "react-router-dom";

import API from "../services/api";

function MovieDetails({ user }) {

    const { id } =
    useParams();

    const [movie, setMovie] =
    useState(null);

    const [reviews, setReviews] =
    useState([]);

    const [reviewText, setReviewText] =
    useState("");

    useEffect(() => {

        getMovie();

        getReviews();

    }, []);

    const getMovie = async () => {

        try {

            const res =
            await API.get(
                `/movies/${id}`
            );

            setMovie(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const getReviews = async () => {

        try {

            const res =
            await API.get(
                `/reviews/${id}`
            );

            setReviews(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const submitReview = async () => {

        try {

            await API.post(

                "/reviews",

                {

                    movieId: id,

                    userId: user._id,

                    comentario:
                    reviewText

                }

            );

            setReviewText("");

            getReviews();

        } catch (error) {

            console.log(error);
        }
    };

    const likeReview =
    async (reviewId) => {

        await API.put(

            `/reviews/like/${reviewId}`,

            {
                userId: user._id
            }

        );

        getReviews();
    };

    const dislikeReview =
    async (reviewId) => {

        await API.put(

            `/reviews/dislike/${reviewId}`,

            {
                userId: user._id
            }

        );

        getReviews();
    };

    if (!movie) {

        return <h1>Cargando...</h1>;
    }

    return (

        <div className="container">

            <div className="movie-card">

                <img

                    src={movie.imagen}

                    className="movie-image"

                />

                <div className="movie-content">

                    <h1 className="movie-title">

                        {movie.nombre}

                    </h1>

                    <p>
                        🎭 {movie.genero}
                    </p>

                    <p>
                        📅 {movie.anio}
                    </p>

                    <p className="rating">

                        ⭐
                        {movie.calificacion}/10

                    </p>

                </div>

            </div>

            <br />

            <div className="movie-card">

                <div className="movie-content">

                    <h2>
                        📝 Reviews
                    </h2>

                    <textarea

                        placeholder="Escribe tu opinión"

                        value={reviewText}

                        onChange={(e) =>

                            setReviewText(
                                e.target.value
                            )

                        }

                    />

                    <button
                        onClick={submitReview}
                    >

                        Publicar review

                    </button>

                    <br />
                    <br />

                    {

                        reviews.map(review => (

                            <div

                                key={review._id}

                                className="review-card"

                            >

                                <h4>

                                    {
                                        review.userId?.username
                                    }

                                </h4>

                                <p>

                                    {
                                        review.comentario
                                    }

                                </p>

                                <div
                                    className="review-buttons"
                                >

                                    <button

                                        onClick={() =>

                                            likeReview(
                                                review._id
                                            )

                                        }

                                    >

                                        👍
                                        {
                                            review.likes.length
                                        }

                                    </button>

                                    <button

                                        onClick={() =>

                                            dislikeReview(
                                                review._id
                                            )

                                        }

                                    >

                                        👎
                                        {
                                            review.dislikes.length
                                        }

                                    </button>

                                </div>

                            </div>
                        ))
                    }

                </div>

            </div>

        </div>
    );
}

export default MovieDetails;