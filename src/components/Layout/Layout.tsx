import Header from "./Header";

const Layout: React.FC = (props) => {
  return (
    <>
      <Header />
      <main style={{ marginTop: "15vh" }}>{props.children}</main>
    </>
  );
};

export default Layout;
