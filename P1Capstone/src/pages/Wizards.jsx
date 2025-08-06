import React, {useState, useEffect} from "react" ;
import WizardList from "../components/WizardsList";


function Wizards() {
    const [wizards, setWizards] = useState([]);
    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then((r) => r.json())
        .then(setWizards);
    }, []);
    return (
        <>
            Welcome to the Wonderful World of Wizards
            <WizardList wizards={wizards}></WizardList>
        </>
    )
}
export default Wizards;