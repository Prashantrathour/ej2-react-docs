

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, RowDD, Edit, Selection } from '@syncfusion/ej2-react-gantt';
import { projectNewData } from './datasource';
class App extends React.Component<{}, {}>{
    public taskFields: any = {
      id: 'TaskID',
      name: 'TaskName',
      startDate: 'StartDate',
      duration: 'Duration',
      progress: 'Progress',
      dependency: 'Predecessor',
      child: 'subtasks'
  };
  public rowDrop(args: any) {
     if (args.dropPosition == 'middleSegment') {
          args.cancel = true;
          this.ganttInstance.reorderRows([args.fromIndex], args.dropIndex, 'above');
    }
  render() {
        return <GanttComponent ref={(gantt) => (this.ganttInstance = gantt)}
 dataSource={projectNewData} taskFields={this.taskFields} allowRowDragAndDrop={true} rowDrop={this.rowDrop.bind(this)} height = '450px'>
        <Inject services={[RowDD, Edit, Selection]} />
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));


