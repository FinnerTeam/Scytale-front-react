import Header from "./Header";

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "10rem" }}>{props.children}</main>
    </>
  );
};

export default Layout;
