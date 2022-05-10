import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ProductListItem from "../components/product-list-item/product-list-item";
import axios from "axios";
import Layout, { siteTitle } from "../components/layout/layout";

// axios for experience and auto-Json functionality
// runs on every request
export async function getServerSideProps() {
  const response = await axios.get(
    "https://api.johnlewis.com/search/api/rest/v2/catalog/products/search/keyword?q=dishwasher&key=AIzaSyDD_6O5gUgC4tRW5f9kxC0_76XRC8W7_mI"
  );
  // console.log(response.data);
  const data = response.data;
  // console.log(data);
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
  console.log(data);
  let items = data.products;
  console.log(items);

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
                <div className={styles.content}>
                  <div>
                    <img src={item.image} alt="" style={{ width: "100%" }} />
                  </div>
                  <div>{item.title}</div>
                  {/* <div className={styles.price}>{item.price.now}</div> */}
                  <div className={styles.price}>
                    {item.variantPriceRange.display.max}
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;