import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    ganttChart;
    taskFields = {
        id: 'TaskID',
        name: 'TaskName',
        startDate: 'StartDate',
        duration: 'Duration',
        progress: 'Progress',
        child: 'subtasks'
    };
    toolbarOptions = ['PdfExport'];
    toolbarClick(args) {
        if (args.item.text === 'Pdf export') {
            let exportProperties = {
                pageSize: 'A0'
            };
            this.ganttChart.pdfExport(exportProperties);
        }
    }
    ;
    render() {
        return <GanttComponent id='root' dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowPdfExport={true} height='400px' ref={gantt => this.ganttChart = gantt}>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>;
    }
}
;
ReactDOM.render(<App />, document.getElementById('root'));
