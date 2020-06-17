import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';





const SimpleMap = (props: any) => {

  const getMapOptions = (maps: any) => {
    return {
      disableDefaultUI: false,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };
  

    const [center, setCenter] = useState({lat: 6.4530556, lng: 3.3958333 });
    const [zoom, setZoom] = useState(11);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCbGOGzub_QrmQ55pGlFcITmpl60WM1ykg' }}
          defaultCenter={center}
          defaultZoom={zoom}
          options={getMapOptions}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker
            lat={6.4530556}
            lng={3.3958333}
            name="My Marker"
            color="blue"
          />
        </GoogleMapReact>
      </div>
    );
    
    
}

export default SimpleMap;