import { useState } from "react";

const SearchBar = () => {
  const statuses = ["All", "Draft", "Open", "Closed"];
  const sortMethods = ["Title", "Creation"];
  const [order, setOrder] = useState<"ascending" | "descending">("ascending");
  const setOrderHandler = (state: any) => {
    if (order === "ascending") {
      return setOrder("descending");
    }
    setOrder("ascending");
  };
  return (
    <>
      {" "}
      <select name="statuses" id="statuses">
        {statuses.map((status) => (
          <option value={status}>{status}</option>
        ))}
      </select>
      <select name="sortMethods" id="sortMethods">
        {sortMethods.map((method) => (
          <option value={method}>{method}</option>
        ))}
      </select>
      <button onClick={setOrderHandler}>{order}</button>
    </>
  );
};
export default SearchBar;
