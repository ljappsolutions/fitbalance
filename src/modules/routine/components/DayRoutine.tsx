import React from "react";
import { IDayRoutine } from "../../../shared/types/IDayRoutine";

export interface IDayRoutineProps {
    dayRoutine: IDayRoutine;
}

export class DayRoutine extends React.Component<IDayRoutineProps> {
    public render() {
        const { dayRoutine } = this.props;

        return (
            <h1>{dayRoutine.dayNumber} - {dayRoutine.color}</h1>
        );
    }
}