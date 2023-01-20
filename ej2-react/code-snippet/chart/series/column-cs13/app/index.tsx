

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel,Category,ChartComponent, ColumnSeries, EmptyPointSettingsModel,
Inject, LineSeries, SeriesCollectionDirective, SeriesDirective  } from '@syncfusion/ej2-react-charts';

function App() {

  const data: any[] = [
    { month: 'Jan', sales: 35 }, { month: 'Feb', sales: null },
    { month: 'Mar', sales: 34 }, { month: 'Apr', sales: 32 },
    { month: 'May', sales: 40 }, { month: 'Jun', sales: undefined },
    { month: 'Jul', sales: 35 }, { month: 'Aug', sales: 55 },
    { month: 'Sep', sales: 38 }, { month: 'Oct', sales: 30 },
    { month: 'Nov', sales: 25 }, { month: 'Dec', sales: 32 }
  ];
  const primaryxAxis: AxisModel = { valueType: 'Category' };
  const emptyPointSettings1: EmptyPointSettingsModel = { mode: 'Average', fill: 'pink' };
  const emptyPointSettings2: EmptyPointSettingsModel = { mode: 'Zero', fill: 'green' };

  return <ChartComponent id='charts' primaryXAxis={primaryxAxis}>
      <Inject services={[ColumnSeries, LineSeries, ColumnSeries, Category]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={data} xName='month' type='Column' yName='sales' name='Sales' emptyPointSettings={emptyPointSettings1} />
        <SeriesDirective dataSource={data} xName='month' type='Line' yName='sales' name='Sales' emptyPointSettings={emptyPointSettings2} />
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


