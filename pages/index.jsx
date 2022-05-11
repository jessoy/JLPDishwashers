import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ProductListItem from "../components/product-list-item/product-list-item";
import axios from "axios";
import Layout, { siteTitle } from "../components/layout/layout";
import { productsAPI } from "../config/general";

// axios for experience and auto-Json functionality
// runs on every request
export async function getServerSideProps() {
  const response = await axios.get(productsAPI);
  const data = response.data;

  return {
    props: {
      data,
    },
  };
}

// issue with initial loading - time delay for API to load?

// export async function getStaticProps() {
//   const allDishwasherData = getAllDishwasherData();
//   return {
//     props: {
//       allDishwasherData,
//     }
//   }
// }

const Home = ({ data }) => {
  let items = data.products;
  // console.log(siteTitle)

  return (
    <Layout home>
      <Head>
        <title>Dishwashers | JL &amp; Partners </title>
        <meta name="keywords" content="shopping" />
        <meta name="description" content={data.pageInformation.title} />
        {/* how to change out /null/ to dishwashers */}
        {/* query keywords */}
      </Head>

      <div>
        <h1>Dishwashers ({items.length})</h1>
        <div className={styles.content}>
          {items.map((item) => (
            <Link
              key={item.productId}
              href={{
                pathname: "/product-detail/[id]",
                query: { id: item.productId },
              }}
            >
              <a className={styles.link}>
                <ProductListItem
                  image={item.image}
                  price={item.variantPriceRange.display.max}
                  description={item.title}
                ></ProductListItem>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
