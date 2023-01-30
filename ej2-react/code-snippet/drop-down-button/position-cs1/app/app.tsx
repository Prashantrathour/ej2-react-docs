

import { enableRipple } from '@syncfusion/ej2-base';
import { DropDownButtonComponent, ItemModel, OpenCloseMenuEventArgs } from '@syncfusion/ej2-react-splitbuttons';
import * as React from 'react';
import * as ReactDom from 'react-dom';

enableRipple(true);

// To render DropDownButton.
function App() {
    let ddb: DropDownButtonComponent;
    let items: ItemModel[] = [
      {
          text: 'Cut'
      },
      {
          text: 'Copy'
      },
      {
          text: 'Paste'
      }];
    // To open popup in particular position.
    function onOpen (args: OpenCloseMenuEventArgs) {
      const elem = (args.element.parentElement as HTMLElement);
      elem.style.top = ddb.element.getBoundingClientRect().top - elem.offsetHeight +'px';
    }
  
    return (
      <div>
        <DropDownButtonComponent ref= {(scope) => { ddb = scope as DropDownButtonComponent; } } items = {items} open={onOpen} cssClass='e-caret-up'>Clipboard</DropDownButtonComponent>
      </div>
    );
  }
export default App;
ReactDom.render(<App />,document.getElementById('button'));



