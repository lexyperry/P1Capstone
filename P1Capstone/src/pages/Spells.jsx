import React, {useState, useEffect} from "react" ;
import SpellList from "../components/SpellList";
import { useNavigate } from "react-router-dom";

// put search here

function Spells() {
    const [spells, setSpells] = useState([]);
    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/spells")
        .then((r) => r.json())
        .then(setSpells);
    }, []);
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate('/')}>
                Back   
            </button>
            <br /><br />
            <h1>Spells</h1>
            <SpellList spells={spells}></SpellList>
        </div>
    )
}
export default Spells;