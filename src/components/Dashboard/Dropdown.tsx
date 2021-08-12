import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";

interface props {
  stateHandler(e: React.ChangeEvent<HTMLSelectElement>): void;
  array: string[];
  style: any;
  value: string;
}

const useStyles = makeStyles({
  select: {
    padding: 3,
  },
});
const Dropdown: React.FC<props> = (props) => {
  const { stateHandler, array, style, value } = props;
  const classes = useStyles();
  return (
    <select
      name={value}
      id={value}
      onChange={stateHandler}
      className={clsx(classes.select, style)}
    >
      <option value={"all"}>{value}</option>
      {array.map((element) => (
        <option value={element}>{element}</option>
      ))}
    </select>
  );
};
export default Dropdown;
