import "../assets/logo.jpg";
import Banner from './Banner'
import ShoppingList from './ShoppingList';
import { ListeDeGourmandises } from "../data/ListeDeGourmandises";
import Panier from "./Panier";
import { useState } from "react";

function App() {
  
  const [panier, updatePanier] = useState([])

return (
<div className="container">
    <Banner />
    <div className="lpa-panier-shopping">
    <ShoppingList 
      ListeDeGourmandises={ListeDeGourmandises}
      panier={panier} updatePanier={updatePanier}
    />
    <Panier panier={panier} updatePanier={updatePanier} />
    </div>
 
</div>
);

}

export default App;



