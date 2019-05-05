import React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { withStyles, WithStyles, Grid } from "@material-ui/core";
import routes from "../../Routes";
import PageBar from "../../shared/components/PageBar";
import { IPerson } from "../../shared/types/IPerson";
import { ProfileService } from "../../shared/services/profile.service";
import { ClipLoader } from "react-spinners";
import { TextAlignProperty, FontWeightProperty } from "csstype";
import { getDateFromEpoch, getFormattedDate } from "../../shared/utils/dateUtils";
import RevisionList from "./components/RevisionList";

const styles = {
  title: {
    textAlign: 'center' as TextAlignProperty,
    width: '100%',
    margin: 5,
  },
  label: {
    textAlign: 'left' as TextAlignProperty,
    fontWeight: 'bold' as FontWeightProperty,
  },
  infoContainer: {
    padding: '0 10px',
  },
  loader: {
    textAlign: 'center' as TextAlignProperty,
  },
  rightAlign: {
    textAlign: 'right' as TextAlignProperty,
  }
}

export interface IProfileProps extends WithStyles, RouteComponentProps {
}

export interface IProfileState {
  person: IPerson | null;
  loading: boolean;
}

class Profile extends React.Component<IProfileProps, IProfileState> {
  private profileService: ProfileService;

  constructor(props: IProfileProps) {
    super(props);
    this.state = {
      person: null,
      loading: false,
    }
    this.profileService = new ProfileService();
  }

  public async componentDidMount() {
    this.setState({
      loading: true,
    });
    const person = await this.profileService.getProfile();
    this.setState({
      loading: false,
      person
    });
  }

  render() {
    const { classes } = this.props;
    const { person, loading } = this.state;
    const birthDate = person ? getFormattedDate(getDateFromEpoch(person.birthDate))
      : null;

    return (
      <>
        <PageBar redirectRoute={routes.dashboard} />
        {
          person && (
            <Grid container={true} className={classes.infoContainer}>
              <h2 className={classes.title}>My Info</h2>
              <Grid container>
                <Grid item xs={3} className={classes.label}>Name:</Grid>
                <Grid item xs={9} className={classes.rightAlign}>{person.name}</Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3} className={classes.label}>Email:</Grid>
                <Grid item xs={9} className={classes.rightAlign}>{person.email}</Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3} className={classes.label}>Goal:</Grid>
                <Grid item xs={9} className={classes.rightAlign}>{person.goal}</Grid>
              </Grid>
              <Grid container>
                <Grid item xs={3} className={classes.label}>Birth Date:</Grid>
                <Grid item xs={9} className={classes.rightAlign}>{birthDate}</Grid>
              </Grid>
              <RevisionList revisions={person.revisions} />
            </Grid>
          )
        }
        {
          !person && (
            <div className={classes.loader}>
              <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={'red'}
                loading={loading}
              />
            </div>
          )
        }
      </>
    );
  }
}

export default withStyles(styles)(withRouter(Profile));