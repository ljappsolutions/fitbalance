import React from "react";
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
import PageBar from "../../shared/components/PageBar";
import { loader, title } from "../../shared/styles/common";

const styles = {
    title,
    loader,
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

    public render() {
        const { classes } = this.props;
        const { routine, loading } = this.state;
        const totalTime = routine ? routine.phases
            .map(x => x.numberOfWeeks)
            .reduce((total, current) => total + current) : 0;

        return (
            <>
                <PageBar redirectRoute={routes.dashboard} />
                {
                    routine && (
                        <Grid container={true}>
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