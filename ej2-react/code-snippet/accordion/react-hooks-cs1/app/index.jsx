import * as React from 'react';
import * as ReactDOM from 'react-dom';
ReactDOM.render(<App />, document.getElementById('container'));
import { useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import { AccordionComponent } from '@syncfusion/ej2-react-navigations';
function App() {
    const [name, setName] = useState('');
    return (<div>
      <div className="control_wrapper" id="control_wrapper">
        <AccordionComponent>
          <div>
            <div>
              <div> TextBox </div>
            </div>
            <div>
              <div>
                <TextBoxComponent placeholder="Enter Name" value={name} input={(e) => setName(e.value)}></TextBoxComponent>
                <div>My name is {name}</div>
              </div>
            </div>
          </div>
        </AccordionComponent>
      </div>
    </div>);
}
const root = ReactDOM.createRoot(document.getElementById('container'));
root.render(<App />);
