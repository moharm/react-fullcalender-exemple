import React from "react";
import Popover from "@material-ui/core/Popover";
import EventPoperComp from "../EventPoperComp";

const EventPoper = (props: any) => {
  const open = Boolean(props.anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right"
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
    >
      <EventPoperComp data={props.data} />
    </Popover>
  );
};

export default EventPoper;
