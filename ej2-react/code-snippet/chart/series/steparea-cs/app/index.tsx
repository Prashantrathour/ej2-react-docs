

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AxisModel, ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, StepAreaSeries}
from'@syncfusion/ej2-react-charts';
import { stepAreaData } from 'datasource.ts';

function App() {
  const primaryxAxis: AxisModel = { valueType: 'Double', title: 'Overs' };
  const primaryyAxis: AxisModel = { title: 'Runs' };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      title='Annual Temperature Comparison'>
      <Inject services={[StepAreaSeries, Legend]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={stepAreaData} xName='x' yName='y' type='StepArea' fill= 'yellow'
          border={{width: 1.5, color:'brown'}} opacity='0.7' dashArray='5'>
        </SeriesDirective>
      </SeriesCollectionDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


