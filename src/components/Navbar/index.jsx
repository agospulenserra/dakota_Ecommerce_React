import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import CartWidget from '../CartWidget';

const Navbar = ({carritoIcono}) => {

  return (

    <div className={styles.container}>
      <Link className={styles.link} to="/">
        <p>Dako<span>ta</span></p>
      </Link>
      <ul className={styles.listaNav}>
          <li><Link className={styles.link} to='/products'>Productos</Link></li>
          <li><Link className={styles.link} to='/category/Jeans'>Jeans</Link></li>
          <li><Link className={styles.link} to='/category/Buzos'>Buzos</Link></li>
          <li>Sobre nosotros</li>
      </ul>
      <div className={styles.carritoDiv}>
        <Link className={styles.link} to='/cart'>
          <CartWidget />
        </Link>
      </div>
    </div>

  )

}

export default Navbar