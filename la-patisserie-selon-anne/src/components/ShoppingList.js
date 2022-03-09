import React, { useState } from "react";
import "../style/ShoppingList.css";

function ShoppingList({ panier, updatePanier, ListeDeGourmandises }) {
  const [activeCategory, setActiveCategory] = useState("");

  return (
    <div className="lpa-shoppingList">
      <div className="lpa-filtre">
        <select
          value={activeCategory}
          onChange={(event) => setActiveCategory(event.target.value)}
          className="lpa-filtre-select"
        >
          <option value="">Sélectionnez le type de Gourmandise souhaité</option>
          {ListeDeGourmandises.reduce((acc, gourmandise) => {
            if (acc.indexOf(gourmandise.category) === -1) {
              acc.push(gourmandise.category);
            }
            return acc;
          }, []).map((category) => (
            <option selected value={category}>
              {category}
            </option>
          ))}
        </select>

      </div>

      <div className="liste-gourmandises">
        {ListeDeGourmandises.filter((gourmandise)=>{
            if(activeCategory === "") {
                return true
            }
            return gourmandise.category === activeCategory
        }).map((gourmandise, i) => (
          <div key={gourmandise.name} className="gourmandise">
            <h1 className="name"> {gourmandise.name} </h1>
            <img src={gourmandise.photo} alt="financiers" className="photo" />
            <ul>
              <li className="quantity">Quantité: {gourmandise.quantity}</li>
              <li className="price">Prix: {gourmandise.price}€</li>
            </ul>
            <button
              className="click"
              onClick={() => updatePanier(panier + 1)}
            >
              Ajouter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShoppingList;
