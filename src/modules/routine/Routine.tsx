import React from "react";
import { IRoutine } from "../../shared/types/IRoutine";
import { Grid, WithStyles, withStyles } from '@material-ui/core';
import { RoutineHeader } from "./components/RoutineHeader";
import { RoutineService } from "../../shared/services/routine.service";
import RoutineBody from "./components/RoutineBody";
import { ModalProvider } from "../../shared/state/modalProvider";
import { VideoModal } from "./components/Video";
import { KeyboardBackspace } from '@material-ui/icons';
import { RouteComponentProps, withRouter } from "react-router-dom";
import routes from "../../Routes";

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


export interface IRoutineProps extends WithStyles, RouteComponentProps {
}

export interface IRoutineState {
    routine: IRoutine | null;
}

class Routine extends React.Component<IRoutineProps, IRoutineState> {
    private routineService: RoutineService;

    constructor(props: IRoutineProps) {
        super(props);
        this.state = {
            routine: null,
        }
        this.routineService = new RoutineService();
    }

    public async componentDidMount() {
        const routine = await this.routineService.getRoutine();
        this.setState({
            routine
        });
    }

    private backToDashboard = (): void => {
        this.props.history.push(routes.dashboard);
    }

    public render() {
        const { routine } = this.state;
        const { classes } = this.props;

        return (
            <>
                <div>
                    <div className={classes.helpBar}
                        onClick={this.backToDashboard}>
                        <KeyboardBackspace />
                        <span>
                            Go Back
                        </span>
                    </div>
                </div>
                {
                    routine && (
                        <Grid className="routine" container={true}>
                            <RoutineHeader person={routine.person} />
                            <ModalProvider>
                                <RoutineBody phases={routine.phases} />
                                <VideoModal />
                            </ModalProvider>
                        </Grid>
                    )
                }
                {
                    !routine && (
                        <h1>No routine created!</h1>
                    )
                }
            </>
        );
    }
}

export default withStyles(styles)(withRouter(Routine));