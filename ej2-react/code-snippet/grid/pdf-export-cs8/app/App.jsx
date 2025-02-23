import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { Inject, PdfExport, Toolbar } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const toolbar = ['PdfExport'];
    const toolbarClick = (args) => {
        if (args.item.id === 'grid_pdfexport') {
            const exportProperties = {
                theme: {
                    caption: {
                        bold: true,
                        fontColor: '#64FA50',
                        fontName: 'Calibri',
                        fontSize: 17
                    },
                    header: {
                        bold: true,
                        border: { color: '#64FA50' },
                        fontColor: '#64FA50',
                        fontName: 'Calibri',
                        fontSize: 17
                    },
                    record: {
                        bold: true,
                        fontColor: '#64FA50',
                        fontName: 'Calibri',
                        fontSize: 17
                    }
                }
            };
            if (grid) {
                grid.pdfExport(exportProperties);
            }
        }
    };
    return (<div>
      <GridComponent id='grid' dataSource={data} toolbar={toolbar} allowPdfExport={true} toolbarClick={toolbarClick} ref={g => grid = g}>
        <ColumnsDirective>
          <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
          <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
          <ColumnDirective field='Freight' width='100' format='C2' textAlign='Right'/>
          <ColumnDirective field='OrderDate' width='140' format='yMd' textAlign='Right'/>
          <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, PdfExport]}/>
      </GridComponent>
    </div>);
}
export default App;
