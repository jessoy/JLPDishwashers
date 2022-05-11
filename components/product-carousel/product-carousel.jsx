import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./product-carousel.module.scss";

// imported third party carousel package

const ProductCarousel = ({ imageUrls }) => {

  imageUrls.map((url, index) => {
    return (
      <div key={index}>
        <img src={url} alt="image1" />
      </div>
    );
  });

  return (
    <div className={styles.productCarousel} aria-pretend="true">
      {/* <img src={image} alt="product image" style={{ width: "100%", maxWidth: "500px" }} /> */}

      <Carousel
        showThumbs={false}
        // autoPlay
        infiniteLoop="true"
        stopOnHover="true"
        showStatus={false}
        showArrows={false}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        {!imageUrls
          ? null
          : imageUrls.map((url, index) => {
              return (
                <div key={index}>
                  <img
                    src={url}
                    alt="product image"
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

