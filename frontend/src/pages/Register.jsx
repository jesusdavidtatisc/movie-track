import {

    useState

} from "react";

import {

    Link,
    useNavigate

} from "react-router-dom";

import API from "../services/api";

function Register() {

    const navigate =
    useNavigate();

    const [form, setForm] =
    useState({

        username: "",
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

    const register = async () => {

        try {

            await API.post(

                "/auth/register",

                form

            );

            alert(
                "Usuario creado"
            );

            navigate("/login");

        } catch (error) {

            console.log(error);

            alert(
                "Error al registrar"
            );
        }
    };

    return (

        <div className="container">

            <div className="movie-card">

                <div className="movie-content">

                    <h1>
                        Registro
                    </h1>

                    <input

                        type="text"

                        name="username"

                        placeholder="Usuario"

                        onChange={handleChange}

                    />

                    <br />
                    <br />

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
                        onClick={register}
                    >

                        Registrarse

                    </button>

                    <br />
                    <br />

                    <Link to="/login">

                        Ya tengo cuenta

                    </Link>

                </div>

            </div>

        </div>
    );
}

export default Register;