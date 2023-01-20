


import * as React from "react";
import * as ReactDOM from "react-dom";
import { Browser } from '@syncfusion/ej2-base';
import {
    ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, CandleSeries, Category, Tooltip, DateTime,
    Zoom, Logarithmic, Crosshair, LineSeries, TmaIndicator, IndicatorsDirective, IndicatorDirective, ILoadedEventArgs,
    ChartTheme,AxisModel,ChartAreaModel,CrosshairSettingsModel, TooltipSettingsModel
} from '@syncfusion/ej2-react-charts';
import { chartData } from 'datasource.ts';

function App() {

  const primaryxAxis: AxisModel = { valueType: 'DateTime', intervalType: 'Months', majorGridLines: { width: 0 }, crosshairTooltip: { enable: true } };
  const primaryyAxis: AxisModel = { title: 'Price', labelFormat: '${value}', minimum: 30, maximum: 180, interval: 30, lineStyle: { width: 0 } };
  const animation = { enable: true };
  const chartarea: ChartAreaModel = { border: { width: 0 } };
  const crosshair: CrosshairSettingsModel = { enable: true, lineType: 'Vertical' };
  const tooltip: TooltipSettingsModel = { enable: true, shared: true };
  const animation1 = { enable: false };

  return <ChartComponent id='charts'
      primaryXAxis={primaryxAxis}
      primaryYAxis={primaryyAxis}
      tooltip={tooltip}
      crosshair={crosshair}
      chartArea={chartarea}
      width={Browser.isDevice ? '100%' : '80%'}
      title='AAPL 2012-2017'>
      <Inject services={[CandleSeries, Category, Tooltip, DateTime, Logarithmic, Crosshair, LineSeries, TmaIndicator]} />
      <SeriesCollectionDirective>
        <SeriesDirective dataSource={chartData} width={2} xName='x' yName='y' low='low' high='high' close='close' volume='volume' open='open' name='Apple Inc' bearFillColor='#2ecd71' bullFillColor='#e74c3d' type='Candle' animation={animation1}>
        </SeriesDirective>
      </SeriesCollectionDirective>
      <IndicatorsDirective>
        <IndicatorDirective type='Tma' field='Close' seriesName='Apple Inc' fill='#6063ff' period={14} animation={animation}>
        </IndicatorDirective>
      </IndicatorsDirective>
    </ChartComponent>

};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));



