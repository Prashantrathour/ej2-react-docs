import { DataManager, ODataV4Adaptor, Query } from '@syncfusion/ej2-data';
import { ComboBoxComponent } from '@syncfusion/ej2-react-dropdowns';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
export default class App extends React.Component {
    // bind the DataManager instance to dataSource property
    searchData = new DataManager({
        adaptor: new ODataV4Adaptor,
        crossDomain: true,
        url: 'https://services.odata.org/V4/Northwind/Northwind.svc/Customers'
    });
    // maps the appropriate column to fields property
    fields = { text: 'ContactName', value: 'CustomerID' };
    // bind the Query instance to query property
    query = new Query().select(['ContactName', 'CustomerID']).take(6);
    // sort the resulted items
    sortOrder = 'Ascending';
    constructor(props) {
        super(props);
        this.onFiltering = this.onFiltering.bind(this);
    }
    // filtering event handler to filter a customer
    onFiltering(e) {
        // load overall data when search key empty.
        if (e.text === '') {
            e.updateData(this.searchData);
        }
        else {
            // restrict the remote request until search key contains 3 characters.
            if (e.text.length < 3) {
                return;
            }
            let query = new Query().select(['ContactName', 'CustomerID']);
            query = (e.text !== '') ? query.where('ContactName', 'startswith', e.text, true) : query;
            e.updateData(this.searchData, query);
        }
    }
    render() {
        return (
        // specifies the tag for render the ComboBox component
        <ComboBoxComponent id="comboelement" allowFiltering={true} popupHeight="250px" filtering={this.onFiltering} query={this.query} dataSource={this.searchData} fields={this.fields} placeholder="Select a customer" sortOrder={this.sortOrder}/>);
    }
}
ReactDOM.render(<App />, document.getElementById('sample'));
