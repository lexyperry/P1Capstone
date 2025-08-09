import React from 'react';

function SpellCard({ spell }) {
    return(
        <ul className='spell-card'>
            <h3>{spell.name}</h3>
            <p>{spell.description}</p>
        </ul>
    );
}

export default SpellCard;
