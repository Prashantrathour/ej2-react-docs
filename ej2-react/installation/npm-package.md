---
layout: post
title: Npm package in React Installation component | Syncfusion
description: Learn here all about Npm package in Syncfusion React Installation component of Syncfusion Essential JS 2 and more.
control: Npm package 
platform: ej2-react
documentation: ug
domainurl: ##DomainURL##
---

# Npm packages for Syncfusion React UI Components

The Syncfusion React UI components are separately available in individual [npm packages](https://www.npmjs.com/search?q=%40syncfusion%2Fej2-react). The npm packages are segregated based on the component usage.

## Anatomy of npm packages

Syncfusion React UI components are shipped as npm packages. Following table explains the purpose of each file available in the package.

|    Files                                                                  |    Purpose                                                                                                                                                                                                                                                                                   |
|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    `dist/es6`                                                               |    This folder contains the ES6 formatted JS file of   the package.                                                                                                   |
|    `dist/<packagename>.umd.min.js`   `dist/<packagename>.umd.js`              |        For applications using AMD or Common JS based   module loader can be utilize these files.                                                                                                                                                                                             |
|    `src/`                                                                   |    This folder contains the script files in AMD   format. You can connect these AMD files as a package in System JS or Require   JS.                                                                                                                                                         |
|    `styles/<theme name>.css`   `styles/<theme name>.scss`                     |    This folder contains the CSS and SCSS files of the   package.                                                                                                                                                                                                                             ||

## Available npm package

### Syncfusion React Base

The Syncfusion React Base is a common package of Essential JS 2 for React which contains base libraries, methods and class definitions.

|Package Name  |Installation command|
|--------|--------|
| [ej2-react-base](https://www.npmjs.com/package/@syncfusion/ej2-react-base)    | npm install @syncfusion/ej2-react-base |

### Syncfusion React BarcodeGenerator

The Syncfusion Essential JS Barcode widget enables rendering of one dimension and two dimension barcodes in web page. Barcode provides you a simple and inexpensive method of encoding text information that can be easily read by electronic readers.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-barcode-generator](https://www.npmjs.com/package/@syncfusion/ej2-react-barcode-generator)    | npm i @syncfusion/ej2-react-barcode-generator | BarcodeGenerator |

### Syncfusion React Buttons

The Syncfusion React buttons package contains UI components such as Button, Checkbox, RadioButton, Switch, and Chip component.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-buttons](https://www.npmjs.com/package/@syncfusion/ej2-react-buttons)    | npm install @syncfusion/ej2-react-buttons | <li>Button</li> <li>CheckBox</li> <li>Chip</li> <li>RadioButton</li> <li>Switch</li> |

### Syncfusion React Calendars

The Syncfusion React Calendars package contains date and time components such as Calendar, DatePicker, DateRangePicker, DateTimePicker, and TimePicker. These components come with options to disable dates, restrict selection, and show custom events.

<!-- markdownlint-disable MD033 -->
|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-calendars](https://www.npmjs.com/package/@syncfusion/ej2-react-calendars)    |npm install @syncfusion/ej2-react-calendars | <li>Calendar</li> <li>DatePicker</li> <li>DateRangePicker</li> <li>DateTimePicker</li> <li>TimePicker</li> |

### Syncfusion React Charts

The Syncfusion React Chart control is used to visualize the data with user interactivity and provides customizing options to configure the data visually. It can bind data from datasource such as array of JSON objects , `OData web services` or [DataManager](https://ej2.syncfusion.com/react/documentation/data/?utm_source=npm&utm_campaign=chart). All chart elements are rendered using Scalable Vector Graphics (SVG).

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components
|--------|--------|-------|
| [ej2-react-charts](https://www.npmjs.com/package/@syncfusion/ej2-react-charts)    | npm install @syncfusion/ej2-react-charts | <li>Accumulation Chart</li> <li>Bullet Chart</li> <li>Chart</li> <li>Range Navigator</li> <li>Smith Chart</li> <li>Sparkline</li> <li>Stock Chart</li> |

### Syncfusion React CircularGauge

The Syncfusion React CircularGauge component is ideal to visualize numeric values over a circular scale. All the circular gauge elements are rendered using Scalable Vector Graphics (SVG).

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-circulargauge](https://www.npmjs.com/package/@syncfusion/ej2-react-circulargauge)    | npm i @syncfusion/ej2-react-circulargauge | CircularGauge |

### Syncfusion React Data

It is a data management package to perform data operations such as grouping, sorting in client applications. It will act as an abstraction for using local data sources like array of JavaScript objects and remote data sources like web services returning JSON, JSONP, oData or XML.

|Package Name  |Installation command|
|--------|--------|
| [ej2-data](https://www.npmjs.com/package/@syncfusion/ej2-data)    | npm i @syncfusion/ej2-data |

### Syncfusion React Diagrams

The Syncfusion React Diagram component visually represents information. It is also used to create diagrams like flow charts, organizational charts, mind maps, and BPMN either through code or a visual interface.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-diagrams](https://www.npmjs.com/package/@syncfusion/ej2-react-diagrams)    | npm i @syncfusion/ej2-react-diagrams | Diagrams |

### Syncfusion React DropDowns

The Syncfusion React Dropdowns package contains a collection of Dropdown components such as Dropdown List, Combo Box, AutoComplete, Multiselect Dropdown, and List Box. Dropdown components contain specific features such as data binding, grouping, sorting, filtering, and templates.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-dropdowns](https://www.npmjs.com/package/@syncfusion/ej2-react-dropdowns)    |npm i @syncfusion/ej2-react-dropdowns | <li>AutoComplete</li> <li>ComboBox</li> <li>Dropdown List</li> <li>Dropdown Tree</li> <li>ListBox</li> <li>Multiselect Dropdown</li> |

### Syncfusion React FileManager

The Syncfusion File Manager is a graphical user interface component used to manage the file system. It enables the user to perform common file operations such as accessing, editing, uploading, downloading, and sorting files and folders. This component also allows easy navigation for browsing or selecting a file or folder from the file system.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-filemanager](https://www.npmjs.com/package/@syncfusion/ej2-react-filemanager)    | npm i @syncfusion/ej2-react-filemanager | FileManager |

### Syncfusion React Gantt

The Syncfusion React Gantt is designed to visualize and edit the project schedule, and track the project progress. It helps to organize and schedule the projects, and also the project schedule can be updated through interactions like editing, dragging, and resizing.

|Package Name  |Installation command|Components |
|--------|--------|
| [ej2-react-gantt](https://www.npmjs.com/package/@syncfusion/ej2-react-gantt)    | npm i @syncfusion/ej2-react-gantt | Gantt |

### Syncfusion React Grid

The React Data Grid component is used to display and manipulate tabular data with configuration options to control the way the data is presented and manipulated. It will pull data from a data source, such as array of JSON objects, `OData web services`, or [DataManager](https://ej2.syncfusion.com/react/documentation/data/?utm_source=npm&utm_medium=listing&utm_campaign=react-data-grid-npm) binding data fields to columns. Also displaying a column header to identify the field with support for grouped records.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-grids](https://www.npmjs.com/package/@syncfusion/ej2-react-grids)    | npm install @syncfusion/ej2-react-grids | Grid |

### Syncfusion React HeatMap

The Syncfusion React Heat map is used to visualize a two-dimensional data in which the values are represented in gradient or fixed colors.

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-heatmap](https://www.npmjs.com/package/@syncfusion/ej2-react-heatmap)    | npm install @syncfusion/ej2-react-heatmap | HeatMap |

### Syncfusion React InPlaceEditor

The Syncfusion React InPlace Editor component is most useful for editing a value dynamically within its context (in-place). Its features include inline and pop-up modes, and customizable user interface (UI) and events.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-inplace-editor](https://www.npmjs.com/package/@syncfusion/ej2-react-inplace-editor)    | npm install @syncfusion/ej2-react-inplace-editor | InPlaceEditor |

### Syncfusion React Inputs

The Syncfusion React Input components comes with a collection of form components which is useful to get different input values from the users such as text, numbers, patterns, color and file inputs.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-inputs](https://www.npmjs.com/package/@syncfusion/ej2-react-inputs)    |npm install @syncfusion/ej2-react-inputs | <li>ColorPicker</li> <li>MaskedTextBox</li> <li>NumericTextBox</li> <li>Slider</li> <li>Signature</li> <li>Textbox</li> <li>Uploader</li> |

### Syncfusion React Kanban

The Kanban Board component is an efficient way to visualize workflow at each stage along its path to completion. The control supports necessary features to design task scheduling applications. The key features are swimlanes, customizable cards, binding from local and remote data sources, columns mapping, stacked headers, WIP validation, templating, responsiveness, filtering, and editing.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-kanban](https://www.npmjs.com/package/@syncfusion/ej2-react-kanban)    | npm install @syncfusion/ej2-react-kanban | Kanban |

### Syncfusion React Layouts

The Syncfusion Layout package contains Cards, Avatars, Splitter and Dashboard Layout components.

* The `Card` is a small container in which user can show defined content in specific structure.

* The `Avatars` are icons, initials or figures representing a particular person, used in popular media formats like images, SVG, font icons, and letters.

* The `splitter` is container component which used to construct different layouts using multiple and nested panes.

* The `Dashboard Layout` is a grid structured layout component that helps to create a dashboard with panels. Panels hold the UI components and allow resize, reorder, drag-n-drop, remove and add options. This allows users to easily place the components at the desired position within the grid layout.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-layouts](https://www.npmjs.com/package/@syncfusion/ej2-react-layouts)    |npm install @syncfusion/ej2-react-layouts | <li>Avatar</li> <li>Card</li> <li>Dashboard Layout</li> <li>Splitter</li> |

### Syncfusion React LinearGauge

The Syncfusion Linear Gauge is used for visualizing numeric values in a linear scale with features like multiple axes, different orientations, and more. The appearance of the gauge can be completely customized to simulate a thermometer, pressure gauge, ruler, etc.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-lineargauge](https://www.npmjs.com/package/@syncfusion/ej2-react-lineargauge)    | npm install @syncfusion/ej2-react-lineargauge | LinearGauge |

### Syncfusion React Lists

The Syncfusion React ListView component allows to select an item or multiple items from a list-like interface and represents the data in an interactive hierarchical structure across different layouts or views. Lists are used for displaying data, data navigation, and data entry.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-lists](https://www.npmjs.com/package/@syncfusion/ej2-react-lists)    | npm install @syncfusion/ej2-react-lists | ListView |

### Syncfusion React Maps

The Syncfusion React Maps is used to visualize the geographical data and represent the statistical data of a particular geographical area on earth with user interactivity, and provides various customizing options.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-maps](https://www.npmjs.com/package/@syncfusion/ej2-react-maps)    | npm install @syncfusion/ej2-react-maps | Maps |

### Syncfusion React Navigations

A package of React navigation components such as Accordion, Breadcrumb, ContextMenu, MenuBar, Tabs, Toolbar, TreeView, and Sidebar.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-navigations](https://www.npmjs.com/package/@syncfusion/ej2-react-navigations)    |npm install @syncfusion/ej2-react-navigations | <li>Accordion</li> <li>Breadcrumb</li> <li>ContextMenu</li> <li>MenuBar</li> <li>Tabs</li> <li>Toolbar</li> <li>TreeView</li> <li>Sidebar</li> |

### Syncfusion React Notifications

The Syncfusion React Notification component is used to notify status or summary information to the end-users.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-notifications](https://www.npmjs.com/package/@syncfusion/ej2-react-notifications)    |npm install @syncfusion/ej2-react-notifications | <li>Badge</li> <li>Spinner</li> <li>Toast</li> |

### Syncfusion React PdfViewer

The Syncfusion React PDF Viewer supports viewing and reviewing PDF files in web applications and also printing them. The thumbnail, bookmark, hyperlink, and table of contents supports provide easy navigation within and outside the PDF files. The form-filling support provides a platform to fill and print with AcroForms. The PDF files can be reviewed with the available annotation tools.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-pdfviewer](https://www.npmjs.com/package/@syncfusion/ej2-react-pdfviewer)    | npm install @syncfusion/ej2-react-pdfviewer | PdfViewer |

### Syncfusion React PivotTable

The Syncfusion React Pivot Table is a powerful control used to organize and summarize business data and display the result in a cross-table format. It includes major functionalities such as data binding, drilling up and down, Excel-like filtering and sorting, editing, Excel and PDF exporting, several built-in aggregations, pivot table field list, and calculated fields.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-pivotview](https://www.npmjs.com/package/@syncfusion/ej2-react-pivotview)    | npm install @syncfusion/ej2-react-pivotview | PivotTable |

### Syncfusion React Popups

A package of Popup components Dialog and Tooltip are used to display information or to get input from the users in a popup.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-popups](https://www.npmjs.com/package/@syncfusion/ej2-react-popups)    |npm install @syncfusion/ej2-react-popups | <li>Dialog</li> <li>Tooltip</li> |

### Syncfusion React ProgressBar

The Progress Bar can be used to visualize the changing status of an extended operation such as a download, file transfer, or installation. All the progress bar elements are rendered using scalable vector graphics (SVG) to ensure the quality of the visual experience.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-progressbar](https://www.npmjs.com/package/@syncfusion/ej2-react-progressbar)    | npm install @syncfusion/ej2-react-progressbar | ProgressBar |

### Syncfusion React QueryBuilder

The Syncfusion React QueryBuilder package contains the QueryBuilder component that allows the users to create and edit filters. It supports data binding, templates, validation, and horizontal and vertical orientation.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-querybuilder](https://www.npmjs.com/package/@syncfusion/ej2-react-querybuilder)    | npm install @syncfusion/ej2-react-querybuilder | QueryBuilder |

### Syncfusion React RichTextEditor

The RichTextEditor component is the HTML and markdown editor that provides the best user experience for creating, updating, and formatting the content.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-richtexteditor](https://www.npmjs.com/package/@syncfusion/ej2-react-richtexteditor)    | npm install @syncfusion/ej2-react-richtexteditor | RichTextEditor |

### Syncfusion React Schedule

The Syncfusion React Scheduler component is an event calendar that facilitates users with the common Outlook-calendar features, thus allowing them to plan and manage their events/appointments and their time in an efficient way.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-schedule](https://www.npmjs.com/package/@syncfusion/ej2-react-schedule)    | npm install @syncfusion/ej2-react-schedule | Schedule |

### Syncfusion React SplitButtons

The Syncfusion React SplitButtons package contains UI components such as DropDownButton, SplitButton, ProgressButton, and ButtonGroup components. DropDownButton and SplitButton component display a list of items when a button is clicked and the ButtonGroup can be used for easy navigation.

<!-- markdownlint-disable MD033 -->

|Package Name  |Installation command|Components |
|--------|--------|-------|
| [ej2-react-splitbuttons](https://www.npmjs.com/package/@syncfusion/ej2-react-splitbuttons)    |npm install @syncfusion/ej2-react-splitbuttons | <li>ButtonGroup</li> <li>DropDownButton</li> <li>ProgressButton</li> <li>SplitButton</li> |

### Syncfusion React Spreadsheet

The Syncfusion React Spreadsheet is an user interactive component to organize and analyze data in tabular format with configuration options for customization. It will load data by importing an excel file or from a data source, such as RESTful JSON data services and local JavaScript object array binding. The populated data can be exported as Excel with xlsx, xls and csv formats.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-spreadsheet](https://www.npmjs.com/package/@syncfusion/ej2-react-spreadsheet)    | npm install @syncfusion/ej2-react-spreadsheet | Spreadsheet |

### Syncfusion React TreeGrid

The Syncfusion React Tree Grid is a feature-rich control used to visualize self-referential and hierarchical data effectively in a tabular format. It can pull data from data sources such as an enumerable collection of records, RESTful services, OData services, WCF services, or DataManager. It also expands or collapses child data using the tree column.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-treegrid](https://www.npmjs.com/package/@syncfusion/ej2-react-treegrid)    | npm install @syncfusion/ej2-react-treegrid | TreeGrid |

### Syncfusion React TreeMap

The Syncfusion React TreeMap is a feature-rich component used to visualize both hierarchical and flat data. The look and feel of the treemaps can be customized by using the built-in features like color mapping, legends, and label templates.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-treemap](https://www.npmjs.com/package/@syncfusion/ej2-react-treemap)    | npm install @syncfusion/ej2-react-treemap | TreeMap |

### Syncfusion React WordProcessor

The Syncfusion React Word Processor (Document Editor) is a component with editing capabilities like Microsoft Word. It is used to create, edit, view, and print Word documents. It provides all the common Word processing features including editing text, formatting contents, resizing images and tables, finding and replacing text, bookmarks, tables of contents, printing, and importing and exporting Word documents.

|Package Name  |Installation command|Components  |
|--------|--------|-------|
| [ej2-react-documenteditor](https://www.npmjs.com/package/@syncfusion/ej2-react-documenteditor)    | npm install @syncfusion/ej2-react-documenteditor | DocumentEditor |

## See also

* [Installation with npm CLI](https://ej2.syncfusion.com/react/documentation/installation/installation/)

* [Download JavaScript – EJ2 Installer](https://ej2.syncfusion.com/react/documentation/installation/web-installer/download/)

* [Product Development Life Cycle](https://www.syncfusion.com/support/product-lifecycle/)

* [Update npm Packages](https://ej2.syncfusion.com/react/documentation/upgrade/update-npm-package/)