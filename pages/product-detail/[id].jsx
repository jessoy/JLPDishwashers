import ProductCarousel from "../../components/product-carousel/product-carousel";
import axios from "axios";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import Link from "next/link";
import styles from "./product-detail.module.scss";
import {
  truncateDescription,
  sortAttributesAlphabetically,
  putSpaceAfterFullStop,
} from "../../utils/general";
import { productDetailsAPI } from "../../config/general";
import Arrow from "../../components/arrow/arrow";
import MoreInfo from "../../components/moreInfo/moreInfo.jsx";

export async function getServerSideProps(context) {
  const id = context.params.id;
  try {
    let { data, errors } = await axios.get(productDetailsAPI + id);
    if (errors || !data) {
      return { notFound: true };
    }

    return {
      props: { data },
    };
  } catch (error) {
    console.log(error);
    return { notFound: true };

  }
}

const ProductDetail = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>{data.title}</title>
        <meta name="og:title" content={data.title} />
        <meta name="og:image" content={data.media.images.urls[0]} />
        <meta name="og:description" content={data.skus[0].skuTitle} />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <div>
            <Arrow />
          </div>
        </Link>
        <h1
          dangerouslySetInnerHTML={{ __html: data.title }}
          className={styles.title}
        />
      </header>

      {/* body  */}
      <div className={styles.content}>
        
        {/* image carousel  */}
        <div className={styles.imageCarousel}>
          <ProductCarousel
            imageUrls={data.media.images.urls}
            imageDescription={data.title}
          />
        </div>

        {/* price info  */}
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
          <div className={styles.code}>
            <p
              dangerouslySetInnerHTML={{
                __html: putSpaceAfterFullStop(
                  truncateDescription(data.details.productInformation)[0]
                ),
              }}
            ></p>
            <p>Product code: {data.code}</p>
          </div>
        </div>

        {/* more info Div  */}
        <div className={styles.moreInfo}>
          <MoreInfo moreInfo={data.details.productInformation} />
        </div>

        {/* specification div */}
        <div className={styles.specification}>
          <h3>Product specification</h3>
          <ul>
            {/* attributes sorted alphabetically and then displayed */}
            {data.details.features[0].attributes
              .sort(sortAttributesAlphabetically)
              .map((item) => (
                <li key={data.productId + item.name}>
                  <div className={styles.listContainer}>
                    <p dangerouslySetInnerHTML={{ __html: item.name }}></p>
                    <p className={styles.listValues}>
                      {item.values.join(", ") || item.value}
                    </p>
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
