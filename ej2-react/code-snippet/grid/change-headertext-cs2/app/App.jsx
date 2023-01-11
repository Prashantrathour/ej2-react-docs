import { getValue } from '@syncfusion/ej2-base';
import { ColumnDirective, ColumnsDirective, GridComponent, Inject, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let selIndex = [];
    let grid;
    const settings = { type: 'Multiple' };
    const rowDataBound = (args) => {
        if (getValue('EmployeeID', args.data) > 3) {
            selIndex.push(parseInt(args.row
                .getAttribute('aria-rowindex'), 0));
        }
    };
    const dataBound = () => {
        if (grid && selIndex.length) {
            grid.selectRows(selIndex);
            selIndex = [];
        }
    };
    return (<div>
    <GridComponent dataSource={data} allowPaging={true} rowDataBound={rowDataBound} dataBound={dataBound} selectionSettings={settings} height={280} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
        <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='150' textAlign='Right'/>
        <ColumnDirective field='ShipCity' headerText='Ship City' width='150'/>
        <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
      </ColumnsDirective>
      <Inject services={[Page]}/>
    </GridComponent>
  </div>);
}
;
export default App;
