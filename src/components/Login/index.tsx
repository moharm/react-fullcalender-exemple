import React, { useContext, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { RouteComponentProps } from "@reach/router";
import { AuthContext } from "../../contexts/AuthContext";
import {
  WithLastLocationProps,
  withLastLocation,
  useLastLocation
} from "react-router-last-location";
import history from "../../assets/history/history";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: "hidden",
      padding: theme.spacing(0, 3),
      textAlign: "center"
    },
    input: {
      margin: theme.spacing(2)
    },
    button: {
      margin: theme.spacing(2)
    }
  })
);

const Login = (props: RouteComponentProps & WithLastLocationProps) => {
  const classes = useStyles();
  const { isAuthentificated, userName, password, Login, onChange } = useContext(
    AuthContext
  );
  const lastLocation = useLastLocation();

  const LastLocation = lastLocation ? lastLocation.pathname : "";

  useEffect(() => {
    if (isAuthentificated) {
      LastLocation ? history.push(LastLocation) : history.push("/App/home");
    }
  });

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xs">
        <h1>{LastLocation}</h1>

        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={event => Login(event, LastLocation)}
        >
          <div>
            <TextField
              className={classes.input}
              id="username"
              label="Username"
              name="userName"
              type="text"
              variant="outlined"
              value={userName}
              onChange={onChange}
              required
            />
            <TextField
              className={classes.input}
              id="password-input"
              label="Password"
              name="password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              value={password}
              onChange={onChange}
              required
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </Container>
    </React.Fragment>
  );
};
export default withLastLocation(Login);
