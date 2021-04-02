import Add from "./Add";
import Watched from "./Watched";
import Watchlist from "./Watchlist";
import { IconButton } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";

const Navbar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="home"
              display="flex"
              flexGrow={1}
            >
              <Home fontSize="medium" />
              <Link
                to="/"
                style={{ textDecoration: "none", color: "white", padding: 10 }}
              >
                WatchList
              </Link>
            </IconButton>
          </Box>

          <IconButton
            edge="end"
            color="inherit"
            aria-label="watchlist"
            p={3}
            m={3}
          >
            <Link
              to="/"
              style={{ textDecoration: "none", color: "white", padding: 10 }}
            >
              WatchList
            </Link>
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="watched"
            p={3}
            m={3}
          >
            <Link
              to="/watched"
              style={{ textDecoration: "none", color: "white", padding: 10 }}
            >
              Watched
            </Link>
          </IconButton>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="watched"
            p={3}
            m={3}
          >
            <Link
              to="/add"
              style={{ textDecoration: "none", color: "white", padding: 10 }}
            >
              {" "}
              + Add
            </Link>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
