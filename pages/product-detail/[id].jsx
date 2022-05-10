import ProductCarousel from "../../components/product-carousel/product-carousel";
import axios from "axios";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import Link from "next/link";
import styles from "./product-detail.module.scss";
import {
  truncateDescription,
  sortAttributesAlphabetically,
} from "../../utils/general";
import { productDetailsAPI } from "../../config/general";

export async function getServerSideProps(context) {
  const id = context.params.id;
  try {
    let response = await axios.get(productDetailsAPI + id);
    const data = response.data;
    
    return {
      props: { data },
    };
  } catch (error) {
    console.log(error)
    return {error}
  }
}

const ProductDetail = ({ data }) => {
  return (
    // head required for SEO
    <Layout>
      <Head>
        <title>{data.title}</title>
        <meta name="og:title" content={data.title} />
        <meta name="og:image" content={data.media.images.urls[0]} />
        {/* add description here - short description */}
      </Head>

      <Link href="/">
        <div className={styles.arrow}>
          <div className={styles.top}></div>
          <div className={styles.bottom}></div>
        </div>
      </Link>
      <h1>
        <div dangerouslySetInnerHTML={{ __html: data.title }} />
      </h1>
      <div>
        {/* <ProductCarousel image={data.media.images.urls[0]} /> */}
        <ProductCarousel imageUrls={data.media.images.urls} />

        {/* switched div and h3 labels */}
        {/* price div  */}
        {/* this div only to move over in portrait mode */}
        <div>
          <h1>&#163;{data.price.now}</h1>

          <h3>{data.displaySpecialOffer}</h3>
          <h3>{data.additionalServices.includedServices}</h3>
        </div>

        <div>
          {/* descriptive div */}
          <h3>Product information</h3>

          <div
            dangerouslySetInnerHTML={{
              __html: truncateDescription(data.details.productInformation),
            }}
          ></div>
          {/* too big - reduce this text */}
          <p>Product code: {data.code}</p>
        </div>

        {/* specification div */}
        <h3>Product specification</h3>
        <ul>
          {/* attributes sorted alphabetically and then displayed */}
          {data.details.features[0].attributes
            .sort(sortAttributesAlphabetically)
            .map((item) => (
              // unique key added
              <li key={data.productId + item.name}>
                {/* no id in api data  */}
                <div>
                  <div dangerouslySetInnerHTML={{ __html: item.name }} />
                  {item.values.join(", ") || item.value}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProductDetail;
