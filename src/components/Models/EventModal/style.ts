import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@fullcalendar/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      padding: "0.1em 2% 0 2%",
      height: "1.4em",
      textAlign: "center"
    },
    weekendEvent: {
      // width: "30px",
      // border: "1px solid black"
      fontSize: 13,
      height: "1.4em"
    },
    Procedure: {
      fontSize: "100%",
      fontWeight: 700
    },
    Heure_Debut: {
      color: "black",
      fontSize: "100%"
    },
    Chambre: {
      color: "black",
      fontSize: "100%"
    },
    Process: {
      fontSize: "100%",
      fontWeight: 700
    }
  })
);
