---
layout: post
title: Export in React Document editor component | Syncfusion
description: Learn here all about Export in Syncfusion React Document editor component of Syncfusion Essential JS 2 and more.
control: Export 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Export in React Document editor component

Document Editor exports the document into various known file formats in client-side such as Microsoft Word document (.docx), text document (.txt), and its own format called **Syncfusion Document Text (.sfdt)**.

We are providing two types of save APIs  as mentioned below.

|API name|Purpose|
|--------|---------|
|save(filename,FormatType):void<br>FormatType: Sfdt or Docx or Txt|Creates the document with specified file name and format type. Then, the created file is downloaded in the client browser by default.|
|saveAsBlob(FormatType):Blob|Creates the document in specified format type and returns the created document as Blob.<br>This blob can be uploaded to your required server, database, or file path.|

## SFDT export

The following example shows how to export documents in document editor as Syncfusion document text (.sfdt).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/export-cs1/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/export-cs1/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/export-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-cs1" %}

>Document Editor features are segregated into individual feature-wise modules. To use SFDT export, inject the `SfdtExport` module using `DocumentEditor.Inject( SfdtExport)`.
>
>To enable SFDT export for a document editor instance, set `enableSfdtExport` to true.

## Word export

The following example shows how to export the document as Word document (.docx).

>Note: The Syncfusion Document Editor component's document pagination (page-by-page display) can't be guaranteed for all the Word documents to match the pagination of Microsoft Word application. For more information about [why the document pagination (page-by-page display) differs from Microsoft Word](../document-editor/import/#why-the-document-pagination-differs-from-microsoft-word)

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/export-cs2/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/export-cs2/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/export-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-cs2" %}

>Document Editor features are segregated into individual feature-wise modules. To use word export, inject the `WordExport` and `SfdtExport` modules using `DocumentEditor.Inject(WordExport, SfdtExport)`.
>
>To enable word export for a document editor instance, set `enableWordExport` to true.

## Text export

The following example shows how to export document as text document (.txt).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/document-editor/export-cs3/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/document-editor/export-cs3/app/index.tsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/document-editor/export-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/export-cs3" %}

>Document Editor features are segregated into individual feature-wise modules. To use text export, inject the `TextExport` and `SfdtExport` modules using the `DocumentEditor.Inject(TextExport, SfdtExport)`.
>
>To enable text export for a document editor instance, set `enableTextExport` to true.

## Export as blob

Document Editor also supports API to store the document into a blob. Refer to the following sample to export document into blob in client-side.


```ts
import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { DocumentEditorComponent, WordExport, SfdtExport } from '@syncfusion/ej2-react-documenteditor';

//Inject require modules.
DocumentEditorComponent.Inject(WordExport, SfdtExport);
function App() {
    let documenteditor: DocumentEditorComponent;
   function save() {
        //Export the document as Blob object.
       documenteditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
            // The blob can be processed further
        });
    }
        return (
            <div>
                <button onClick={save}>Save</button>
                <DocumentEditorComponent id="container" height={'330px'} ref={(scope) => {documenteditor = scope; }} enableWordExport={true} enableSfdtExport={true} enableTextExport={true} />
            </div>
        );
}
export default App;
ReactDOM.render(<App />, document.getElementById('sample'));

```

For instance, to export the document as Rich Text Format file, implement an ASP.NET MVC web API controller using DocIO library by passing the DOCX blob. Refer to the following code example.

```csharp
//API controller for the conversion.
  [HttpPost]
    public HttpResponseMessage ExportAsRtf()
    {
          System.Web.HttpPostedFile data = HttpContext.Current.Request.Files[0];
          //Opens document stream
          WordDocument wordDocument = new WordDocument(data.InputStream);
          MemoryStream stream = new MemoryStream();
          //Converts document stream as RTF
          wordDocument.Save(stream, FormatType.Rtf);
          wordDocument.Close();
          stream.Position = 0;
          return new HttpResponseMessage() { Content = new StreamContent(stream) };
    }

```

In client-side, you can consume this web service and save the document as Rich Text Format (.rtf) file. Refer to the following example.


```ts
  onExport(): void {
        //Export the document as Blob object.
        this.documenteditor.saveAsBlob('Docx').then((exportedDocument: Blob) => {
            // The blob can be processed further
            let formData: FormData = new FormData();
            formData.append('fileName', 'sample.docx');
            formData.append('data', exportedDocument);
            this.saveAsRtf(formData);
        });
    }

    saveAsRtf(formData: FormData): void {
        let httpRequest: XMLHttpRequest = new XMLHttpRequest();
        httpRequest.open('POST', '/api/DocumentEditor/ExportAsRtf', true);
        httpRequest.onreadystatechange = () => {
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200 || httpRequest.status === 304) {
                    if (!!navigator.msSaveBlob) {
                        navigator.msSaveBlob(httpRequest.response, 'sample.rtf');
                    } else {
                        let downloadLink: HTMLAnchorElement = document.createElementNS(
                            'http://www.w3.org/1999/xhtml',
                            'a'
                        ) as HTMLAnchorElement;
                        download(
                            'sample.rtf',
                            'rtf',
                            httpRequest.response,
                            downloadLink,
                            'download' in downloadLink
                        );
                    }
                } else {
                    console.error(httpRequest.response);
                }
            }
        };
        httpRequest.responseType = 'blob';
        httpRequest.send(formData);
    }
    //Downlod the document in client side.
    download(fileName: string, extension: string, buffer: Blob, downloadLink: HTMLAnchorElement, hasDownloadAttribute: Boolean): void {
        if (hasDownloadAttribute) {
            downloadLink.download = fileName;
            let dataUrl: string = window.URL.createObjectURL(buffer);
            downloadLink.href = dataUrl;
            let event: MouseEvent = document.createEvent('MouseEvent');
            event.initEvent('click', true, true);
            downloadLink.dispatchEvent(event);
            setTimeout((): void => {
                window.URL.revokeObjectURL(dataUrl);
                dataUrl = undefined;
            }
            );
        } else {
            if (extension !== 'docx' && extension !== 'xlsx') {
                let url: string = window.URL.createObjectURL(buffer);
                let isPopupBlocked: Window = window.open(url, '_blank');
                if (!isPopupBlocked) {
                    window.location.href = url;
                }
            }
        }
    }
```

## See Also

* [Feature modules](../document-editor/feature-module/)
* [How to export the document as pdf?](../document-editor/how-to/export-document-as-pdf).