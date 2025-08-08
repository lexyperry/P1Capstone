import React, {useState, useEffect} from "react" ;
import SpellList from "../components/SpellList";

// put search here

function Spells() {
    const [spells, setSpells] = useState([]);
    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/spells")
        .then((r) => r.json())
        .then(setSpells);
    }, []);
    return (
        <>
            <h1>Spells</h1>
            <SpellList spells={spells}></SpellList>
        </>
    )
}
export default Spells;