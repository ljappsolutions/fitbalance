import React from "react";
import { CardActionArea, CardContent, Card, CardMedia, Typography, WithStyles, withStyles, Grid } from "@material-ui/core";
import routineCard from './routine-card.jpg';
import profileCard from './profile-card.png';
import classesCard from './classes-card.jpg';
import { withRouter, RouteComponentProps } from "react-router-dom";
import routes from "../../Routes";
import { card } from "../../shared/styles/common";

const styles = {
  card,
  media: {
    minHeight: 140,
    maxHeight: 170,
  }
}

export interface IDashboardProps extends WithStyles, RouteComponentProps {

}

class Dashboard extends React.Component<IDashboardProps> {
  private goToRoutine = () => {
    this.props.history.push(routes.routine);
  }

  private goToMyInfo = () => {
    this.props.history.push(routes.profile);
  }

  private goToClasses = () => {
    this.props.history.push(routes.classes);
  }

  public render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Card className={classes.card} onClick={this.goToMyInfo}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={profileCard}
              title="My Profile"
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                My Info
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.card} onClick={this.goToRoutine}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={routineCard}
              title="My Routine"
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                Routine
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={classes.card} onClick={this.goToClasses}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={classesCard}
              title="Classes"
            />
            <CardContent>
              <Typography gutterBottom variant="h4">
                Classes
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(withRouter(Dashboard));