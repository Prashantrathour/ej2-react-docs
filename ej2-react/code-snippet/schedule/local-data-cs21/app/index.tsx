import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Month, Week, WorkWeek, Inject,
  ViewsDirective, ViewDirective, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };

  return (<ScheduleComponent height='550px' selectedDate={new Date(2018, 1, 15)} firstDayOfWeek={3} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='Week' />
      <ViewDirective option='WorkWeek' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Week, WorkWeek, Month]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


