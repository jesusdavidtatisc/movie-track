import { useEffect, useState } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";

function MovieDetails() {

    const { id } =
    useParams();

    const [movie, setMovie] =
    useState(null);

    const [reviews, setReviews] =
    useState([]);

    const [comentario, setComentario] =
    useState("");

    useEffect(() => {

        getMovie();

        getReviews();

    }, []);

    const getMovie =
    async () => {

        try {

            const res =
            await axios.get(
                `http://localhost:5000/api/movies/${id}`
            );

            setMovie(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const getReviews =
    async () => {

        try {

            const res =
            await axios.get(
                `http://localhost:5000/api/reviews/${id}`
            );

            setReviews(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const createReview =
    async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "http://localhost:5000/api/reviews",

                {

                    movieId:id,

                    comentario

                }

            );

            setComentario("");

            getReviews();

        } catch (error) {

            console.log(error);
        }
    };

    if (!movie) {

        return <h2>Cargando...</h2>;
    }

    return (

        <div>

            <Navbar

                search=""
                setSearch={() => {}}

                searchMovies={() => {}}

                genero=""
                setGenero={() => {}}

                anio=""
                setAnio={() => {}}

                rating=""
                setRating={() => {}}

                filterMovies={() => {}}

                logout={() => {

                    localStorage.removeItem(
                        "token"
                    );

                    window.location.href =
                    "/login";
                }}

                movies={[]}

            />

            <div
                style={{
                    padding:"30px",
                    color:"white"
                }}
            >

                <div
                    style={{
                        display:"flex",
                        gap:"30px",
                        marginBottom:"40px",
                        alignItems:"flex-start"
                    }}
                >

                    <img

                        src={movie.imagen}

                        alt={movie.nombre}

                        onError={(e) => {

                            e.target.src =
                            "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                        }}

                        style={{

                            width:"250px",

                            height:"360px",

                            objectFit:"cover",

                            borderRadius:"12px"

                        }}

                    />

                    <div>

                        <h1>
                            {movie.nombre}
                        </h1>

                        <p>
                            🎭 {movie.genero}
                        </p>

                        <p>
                            📅 {movie.anio}
                        </p>

                        <p>
                            ⭐ {movie.calificacion}/10
                        </p>

                    </div>

                </div>

                <form
                    onSubmit={createReview}
                    style={{
                        marginBottom:"40px"
                    }}
                >

                    <textarea

                        placeholder="Escribe una reseña..."

                        value={comentario}

                        onChange={(e) =>

                            setComentario(
                                e.target.value
                            )

                        }

                        required

                        style={{

                            width:"100%",

                            height:"120px",

                            padding:"15px",

                            borderRadius:"10px",

                            border:"none",

                            marginBottom:"15px"

                        }}

                    />

                    <button

                        type="submit"

                        style={{

                            background:"#e50914",

                            color:"white",

                            border:"none",

                            padding:"12px 20px",

                            borderRadius:"8px",

                            cursor:"pointer"

                        }}

                    >

                        Publicar Reseña

                    </button>

                </form>

                <h2>
                    Reseñas
                </h2>

                {

                    reviews.length === 0

                    ?

                    <p>
                        No hay reseñas
                    </p>

                    :

                    reviews.map(review => (

                        <div

                            key={review._id}

                            style={{

                                background:"#1e1e1e",

                                padding:"20px",

                                borderRadius:"10px",

                                marginBottom:"20px"

                            }}

                        >

                            <h4>

                                {

                                    review.userId?.nombre

                                    ||

                                    "Usuario"

                                }

                            </h4>

                            <p>
                                {review.comentario}
                            </p>

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default MovieDetails;