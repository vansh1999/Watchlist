import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { spacing } from "@material-ui/system";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 445,
    maxWidth: "60%",
    // paddingRight: 100,
  },
  media: {
    height: "250px",

    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const Watchlist = ({}) => {
  const classes = useStyles();

  const { watchlist } = useContext(GlobalContext);

  const { removeMovieFromWatchlist, addMovieToWatched } = useContext(
    GlobalContext
  );

  console.log(watchlist.lenght);

  return (
    <>
      <Grid container justify="center" spacing={4}>
        <Grid item xs={6} sm={6} md={3} lg={3} mt={2}>
          <h2>My Watchlist {watchlist.lenght}</h2>
          {watchlist.lenght === 0 ? (
            <div>no movie added to the watchlist</div>
          ) : (
            <div>
              <div> movies </div>
              {watchlist.map((movie) => (
                <Card className={classes.root} style={{ paddingTop: 10 }}>
                  <CardMedia
                    className={classes.media}
                    image={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                    title={movie.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {movie.title}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
                    <Tooltip title="Add to Watchlist" arrow>
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ padding: 5, marginLeft: 0, marginRight: 10 }}
                        ml={0}
                        onClick={() => addMovieToWatched(movie)}
                      >
                        Add to Watched
                      </Button>
                    </Tooltip>
                    <Tooltip title="Delete Movie" arrow>
                      <Button
                        variant="contained"
                        color="secondary"
                        style={{ padding: 5, marginRight: 0 }}
                        mr={0}
                        onClick={() => removeMovieFromWatchlist(movie.id)}
                      >
                        Delete
                      </Button>
                    </Tooltip>
                  </CardActions>
                </Card>
              ))}
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Watchlist;
