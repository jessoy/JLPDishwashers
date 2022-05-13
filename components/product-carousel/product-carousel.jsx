import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./product-carousel.module.scss";

// imported third party carousel package
const ProductCarousel = ({ imageUrls, imageDescription }) => {

  return (
    <div className={styles.productCarousel} >

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop="true"
        stopOnHover="true"
        showStatus={false}
        showArrows={false}
      >
        {!imageUrls
          ? null
          : imageUrls.map((url, index) => {
              return (
                <div key={index}>
                  <img
                    src={url}
                    alt={imageDescription}
                    style={{ width: "100%", maxWidth: "500px" }}
                  />
                </div>
              );
            })}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;

