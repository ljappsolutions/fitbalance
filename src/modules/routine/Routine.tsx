import React from "react";
import { IRoutine } from "../../shared/types/IRoutine";
import { Grid } from '@material-ui/core';
import { RoutineHeader } from "./components/RoutineHeader";
import { RoutineService } from "../../shared/services/routine.service";
import { RoutineBody } from "./components/RoutineBody";

export interface IRoutineProps {
}

export interface IRoutineState {
    routine: IRoutine | null;
}

export class Routine extends React.Component<IRoutineProps, IRoutineState> {
    private routineService: RoutineService;

    constructor(props: IRoutineProps) {
        super(props);
        this.state = {
            routine: null,
        }
        this.routineService = new RoutineService();
    }

    public async componentDidMount() {
        const routine = await this.routineService.getRoutine('juanda2003@msn.com');
        this.setState({
            routine
        });
    }

    public render() {
        const { routine } = this.state;

        return (
            <>
                {
                    routine && (
                        <Grid className="routine" container={true}>
                            <RoutineHeader person={routine.person} />
                            <RoutineBody phases={routine.phases} />
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