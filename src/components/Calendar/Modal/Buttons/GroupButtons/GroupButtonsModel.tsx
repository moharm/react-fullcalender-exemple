import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { useStyles } from "./style";
import clsx from "clsx";

const GroupButtonsModel = (props: any) => {
  const { Buttons, ChangeView } = props;
  const classes = useStyles();
  const [state, setstate] = useState(Buttons);

  const onClick = (key: string, view: string) => {
    const test = state.map((button: any) => {
      if (button.key === key) {
        return {
          ...button,
          isSelected: true
        };
      } else {
        return {
          ...button,
          isSelected: false
        };
      }
    });
    setstate(test);
    ChangeView(view);
  };
  const buttons = state;
  return (
    <ButtonGroup
      className={classes.root}
      color={props.color}
      size="small"
      aria-label="outlined primary button group"
    >
      {buttons.map((button: any) => (
        <Button
          key={button.key}
          onClick={() => onClick(button.key, button.view)}
          className={clsx(classes.Button, {
            [classes.ButtonSelected]: button.isSelected
          })}
          startIcon={
            button.isFavorite ? (
              <button.iconButtonFavorite className={classes.iconButton} />
            ) : (
              <button.iconButton className={classes.iconButton} />
            )
          }
        >
          {button.title}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default GroupButtonsModel;
