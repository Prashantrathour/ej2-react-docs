import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, StackingColumnSeries } from '@syncfusion/ej2-react-charts';
import { stackColumndata } from 'datasource.ts';
function App() {
    const primaryxAxis = { title: 'Years', interval: 1, valueType: 'Category' };
    const primaryyAxis = {
        title: 'Sales in Billions', minimum: 0, maximum: 700, interval: 100,
        labelFormat: '{value}B'
    };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} title='Mobile Game Market by Country'>
      <Inject services={[StackingColumnSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y' name='UK' type='StackingColumn' fill='yellow' border={{width: 1, color: 'black'}} dashArray='5'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y1' name='Germany' type='StackingColumn' fill='green' border={{width: 1, color: 'black'}} dashArray='5'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y2' name='France' type='StackingColumn' fill='blue' border={{width: 1, color: 'black'}} dashArray='5'>
        </SeriesDirective>
        <SeriesDirective dataSource={stackColumndata} xName='x' yName='y3' name='Italy' type='StackingColumn' fill='red' border={{width: 1, color: 'black'}} dashArray='5'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
