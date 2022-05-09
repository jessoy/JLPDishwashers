import styles from "./product-list-item.module.scss";

const ProductListItem = ({ image, price, description }) => {
  return (
    <div className={styles.content}>
      <div>
        <img src={image} alt="jessie" style={{ width: "100%" }} />
      </div>
      <div>{description}</div>
      <div className={styles.price}>{price}</div>
    </div>
  );
};

export default ProductListItem;
