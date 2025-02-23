import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, MonthAgenda, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], appData, null, true) as Object[];
  const eventSettings = { dataSource: data };

  const workDays: number[] = [1, 2, 3];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 14)}
    eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='MonthAgenda' showWeekend={false} workDays={workDays} />
    </ViewsDirective>
    <Inject services={[MonthAgenda]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


