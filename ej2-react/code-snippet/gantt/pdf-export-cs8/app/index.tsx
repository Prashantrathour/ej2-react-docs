


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ClickEventArgs } from '@syncfusion/ej2-navigations/src/toolbar/toolbar';
import { GanttComponent, Inject, Toolbar, PdfExport, Selection,Column, ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-gantt';
import { data } from './datasource';
class App extends React.Component {
    constructor() {
        super(...arguments);
        this.taskFields = {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            duration: 'Duration',
            progress: 'Progress',
            child: 'subtasks'
        };
        this.toolbarOptions = ['PdfExport'];
    }
    toolbarClick(args) {
        this.ganttChart.pdfExport();
    }
    public beforePdfExport(): void {
    if (this.grid) {
      (this.grid.columns[3] as Column).visible = true;
      (this.grid.columns[2] as Column).visible = false;
     }
    };
    render() {
        this.beforePdfExport = this.beforePdfExport.bind(this);
        return <GanttComponent id='root' dataSource={data} taskFields={this.taskFields} toolbar={this.toolbarOptions} toolbarClick={this.toolbarClick.bind(this)} allowPdfExport={true} height='400px' ref={gantt => this.ganttChart = gantt}>
        <ColumnsDirective>
                    <ColumnDirective field='TaskID' width='50'/>
                    <ColumnDirective field='TaskName' headerText='Task Name'/>
                    <ColumnDirective field='StartDate'/>
                    <ColumnDirective field='Duration' visible={false}/>
                    <ColumnDirective field='Progress'/>
                </ColumnsDirective>
            <Inject services={[Toolbar, PdfExport, Selection]}/>
        </GanttComponent>
    }
};
ReactDOM.render(<App />, document.getElementById('root'));



