import Header from "./Header";

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "10rem" }}>{props.children}</main>
    </>
  );
};

export default Layout;
