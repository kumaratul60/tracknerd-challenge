import React, { useState, useEffect } from "react";
import { ref, onValue } from "firebase/database";
import FirebaseConfig from "../helper/firebaseConfig";

function Map({ onVehicleClicked }) {
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [dummyLat, setDummyLat] = useState(null);
  const [dummyLong, setDummyLong] = useState(null);
  // const [vehicleData, setVehicleData] = useState(null);
  const db = FirebaseConfig();

  useEffect(() => {
    getLocation();
  }, [lat, long]);

  const getLocation = () => {
    // const dbRef = ref((db));
    // const id = onVehicleClicked.id;
    // const reg = onVehicleClicked.registrationNumber;
    // console.log(`${id}-${reg}/location`, "id");
    // const dbRef = ref(db, `${id}-${reg}/location`);

    // Hardcoding  this because above dbRef for jeewan account is not working

    const dummyRef = ref(db, "99-WB 73 E 4299/location");
    const allRef = ref(db);

    onValue(dummyRef, (snapshot) => {
      const vehicleData = snapshot.val();
      if (vehicleData) {
        const { latitude, longitude } = vehicleData;
        setDummyLong(longitude);
        setDummyLat(latitude);
      }
    });

    onValue(allRef, (snapshot) => {
      const vehicleData = snapshot.val();
      if (vehicleData) {
        const { latitude, longitude } = vehicleData;
        setLong(longitude);
        setLat(latitude);
      }
    });
  };

  // Doing this as no live data in jewan 6 Vehicles
  // if jeewan or someone account has data then it will fetch there otherwise dummy

  let latFinal = lat ? lat : dummyLat;
  let longFinal = long ? long : dummyLong;
  const reg = onVehicleClicked?.registrationNumber;
  console.log(reg);

  return (
    <div>
      {dummyLat && dummyLong && (
        <h1 className="my-3 ">
          This location is fetched from Vehicle WB 73 E 4299 as {reg} has no
          data in it
        </h1>
      )}
      <iframe
        id="iframeId"
        title="my-map"
        src={`https://maps.google.com/maps?q=${latFinal},${longFinal}&hl=es;&output=embed`}
        height="500px"
        width="200%"
      ></iframe>
    </div>
  );
}
export default Map;
