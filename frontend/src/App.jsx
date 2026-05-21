import {

    Routes,
    Route,
    Navigate

} from "react-router-dom";

import {

    useState,
    useEffect

} from "react";

import Home from "./pages/Home";

import Login from "./pages/Login";

import Register from "./pages/Register";

import Dashboard from "./pages/Dashboard";

import MovieDetails from "./pages/MovieDetails";

function App() {

    const [user, setUser] =
    useState(undefined);

    useEffect(() => {

        const savedUser =

        localStorage.getItem("user");

        if (savedUser) {

            setUser(
                JSON.parse(savedUser)
            );

        } else {

            setUser(null);
        }

    }, []);

    if (user === undefined) {

        return <h1>Cargando...</h1>;
    }

    return (

        <Routes>

            <Route

                path="/"

                element={

                    user ?

                    <Home

                        user={user}

                        setUser={setUser}

                    />

                    :

                    <Navigate to="/login" />

                }

            />

            <Route

                path="/login"

                element={

                    <Login
                        setUser={setUser}
                    />

                }

            />

            <Route

                path="/register"

                element={
                    <Register />
                }

            />

            <Route

                path="/dashboard"

                element={

                    user ?

                    <Dashboard />

                    :

                    <Navigate to="/login" />

                }

            />

            <Route

                path="/movie/:id"

                element={

                    user ?

                    <MovieDetails
                        user={user}
                    />

                    :

                    <Navigate to="/login" />

                }

            />

        </Routes>
    );
}

export default App;