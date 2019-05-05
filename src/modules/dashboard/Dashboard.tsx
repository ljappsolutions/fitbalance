import React from "react";
import { CardActionArea, CardContent, Card, CardMedia, Typography, WithStyles, withStyles } from "@material-ui/core";
import routineCard from './routine-card.jpg';
import profileCard from './profile-card.png';
import { withRouter, RouteComponentProps } from "react-router-dom";
import routes from "../../Routes";

const styles = {
  card: {
    minWidth: 250,
    margin: '5px 20px',
  },
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

  public render() {
    const { classes } = this.props;
    return (
      <>
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
      </>
    );
  }
}

export default withStyles(styles)(withRouter(Dashboard));