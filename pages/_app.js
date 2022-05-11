import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} /> 
      // {/* routes to index.js default export */}

  );
}

export default MyApp;
