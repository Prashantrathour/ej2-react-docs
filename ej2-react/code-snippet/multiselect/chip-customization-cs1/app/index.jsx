import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // define the JSON of data
    colorsData = [
        { Color: 'Chocolate', Code: '#75523C' },
        { Color: 'CadetBlue', Code: '#3B8289' },
        { Color: 'DarkOrange', Code: '#FF843D' },
        { Color: 'DarkRed', Code: '#CA3832' },
        { Color: 'Fuchsia', Code: '#D44FA3' },
        { Color: 'HotPink', Code: '#F23F82' },
        { Color: 'Indigo', Code: '#2F5D81' },
        { Color: 'LimeGreen', Code: '#4CD242' },
        { Color: 'OrangeRed', Code: '#FE2A00' },
        { Color: 'Tomato', Code: '#FF745C' }
    ];
    // maps the appropriate column to fields property
    fields = { text: 'Color', value: 'Code' };
    // set the value to MultiSelect
    colorValues = ['#75523C', '#4CD242', '#FF745C'];
    // bind the tagging event
    onTagging = (e) => {
        // set the current selected item text as class to chip element.
        e.setClass(e.itemData[this.fields.text].toLowerCase());
    };
    render() {
        return (<MultiSelectComponent id="chip-customization" value={this.colorValues} dataSource={this.colorsData} fields={this.fields} mode="Box" placeholder="Favorite Colors" tagging={this.onTagging = this.onTagging.bind(this)}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
