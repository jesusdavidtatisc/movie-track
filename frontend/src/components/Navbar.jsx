import {

    Link,
    useNavigate

} from "react-router-dom";

function Navbar({

    search,
    setSearch,
    searchMovies,

    genero,
    setGenero,

    anio,
    setAnio,

    rating,
    setRating,

    filterMovies,

    logout

}) {

    const navigate =
    useNavigate();

    return (

        <div className="navbar">

            <div className="navbar-left">

                <h1 className="logo">
                    🎬 MovieTrack
                </h1>

            </div>

            <div className="navbar-center">

                <input

                    type="text"

                    placeholder="Buscar películas..."

                    value={search}

                    onChange={(e) =>

                        setSearch(
                            e.target.value
                        )

                    }

                    className="search-input"

                />

                <button
                    onClick={searchMovies}
                >

                    Buscar

                </button>

                <select

                    value={genero}

                    onChange={(e) =>

                        setGenero(
                            e.target.value
                        )

                    }

                >

                    <option value="">
                        Género
                    </option>

                    <option value="Action">
                        Acción
                    </option>

                    <option value="Drama">
                        Drama
                    </option>

                    <option value="Sci-Fi">
                        Ciencia ficción
                    </option>

                    <option value="Comedy">
                        Comedia
                    </option>

                    <option value="Horror">
                        Terror
                    </option>

                    <option value="Thriller">
                        Thriller
                    </option>

                    <option value="Adventure">
                        Aventura
                    </option>

                    <option value="Animation">
                        Animación
                    </option>

                </select>

                <select

                    value={anio}

                    onChange={(e) =>

                        setAnio(
                            e.target.value
                        )

                    }

                >

                    <option value="">
                        Año
                    </option>

                    {

                        Array.from(

                            {

                                length: 40

                            },

                            (_, i) => 2025 - i

                        ).map(year => (

                            <option
                                key={year}
                                value={year}
                            >

                                {year}

                            </option>

                        ))
                    }

                </select>

                <select

    value={rating}

    onChange={(e) =>

        setRating(
            e.target.value
        )

    }

>

    <option value="">
        Rating mínimo
    </option>

    <option value="1">
        1
    </option>

    <option value="2">
        2
    </option>

    <option value="3">
        3
    </option>

    <option value="4">
        4
    </option>

    <option value="5">
        5
    </option>

    <option value="6">
        6
    </option>

    <option value="7">
        7
    </option>

    <option value="8">
        8
    </option>

    <option value="9">
        9
    </option>

    <option value="10">
        10
    </option>

</select>

                <button
                    onClick={filterMovies}
                >

                    Filtrar

                </button>

            </div>

            <div className="navbar-right">

                <Link to="/dashboard">

                    <button>
                        Dashboard
                    </button>

                </Link>

                <button

                    onClick={() => {

                        logout();

                        navigate("/login");

                    }}

                >

                    Logout

                </button>

            </div>

        </div>
    );
}

export default Navbar;