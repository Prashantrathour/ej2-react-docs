import { getObject } from '@syncfusion/ej2-grids';
import { ColumnDirective, ColumnsDirective, Page, TreeGridComponent } from '@syncfusion/ej2-react-treegrid';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-treegrid';
import * as React from 'react';
import { sampleData } from './datasource';
function App() {
    const toolbarOptions = ['PdfExport'];
    const pageSettings = { pageSize: 7 };
    let treegrid;
    const toolbarClick = (args) => {
        if (treegrid) {
            treegrid.pdfExport();
        }
    };
    const pdfQueryCellInfo = (args) => {
        if (args.column.field === 'duration') {
            if (getObject('duration', args.data) === 0) {
                args.style = { backgroundColor: '#336c12' };
            }
            else if (getObject('duration', args.data) < 3) {
                args.style = { backgroundColor: '#7b2b1d' };
            }
        }
    };
    const queryCellInfo = (args) => {
        if (args.column.field === 'duration') {
            if (getObject('duration', args.data) === 0) {
                args.cell.style.background = '#336c12';
            }
            else if (getObject('duration', args.data) < 3) {
                args.cell.style.background = '#7b2b1d';
            }
        }
    };
    return <TreeGridComponent dataSource={sampleData} treeColumnIndex={1} childMapping='subtasks' allowPaging={true} pageSettings={pageSettings} allowPdfExport={true} height='220' toolbarClick={toolbarClick} ref={g => treegrid = g} toolbar={toolbarOptions} pdfQueryCellInfo={pdfQueryCellInfo} queryCellInfo={queryCellInfo}>
        <ColumnsDirective>
            <ColumnDirective field='taskID' headerText='Task ID' width='90' textAlign='Right'/>
            <ColumnDirective field='taskName' headerText='Task Name' width='180'/>
            <ColumnDirective field='startDate' headerText='Start Date' width='90' format='yMd' textAlign='Right' type='date'/>
            <ColumnDirective field='duration' headerText='Duration' width='80' textAlign='Right'/>
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, PdfExport]}/>
    </TreeGridComponent>;
}
;
export default App;
