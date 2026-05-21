import {

    useEffect,
    useState

} from "react";

import API from "../services/api";

function Dashboard() {

    const [stats, setStats] =
    useState(null);

    useEffect(() => {

        const getStats = async () => {

            try {

                const res =
                await API.get(
                    "/dashboard"
                );

                setStats(res.data);

            } catch (error) {

                console.log(error);
            }
        };

        getStats();

    }, []);

    if (!stats) {

        return <h1>Cargando...</h1>;
    }

    return (

        <div className="container">

            <h1 className="logo">
                📊 Dashboard
            </h1>

            <div className="movies-grid">

                <div className="movie-card">

                    <div className="movie-content">

                        <h2>
                            🎬 Películas
                        </h2>

                        <h1>
                            {stats.totalMovies}
                        </h1>

                    </div>

                </div>

                <div className="movie-card">

                    <div className="movie-content">

                        <h2>
                            👤 Usuarios
                        </h2>

                        <h1>
                            {stats.totalUsers}
                        </h1>

                    </div>

                </div>

                <div className="movie-card">

                    <div className="movie-content">

                        <h2>
                            📝 Reviews
                        </h2>

                        <h1>
                            {stats.totalReviews}
                        </h1>

                    </div>

                </div>

            </div>

            <br />

            <div className="movie-card">

                <div className="movie-content">

                    <h2>
                        ⭐ Top películas
                    </h2>

                    {

                        stats.topMovies.map(

                            movie => (

                                <p key={movie._id}>

                                    {movie.nombre}
                                    — ⭐
                                    {movie.calificacion}

                                </p>
                            )
                        )
                    }

                </div>

            </div>

            <br />

            <div className="movie-card">

                <div className="movie-content">

                    <h2>
                        🎭 Películas por género
                    </h2>

                    {

                        stats.moviesPerGenre.map(

                            item => (

                                <p key={item._id}>

                                    {item._id}
                                    :
                                    {item.total}

                                </p>
                            )
                        )
                    }

                </div>

            </div>

        </div>
    );
}

export default Dashboard;