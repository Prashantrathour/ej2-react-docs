{% raw %}
import * as React from "react";
import * as ReactDOM from "react-dom";
import { CircularGaugeComponent, AxesDirective, AxisDirective, PointersDirective, PointerDirective, Gradient } from '@syncfusion/ej2-react-circulargauge';
export function App() {
    return (<CircularGaugeComponent id='circulargauge'>
   <Inject services={[Gradient]}/>
    <AxesDirective>
      <AxisDirective radius='90%' startAngle={270} endAngle={90} minimum={0} maximum={100} lineStyle={{ width: 3, color: '#E63B86' }} labelStyle={{ font: { size: '0px' } }} majorTicks={{ height: 0 }} minorTicks={{ height: 0 }}>
        <PointersDirective>
            <PointerDirective value={80} animation={{ enable: true, duration: 1000 }} radius='80%' markerHeight={5} markerWidth={5} pointerWidth={10} linearGradient={{
            startValue: '0%',
            endValue: '100%',
            colorStop: [
                { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
                { color: '#E63B86', offset: '70%', opacity: 0.9 }
            ]
        }} cap={{
            radius: 8,
            color: 'white',
            border: {
                color: '#E63B86',
                width: 1
            }
        }} needleTail={{
            length: '20%',
            linearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
                    { color: '#E63B86', offset: '70%', opacity: 0.9 }
                ]
            }
        }}></PointerDirective>
            <PointerDirective value={40} animation={{ enable: true, duration: 1000 }} radius='60%' markerHeight={5} markerWidth={5} pointerWidth={10} linearGradient={{
            linearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
                    { color: '#E63B86', offset: '70%', opacity: 0.9 }
                ]
            }
        }} cap={{
            radius: 8,
            color: 'white',
            border: {
                color: '#E63B86',
                width: 1
            }
        }} needleTail={{
            length: '20%',
            linearGradient: {
                startValue: '0%',
                endValue: '100%',
                colorStop: [
                    { color: '#FEF3F9', offset: '0%', opacity: 0.9 },
                    { color: '#E63B86', offset: '70%', opacity: 0.9 }
                ]
            }
        }}>
          </PointerDirective>
        </PointersDirective>
      </AxisDirective>
    </AxesDirective>
  </CircularGaugeComponent>);
}
const root = ReactDOM.createRoot(document.getElementById('circulargauge'));
root.render(<App />);
{% endraw %}