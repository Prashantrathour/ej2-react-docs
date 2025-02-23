

import { InPlaceEditorComponent } from '@syncfusion/ej2-react-inplace-editor';
import * as React from 'react';

class App extends React.Component {
  public genderData = ['Male', 'Female'];
  public dateModel = { showTodayButton: true, placeholder: 'Select date of birth' };
  public dateValue = new Date('04/12/2018');
  public elementModel = { placeholder: 'Enter your name' };
  public genderModel = {  dataSource: this.genderData, placeholder: 'Select gender' };
  public render() {
    return (
      <div id='container'>
      <div className="control-group">
           <div className="e-heading">
            <h3> Modify Basic Details </h3>
            </div>
            <table>
                <tr>
                    <td>Name</td>
                    <td className='left'>
                        <InPlaceEditorComponent id='element' mode='Inline' value='Andrew' model={this.elementModel}/>
                    </td>
                </tr>
                <tr>
                    <td>Date of Birth</td>
                    <td className='left'>
                        <InPlaceEditorComponent id='dateofbirth' type="Date" mode='Inline' value={this.dateValue} model={this.dateModel}/>
                    </td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td className='left'>
                        <InPlaceEditorComponent id='gender' type="DropDownList" mode='Inline' value='Male' model={this.genderModel}/>
                    </td>
                </tr>
            </table>
        </div>
        </div>
    );
  }
}

export default App;


