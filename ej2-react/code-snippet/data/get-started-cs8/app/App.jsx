import { DataManager, Query } from '@syncfusion/ej2-data';
import * as React from 'react';
import { data } from './datasource';
import { Row } from './rowTemplate';
export default class App extends React.Component {
    result = new DataManager(data).executeLocal(new Query()
        .where('EmployeeID', 'equal', 3));
    items = this.result.map((row) => (<Row {...row}/>));
    render() {
        return (<table id='datatable' className='e-table'>
            <thead>
             <tr><th>Order ID</th><th>Customer ID</th><th>Employee ID</th></tr>
            </thead>
            <tbody>{this.items}</tbody>
           </table>);
    }
}
