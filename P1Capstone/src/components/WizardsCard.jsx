import React, {useState} from "react";

function WizardsCard({wizard}){
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="wizard-list">
            <ul className={`wizard-card wizard-card-${wizard.house.toLowerCase()}`}>
                <img src={wizard.image} 
                    alt={`No image for ${wizard.name}`}
                    loading="lazy"/>
                <h3>{wizard.name}</h3>
                <p className={`wizard-p wizard-p-${wizard.house.toLowerCase()}`}>{wizard.house}</p>
                <button
                    className={showInfo ? "primary" : ""}
                    onClick={() => setShowInfo(!showInfo)}>
                        Revealio more Info
                </button>
                {showInfo && (
                    <>
                    <p className={`wizard-p wizard-p-${wizard.house.toLowerCase()}`}>
                        Patronus: {wizard.patronus == "" ? "Unknown" : wizard.patronus}
                    </p>
                    <p className={`wizard-p wizard-p-${wizard.house.toLowerCase()}`}>
                        Wand wood: {wizard.wand.wood == "" ? "Unknown" : wizard.wand.wood}
                    </p>
                    </>

                )}
            </ul>
        </div>
    )
    
}
export default WizardsCard;