import { makeStyles, createStyles } from "@material-ui/core/styles";
import { Theme } from "@fullcalendar/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "30em",
      padding: 0
    },
    CardContent: {
      padding: "0.5em 0.7em 0.3em 0.7em !important",
      flexGrow: 1
    },
    Poper_Title: {
      color: "#f6a149",
      fontSize: 14
    },
    Poper_Actions: {
      display: "flex",
      flexFlow: "row-reverse wrap"
    },
    Poper_Commentaire: {
      fontSize: 12
    },
    Icons: {
      color: "green",
      height: "20px"
    },
    Flech: {
      width: 0,
      height: 0,
      top: "-12em",
      right: "10px",
      position: "relative",
      borderTop: "10px solid transparent",
      borderRight: "20px solid red",
      borderBottom: "10px solid transparent"
    }
  })
);
