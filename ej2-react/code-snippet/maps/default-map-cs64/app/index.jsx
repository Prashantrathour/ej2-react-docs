import { world_map } from 'world-map.ts';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MapsComponent, LayersDirective, LayerDirective, MarkersDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';
ReactDOM.render(<MapsComponent id="maps">
                <Inject services={[Marker]}/>
                    <LayersDirective>
                        <LayerDirective shapeData={world_map}>
                        <MarkersDirective>
                                        <MarkerDirective visible={true} height={30} width={30} template='<div id="marker1">Europe</div>' dataSource={[{ latitude: 49.95121990866204, longitude: 18.468749999999998 }]}>
                                        </MarkerDirective>
                                        <MarkerDirective visible={true} height={30} width={30} template='<div id="marker2">North America</div>' dataSource={[{ latitude: 59.88893689676585, longitude: -109.3359375 }]}>
                                        </MarkerDirective>
                                        <MarkerDirective visible={true} height={30} width={30} template='<div id="marker3">South America</div>' dataSource={[{ latitude: -6.64607562172573, longitude: -55.54687499999999 }]}>
                                        </MarkerDirective>
                                        </MarkersDirective>
                        </LayerDirective>
                    </LayersDirective>
                </MapsComponent>, document.getElementById("maps"));
