import { useState } from "react";
import ReactMapGL, { Marker, setRTLTextPlugin } from "react-map-gl";
import Image from 'next/image';

setRTLTextPlugin(
  "https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js",
  null,
  true
);

export default function MyMap() {
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 35.691671,
    longitude: 51.429413,
    zoom: 16,
  });

  return (
    <>
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoibWVoZGktZnJvbnRlbmQiLCJhIjoiY2t2Z21vNWF5MDE1czJ2bjBoOGt5b2thMSJ9.CVP6KrzZE6KB0n49UrYCDQ"
        {...viewport}
        onViewportChange={(nextViewport) =>
          setViewport({ ...nextViewport, width: "100%" })
        }>
        <Marker
          latitude={35.69146}
          longitude={51.42927}
          offsetLeft={-12.5}
          offsetTop={-34}>
          <Image width={20} height={30} src="/images/location-pin.svg" />
        </Marker>
      </ReactMapGL>
    </>
  );
}

// import * as React from 'react';
// import Map from 'react-map-gl';

// export default function MyMap() {
//   return (
//     <Map
//       initialViewState={{
//         longitude: -122.4,
//         latitude: 37.8,
//         zoom: 14
//       }}
//       style={{width: 600, height: 400}}
//       mapStyle="mapbox://styles/mapbox/streets-v9"
//     />
//   );
// }
