{% raw %}


import { ImageEditorComponent } from '@syncfusion/ej2-react-image-editor';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import { Browser } from '@syncfusion/ej2-base';
import * as React from 'react';
import * as ReactDOM from "react-dom";

export default class App extends React.Component<{}, {}> {
    private imgObj: ImageEditorComponent;
    public imageEditorCreated(): void {
        if (Browser.isDevice) {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/flower.png');
        } else {
            this.imgObj.open('https://ej2.syncfusion.com/demos/src/image-editor/images/bridge.png');
        }
    }
    public btnClick(): void {
        this.imgObj.drawEllipse(500, 500, 400, 400, 2, "#fff", 'green');
    }

    render() {
        return (
            <div className='e-img-editor-sample'>
            <ImageEditorComponent ref={(img) => { this.imgObj = img }} created={this.imageEditorCreated.bind(this)}>
            </ImageEditorComponent>
                    <div>
                        <ButtonComponent cssClass='e-primary' content='Click' onClick = {this.btnClick.bind(this)}/>
                    </div>
                </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('image-editor'));


{% endraw %}