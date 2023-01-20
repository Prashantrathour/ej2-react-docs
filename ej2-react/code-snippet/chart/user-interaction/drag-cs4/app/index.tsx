


import * as React from "react";
import * as ReactDOM from "react-dom";
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject,
         Legend, Category, Tooltip,Selection, DataLabel, ScatterSeries}
from'@syncfusion/ej2-react-charts';

function App() {
const data: any[] = [
              { height: 130, male: 35 , female: 32 },
              { height: 132, male: 38 , female: 33 },
              { height: 135, male: 41, female: 38 },
              { height: 137, male: 43 , female: 40 },
              { height: 140, male: 45, female: 42 },
              { height: 142, male: 46 , female: 42.5 },
              { height: 145, male: 48, female: 43 },
              { height: 147, male: 50 , female: 44 },
              { height: 150, male: 52, female: 45 },
              { height: 152, male: 55 , female: 45 },
              { height: 155, male: 58, female: 46 },
              { height: 157, male: 60 , female: 48 },
              { height: 160, male: 63, female: 51 },
              { height: 162, male: 70 , female: 54 },
              { height: 165, male: 75, female: 58 },
              { height: 167, male: 78 , female: 62 },
              { height: 170, male: 82, female: 68 },
              { height: 172, male: 87 , female: 72 },
              { height: 175, male: 89, female: 78 },
              { height: 177, male: 92 , female: 82 },
              { height: 180, male: 95, female:  85}
        ];

return(
 <ChartComponent id='charts'
           primaryXAxis={ {title: 'Height (cm)',minimum: 130, maximum: 180,
           edgeLabelPlacement: 'Shift',labelFormat: '{value}cm'} }
           primaryYAxis={ { title: 'Weight (kg)',minimum: 30, maximum: 100,
           labelFormat: '{value}kg', rangePadding: 'None'} }
           selectionMode='DragXY'
           title='Height Vs Weight'>
    <Inject services={[ScatterSeries, Legend, Tooltip, Selection]}/>
    <SeriesCollectionDirective>
        <SeriesDirective dataSource ={data}  xName='height' yName='male' name='Male' type='Scatter'
         marker={ {  width: 12, height: 12 } }></SeriesDirective>
        <SeriesDirective dataSource ={data}  xName='height' yName='female' name='Female' type='Scatter'
         marker={ {  width: 12, height: 12 } }></SeriesDirective>
    </SeriesCollectionDirective>
  </ChartComponent>
)
};
export default App;
ReactDOM.render(<App />, document.getElementById("charts"));


