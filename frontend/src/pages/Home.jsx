import { useEffect, useState } from "react";

import API from "../services/api";

function Home({ user, setUser }) {

    const [movies, setMovies] =
    useState([]);

    const [search, setSearch] =
    useState("");

    const [form, setForm] =
    useState({

        nombre: "",
        genero: "",
        anio: "",
        calificacion: "",
        imagen: null

    });

    const [reviewText, setReviewText] =
    useState("");

    const [reviews, setReviews] =
    useState({});

    const getMovies = async () => {

        try {

            const res =
            await API.get("/movies");

            setMovies(res.data);

            res.data.forEach(movie => {

                getReviews(movie._id);
            });

        } catch (error) {

            console.log(error);
        }
    };

    useEffect(() => {

        getMovies();

    }, []);

    const handleChange = (e) => {

        setForm({

            ...form,
            [e.target.name]: e.target.value

        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const formData =
            new FormData();

            formData.append(
                "nombre",
                form.nombre
            );

            formData.append(
                "genero",
                form.genero
            );

            formData.append(
                "anio",
                form.anio
            );

            formData.append(
                "calificacion",
                form.calificacion
            );

            formData.append(
                "creadoPor",
                user._id
            );

            formData.append(
                "imagen",
                form.imagen
            );

            await API.post(
                "/movies",
                formData
            );

            getMovies();

        } catch (error) {

            console.log(error);

            alert("Error");
        }
    };

    const searchMovies = async () => {

        try {

            const res =
            await API.get(
                `/movies/search?q=${search}`
            );

            setMovies(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const getReviews = async (movieId) => {

        try {

            const res =
            await API.get(
                `/reviews/${movieId}`
            );

            setReviews(prev => ({

                ...prev,
                [movieId]: res.data

            }));

        } catch (error) {

            console.log(error);
        }
    };

    const submitReview = async (movieId) => {

        try {

            await API.post("/reviews", {

                movieId,
                userId: user._id,
                comentario: reviewText

            });

            setReviewText("");

            getReviews(movieId);

        } catch (error) {

            console.log(error);
        }
    };

    const likeReview = async (id, movieId) => {

        await API.put(
            `/reviews/like/${id}`
        );

        getReviews(movieId);
    };

    const dislikeReview = async (id, movieId) => {

        await API.put(
            `/reviews/dislike/${id}`
        );

        getReviews(movieId);
    };

    const logout = () => {

        localStorage.clear();

        setUser(null);
    };

    return (

        <div className="container">

            <div className="topbar">

                <h1 className="logo">
                    🎬 MovieTrack
                </h1>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

            <div className="search-section">

                <input
                    type="text"
                    placeholder="Buscar película"
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                />

                <button onClick={searchMovies}>
                    Buscar
                </button>

            </div>

            <form
                className="movie-form"
                onSubmit={handleSubmit}
            >

                <h2>
                    Agregar película
                </h2>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="genero"
                    placeholder="Genero"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="anio"
                    placeholder="Año"
                    onChange={handleChange}
                />

                <input
                    type="number"
                    min="1"
                    max="10"
                    name="calificacion"
                    placeholder="Calificación"
                    onChange={handleChange}
                />

                <input
                    type="file"
                    accept="image/*"
                    onChange={(e) =>

                        setForm({

                            ...form,
                            imagen:
                            e.target.files[0]

                        })

                    }
                />

                <button type="submit">
                    Publicar película
                </button>

            </form>

            <div className="movies-grid">

                {
                    movies.map((movie) => (

                        <div
                            key={movie._id}
                            className="movie-card"
                        >

                            <img
                                src={movie.imagen}
                                alt=""
                                className="movie-image"
                            />

                            <div className="movie-content">

                                <h2 className="movie-title">
                                    {movie.nombre}
                                </h2>

                                <p className="movie-info">
                                    {movie.genero}
                                </p>

                                <p className="movie-info">
                                    {movie.anio}
                                </p>

                                <p className="rating">
                                    ⭐ {movie.calificacion}/10
                                </p>

                                <div className="review-section">

                                    <h3>
                                        Reviews
                                    </h3>

                                    <textarea

                                        placeholder="Escribe tu opinión"

                                        onChange={(e) =>

                                            setReviewText(
                                                e.target.value
                                            )

                                        }

                                    />

                                    <button
                                        onClick={() =>
                                            submitReview(movie._id)
                                        }
                                    >

                                        Publicar review

                                    </button>

                                    {
                                        reviews[movie._id]?.map(review => (

                                            <div
                                                key={review._id}
                                                className="review-card"
                                            >

                                                <p className="review-user">

                                                    {
                                                        review.userId?.username
                                                    }

                                                </p>

                                                <p>
                                                    {review.comentario}
                                                </p>

                                                <div
                                                    className="review-buttons"
                                                >

                                                    <button
                                                        onClick={() =>

                                                            likeReview(
                                                                review._id,
                                                                movie._id
                                                            )

                                                        }
                                                    >

                                                        👍 {review.likes}

                                                    </button>

                                                    <button
                                                        onClick={() =>

                                                            dislikeReview(
                                                                review._id,
                                                                movie._id
                                                            )

                                                        }
                                                    >

                                                        👎 {review.dislikes}

                                                    </button>

                                                </div>

                                            </div>
                                        ))
                                    }

                                </div>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default Home;