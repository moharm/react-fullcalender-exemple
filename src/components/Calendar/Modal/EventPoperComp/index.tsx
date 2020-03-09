import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid, Divider } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import CloseIcon from "@material-ui/icons/Close";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import { useStyles } from "./style";

const EventPoperComp = (props: any) => {
  const classes = useStyles();

  const { data } = props;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.CardContent}>
        <Grid container spacing={1} style={{ marginBottom: "0.6em" }}>
          <Grid item xs={7}>
            <Typography className={classes.Poper_Title}>
              Contentieux General
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography className={classes.Poper_Actions}>
              <EditIcon className={classes.Icons} />
              <CloseIcon className={classes.Icons} />
              <ChatBubbleIcon className={classes.Icons} />
              <VisibilityIcon className={classes.Icons} />
              <FindInPageIcon className={classes.Icons} />
              <FileCopyIcon className={classes.Icons} />
            </Typography>
          </Grid>
        </Grid>
        <Grid style={{ margin: "0.5em 0 0.7em 0" }}>
          <Typography className={classes.Poper_Commentaire}>
            Le Lorem Ipsum est simplement du faux texte employé dans la
            composition et la mise en page avant impression. Le Lorem Ipsum est
            le faux texte standard de l'imprimerie
          </Typography>
        </Grid>
        <Divider />
        <Grid style={{ margin: "0.7em 0 0.7em 0" }}>
          <Typography className={classes.Poper_Commentaire}>
            Mercredi 12 juin 2019 - 10:00
          </Typography>
          <Typography className={classes.Poper_Commentaire}>
            Chambre 305
          </Typography>
        </Grid>
        <Divider />
        <Grid style={{ margin: "0.5em 0 0 0" }}>
          <Typography className={classes.Poper_Commentaire}>
            Audience publique
          </Typography>
        </Grid>
      </CardContent>
    </Card>
  );
};
{
  /* <Typography className={classes.typography}>
      {data.extendedProps.id} {data.title}
    </Typography> */
}
export default EventPoperComp;
