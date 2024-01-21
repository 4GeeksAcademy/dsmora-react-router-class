import React from "react";
import { useNavigate } from "react-router";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="text-center">
                <h1>
                    Parece que lo que buscas no existe 😭
                </h1>
                <button onClick={() => navigate('/')}>
                    Volver a la home
                </button>
            </div>
        </div>
    );
};

export default NotFound;
