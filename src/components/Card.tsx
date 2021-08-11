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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.5rem",
  },
  status: {
    borderRadius: "10px",
    border: "1px solid black",
    padding: "0.3rem",
  },
  description: { textAlign: "left" },
  line: {
    border: "1px solid var(--secondary-color)",
  },
  author: { marginRight: "10px", textAlign: "right" },
  label: {},
  labels: { marginTop: "0.5rem" },
});
const PullReqCard = (props: any) => {
  const { title, status, author, createdAt, labels, description } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <header className={classes.header}>
        <span className={classes.title}>{title}</span>
        <span>
          Status: <span className={classes.status}>{status}</span>
        </span>
      </header>
      <hr className={classes.line} />
      <p className={classes.description}>{description}</p>
      <span className={classes.author}>Author: {author}</span>
      <span>created at: {createdAt}</span>
      <footer>
        <div className={classes.labels}>
          {labels.map((label: string) => (
            <span className={classes.label}>{label}</span>
          ))}
        </div>
      </footer>
    </Card>
  );
};

export default PullReqCard;
