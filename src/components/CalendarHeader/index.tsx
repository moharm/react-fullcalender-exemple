import React, { useState } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Divider,
  TextField
} from "@material-ui/core";
import { useStyles, SwitchStyle } from "./style";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EventNoteIcon from "@material-ui/icons/EventNote";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import ControlPointRoundedIcon from "@material-ui/icons/ControlPointRounded";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

import clsx from "clsx";
import { IheaderProps, IStyteType } from "./types";
import IconButtonModel from "../Models/Buttons/IconButtonModel";
import GroupButtonsModel from "../Models/Buttons/GroupButtons/GroupButtonsModel";
import { buttons } from "../Models/Buttons/GroupButtons/data";
import SwitchModel from "../Models/Switch";

const Header = (props: IheaderProps & any) => {
  const classes = useStyles();
  const autocompletedefaultProps = {
    options: Values,
    getOptionLabel: (option: ValueOptionType) => option.title
  };
  const {
    changeview,
    gotobackdate,
    gotonextdate,
    currentdate,
    defaultview
  } = props;

  const getDefaultView = (): string => {
    //return Default View
    //@ts-ignore
    const { view } = buttons.find(button => button.isFavorite);
    return view ? view : defaultview;
  };

  //props

  // State
  const initialState: IStyteType = {
    currentdateValue: currentdate(getDefaultView()),
    isFilterdisplayed: false
  };

  const [state, setState] = useState(initialState);

  const Ready = () => {
    setState(prev => ({
      ...prev,
      currentdateValue: currentdate()
    }));
  };

  const hundleChangeDate = (action: () => void): void => {
    action();
    setState(prev => ({
      ...prev,
      currentdateValue: currentdate()
    }));
  };
  const hundleChangeView = (view: string) => {
    changeview(view);
    setState(prev => ({
      ...prev,
      currentdateValue: currentdate()
    }));
  };
  const SwitchHandleChange = (isChecked: boolean) => {
    console.log(isChecked);
    setState(prev => ({
      ...prev,
      isFilterdisplayed: isChecked
    }));
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {/* ********************************************************************** */}
        <Grid item xs={7} className={classes.CalenderViewActions}>
          <IconButtonModel onClick={() => {}} size="small">
            <EventNoteIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          <IconButtonModel onClick={() => {}} size="small">
            <DateRangeIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          <IconButtonModel
            onClick={() => hundleChangeDate(gotobackdate)}
            size="small"
            WithOutborder={true}
          >
            <ArrowBackIosRoundedIcon htmlColor="#5e5e5e" fontSize="small" />
          </IconButtonModel>
          <Typography className={classes.currentMonthLabel} component="span">
            {state.currentdateValue}
          </Typography>
          <IconButtonModel
            onClick={() => hundleChangeDate(gotonextdate)}
            size="small"
            WithOutborder={true}
          >
            <ArrowForwardIosRoundedIcon htmlColor="#5e5e5e" fontSize="small" />
          </IconButtonModel>
          <Divider orientation="vertical" className={classes.divider} />
          <SwitchModel
            classes={SwitchStyle()}
            SwitchHandleChange={SwitchHandleChange}
          ></SwitchModel>
          <Box component="span" margin="auto 1%">
            Filtres
          </Box>
          <Button
            size="small"
            variant="text"
            className={classes.AddAdienceButton}
            startIcon={<ControlPointRoundedIcon />}
          >
            Créer Audience
          </Button>
        </Grid>
        {/* ********************************************************************** */}
        <Grid item xs={1}></Grid>
        {/* ********************************************************************** */}
        <Grid item xs={4} className={classes.CalenderViewActions}>
          {/* <Grid container spacing={1}>
            <Grid item xs={1}> */}
          <IconButtonModel onClick={() => {}} size="small">
            <FlagOutlinedIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          {/* </Grid>
            <Grid item xs={1}> */}
          <IconButtonModel onClick={() => {}} size="small">
            <SystemUpdateAltOutlinedIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          {/* </Grid>
            <Grid item xs={1}> */}
          <IconButtonModel onClick={() => {}} size="small">
            <SettingsIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          {/* </Grid>
            <Grid item xs={9}> */}
          <GroupButtonsModel
            size="small"
            htmlColor="#bebaba"
            aria-label="outlined primary button group"
            Buttons={buttons}
            ChangeView={hundleChangeView}
          ></GroupButtonsModel>
          {/* </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      {!state.isFilterdisplayed && (
        <Grid container spacing={4} className={classes.Header2}>
          <Grid item xs={4}>
            <Autocomplete
              className={classes.Autocomplete}
              {...autocompletedefaultProps}
              id="disable-close-on-selec"
              clearOnEscape
              renderInput={params => (
                <TextField {...params} label="Valeur-Input" margin="normal" />
              )}
            />
            <Box className={classes.LabelInfoInput}>
              Texte-information-aide-a-la-saisie
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Autocomplete
              className={classes.Autocomplete}
              {...autocompletedefaultProps}
              id="disable-close-on-select"
              clearOnEscape
              renderInput={params => (
                <TextField {...params} label="Valeur-Input" margin="normal" />
              )}
            />
            <Box className={classes.LabelInfoInput}>
              Texte-information-aide-a-la-saisie
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box style={{ color: "gray" }}>Afficher</Box>
            <Box>
              <Checkbox
                className={classes.Checkbox}
                disableRipple
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
                {...props}
              />
              <Box component="span">Mes audiences</Box>
            </Box>
            <Box>
              <Checkbox
                className={classes.Checkbox}
                disableRipple
                defaultChecked
                color="default"
                checkedIcon={
                  <span className={clsx(classes.icon, classes.checkedIcon)} />
                }
                icon={<span className={classes.icon} />}
                inputProps={{ "aria-label": "decorative checkbox" }}
                {...props}
              />
              <Box component="span">Audiences de greffe</Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default Header;

interface ValueOptionType {
  title: string;
  year: number;
}
const Values = [
  { title: "RF", year: 1994 },
  { title: "PC", year: 1972 },
  { title: "CG", year: 1974 }
];
