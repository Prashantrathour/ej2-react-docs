---
layout: post
title: Worksheet in React Spreadsheet component | Syncfusion
description: Learn here all about Worksheet in Syncfusion React Spreadsheet component of Syncfusion Essential JS 2 and more.
control: Worksheet 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Worksheet in React Spreadsheet component

Worksheet is a collection of cells organized in the form of rows and columns that allows you to store, format, and manipulate the data.

## Add sheet

You can dynamically add or insert a sheet by one of the following ways,

* Click the `Add Sheet` button in the sheet tab. This will add a new empty sheet next to current active sheet.
* Right-click on the sheet tab, and then select `Insert` option from the context menu to insert a new empty sheet before the current active sheet.
* Using [`insertSheet`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#insertsheet) method, you can insert one or more sheets at your desired index.

The following code example shows the insert sheet operation in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/insert-sheet-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/insert-sheet-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/insert-sheet-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/insert-sheet-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/insert-sheet-cs1" %}

## Delete sheet

The Spreadsheet has support for removing an existing worksheet. You can dynamically delete the existing sheet by the following way,

* Right-click on the sheet tab, and then select `Delete` option from context menu.
* Using [`delete`](https://ej2.syncfusion.com/react/documentation/api/spreadsheet/#delete ) method to delete the sheets.

## Rename sheet

You can dynamically rename an existing worksheet in the following way,

* Right-click on the sheet tab, and then select `Rename` option from the context menu.

## Headers

By default, the row and column headers are visible in worksheets. You can dynamically show or hide worksheet headers by using one of the following ways,

* Switch to `View` tab, and then select `Hide Headers` option to hide both the row and column headers.
* Set `showHeaders` property in `sheets` as `true` or `false` to show or hide the headers at initial load. By default, the `showHeaders` property is enabled in each worksheet.

## Gridlines

Gridlines act as a border like appearance of cells. They are used to distinguish cells on the worksheet. You can dynamically show or hide gridlines by using one of the following ways,

* Switch to `View` tab, and then select `Hide Gridlines` option to hide the gridlines in worksheet.
* Set `showGridLines` property in `sheets` as `true` or `false` to show or hide the gridlines at initial load. By default, the `showGridLines` property is enabled in each worksheet.

The following code example shows the headers and gridlines operation in spreadsheet.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/headers-gridlines-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/headers-gridlines-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/headers-gridlines-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/headers-gridlines-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/headers-gridlines-cs1" %}

## Sheet visibility

Hiding a worksheet can help prevent unauthorized or accidental changes to your file.

There are three visibility state as like Microsoft Excel,

| State | Description |
|-------|---------|
| `Visible` | You can see the worksheet once the component is loaded. |
| `Hidden` | This worksheet is not visible, but you can unhide by selecting the sheet from `List All Sheets` dropdown menu. |
| `VeryHidden` | This worksheet is not visible and cannot be unhidden. Changing the state property to `Visible` is the only way to view this sheet. |

The following code example shows the three types of sheet visibility state.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/spreadsheet/sheet-visiblity-cs1/app/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/spreadsheet/sheet-visiblity-cs1/app/app.tsx %}
{% endhighlight %}
{% highlight js tabtitle="datasource.jsx" %}
{% include code-snippet/spreadsheet/sheet-visiblity-cs1/app/datasource.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="datasource.tsx" %}
{% include code-snippet/spreadsheet/sheet-visiblity-cs1/app/datasource.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "page.domainurl/code-snippet/spreadsheet/sheet-visiblity-cs1" %}

## Note

You can refer to our [React Spreadsheet](https://www.syncfusion.com/react-ui-components/react-spreadsheet) feature tour page for its groundbreaking feature representations. You can also explore our [React Spreadsheet example](https://ej2.syncfusion.com/react/demos/#/material/spreadsheet/default) to knows how to present and manipulate data.

## See Also

* [Sheet protection](./protect-sheet)
* [Rows and columns](./rows-and-columns)
* [Cell range](./cell-range)
* [Formatting](./formatting)
