import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';

function App() {
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const fieldsData = {
    subject: { title: 'Event Name', name: 'Subject', default: 'Add Name' },
    location: { title: 'Event Location', name: 'Location', default: 'USA' },
    description: { title: 'Summary', name: 'Description' },
    startTime: { title: 'From', name: 'StartTime' },
    endTime: { title: 'To', name: 'EndTime' }
  }
  const eventSettings: EventSettingsModel = { dataSource: data, fields: fieldsData };

  return (<ScheduleComponent width='100%' height='500px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



