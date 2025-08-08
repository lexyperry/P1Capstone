import React, {useState} from "react";

function WizardsCard({wizard}){
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="wizard-list">
            <ul className="wizard-card">
                <img src={wizard.image} alt={wizard.name} />
                <h3>{wizard.name}</h3>
                <p>{wizard.house}</p>
                <button
                    className={showInfo ? "primary" : ""}
                    onClick={() => setShowInfo(!showInfo)}>
                        Revealio more Info
                </button>
                {showInfo && (
                    <>
                    <p>
                        Patronus: {wizard.patronus == "" ? "Unknown" : wizard.patronus}
                    </p>
                    <p>
                        Wand wood: {wizard.wand.wood == "" ? "Unknown" : wizard.wand.wood}
                    </p>
                    </>

                )}
            <br />
            </ul>
        </div>
    )
    
}
export default WizardsCard;