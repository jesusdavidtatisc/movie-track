import {

    useState

} from "react";

import {

    Link,
    useNavigate

} from "react-router-dom";

import API from "../services/api";

function Login({ setUser }) {

    const navigate =
    useNavigate();

    const [form, setForm] =
    useState({

        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]:
            e.target.value

        });
    };

    const login =
    async () => {

        try {

            const res =
            await API.post(

                "/auth/login",

                form

            );

            localStorage.setItem(

                "token",

                res.data.token

            );

            localStorage.setItem(

                "user",

                JSON.stringify(
                    res.data.user
                )

            );

            setUser(
                res.data.user
            );

            navigate("/");

        } catch (error) {

            console.log(error);

            alert(
                "Credenciales incorrectas"
            );
        }
    };

    return (

        <div className="container">

            <div className="movie-card">

                <div className="movie-content">

                    <h1>
                        Iniciar sesión
                    </h1>

                    <input

                        type="email"

                        name="email"

                        placeholder="Correo"

                        onChange={handleChange}

                    />

                    <br />
                    <br />

                    <input

                        type="password"

                        name="password"

                        placeholder="Contraseña"

                        onChange={handleChange}

                    />

                    <br />
                    <br />

                    <button
                        onClick={login}
                    >

                        Entrar

                    </button>

                    <br />
                    <br />

                    <Link to="/register">

                        Crear cuenta

                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Login;