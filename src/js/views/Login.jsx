import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

//create your first component
const Login = () => {
    const [user, setUser] = useState('')
    const navigate = useNavigate();

    const goToUserPage = () => {
        if (user) return navigate(`/userpage/${user}`)
        alert('Enter username');
    }

    return (
        <div>
            <Link to="/">🔙Take me to home</Link>
            <div className="text-center">
                <input onChange={(e) => setUser(e.target.value)} value={user} />
                <button onClick={goToUserPage}>
                    Go to user page
                </button>
            </div>
        </div>
    );
};

export default Login;
