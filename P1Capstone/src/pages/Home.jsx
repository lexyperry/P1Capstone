import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (
        <>
            <h3>
                Choose Your Path
            </h3>
            <button onClick={() => navigate('/wizards')}>
                Visit our Hall of Wonderful Wizards   
            </button>
            <button onClick={() => navigate('/spells')}>
                Click to Study your Spells   
            </button>
        </>
    )
}

export default Home; 