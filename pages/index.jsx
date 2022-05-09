import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ProductListItem from "../components/product-list-item/product-list-item";
import axios from "axios";

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
  console.log(items)

  return (
    <div>
      <Head>
        <title>JL &amp; Partners | Home</title>
        <meta name="keywords" content="shopping" />
      </Head>
      
      <div>
        <h1>Dishwashers</h1>
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
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
