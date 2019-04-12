import React from "react";
import { IPerson } from "../../../shared/types/IPerson";
import { Grid } from "@material-ui/core";

export interface IRoutineHeaderProps {
    person: IPerson;
}

export class RoutineHeader extends React.Component<IRoutineHeaderProps> {
    public render() {
        const { person } = this.props;
        return (
            <Grid className="header" container>
                <Grid xs={2} item>
                    Name:
                </Grid>
                <Grid xs={4} item>
                    {person.name}
                </Grid>
                <Grid xs={2} item>
                    Goal:
                </Grid>
                <Grid xs={4} item>
                    {person.goal}
                </Grid>
            </Grid>
        )
    }
}