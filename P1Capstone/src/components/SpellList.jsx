import React from "react";
import SpellCard from "./SpellCard";

function SpellList({ spells }) {
  return (
    <ul className="spell-list">
      {spells.map((spell) => (
        <SpellCard key={spell.name} spell={spell} />
      ))}
    </ul>
  );
}

export default SpellList;