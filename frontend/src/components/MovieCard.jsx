import { Link } from "react-router-dom";

function MovieCard({ movie }) {

    return (

        <div className="movie-card">

            <img

                src={movie.imagen}

                alt=""

                className="movie-image"

            />

            <div className="movie-content">

                <h2 className="movie-title">
                    {movie.nombre}
                </h2>

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

                <Link
                    to={`/movie/${movie._id}`}
                >

                    <button>
                        Reseñas
                    </button>

                </Link>

            </div>

        </div>
    );
}

export default MovieCard;