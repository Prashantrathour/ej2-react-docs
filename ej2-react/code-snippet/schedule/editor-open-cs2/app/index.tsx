



import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
  Day, Week, WorkWeek, Month, ScheduleComponent, ViewsDirective, ViewDirective, CellClickEventArgs,EventSettingsModel, EventClickArgs, Inject
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';
import { extend } from '@syncfusion/ej2-base';

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };
  function onCellClick(args: CellClickEventArgs): void {
    scheduleObj.openEditor(args, 'Add');
  }
  function onEventClick(args: EventClickArgs): void {
    if (!(args.event as any).RecurrenceRule) {
      scheduleObj.openEditor(args.event, 'Save');
    }
    else {
      scheduleObj.quickPopup.openRecurrenceAlert();
    }
  }

  return (<div>
    <ScheduleComponent ref={t => scheduleObj = t} height='550px' selectedDate={new Date(2021, 7, 15)}
      eventSettings={eventSettings} showQuickInfo={false} eventClick={onEventClick}
      cellClick={onCellClick} >
      <ViewsDirective>
        <ViewDirective option='Day' />
        <ViewDirective option='Week' />
        <ViewDirective option='WorkWeek' />
        <ViewDirective option='Month' />
      </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month]} />
    </ScheduleComponent>
  </div>)

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



