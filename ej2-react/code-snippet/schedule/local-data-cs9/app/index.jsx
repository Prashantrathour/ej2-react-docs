import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, TimelineViews, Month, ViewsDirective, ViewDirective, Inject } from '@syncfusion/ej2-react-schedule';
import { extend } from '@syncfusion/ej2-base';
import { scheduleData } from './datasource';
function App() {
  const data = extend([], scheduleData, null, true);
  const fieldsData = {
    id: 'Id',
    subject: { name: 'Subject', title: 'Event Name' },
    location: { name: 'Location', title: 'Event Location' },
    description: { name: 'Description', title: 'Event Description' },
    startTime: { name: 'StartTime', title: 'Start Duration' },
    endTime: { name: 'EndTime', title: 'End Duration' }
  }
  const eventSettings = { dataSource: data, fields: fieldsData };

  return (<ScheduleComponent width='100%' height='500px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='TimelineDay' />
      <ViewDirective option='Day' />
      <ViewDirective option='Week' />
      <ViewDirective option='Month' />
    </ViewsDirective>
    <Inject services={[Day, Week, TimelineViews, Month]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
