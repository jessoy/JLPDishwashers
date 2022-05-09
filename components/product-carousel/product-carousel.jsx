import styles from "./product-carousel.module.scss";

const ProductCarousel = ({ image }) => {
  return (
    <div className={styles.productCarousel} aria-pretend="true">
      <img src={image} alt="jessie" style={{ width: "100%", maxWidth: "500px" }} />
    </div>
  );
};

export default ProductCarousel;
