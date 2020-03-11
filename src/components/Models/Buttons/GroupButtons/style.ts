import { makeStyles, createStyles } from "@material-ui/core";
import { Theme } from "@fullcalendar/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "70%",
      height: "2pc",
      borderRadius: "3px"
    },
    Button: {
      color: "gray",
      borderColor: "#c6c6c6",
      textTransform: "none"
    },
    ButtonSelected: {
      backgroundColor: "#c0f2a3",
      borderTopColor: "green",
      borderBottomColor: "green"
    },
    iconButton: {
      color: "green"
    }
  })
);
