import Layout from "../components/layout/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout type="netherworld">
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
