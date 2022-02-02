import babka from '../assets/babka.jpg'
import briocheDesRois from '../assets/briochedesrois.jpg'
import briochesNatures from '../assets/briochesnatures.jpg'
import caneles from '../assets/caneles.jpg'
import chocolatines from '../assets/chocolatines.jpg'
import croissants from '../assets/croissants.jpg'
import galetteDesRois from '../assets/galetterois.jpg'
import madeleines from '../assets/madeleines.jpg'
import painsAuLait from '../assets/painsaulait.jpg'
import tarteCitron from '../assets/tartecitron.jpg'
import tarteFraise from '../assets/tartefraise.jpg'
import financiers from '../assets/financiers.jpg'


export const ListeDeGourmandises = [
{
    name: 'Cannelés',
    id: '1p',
    quantity: 6,
    category: 'Pâtisserie',
    price: 10,
    photo: <img src={caneles} alt='caneles' className='photo'/>
},
{
    name: 'Madeleines',
    id: '2p',
    quantity: 6,
    category: 'Pâtisserie',
    price: 10,
    photo: <img src={madeleines} alt='madeleines' className='photo'/>
},
{
    name: 'Financiers',
    id: '3p',
    quantity: 6,
    category: 'Pâtisserie',
    price: 8,
    photos: <img src={financiers} alt='financiers' className='photo'/>
},
{
    name: 'Brioche nature',
    id: '1v',
    quantity: 2,
    category: 'Viennoiserie',
    price: 30,
    photo: <img src={briochesNatures} alt='brioches natures' className='photo'/>
},
{
    name: 'Pains au lait',
    id: '2v',
    quantity: 10,
    category: 'Viennoiserie',
    price: 15,
    photo: <img src={painsAuLait} alt='pains' className='photo'/>
},
{
    name: 'Chocolatines',
    id: '3v',
    quantity: 10,
    category: 'Viennoiserie',
    price: 15,
    photo: <img src={chocolatines} alt='chocolatines' className='photo'/>
},
{
    name: 'Croissants',
    id: '4v',
    quantity: 10,
    category: 'Viennoiserie',
    price: 8,
    photo: <img src={croissants} alt='croissants' className='photo'/>
},
{
    name: 'Tarte aux Fraises pour 6 personnes',
    id: '5p',
    quantity: 1,
    category: 'Pâtisserie',
    price: 15,
    photo: <img src={tarteFraise} alt='fraise' className='photo'/>
},
{
    name: 'Brioche des Rois',
    id: '5v',
    quantity: 1,
    category: 'Viennoiserie',
    price: 15,
    photo: <img src={briocheDesRois} alt='brioche rois' className='photo'/>
},
{
    name: 'Galette des Rois',
    id: '6p',
    quantity: 1,
    category: 'Pâtisserie',
    price: 15,
    photo: <img src={galetteDesRois} alt='galette' className='photo'/>
},
{
    name: 'Tarte aux Citrons pour 6 personnes',
    id: '7p',
    quantity: 1,
    category: 'Pâtisserie',
    price: 15,
    photo: <img src={tarteCitron} alt='citron' className='photo'/>
},
{
    name: 'Babka Chocolat',
    id: '6v',
    quantity: 6,
    category: 'Pâtisserie',
    price: 12,
    photo: <img src={babka} alt='babka' className='photo'/>
},
]