import { useEffect, useState } from "react";
import axios from "axios";

function App() {

    const [movies, setMovies] = useState([]);

    const [form, setForm] = useState({
        nombre: "",
        genero: "",
        anio: "",
        calificacion: ""
    });

    const API = "http://localhost:5000/api/movies";

    const getMovies = async () => {

        const res = await axios.get(API);

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

        await axios.post(API, form);

        getMovies();

        setForm({
            nombre: "",
            genero: "",
            anio: "",
            calificacion: ""
        });
    };

    return (

        <div className="container">

            <h1>🎬 MovieTrack</h1>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={handleChange}
                />

                <input
                    type="text"
                    name="genero"
                    placeholder="Género"
                    value={form.genero}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="anio"
                    placeholder="Año"
                    value={form.anio}
                    onChange={handleChange}
                />

                <input
                    type="number"
                    name="calificacion"
                    placeholder="Calificación"
                    value={form.calificacion}
                    onChange={handleChange}
                />

                <button type="submit">
                    Agregar película
                </button>

            </form>

            <hr />

            <h2>Películas</h2>

            {
                movies.map((movie) => (

                    <div
                        key={movie._id}
                        className="movie-card"
                    >

                        <h3>{movie.nombre}</h3>

                        <p>
                            Género: {movie.genero}
                        </p>

                        <p>
                            Año: {movie.anio}
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

export default App;