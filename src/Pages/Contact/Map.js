import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

import Spinner from "../../components/UI/Spinner";

const containerStyle = {
  width: "100%",
  height: "500px",
};

function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API,
  });

  const position = useMemo(() => ({ lat: 52.13, lng: -106.663 }), []);

  if (!isLoaded) return <Spinner />;

  return (
    <GoogleMap zoom={15} center={position} mapContainerStyle={containerStyle}>
      <MarkerF position={position} />
    </GoogleMap>
  );
}

export default Map;
