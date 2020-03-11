import React, { useContext } from "react";
import { RouteComponentProps } from "@reach/router";
import { AuthContext } from "../../contexts/AuthContext";
import {
  useLastLocation,
  WithLastLocationProps,
  withLastLocation
} from "react-router-last-location";
import history from "../../assets/history/history";

const Profile = (props: RouteComponentProps & WithLastLocationProps) => {
  const { isAuthentificated, Logout } = useContext(AuthContext);
  const lastLocation = useLastLocation();
  if (!isAuthentificated) {
    history.push("/login");
  }
  return (
    <>
      <div>
        <h1>this is profile</h1>
        <button onClick={Logout}>
          {!isAuthentificated ? "Logged in" : "Logged out"}
        </button>
        {JSON.stringify(lastLocation)}
      </div>
      <button
        onClick={() => {
          history.push("/App/home");
        }}
      >
        Go Home
      </button>
    </>
  );
};
export default withLastLocation(Profile);
