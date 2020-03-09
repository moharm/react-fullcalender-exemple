import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "1em 0.5em"
    },
    CalenderViewActions: {
      display: "flex"
    },
    divider: {
      height: "70%",
      margin: "0 3% 0 0",
      backgroundColor: "#a1a6ab"
    },
    AddAdienceButton: {
      textTransform: "none",
      color: "white",
      backgroundColor: "#0ca319",
      fontWeight: "bold",
      height: "2pc",
      border: "1px solid #bab9b9",
      borderRadius: "3px"
    },
    currentMonthLabel: {
      textAlign: "center",
      padding: "0.5% 0"
    },

    // ******************************************************************* //
    Header2: {
      margin: "0 2%",
      display: "flex",
      "& > .MuiGrid-item:last-child": {
        display: "flex",
        "& > *": {
          fontSize: "13px",
          fontWeight: "600",
          margin: " auto 2%"
        }
      },
      "& > .MuiGrid-item": {
        padding: "0px 16px"
      }
    },
    Autocomplete: {
      "& > .MuiFormControl-marginNormal": {
        margin: "0px"
      }
    },
    LabelInfoInput: {
      color: "#9c9cef",
      fontSize: "10px"
    },
    Checkbox: {
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    icon: {
      borderRadius: 3,
      width: 16,
      height: 16,
      boxShadow:
        "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
      backgroundColor: "#f5f8fa",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
      "$root.Mui-focusVisible &": {
        outline: "2px auto rgba(19,124,189,.6)",
        outlineOffset: 2
      },
      "input:hover ~ &": {
        backgroundColor: "#ebf1f5"
      },
      "input:disabled ~ &": {
        boxShadow: "none",
        background: "rgba(206,217,224,.5)"
      }
    },
    checkedIcon: {
      backgroundColor: "#137cbd",
      backgroundImage:
        "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
      "&:before": {
        display: "block",
        width: 16,
        height: 16,
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        content: '""'
      },
      "input:hover ~ &": {
        backgroundColor: "#106ba3"
      }
    }
  })
);
