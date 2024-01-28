import React from 'react';
import GoogleMapReact from 'google-map-react';

const Contact = () => {
  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div>
     
         
            <div style={{ height: '100vh', width: '100%' }}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "786189333" }}  
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
              </GoogleMapReact>
            </div>
          </div>
    
    
  );
};

export default Contact;
