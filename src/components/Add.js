import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Resultcard from "./Resultcard";
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
  // root: {
  //   display: "flex",
  //   flexWrap: "wrap",
  // },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "50ch",
  },
}));

const Add = () => {
  const classes = useStyles();

  const [query, setQuery] = useState("");

  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${e.target.value}&page=1&include_adult=true
    `)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  console.log(results.length);

  return (
    <>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={4} sm={4} md={4} lg={4} mt={2}></Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} mt={2}>
          <TextField
            id="standard-basic"
            style={{ margin: 8, marginTop: 90 }}
            placeholder="Search for a Movie"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            // variant="filled"
            value={query}
            onChange={onChange}
          />
        </Grid>

        {/* <Grid item xs={2} sm={2} md={2} lg={2} mt={2}>
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                color="primary"
                component="span"
                style={{ margin: 8, marginTop: 90 }}
              >
                Search
              </Button>
            </label>
          </Grid> */}
        <Grid item xs={4} sm={4} md={4} lg={4} mt={2}></Grid>
        {/* <div id="text">{query}</div> */}
      </Grid>

      <main className={classes.content}>
        <Grid container justify="center" spacing={4}>
          {results.length > 0 &&
            results.map((movie) => (
              <Grid item key={movie.id} xs={12} sm={6} md={4} lg={4}>
                <Resultcard movie={movie} />
              </Grid>
            ))}
        </Grid>
      </main>
    </>
  );
};

export default Add;
