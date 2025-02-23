import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { extend } from '@syncfusion/ej2-base';
import { ItemModel } from '@syncfusion/ej2-react-navigations';
import {
  ScheduleComponent, ViewDirective, Week, Resize, ExcelExport, ExportOptions,
  ActionEventArgs, ToolbarActionArgs, DragAndDrop, Inject, ViewsDirective, EventSettingsModel
} from '@syncfusion/ej2-react-schedule';
import { scheduleData } from './datasource';

/**
 *  Schedule Export Custom Separator
 */

function App() {
  let scheduleObj: ScheduleComponent;
  const data: Object[] = extend([], scheduleData, null, true) as Object[];
  const eventSettings: EventSettingsModel = { dataSource: data };

  function onActionBegin(args: ActionEventArgs & ToolbarActionArgs): void {
    if (args.requestType === 'toolbarItemRendering') {
      let exportItem: ItemModel = {
        align: 'Right', showTextOn: 'Both', prefixIcon: 'e-icon-schedule-excel-export',
        text: 'CSV-Export', cssClass: 'e-excel-export', click: onExportClick
      };
      args.items.push(exportItem);
    }
  }

  function onExportClick(): void {
    let exportValues: ExportOptions = { exportType: 'csv', separator: ';' };
    scheduleObj.exportToExcel(exportValues);
  }
  return (
    <ScheduleComponent cssClass='excel-export' width='100%' height='550px' id='schedule' ref={t => scheduleObj = t}
      selectedDate={new Date(2019, 0, 10)} eventSettings={eventSettings}
      actionBegin={onActionBegin}>
      <ViewsDirective>
        <ViewDirective option='Week' />
      </ViewsDirective>
      <Inject services={[Week, Resize, DragAndDrop, ExcelExport]} />
    </ScheduleComponent>
  );
};
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);


