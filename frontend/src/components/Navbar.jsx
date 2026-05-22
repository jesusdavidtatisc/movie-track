import { Link } from "react-router-dom";

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

    logout,

    movies

}) {

    const years = [

        ...new Set(

            movies.map(
                movie =>
                movie.anio
            )

        )

    ].sort((a, b) => a - b);

    const ratings = [];

    for (
        let i = 1;
        i <= 10;
        i++
    ) {

        ratings.push(i);
    }

    const genres = [

        ...new Set(

            movies.map(
                movie =>
                movie.genero
            )

        )

    ];

    return (

        <nav
            className="navbar"
        >

            <Link
                to="/"
                style={{
                    textDecoration:"none"
                }}
            >

                <h1
                    className="logo"
                >

                    🎬 MovieTrack

                </h1>

            </Link>

            <div
                className="nav-center"
            >

                <input

                    type="text"

                    placeholder="Buscar película..."

                    value={search}

                    onChange={(e) =>

                        setSearch(
                            e.target.value
                        )

                    }

                />

                <button
                    onClick={searchMovies}
                >

                    Buscar

                </button>

            </div>

            <div
                className="filters"
            >

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

                    {

                        genres.map(
                            genre => (

                            <option
                                key={genre}
                                value={genre}
                            >

                                {genre}

                            </option>

                        ))
                    }

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

                        years.map(year => (

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
                        Rating
                    </option>

                    {

                        ratings.map(rate => (

                            <option
                                key={rate}
                                value={rate}
                            >

                                {rate}

                            </option>

                        ))
                    }

                </select>

                <button
                    onClick={filterMovies}
                >

                    Filtrar

                </button>

            </div>

            <button
                onClick={logout}
                className="logout-btn"
            >

                Cerrar Sesión

            </button>

        </nav>
    );
}

export default Navbar;