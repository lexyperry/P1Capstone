import React, {useState} from "react";

function WizardsCard({wizard}){
    const [showInfo, setShowInfo] = useState(false);

    debugger;

    return (

        <li className="card">
            <img src={wizard.image} alt={wizard.name} />
            <h4>{wizard.name}</h4>
            <p>{wizard.house}</p>
            <p className="wizard-card"></p>
            <button
                className={showInfo ? "primary" : ""}
                onClick={() => setShowInfo(!showInfo)}>
                    Revealio more Infolio
                </button>
            {showInfo && (
                <p>
                    {wizard.patronus == "" ? "Unknown" : wizard.patronus}
                </p>
                
            )}
        <br />
        </li>
    )
    
}
export default WizardsCard;