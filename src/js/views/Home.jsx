import React from "react";
import { useNavigate } from "react-router";

//create your first component
const Home = () => {
	const navigate = useNavigate();
	return (
		<div className="text-center">
			<h1>
				React router
			</h1>
			<button onClick={() => navigate("/login")}>
				Login
			</button>
		</div>
	);
};

export default Home;
