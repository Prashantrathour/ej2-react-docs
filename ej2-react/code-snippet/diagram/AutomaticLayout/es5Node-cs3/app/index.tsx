{% raw %}


import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  Diagram,
  DiagramComponent,
  Inject,
  ConnectorModel,
  NodeModel,
  DiagramConstraints,
  HierarchicalTree,
  TextModel,
  DataBinding,
  Rect,
} from "@syncfusion/ej2-react-diagrams";
import { DataManager, Query } from "@syncfusion/ej2-data";
//Initializes data source
let data: object[] = [
  {
    Name: "Steve-Ceo",
  },
  {
    Name: "Kevin-Manager",
    ReportingPerson: "Steve-Ceo",
  },
  {
    Name: "Peter-Manager",
    ReportingPerson: "Kevin-Manager",
  },
  {
    Name: "John- Manager",
    ReportingPerson: "Peter-Manager",
  },
  {
    Name: "Mary-CSE ",
    ReportingPerson: "Peter-Manager",
  },
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));

function App() {
  return(
  <DiagramComponent
    id="container"
    width={"100%"}
    height={"550px"}
    //Uses layout to auto-arrange nodes on the diagram page
    layout={{
      //Sets layout type
      type: "HierarchicalTree",
      //set layout alignment
      bounds: new Rect(0, 0, 500, 500),
      horizontalSpacing: 25,
      verticalSpacing: 30,
      horizontalAlignment: "Left",
      verticalAlignment: "Top",
    }}
    dataSourceSettings={{
      id: "Name",
      parentId: "ReportingPerson",
      dataManager: items,
    }}
    getNodeDefaults={(obj: NodeModel) => {
      obj.shape = {
        type: "Text",
        content: (
          obj.data as {
            Name: "string";
          }
        ).Name,
      };
      obj.style = {
        fill: "None",
        strokeColor: "none",
        strokeWidth: 2,
        bold: true,
        color: "white",
      };
      obj.width = 100;
      obj.height = 40;
      obj.borderColor = "white";
      obj.backgroundColor = "#6BA5D7";
      obj.borderWidth = 1;
      return obj;
    }}
    getConnectorDefaults={(connector: ConnectorModel, diagram: Diagram) => {
      connector.style = {
        strokeColor: "#6BA5D7",
        strokeWidth: 2,
      };
      connector.targetDecorator.style.fill = "#6BA5D7";
      connector.targetDecorator.style.strokeColor = "#6BA5D7";
      connector.type = "Orthogonal";
      return connector;
    }}
  >
    <Inject services={[DataBinding, HierarchicalTree]} />
  </DiagramComponent>
  );
}

const root = ReactDOM.createRoot(document.getElementById("diagram"));
root.render(<App />);


{% endraw %}