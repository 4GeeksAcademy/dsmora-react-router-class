import React from "react";
import { useNavigate, useParams } from "react-router";

//create your first component
const UserPage = () => {
    const params = useParams();
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <h1>
                {params.user}
            </h1>
            <button onClick={() => navigate("/home")}>
                Take me home please 🏠
            </button>
        </div>
    );
};

export default UserPage;
