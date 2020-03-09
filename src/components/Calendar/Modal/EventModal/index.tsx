import React, { useState, useEffect } from "react";
import EventPoper from "../EventPoper";
import { Grid, Box } from "@material-ui/core";
import clsx from "clsx";
import { useStyles } from "./style";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
const EventModal = (props: any) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const { data } = props;
  const isweekend = (date: any) => {
    const dayNumber = date.getDay();
    if (dayNumber === 6 || dayNumber === 7) {
      return true;
    }
    return false;
  };

  return (
    <>
      {!isweekend(props.data.start) ? (
        <div className={clsx(classes.root, "fc-content")} onClick={handleClick}>
          <Grid container spacing={0}>
            {/* <Box component="div" className="fc-content" onClick={handleClick}> */}
            <Grid item xs={2}>
              <Box component="span" className={classes.Procedure}>
                PC
              </Box>
            </Grid>
            <Grid item xs={3}>
              <Box component="span" className={classes.Heure_Debut}>
                09:00
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box component="span" className={classes.Chambre}>
                Ch. 305
              </Box>
            </Grid>{" "}
            <Grid item xs={3}>
              <Box component="span" className={classes.Process}>
                23/150
              </Box>
            </Grid>
            {/* </Box> */}
          </Grid>
        </div>
      ) : (
        <div className={clsx(classes.weekendEvent)}>
          <ReportProblemOutlinedIcon fontSize="default" color="secondary" />
        </div>
      )}
      <div className="fc-resizer fc-end-resizer" />
      <EventPoper anchorEl={anchorEl} handleClose={handleClose} data={data} />
    </>
  );
};

export default EventModal;
