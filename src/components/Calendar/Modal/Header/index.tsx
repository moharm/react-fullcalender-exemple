import React, { useEffect } from "react";
import {
  Grid,
  Button,
  Box,
  Typography,
  Divider,
  TextField
} from "@material-ui/core";
import { useStyles } from "./style";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import SystemUpdateAltOutlinedIcon from "@material-ui/icons/SystemUpdateAltOutlined";
import SettingsIcon from "@material-ui/icons/Settings";
import IconButtonModel from "../Buttons/IconButtonModel";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EventNoteIcon from "@material-ui/icons/EventNote";
import GroupButtonsModel from "../Buttons/GroupButtons/GroupButtonsModel";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import TuneRoundedIcon from "@material-ui/icons/TuneRounded";
import ControlPointRoundedIcon from "@material-ui/icons/ControlPointRounded";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox, { CheckboxProps } from "@material-ui/core/Checkbox";

import { buttons } from "../Buttons/GroupButtons/data";
import clsx from "clsx";

const Header = (props: any) => {
  const { changeview, gotobackdate, gotonextdate, currentdate } = props;
  const classes = useStyles();
  const defaultProps = {
    options: Values,
    getOptionLabel: (option: ValueOptionType) => option.title
  };

  useEffect(() => {
    currentdate();
  });
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        {/* ********************************************************************** */}
        <Grid item xs={5} className={classes.CalenderViewActions}>
          <IconButtonModel size="small">
            <EventNoteIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          <IconButtonModel size="small">
            <DateRangeIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          <IconButtonModel
            onClick={gotobackdate}
            size="small"
            WithOutborder={true}
          >
            <ArrowBackIosRoundedIcon htmlColor="#5e5e5e" fontSize="small" />
          </IconButtonModel>
          <Typography className={classes.currentMonthLabel} component="span">
            {currentdate}
          </Typography>
          <IconButtonModel
            onClick={gotonextdate}
            size="small"
            WithOutborder={true}
          >
            <ArrowForwardIosRoundedIcon htmlColor="#5e5e5e" fontSize="small" />
          </IconButtonModel>
          <Divider orientation="vertical" className={classes.divider} />
          <IconButtonModel size="small">
            <TuneRoundedIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
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
        <Grid item xs={3}></Grid>
        {/* ********************************************************************** */}
        <Grid item xs={4} className={classes.CalenderViewActions}>
          {/* <Grid container spacing={1}>
            <Grid item xs={1}> */}
          <IconButtonModel size="small">
            <FlagOutlinedIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          {/* </Grid>
            <Grid item xs={1}> */}
          <IconButtonModel size="small">
            <SystemUpdateAltOutlinedIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          {/* </Grid>
            <Grid item xs={1}> */}
          <IconButtonModel size="small">
            <SettingsIcon htmlColor="#28a745" fontSize="small" />
          </IconButtonModel>
          {/* </Grid>
            <Grid item xs={9}> */}
          <GroupButtonsModel
            size="small"
            htmlColor="#bebaba"
            aria-label="outlined primary button group"
            Buttons={buttons}
            ChangeView={changeview}
          ></GroupButtonsModel>
          {/* </Grid>
          </Grid> */}
        </Grid>
      </Grid>
      <Grid container spacing={4} className={classes.Header2}>
        <Grid item xs={4}>
          <Autocomplete
            className={classes.Autocomplete}
            {...defaultProps}
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
          <Autocomplete
            className={classes.Autocomplete}
            {...defaultProps}
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
