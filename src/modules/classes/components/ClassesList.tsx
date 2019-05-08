import { WithStyles, withStyles, Grid, Card, CardActionArea, CardContent } from "@material-ui/core";
import { IClass } from "../../../shared/types/IClass";
import React from "react";
import { TextAlignProperty, FontWeightProperty } from "csstype";

const styles = {
  card: {
    minWidth: 250,
    margin: '5px 20px',
    width: '100%',
  },
  label: {
    textAlign: 'left' as TextAlignProperty,
    fontWeight: 'bold' as FontWeightProperty,
  },
}

export interface IClassesListProps extends WithStyles {
  classesList: IClass[];
}

class ClassesList extends React.Component<IClassesListProps> {
  public render() {
    const { classesList, classes } = this.props;
    return (
      <Grid container>
        {
          classesList.map(dayClass =>
            <Card className={classes.card} key={dayClass.classId}>
              <CardContent>
                <Grid container>
                  <Grid item xs={5} className={classes.label}>Name:</Grid>
                  <Grid item xs={7}>{dayClass.name}</Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={5} className={classes.label}>Instructor:</Grid>
                  <Grid item xs={7}>{dayClass.instructor}</Grid>
                </Grid>
                <Grid container>
                  <Grid item xs={5} className={classes.label}>Time:</Grid>
                  <Grid item xs={7}>{dayClass.time}</Grid>
                </Grid>
              </CardContent>
            </Card>)
        }
      </Grid>
    );
  }
}

export default withStyles(styles)(ClassesList);