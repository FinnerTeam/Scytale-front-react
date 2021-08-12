import { timeFromNow } from "../../helpers/time";
import { capitalize } from "../../helpers/capitalize";
import Card from "../UI/Card";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "1.5rem",
  },
  status: {
    fontWeight: "bold",
  },
  description: { textAlign: "left" },
  line: {
    border: "1px solid var(--secondary-color)",
    backgroundColor: "var(--secondary-color)",
  },
  label: { backgroundColor: "var(--color-blue)", margin: "0 5px 0 5px" },
  labels: { marginTop: "3rem", textAlign: "left" },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5px",
    borderTop: "1px solid rgb(192,192,192)	",
    paddingTop: "10px",
  },
});

const PullReqCard: React.FC<pullRequest> = (props) => {
  const { title, status, author, createdAt, labels, description } = props;
  const time = timeFromNow(createdAt);
  const classes = useStyles();
  return (
    <Card>
      <header className={classes.header}>
        <span className={classes.title}>{capitalize(title)}</span>
        <span>
          Status: <span className={classes.status}>{status}</span>
        </span>
      </header>
      <hr className={classes.line} />
      <p className={classes.description}>{description}</p>
      <div className={classes.labels}>
        {labels.map((label: string) => (
          <Chip label={label} className={classes.label} key={label} />
        ))}
      </div>
      <footer className={classes.footer}>
        <span>By {author}</span>
        <span> {time}</span>
      </footer>
    </Card>
  );
};

export default PullReqCard;
