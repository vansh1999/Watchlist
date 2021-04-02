import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50ch",
  },
}));

const Watchlist = () => {
  const classes = useStyles();

  const [query, setQuery] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  return (
    <div>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={12} sm={6} md={6} lg={6} mt={6}>
          <TextField
            id="filled-full-width"
            style={{ margin: 8, marginTop: 30 }}
            placeholder="Search for a Movie"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="filled"
            value={query}
            onChange={onChange}
          />
          <div id="text">{query}</div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Watchlist;
