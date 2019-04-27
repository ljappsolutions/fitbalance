import React from "react";
import { CardActionArea, CardContent, Card, CardMedia, Typography, WithStyles, withStyles } from "@material-ui/core";
import routineCard from './routine-card.jpg';
import { withRouter, RouteComponentProps } from "react-router-dom";

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
    this.props.history.push('/routine');
  }

  public render() {
    const { classes } = this.props;
    return (
      <>
        <Card className={classes.card} onClick={this.goToRoutine}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={routineCard}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h3">
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