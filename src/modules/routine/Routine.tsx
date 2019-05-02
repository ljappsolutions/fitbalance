import React from "react";
import { KeyboardBackspace } from '@material-ui/icons';
import { RouteComponentProps, withRouter } from "react-router-dom";
import { Grid, WithStyles, withStyles } from '@material-ui/core';
import { TextAlignProperty } from 'csstype';
import { ClipLoader } from 'react-spinners';
import { IRoutine } from "../../shared/types/IRoutine";
import { RoutineService } from "../../shared/services/routine.service";
import RoutineBody from "./components/RoutineBody";
import { ModalProvider } from "../../shared/state/modalProvider";
import { VideoModal } from "./components/Video";
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
    title: {
        textAlign: 'center' as TextAlignProperty,
        width: '100%',
        margin: 5,
    },
    loader: {
        textAlign: 'center' as TextAlignProperty,
    }
}


export interface IRoutineProps extends WithStyles, RouteComponentProps {
}

export interface IRoutineState {
    routine: IRoutine | null;
    loading: boolean;
}

class Routine extends React.Component<IRoutineProps, IRoutineState> {
    private routineService: RoutineService;

    constructor(props: IRoutineProps) {
        super(props);
        this.state = {
            routine: null,
            loading: false,
        }
        this.routineService = new RoutineService();
    }

    public async componentDidMount() {
        this.setState({
            loading: true,
        });
        const routine = await this.routineService.getRoutine();
        this.setState({
            loading: false,
            routine
        });
    }

    private backToDashboard = (): void => {
        this.props.history.push(routes.dashboard);
    }

    public render() {
        const { routine, loading } = this.state;
        const { classes } = this.props;
        const totalTime = routine ? routine.phases
            .map(x => x.numberOfWeeks)
            .reduce((total, current) => total + current) : 0;
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
                            <h2 className={classes.title}>Routine - {totalTime} weeks</h2>
                            <ModalProvider>
                                <RoutineBody phases={routine.phases} />
                                <VideoModal />
                            </ModalProvider>
                        </Grid>
                    )
                }
                {
                    !routine && (
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

export default withStyles(styles)(withRouter(Routine));