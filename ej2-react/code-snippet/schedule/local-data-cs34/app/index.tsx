import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, Month, Inject,
  ViewsDirective, ViewDirective, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };

  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings} showWeekend={false}
    workDays={[1, 3, 4, 5]} >
    <ViewsDirective>
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, Month]} />
  </ScheduleComponent>
  )
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


