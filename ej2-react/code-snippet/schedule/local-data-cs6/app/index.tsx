import * as React from 'react';
import * as ReactDOM from "react-dom";
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewsDirective, ViewDirective, Inject, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager } from '@syncfusion/ej2-data';

function App() {
  let scheduleObj: ScheduleComponent;
  let dataManager: DataManager = new DataManager({
    url: 'http://some.com/invalidUrl'
  });
  const eventSettings: EventSettingsModel = { dataSource: dataManager };

  function onActionFailure(): void {
    let span: HTMLElement = document.createElement('span');
    scheduleObj.element.parentNode.insertBefore(span, scheduleObj.element);
    span.style.color = '#FF0000'
    span.innerHTML = 'Server exception: 404 Not found';
  }

  return <ScheduleComponent height='550px' ref={schedule => scheduleObj = schedule} selectedDate={new Date(2017, 5, 11)} actionFailure={onActionFailure} eventSettings={eventSettings}>
    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
  </ScheduleComponent>

};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);



