import logo from "../../assets/logo.png";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  header: {
    width: "100%",
    top: "0",
    height: "5rem",
    backgroundColor: "var(--main-color)",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    padding: "0 10%",
    position: "fixed",
  },
  title: {
    fontSize: "2.5rem",
    margin: "0",
  },
  logo: {
    height: 60,
    width: 60,
  },
});
const MainNavigation = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <img src={logo} className={classes.logo} alt="logo" />
      <div className={classes.title}>Scytale</div>
    </header>
  );
};

export default MainNavigation;
