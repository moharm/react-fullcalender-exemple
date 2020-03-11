import { SwitchClassKey, SwitchProps } from "@material-ui/core/Switch";

interface Styles extends Partial<Record<SwitchClassKey, string>> {
  focusVisible?: string;
}

export interface ISwitch extends SwitchProps {
  classes: Styles;
  SwitchHandleChange: (arg: boolean) => void;
}
