import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { ColumnDirective, ColumnsDirective } from '@syncfusion/ej2-react-grids';
import { Filter, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
function App() {
    let grid;
    const dropdata = DataUtil.distinct(data, 'CustomerID');
    const filterTemplate = (props)=> {
      dropdata.push('Clear');
      /** The enabled attributes will be added based on the column property. */
      return (<DropDownListComponent enabled={props.column.allowFiltering} id={props.column.field} popupHeight='250px'
        dataSource={dropdata} change={onChange} />);
    }
    const onChange = (args) => {
      if (grid) {
        if (args.value === 'Clear') {
          grid.clearFiltering();
        } else {
          grid.filterByColumn('CustomerID', 'equal', args.value);
        }
      }
    }
    return <GridComponent ref={g => grid = g} dataSource={data} allowFiltering={true} >
      <ColumnsDirective>
        <ColumnDirective field='OrderID' headerText='Order ID' width='140' textAlign="Right" />
        <ColumnDirective field='EmployeeID' headerText='EmployeeID' width='140' textAlign="Right" />
        <ColumnDirective field='CustomerID' allowFiltering={false} filterTemplate={filterTemplate} width='140' />
        <ColumnDirective field='ShipName' width='170' textAlign="Right" />
      </ColumnsDirective>
      <Inject services={[Filter]} />
    </GridComponent>
  };
  export default App;
