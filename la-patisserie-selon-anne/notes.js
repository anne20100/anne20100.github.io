// function Chat() {
//   // créer etat dort / dortpas
//   const [dort, setDort] = useState(true);

//   return (
//     <div>
//       <h1>Chat</h1>
//       dort: {dort ? "oui" : "non"}
//       <br />
//       <button
//         type="button"
//         onClick={() => {
//           // si chat dort
//           if (dort) {
//             // le reveiller (dort = false)
//             setDort(false);
//           } else {
//             alert("ronron");
//           }
//         }}
//       >
//         caresser
//       </button>
//       <button
//         type="button"
//         onClick={() => {
//           // chat qui dort à la valeur de dort à true
//           setDort(true);
//         }}
//       >
//         endormir
//       </button>
//     </div>
//   );
// }

// function MonSuperSelect() {
//   const [categorie, setCategorie] = useState("");
//   // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//   return (
//     <div>
//       categorie = {categorie}
//       <br />
//       <select
//         onChange={(event) => {
//           setCategorie(event.target.value);
//         }}
//       >
//         <option valeur="">selectionner type patisserie</option>
//         {ListeDeGourmandises.reduce((accumulateur, gourmandise) => {
//           if (accumulateur.indexOf(gourmandise.category) === -1) {
//             accumulateur.push(gourmandise.category);
//           }
//           return accumulateur;
//         }, []).map((category) => (
//           <option valeur={category}>{category}</option>
//         ))}
//       </select>
//       <br />
//       {ListeDeGourmandises.filter((gourmandise) => {
//         return gourmandise.category === categorie;
//       }).map((gourmandise, i) => {
//         return (
//           <div key={i}>
//             {gourmandise.name}: {gourmandise.category}
//           </div>
//         );
//       })}
//     </div>
//   );
// }


// const tableau = [
//     {
//         prix: 12,
//         categorie: "categorie 1",
//         nom: "produit 1",
//     },
//     {
//         prix: 10,
//         categorie: "categorie 1",
//         nom: "produit 2",
//     },
//     {
//         prix: 100,
//         categorie: "categorie 2",
//         nom: "produit 3",
//     },
// ]

// utiliser map pour avoir un tableau de categories

// {tableau.map((listeCategories) => {
//   return listeCategories.categorie})}
  
//   console.log(tableauCategorie)


// utiliser reduce pour avoir la somme des prix des objets

// const prixInitial = 0

// const prixTotal = [{prix:12}, {prix:10}, {prix:100}].reduce((accumulateur, valeurCourante) => accumulateur + valeurCourante.prix, prixInitial)
// console.log(prixTotal)


// utiliser filter pour avoir que les produits dont le prix est inférieur à 20€

// {tableau.filter((prixParDouze) => {
//   return prixParDouze.prix < 12
// })}




// utiliser ...... pour avoir la liste des catégories sans doublons


// tableau.filter((categorie) => {
//   tableau.indexOf(tableau.categorie)})




// faire une page à la google avec un champs texte et sauvegarder dans un local storage