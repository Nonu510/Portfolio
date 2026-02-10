import { Link } from 'react-router-dom'
import './error.css'

function Error() {
    return (
        <div className='erreur'>
            <h2>404</h2>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}
 
export default Error