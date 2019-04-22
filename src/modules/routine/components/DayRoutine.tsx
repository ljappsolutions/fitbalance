import React from "react";
import { IDayRoutine } from "../../../shared/types/IDayRoutine";
import { Grid } from "@material-ui/core";
import Exercise from "./Exercise";

export interface IDayRoutineProps {
    dayRoutine: IDayRoutine;
}

export class DayRoutine extends React.Component<IDayRoutineProps> {
    public render() {
        const { dayRoutine } = this.props;

        return dayRoutine.blocks.map((block, index) => {
            return (
                <>
                    <Grid container>
                        <Grid item xs={12}>
                            <h2>Block #{index + 1}. {block.rounds} round(s) - {block.type}</h2>
                        </Grid>
                    </Grid>
                    <Grid container>
                        {block.exercises.map((exercise, index) => <Exercise exercise={exercise} key={`exercise${index}`} />)}
                    </Grid>
                </>
            );
        });
    }
}