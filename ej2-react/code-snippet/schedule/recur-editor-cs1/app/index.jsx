import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { RecurrenceEditorComponent } from '@syncfusion/ej2-react-schedule';
function App() {
    let recObject;
    React.useEffect(() => {
        let outputElement = document.querySelector('#rule-output');
        outputElement.innerText = 'Select Rule';
    }, []);
    function onChange(args) {
        let outputElement = document.querySelector('#rule-output');
        if (args.value == "") {
            outputElement.innerText = 'Select Rule';
        }
        else {
            outputElement.innerText = args.value;
        }
    }
    return (<div className='content-wrapper recurrence-editor-wrap'>
    <div style={{ paddingBottom: '15px' }}>
      <label>Rule Output</label>
      <div className='rule-output-container'>
        <div id='rule-output'></div>
      </div>
    </div>
    <div className='RecurrenceEditor'>
      <RecurrenceEditorComponent id='RecurrenceEditor' ref={t => recObject = t} change={onChange}></RecurrenceEditorComponent>
    </div>
  </div>);
}
;
const root = ReactDOM.createRoot(document.getElementById('schedule'));
root.render(<App />);
