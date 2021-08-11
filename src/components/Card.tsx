import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles({
  root: {
    backgroundColor: "var(--main-color)",
    width: "95%",
    color: "white",
    maxWidth: "35rem",
    margin: "1rem auto",
    padding: "0.7rem",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  status: {
    padding: "0.2rem",
    width: "100%",
    borderRadius: "10px",
    border: "1px solid grey",
    marginBottom: "0.5rem",
  },
  label: {
    borderRadius: "10px",
    border: "1px solid grey",
    padding: "0.2rem",
  },
  labels: { marginTop: "0.5rem" },
});
const PullReqCard = (props: any) => {
  const { title, status, author, createdAt, labels, description } = props;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <h2>{title}</h2>
      <span className={classes.status}>Status: {status}</span>
      <p>{description}</p>
      <span>Author: {author}</span>
      <span>created at: {createdAt}</span>
      <div className={classes.labels}>
        {labels.map((label: string) => (
          <span className={classes.label}>{label}</span>
        ))}
      </div>
    </Card>
  );
};

export default PullReqCard;
