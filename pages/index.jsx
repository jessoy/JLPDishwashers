import Head from "next/head";
import Link from "next/link";
import styles from "./index.module.scss";
import ProductListItem from "../components/product-list-item/product-list-item";
import axios from "axios";
import Layout from "../components/layout/layout";
import { productsAPI } from "../config/general";
import { restrictAPIResponse, replaceNull} from "../utils/general";

// axios for experience and auto-Json functionality
// destructure at source request for security?
// runs on every request
export async function getServerSideProps() {
  const { data: { products , pageInformation: {title, description}} } = await axios.get(productsAPI);
  const items = restrictAPIResponse(products, 20);

  return {
    props: {
      items, title, description
    },
  };
}

const Home = ({ items , title, description }) => {

  return (
    <Layout home>
      <Head>
        <title>Dishwashers | JL &amp; Partners </title>
        <meta name="keywords" content="shopping" />

        <meta name="title" content={replaceNull(title, "Dishwasher")} />
        <meta name="description" content={replaceNull(description, "Dishwasher")} />
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
{/* check item is isAvailableToOrder */}
              {item.isAvailableToOrder ? (
                <a className={styles.link}>
                  <ProductListItem
                    image={item.image}
                    price={item.variantPriceRange.display.max}
                    description={item.title}
                  ></ProductListItem>
                </a>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Home;
