

import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids';
import { ExcelExport, ToolbarItems, ExcelQueryCellInfoEventArgs,  Grid, Inject, Toolbar } from '@syncfusion/ej2-react-grids';
import { ClickEventArgs } from '@syncfusion/ej2-react-navigations';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import { data } from './datasource';

function App() {
  let grid: Grid | null;
  const toolbar: ToolbarItems[] = ['ExcelExport'];
  const customAttributes: any = { class: 'orientationcss' };
  const degree: number[] = [90, 180, 45, 135, 225, -90];
  let dropDownListObject: any;
  const setHeaderHeight = () => {
    /** Obtain the width of the headerText content */
    const textWidth: number = (document.querySelector(".orientationcss > div") as HTMLElement).scrollWidth;
    const headerCell: NodeList = document.querySelectorAll(".e-headercell");
    for (let i: number = 0; i < headerCell.length; i++) {
      /** Assign the obtained textWidth as the height of the headerCell */
      ((headerCell as any).item(i)).style.height = textWidth + 'px';
    }
  }
  const toolbarClick = (args: ClickEventArgs) => {
    if (grid && args.item.id === 'grid_excelexport') {
      grid.excelExport();
    }
  }
  const excelQueryCellInfo = (args: ExcelQueryCellInfoEventArgs): void => {
    if (args.column.field == 'Freight') {
      if (args.value < 30) {
        args.style = { backColor: '#99ffcc' };
      }
      else if (args.value < 60) {
        args.style = { backColor: '#ffffb3' };
      }
      else {
        args.style = { backColor: '#ff704d' };
      }
    }
  }

  const excelHeaderQueryCellInfo = (args): void => {
    let textWidth = document.querySelector(".orientationcss > div").scrollWidth;
    if (args.gridCell.column.field == 'Freight') {
      args.style = { backColor: '#99ffcc', vAlign: 'Bottom' };
    }
    else {
      args.style = { vAlign: 'Center', rotation: dropDownListObject.value };
    }
    args.cell.cellHeight = textWidth;
  }
  return (<div>
    <DropDownListComponent placeholder="Select a degree" id="ddlelement" dataSource={degree} ref={(scope) => { dropDownListObject = scope; }}></DropDownListComponent>
    <GridComponent id='grid' dataSource={data} height={260} created={setHeaderHeight} allowExcelExport={true} excelQueryCellInfo={excelQueryCellInfo} excelHeaderQueryCellInfo={excelHeaderQueryCellInfo} toolbar={toolbar} toolbarClick={toolbarClick} ref={g => grid = g}>
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='100' textAlign="Right" />
        <ColumnDirective field='CustomerID' headerText='Customer ID' customAttributes={customAttributes} width='100' />
        <ColumnDirective field='EmployeeID' headerText='Employee ID' width='100' textAlign="Right" />
        <ColumnDirective field='Freight' headerText='Freight' width='80' format="C2" textAlign="Center" />
        <ColumnDirective field='ShipCountry' headerText='Ship Country' width='100' />
      </ColumnsDirective>
      <Inject services={[Toolbar, ExcelExport]} />
    </GridComponent>
  </div>)
};
export default App;


