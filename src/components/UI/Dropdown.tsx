import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

interface props {
  stateHandler(e: React.ChangeEvent<HTMLSelectElement>): void;
  array: string[];
  style: any;
  value: string;
  title: string;
}

const useStyles = makeStyles({
  select: {
    padding: 3,
    minWidth: "70px",
  },
});
const DropdownUI: React.FC<props> = (props) => {
  const { stateHandler, array, style, value, title } = props;
  const classes = useStyles();
  return (
    <select
      name={value}
      id={value}
      onChange={stateHandler}
      className={clsx(classes.select, style)}
    >
      <option value={"all"}>{title}</option>
      {array.map((element) => (
        <option value={element} key={element}>
          {element}
        </option>
      ))}
    </select>
  );
};
export default DropdownUI;
