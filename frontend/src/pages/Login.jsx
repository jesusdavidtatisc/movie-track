import { useState } from "react";
import API from "../services/api";

function Login({ setUser }) {

    const [isRegister, setIsRegister] =
    useState(false);

    const [form, setForm] = useState({

        username: "",
        email: "",
        password: ""

    });

    const handleChange = (e) => {

        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            if (isRegister) {

                await API.post(
                    "/auth/register",
                    form
                );

                alert("Usuario registrado");

                setIsRegister(false);

            } else {

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
                    JSON.stringify(res.data.user)
                );

                setUser(res.data.user);
            }

        } catch (error) {

            console.log(error);

            alert("Error");
        }
    };

    return (

        <div className="auth-container">

            <h1 className="auth-title">
                    🎬 MovieTrack
                    </h1>
            <form onSubmit={handleSubmit}>

                {
                    isRegister && (

                        <input
                            type="text"
                            name="username"
                            placeholder="Username"
                            onChange={handleChange}
                        />
                    )
                }

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={handleChange}
                />

                <button type="submit">

                    {
                        isRegister
                        ? "Registrarse"
                        : "Iniciar sesión"
                    }

                </button>

            </form>

            <p
                onClick={() =>
                    setIsRegister(!isRegister)
                }
                style={{ cursor: "pointer" }}
            >

                {
                    isRegister
                    ? "Ya tienes cuenta?"
                    : "Crear cuenta"
                }

            </p>

        </div>
    );
}

export default Login;