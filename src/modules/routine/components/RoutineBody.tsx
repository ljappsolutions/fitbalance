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
}

export class RoutineBody extends React.Component<IRoutineBodyProps, IRoutineBodyState> {
  constructor(props: IRoutineBodyProps) {
    super(props);
    this.state = {
      selectedDay: 0,
    };
  }

  private onDaySelect = (_event: React.ChangeEvent<{}>, value: number) => {
    this.setState({
      selectedDay: value
    });
  }

  public render() {
    const { phases } = this.props;
    const { selectedDay } = this.state;
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
            phases.map((phase, index) => {
              return (
                <Grid container key={`phase${index}`}>
                  <Grid item xs={12}>
                    <ExpansionPanel>
                      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        Phase {index + 1} - {phase.numberOfWeeks} weeks
                                            </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container>
                          <Grid item xs={12}>
                            <Tabs variant="fullWidth" value={selectedDay} onChange={this.onDaySelect}>
                              {
                                phase.dayRoutines.map((dayRoutine, index) => {
                                  return (
                                    <Tab key={dayRoutine.dayNumber} label={`Day ${index + 1}`} />
                                  )
                                })
                              }
                            </Tabs>
                          </Grid>
                          {
                            phase.dayRoutines.map((dayRoutine, index) => {
                              return (
                                index === selectedDay ? <DayRoutine key={dayRoutine.dayNumber}
                                  dayRoutine={dayRoutine} /> : null
                              )
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