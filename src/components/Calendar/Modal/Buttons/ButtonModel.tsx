import React from "react";
import Button from "@material-ui/core/Button";

const ButtonModel = (props: any) => {
  return <Button startIcon={props.startIcon}>{props.title}</Button>;
};

export default ButtonModel;
