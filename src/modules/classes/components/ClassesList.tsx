import { WithStyles, withStyles, Grid, Card, CardContent } from "@material-ui/core";
import { IClass } from "../../../shared/types/IClass";
import React from "react";
import { label, card } from "../../../shared/styles/common";

const styles = {
  card,
  label,
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