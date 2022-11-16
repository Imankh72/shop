import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ? title + " - Shop" : "Shop"}</title>
        <meta name="description" content="Ecommerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <header></header>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
