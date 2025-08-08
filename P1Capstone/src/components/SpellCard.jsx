import React from 'react';

function SpellCard({ spell }) {
    return(
        <li className='spell-card'>
            <h3>{spell.name}</h3>
            <p>{spell.description}</p>
        </li>
    );
}

export default SpellCard;
