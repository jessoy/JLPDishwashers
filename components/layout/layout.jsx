import styles from "./layout.module.scss";
import Head from "next/head";

const Layout = ({ children, home }) => {
  const siteTitle = "Dishwashers | John Lewis &amp; Partners";

  // const Layout = ({ children, type }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Shop for Dishwashers at John Lewis &amp; Partners. Free UK mainland delivery when you spend £50 and over."
        />
        <meta property="og:site_name" content="John Lewis &amp; Partners" />
        <meta property="og:url" content="http://localhost:3001/" />
        <meta
          property="og:image"
          content={`https://johnlewis.scene7.com/is/image/JohnLewis/240251284?`}
        />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:title" content={siteTitle} />
        <meta
          property="og:description"
          content="Shop for Dishwashers at John Lewis &amp; Partners. Free UK mainland delivery when you spend £50 and over."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@JLandPartners" />
      </Head>

        {/* {home ? <h1>Homepage Header</h1> : <h1>Product Page Header</h1>} */}
        <div className={styles.content}>
          <main className={styles.main}>
            <div>
              <div>{children}</div>
            </div>
          </main>
        </div>
    </>

  );
};

export default Layout;
