import React from "react";
import { IExercise } from "../../../shared/types/IExercise";
import { CardContent, Card, Grid, withStyles, WithStyles } from "@material-ui/core";
import { TextAlignProperty } from 'csstype';
import { VideoLibrary } from '@material-ui/icons';
import { ModalContext } from "../../../shared/state/modalContext";
import { card } from "../../../shared/styles/common";

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
    ...card,
    maxWidth: 250,
    width: undefined,
  },
  videoIcon: {
    marginLeft: '5px',
    cursor: 'pointer',
  }
}

interface IExerciseProps extends WithStyles {
  exercise: IExercise;
}

class Exercise extends React.Component<IExerciseProps> {
  public render() {
    const { exercise, classes } = this.props;
    const ModalConsumer = ModalContext.Consumer;

    return (
      <ModalConsumer>
        {({ showModal }) => (
          <>
            <Card className={classes.card}>
              <CardContent>
                <Grid container>
                  <Grid item xs={12}>
                    <h3 className={classes.title}>
                      {exercise.name}
                      {exercise.video && <VideoLibrary
                        className={classes.videoIcon}
                        onClick={() =>
                          showModal({ videoId: exercise.video })
                        } />}
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
              </CardContent>
            </Card>
          </>
        )}
      </ModalConsumer>
    )
  }
}

export default withStyles(styles)(Exercise);