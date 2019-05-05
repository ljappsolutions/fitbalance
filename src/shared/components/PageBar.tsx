import { RouteComponentProps, withRouter } from "react-router-dom";
import { WithStyles, withStyles } from "@material-ui/core";
import React from "react";
import { KeyboardBackspace } from "@material-ui/icons";

const styles = {
  helpBar: {
    display: 'flex',
    padding: '10px 10px',
    cursor: 'pointer',
    '& span': {
      lineHeight: '24px',
      verticalAlign: 'middle',
    }
  },
}

export interface IPageHeaderProps extends WithStyles, RouteComponentProps {
  redirectRoute: string;
}

class PageBar extends React.Component<IPageHeaderProps> {
  private backToDashboard = (): void => {
    this.props.history.push(this.props.redirectRoute);
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        <div className={classes.helpBar}
          onClick={this.backToDashboard}>
          <KeyboardBackspace />
          <span>
            Go Back
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(withRouter(PageBar));