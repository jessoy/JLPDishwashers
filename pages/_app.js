import Layout from "../components/layout/layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    // <Layout type="netherworld">

      <Component {...pageProps} /> 
      // {/* routes to index.js default export */}


    // one layout for entire app - so layout at this level
    // netherworld syntax unknown - default value 
  );
}

export default MyApp;
