import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

import { ISwitch } from "./types";

export default function SwitchModel(props: ISwitch) {
  const { classes, SwitchHandleChange } = props;
  const [state, setState] = React.useState({
    isChecked: true
  });

  const handleChange = () => (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, isChecked: event.target.checked });
    SwitchHandleChange(state.isChecked);
  };

  return (
    <Switch
      classes={{
        switchBase: classes.switchBase,
        track: classes.track,
        checked: classes.checked
      }}
      checked={state.isChecked}
      onChange={handleChange()}
    />
  );
}
