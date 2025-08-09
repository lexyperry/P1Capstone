import React, {useState, useEffect} from "react" ;
import WizardList from "../components/WizardsList";
import Search from "../components/Search"
import { useNavigate } from "react-router-dom";

function Wizards() {
    const [wizards, setWizards] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/characters")
        .then((r) => r.json())
        .then(setWizards);
    }, []);
    const navigate = useNavigate();

    const onSearch=(value) =>{
        setSearchValue(value);
    }
   
    const theChosenOnes = wizards.filter((wizard) => 
        wizard.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (
        <div>
            <button onClick={() => navigate('/')}>
                Back   
            </button>
            <br /><br />
            Welcome to the Wonderful World of Wizards
            <Search onSearch={onSearch}/>
            <WizardList wizards={theChosenOnes}></WizardList>
            
        </div>
    )
}
export default Wizards;