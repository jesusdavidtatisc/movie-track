import { useState } from "react";

import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {

    const [user, setUser] = useState(

        JSON.parse(
            localStorage.getItem("user")
        )
    );

    return (

        <>
            {
                user
                ? (
                    <Home
                        user={user}
                        setUser={setUser}
                    />
                )
                : (
                    <Login
                        setUser={setUser}
                    />
                )
            }
        </>
    );
}

export default App;