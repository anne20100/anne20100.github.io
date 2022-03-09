// 1) créer et paramétrer le bouton panier pour ouverture/fermeture du panier
// 2) ajout au panier
// 3) afficher quantité, nom article, prix
// 4) afficher et mise à jour total du panier
// 5) supprimer un article du panier

import React, { useState } from "react";
import { ListeDeGourmandises } from "../data/ListeDeGourmandises";




function Panier(){

    const [panier, updatePanier] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const total = panier.reduce((acc, gourmandise) => acc + gourmandise.amount * gourmandise.price, 0)
    
        return isOpen ? (
            <div className="lpa-panier">
               <button onClick={() => setIsOpen(false)}>Fermer</button>
                <h2>Panier</h2>
                {panier.map(({name,price, amount}, index) => (
                    <div key={`${name}-${index}`}>
                        {name} {price}€ x {amount}
                        </div>
                ))}
                <h3>Total : {total}€</h3>
                <button onClick={() => updatePanier(0)}>Vider le panier</button>
            </div>
        ) : (
            <div className="lpa-panier-ferme">
            <button onClick={() => setIsOpen(true)}>Ouvrir le Panier</button>
            </div>
        )
    
}

export default Panier