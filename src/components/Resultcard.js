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

import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 445,
    maxWidth: "60%",
  },
  media: {
    height: 250,

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

const Resultcard = ({ movie }) => {
  const classes = useStyles();

  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let watchlistStoredMovie = watchlist.find((x) => x.id === movie.id);
  const watchlistDisabled = watchlistStoredMovie ? true : false;

  let watchedStoredMovie = watched.find((x) => x.id === movie.id);
  const watchedDisabled = watchedStoredMovie ? true : false;

  return (
    <>
      {movie.poster_path ? (
        <Card className={classes.root}>
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
                disabled={watchlistDisabled}
                onClick={() => addMovieToWatchlist(movie)}
              >
                Add to Watchlist
              </Button>
            </Tooltip>
            <Tooltip title="Add to Watched" arrow>
              <Button
                variant="contained"
                color="primary"
                style={{ padding: 5, marginRight: 0 }}
                mr={0}
                disabled={watchedDisabled}
                onClick={() => addMovieToWatched(movie)}
              >
                Add to Watched
              </Button>
            </Tooltip>
          </CardActions>
        </Card>
      ) : (
        <div>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={``} title="" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2"></Typography>
            </CardContent>
            <CardActions disableSpacing></CardActions>
          </Card>
        </div>
      )}
    </>
  );
};

export default Resultcard;
