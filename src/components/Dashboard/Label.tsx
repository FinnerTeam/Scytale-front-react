import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const Playground = (props: any) => {
  const { labels, stateHandler } = props;
  const defaultProps = {
    options: labels,
    getOptionLabel: (option: string) => option,
  };
  return (
    <Autocomplete
      {...defaultProps}
      id="auto-complete"
      style={{
        width: 100,
        justifySelf: "center",
        marginLeft: "10px",
      }}
      onChange={(event, value) => stateHandler(value)}
      autoComplete
      includeInputInList
      renderInput={(params) => <TextField {...params} label="label" />}
    />
  );
};

export default Playground;
