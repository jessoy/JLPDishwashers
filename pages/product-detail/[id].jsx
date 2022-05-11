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
    console.log(error);
    return { error };
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

      {/* header */}
      <div className={styles.header}>
   
        <h1>
        <Link href="/">
          <div className={styles.arrow}>
            <div className={styles.top}></div>
            <div className={styles.bottom}></div>
          </div>
        </Link>
          <div dangerouslySetInnerHTML={{ __html: data.title }} className={styles.title}/>
        {/* <div>x</div> */}
        </h1>
      </div>

  {/* body  */}
      <div className={styles.content}>

  {/* image carousel  */}
        <div className={styles.imageCarousel}><ProductCarousel imageUrls={data.media.images.urls} />
</div>
  {/* price info  */}
        {/* switched div and h3 labels */}
        <div className={styles.priceInfo}>
          <h2>&#163;{data.price.now}</h2>

          <h4>{data.displaySpecialOffer}</h4>
          <h4 className={styles.includedServices}>
            {data.additionalServices.includedServices}
          </h4>
        </div>

  {/* descriptive div */}
        <div className={styles.description}>
          <h3>Product information</h3>

          <p
            dangerouslySetInnerHTML={{
              __html: truncateDescription(data.details.productInformation),
            }}
          ></p>
          {/* too big - reduce this text */}
          <p>Product code: {data.code}</p>
        </div>

  {/* more info Div  */}
  <div className={styles.moreInfo}>
    <h6>Read more</h6>
  </div>
        {/* TBC  */}

  {/* specification div */}
        <div className={styles.specification}>
          <h3>Product specification</h3>
          <ul>
            {/* attributes sorted alphabetically and then displayed */}
            {data.details.features[0].attributes
              .sort(sortAttributesAlphabetically)
              .map((item) => (
                // unique key added
                <li key={data.productId + item.name}>
                  {/* no id in api data  */}
                  <div className={styles.listContainer}>
                    <div dangerouslySetInnerHTML={{ __html: item.name }} ></div>
                    <div className={styles.listValues}>{item.values.join(", ") || item.value}</div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

      </div>
    </Layout>
  );
};

export default ProductDetail;
