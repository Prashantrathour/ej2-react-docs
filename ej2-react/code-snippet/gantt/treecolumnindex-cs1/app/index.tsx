import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
function App (){
    const taskFields: any = {
    id: 'TaskID',
    name: 'TaskName',
    startDate: 'StartDate',
    duration: 'Duration',
    progress: 'Progress',
    child: 'subtasks'
  };
  const splitterSettings: any = {
    position : '90%'
};
        return <GanttComponent dataSource={data} splitterSettings={splitterSettings} taskFields={taskFields} treeColumnIndex={2}
        height = '450px'>
        </GanttComponent>
};
ReactDOM.render(<App />, document.getElementById('root'));