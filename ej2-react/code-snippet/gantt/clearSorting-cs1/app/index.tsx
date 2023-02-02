

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { GanttComponent, Inject, Sort, SortSettingsModel } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    dependency: 'Predecessor',
    child: 'subtasks',
  };
  private ganttInstance: any;
  public sortingOptions: SortSettingsModel = { columns: [{ field: 'TaskID', direction: 'Descending' }] };
  public clickHandler(){
  this.ganttInstance.clearSorting();
}
    render() {
        return (<div>
            <ButtonComponent onClick= { this.clickHandler.bind(this)}>Clear Sorting</ButtonComponent>
            <GanttComponent dataSource={data} taskFields={this.taskFields}  ref={gantt => this.ganttInstance = gantt} allowSorting={true} sortSettings={this.sortingOptions} height='450px'>
          <Inject services={[Sort]} />
        </GanttComponent></div>)
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


