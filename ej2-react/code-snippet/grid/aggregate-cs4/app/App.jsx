import { AggregateColumnDirective, ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { AggregateColumnsDirective, AggregateDirective, AggregatesDirective } from '@syncfusion/ej2-react-grids';
import { Aggregate, Page } from '@syncfusion/ej2-react-grids';
import * as React from 'react';
import { data } from './datasource';
export default class App extends React.Component {
    footerSum(props) {
        return (<span>Sum: {props.Sum}</span>);
    }
    footerMax(props) {
        return (<span>Maximum: {props.Max}</span>);
    }
    grid;
    dataBound() {
        this.grid.getHeaderContent().append(this.grid.getFooterContent());
    }
    render() {
        this.dataBound = this.dataBound.bind(this);
        return <GridComponent dataSource={data} allowPaging={true} height={268} dataBound={this.dataBound} ref={g => this.grid = g}>
                <ColumnsDirective>
                  <ColumnDirective field='OrderID' headerText='Order ID' width='120' textAlign='Right'/>
                  <ColumnDirective field='CustomerID' headerText='Customer ID' width='150'/>
                  <ColumnDirective field='Freight' headerText='Freight' width='150' textAlign='Right'/>
                  <ColumnDirective field='ShipName' headerText='Ship Name' width='150'/>
              </ColumnsDirective>
              <AggregatesDirective>
                <AggregateDirective>
                  <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Sum' footerTemplate={this.footerSum}/>
                  </AggregateColumnsDirective>
                </AggregateDirective>
                <AggregateDirective>
                  <AggregateColumnsDirective>
                    <AggregateColumnDirective field='Freight' type='Max' footerTemplate={this.footerMax}/>
                  </AggregateColumnsDirective>
                </AggregateDirective>
              </AggregatesDirective>
              <Inject services={[Page, Aggregate]}/>
          </GridComponent>;
    }
}
