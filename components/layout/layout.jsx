import styles from "./layout.module.scss";
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, home }) => {
  // const Layout = ({ children, type }) => {
  return (
    <>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>

      <header className="styles.navbar">
        {home ? <h1>Homepage Header</h1> : <h1>Product Page Header</h1>}
        <div className={styles.content}>
          <main className={styles.main}>
            <div>
              <div>{children}</div>
            </div>
          </main>
        </div>
      </header>
    </>
    // add head - SEO
    // <header> {home ? (render one way ):
    //   not home (render another way, include link to home or back button)} </header>
    //* <main></main> */}
    //* <footer></footer> */}
    // link home?
  );
};

export default Layout;
