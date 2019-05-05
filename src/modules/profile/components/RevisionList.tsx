import React from "react";
import { WithStyles, withStyles, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { IRevision } from "../../../shared/types/IRevision";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { getFormattedDate, getDateFromEpoch } from "../../../shared/utils/dateUtils";
import _ from "lodash";
import Revision from "./Revision";

const styles = {
  accordeon: {
    margin: '10px 5px',
  },
}

export interface IRevisionListProps extends WithStyles {
  revisions: IRevision[];
}

export interface IRevisionListState {
  selectedRevision: string;
}

class RevisionList extends React.Component<IRevisionListProps, IRevisionListState> {
  constructor(props: IRevisionListProps) {
    super(props);
    this.state = {
      selectedRevision: 'revision0',
    };
  }
  private revisionChange = (panel: string) => (_event: React.ChangeEvent<{}>, expanded) => {
    this.setState({
      selectedRevision: expanded ? panel : '',
    });
  };

  public render() {
    let { revisions, classes } = this.props;
    const { selectedRevision } = this.state;
    revisions = _.sortBy(revisions, x => x.date);
    return (
      <Grid container>
        {
          revisions.map((revision, revisionIndex) => {
            const revisionId: string = `revision${revisionIndex}`;
            const revisionDate = getFormattedDate(getDateFromEpoch(revision.date));
            return (
              <Grid container key={revisionId} className={classes.accordeon}>
                <Grid item xs={12}>
                  <ExpansionPanel expanded={selectedRevision === revisionId} onChange={this.revisionChange(revisionId)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                      <b>Revision - {revisionDate}. By: {revision.performedBy}</b>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <Revision revision={revision} />
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
                </Grid>
              </Grid>
            );
          })
        }
      </Grid>
    );
  }
}

export default withStyles(styles)(RevisionList);