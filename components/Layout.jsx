import Head from "next/head";
import Header from "./Header";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Shop" : "Shop"}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
