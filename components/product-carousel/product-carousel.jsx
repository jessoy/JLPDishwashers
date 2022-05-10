import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "./product-carousel.module.scss";
import Image from "next/image";

// imported third party carousel package

const ProductCarousel = ({ imageUrls }) => {
  // console.log(imageUrls);

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
        showThumbs="false"
        infiniteLoop="true"
        // style={{ width: "100%", maxWidth: "500px" }}
      >
        {/* {imageUrls ? ( */}
        {imageUrls.map((url, index) => {
          return (
            <div key={index}>
              <img
                src={url}
                alt="product image"
                style={{ width: "100%", maxWidth: "500px" }}
              />
              {/* <p className="legend">Image 1</p> */}
            </div>
          );
        })}

      </Carousel>
    </div>
  );
};

export default ProductCarousel;

// add images to carousel
// map over media - images
