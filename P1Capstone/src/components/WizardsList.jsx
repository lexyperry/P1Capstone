import React from "react";
import WizardsCard from './WizardsCard'

function WizardsList({wizards}){
    return (
        <ul>
            {wizards.map((wizard) => (
                <WizardsCard key={wizard.id} wizard={wizard} />
            ))}

        </ul>
    )
}
export default WizardsList;