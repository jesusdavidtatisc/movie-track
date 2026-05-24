import { useEffect, useState } from "react";

import axios from "axios";

import Navbar from "../components/Navbar";

import { Link } from "react-router-dom";

function Home() {
    
    const token =
    localStorage.getItem(
            "token"
    );
    const user =
        JSON.parse(

    localStorage.getItem(
        "user"
    )

);

    const [movies, setMovies] =
    useState([]);

    const [showForm, setShowForm] =
    useState(false);

    const [search, setSearch] =
    useState("");

    const [genero, setGenero] =
    useState("");

    const [anio, setAnio] =
    useState("");

    const [rating, setRating] =
    useState("");

    const [nombre, setNombre] =
    useState("");

    const [nuevoGenero, setNuevoGenero] =
    useState("");

    const [nuevoAnio, setNuevoAnio] =
    useState("");

    const [calificacion, setCalificacion] =
    useState("");

    const [imagen, setImagen] =
    useState("");

    const [editingMovie, setEditingMovie] =
    useState(null);

    useEffect(() => {

        getMovies();

    }, []);

    const getMovies =
    async () => {

        try {

            const res =
            await axios.get(
                "http://localhost:5000/api/movies"
            );

            setMovies(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const searchMovies =
    async () => {

        try {

            const res =
            await axios.get(
                `http://localhost:5000/api/movies/search?q=${search}`
            );

            setMovies(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const filterMovies =
    async () => {

        try {

            const res =
            await axios.get(
                `http://localhost:5000/api/movies/filter?genero=${genero}&anio=${anio}&rating=${rating}`
            );

            setMovies(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const addMovie =
    async (e) => {

        e.preventDefault();

        try {

            await axios.post(

                "http://localhost:5000/api/movies",

                {

                        nombre,

                        genero:nuevoGenero,

                         anio:Number(nuevoAnio),

                        calificacion:Number(calificacion),

                         imagen

                },

        {

            headers:{
            Authorization:
            `Bearer ${token}`
             }

        }

     );

            alert(
                "Película agregada"
            );

            setNombre("");

            setNuevoGenero("");

            setNuevoAnio("");

            setCalificacion("");

            setImagen("");

            setShowForm(false);

            getMovies();

        } catch (error) {

             console.log(error);

            console.log(
             error.response?.data
             );

        alert(
         "Error agregando película"
         );
    }
    };

    const updateMovie =
    async (e) => {

        e.preventDefault();

        try {

            await axios.put(

                `http://localhost:5000/api/movies/${editingMovie}`,

    {

        nombre,

        genero:nuevoGenero,

        anio:Number(nuevoAnio),

        calificacion:Number(calificacion),

        imagen

    },

    {

        headers:{

            Authorization:
            `Bearer ${token}`

        }

    }

);

            alert(
                "Película actualizada"
            );

            setEditingMovie(null);

            setNombre("");

            setNuevoGenero("");

            setNuevoAnio("");

            setCalificacion("");

            setImagen("");

            setShowForm(false);

            getMovies();

        } catch (error) {

            console.log(error);
        }
    };

    const deleteMovie =
    async (id) => {

        try {

           await axios.delete(

    `http://localhost:5000/api/movies/${id}`,

    {

        headers:{

            Authorization:
            `Bearer ${token}`

        }

    }

);

            getMovies();

        } catch (error) {

            console.log(error);

            alert(
                "No se pudo eliminar"
            );
        }
    };

    const logout =
    () => {

        localStorage.removeItem(
            "token"
        );

        window.location.href =
        "/login";
    };

    return (

        <div>

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

                movies={movies}

            />

            <div
                style={{
                    padding:"20px"
                }}
            >

                <button

                    onClick={() =>
                        setShowForm(
                            !showForm
                        )
                    }

                    style={{

                        position:"fixed",

                        bottom:"30px",

                        right:"30px",

                        width:"70px",

                        height:"70px",

                        borderRadius:"50%",

                        background:"#e50914",

                        color:"white",

                        border:"none",

                        fontSize:"35px",

                        fontWeight:"bold",

                        cursor:"pointer",

                        boxShadow:"0 0 15px rgba(0,0,0,0.4)",

                        zIndex:1000

                    }}

                >

                    {

                        showForm

                        ?

                        "×"

                        :

                        "+"

                    }

                </button>

            </div>

           {
    showForm && (

        <div

            style={{

                position:"fixed",

                top:0,

                left:0,

                width:"100%",

                height:"100vh",

                background:"rgba(0,0,0,0.7)",

                display:"flex",

                justifyContent:"center",

                alignItems:"center",

                zIndex:999

            }}

        >

            <div

                style={{

                    background:"#1e1e1e",

                    padding:"30px",

                    borderRadius:"16px",

                    width:"400px",

                    display:"flex",

                    flexDirection:"column",

                    gap:"15px",

                    boxShadow:"0 0 20px rgba(0,0,0,0.5)"

                }}

            >

                <h2
                    style={{
                        color:"white",
                        textAlign:"center"
                    }}
                >

                    {

                        editingMovie

                        ?

                        "Editar Película"

                        :

                        "Nueva Película"

                    }

                </h2>

                <form

                    onSubmit={

                        editingMovie

                        ?

                        updateMovie

                        :

                        addMovie

                    }

                    style={{

                        display:"flex",

                        flexDirection:"column",

                        gap:"15px"

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

                            padding:"12px",

                            borderRadius:"8px",

                            border:"none"

                        }}

                    />

                    <input

                        type="text"

                        placeholder="Género"

                        value={nuevoGenero}

                        onChange={(e) =>
                            setNuevoGenero(
                                e.target.value
                            )
                        }

                        required

                        style={{

                            padding:"12px",

                            borderRadius:"8px",

                            border:"none"

                        }}

                    />

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

                            padding:"12px",

                            borderRadius:"8px",

                            border:"none"

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

                            padding:"12px",

                            borderRadius:"8px",

                            border:"none"

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

                            padding:"12px",

                            borderRadius:"8px",

                            border:"none"

                        }}

                    />

                    <button

                        type="submit"

                        style={{

                            background:"#e50914",

                            color:"white",

                            border:"none",

                            padding:"12px",

                            borderRadius:"8px",

                            cursor:"pointer",

                            fontWeight:"bold"

                        }}

                    >

                        {

                            editingMovie

                            ?

                            "Actualizar Película"

                            :

                            "Guardar Película"

                        }

                    </button>

                    <button

                        type="button"

                        onClick={() => {

                            setShowForm(false);

                            setEditingMovie(null);
                        }}

                        style={{

                            background:"#444",

                            color:"white",

                            border:"none",

                            padding:"12px",

                            borderRadius:"8px",

                            cursor:"pointer"

                        }}

                    >

                        Cancelar

                    </button>

                </form>

            </div>

        </div>

    )
}
            <div className="movies-grid">

                {

                    movies.map(movie => (

                        <div

                            key={movie._id}

                            className="movie-card"

                        >

                            <img

                                src={movie.imagen}

                                alt={movie.nombre}

                                onError={(e) => {

                                    e.target.src =
                                    "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg";
                                }}

                                style={{

                                    width:"100%",

                                    height:"320px",

                                    objectFit:"cover",

                                    borderRadius:"12px"

                                }}

                            />

                            <h2>
                                {movie.nombre}
                            </h2>

                            <p>
                                🎭 {movie.genero}
                            </p>

                            <p>
                                📅 {movie.anio}
                            </p>

                            <p>
                                ⭐ {movie.calificacion}/10
                            </p>
                           <p>

                                👥 Audiencia: {

                                    movie.promedioReviews > 0

                                    ?

                                    `${movie.promedioReviews}/5 ⭐`

                                    :

                                    "Sin reseñas"

                                }

                            </p>

                            <Link
                                to={`/movie/${movie._id}`}
                            >

                                <button>

                                    Reseñas

                                </button>

                            </Link>

                            {

    movie.creadoPor?.toString() === user?._id && (

        <button

            onClick={() => {

                setEditingMovie(
                    movie._id
                );

                setNombre(
                    movie.nombre
                );

                setNuevoGenero(
                    movie.genero
                );

                setNuevoAnio(
                    movie.anio
                );

                setCalificacion(
                    movie.calificacion
                );

                setImagen(
                    movie.imagen
                );

                setShowForm(true);
            }}

            style={{

                marginTop:"10px",

                background:"#2563eb",

                color:"white",

                border:"none",

                padding:"10px",

                borderRadius:"8px",

                cursor:"pointer",

                width:"100%"

            }}

        >

            Editar

        </button>

    )
}

                            {

                                movie.creadoPor?.toString() === user?._id && (

                                    <button

                                        onClick={() =>
                                            deleteMovie(
                                                movie._id
                                            )
                                        }

                                        style={{

                                            marginTop:"10px",

                                            background:"crimson",

                                            color:"white",

                                            border:"none",

                                            padding:"10px",

                                            borderRadius:"8px",

                                            cursor:"pointer",

                                            width:"100%"

                                        }}

                                    >

                                        Eliminar

                                    </button>

                                )
                            }

                        </div>

                    ))
                }

            </div>

        </div>
    );
}

export default Home;