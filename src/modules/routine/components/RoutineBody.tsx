import React from "react";
import {
  Grid, ExpansionPanel, ExpansionPanelSummary,
  ExpansionPanelDetails, Tabs, Tab
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { IPhase } from "../../../shared/types/IPhase";
import { DayRoutine } from "./DayRoutine";

export interface IRoutineBodyProps {
  phases: IPhase[];
}

export interface IRoutineBodyState {
  selectedDay: number;
  selectedPhase: string;
}

export class RoutineBody extends React.Component<IRoutineBodyProps, IRoutineBodyState> {
  constructor(props: IRoutineBodyProps) {
    super(props);
    this.state = {
      selectedDay: 0,
      selectedPhase: 'phase0',
    };
  }

  private onDaySelect = (_event: React.ChangeEvent<{}>, value: number) => {
    this.setState({
      selectedDay: value
    });
  }

  private phaseChange = (panel: string) => (_event: React.ChangeEvent<{}>, expanded) => {
    this.setState({
      selectedPhase: expanded ? panel : '',
    });
  };

  public render() {
    const { phases } = this.props;
    const { selectedDay, selectedPhase } = this.state;
    const totalTime = phases
      .map(x => x.numberOfWeeks)
      .reduce((total, current) => total + current);

    return (
      <>
        <Grid className="info" container>
          <Grid item xs={2}>
            Total Time:
                </Grid>
          <Grid item xs={4}>
            {totalTime} weeks
                    </Grid>
        </Grid>
        <Grid container>
          {
            phases.map((phase, phaseIndex) => {
              const phaseId: string = `phase${phaseIndex}`;
              return (
                <Grid container key={phaseId}>
                  <Grid item xs={12}>
                    <ExpansionPanel expanded={selectedPhase === phaseId} onChange={this.phaseChange(phaseId)}>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Phase {phaseIndex + 1} - {phase.numberOfWeeks} weeks
                                            </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container>
                          <Grid item xs={12}>
                            <Tabs variant="fullWidth" value={selectedDay} onChange={this.onDaySelect}>
                              {
                                phase.dayRoutines.map((dayRoutine) => {
                                  return (
                                    <Tab key={dayRoutine.dayNumber} label={`Day ${dayRoutine.dayNumber}`} />
                                  )
                                })
                              }
                            </Tabs>
                          </Grid>
                          {
                            phase.dayRoutines.map((dayRoutine, routineIndex) => {
                              return selectedPhase === phaseId && routineIndex === selectedDay ?
                                <DayRoutine key={phaseIndex + '' + routineIndex}
                                  dayRoutine={dayRoutine} /> : null
                            })
                          }
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </Grid>
                </Grid>
              )
            })
          }
        </Grid>
      </>
    )
  }
}