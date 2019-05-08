import React from "react";
import { withStyles, WithStyles, Grid, Tabs, Tab } from "@material-ui/core";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { IClass } from "../../shared/types/IClass";
import { ClassService } from "../../shared/services/class.service";
import { ClipLoader } from "react-spinners";
import { TextAlignProperty } from "csstype";
import PageBar from "../../shared/components/PageBar";
import routes from "../../Routes";
import ClassesList from "./components/ClassesList";
import _ from "lodash";
import moment from "moment";

const styles = {
  loader: {
    textAlign: 'center' as TextAlignProperty,
  },
  title: {
    textAlign: 'center' as TextAlignProperty,
    width: '100%',
    margin: 5,
  },
  infoContainer: {
    padding: '0 10px',
  },
}

export interface IClassesProps extends WithStyles, RouteComponentProps {

}

export interface IClassesState {
  gymClasses: IClass[];
  loading: boolean;
  selectedDay: number;
}

class Classes extends React.Component<IClassesProps, IClassesState> {
  private classService: ClassService;
  private days: string[] = [
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ];

  constructor(props: IClassesProps) {
    super(props);
    this.state = {
      gymClasses: [],
      loading: false,
      selectedDay: 0,
    };
    this.classService = new ClassService();
  }

  public async componentDidMount() {
    this.setState({
      loading: true,
    });
    const gymClasses = await this.classService.getClasses();
    this.setState({
      loading: false,
      gymClasses,
    });
  }

  private onDaySelect = (_event: React.ChangeEvent<{}>, value: number) => {
    this.setState({
      selectedDay: value
    });
  }

  render() {
    const { classes } = this.props;
    const { gymClasses, loading, selectedDay } = this.state;
    const hasClasses = gymClasses.length > 0;
    let dayClasses = hasClasses ? gymClasses.filter(x => x.day === this.days[selectedDay]) : [];
    dayClasses = _.sortBy(dayClasses, (dayClass) => {
      const dayTime = moment(dayClass.time, "hh:mm a");
      return dayTime;
    });

    return (
      <>
        <PageBar redirectRoute={routes.dashboard} />
        {
          hasClasses && (
            <Grid container className={classes.infoContainer}>
              <h2 className={classes.title}>Classes</h2>
              <Tabs variant="scrollable" value={selectedDay} onChange={this.onDaySelect}>
                {
                  this.days.map(day => <Tab key={day} label={day} ></Tab>)
                }
              </Tabs>
              <ClassesList classesList={dayClasses} />
            </Grid>
          )
        }
        {
          !hasClasses && (
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

export default withStyles(styles)(withRouter(Classes));