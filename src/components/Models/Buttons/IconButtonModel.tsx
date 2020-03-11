import React, { ReactNode } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";

interface propstype {
  size: "medium" | "small" | undefined;
  color: "inherit" | "default" | "primary" | "secondary" | undefined;
  BackColor: string;
  borderStyle: string;
  WithOutborder: boolean;
  onClick: () => void;
  children: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: "center",
      margin: "0 1%"
    },
    Iconbotton: {
      border: "1px solid  #c6c6c6",
      borderRadius: "3px",
      height: "2pc",
      width: "2pc"
    },
    WithOutborder: {
      border: "0px"
    }
  })
);
const IconButtonModel = (props: propstype) => {
  const { size, color, WithOutborder, onClick, children } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <label>
        <IconButton
          className={clsx(classes.Iconbotton, {
            [classes.WithOutborder]: WithOutborder
          })}
          size={size}
          color={color}
          aria-label="upload picture"
          component="span"
          onClick={onClick}
        >
          {children}
        </IconButton>
      </label>
    </div>
  );
};

export default IconButtonModel;
