import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject, PopupOpenEventArgs, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data }

  function onPopupOpen(args: PopupOpenEventArgs): void {
    if (args.type == 'Editor') {
      scheduleObj.eventWindow.recurrenceEditor.frequencies = ['none', 'daily', 'weekly'];
    }
  }
  return (<ScheduleComponent ref={schedule => scheduleObj = schedule} width='100%' height='550px' selectedDate={new Date(2018, 1, 15)} eventSettings={eventSettings}
    popupOpen={onPopupOpen.bind(this)}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>)
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



