import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries } from '@syncfusion/ej2-react-charts';
function App() {
    const data = [
        { x: 'WW', y: 12, y1: 22, y2: 38.3, y3: 50 },
        { x: 'EU', y: 9.9, y1: 26, y2: 45.2, y3: 63.6 },
        { x: 'APAC', y: 4.4, y1: 9.3, y2: 18.2, y3: 20.9 },
        { x: 'LATAM', y: 6.4, y1: 28, y2: 46.7, y3: 65.1 },
        { x: 'MEA', y: 30, y1: 45.7, y2: 61.5, y3: 73 },
        { x: 'NA', y: 25.3, y1: 35.9, y2: 64, y3: 81.4 }
    ];
    const primaryxAxis = {
        title: 'Countries', valueType: 'Category', interval: 1,
        labelIntersectAction: 'Rotate45'
    };
    const primaryyAxis = {
        title: 'Penetration (%)', rangePadding: 'None', labelFormat: '{value}%',
        minimum: 0, maximum: 90
    };
    const legendSettings = {
        padding: 10, shapePadding: 10,
        visible: true, border: {
            width: 2, color: 'grey'
        },
        width: '200'
    };
    const marker1 = { visible: true, width: 10, height: 10, shape: 'Diamond' };
    const marker2 = { visible: true, width: 10, height: 10, shape: 'Pentagon' };
    const marker3 = { visible: true, width: 10, height: 10, shape: 'Triangle' };
    const marker4 = { visible: true, width: 10, height: 10, shape: 'Circle' };
    return <ChartComponent id='charts' primaryXAxis={primaryxAxis} primaryYAxis={primaryyAxis} legendSettings={legendSettings} title='Olympic Medals'>
      <Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category]}/>
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y' type='Line' width={2} name='December 2007' marker={marker1}>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y1' type='Line' width={2} name='December 2008' marker={marker2}>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y2' type='Line' width={2} name='December 2009' marker={marker3}>
        </SeriesDirective>
        <SeriesDirective dataSource={data} xName='x' yName='y3' type='Line' width={2} name='December 2010' marker={marker4}>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>;
}
;
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));
