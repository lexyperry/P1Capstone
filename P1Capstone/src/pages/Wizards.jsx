import React, {useState, useEffect} from "react" ;
import WizardList from "../components/WizardsList";
import Search from "../components/Search"


function Wizards() {
    const [wizards, setWizards] = useState([]);
    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then((r) => r.json())
        .then(setWizards);
    }, []);

    const onSearch=(value) =>{
        console.log(value)
    }
    return (
        <div>
            Welcome to the Wonderful World of Wizards
            <Search onSearch={onSearch}/>
            <WizardList wizards={wizards}></WizardList>
            
        </div>
    )
}
export default Wizards;