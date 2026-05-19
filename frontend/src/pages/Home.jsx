import { useEffect, useState } from "react";

import API from "../services/api";

function Home({ user, setUser }) {

    const [movies, setMovies] =
    useState([]);

    const [form, setForm] = useState({

        nombre: "",
        genero: "",
        anio: "",
        calificacion: "",
        imagen: ""

    });

    const [search, setSearch] =
    useState("");

    const getMovies = async () => {

        const res =
        await API.get("/movies");

        setMovies(res.data);
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

            await API.post("/movies", {

                ...form,
                creadoPor: user._id

            });

            getMovies();

        } catch (error) {

            console.log(error);

            alert("Error");
        }
    };

    const searchMovies = async () => {

        const res =
        await API.get(
            `/movies/search?q=${search}`
        );

        setMovies(res.data);
    };

    const logout = () => {

        localStorage.clear();

        setUser(null);
    };

    return (

        <div className="container">

            <div className="topbar">

                <h1>
                    🎬 MovieTrack
                </h1>

                <button onClick={logout}>
                    Logout
                </button>

            </div>

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

            <form onSubmit={handleSubmit}>

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
                    placeholder="Calificación 1-10"
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="imagen"
                    placeholder="URL imagen"
                    onChange={handleChange}
                />

                <button type="submit">
                    Agregar película
                </button>

            </form>

            <hr />

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

                        <h2>
                            {movie.nombre}
                        </h2>

                        <p>
                            {movie.genero}
                        </p>

                        <p>
                            {movie.anio}
                        </p>

                        <p>
                            ⭐ {movie.calificacion}
                        </p>

                    </div>
                ))
            }

        </div>
    );
}

export default Home;