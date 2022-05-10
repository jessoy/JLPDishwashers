import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  // const Layout = ({ children, type }) => {
  return (
    <div className={styles.content}>
      <main className={styles.main}>
        <div>
          <div>{children}</div>
        </div>
      </main>
    </div>
// add head - SEO 
// <header> {home ? (render one way ): 
//   not home (render another way, include link to home or back button)} </header>
//* <main></main> */}
//* <footer></footer> */}
// link home?

  );
};

export default Layout;
