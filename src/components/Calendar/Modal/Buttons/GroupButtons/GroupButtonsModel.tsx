import React, { useState } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { useStyles } from "./style";
import clsx from "clsx";
import { IButtonView } from "./data";

const GroupButtonsModel = (props: any) => {
  const { Buttons, ChangeView } = props;
  const classes = useStyles();
  const [state, setstate] = useState<Array<IButtonView>>(Buttons);

  const onClick = (key: string, view: string) => {
    //Swich to selected Button and View
    const buttons: Array<IButtonView> = state.map((button: any) => {
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
    setstate(buttons);
    ChangeView(view);
  };

  function IconButtonBavoriteNode(
    button: IButtonView,
    classeCSS: string
  ): JSX.Element {
    // return iconButtonFavorite if it has isFavorite=true

    return button.isFavorite ? (
      <button.iconButtonFavorite className={classeCSS} />
    ) : (
      <button.iconButton className={classeCSS} />
    );
  }

  const buttons: Array<IButtonView> = state;
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
          startIcon={IconButtonBavoriteNode(button, classes.iconButton)}
        >
          {button.title}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default GroupButtonsModel;
