import React from "react";
import ReactDOM from "react-dom";
import { FileManager, FileNavigator } from '@opuscapita/react-filemanager';
import connectorNodeV1 from '@opuscapita/react-filemanager-connector-node-v1';

// this line is new
// we now have some nice styles on our react app
import "index.scss";
let HelloWorld = () => {
  return <h1>Hello there World!</h1>
}
const apiOptions = {
  ...connectorNodeV1.apiOptions,
  apiRoot: window.location.protocol+"//" +window.location.host // Or you local Server Node V1 installation.
}
ReactDOM.render(
  <FileManager>
  <FileNavigator
    id="filemanager-1"
    api={connectorNodeV1.api}
    apiOptions={apiOptions}
    capabilities={connectorNodeV1.capabilities}
    listViewLayout={connectorNodeV1.listViewLayout}
    viewLayoutOptions={connectorNodeV1.viewLayoutOptions}
  />
</FileManager>,
  document.getElementById("root")
);
