---
layout: post
title: Open document by address in React Document editor component | Syncfusion
description: Learn here all about Open document by address in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Open document by address 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Open document by address in React Document editor component

## How to open a document from URL in DocumentEditor

In this article, we are going to see how to open a document from URL in DocumentEditor

please refer below example for client-side code

```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import {
    DocumentEditorContainerComponent, Toolbar
} from '@syncfusion/ej2-react-documenteditor';

DocumentEditorContainerComponent.Inject(Toolbar);
function App() {
    let container: DocumentEditorContainerComponent;
    let contentChanged: boolean = false;
    function onClick() {
        let http: XMLHttpRequest = new XMLHttpRequest();
        //add your url in which you want to open document inside the ""
        let content = { fileUrl: "" };
        let baseurl: string = "/api/documenteditor/ImportFileURL";
        http.open("POST", baseurl, true);
        http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        http.onreadystatechange = () => {
            if (http.readyState === 4) {
                if (http.status === 200 || http.status === 304) {
                    //open the SFDT text in Document Editor
                    container.documentEditor.open(http.responseText);
                }
            }
        };
        http.send(JSON.stringify(content));
    }
    return (
        <div>
            <button id='import' onClick={onClick}>Import</button>
            <DocumentEditorContainerComponent id="container" ref={(scope) => { container = scope; }}
                height={'590px'}
                serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
                enableToolbar={true}
            />
        </div>
    );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

please refer below example for server-side code

```csharp
    [AcceptVerbs("Post")]
    public string ImportFileURL([FromBody]FileUrlInfo param)
    {
        try {
            using(WebClient client = new WebClient())
            {
                MemoryStream stream = new MemoryStream(client.DownloadData(param.fileUrl));
                WordDocument document = WordDocument.Load(stream, FormatType.Docx);
                string json = Newtonsoft.Json.JsonConvert.SerializeObject(document);
                document.Dispose();
                stream.Dispose();
                return json;
            }
        }
        catch (Exception) {
            return "";
        }
    }
    public class FileUrlInfo {
        public string fileUrl { get; set; }
        public string Content { get; set; }
    }
```
