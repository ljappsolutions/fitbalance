import React from "react";
import { IExercise } from "../../../shared/types/IExercise";
import { CardContent, Card, Grid, withStyles, StyledComponentProps, WithStyles } from "@material-ui/core";
import YouTube from "react-youtube";
import { TextAlignProperty } from 'csstype';
import { VideoLibrary } from '@material-ui/icons';

const styles = {
  title: {
    textAlign: 'left' as TextAlignProperty
  },
  // badge: {
  //   borderRadius: '0.8em',
  //   backgroundColor: 'red',
  //   display: 'inline-block',
  //   lineHeight: '1.6em',
  //   textAlign: 'center' as TextAlignProperty,
  //   width: '1.6em',
  // },
  card: {
    minWidth: '250px',
    margin: '5px 20px',
  },
  videoIcon: {
    marginLeft: '5px',
    cursor: 'pointer',
  }
}

export interface IExerciseProps extends WithStyles {
  exercise: IExercise;
}

class Exercise extends React.Component<IExerciseProps> {
  private viewVideo = (videoId: string) => () => {
    console.log(videoId);
  }

  public render() {
    const { exercise, classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container>
            <Grid item xs={12}>
              <h3 className={classes.title}>
                {exercise.name}
                {exercise.video && <VideoLibrary
                  className={classes.videoIcon}
                  onClick={this.viewVideo(exercise.video)} />}
              </h3>
            </Grid>
          </Grid>
          {
            exercise.reps &&
            <Grid container>
              <Grid item xs={5}>
                Reps:
                </Grid>
              <Grid item xs={7}>
                {exercise.reps}
              </Grid>
            </Grid>
          }
          {
            exercise.time &&
            <Grid container>
              <Grid item xs={5}>
                Time:
                </Grid>
              <Grid item xs={7}>
                {exercise.time} {exercise.timeUnit}
              </Grid>
            </Grid>
          }
          {
            exercise.weight &&
            <Grid container>
              <Grid item xs={5}>
                Weight:
                </Grid>
              <Grid item xs={7}>
                {exercise.weight} pounds
              </Grid>
            </Grid>
          }
          {/* {
            exercise.video && <YouTube videoId={exercise.video} opts={{
              height: 'auto',
              width: 'auto',
            }} />
          } */}
        </CardContent>
      </Card>
    )
  }
}

export default withStyles(styles)(Exercise);