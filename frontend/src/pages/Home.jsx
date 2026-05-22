import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function Home() {

    const [movies, setMovies] = useState([]);

    const [showForm, setShowForm] = useState(false);

    const [search, setSearch] = useState("");

    const [genero, setGenero] = useState("");

    const [anio, setAnio] = useState("");

    const [rating, setRating] = useState("");

    const [nombre, setNombre] = useState("");

    const [nuevoGenero, setNuevoGenero] = useState("");

    const [nuevoAnio, setNuevoAnio] = useState("");

    const [calificacion, setCalificacion] = useState("");

    const [imagen, setImagen] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {

        getMovies();

    }, []);

    const getMovies = async () => {

        try {

            const res = await axios.get(
                "http://localhost:5000/api/movies"
            );

            setMovies(res.data);

        } catch (error) {

            console.log(error);

        }
    };

    const searchMovies = async () => {

        try {

            const res = await axios.get(
                `http://localhost:5000/api/movies/search?q=${search}`
            );

            setMovies(res.data);

        } catch (error) {

            console.log(error);

        }
    };

    const filterMovies = async () => {

        try {

            const res = await axios.get(
                `http://localhost:5000/api/movies/filter?genero=${genero}&anio=${anio}&rating=${rating}`
            );

            setMovies(res.data);

        } catch (error) {

            console.log(error);

        }
    };

    const addMovie = async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "http://localhost:5000/api/movies",

                {

                    nombre,
                    genero: nuevoGenero,
                    anio: Number(nuevoAnio),
                    calificacion: Number(calificacion),
                    imagen

                },

                {

                    headers: {

                        Authorization:
                            `Bearer ${token}`

                    }

                }

            );

            alert("Película agregada");

            setNombre("");
            setNuevoGenero("");
            setNuevoAnio("");
            setCalificacion("");
            setImagen("");

            setShowForm(false);

            getMovies();

        } catch (error) {

            console.log(error);

            alert("Error agregando película");

        }
    };

    const logout = () => {

        localStorage.removeItem("token");

        window.location.href = "/login";

    };

    return (

        <div
            style={{
                minHeight: "100vh",
                background: "#111827"
            }}
        >

            <Navbar

                search={search}
                setSearch={setSearch}
                searchMovies={searchMovies}

                genero={genero}
                setGenero={setGenero}

                anio={anio}
                setAnio={setAnio}

                rating={rating}
                setRating={setRating}

                filterMovies={filterMovies}

                logout={logout}

            />

            <div
                style={{
                    padding: "20px"
                }}
            >

                <button

                    onClick={() =>
                        setShowForm(!showForm)
                    }

                    style={{

                        padding: "12px 20px",

                        background: "#e50914",

                        color: "white",

                        border: "none",

                        borderRadius: "8px",

                        cursor: "pointer",

                        fontWeight: "bold"

                    }}

                >

                    {

                        showForm

                            ?

                            "Cerrar Formulario"

                            :

                            "Agregar Película"

                    }

                </button>

            </div>

            {

                showForm && (

                    <div

                        style={{

                            background: "#1f2937",

                            margin: "20px",

                            padding: "25px",

                            borderRadius: "15px"

                        }}

                    >

                        <h2
                            style={{
                                color: "white",
                                marginBottom: "20px"
                            }}
                        >
                            Nueva Película
                        </h2>

                        <form
                            onSubmit={addMovie}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "15px"
                            }}
                        >

                            <input

                                type="text"

                                placeholder="Nombre"

                                value={nombre}

                                onChange={(e) =>
                                    setNombre(
                                        e.target.value
                                    )
                                }

                                required

                                style={{

                                    padding: "12px",

                                    borderRadius: "8px",

                                    border: "none"

                                }}

                            />

                            <select

                                value={nuevoGenero}

                                onChange={(e) =>
                                    setNuevoGenero(
                                        e.target.value
                                    )
                                }

                                required

                                style={{

                                    padding: "12px",

                                    borderRadius: "8px",

                                    border: "none"

                                }}

                            >

                                <option value="">
                                    Género
                                </option>

                                <option value="Action">
                                    Action
                                </option>

                                <option value="Drama">
                                    Drama
                                </option>

                                <option value="Sci-Fi">
                                    Sci-Fi
                                </option>

                                <option value="Comedy">
                                    Comedy
                                </option>

                                <option value="Horror">
                                    Horror
                                </option>

                                <option value="Animation">
                                    Animation
                                </option>

                            </select>

                            <input

                                type="number"

                                placeholder="Año"

                                value={nuevoAnio}

                                onChange={(e) =>
                                    setNuevoAnio(
                                        e.target.value
                                    )
                                }

                                required

                                style={{

                                    padding: "12px",

                                    borderRadius: "8px",

                                    border: "none"

                                }}

                            />

                            <input

                                type="number"

                                min="1"

                                max="10"

                                placeholder="Calificación"

                                value={calificacion}

                                onChange={(e) =>
                                    setCalificacion(
                                        e.target.value
                                    )
                                }

                                required

                                style={{

                                    padding: "12px",

                                    borderRadius: "8px",

                                    border: "none"

                                }}

                            />

                            <input

                                type="text"

                                placeholder="URL imagen"

                                value={imagen}

                                onChange={(e) =>
                                    setImagen(
                                        e.target.value
                                    )
                                }

                                required

                                style={{

                                    padding: "12px",

                                    borderRadius: "8px",

                                    border: "none"

                                }}

                            />

                            <button

                                type="submit"

                                style={{

                                    padding: "12px",

                                    background: "#e50914",

                                    color: "white",

                                    border: "none",

                                    borderRadius: "8px",

                                    cursor: "pointer",

                                    fontWeight: "bold"

                                }}

                            >

                                Guardar Película

                            </button>

                        </form>

                    </div>

                )

            }

            <div

                style={{

                    display: "grid",

                    gridTemplateColumns:
                        "repeat(auto-fill, minmax(250px, 1fr))",

                    gap: "25px",

                    padding: "20px"

                }}

            >

                {

                    movies.map(movie => (

                        <div

                            key={movie._id}

                            style={{

                                background: "#1f2937",

                                borderRadius: "15px",

                                overflow: "hidden",

                                boxShadow:
                                    "0 4px 12px rgba(0,0,0,0.4)",

                                display: "flex",

                                flexDirection: "column"

                            }}

                        >

                            <div

                                style={{

                                    width: "100%",

                                    height: "380px",

                                    overflow: "hidden",

                                    background: "#000"

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

                                        width: "100%",

                                        height: "100%",

                                        objectFit: "cover"

                                    }}

                                />

                            </div>

                            <div

                                style={{

                                    padding: "15px",

                                    color: "white",

                                    flex: "1"

                                }}

                            >

                                <h2

                                    style={{

                                        marginBottom: "10px",

                                        fontSize: "22px"

                                    }}

                                >

                                    {movie.nombre}

                                </h2>

                                <p>
                                    🎭 {movie.genero}
                                </p>

                                <p>
                                    📅 {movie.anio}
                                </p>

                                <p

                                    style={{

                                        color: "#facc15",

                                        fontWeight: "bold",

                                        marginBottom: "15px"

                                    }}

                                >

                                    ⭐ {movie.calificacion}/10

                                </p>

                                <Link
                                    to={`/movie/${movie._id}`}
                                >

                                    <button

                                        style={{

                                            width: "100%",

                                            padding: "10px",

                                            background: "#e50914",

                                            color: "white",

                                            border: "none",

                                            borderRadius: "8px",

                                            cursor: "pointer",

                                            fontWeight: "bold"

                                        }}

                                    >

                                        Reseñas

                                    </button>

                                </Link>

                            </div>

                        </div>

                    ))

                }

            </div>

        </div>

    );
}

export default Home;