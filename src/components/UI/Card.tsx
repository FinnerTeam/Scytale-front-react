import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "var(--main-color)",
    width: "95%",
    maxWidth: "35rem",
    margin: "1.5rem auto",
    padding: "1rem 1.3rem 1rem 1.3rem",
    borderRadius: "10px",
  },
});

const CardUI: React.FC = (props) => {
  const classes = useStyles();
  return <Card className={classes.root}>{props.children}</Card>;
};

export default CardUI;
