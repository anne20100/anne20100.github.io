import logo from '../assets/logo.jpg'
import '../style/Banner.css'
import Panier from './Panier'

function Banner() {
    return (
    <div className='title-logo'>
    <h1 className='lpa-title'>La Patisserie selon Anne</h1>
    <img className='lpa-logo' src={logo} alt='logo' />
    </div>
    )
}

export default Banner