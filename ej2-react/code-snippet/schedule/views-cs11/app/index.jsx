import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, WorkWeek, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
import { appData } from './datasource';
import { extend } from '@syncfusion/ej2-base';
function App() {
  const data = extend([], appData, null, true);
  const eventSettings = { dataSource: data };

  const workDays = [2, 3, 5];
  return (<ScheduleComponent width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}>
    <ViewsDirective>
      <ViewDirective option='WorkWeek' workDays={workDays} />
    </ViewsDirective>
    <Inject services={[WorkWeek]} />
  </ScheduleComponent>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
