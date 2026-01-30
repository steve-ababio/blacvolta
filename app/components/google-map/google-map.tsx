
'use client';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

type Props = {
  lat: number;
  lng: number;
  zoom?: number;
};

const containerStyle = {
  width: '100%',
  height: '400px',
};

export default function Map({ lat, lng, zoom = 14 }: Props) {
    if(!lat){
        lat = -33.8567844;
    }
    if(!lng){
        lng = 151.213108;
    }
  const { isLoaded } = useJsApiLoader({
    // googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    googleMapsApiKey:'AIzaSyDvK7kMQbf7Nb4o1lRJt9Vhin1F2PBk3AY'
  });

  if (!isLoaded) return <p>Loading map...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{ lat, lng }}
      zoom={zoom}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
}
// 'use client'
// import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

// interface GoogleMapProps{
//     lat:number,
//     long:number,
// }
// export default function GoogleMap({long,lat}:GoogleMapProps){
//     const src = `https://www.google.com/maps?q=${lat},${long}&z=${15}&output=embed`;
//     return (
//     //     <APIProvider apiKey={'AIzaSyDvK7kMQbf7Nb4o1lRJt9Vhin1F2PBk3AY'} onLoad={() => console.log('Maps API has loaded.')}>
//     //         <Map
//     //             defaultZoom={13}
//     //             defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
//     //             onCameraChanged={ (ev: MapCameraChangedEvent) =>
//     //             console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
//     //         }>
//     //         </Map>
//     //   </APIProvider>
//       <div className="w-full h-[400px] rounded-lg overflow-hidden">
//         <iframe
//           src={src}
//           width="100%"
//           height="100%"
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//         />
//       </div>
//     )
// }