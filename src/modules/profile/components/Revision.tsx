import React from "react";
import { WithStyles, withStyles, Grid } from "@material-ui/core";
import { IRevision } from "../../../shared/types/IRevision";
import { TextAlignProperty, FontWeightProperty } from "csstype";
import BodyMeasure from "./BodyMeasure";

const styles = {
  label: {
    textAlign: 'left' as TextAlignProperty,
    fontWeight: 'bold' as FontWeightProperty,
  },
  leftAlign: {
    textAlign: 'left' as TextAlignProperty,
  },
  centerAlign: {
    textAlign: 'center' as TextAlignProperty,
  },
  bodyImage: {
    margin: 'auto',
  }
}

export interface IRevisionProps extends WithStyles {
  revision: IRevision;
}

class Revision extends React.Component<IRevisionProps> {
  public render() {
    const { revision, classes } = this.props;
    const labelColumn = 5;
    const valueColumn = 7;

    return (
      <>
        <Grid container>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Fat:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.fat}%</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Muscle:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.muscle} Kg</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Basal:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.basal} cal</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Bone Mass:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.boneMass}%</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Height:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.height} m</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Weight:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.weight} Kg</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Metabolic Age:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.metabolicAge}</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>State:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.physicalState}</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Visceral Fat:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.visceralFat}</Grid>
          </Grid>
          <Grid container>
            <Grid item xs={labelColumn} className={classes.label}>Water:</Grid>
            <Grid item xs={valueColumn} className={classes.leftAlign}>{revision.water}%</Grid>
          </Grid>
          <Grid container className={classes.centerAlign}>
            <Grid item xs={12}>
              <h3>Body measures</h3>
            </Grid>
            <BodyMeasure measures={revision.measures} />
          </Grid>
        </Grid>
      </>
    );
  }
}

export default withStyles(styles)(Revision);