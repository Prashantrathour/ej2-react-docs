import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Legend, DateTime, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
import { dateTimeData } from 'datasource.ts';
function App() {
    const primaryxAxis = { valueType: 'DateTime', title: 'Sales Across Years', intervalType: 'Years' };
    const primaryyAxis = { title: 'Sales Amount in millions(USD)' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Average Sales Comparison'>
      <Inject services={[ColumnSeries, Legend, Tooltip, DataLabel, LineSeries, DateTime]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={dateTimeData} xName='x' yName='y' name='Sales' type='Line'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
