import { Link, useLocation } from 'react-router-dom'
import styles from './Botao.module.css'

export const Botao = ({ url, children }) => {
 
    return (
        <Link to={url} className={styles.botaoDestacado}>
            {children}
        </Link>
    )
}

export const BotaoFormulario = ({type, children}) => { 
    return (
        <button className={styles.botao} type={type} >{children}</button> 
    )
}



     

