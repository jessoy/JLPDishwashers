import ProductCarousel from "../../components/product-carousel/product-carousel";
import axios from "axios";
import Head from "next/head";
import Layout from "../../components/layout/layout";
import Link from "next/link";
import styles from "./product-detail.module.scss";

export async function getServerSideProps(context) {
  // console.log(context);
  // console.log(context.params);

  const id = context.params.id;
  const response = await axios.get(
    "https://api.johnlewis.com/mobile-apps/api/v1/products/" + id
  );
  //   const data = await response.json();
  const data = response.data;
  // console.log(response);
  // console.log(data);
  // console.log(id);
  return {
    props: { data },
  };
}

const ProductDetail = ({ data }) => {
  console.log(data);
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
        <ProductCarousel image={data.media.images.urls[0]} />

        {/* switched div and h3 labels */}
        <div>
          <h1>{data.price.now}</h1>

          <h3>{data.displaySpecialOffer}</h3>
          <h3>{data.additionalServices.includedServices}</h3>
        </div>

        <div>
          <h3>Product information</h3>
        </div>
        <h3>Product specification</h3>
        <ul>
          {data.details.features[0].attributes.map((item) => (
            // unique key added
            <li key={data.productId + item.name}>
              {/* no id in api data  */}
              <div>
                {item.id}
                <div dangerouslySetInnerHTML={{ __html: item.name }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default ProductDetail;
