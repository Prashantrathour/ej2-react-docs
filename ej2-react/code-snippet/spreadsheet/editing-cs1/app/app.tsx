


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SpreadsheetComponent, SheetsDirective, SheetDirective, RangesDirective, RowsDirective, RowDirective, CellDirective, CellsDirective } from '@syncfusion/ej2-react-spreadsheet';
import { RangeDirective, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-spreadsheet';
import { CellStyleModel, getRangeIndexes } from '@syncfusion/ej2-react-spreadsheet';
import { data } from './datasource';

export default class App extends React.Component<{}, {}> {
       public spreadsheet: SpreadsheetComponent;
       public styles: CellStyleModel  = {fontWeight: 'bold'};
       public oncreated(): void{
        this.spreadsheet.cellFormat({ fontWeight: 'bold', textAlign: 'center' }, 'A1:E1');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'A2:A10');
        this.spreadsheet.cellFormat({ textAlign: 'center' }, 'C2:C10');
        this.spreadsheet.numberFormat('$#,##0.00', 'D2:D10');
        this.spreadsheet.numberFormat('$#,##0.00', 'E2:E11');
    };
    // Triggers before going to the editing mode.
    public oncellEdit(args: CellEditEventArgs): void{
        // Preventing the editing in 5th(Amount) column.
        if (args.address.includes('E')) { args.cancel = true; }
    };
    // Trigger before saving the edited cell content.
    public onbeforeCellSave(args: CellEditEventArgs): void{
        // Prevent saving the edited changes in 4th(Rate) column.
        if (args.address.includes('D')) {
            args.cancel = true;
            // Manually removes the editable state without saving the changes. Use `endEdit` method if you want to save the changes.
            this.spreadsheet.closeEdit();
        }
    }
     render() {
        return  ( <div> <SpreadsheetComponent
                        ref={(ssObj) => { this.spreadsheet = ssObj }} created={this.oncreated.bind(this)} showSheetTabs={false} cellEdit={this.oncellEdit.bind(this)} beforeCellSave={this.onbeforeCellSave.bind(this)} >
                        <SheetsDirective>
                            <SheetDirective selectedRange={"C7"}>
                             <RowsDirective>
                                 <RowDirective index={10}>
                                     <CellsDirective>
                                         <CellDirective index={3} value={'Total Amount'} style={this.styles}></CellDirective>
                                         <CellDirective formula={'=SUM(E2:E10'}>
                                         </CellDirective>
                                     </CellsDirective>
                                 </RowDirective>
                                     </RowsDirective>
                                <RangesDirective>
                                    <RangeDirective dataSource={data}></RangeDirective>
                                </RangesDirective>
                                <ColumnsDirective>
                                    <ColumnDirective width={120} index={1}></ColumnDirective>
                                    <ColumnDirective width={180}></ColumnDirective>
                                    <ColumnDirective width={100}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                    <ColumnDirective width={120}></ColumnDirective>
                                </ColumnsDirective>
                            </SheetDirective>
                        </SheetsDirective>
                    </SpreadsheetComponent> </div>);
    }
}
ReactDOM.render(<App />, document.getElementById('root'));




