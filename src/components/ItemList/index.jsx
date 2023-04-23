import { Link } from 'react-router-dom';
import styles from './itemList.module.css';

function ItemList({product}) {
  return (
    <Link className={styles.link} to={`/item/${product.id}`}>
      <div className={styles.card}>
        <div className={styles.cardBody}>
          <img className={styles.cardImg} src={product.img1} alt="imagen principal" />
          <h2 className={styles.cardTitle}>{product.title}</h2>
          <p className={styles.cardPrice}>${product.precio}</p>
        </div>
        <button className={styles.cardBtn}>Ver producto</button>
      </div>
    </Link>
  );
}

export default ItemList;