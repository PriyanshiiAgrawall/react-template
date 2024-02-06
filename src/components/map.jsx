/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./map.css"

import {
    ComposableMap,
    Geographies,
    Geography,
    Marker,
    Annotation,
    ZoomableGroup,
} from "react-simple-maps";

import ReactTooltip from "react-tooltip";

const markers = [
    {
        markerOffset: -15,
        name: "San Paulo",
        coordinates: [-58.3816, -34.6037],
    },
];

const geoUrl = "https://raw.githubusercontent.com/zcreatuvelabs/react-simple-maps/master/topojson-maps/world-110.json";
const Maps = () => {
    return (
        <div
            className="App"
            style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "coloumn",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1>
                MAPS
            </h1>
            <div style={{
                width: "1400px",
                borderStyle: "double"
            }}>
                <ComposableMap data-tip="">
                    <ZoomableGroup zoom={1}>
                        {" "}
                        <Geographies geography={geoUrl}>
                            {({ Geographies }) =>
                                geographies.map((geo) => (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                    />
                                ))}
                        </Geographies>
                    </ZoomableGroup>
                </ComposableMap>
            </div>
        </div>
    )
};

export default Maps;