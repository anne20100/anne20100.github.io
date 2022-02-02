import '../style/ShoppingList.css'

export default function ShoppingList({ListeDeGourmandises}) {

    return (
        <div className='lpa-articles'>
            {ListeDeGourmandises.map((gourmandise) => (
                <ul>
                    <li className='name'key={`${gourmandise.name}`}> { gourmandise.name } </li>
                    <li className='photo' key={`${gourmandise.photo}`}>{ gourmandise.photo }</li>
                    <li className='quantity' key={`${gourmandise.quantity}`}>Quantité: {gourmandise.quantity}</li>
                    <li className='price' key={`${gourmandise.price}`}>Prix: { gourmandise.price }€</li>
                    <button className='acheter'>Acheter</button>
                </ul>
            ))}
        </div>
    )
    

}


