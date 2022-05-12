import styles from "./product-list-item.module.scss";

const ProductListItem = ({ image, price, description }) => {
  return (
    <div className={styles.content}>
      <img src={image} alt={description} style={{ width: "100%" }} />
      <p>{description}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
};

export default ProductListItem;
